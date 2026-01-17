import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link to="/" style={styles.logo}>
                    🏨 Hotel Finder
                </Link>
                <nav>
                    <Link to="/" style={styles.link}>
                        Inicio
                    </Link>
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#2c3e50',
        padding: '1rem',
        marginBottom: '2rem',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: '1.5rem',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        marginLeft: '2rem',
    },
};

export default Header;