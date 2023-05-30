import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import "../../css/shop/OrderList.css"
import formatCurrency from "../../utilities/FormatCurrency"


// {
//     "id": 1,
//         "name": "Top Quality Joggers Pant",
//             "price": 6300,
//                 "itemImage": [
//                     "/images/box-6-bg.png",
//                     "/images/box-4-bg.png",
//                     "/images/box-3-bg.png"
//                 ],
//                     "description": "Black With White Stripes",
//                         "stockQuantity": 12,
//                             "size": 50,
//                                 "prevLink": "fashion",
//                                     "rating": 4,
//                                         "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.",
//                                             "keyIngredient": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.",
//                                                 "howToApply": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.",
//                                                     "quantity": 1,
//                                                         "qty": 2
// }


export default function OrderList({ id, name, description, price, itemImage, qty }) {
    // const {  } = useAppContext()
    return (
        <div className='orderlist-wrapper'>
            <img src={itemImage[0]} alt={name} className="orderlist-img" />
            <div className='orderlist-desc'>
                {name}
                <p>{description}</p>
            </div>
            <div className='orderlist-group'>
                <div className="orderlist-top">
                    <p className='orderlist-qty'>QTY: {qty}</p>
                    <p className='orderlist-price'>{formatCurrency(price)}</p>
                    <i className="bx bx-trash" />
                </div>
                <div className='control-buttons'>
                    <button className='ctrl-btn-plus'><i className="bx bx-plus" /></button>
                    <button className='ctrl-btn-minus'><i className="bx bx-minus" /></button>
                </div>
            </div>
        </div>
    )
}