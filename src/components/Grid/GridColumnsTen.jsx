import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsTen = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsTen}`}>
            {children}
        </div>
    );
};

export default GridColumnsTen;