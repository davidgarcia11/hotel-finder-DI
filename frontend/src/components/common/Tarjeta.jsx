import { Link } from 'react-router-dom';

function Tarjeta({ id, imagen, titulo, subtitulo, precio, link }) {
    return (
        <div style={styles.card}>
            <img src={imagen} alt={titulo} style={styles.imagen} />
            <div style={styles.contenido}>
                <h3 style={styles.titulo}>{titulo}</h3>
                <p style={styles.subtitulo}>{subtitulo}</p>
                <div style={styles.footer}>
                    <p style={styles.precio}>Desde {precio}€</p>
                    {link && (
                        <Link to={link} style={styles.boton}>
                            Ver más
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
    },
    imagen: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    contenido: {
        padding: '1rem',
    },
    titulo: {
        margin: '0 0 0.5rem 0',
        fontSize: '1.2rem',
        color: '#333',
    },
    subtitulo: {
        margin: '0 0 1rem 0',
        color: '#666',
        fontSize: '0.9rem',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    precio: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        margin: 0,
    },
    boton: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        textDecoration: 'none',
        fontSize: '0.9rem',
    },
};

export default Tarjeta;