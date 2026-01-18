import { useState, useEffect } from 'react';
import { hotelService } from '../services/hotelService';
import Tarjeta from '../components/common/Tarjeta';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import PanelFiltros from '../components/hoteles/PanelFiltros';

function ListaHoteles() {
    // Estado de datos
    const [hoteles, setHoteles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estado de filtros
    const [busqueda, setBusqueda] = useState('');
    const [precioMax, setPrecioMax] = useState(500);
    const [desayuno, setDesayuno] = useState(false);
    const [mascotas, setMascotas] = useState(false);
    const [ordenPrecio, setOrdenPrecio] = useState('');

    useEffect(() => {
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

    // Aplicar filtros
    const hotelesFiltrados = hoteles
        .filter(hotel => {
            // Filtro de búsqueda por texto
            const textoMatch =
                hotel.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                hotel.ciudad.toLowerCase().includes(busqueda.toLowerCase());

            // Filtro de precio
            const precioMin = getPrecioMinimo(hotel.habitaciones);
            const precioMatch = precioMin <= precioMax;

            // Filtro de desayuno
            const desayunoMatch = !desayuno || hotel.habitaciones.some(h => h.desayunoIncluido);

            // Filtro de mascotas
            const mascotasMatch = !mascotas || hotel.aceptaMascotas;

            return textoMatch && precioMatch && desayunoMatch && mascotasMatch;
        })
        .sort((a, b) => {
            // Ordenar por precio
            if (ordenPrecio === 'asc') {
                return getPrecioMinimo(a.habitaciones) - getPrecioMinimo(b.habitaciones);
            } else if (ordenPrecio === 'desc') {
                return getPrecioMinimo(b.habitaciones) - getPrecioMinimo(a.habitaciones);
            }
            return 0;
        });

    if (loading) return <Loading />;
    if (error) return <ErrorMessage mensaje={error} />;

    return (
        <div style={styles.container}>
            <h1>Hoteles Disponibles</h1>

            <div style={styles.mainLayout}>
                {/* Sidebar izquierdo con filtros */}
                <aside style={styles.sidebar}>
                    <PanelFiltros
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        precioMax={precioMax}
                        setPrecioMax={setPrecioMax}
                        desayuno={desayuno}
                        setDesayuno={setDesayuno}
                        mascotas={mascotas}
                        setMascotas={setMascotas}
                        ordenPrecio={ordenPrecio}
                        setOrdenPrecio={setOrdenPrecio}
                    />
                </aside>

                {/* Contenido principal con hoteles */}
                <main style={styles.mainContent}>
                    <p style={styles.resultados}>
                        {hotelesFiltrados.length} {hotelesFiltrados.length === 1 ? 'hotel encontrado' : 'hoteles encontrados'}
                    </p>

                    {hotelesFiltrados.length === 0 ? (
                        <p style={styles.sinResultados}>No se encontraron hoteles con estos filtros</p>
                    ) : (
                        <div style={styles.grid}>
                            {hotelesFiltrados.map(hotel => (
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
                    )}
                </main>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem',
    },
    mainLayout: {
        display: 'flex',
        gap: '2rem',
        marginTop: '2rem',
    },
    sidebar: {
        width: '20%',
        minWidth: '250px',
    },
    mainContent: {
        flex: 1,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
    },
    resultados: {
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '1rem',
    },
    sinResultados: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#999',
        padding: '3rem',
    },
};

export default ListaHoteles;