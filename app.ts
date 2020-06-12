import express from 'express';
import { DataStore } from './data/data';
import { apiGetPosts } from './api/posts/apiGetPosts';
const app = express();

// router
app.get('/', (req, res, next) => {
    res.send('Hi typscript ...');
})

// posts
app.get('/posts', (req, res, next) => {
    res.json(DataStore.posts);
})

// posts id
app.get('/posts/:id', apiGetPosts)

// todos
app.get('/todos', (req, res, next) => {
    res.json(DataStore.todos);
})

app.listen(process.env.PORT || 8096, () => {
    console.log('Start server ...');
});