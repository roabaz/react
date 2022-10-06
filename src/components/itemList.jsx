
import React, { useState, useEffect } from 'react';
import { Item } from '../components/item';

export const ItemList = ({ data }) => {

    return (

        <div className="row">

            {
                data.map(element => {
                    return (
                        <Item key={element.id} title={element.title} pic={element.pic} currency={element.currency} id={element.id} price={element.price} fullPrice={element.full_price} />
                    )
                })
            }


        </div>

    );
};
