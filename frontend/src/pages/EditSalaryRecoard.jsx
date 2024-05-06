import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import backgroundImage from '../assets/SalaryAssets/bimage3.jpg'


const EditSalaryRecoard = () => {
  const [name, setName] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [attendance, setAttendance] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/salary/${_id}`)
      .then((response) => {
        setName(response.data.name);
        setBasicSalary(response.data.basicSalary);
        setAttendance(response.data.attendance);

        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleEditSalary = () => {

    // Name validation
    if (!/^[A-Za-z\s]+$/.test(name)) {
      enqueueSnackbar('Please enter words only for Name', { variant: 'error' });
      return;
    }
    
    // Basic Salary validation
    if (!/^\d+$/.test(basicSalary)) {
      enqueueSnackbar('Please enter a valid number for Basic Salary', { variant: 'error' });
      return;
    }
    // Attendance validation
    if (!/^\d+$/.test(attendance) || parseInt(attendance) < 1 || parseInt(attendance) > 31) {
      enqueueSnackbar('Please enter a number between 1 and 31 for Attendance', { variant: 'error' });
      return;
    }
    const data = {
      name,
      basicSalary,
      attendance,

    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/salary/${_id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Salary Edited successfully', { variant: 'success' });
        navigate('/salary');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };


  return (
    <div
    className='p-4'
    style={{
      backgroundImage: `url(${backgroundImage})`, // Set background image
      backgroundSize: 'cover', // Adjust background image size
      backgroundPosition: 'center', // Adjust background image position
      minHeight: '100vh', // Ensure the background covers the entire screen
    }}
  >
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center font-bold text-black'>Edit Salary</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-bold text-black'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-bold text-black'>Basic Salary</label>
          <input
            type='text'
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 font-bold text-black'>Attendance</label>
          <input
            type='text'
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <button className='p-2 bg-sky-300 m-8 font-bold text-black' onClick={handleEditSalary}>
          Save
        </button>
      </div>
    </div>
  </div>
  )
}


export default EditSalaryRecoard