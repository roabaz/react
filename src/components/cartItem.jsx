import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export const CartItem = (product) => {
  const value = useContext(cartContext);

  const { removeItem } = value;
  return (
    <div className="alert alert-success">
      <b>
        <div className="row">
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
  );
};
