import React from "react";
import Cart from "./Cart";
import "./Header.css";
import {authActions} from "../store/auth-slice";
import {useDispatch} from "react-redux";

const Header =() => {
    const dispatch = useDispatch();
    const logoutHandler = () => (
        dispatch(authActions.logout())
    );

      return (

              <nav>
                  <div>
                      <ul className= "nav-center">
                          <li>
                              <h3>
                                  Redux Shopping App
                              </h3>
                          </li>
                          <li>
                              <Cart className="nav-container"/>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                              </svg>
                              {/*<div className= "amount-container">*/}
                              {/*    <p className= "total-amount"></p>*/}
                              {/*</div>*/}
                          </li>
                          <li>
                              <button onClick={ logoutHandler } className= "logout-btn">Logout</button>{" "}
                          </li>
                      </ul>

                  </div>

              </nav>


      )
}
          {/*<header>*/}
          {/*    <nav className= "header-nav">*/}
          {/*        <ul className= "header-ul">*/}
          {/*            <li>*/}
          {/*                <h2 className= "header-h2" style={{ fontFamily: "monospace", fontSize: "30px" }}>*/}
          {/*                    Redux Shopping App*/}
          {/*                </h2>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*                <Cart />*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*                <button onClick={ logoutHandler } className= "logout-btn">Logout</button>{" "}*/}
          {/*            </li>*/}
          {/*        </ul>*/}

          {/*    </nav>*/}
          {/*</header>*/}

export default Header;