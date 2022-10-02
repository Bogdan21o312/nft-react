import React from 'react';
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                © 2022
            </div>
        </footer>
    );
};

export default Footer;