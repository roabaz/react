import { products } from '../dataBase/products';
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const Filters = () => {
    let sizes = [];

    products.forEach((item) => {
        if (item.sizes) {
            let k = item.sizes;
            k.forEach((item2) => {
                if (!sizes.includes(item2)) {
                    sizes.push(item2);
                }
            });
        }
    });

    const [params, setParams] = useSearchParams();
    const [size, setSize] = useState([]);

    const getSize = (e) => {
        setSize(e.target.innerText)
        console.log(e.target.innerText)
        setParams({
            sizes: size,
        })
    }

    return (
        <div className="col-2">

            <h2 className="pb-2">
                Genero
            </h2>

            <a href="/mujer"> <p>Mujeres</p></a>
            <a href="/hombre"><p>Hombres</p></a>
            <a href="/ninios"><p>Niños</p></a>

            <h2 className="pb-2">
                Talles
            </h2>

            {
                sizes.map((element, i) => {
                    return (
                        <button key={i} onClick={getSize} value={element}><p>{element}</p></button>
                    )
                })
            }

        </div>
    )
}