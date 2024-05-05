import { Routes, Route } from "react-router-dom";
import Transport from "./pages/Transport";
import CreateTransport from "./pages/CreateTransport";
import ShowTransport from "./pages/ShowTransport";
import EditTransport from "./pages/EditTransport";
import DeleteTransport from "./pages/DeleteTransport";
import Bookseat from "./pages/Bookseat"
//import SeatSelction from "./SeatSelection/SeatSelction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Transport />} />
        <Route path="/transport/create" element={<CreateTransport />} />
        <Route path="/transport/details/:id" element={<ShowTransport />} />
        <Route path="/transport/edit/:id" element={<EditTransport />} />
        <Route path="/transport/delete/:id" element={<DeleteTransport />} />
       <Route path="/bookseat/:id" element={<Bookseat/>}/>
      </Routes>
    </>
  );
}

export default App;
