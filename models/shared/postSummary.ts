export class PostSummary {
    userId: Number;
    id: Number;
    title: String;
    body: String;

    constructor(data: any) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
    }
}