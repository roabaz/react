
import React, { useState } from 'react';


export const Count = () => {

    const [count, setCountValue] = useState(0);
    const addCount = () => {
        setCountValue(count + 1);
    };
    const lessCount = () => {
        if (count > 0) {
            setCountValue(count - 1);
        }
    };
    const clearCount = () => {
        if (count > 0) {
            setCountValue(count - count);
        }
    };
    return (
        <div className="container text-center ">
            <p>Contador</p>
            <button className="alert alert-primary mx-2"><b> {count} productos </b></button>
            <button className="btn btn-success mx-2" onClick={addCount}><b>+</b></button>
            <button className="btn btn-warning mx-2" onClick={lessCount}><b>-</b></button>
            <button className="btn btn-danger mx-2" onClick={clearCount}><b>0</b></button>
        </div>
    )
}