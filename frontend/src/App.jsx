import { Routes, Route } from "react-router-dom";
import Feedback from "./pages/Feedback";
import CreateFeedback from "./pages/CreateFeedback";
import ShowFeedback from "./pages/ShowFeedback";
import EditFeedback from "./pages/EditFeedback";
import DeleteFeedback from "./pages/DeleteFeedback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback/create" element={<CreateFeedback />} />
        <Route path="/feedback/details/:id" element={<ShowFeedback />} />
        <Route path="/feedback/edit/:id" element={<EditFeedback />} />
        <Route path="/feedback/delete/:id" element={<DeleteFeedback />} />
      </Routes>
    </>
  );
}

export default App;
