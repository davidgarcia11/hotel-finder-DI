function PanelFiltros({
                          busqueda,
                          setBusqueda,
                          precioMax,
                          setPrecioMax,
                          desayuno,
                          setDesayuno,
                          mascotas,
                          setMascotas,
                          ordenPrecio,
                          setOrdenPrecio
                      }) {
    return (
        <div style={styles.panel}>
            <h3>Filtros</h3>

            {/* Búsqueda por texto */}
            <div style={styles.filtro}>
                <label>Buscar:</label>
                <input
                    type="text"
                    placeholder="Nombre o ciudad..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={styles.input}
                />
            </div>

            {/* Filtro de precio */}
            <div style={styles.filtro}>
                <label>Precio máximo: {precioMax}€</label>
                <input
                    type="range"
                    min="0"
                    max="500"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(Number(e.target.value))}
                    style={styles.slider}
                />
            </div>

            {/* Desayuno incluido */}
            <div style={styles.filtro}>
                <label style={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={desayuno}
                        onChange={(e) => setDesayuno(e.target.checked)}
                    />
                    Con desayuno incluido
                </label>
            </div>

            {/* Acepta mascotas */}
            <div style={styles.filtro}>
                <label style={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={mascotas}
                        onChange={(e) => setMascotas(e.target.checked)}
                    />
                    Acepta mascotas
                </label>
            </div>

            {/* Ordenación */}
            <div style={styles.filtro}>
                <label>Ordenar por precio:</label>
                <select
                    value={ordenPrecio}
                    onChange={(e) => setOrdenPrecio(e.target.value)}
                    style={styles.select}
                >
                    <option value="">Sin ordenar</option>
                    <option value="asc">Menor a mayor</option>
                    <option value="desc">Mayor a menor</option>
                </select>
            </div>
        </div>
    );
}

const styles = {
    panel: {
        backgroundColor: '#f5f5f5',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
    },
    filtro: {
        marginBottom: '1.5rem',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        marginTop: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '1rem',
    },
    slider: {
        width: '100%',
        marginTop: '0.5rem',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
    },
    select: {
        width: '100%',
        padding: '0.5rem',
        marginTop: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '1rem',
    },
};

export default PanelFiltros;