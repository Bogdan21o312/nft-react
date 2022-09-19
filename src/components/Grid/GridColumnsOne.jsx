import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsOne = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsOne}`}>
            {children}
        </div>
    );
};

export default GridColumnsOne;