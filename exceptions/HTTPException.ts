class HTTPException {
    constructor(public status: number, public message: string, public errors?: any) {
        this.status = status
        this.message = message
        this.errors = errors || {}
    }
}
export default HTTPException