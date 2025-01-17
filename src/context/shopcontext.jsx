import { createContext } from "react";
import { product} from "../assets/assets";

export const shopcontext = createContext();

const shopcontextprovider = (props) => {

    const currency = "₱";
    const deliveryfee = 50;

    const value = {
        product,currency,deliveryfee 
    }
    

    return(
        <shopcontext.Provider value={value}>
            {props.lippies}
        </shopcontext.Provider>
    )
}

export default shopcontextprovider;