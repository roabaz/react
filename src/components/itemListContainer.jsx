
import React, { useState, useEffect } from 'react';
import { ItemList } from './itemList';
import { products } from '../dataBase/products';
import { useParams, useSearchParams } from 'react-router-dom';
import logoLoading from "../resources/img/loading_icon.gif";
import { NavBar } from "../components/navBar";

export const ItemListContainer = (params) => {

    const [param] = useSearchParams();
    const q = param.get('q') ?? "";

    /* console.log("ver q", q); */



    //!Variables form URL
    const { category } = useParams();
    /*console.log(category);*/
    const { gender } = useParams();


    //!  Promises  //
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        })
    }
    //!Hooks
    const [productsItems, setProductsItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((result) => {
            let totalItems;

            //!Filter by Gender
            if (gender && category === undefined) {
                console.log(q);
                let genderFilter = [];
                if(q){
                     genderFilter = result.filter(elm => elm.gender === gender).filter(elm => elm.title.toLowerCase().includes(q))
                    setProductsItems(genderFilter)
                }else{
                     genderFilter = result.filter(elm => elm.gender === gender);
                    setProductsItems(genderFilter)
                }
                setTotalItems(totalItems = genderFilter.length);
                setLoading(false);
            }
            //!Filter by Gender and Category
            else if (category && gender) {
                const categoryFilter = result.filter(elm => elm.category === category).filter(elm => elm.gender === gender);
                setProductsItems(categoryFilter)
                setTotalItems(totalItems = categoryFilter.length);
                setLoading(false);
            }
            //!Results by q search
            else if (q) {
                const qFilter = result.filter(elm => elm.title.toLowerCase().includes(q));
                /*console.log(qFilter)*/
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
            /*console.log(totalItems);*/
        });
    }, [category, gender, totalItems, loading, q]);


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
