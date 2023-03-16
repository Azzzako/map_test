import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import { myIcon } from "./Icon";
import { FiList } from "react-icons/fi";


export const MapView = ({ users }) => {

    const usuarios = users
    const [position, setPosition] = useState([19.4361609, -99.1373136])
    const [expanded, setExpanded] = useState({});
    const [menu, setMenu] = useState(true)

    


    const mapRef = useRef(null)

    useEffect(() => {
        mapRef.current?.setView(position)
    }, [position])

    const setExpandedAll = (expanded) => {
        setExpanded(expanded);
        
    };


    return (
        <div className="elementos">
            <div className="logo">
                <FiList
                    onClick={() => setMenu(!menu)}
                    style={{cursor: 'pointer'}}
                />
                </div>

                <div className={menu ? "side_cont" : "side_cont_false"} >
                <Sidebar
                    setPosition={setPosition}
                    usuarios={usuarios}
                    expanded={expanded}
                    setExpanded={setExpandedAll}
                    setMenu={setMenu}
                    menu={menu}
                />
            </div>

            <div className="mapa_container">
                <MapContainer ref={mapRef} center={position} zoom={15} scrollWheelZoom={true} style={{ height: "100%" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={position} icon={myIcon}>
                        <Popup>
                            {`Ubicacion de ${usuarios.name}`}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>


        </div>

    )
}
