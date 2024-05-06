import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import OrderCard from "../components/Orderhome/OrderCard";
import OrderTable from "../components/Orderhome/OrderTable";

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowtype] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/order")
      .then((response) => {
        setOrders(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  return (

  
    
    <div className="p-4">
      
      <div className="flex justify-between items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("card")}
        >
          Card
         
        </button>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Order List</h1>
          <Link to="/order/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
      </div>


     

      {loading ? (
        <Spinner />
      ) : showtype == "table" ? (
        <OrderTable order={orders} />
      ) : (
        <OrderCard order={orders} />
      )}
    </div>
  );
};

export default Home;
