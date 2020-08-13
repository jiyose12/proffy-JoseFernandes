import {Request, Response} from 'express';
import db from '../database/connection';

export default class AccountController {
    
    async createAccount(request: Request, response: Response){
        const { email, password, name} = request.body;

        await db('users').insert({
            name,
            email,
            password,
        }).returning('id');

        return response.status(201).send();
    }
}