import dotenv from 'dotenv';
import * as path from 'path';
import App from 'server/services/App';

dotenv.config({
    path: path.join(process.env.PWD, 'config', '.env')
});

const app = new App();

app.init()
    .then(() => app.listen())
    .then(port => console.debug('Server started on port', port))
    .catch(err => console.error('Error happened during init process', err));
