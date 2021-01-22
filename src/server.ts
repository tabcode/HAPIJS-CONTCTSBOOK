import { Server } from "@hapi/hapi";
import { routes } from './routes/contacts.routes';
import { Request } from '@hapi/hapi';
const init = async () => {
    const PORT: string | number = process.env.PORT || 3000;
    const server: Server = new Server({
        port: PORT
    });

    await server.register(require('@hapi/vision'));
    await server.register({
        plugin: require('inert')
    });

    server.route({
        method: 'GET',
        path: '/public/{folder}/{filename}',
        handler: {
            file: function (request: Request) {
                return `src/views/public/${request.params.folder}/${request.params.filename}`;
            }
        }
    });

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views',
        layout: true,
        layoutPath: 'views/layout',
        partialsPath: 'views/partials'
    });


    routes(server);
    await server.start();
};
init();