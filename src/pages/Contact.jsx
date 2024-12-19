import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import './Contact.css';

function Contact() {
    return (
        <>
            <Header />
            <h1 className="Contact_h1">This is Contact Page of My Blog</h1> <br/> 
            <div className="form">
                <div class="contact-form-container">
                    <h2 className="Contact_h2">Contact Us</h2>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name"
                                name="name"
                                placeholder="Your Name" required />
                            <span class="error-message" id="nameError"></span>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email"
                                name="email"
                                placeholder="Your Email" required />
                            <span class="error-message" id="emailError"></span>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone"
                                name="phone"
                                placeholder="Your Phone Number" required />
                            <span class="error-message" id="phoneError"></span>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="5" required></textarea>
                            <span class="error-message"
                                id="messageError"></span>
                        </div>
                        <button type="submit"
                            class="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div> <br/><br />
            <Footer />
        </>
    )
}

export default Contact;