import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaHoteles from './pages/ListaHoteles';
import DetalleHotel from './pages/DetalleHotel';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ListaHoteles />} />
                    <Route path="/hotel/:id" element={<DetalleHotel />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;