import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AjendacontextProvider } from "./context/Ajendacontext.jsx";
import { EventcontextProvider } from "./context/Eventcontext.jsx";
import { SnackbarProvider } from "notistack";
import 'react-big-calendar/lib/css/react-big-calendar.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <EventcontextProvider>
        <AjendacontextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AjendacontextProvider>
      </EventcontextProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
