import React from 'react';
import basket from "../../../Assets/images/basket.jpg"
import search from "../../../Assets/images/search.png"
import {useCartStore} from "../../../Store/cart";
import {useSidebarStore} from "../../../Store/sidebar";

const Right = () => {
    const {count}=useCartStore()
    const {open}=useSidebarStore()

    return (
        <div className="header__right">
            <div className="header__right-search">
                <img src={search} alt=""/>
                    <input type="text" placeholder={"Search"}/>
            </div>
            <div className="header__right-cart" onClick={open}>
                <img src={basket} alt=""/>
                <div className="count"><b>{count}</b></div>
            </div>
        </div>
    );
};

export default Right;