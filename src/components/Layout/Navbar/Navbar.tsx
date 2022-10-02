import React, {FC} from 'react';
import classes from "./Navbar.module.scss";
import {Navbaritems} from "./Navbaritems";
import {Link} from "react-router-dom";

interface NavbarProps {
    menuActive: any,
}

const Navbar: FC<NavbarProps> = ({menuActive}) => {
    React.useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuActive])
    return (
        <nav className={`${classes.menu__body} ${menuActive ? classes.menuOpen : ''}`}>
            <ul className={classes.menu__list}>
                {Navbaritems.map((navbarItem, idx) => (
                    <li className={classes.menu__item}>
                        <Link to={navbarItem.itemLink} className={classes.menu__link}  key={idx}>
                            {navbarItem.itemText}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

