import React from 'react';
import classes from "./Text.module.scss"

const SubTitleMedium = ({children}) => {
    return (
        <h4 className={classes.SubTitleMedium}>
            {children}
        </h4>
    );
};

export default SubTitleMedium;