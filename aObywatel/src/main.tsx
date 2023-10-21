import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MapPicker } from "./components/map/MapPicker.tsx";
import "./index.css";
import { ProvideUserLocalStoarge } from "./user/user.tsx";
import { Location } from "./components/map/Map.tsx";


const center: Location = {
	location_lat: 51.107883,
	location_lng: 17.038538,
}
const MapPage = () => {
	return <MapPicker center={center} />
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <MapPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ProvideUserLocalStoarge>
			<RouterProvider router={router} />
		</ProvideUserLocalStoarge>
	</React.StrictMode>
);
