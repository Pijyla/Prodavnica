import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const {id} = useParams();

  const [product, setProduct] = useState(null);

  const {addToCart} = useContext(CartContext);


  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id])

  if(!product) return <div>Učitavanje produkta...</div>
    
  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <section>
          <div className="container px-4 px-lg-5 my-5">
              <div className="row gx-4 gx-lg-5 align-items-center">
                  <div className="col-md-4 offset-md-2"><img className="card-img-top mb-5 mb-md-0" src={product.image} alt={product.title} /></div>
                  <div className="col-md-4">
                      <div className="small mb-1">SKU: BST-498</div>
                      <h1 className="display-5 fw-bolder">{product.title}</h1>
                      <div className="fs-5 mb-5">
                          
                          <span>{product.price}$</span>
                      </div>
                      <p className="lead">{product.description}</p>
                      <div className="d-flex">
                          <button className="btn btn-outline-dark flex-shrink-0" onClick={() => addToCart(product)}>
                              <i className="bi-cart-fill me-1"></i>
                              Dodaj u korpu
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <button onClick={() => addToCart(product)}>Dodaj u korpu</button>
      </div>
    </div>
  );
}

export default ProductDetails;
