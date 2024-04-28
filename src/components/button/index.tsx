import React, { ReactElement } from 'react'
import { ButtonSize, ButtonState } from './enum';


export interface IProps {
    value?: string | ReactElement;
    variant?: ButtonState;
    size?: ButtonSize;
    icon?: ReactElement;
    iconTwo?: ReactElement;
    isLoading?: boolean;
    [key: string]: any;
    spinner?: "white" | "gray";
}

const Button = () => {
    return (
        <div>Button</div>
    )
}

export default Button