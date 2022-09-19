import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsSix = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsSix}`}>
            {children}
        </div>
    );
};

export default GridColumnsSix;