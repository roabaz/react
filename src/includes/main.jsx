
import React, {useState} from 'react';

export const Main = (params) => {
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

        <div className="container text-center p-5">

            <p>{params.content}</p>

            <button className="btn btn-primary mx-2"> {count} </button>
            <button className="btn btn-success mx-2" onClick={addCount}>+</button>
            <button className="btn btn-warning mx-2" onClick={lessCount}>-</button>
            <button className="btn btn-danger mx-2" onClick={clearCount}>0</button>
        </div>

    );
};
