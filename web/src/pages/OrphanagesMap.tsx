import React from 'react';
import { Link } from 'react-router-dom';
import  {FiPlus} from 'react-icons/fi';
// MapContainer e a mesma coisa de Map
import { MapContainer, TileLayer, Marker} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt='Happy'/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :</p>
                </header>

                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa Catarian</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-27.2057496,-49.6582354]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Marker 
                position={[-27.2057496,-49.6582354]}
            />


            <Link to='' className='create-orphanage'>
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;