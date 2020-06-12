"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetPosts = void 0;
const data_1 = require("./../../data/data");
const postSummary_1 = require("./../../models/shared/postSummary");
exports.apiGetPosts = (req, res) => {
    const data = data_1.DataStore.posts.find((item) => {
        return item.id == req.params.id;
    });
    if (data) {
        return res.json(new postSummary_1.PostSummary(data));
    }
    else {
        return res.status(404).json({ msg: 'no data' });
    }
};
