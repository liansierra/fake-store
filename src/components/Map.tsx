import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define una interfaz para tipar las sucursales
interface Branch {
  name: string;
  category: string;  // Nueva propiedad para la categoría (ropa, joyería, computación)
  lat: number;
  lng: number;
}

const center: LatLngExpression = [21.1619, -86.8515];


const fetchBranches = async (): Promise<Branch[]> => {
  return [
    { name: "Tienda de Ropa 1", category: "Tienda de ropa Market Foro", lat: 21.1619, lng: -86.8515 },
    { name: "Joyería 1", category: "Tienda de Joyería Market Foro", lat: 21.1211, lng: -86.8452 },
    { name: "Computación 1", category: "Tienda de Computación Market Foro", lat: 21.1748, lng: -86.8465 },
    { name: "Joyería 2", category: "Joyería", lat: 21.1350, lng: -86.8325 },
  ];
};

const Map: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]); 

  
  useEffect(() => {
    const getBranches = async () => {
      const data = await fetchBranches();
      setBranches(data);
    };
    getBranches();
  }, []);

  return (
    <>
    <div className='container'>
    <h1 className='h1 mb-3 mt-3 text-center'>Sucursales</h1>
    
    <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {branches.map((branch, index) => (
        <Marker key={index} position={[branch.lat, branch.lng] as LatLngExpression}>
          <Popup>
            {branch.name} <br />
            Categoría: {branch.category} {}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
    </>
  );
};

export default Map;