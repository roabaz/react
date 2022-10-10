
import React, { useState, useEffect } from 'react';
import { ItemList } from './itemList';
import { products } from '../dataBase/products';
import { useParams, useSearchParams } from 'react-router-dom';
import logoLoading from "../resources/img/loading_icon.gif";

export const ItemListContainer = (params) => {
    
const [param, setParams] = useSearchParams();
const q = param.get('q') ?? "";

console.log("awdawd",q);



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
                const genderFilter = result.filter(elm => elm.gender === gender);
                setProductsItems(genderFilter)
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
            else if (q){
                const qFilter = result.filter(elm => elm.title.toLowerCase().includes(q));
                console.log(qFilter)
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

        <div className="container text-center p-5">
            <button className="alert alert-primary mx-2"><b> {count} productos </b></button>
            <button className="btn btn-success mx-2" onClick={addCount}><b>+</b></button>
            <button className="btn btn-warning mx-2" onClick={lessCount}><b>-</b></button>
            <button className="btn btn-danger mx-2" onClick={clearCount}><b>0</b></button>


            {
                loading ? <div> <img height={100} src={logoLoading} alt="" /></div>
                    :
                    <div>
                        <b>
                            <p className='text-dark alert alert-info col-2 mx-auto'>{totalItems} Productos</p>
                        </b>

                        <ItemList data={productsItems} />
                    </div>
            }



            <p className='p-5'>{params.content}</p>
            <footer className='bg-dark p-5 text-light'>
                Todos los derechos reservados - Cubic Ecommerce 2022
            </footer>
        </div>

    );
};
