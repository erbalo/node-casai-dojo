import app from './app';

import * as http from 'http';

const server = http.createServer(app);
const port = 8001;

const onListening = (server: http.Server) => {
    return (): void => {
        let address = server.address();
        let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
        console.log(`Listening at ${bind}`);
    }
}

(async () => {
    server.listen(port)

    server.on('listening', onListening(server));
})();
