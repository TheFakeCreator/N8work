import axios from 'axios';

async function fetchWikipediaArticle(title) {
    const url = `/api/w/api.php`;
    const params = {
        action: 'query',
        format: 'json',
        titles: title,
        prop: 'extracts',
        explaintext: true,
    };
    try {
        const response = await axios.get(url, { params });
        const pages = response.data.query.pages;
        if (!pages) {
            throw new Error('No pages found in response');
        }
        const page = pages[Object.keys(pages)[0]];
        if (!page || page.missing) {
            throw new Error('Article not found');
        }
        return page.extract;
    } catch (error) {
        console.error('Error fetching Wikipedia article:', error);
    }
}

fetchWikipediaArticle('Albert_Einstein').then(console.log);
