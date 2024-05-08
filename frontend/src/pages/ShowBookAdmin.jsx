import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SideNavbar from "../components/SideNavbar";
import BooksTable from "../components/home/BooksTable";
import Footer from "../components/footer";

const ShowBookAdmin = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
        <SideNavbar />
        <div className="flex-[85%] p-[20px]">
        <BooksTable books={books} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowBookAdmin;
