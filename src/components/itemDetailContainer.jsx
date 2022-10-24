
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../components/itemDetail';
import { Count } from "../components/count";
import { cartContext } from '../context/cartContext';
import { collection,getDocs} from "firebase/firestore";
import { db } from "../utils/firebase";
export const ItemDetailContainer = () => {

    const { id } = useParams();
    /*     console.log(id);
     */

    const [detailItem, setDetailItem] = useState([]);
    const { addNewProduct } = useContext(cartContext);

    useEffect(() => {
        const getData = async () => {
            //crear referencia del piunto de acceso de la informacion.
            const queryRef = collection(db, "cubic-react");
            //obtiene todos los documentos de la collection
            const response = await getDocs(queryRef);
/*             console.log(response);
 */            const documents = response.docs;

            const result = documents.map(element => {
                return ({
                    ...element.data(),
                    id_fireStore: element.id
                })
            })
            console.log(result);

            const itemDetail = result.filter(elm => elm.id_fireStore === id);
            setDetailItem(itemDetail)

        }
        getData();
    }, [])





    /*    //!  Promises  //
       const getProducts = () => {
           return new Promise((resolve, reject) => {
               resolve(products);
           })
       }
   
       useEffect(() => {
           getProducts().then((result) => {
               //!Filter by id    console.log(id);
               if (id) {
                   const idItems = result.filter(elm => elm.id == id);
                   setIdItems(idItems);
              }
           });
       }, []); */
    const onAdd = (quantity) => {
        console.log("Compraste", quantity, "productos");
        addNewProduct(detailItem[0], quantity);
    }



    return (
        <div className="">
            {

                detailItem.map(element => {
/*                     console.log(element.sizes);
 */                    element.sizes = element.sizes.toString().replace(/,/g, " | ");
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

            <Count initial={1} stock={30} onAdd={onAdd} />

        </div>
    )
}