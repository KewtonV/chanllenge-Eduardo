import React from 'react'

interface Props{
    label: string,
    value: string,
    type?: string,
    onChange(value: React.ChangeEvent<HTMLInputElement>): void 
}

export default function InputComponent({label, type = 'string', value, onChange}:Props) {
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    )
}