import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export const CartDetail = () => {
  const value = useContext(cartContext);

  const { productsOnCart,getTotalPrice } = value;
  console.log(productsOnCart);

  return (
    <div className="text-center">{
      productsOnCart.map((producto) => (
        <div>
          <p>Titulo {producto.title}</p>
          <p>Precio {producto.price}</p>
          <p>Cantidad {producto.quantity}</p>
          <p>{producto.totalPrice}</p>
          <p><b>
            Precio Total:
            {getTotalPrice()}
          </b></p>
          <p><b>
             Total productos:
            {getTotalPrice()}
          </b></p>
        </div>
      ))
    }</div>

  );
};
