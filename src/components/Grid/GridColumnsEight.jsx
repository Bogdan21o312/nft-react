import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsEight = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsEight}`}>
            {children}
        </div>
    );
};

export default GridColumnsEight;