import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Location } from "./Map";
import styled from "styled-components";
import { useEffect, useState } from "react";
import IconLocation from "../Icons/IconLocation";

const LocationFinderDummy = () => {
    return null;
};

const OuterContainer = styled.div`
    position: relative;
    display: grid;
    & > * {
        grid-row: 1;
        grid-column: 1;
    }
`

const Pin = styled.div`
    & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 100000;

        width: 30px;
        height: 30px;
        border-radius: 20000px;
    }

`

const MyMapContainer = styled(MapContainer)`

`

const MapPicker = (props: {
    center: Location,
    onLatLng: (changed: Location) => void,
    height?: string
}) => {
    const { center } = props
    const [map, setMap] = useState<any>()
    useEffect(() => {
        if (!map) {
            return
        }
        const handler = () => {
            const { lat, lng } = map.getCenter()
            props.onLatLng({
                location_lat: lat,
                location_lng: lng,
            })
        }
        window.addEventListener("mousemove", handler)
        window.addEventListener("touchmove", handler)
        return () => {
            window.removeEventListener("mousemove", handler)
            window.removeEventListener("touchmove", handler)
        }
    }, [map])
    return (
        <OuterContainer>
            <Pin>
                <IconLocation />
            </Pin>
            <MyMapContainer
                ref={setMap}
                {...{
                    center: { lat: center.location_lat, lng: center.location_lng },
                    zoom: 12,
                }}
                style={{ height: props.height ? props.height : "100vh", zIndex: 1 }}
            >
                <TileLayer
                    {...{
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }}
                />
                <LocationFinderDummy />
            </MyMapContainer>
        </OuterContainer>
    );
};
export default MapPicker;