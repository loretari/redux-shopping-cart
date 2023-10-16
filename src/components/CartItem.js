import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";



const CartItem = ({ name, quantity, total, price, id, imgURL }) => {
    const dispatch = useDispatch();

    const incrementCartItem = () => {
        dispatch(
            cartActions.addToCart({
                id,
                name,
                price,
                imgURL,
            })
        );
    };

    const decrementCartItems = () => {
        dispatch(
            cartActions.removeFromCart(id))
    };

    return (

    <header className= "cart-item-header">
        <div className= "cart-item">
            <img src={imgURL} alt={name} />
            <div>
                <h4> {name} </h4>
                <h4 className= "item-price">${total}</h4>
                <h4 className= "item-price">( ${price} / item )</h4>

            </div>
            <div>
                {/* increase amount */}
                <button
                    className="amount-btn"
                    onClick={ incrementCartItem }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>
                {/* amount */}
                <p className="amount">{quantity}</p>

                {/* decrease amount */}
                <button
                    className="amount-btn"
                    onClick= { decrementCartItems }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>

            </div>
        </div>
    </header>



    )
}

export default CartItem;
