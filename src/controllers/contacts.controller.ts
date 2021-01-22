import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import fetch from 'isomorphic-fetch';

export const Home = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        return h.view('index');
    } catch (error) {
        return h.response(error).code(500);
    }
};

export const app = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const newContacts = (await (await fetch('https://reqres.in/api/users')).json()).data;
        return h.view('contacts/list', { newContacts });
    } catch (error) {
        return h.response(error).code(500);
    }
};