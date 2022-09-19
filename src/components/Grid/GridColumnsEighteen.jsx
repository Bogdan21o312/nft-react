import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsEighteen = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsEighteen}`}>
            {children}
        </div>
    );
};

export default GridColumnsEighteen;