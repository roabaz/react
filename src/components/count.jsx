
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Count = ({ stock, initial, onAdd }) => {

    const [count, setCountValue] = useState(parseInt(initial));
    const addCount = () => {
        setCountValue(count + 1);
    };
    const lessCount = () => {
        if (count > 0) {
            setCountValue(count - 1);
        }
    };

    useEffect(() => {
        setCountValue(parseInt(initial));
    }, [initial]);

    return (
        <div className="container text-center mt-3">
            <button className="alert alert-primary mx-2"><b> {count} productos </b></button>
            <button disabled={count <= 1} className="btn btn-warning mx-2" onClick={lessCount}><b>-</b></button>
            <button disabled={count >= stock} className="btn btn-success mx-2" onClick={addCount}><b>+</b></button>
            <button disabled={stock <= 0} className="btn btn-dark mx-2" onClick={() => onAdd(count)}><b>Agregar Producto</b></button>
            <div>
                <Link to="/">
                    <button className="btn btn-info mx-2"><b>Seguir Comprando</b></button>
                </Link>

                <Link to="/cartDetail">
                    <button disabled={stock <= 0} className="btn btn-success mx-2"><b>Finalizar Compra</b></button>
                </Link>
            </div>
        </div>
    )
}