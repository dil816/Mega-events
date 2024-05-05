
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowSalary = () => {

  const [salary, setSalary] = useState({});
  const [loading, setLoading] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/salary/${_id}`)
      .then((response) => {
        setSalary(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div className='bg-blue-300'>

    <div className='p-4 '>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Show Salary</h1>
     
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto bg-blue-100'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{salary._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{salary.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Basic Salary</span>
            <span>{salary.basicSalary}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Attendance</span>
            <span>{salary.attendance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Allowance</span>
            <span>{salary.allowance}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Epf</span>
            <span>{salary.epf}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Etf</span>
            <span>{salary.etf}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Tax</span>
            <span>{salary.tax}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>NetSalary</span>
            <span>{salary.netSalary}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(salary.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(salary.updatedAt).toString()}</span>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};


export default ShowSalary