import React, { useState, useEffect } from 'react';

const MyNotices = () => {
  const [userNotices, setUserNotices] = useState([]);

  const fetchUserNotices = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/notices');
      const data = await response.json();
      setUserNotices(data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  useEffect(() => {
    fetchUserNotices();
  }, []);

  return (
    <div>
      <h2>My Notices Page</h2>
      <ul>
        {userNotices.map((notice) => (
          <li key={notice._id}>
            <h3>{notice.title}</h3>
            <p>{notice.body}</p>
            <p>Category: {notice.category}</p>
            <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
            {/* Add edit and delete buttons */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyNotices;
