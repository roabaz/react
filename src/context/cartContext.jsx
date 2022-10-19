import { useState, createContext } from "react";
import { isElementOfType } from "react-dom/test-utils";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const isInCart = (id) => {
    const productExists = productsOnCart.some(element => element.id === id);
    return productExists;
  }

  const [productsOnCart, setProductsOnCart] = useState([]);

  const addNewProduct = (item, quantity) => {
    console.log(item.id)
    if (isInCart(item.id)) {
      const productosOnCartCopy = [...productsOnCart];
      const posProduct = productosOnCartCopy.findIndex((elemento) => elemento.id === item.id);
      productosOnCartCopy[posProduct].quantity += quantity;
      productosOnCartCopy[posProduct].totalPrice = productosOnCartCopy[posProduct].quantity * productosOnCartCopy[posProduct].price;
      setProductsOnCart(productosOnCartCopy);
    } else {
      const newProduct = { ...item, quantity: quantity, totalPrice: quantity * item.price, };
      const productosOnCartCopy = [...productsOnCart]
      productosOnCartCopy.push(newProduct);
      setProductsOnCart(productosOnCartCopy);
    }
  }

  const getTotalPrice = () => {
    const total = productsOnCart.reduce((acc, curr) => acc + curr.totalPrice, 0);
    return total;
  }

  const getTotalProducts = () => {
    const totalprodutcs = productsOnCart.reduce((acc, curr) => acc + curr.quantity, 0);
    return totalprodutcs;
  }

  const removeItem = (id)=> {
    const newProducts = productsOnCart.filter((elemento)=>elemento.id !== id);
    setProductsOnCart(newProducts);
  }

  const clear = () => {
    const cleanCart = [];
    setProductsOnCart(cleanCart);
  }

  return (
    <cartContext.Provider value={{ productsOnCart, addNewProduct, getTotalPrice, getTotalProducts, removeItem, clear }}>
      {children}
    </cartContext.Provider>
  )

};
