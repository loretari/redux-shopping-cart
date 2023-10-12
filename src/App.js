import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector} from "react-redux";

function App() {
    const cart = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    // console.log(isLoggedIn)
    //  const cartItems = useSelector((state) => state.cart.itemsList)
    //  console.log(cartItems)
    useEffect(() => {
        fetch('https://redux-shopping--cart-default-rtdb.firebaseio.com/cartItems.json', {
            method: "PUT",
            body: JSON.stringify(cart)
        })
    }, [cart])
    return (
        <div className="App">
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />}
        </div>
    );
}
export default App;