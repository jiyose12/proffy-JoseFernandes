import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
    name: string
    options: Array<{
        value: string
        label: string
    }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" name={name} id={name} {...rest}>
                <option disabled hidden value="">Selecione uma opção</option>

                { options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                )) }
            </select>
        </div>
    )
}

export default Select