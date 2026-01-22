import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { hotelService } from '../services/hotelService';
import Tarjeta from '../components/common/Tarjeta';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

import ServiceTag from '../components/common/ServiceTag';

function DetalleHotel() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        hotelService.getHotelById(id)
            .then(data => {
                setHotel(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage mensaje={error} />;
    if (!hotel) return <ErrorMessage mensaje="Hotel no encontrado" />;

    return (
        <div style={styles.container}>
            <img src={hotel.imagen} alt={hotel.nombre} style={styles.imagenGrande} />

            <div style={styles.info}>
                <h1>{hotel.nombre}</h1>
                <p style={styles.estrellas}>{'⭐'.repeat(hotel.estrellas)}</p>
                <p style={styles.valoracion}>Valoración: {hotel.valoracion}/5</p>
                <p style={styles.direccion}>📍 {hotel.direccion}, {hotel.ciudad}</p>
                <p style={styles.descripcion}>{hotel.descripcion}</p>

                <div style={styles.servicios}>
                    <h3>Servicios:</h3>
                    <div style={styles.serviciosGrid}>
                        {/* 2. USAMOS EL COMPONENTE REUTILIZABLE */}
                        {hotel.servicios.map((servicio, index) => (
                            <ServiceTag key={index} texto={servicio} />
                        ))}
                    </div>
                </div>

                {hotel.aceptaMascotas && (
                    <p style={styles.mascotas}>🐾 Acepta mascotas</p>
                )}
            </div>

            <div style={styles.habitaciones}>
                <h2>Habitaciones Disponibles</h2>
                <div style={styles.habitacionesGrid}>
                    {hotel.habitaciones.map(habitacion => (
                        <Tarjeta
                            key={habitacion.id}
                            imagen={habitacion.imagen}
                            titulo={habitacion.tipo}
                            subtitulo={`Capacidad: ${habitacion.capacidad} ${habitacion.capacidad === 1 ? 'persona' : 'personas'}`}
                            precio={habitacion.precio}
                            link={null}
                        />
                    ))}
                </div>
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
    imagenGrande: {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '2rem',
    },
    info: {
        marginBottom: '3rem',
    },
    estrellas: {
        fontSize: '1.5rem',
        margin: '0.5rem 0',
    },
    valoracion: {
        fontSize: '1.2rem',
        color: '#2c3e50',
        fontWeight: 'bold',
    },
    direccion: {
        fontSize: '1.1rem',
        color: '#666',
        margin: '1rem 0',
    },
    descripcion: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#444',
        margin: '1.5rem 0',
    },
    servicios: {
        margin: '2rem 0',
    },
    serviciosGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '1rem',
    },

    mascotas: {
        fontSize: '1.1rem',
        color: '#4caf50',
        fontWeight: 'bold',
        marginTop: '1rem',
    },
    habitaciones: {
        marginTop: '3rem',
    },
    habitacionesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginTop: '1.5rem',
    },
};

export default DetalleHotel;