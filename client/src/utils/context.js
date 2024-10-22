import { createContext, useEffect, useState } from "react";
import {useLoaderData, useLocation} from "react-router-dom"

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  const [cartItems , setCartItems] = useState([]);
  const [cartCount , setCartCount] = useState(0);
  const [cartSubTotal , setCartSubTotal] = useState(0)

  const location = useLocation();


  useEffect(() => {},[cartCount])

  const handleAddTocart = (product , quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id)
    if(index !== -1){
      items[index].attributes.quantity += quantity;
    }else{
      product.attributes.quantity = quantity
      items = [...items, product];
    }
  }


  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id)
    setCartItems(items)

  };


  const handleCartProductQuantity = (tryp, product) => {};

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartSubTotal,
        setCartSubTotal,
        cartCount,
        setCartCount,
        handleAddTocart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
