import React from 'react';
import {useSidebarStore} from "../../../Store/sidebar";
import closeIcon from "../../../Assets/images/close-sharp.svg"


type Props={
    children:React.ReactNode,
    title:string
}

const SideBar = ({children,title}:Props) => {
    const {isOpen,close}=useSidebarStore()
    return (
        <div className={`sidebar ${isOpen?'open':''}`}>
            <div className="sidebar__title">
                <h1>{title}</h1>
                <img src={closeIcon} alt="" onClick={close}/>
            </div>
            <div className="sidebar__body">
                {children}
            </div>

        </div>
    );
};

export default SideBar;