import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsFive = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsFive}`}>
            {children}
        </div>
    );
};

export default GridColumnsFive;