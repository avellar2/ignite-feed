import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=60&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='programação
            '/>

            <div className={styles.profile}>
                <strong>Vanderson Avellar</strong>
                <span>Programador Frontend</span>
            </div>

            <footer>
                <a href='#'>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}