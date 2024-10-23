// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <p>© 2024 Market Foro. Todos los derechos reservados-Lian Daniel Sierra Vera.</p>
            <p>
                <a href="/nosotros" className="text-white p-3">Inicio</a> 
                <a href="/sucursales" className="text-white p-3">Carrito</a>
                <a href="/nosotros" className="text-white p-3">Nosotros</a> 
                <a href="/sucursales" className="text-white p-3">Ubicaciones</a>
            </p>
        </footer>
    );
};

export default Footer;
