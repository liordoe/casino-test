import bodyParser from 'body-parser';
import clientConfig from 'config/webpack/client.config';
import ffp from 'find-free-port';
import Router from 'server/routes/Router';
import express from 'express';
import * as mongoose from 'mongoose';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
    }

    async init() {
        await this.initMiddleware();
        await this.initDBConnection();
        await this.initRouter();
    }

    public async listen() {
        const [freePort] = await ffp(process.env.PORT);
        await new Promise(resolve => this.app.listen(freePort, resolve));
        return freePort;
    }

    /**
     * Use the order to provide correct initializing
     */
    private async initMiddleware() {
        this.app.use(express.static(clientConfig.output.path));

        // uncomment after placing your favicon in /public
        //src.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private async initRouter() {
        this.app.use(Router);
    }

    private async initDBConnection() {
        const {
            MONGO_USER = '',
            MONGO_PASSWORD = '',
            MONGO_PATH,
            MONGO_DB_NAME,
        } = process.env;

        return mongoose.connect(`mongodb://${ MONGO_USER }:${ MONGO_PASSWORD }@${ MONGO_PATH }/${ MONGO_DB_NAME }`, {
            useNewUrlParser: true,
            useCreateIndex: true,
        });
    }
}

export default App;
