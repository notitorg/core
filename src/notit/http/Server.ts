import express from 'express';
import Settings from '../settings/Server';

export default class Server {
    app: express.Express;

    constructor() 
    {
        this.app = express();
    }

    run(): void
    {
        this.app.listen(
            parseInt(Settings.get('api.port')),
            Settings.get('api.hostname'),
            () => console.log('Starting server.'),
        )
    }
}