import React from 'react';
import classes from "./Grid.module.scss";

const GridColumnsSixteen = ({children}) => {
    return (
        <div className={`${classes.Grid} ${classes.GridColumnsSixteen}`}>
            {children}
        </div>
    );
};

export default GridColumnsSixteen;