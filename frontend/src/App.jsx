import { Routes, Route } from "react-router-dom";
import PaymentHome from "./pages/PaymentHome";
import CreatePayment from "./pages/CreatePayment";
import ShowPayment from "./pages/ShowPayment";
import EditPayment from "./pages/EditPayment";
import DeletePayment from "./pages/DeletePayment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/payment" element={<PaymentHome />} />
        <Route path="/payment/create" element={<CreatePayment />} />
        <Route path="/payment/details/:id" element={<ShowPayment />} />
        <Route path="/payment/edit/:id" element={<EditPayment />} />
        <Route path="/payment/delete/:id" element={<DeletePayment />} />
      </Routes>
    </>
  );
}

export default App;
