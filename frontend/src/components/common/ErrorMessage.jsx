function ErrorMessage({ mensaje }) {
    return (
        <div style={styles.container}>
            <p style={styles.icon}>⚠️</p>
            <p style={styles.texto}>{mensaje || 'Ha ocurrido un error'}</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#ffebee',
        borderRadius: '8px',
        margin: '2rem',
    },
    icon: {
        fontSize: '3rem',
        margin: 0,
    },
    texto: {
        color: '#c62828',
        fontSize: '1.1rem',
    },
};

export default ErrorMessage;