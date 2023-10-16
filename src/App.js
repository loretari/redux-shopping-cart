import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector} from "react-redux";
import Bag from "./components/Bag";
import Products from "./components/Products";

function App() {
    const cart = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        fetch('https://redux-shopping--cart-default-rtdb.firebaseio.com/cartItems.json', {
            method: "PUT",
            body: JSON.stringify(cart)
        })
    }, [cart])
    return (
        <div className="App">
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <Bag/>}
            {isLoggedIn && <Products/>}





        </div>
    );
}
export default App;