import axios from 'axios';
import { response } from 'express';
import wbk from'wikibase-sdk';
import { JSDOM } from 'jsdom';
import express from 'express';





const wdk = wbk({
    instance: 'https://www.wikidata.org',
    sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app">
      
    </div>
    <script type="module" src="/main.js"></script>
  </body>
</html>

`;

const dom = new JSDOM(html);
const document = dom.window.document;
const app = document.getElementById('app');

function getSearchQuery(searchQuery,searchQueryLimit){
    const url = wdk.searchEntities({
        search: searchQuery,
        format: 'json',
        language: 'en',
        limit: searchQueryLimit,
    })
    
    axios.get(url).then((response) => {
        const wikidata_response = response.data;
        const search_items = wikidata_response.search.map((item) => {
            return {
                id: item.id,
                label: item.label,
                desc: item.description,
            }
        })

        for(let i=0;i<search_items.length;i++){
            let qid = search_items[i].id;
            let label = search_items[i].label;
            let description = search_items[i].desc;
            const newElement = document.createElement('div');
            newElement.id = `${qid}`;
            newElement.className = `${label}`;
            newElement.textContent = `${description}`;

            app.appendChild(newElement);
        }
        console.log(dom.serialize());
    })
}

let searchQueryLimit = 30;
let searchQuery = 'Elon Musk';
getSearchQuery(searchQuery, searchQueryLimit);

