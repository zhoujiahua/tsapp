"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data/data");
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const app = express_1.default();
// router
app.get('/', (req, res, next) => {
    res.send('Hi typscript ...');
});
// posts
app.get('/posts', (req, res, next) => {
    res.json(data_1.DataStore.posts);
});
// posts id
app.get('/posts/:id', apiGetPosts_1.apiGetPosts);
// todos
app.get('/todos', (req, res, next) => {
    res.json(data_1.DataStore.todos);
});
app.listen(process.env.PORT || 8091, () => {
    console.log('Start server ...');
});
