import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsTwelve = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsTwelve}`}>
            {children}
        </div>
    );
};

export default GridColumnsTwelve;