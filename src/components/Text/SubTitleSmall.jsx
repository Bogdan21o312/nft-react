import React from 'react';
import classes from "./Text.module.scss"

const SubTitleSmall = ({children}) => {
    return (
        <h4 className={classes.SubTitleSmall}>
            {children}
        </h4>
    );
};

export default SubTitleSmall;