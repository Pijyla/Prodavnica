import React, {useEffect, useState} from "react";
import Carousel from "./layouts/Carousel";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);


  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, [])
    
  return (
    <div>
      <h1>Proizvodi</h1>
     <div>
     <div className="album py-5 bg-light">
        <div className="container">
    
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              {products.map((product) => (
                <div key={product.id} className="col">
                  <div className="card shadow-sm">
                    <img src={product.image} alt={product.title} style={{'height' : '200px', 'objectFit' : 'contain'}} className="bd-placeholder-img card-img-top" />
                    <div className="card-body">
                      <p className="card-text">{product.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <Link to={`/product/${product.id}`}><button type="button" className="btn btn-sm btn-outline-secondary">Pogledaj</button></Link>
                        </div>
                        <small className="text-muted">{product.price}$</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          
          </div>
        </div>
      </div>
     </div>

      
    </div>
  );
}

export default Products;
