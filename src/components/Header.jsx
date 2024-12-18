import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  }
  const aboutSection = () => {
    navigate('/about');
  }
  const home = () => {
    navigate('/');
  }
  const Contact = () => {
    navigate('/contact');
  };

  return (
  <>
    <ToastContainer />
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className='py-2'><button onClick={home} className="hover:underline">Home</button></li>
            <li className='py-2'><button onClick={aboutSection} className="hover:underline">About</button></li>
            <li className='py-2'><button onClick={Contact} className="hover:underline">Contact</button></li>
          <button onClick={handleLoginClick} className="login hover:border hover:border-white px-5 py-2 bg-blue-900 rounded-[3rem]">Log In</button>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
