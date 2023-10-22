import { ThemeProvider } from "@mui/material"
import customTheme from "../customTheme"
import { useEffect, useState } from "react";
import { Petition } from "./Petition/Petition.types";
import Map, { Point } from "../components/map/Map";

export const MapPage = () => {
    const WARSAW_GEO_COORDINATES = {
        location_lat: 52.2504,
        location_lng: 21.0029
    }
    const [markers, setMarkers] = useState<Point[]>()
    useEffect(() => {
        let done = false;
        (async () => {
            const response = await fetch(`http://localhost:9125/api/petitions/`);
            const data: Petition[] = await response.json();

            if (!done) {
                const filtered = data
                    .filter(p => !!p.coordinates)
                    .map(p => ({
                        _id: p.id,
                        author: "",
                        createdAt: new Date(p.creationDate),
                        link: `/petition/${p.id}`,
                        location_lat: p.coordinates.location_lat,
                        location_lng: p.coordinates.location_lng,
                        signCount: p.signedBy.length,
                        title: p.title,
                    }))
                console.log({ filtered })
                setMarkers(filtered)
            }
        })();
        return () => {
            done = true
        }
    }, [setMarkers])

    console.log("Outer When rendering", { markers })

    return <ThemeProvider theme={customTheme}>
        <Map center={WARSAW_GEO_COORDINATES} markers={markers ?? []} />
    </ThemeProvider>
}