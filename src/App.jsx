import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCards from "./components/PostCard";

const url = import.meta.env.VITE_API;
const postUrl = import.meta.env.VITE_POST_API;

export const dataRef = { current: null };

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      dataRef.current = jsonData;
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchPostData = async () => {
    try {
      const response = await fetch(postUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      setPostData(jsonData);

    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPostData();
  }, []);



  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div id="body " className="bg-gray-100 dark:bg-gray-800">
      <Header />
      <Carousal />
      <div id="posts" className="mt-5">
        <h1 className="text-center text-black dark:text-white text-2xl font-bold font-playfair tracking-wider">Blogs</h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{postData !== null ? (
        postData.articles.map((item) => <PostCards key={item.id} data={item} />)
      ) : (
        <p>Loading...</p>
      )}</div>
      
      </div>
      <Footer />
    </div>
  );
};

export default App;
