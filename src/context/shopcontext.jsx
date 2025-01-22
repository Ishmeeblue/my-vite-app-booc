import { createContext, useEffect, useState } from "react";
import { products} from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₱";
    const deliveryfee = 50;
    const [cartItems,setCartItems] = useState({});


    const addToCart = async (itemId, shades) => {
    if (!shades) {
        toast.error('Select Product Shade');
        return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        if (cartData[itemId][shades]) {
            cartData[itemId][shades] += 1; 
        } else {
            cartData[itemId][shades] = 1; 
        }
    } else {
        cartData[itemId] = { [shades]: 1 }; 
    }

    setCartItems(cartData);
}

const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
        for (const shade in cartItems[itemId]) {
            totalCount += cartItems[itemId][shade];  
        }
    }
    return totalCount;
}

const updateQuantity = async (itemId,shades,quantity) => {

    let cartData = structuredClone(cartItems);

    cartData[itemId][shades] = quantity;

    setCartItems(cartData);
}

const value = {
    products, currency, deliveryfee,
    cartItems, addToCart,
    getCartCount,updateQuantity
}
    

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;