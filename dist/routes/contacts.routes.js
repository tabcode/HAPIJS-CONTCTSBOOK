"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var contacts_controller_1 = require("../controllers/contacts.controller");
var routes = function (server) {
    server.route({
        method: 'GET',
        path: '/',
        handler: contacts_controller_1.Home
    });
    server.route({
        method: 'GET',
        path: '/app',
        handler: contacts_controller_1.app
    });
};
exports.routes = routes;
