import React from 'react';
import Right from "../../../Layout/main/header/right";
import Left from "../../../Layout/main/header/left";

const Header = () => {
    return (
        <div className="header">
            <Left/>
            <Right/>
        </div>
    );
};

export default Header;