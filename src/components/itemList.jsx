
import React, { useState, useEffect } from 'react';
import { Item } from '../components/item';
import { Filters } from './filters';
export const ItemList = ({ data }) => {

    return (
        <div className='row'>
           {/*  <Filters /> */}
            <div className="col-9 row mx-auto">

                {
                    data.map(element => {
                        return (
                            <Item key={element.id} title={element.title} pic={element.pic} currency={element.currency} id={element.id} price={element.price} fullPrice={element.full_price} />
                        )
                    })
                }


            </div>
        </div>
    );
};
