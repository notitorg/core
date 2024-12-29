export default class Query<T> {
    private query;

    constructor() {
        this.query = '';
    }

    getAll(): Array<T>
    {
        return [];
    }
}