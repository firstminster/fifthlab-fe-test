import React, { FC, ReactElement } from 'react'
import { SlMagnifier } from 'react-icons/sl';

export interface InputProps {
    name: string;
    type: string;
    label?: string;
    icon?: ReactElement;
    placeholder: string;
    // disabled?: boolean;
    cssstyles?: string;
    [key: string]: any;
}

const Input: FC<InputProps> = ({
    name,
    type = "text",
    label,
    placeholder,
    icon,
    cssstyles,
    ...props
}) => {
    return (
        <div className="relative">
            <SlMagnifier className="absolute top-5 left-5 " size={25} data-testid="rob-input-icon" />
            <input type={type} name={name} placeholder={placeholder} className={`${cssstyles} `}   {...props} />
        </div>
    )
}

export default Input