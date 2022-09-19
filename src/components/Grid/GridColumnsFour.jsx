import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsFour = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsFour}`}>
            {children}
        </div>
    );
};

export default GridColumnsFour;