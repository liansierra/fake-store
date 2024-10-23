// App.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import Map from './components/Map';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <Header />
      <main style={{ flex: 1 }}> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/sucursales" element={<Map />} />
        </Routes>
      </main>
      <Footer /> {/* Agrega el Footer aquí */}
    </div>
  );
}

export default App;
