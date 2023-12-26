import React, { useState, useEffect } from 'react';

const Home = () => {
  const [notices, setNotices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchNotices = async () => {
    try {
      const url = selectedCategory
        ? `http://localhost:3001/api/notices?category=${selectedCategory}`
        : 'http://localhost:3001/api/notices';

      const response = await fetch(url);
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, [selectedCategory]);

  return (
    <div>
      <h2>Home Page</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="parking">Parking</option>
        <option value="covid">COVID</option>
        <option value="maintenance">Maintenance</option>
      </select>

      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <h3>{notice.title}</h3>
            <p>{notice.body}</p>
            <p>Category: {notice.category}</p>
            <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
