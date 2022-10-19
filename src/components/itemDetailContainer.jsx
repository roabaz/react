
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../dataBase/products';
import { ItemDetail } from '../components/itemDetail';
import {Count} from "../components/count";
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

export const ItemDetailContainer = () => {

    const { id } = useParams();
/*     console.log(id);
 */

    //!  Promises  //
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(products);
        })
    }
    const [idItems, setIdItems] = useState([]);

    useEffect(() => {
        getProducts().then((result) => {
            //!Filter by id    console.log(id);
            if (id) {
                const idItems = result.filter(elm => elm.id == id);
                setIdItems(idItems);
                /*console.log(idItems)*/
            }
        });
    }, []);

    const {addNewProduct} = useContext(cartContext);
    const onAdd = (quantity) => {
        console.log("Compraste", quantity, "productos");
        addNewProduct(idItems,quantity);
    }



    return (
        <div className="">
            {

                idItems.map(element => {
/*                     console.log(element.sizes);
 */                    element.sizes = element.sizes.toString().replace(/,/g , " | ");
                    return (
                        <ItemDetail
                            key={element.id} description={element.description}
                            ship={element.ship} color={element.colors}
                            brand={element.brand} sizes={element.sizes}
                            title={element.title} pic={element.pic}
                            currency={element.currency} id={element.id}
                            price={element.price} fullPrice={element.full_price}
                        />
                    )
                })
                
            }

            <Count initial={1} stock={30} onAdd={onAdd}/>

        </div>
    )
}