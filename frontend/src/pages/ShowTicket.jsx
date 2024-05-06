import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowTicket = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/ticket/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Ticket</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{book.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{book.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">
              RegistrationNumber
            </span>
            <span>{book.registrationNumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">eventType</span>
            <span>{book.eventType}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">contactNumber</span>
            <span>{book.contactNumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">requestType</span>
            <span>{book.requestType}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">subject</span>
            <span>{book.subject}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">message</span>
            <span>{book.message}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">attachment</span>
            <span>{book.attachment}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowTicket;
