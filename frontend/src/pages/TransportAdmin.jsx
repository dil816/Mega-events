import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import TransportTable from "../components/transport/TransportTable"

const TransportAdmin = () => {
    const [books, setBooks] = useState([]);
   
        
       
        useEffect(() => {
          
          axios
            .get("http://localhost:5555/transport")
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
        <TransportTable books={books} />
    </div>
  )
}

export default TransportAdmin;