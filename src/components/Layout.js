import React from "react";
import Header from "./Header";
import "./Layout.css";
import {useSelector} from "react-redux";


const Layout = () => {
    let total = 0;
    const itemsList = useSelector(state => state.cart.itemsList)

    itemsList.forEach(item => {
        total += item.totalPrice;
    })


    return (
    <React.Fragment>
        <div className="layout">
            <Header/>

        </div>
    </React.Fragment>
    )
}

export default Layout;