import React from "react";
import "../header/header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="container-header">
                    <div className="row">
                        <div className="columns">
                            <img src="https://raw.githubusercontent.com/rinkuv37/Ecommerce-Website-in-React-Js-with-Payment-Gateway/8ec2e9f2872233b520ce62eaef27d4e96268d0de/src/assets/images/logo.svg" alt="logo" />
                        </div>

                        <div className="column-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                 <div className="selecrDrop cursor">
                                    All Categories
                                 </div>

                                 <div className="search">
                                    <input type="text" placeholder="Search"/>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header