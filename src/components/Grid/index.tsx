import React, {FC} from 'react';
import classes from "./Grid.module.scss";

export enum CardVariant {
    ColumnsOne,
    ColumnsTwo,
    ColumnsThree,
    ColumnsFour,
    ColumnsFive,
    ColumnsSix,
    ColumnsEight,
    ColumnsTen,
    ColumnsTwelve,
    ColumnsSixteen,
    ColumnsEighteen,
}

interface CardProps {
    variant: CardVariant,
    children: any,
}

const Index: FC<CardProps> =
    ({
         variant,
         children
     }) => {
    const Style: any = `${classes.Grid}
    ${variant === CardVariant.ColumnsOne ? classes.GridColumnsOne : ''
    }${variant === CardVariant.ColumnsTwo ? classes.GridColumnsTwo : ''
    }${variant === CardVariant.ColumnsThree ? classes.GridColumnsThree : ''
    }${variant === CardVariant.ColumnsFour ? classes.GridColumnsFour : ''
    }${variant === CardVariant.ColumnsFive ? classes.GridColumnsFive : ''
    }${variant === CardVariant.ColumnsSix ? classes.GridColumnsSix : ''
    }${variant === CardVariant.ColumnsEight ? classes.GridColumnsEight : ''
    }${variant === CardVariant.ColumnsTen ? classes.GridColumnsTen : ''
    }${variant === CardVariant.ColumnsTwelve ? classes.GridColumnsTwelve : ''
    }${variant === CardVariant.ColumnsSixteen ? classes.GridColumnsSixteen : ''
    }${variant === CardVariant.ColumnsEighteen ? classes.GridColumnsEighteen : ''
    }`
        return (
            <div
                className={Style}
            >
                {children}
            </div>
        );
    };

export default Index;
