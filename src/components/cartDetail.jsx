import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import carritoImg from "../resources/img/vacio.png";

export const CartDetail = () => {
  const value = useContext(cartContext);

  const { productsOnCart, getTotalPrice, getTotalProducts, removeItem, clear } = value;
  console.log(productsOnCart);

  return (
    <>
      {
        productsOnCart.length > 0 ?

          <div className="text-center">{
            productsOnCart.map((producto) => (
              <>
                <div className="alert alert info">
                  <p>Titulo {producto.title}</p>
                  <p>Precio ${producto.price}</p>
                  <p>Cantidad {producto.quantity}</p>
                  <p>${producto.totalPrice}</p>
                  <button onClick={() => removeItem(producto.id)}>
                    Borrar
                  </button>
                </div>
              </>
            ))
          }
            <p><b>
              Precio Total:
              ${getTotalPrice()}
            </b></p>
            <p><b>
              Total productos:
              {getTotalProducts()}
            </b></p>

            <button onClick={() => clear()}>
              Limpiar carrito
            </button>
          </div>

          : <div className="text-center alert alert-dark">

            <h1>No hay items seleccionados, agrega productos</h1>
            <img className="p-4" height={200} src={carritoImg} />
            <Link to="/"><p>Agregar productos</p></Link>

          </div>
      }
    </>
  );
};
