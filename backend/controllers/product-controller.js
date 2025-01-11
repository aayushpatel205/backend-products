import Product from "../model/product.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({}); // find all products
        console.log("All products fetched successfully");
        return res.status(200).json(products);
    }catch(error){
        res.status(409).json({message: error.message});
        console.log("Failed to fetch all products",error);
    }
};

export const getProductByFilters = async (req, res) => {
    try{ 
        const { company , name , minRating , maxRating , minPrice } = req.query;
        console.log("Company:",company);

        const query = {};
        if(company){
            query.company = company;
        }

        if(name){
            query.name = { $regex: name, $options: "i" };
        }

        if(minRating){
            query.rating = { $gte: minRating };
        }

        if(maxRating){
            query.rating = { $lte: maxRating };
        }

        if(minPrice){
            query.price = { $gte: minPrice };
        }

        const products = await Product.find(query);
        return res.status(200).json(products);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};