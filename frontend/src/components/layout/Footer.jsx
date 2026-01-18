function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>© 2025 Hotel Finder - Proyecto DI - 2º DAM</p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#2c3e50',
        padding: '2rem 1rem',
        marginTop: 'auto',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        color: 'white',
    },
};

export default Footer;