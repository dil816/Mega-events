import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const UserProfile = (props) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState("");
  const location = useLocation();
  console.log(location.state.userId);

  const data1 = location.state.userId;
  
  useEffect(() => {
    
    console.log(data);
    const fetchUserDetails = async () => {
      const response = await fetch(`http://localhost:5555/register/${data1}`);

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setUser(data);
      }
    };

    fetchUserDetails();
  }, [location.state.userId]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
  <h2 style={{ color: '#333', fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>User Profile</h2>

  {user ? (
    <div className="profile-details" style={{ fontSize: '18px', fontWeight: 'normal', lineHeight: '1.5' }}>
      <p style={{ marginBottom: '8px' }}>Name: {user.name}</p>
      <p style={{ marginBottom: '8px' }}>Gmail: {user.gmail}</p>
      <p style={{ marginBottom: '8px' }}>Gender: {user.gender}</p>
      <p style={{ marginBottom: '8px' }}>Age: {user.age}</p>
      <p style={{ marginBottom: '8px' }}>Address: {user.address}</p>
      <p style={{ marginBottom: '8px' }}>Contact No: {user.contact}</p>
    </div>
  ) : (
    <p>Loading user details...</p>
  )}
  <Link to={`/profile/${data1}`} style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>
    <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '12px 24px', fontSize: '20px', borderRadius: '4px', cursor: 'pointer' }}>Save Changes</button>
  </Link>
</div>


  );
};

export default UserProfile;
