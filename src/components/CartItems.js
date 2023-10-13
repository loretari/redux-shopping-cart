import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import {useSelector} from "react-redux";

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.itemsList)

    return (
        <div className= "cart-container">
            <header>
                <h2>Your Bag</h2>
            </header>
            <article>
                <ul>
                { cartItems.map((item) => (
                    <li key={item.id}>
                        {" "}
                        <CartItem
                            id={item.id}
                            imgURL={item.imgURL}
                            price={item.price}
                            total={item.totalPrice}
                            name={item.name}
                            quantity={item.quantity}
                        /> {" "}
                    </li>
                ))}
            </ul>
            </article>

        </div>
    )
}

export default CartItems;