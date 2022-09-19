import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsThree = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsThree}`}>
            {children}
        </div>
    );
};

export default GridColumnsThree;