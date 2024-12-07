import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        //TODO provjeriti da li postoji u korpi, ako postoji, povecati kolicinu.. .
        //dodati da se cuva u local storage
        setCart((prev) => [...prev, product]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart}} >
            {children}
        </CartContext.Provider>
    )
}
