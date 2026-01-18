import { useState, useEffect } from 'react';
import { hotelService } from '../services/hotelService';
import Tarjeta from '../components/common/Tarjeta';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

function ListaHoteles() {
    const [hoteles, setHoteles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Llamar a la API cuando el componente se carga
        hotelService.getAllHotels()
            .then(data => {
                setHoteles(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Calcular precio mínimo de cada hotel
    const getPrecioMinimo = (habitaciones) => {
        return Math.min(...habitaciones.map(h => h.precio));
    };

    if (loading) return <Loading />;
    if (error) return <ErrorMessage mensaje={error} />;

    return (
        <div style={styles.container}>
            <h1>Hoteles Disponibles</h1>
            <div style={styles.grid}>
                {hoteles.map(hotel => (
                    <Tarjeta
                        key={hotel.id}
                        id={hotel.id}
                        imagen={hotel.imagen}
                        titulo={hotel.nombre}
                        subtitulo={hotel.ciudad}
                        precio={getPrecioMinimo(hotel.habitaciones)}
                        link={`/hotel/${hotel.id}`}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
    },
};

export default ListaHoteles;