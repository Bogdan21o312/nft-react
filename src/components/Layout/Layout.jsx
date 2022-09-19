import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "../../assets/scss/Style.module.scss";

const Layout = ({children}) => {
    return (
        <div className={classes.wrapper}>
            <Header/>
            <main className={classes.page}>
                <div className={classes.page__container}>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;