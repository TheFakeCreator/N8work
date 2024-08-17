import axios from 'axios';
import { response } from 'express';
import wbk from'wikibase-sdk';

const wdk = wbk({
    instance: 'https://www.wikidata.org',
    sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

const url = wdk.searchEntities({
    search: 'Elon Musk',
    format: 'json',
    language: 'en',
    limit:30,
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
    console.log(search_items);
})