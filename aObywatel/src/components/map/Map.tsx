import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Link } from "react-router-dom";

export interface Location {
    location_lat: number;
    location_lng: number;
}

export interface Point extends Location {
    _id: string;
    title: string;
    signCount: number;
    author: string;
    createdAt: Date;
    link: string;
}

export interface MapProps {
    center: Location;
    markers: Point[];
}

const Map = ({ center, markers }: MapProps) => {
    const [computedMarkers, _] = useState(markers);

    return (
        <MapContainer
            {...{
                center: { lat: center.location_lat, lng: center.location_lng },
                zoom: 12,
            }}
            style={{ height: "100vh", zIndex: 1 }}
        >
            <TileLayer
                {...{
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                }}
            />
            {computedMarkers.map((point) => (
                <Marker
                    key={point._id}
                    position={[point.location_lat, point.location_lng]}
                >
                    <Popup {...{
                        style: { width: "100%" },
                    }}>
                        <h2 className="text-lg text-yellow-700 mb-5">{point.title}</h2>
                        <h3 className="font-semibold">Podpisy: </h3>
                        <p
                            style={{ marginBottom: "2rem", marginTop: "0.5rem" }}
                        >{point.signCount}</p>
                        <h3 className="font-semibold">Data dodania</h3>
                        <p
                            style={{ marginTop: "0.5rem" }}
                        >{point.createdAt.toLocaleDateString()}</p>
                        <Link
                            to={point.link}
                            target="_blank"
                            className="underline font-medium"
                        >
                            Zobacz szczegóły
                        </Link>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};
export default Map;