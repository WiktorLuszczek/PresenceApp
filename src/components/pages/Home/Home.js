import styles from './Home.module.scss'
import { LogForm } from '../../features/LogForm/LogForm'

export const Home = () => {
    return (
        <>
            <h1 className={styles.header}>LKS Olimpia Brzeziny</h1>
            <LogForm />
        </>
    )
}