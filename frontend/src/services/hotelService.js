const API_URL = 'http://localhost:3001';

export const hotelService = {
    // Obtener todos los hoteles
    getAllHotels: async () => {
        try {
            // Simular delay de 2 segundos
            await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await fetch(`${API_URL}/hotels`);
            if (!response.ok) {
                throw new Error('Error al cargar hoteles');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Obtener un hotel por ID
    getHotelById: async (id) => {
        try {
            const response = await fetch(`${API_URL}/hotels/${id}`);
            if (!response.ok) {
                throw new Error('Error al cargar el hotel');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    getPromociones: async () => {
            try {
                const response = await fetch(`${API_URL}/promociones`);
                if (!response.ok) {
                    throw new Error('Error al cargar promociones');
                }
                return await response.json();
            } catch (error) {
                console.error('Error:', error);
                throw error;
        }
    }
    };