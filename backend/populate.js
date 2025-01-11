import Connection from "./database/db.js";
import Product from "./model/product.js";
import dotenv from "dotenv";
import fs from "fs";

const productData = JSON.parse(fs.readFileSync("./ProductData.json", "utf-8"));

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

const addProductsData = async()=>{
    try {
        await Product.deleteMany();
        await Product.create(productData);
        console.log("Data added successfully");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

addProductsData();
