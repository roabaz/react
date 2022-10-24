
import React, { useState, useEffect } from 'react';
import { ItemList } from './itemList';
import { products } from '../dataBase/products';
import { useParams, useSearchParams } from 'react-router-dom';
import logoLoading from "../resources/img/loading_icon.gif";
import { NavBar } from "../components/navBar";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";


export const ItemListContainer = (params) => {

    const [param] = useSearchParams();
    const q = param.get('q') ?? "";
    /* console.log("ver q", q); */
    //!Variables form URL
    const { category } = useParams();
    /*console.log(category);*/
    const { gender } = useParams();



    //!Hooks
    const [productsItems, setProductsItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getData = async () => {
            //crear referencia del piunto de acceso de la informacion.
            const queryRef = collection(db, "cubic-react");
            //obtiene todos los documentos de la collection
            const response = await getDocs(queryRef);
/*             console.log(response);
 */            const documents = response.docs;

            //contenido de un documento
            /*  console.log("Contenido ",documents[0].data());
                console.log("id doc ", documents[0].id);
                const newDoc = {
                    ...documents[0].data(),
                    id_fireStore: documents[0].id
                }
                console.log(newDoc); 
            */
            const result = documents.map(element => {
                return ({
                    ...element.data(),
                    id_fireStore: element.id
                })
            })
            console.log(result);

            let totalItems;
            //!Filter by Gender
            if (gender && category === undefined) {
/*                 console.log(q);
 */                let genderFilter = [];
                if(q){
                     genderFilter = result.filter(elm => elm.gender.toLowerCase() === gender).filter(elm => elm.title.toLowerCase().includes(q))
                    setProductsItems(genderFilter)
                }else{
                     genderFilter = result.filter(elm => elm.gender.toLowerCase() === gender);
                    setProductsItems(genderFilter)
                }
                setTotalItems(totalItems = genderFilter.length);
                setLoading(false);
            }
            //!Filter by Gender and Category
            else if (category && gender) {
                console.log(gender);
                console.log(category);
                const categoryFilter = result.filter(elm => elm.category === category).filter(elm => elm.gender.toLowerCase() === gender);
                setProductsItems(categoryFilter)
                setTotalItems(totalItems = categoryFilter.length);
                setLoading(false);
            }
            //!Results by q search
            else if (q) {
                const qFilter = result.filter(elm => elm.title.toLowerCase().includes(q));
                setProductsItems(qFilter)
                setTotalItems(totalItems = qFilter.length);
                setLoading(false);
            }
            //!Results with out filtering
            else {
                setProductsItems(result)
                setTotalItems(totalItems = result.length);
                setLoading(false);
            }
        }
        getData();
    }, [category,gender,  totalItems, loading, q,])

    return (

        <div className="container text-center p-2">

            {
                loading ? <div> <img height={100} src={logoLoading} alt="" /></div>
                    :
                    <div>
                        <NavBar />
                        <hr />
                        <b>
                            <p className='text-dark alert alert-info col-2 mx-auto'>{totalItems} Productos</p>
                        </b>

                        <ItemList data={productsItems} />
                    </div>
            }



            <p className='p-5'>{params.content}</p>

        </div>

    );
};
