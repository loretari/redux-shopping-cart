import React from "react"
import "./Cart.css";
import {useDispatch, useSelector} from "react-redux";
import { showCartActions } from "../store/showCart-slice";

const Cart = () => {
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch()

    const showCart = (event) => {
        event.preventDefault()
        dispatch(showCartActions.setShowCart())
    };

    return (
        <div className= "cartIcon">
                       <h2 onClick={showCart}> {quantity} </h2>

                    </div>

    )
}

export default Cart;

