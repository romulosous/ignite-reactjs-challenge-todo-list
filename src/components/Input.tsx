import { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = ({...props}: InputProps) => {
    return (
        <input className={styles.input} type="text" {...props} />
    ) 
}