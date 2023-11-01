import { Request, Response } from "express";
import { Product } from "../models/product";
import { dataSource } from "../data-source";

async function getProducts(req:Request, res:Response) {
    const category = req.query.category;
    let gender = req.query.gender;
    console.log(category);
    console.log(gender)

    if(gender) {
        if(gender == "true") gender = true;
        else gender = false;

        const products = await dataSource
            .getRepository(Product)
            .find({ where: { category_name: category, gender: gender }});

        if(products) return res.status(200).json(products);
        else return res.status(400).json("Erro ao buscar os Produtos");
    } else {
        const products = await dataSource
            .getRepository(Product)
            .find({ where: { category_name: category }});

        if(products) return res.status(200).json(products);
        else return res.status(400).json("Erro ao buscar os Produtos");
    }
}

async function addProduct(req:Request, res:Response) {
    const { 
        category_id,
        category_name,
        brand,
        gender,
        name,
        description,
        price,
        promo,
        thumb_url,
        images_url,
        sizes,
    } = req.body;

    const product = new Product;
    product.category_id = category_id;
    product.category_name = category_name;
    product.brand = brand;
    product.gender = gender;
    product.name = name;
    product.description = description;
    product.price = price;
    product.promo = promo;
    product.thumb_url = thumb_url;
    product.images_url = images_url;
    product.sizes = JSON.stringify(sizes);

    const newProduct = await dataSource.manager.save(product)

    if(newProduct) return res.status(200).json(newProduct);
    else return res.status(400).json("Erro ao criar o Produto");
};

export default {
    getProducts,
    addProduct
}