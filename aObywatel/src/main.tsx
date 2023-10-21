import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home/Home.tsx";
import PetitionPage from "./pages/Petition/Petition.tsx";
import CreatePetitionPage from "./pages/CreatePetition/CreatePetition.tsx";
import { ProvideUserLocalStoarge } from "./user/user.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/petition/:petitionId",
    element: <PetitionPage />,
  },
  {
    path: "/create",
    element: <CreatePetitionPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvideUserLocalStoarge>
      <RouterProvider router={router} />
    </ProvideUserLocalStoarge>
  </React.StrictMode>
);
