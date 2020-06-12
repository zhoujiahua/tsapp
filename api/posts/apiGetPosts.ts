import { DataStore } from './../../data/data';
import { RequestHandler } from 'express';
import { PostSummary } from './../../models/shared/postSummary';

export const apiGetPosts: RequestHandler = (req, res) => {
    const data: any = DataStore.posts.find((item: any) => {
        return item.id == req.params.id;
    })
    if (data) {
        return res.json(new PostSummary(data));
    } else {
        return res.status(404).json({ msg: 'no data' });
    }
}