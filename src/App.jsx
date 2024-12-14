import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Carousal from './components/Carousal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = import.meta.env.VITE_API;

export const dataRef = { current: null }; // Export a mutable object

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      dataRef.current = jsonData; // Update the exported object
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <Carousal />
      <BlogList articles={data.articles} />
      <Footer />
    </div>
  );
};

export default App;
