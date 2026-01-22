function ServiceTag({ texto }) {
    return (
        <span style={styles.tag}>
            {texto}
        </span>
    );
}

const styles = {
    tag: {
        backgroundColor: '#e3f2fd',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontSize: '0.9rem',
        color: '#1976d2',
        display: 'inline-block', // Para que respete márgenes
    }
};

export default ServiceTag;