import {cartItem, useCartStore} from "../../Store/cart";
import closeIcon from "../../Assets/images/close-sharp.svg"
import add from "../../Assets/images/add.png"
import sub from "../../Assets/images/sub.png"

const Shopping = ({id,img,title,count,total}:cartItem) => {
    const {removeItem,addCount,subCount}=useCartStore()

    return (
        <div className="shopping">
            <div className="shopping__left">
                <img src={img} alt=""/>
                <h4>{title}</h4>
            </div>
        <div className="shopping__center">
            <button className="shopping__center-add" onClick={()=>addCount(id)}>
                <img src={add} alt=""/>
            </button>
            <span>{count}</span>
            <button disabled={count===1} className={`shopping__center-sub ${count===1 ?'shopping__center-sub--disable':''}`} onClick={()=>subCount(id)}>
                <img src={sub} alt=""/>
            </button>
        </div>
            <div className="shopping__right">
                <span>{total.toFixed(2)}$</span>
                <button onClick={()=>removeItem(id)}>
                    <img src={closeIcon} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default Shopping;