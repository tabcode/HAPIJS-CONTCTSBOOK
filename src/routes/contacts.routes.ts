import { Server } from '@hapi/hapi';
import { Home,app } from '../controllers/contacts.controller';

export const routes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: Home
    });

    server.route({
        method: 'GET',
        path: '/app',
        handler: app
    });
};