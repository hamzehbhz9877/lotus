import ItemsLeft from "../../Components/items/itemsLeft";
import cardImage from "../../Assets/images/JAR.png";
import ItemsRight from "../../Components/items/itemsRight";
import MainLayout from "../../Layout/main/index";
import rec from "../../Assets/images/oa/Rectangle.svg";
import rightImg from "../../Assets/images/Bitmap.svg";
import {useCartStore} from "../../Store/cart";
import Shopping from "../../Components/shopping/shopping";
import SideBar from "../../Layout/main/sidebar/index";
import Backdrop from "../../Components/backdrop/backdrop";
import emptyCart from "../../Assets/images/emptyCart.png"

const itemsLeft=[
    {title:'Lotus Jar',subtitle:'Green Fruit Jelly',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500.',
        price:4.00,
        img:cardImage,
        id:1
    },
    {title:'Lotus Mi',subtitle:'Green Fruit Jelly',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500.',
        price:2.00,
        img:cardImage,
        id:2
    },
]

const itemRight=[
    {title:'Apple Fruit',subtitle:'Original Taste',price:10.00,img:rightImg,id:3},
    {title:'Apple Fruit',subtitle:'Original Taste',price:10.00,img:rightImg,id:4},
    {title:'Apple Fruit',subtitle:'Original Taste',price:10.00,img:rightImg,id:5},
]

const Home = () => {
    const {items}=useCartStore()

    return (
        <div className="home-page">
            <MainLayout>
                <div className="items__left">
                    <div className="items__left-title">
                        <span>Best Sellers</span>
                        <div className="items__left-icon">
                            <div className="oval"></div>
                            <img src={rec} alt=""/>
                        </div>
                    </div>
                    <div className="items__left-cards">
                        {itemsLeft.map(item=><ItemsLeft key={item.id}  {...item}/>)}
                    </div>
                </div>
                <div className="items__right">
                    <div className="items__right-title">
                        <span>More Items</span>
                    </div>
                    <div className="items__right-cards">
                        {itemRight.map(item=><ItemsRight key={item.id} {...item}/>)}
                    </div>
                </div>
            </MainLayout>
                <SideBar title={"Cart"}>
                    <div className="shopping-sidebar">
                        {items.length===0&& <img className="empty-cart" src={emptyCart} alt=""/>}
                        {items.map(item=><Shopping key={item.id} {...item}/>)}
                        {
                            items.length!==0&&
                            <div className="shopping__total">
                                <h3>Total is: {items.reduce((acc,item)=>item.total+acc,0)}$</h3>
                            </div>
                        }
                    </div>
                </SideBar>
            <Backdrop/>
        </div>
    );
};

export default Home;