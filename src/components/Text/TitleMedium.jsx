import React from 'react';
import classes from "./Text.module.scss"

const TitleMedium = ({children}) => {
    return (
        <h2 className={classes.TitleMedium}>
            {children}
        </h2>
    );
};

export default TitleMedium;