import React from 'react';
import classes from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";

const Header = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    const [headerScroll, setHeaderScroll] = React.useState(false)

    const addHeaderScroll = () => {
        if (window.scrollY >= 20) {
            setHeaderScroll(true)
        } else {
            setHeaderScroll(false)
        }
    };

    window.addEventListener('scroll', addHeaderScroll);

    return (
        <header className={`${classes.header} ${headerScroll ? classes.headerScroll : ''}`}>
            <div className={classes.header__container}>
                <Link to="/" className={classes.header__logo}>
                    NFT
                </Link>
                <div className={classes.header__menu}>
                    <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
                </div>
                <div className={classes.header__action}>
                    <div className={classes.header__button}>
                        Button
                    </div>
                    <div
                        onClick={() => setMenuActive(!menuActive)}
                        className={`${classes.iconMenu} ${menuActive ? classes.menuOpen : ''}`}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;