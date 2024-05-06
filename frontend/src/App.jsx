import React from "react";
import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
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
      </Routes>
    </>
  );
};

export default App;
