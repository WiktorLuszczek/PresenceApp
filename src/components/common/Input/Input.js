import styles from './Input.module.scss'

export const Input = props => {
    return (
        <input className={styles.input} placeholder={props.placeholder} onChange={props.action}></input>
    )
}