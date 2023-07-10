import React from 'react';
import plus from "../../Assets/images/icons8-plus-50.png"
import {useCartStore} from "../../Store/cart";
import {useSidebarStore} from "../../Store/sidebar";

type Props={
    title:string
    subtitle:string
    price:number
    img:string
    id:number
}

const ItemsRight = ({title,img,price,subtitle,id}:Props) => {
    const {addItems}=useCartStore()
    const {open}=useSidebarStore()
    const handleOpen=()=>{
        open()
        addItems({title,img,price,id})
    }
    return (
        <div className="items__right-card" >
            <div className="items__right-card-body">
                <div className="items__right-card-price">
                    <span>${price.toFixed(2)}</span>
                </div>
                <div className="items__right-card-add">
                    <div className="oval"  onClick={handleOpen}>
                        <img src={plus} width={24} height={24} alt=""/>
                    </div>
                </div>

                <div className="items__right-card-img">
                    <img src={img} alt=""/>
                </div>

                <div className="items__right-card-title">
                    <h4>{title}</h4>
                    <span>{subtitle}</span>
                </div>

            </div>
        </div>
    );
};

export default ItemsRight;