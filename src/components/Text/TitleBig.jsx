import React from 'react';
import classes from "./Text.module.scss"

const TitleBig = ({children}) => {
    return (
        <h2 className={classes.TitleBig}>
            {children}
        </h2>
    );
};

export default TitleBig;