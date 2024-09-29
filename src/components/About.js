import React from 'react';
import './About.css'; //CSS file
import logo from './EZTech.png'; //EZTech Logo

function About() {
    return (
        <div className="about-container">
            <img src={logo} alt="EZTech" className="logo" />
            <h2>About EZTechMovie</h2>
            <p>Welcome to EZTechMovie, your premier destination for private video streaming! At EZTechMovie, we believe in providing a unique and personalized viewing experience tailored to your preferences.</p>
            <h3>Our Mission</h3>
            <p>Our mission is to bring you the latest and greatest in film and television without the clutter. We curate a diverse library of content, ensuring you have access to a wide range of genres, from blockbuster hits to indie gems.</p>
            <h3>What We Offer</h3>
            <p><strong>Private Streaming:</strong> Enjoy your favorite movies and shows in a secure and private environment.</p>
            <p><strong>Curated Library:</strong> Discover handpicked selections that cater to all tastes and interests.</p>
            <p><strong>User-Friendly Interface:</strong> Our platform is designed for seamless navigation, making it easy to find exactly what you want to watch.</p>
            <p><strong>Personalized Recommendations:</strong> Get tailored suggestions based on your viewing habits to enhance your experience.</p>
            <h3>Join Us</h3>
            <p>Become a part of the EZTechMovie family and elevate your streaming experience. With our commitment to quality and user satisfaction, we are dedicated to bringing you the best in entertainment.</p>
            <p>Thank you for choosing EZTechMovie- where your movie journey begins!</p>
        </div>
    );
}

export default About;