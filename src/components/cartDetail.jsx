import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import carritoImg from "../resources/img/vacio.png";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import swal from 'sweetalert';

export const CartDetail = () => {
  const value = useContext(cartContext);

  const { productsOnCart, getTotalPrice, getTotalProducts, removeItem, clear } = value;
  const [oderId, setOrderId] = useState();


  const sendOrder = (evt) => {
    evt.preventDefault();
    /*     console.log(evt.target[0].value); */
    const order = {
      buyer: {
        name: evt.target[0].value,
        email: evt.target[1].value,
        phone: evt.target[2].value,
        adress: evt.target[3].value,
        city: evt.target[4].value,
      },
      items: productsOnCart,
      total: getTotalPrice()
    }
    /*     console.log(order); */
    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then((result) => {
      console.log("resultado", result.id)
      setOrderId(result.id);
      swal("Tu compra fue enviada, sigue tu orden con el siguiente ID:", result.id);
      clear();
    });
  }

  return (
    <>
      {
        productsOnCart.length > 0 ?

          <div className="text-center">{
            productsOnCart.map((product) => (
              <>
                <div className="alert alert-success">
                  <b>
                    <div className="row" key={product.id}>
                      <div className="col-2"><img height={50} src={product.pic} /></div>
                      <div className="col-3">Titulo {product.title}</div>
                      <div className="col-2">Precio ${product.price}</div>
                      <div className="col-2">Cantidad {product.quantity}</div>
                      <div className="col-2">${product.totalPrice}</div>

                      <button className="col-1 btn btn-danger" onClick={() => removeItem(product.id)}>
                        Borrar
                      </button>
                    </div>
                  </b>
                </div>
              </>
            ))
          }
            <p><b> Precio Total: ${getTotalPrice()}</b></p>
            <p><b> Total productos:{getTotalProducts()}</b></p>
            <button className="btn btn-danger" onClick={() => clear()}>
              Limpiar carrito
            </button>

            <h2 className="mt-4"> Datos de contacto</h2>
            <form onSubmit={sendOrder} className="row g-3 mt-4">
              <div className="col-md-4">
                <label for="inputEmail4" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-4">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-4">
                <label for="inputPassword4" className="form-label">Telefono</label>
                <input type="tel" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-md-6">
                <label for="inputAddress" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="inputCity" placeholder="Montevideo" />
              </div>
              <button type="submit" className="btn btn-success col-4 mx-auto">Comprar</button>
            </form>
          </div>



          :

          <div className="text-center alert alert-dark">

            <h1>No hay items seleccionados, agrega productos</h1>
            <img className="p-4" height={200} src={carritoImg} />
            <Link to="/"><p>Agregar productos</p></Link>

          </div>
      }
    </>
  );
};
