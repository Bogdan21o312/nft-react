import React from 'react';
import classes from "./Text.module.scss"

const SubTitleBig = ({children}) => {
    return (
        <h4 className={classes.SubTitleBig}>
            {children}
        </h4>
    );
};

export default SubTitleBig;