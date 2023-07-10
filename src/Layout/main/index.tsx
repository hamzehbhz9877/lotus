import React from 'react';
import Header from "../../Layout/main/header/index";

type Props={
    children:React.ReactNode
}
const MainLayout = ({children}:Props) => {
    return (
        <div className="lotus">
            <header>
                <Header/>
            </header>
            <main className="main-page">
                {children}
            </main>
        </div>

    );
};

export default MainLayout;