import React from 'react';
import classes from "./Text.module.scss"

const ParagraphSmall = ({children}) => {
    return (
        <p className={classes.ParagraphSmall}>
            {children}
        </p>
    );
};

export default ParagraphSmall;