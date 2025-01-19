import { createContext } from "react";
import { products} from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₱";
    const deliveryfee = 50;

    const value = {
        products,currency,deliveryfee 
    }
    

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;