import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const {cart} = useContext(CartContext);
    


  return (
    <div>
      <h1>Korpa</h1>

      {cart.length === 0 ? (
        <p>Vaša korpa je prazna</p>
      ) : (

        <div>

        <ul className="list-group mb-3">
        
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <img style={{'float': 'left', 'width': '50px'}} src={item.image} alt={item.title} />
              <h6 className="ml-3 my-0">{item.title}</h6>
              <small className="text-muted d-none">{item.description}</small>
            </div>
            <span className="text-muted"><strong>Cijena: {item.price}$</strong></span>
          </li>

        ))}
          
          
        </ul>


        <Link className=" float-right" to={'/checkout'}><button className="btn btn-success">Završi kupovinu</button></Link>

        </div>

      )}
    </div>

  );
}

export default Cart;
