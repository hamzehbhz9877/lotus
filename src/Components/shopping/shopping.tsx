import React from 'react';
import {cartItem, useCartStore} from "../../Store/cart";
import closeIcon from "../../Assets/images/close-sharp.svg"

const Shopping = ({id,img,price,title}:cartItem) => {
    const {removeItem}=useCartStore()

    return (
        <div className="shopping">
            <div className="shopping__left">
                <img src={img} alt=""/>
                <h4>{title}</h4>
            </div>

            <div className="shopping__right">
                <span>{price.toFixed(2)}$</span>
                <button onClick={()=>removeItem(id)}>
                    <img src={closeIcon} alt=""/>
                </button>
            </div>

        </div>
    );
};

export default Shopping;