import axios from "axios";
export const getDataByParams = async (productParams) => {
    const data = await axios.get(`http://localhost:8000/product`, {
        params: {
            company: productParams.selectedCompany ? productParams.selectedCompany : null,
            name: productParams.productName ? productParams.productName : null,
            minRating: productParams.minRating ? productParams.minRating : null,
            maxRating: productParams.maxRating ? productParams.maxRating : null,
            minPrice: productParams.minPrice ? productParams.minPrice : null
        }
    });
    return data;
}

export const getAllProducts = async()=>{
    const data = axios.get(`http://localhost:8000/get-all-products`);
    return data;
}