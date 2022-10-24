
import React, { useState, useEffect } from 'react';
import { Item } from '../components/item';
import { Filters } from './filters';
export const ItemList = ({ data }) => {

    return (
        <div className='row'>
         {/*    <Filters />  */}
            <div className="col-10 row mx-auto">

                {
                    data.map(element => {
                        return (
                            <Item key={element.id} id={element.id_fireStore} title={element.title} pic={element.pic} currency={element.currency}  price={element.price} fullPrice={element.full_price} />
                        )
                    })
                }


            </div>
        </div>
    );
};
