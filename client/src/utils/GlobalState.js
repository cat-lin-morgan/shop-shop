import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    })
    // console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};

// I RUV YOUUU 
// CAT IS BEST GIRL


// props = {
//     a: a,
//     b: b,
//     c: c,
// };

// <Example {...props} />

// <Example
//     a={props.a}
//     b={props.b}
//     c={props.c}
// />


// <Example props={props} />


// const Example = (props) => {
//     props = {
//         props: {
//             a: a,
//         }
//     }
// }