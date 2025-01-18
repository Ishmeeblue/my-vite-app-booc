import { createContext } from "react";
import { product} from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₱";
    const deliveryfee = 50;

    const value = {
        product,currency,deliveryfee 
    }
    

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;