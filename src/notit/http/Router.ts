import express from 'express';

export default class Router 
{
    readonly name: string;
    readonly object: string;
    protected router: express.Router;

    constructor(
        name: string,
        object: string,
    ) {
        this.name = name;
        this.object = object;
        this.router = express.Router({strict: true});
    }
}