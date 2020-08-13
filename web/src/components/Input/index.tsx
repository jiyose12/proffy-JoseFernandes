import React, { InputHTMLAttributes } from 'react'

import './styles.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} {...rest} />
        </div>
    )
}

export default Input