import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ListaHoteles from './pages/ListaHoteles';
import DetalleHotel from './pages/DetalleHotel';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<ListaHoteles />} />
                        <Route path="/hotel/:id" element={<DetalleHotel />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;