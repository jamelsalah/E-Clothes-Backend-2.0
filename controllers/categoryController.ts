import { Request, Response } from "express";
import { Category } from "../models/category";
import { dataSource } from "../data-source";

async function getCategories(req:Request, res:Response) {
    const categories = await dataSource
    .getRepository(Category)
    .find();

    if(categories) {
        res.status(200).json(categories)
        return
    } else {
        res.status(400).json("Erro ao buscar Categorias");
    }
}

async function addCategory(req:Request, res:Response) {
    const { name , order } = req.body;

    const category = new Category;
    category.name = name;
    category.order = order;

    const newCategory = await dataSource.manager.save(category)

    if(newCategory) {
        res.status(200).json(newCategory)
        return
    } else {
        res.status(400).json("Erro ao criar Categoria");
    }
}

export default {
    getCategories,
    addCategory
}