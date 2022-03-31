import {useCart} from "react-use-cart";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState, useEffect } from 'react'


const Product = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loding, setLoding] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoding(true);
      const response = await fetch("https://babi-rental.herokuapp.com/items");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoding(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loding = () => {
    return (
      <div className='text-center'>
         Loading...   
      </div>
    )
  };

const filterProduct=(cat)=>{
  const updateList=data.filter((x)=>x.catagory===cat);
  setFilter(updateList);
}

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center  my-2 py-3'>
          <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("camera")}>Camera</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("laptop")}>Laptop</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("speaker")}>Speaker</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("generator")}>Generator</button>
        </div>
        
        <div className='rent-list-container '>
        {filter.map((product) => {
          return (
            <div className="rent-list" >
              <img className="item-picture" src={product.img} alt={product.model} />
               <h2 className="item-model" > {product.model} </h2> 
               <p className="item-price" > 7 hours - Rs. {product.price} </p>
               <div className='buttons d-flex justify-content-center  my-2 py-3'>
               <button className='btn btn-primary' > <AddShoppingCartIcon className="me-2"/>Add to cart</button>
               </div >
               <br/>
               </div>
              
          )
        })}
        </div>
      </>
    )
  }
  return (
    <div>
      <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center '>Our Stocks</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loding ? <Loding /> : <ShowProducts />}</div>
      </div>

    </div>
  )
}

export default Product