import React, { useState } from 'react'
import { getDataByParams , getAllProducts } from './api/api.js';

const App = () => {
  const [productParams , setProductParams] = useState({
    selectedCompany: "",
    productName: "",
    minRating: "",
    maxRating: "",
    minPrice: ""
  });
  return (
    <div>
      <select
        id="company-select"
        value={productParams.selectedCompany}
        onChange={(e)=>setProductParams({...productParams, selectedCompany: e.target.value})}
      >
        <option value="">--Select a company--</option>
        <option value="ikea">Ikea</option>
        <option value="liddy">Liddy</option>
        <option value="caressa">Caressa</option>
        <option value="marcos">Marcos</option>
      </select>
      <p>You selected {productParams.selectedCompany}</p>
      <button onClick={async()=>{
        const data = await getDataByParams(productParams);
        console.log("The data is: ",data);
        }}>Submit</button>

      <input type="text" onChange={(e)=>setProductParams({...productParams, productName: e.target.value})} value={productParams.productName}/>
      <br/>
      <br/>
      <p>Min Price</p>
      <input type='number' onChange={(e)=>setProductParams({...productParams , minPrice: e.target.value})} value={productParams.minPrice}/>
      
      <br></br>

      <p>Get All products</p>
      <button onClick={async()=>{
        const data = await getAllProducts();
        console.log("All data is: ",data);
      }}>Click here to get all</button>
    </div>
  )
}

export default App