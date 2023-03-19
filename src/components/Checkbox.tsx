import { InputHTMLAttributes } from "react"
import styles from "./Checkbox.module.css"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Checkbox = ({...props}: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
        <input className={styles.input} type="checkbox" {...props}/>
        <span className={styles.checkmark} />
    </label>
  )
}
