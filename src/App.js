import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector} from "react-redux";
import Notification from "./components/Notification";

function App() {
    const cart = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
   // console.log(isLoggedIn)
   //  const cartItems = useSelector((state) => state.cart.itemsList)
   //  console.log(cartItems)
    useEffect(() => {
        const sendRequest = async ()=>{
            const res = await  fetch('https://redux-shopping--cart-default-rtdb.firebaseio.com/cartItems.json',
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            const data = await res.json();
        }

sendRequest();
    }, [cart]);
    return (
        <div className="App">
            <Notification type= 'success' message={'This is dummy message'}/>
           {!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />}

        </div>
    );
}

export default App;
