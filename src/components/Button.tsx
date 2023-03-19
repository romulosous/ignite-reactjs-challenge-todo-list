import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

import IcPlus from "../assets/plus.svg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button className={styles.button} {...props}>{children} <img src={IcPlus} alt="" /></button>
    ) 
}