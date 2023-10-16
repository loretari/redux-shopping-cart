import React from "react";
import Header from "./Header";
import './Bag.css';
import { useSelector } from "react-redux";
import CartItems from "./CartItems";


const Bag = () => {
    let total = 0;
    const itemsList = useSelector(state => state.cart.itemsList)

    itemsList.forEach(item => {
        total += item.totalPrice;
    })

    const showCart = useSelector(state => state.showCart.showCart)
    return (
        <React.Fragment>
            <div>
                <Header/>
                { showCart && <CartItems/>}
                <div className= "total-price">
                    <h3>Total: ${ total }</h3>
                <button className= "orderBtn">Place Order</button>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Bag