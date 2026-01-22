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

    // NUEVO: Estado para promociones
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {
        // LLAMADA 1: Cargar Hoteles (Endpoint principal)
        hotelService.getAllHotels()
            .then(data => {
                setHoteles(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });

        // LLAMADA 2: Cargar Promociones (Nuevo endpoint - 3er requisito)
        // Lo hacemos independiente para que si falla no rompa la página entera
        hotelService.getPromociones()
            .then(data => setPromociones(data))
            .catch(err => console.error("Error cargando promociones:", err));

    }, []);

    // Calcular precio mínimo de cada hotel
    const getPrecioMinimo = (habitaciones) => {
        return Math.min(...habitaciones.map(h => h.precio));
    };

    // Aplicar filtros
    const hotelesFiltrados = hoteles
        .filter(hotel => {
            const textoMatch =
                hotel.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                hotel.ciudad.toLowerCase().includes(busqueda.toLowerCase());
            const precioMin = getPrecioMinimo(hotel.habitaciones);
            const precioMatch = precioMin <= precioMax;
            const desayunoMatch = !desayuno || hotel.habitaciones.some(h => h.desayunoIncluido);
            const mascotasMatch = !mascotas || hotel.aceptaMascotas;

            return textoMatch && precioMatch && desayunoMatch && mascotasMatch;
        })
        .sort((a, b) => {
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

                <main style={styles.mainContent}>
                    {/* NUEVO: Banner de Promociones */}
                    {promociones.length > 0 && (
                        <div style={styles.promoBanner}>
                            <h3 style={styles.promoTitle}>🔥 Ofertas Flash</h3>
                            <div style={styles.promoGrid}>
                                {promociones.map(promo => (
                                    <div key={promo.id} style={styles.promoItem}>
                                        <span>{promo.titulo}</span>
                                        <span style={styles.promoCode}>Código: {promo.codigo}</span>
                                        <span style={styles.promoDiscount}>-{promo.descuento}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

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

// Actualiza los estilos al final del archivo para incluir el banner
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
    // NUEVOS ESTILOS
    promoBanner: {
        backgroundColor: '#fff3e0',
        border: '1px solid #ffe0b2',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem',
    },
    promoTitle: {
        color: '#e65100',
        marginTop: 0,
        marginBottom: '0.5rem',
        fontSize: '1.2rem',
    },
    promoGrid: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    promoItem: {
        backgroundColor: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        fontSize: '0.9rem',
    },
    promoCode: {
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: '#eee',
        padding: '2px 6px',
        borderRadius: '4px',
    },
    promoDiscount: {
        color: '#d32f2f',
        fontWeight: 'bold',
    }
};

export default ListaHoteles;