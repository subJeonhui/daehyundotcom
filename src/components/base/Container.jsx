import styles from './styles/Container.module.css'

function Container({children, direction, fullWidth, gap, className}) {
    return <div className={`${className} 
    ${styles.Container} ${direction === 'row' ? styles.DirectionRow : styles.DirectionColumn }`}
    style={{gap: `${gap}px`, width: fullWidth ? '100%' : "auto"}}>
        {children}
    </div>
}

export default Container