import React, { FC, ReactElement } from 'react'
import { ButtonSize, ButtonState } from './enum';
import clsx from 'clsx';


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

const Button: FC<IProps> = ({
    value = "",
    variant = ButtonState.PRIMARY,
    size = ButtonSize.lg,
    icon,
    iconTwo,
    className,
    disabled,
    isLoading = false,
    spinner = "white",
    ...props
}) => {
    return (
        <button
            data-testid="rob-button"
            className={clsx(
                className,
                variant,
                size,
                "disabled:cursor-not-allowed disabled:opacity-50"
            )}
            disabled={disabled}
            {...props}
        >
            {icon &&
                <span
                    data-testid={"rob-icon"}
                    className={"mr-2"}
                >{icon}</span>
            }
            <span>{value}</span>
            {iconTwo &&
                <span
                    data-testid={"rob-icon"}
                    className={"ml-2"}
                >{iconTwo}</span>
            }
        </button>
    )
}

export default Button