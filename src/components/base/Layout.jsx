import styles from './styles/Layout.module.css'

function Layout({children}) {
    return <div className={styles.Layout}>
        {children}
    </div>
}

export default Layout