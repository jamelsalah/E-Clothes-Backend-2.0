import { Request, Response } from "express";
import { User } from "../models/user"
import { dataSource } from '../data-source'
import * as bcrypt from 'bcrypt'


async function AddUser(req: Request, res: Response){
    try {  
        const { email, name, password, phone } = req.body;

        const user = new User;
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 8);
        user.phone = phone;

        const userAlreadyExist = await dataSource
            .getRepository(User)
            .findOne({ where: { email: user.email }})

        if(userAlreadyExist) {
            return res.json("O Email já esta sendo Utilizado")
        }

        const newUser = await dataSource.manager.save(user)

        if(newUser) return res.status(200).json(newUser);
        else return res.status(400).json("Erro ao Cadastrar usuário");

    } catch (error) {
        return res.status(400).json("Erro ao Cadastrar usuário");
    }
}

async function auth(req: Request, res: Response): Promise<Response>  {
    const { email, password } = req.body;
    console.log(email, password)

    const user = await dataSource
        .getRepository(User)
        .findOne({ where: { email: email}})

    if(user) {
        const verifyPass = await bcrypt.compare(password, user.password)

        if(verifyPass) return res.status(200).json(user);
        else return res.status(400).json("Usuario ou Senha incorretos");
    } else return res.status(400).json("Usuario ou Senha incorretos");
}

export default {
    AddUser,
    auth
}
  