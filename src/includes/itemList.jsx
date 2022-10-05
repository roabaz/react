
import React, { useState, useEffect } from 'react';
import { Item } from '../includes/item';

export const ItemList = ({ data }) => {

    return (

        <div className="row">

            {
                data.map(element => {
                    return (
                        <Item key={element.id} title={element.title} pic={element.pic} currency={element.currency} price={element.price} fullPrice={element.full_price} />
                    )
                })
            }


        </div>

    );
};
