import React from 'react';
import classes from "./Text.module.scss"

const TitleSmall = ({children}) => {
    return (
        <h2 className={classes.TitleSmall}>
            {children}
        </h2>
    );
};

export default TitleSmall;