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
                <div className="alert alert-success">
                  <b>
                  <div className="row">                  
                    <div className="col-2"><img height={50} src={producto.pic}/></div>
                    <div className="col-3">Titulo {producto.title}</div>
                    <div className="col-2">Precio ${producto.price}</div>
                    <div className="col-2">Cantidad {producto.quantity}</div>
                    <div className="col-2">${producto.totalPrice}</div>
                    
                    <button className="col-1 btn btn-danger" onClick={() => removeItem(producto.id)}>
                      Borrar
                    </button>
                  </div>
                  </b>
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

            <button className="btn btn-danger" onClick={() => clear()}>
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
