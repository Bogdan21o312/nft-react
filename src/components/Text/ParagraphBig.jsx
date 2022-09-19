import React from 'react';
import classes from "./Text.module.scss"

const ParagraphBig = ({children}) => {
    return (
        <p className={classes.ParagraphBig}>
            {children}
        </p>
    );
};

export default ParagraphBig;