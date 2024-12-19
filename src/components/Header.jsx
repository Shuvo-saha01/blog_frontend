import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState( () => {
    return localStorage.getItem('darkMode') === 'dark';
  });



  const handleLoginClick = () => {
    navigate('/login');
  };



  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'light');
    }
  }, [darkMode]);

  return (
  <>
    <ToastContainer />
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className='py-2'><a href="#home" className="hover:underline">Home</a></li>
            <li className='py-2'><a href="#about" className="hover:underline">About</a></li>
            <li className='py-2'><a href="#contact" className="hover:underline">Contact</a></li>
            <button onClick={handleDarkMode} className='rounded-full border w-8 h-8 my-auto' ><img className='my-auto mx-auto bg-white rounded-full' src="./images/darkMode.png" alt="dark mode logo" /></button>
          <button onClick={handleLoginClick} className="login hover:border hover:border-white px-5 py-2 bg-blue-900 rounded-[3rem]">Log In</button>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
