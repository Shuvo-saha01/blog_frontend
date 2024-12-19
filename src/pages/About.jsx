import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

function About() {
    return(
        <>
        <Header/>
        <h1>This is About Page of My Blog</h1>
        <Footer/>
        </>
    )
}

export default About;