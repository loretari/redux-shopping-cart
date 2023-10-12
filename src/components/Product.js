import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Product.css";
import {cartActions} from "../store/cart-slice";

const Product = ({ id, name, imgURL, price }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
dispatch(cartActions.addToCart({
    name,
    id,
    price,
}))
    }

    return (
        <div className= "card">
            <img src={imgURL} alt={name} />
            <h2>{ name }</h2>
            <p>$ {price}</p>
            <button onClick={ addToCart } >Add to cart</button>
        </div>
    )
}

export default Product;