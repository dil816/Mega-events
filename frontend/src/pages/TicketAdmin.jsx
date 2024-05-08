import React from "react";
import { useEffect, useState } from "react";
import TicketTable from "../components/Ticket/TicketTable";
import axios from "axios";

const TicketAdmin = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
   
    axios
      .get("http://localhost:5555/ticket")
      .then((response) => {
        setBooks(response.data.data);
       
      })
      .catch((error) => {
        console.log(error);
       
      });
  }, []);
  return (
    <div>
      <TicketTable books={books} />
    </div>
  );
};

export default TicketAdmin;
