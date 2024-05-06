
import React from 'react'
import { Routes, Route } from "react-router-dom"
import SalaryHome from './pages/SalaryHome';
import CreateSalaryRecoard from "./pages/CreateSalaryRecoard";
import ShowSalaryRecoards from './pages/ShowSalaryRecoards';
import EditSalaryRecoard from './pages/EditSalaryRecoard';
import DeleteSalaryRecoard from './pages/DeleteSalaryRecoard';
import ShowSalary from './pages/ShowSalary';
import Navbar from './components/Navbar';

import Feedback from "./pages/Feedback";
import CreateFeedback from "./pages/CreateFeedback";
import ShowFeedback from "./pages/ShowFeedback";
import EditFeedback from "./pages/EditFeedback";
import DeleteFeedback from "./pages/DeleteFeedback"

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/salary' element={<SalaryHome />} />
      <Route path='/salary/create' element={<CreateSalaryRecoard />} />
      <Route path='/salary/details/:_id' element={<ShowSalaryRecoards />} />
      <Route path='/salary/edit/:_id' element={<EditSalaryRecoard />} />
      <Route path='/salary/delete/:_id' element={<DeleteSalaryRecoard />} />
      <Route path='/salary/details1/:_id' element={<ShowSalary />} />
        
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
