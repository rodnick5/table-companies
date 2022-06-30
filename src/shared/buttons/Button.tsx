import React from 'react'

interface ButtonProps {
    backgroundColor: string
    text: string
    borderColor: string
    textColor: string
    onClick?: () => void
    buttonType: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({backgroundColor, borderColor, text, textColor, onClick, buttonType}) => {
    return (
        <button type={buttonType} onClick={onClick} style={{cursor: 'pointer', background: backgroundColor, borderWidth: 1, borderStyle: 'solid', borderColor, padding: '5px 14px', display: 'inline-block', borderRadius: 20 }}>
            <p style={{color: textColor}}>
        {text}
            </p>
        </button>
    )
}

export default Button       