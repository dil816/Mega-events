import { Routes, Route } from "react-router-dom";
import Ajendas from "./pages/Ajendas";
import Navbar from "./components/Navbar";
import EventView from "./pages/EventView";
import { AddEvent } from "./pages/AddEvent";
import Events from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import EventInfo from "./pages/EventInfo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ajenda" element={<Ajendas />} />
        <Route path="/addajenda/:eventId" element={<Ajendas />} />
        <Route path="/eventsview" element={<EventView />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/editevent/:id" element={<EditEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventsview/:eventId" element={<EventInfo />} />
      </Routes>
    </>
  );
}

export default App;
