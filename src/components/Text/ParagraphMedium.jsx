import React from 'react';
import classes from "./Text.module.scss"

const ParagraphMedium = ({children}) => {
    return (
        <p className={classes.ParagraphMedium}>
            {children}
        </p>
    );
};

export default ParagraphMedium;