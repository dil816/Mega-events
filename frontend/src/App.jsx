
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

import Users from "./pages/Users";
import CreateUser from "./pages/CreateUsers";
import ShowUser from "./pages/ShowUser";
import EditUser from "./pages/EditUser";
import DeleteUser from "./pages/DeleteUser";
import Navbar from "./components/Navbar";
import LogIn from "./components/users/LogIn";
import SignUp from "./components/users/SignUp";
import DashBoard from "./pages/DashBoard";
//import UserProfile from "./components/User/UserProfile";
import UserProfile from "./pages/UserProfile";
import UpdateUserProfile from "./pages/UpdateUserProfile";

import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Navbar from "./components/home/Navbar";

import Transport from "./pages/Transport";
import CreateTransport from "./pages/CreateTransport";
import ShowTransport from "./pages/ShowTransport";
import EditTransport from "./pages/EditTransport";
import DeleteTransport from "./pages/DeleteTransport";
import Bookseat from "./pages/Bookseat"
//import SeatSelction from "./SeatSelection/SeatSelction";



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
          
           <Route path="/users" element={<Users />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/profile/:id" element={<UpdateUserProfile />} />
        <Route path="/regi" element={<SignUp />} />
        <Route path="/log" element={<LogIn />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/details/:id" element={<ShowUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/delete/:id" element={<DeleteUser />} />
          
           <Route path="/books" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />

        <Route path="/transport" element={<Transport />} />
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
