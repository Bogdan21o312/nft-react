import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsTwo = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsTwo}`}>
            {children}
        </div>
    );
};

export default GridColumnsTwo;