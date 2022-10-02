import React, {FC} from 'react';
import classes from "./Text.module.scss";

export enum TextVariants {
    ParagraphSmall,
    ParagraphMedium,
    ParagraphBig,

    SubTitleSmall,
    SubTitleMedium,
    SubTitleBig,

    TitleSmall,
    TitleMedium,
    TitleBig,
}

interface TextProps {
    children: any,
    variant: TextVariants,

}

const Index: FC<TextProps> =
    ({
         children,
         variant,

     }) => {
    const Style: any = ` 
    ${variant === TextVariants.ParagraphSmall ? classes.ParagraphSmall : ''}
    ${variant === TextVariants.ParagraphMedium ? classes.ParagraphMedium : ''}
    ${variant === TextVariants.ParagraphBig ? classes.ParagraphBig : ''}
    ${variant === TextVariants.SubTitleSmall ? classes.SubTitleSmall : ''}
    ${variant === TextVariants.SubTitleMedium ? classes.SubTitleMedium : ''}
    ${variant === TextVariants.SubTitleBig ? classes.SubTitleBig : ''}
    ${variant === TextVariants.TitleSmall ? classes.TitleSmall : ''}
    ${variant === TextVariants.TitleMedium ? classes.TitleMedium : ''}
    ${variant === TextVariants.TitleBig ? classes.TitleBig : ''}
    `

        return (
            <div className={Style}>
                {children}
            </div>
        );
    };

export default Index;
