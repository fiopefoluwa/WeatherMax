import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const containerStyle = {
  width: '90%',
  height: '100vh',
};

const center: [number, number] = [9.0820, 8.6753];


export default function WorldMapFragment() {
  return (
    <div style={containerStyle}>
      <MapContainer center={center} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>
    </div>
  );
}
