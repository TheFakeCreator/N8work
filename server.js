import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;



app.get('/api/wikipedia', async (req, res) => {
    const title = req.query.title;
    const url = `https://en.wikipedia.org/w/api.php`;
    const params = {
        action: 'query',
        format: 'json',
        titles: title,
        prop: 'extracts',
        explaintext: true,
    };

    try {
        const response = await axios.get(url, { params });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
