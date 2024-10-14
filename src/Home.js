import React, { Component } from 'react';
import companyImage from './images/silumko.jpg'; // Company image
import backgroundImage from './images/background.jpg'; // Background image

export class Home extends Component {
    render() {
        return (
            <div 
                className="home-page d-flex flex-column align-items-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    padding: '20px',
                    color: '#fff'
                }}
            >
                {/* Welcome Heading */}
                <section className="welcome-section text-center mb-5" style={{ padding: '20px' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                        WELCOME TO SILUMKO ENTERPRISE
                    </h1>
                </section>

                {/* Company Image */}
                <section className="image-section d-flex justify-content-center mb-5">
                    <img 
                        src={companyImage} 
                        alt="Silumko Enterprise" 
                        style={{
                            width: '40%', 
                            height: 'auto', 
                            borderRadius: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                        }} 
                    />
                </section>

                {/* About Silumko */}
                <section className="about-section text-center mb-5" style={sectionStyle}>
                    <h3 style={headingStyle}>ABOUT SILUMKO</h3>
                    <p>
                        Welcome to Silumko Enterprise! We specialize in providing innovative solutions 
                        to improve automation in commercial, industrial, and residential sectors. 
                        Our wireless automation products are designed to enhance efficiency, 
                        reduce costs, and improve operational safety.
                    </p>
                </section>

                {/* Vision */}
                <section className="vision-section text-center mb-5" style={sectionStyle}>
                    <h3 style={headingStyle}>OUR VISION</h3>
                    <p>
                        To be a global leader in wireless automation, empowering businesses 
                        and individuals to achieve operational excellence through cutting-edge technology.
                    </p>
                </section>

                {/* Mission */}
                <section className="mission-section text-center mb-5" style={sectionStyle}>
                    <h3 style={headingStyle}>OUR MISSION</h3>
                    <p>
                        Our mission is to design, develop, and manufacture high-quality 
                        wireless automation products that meet the diverse needs of our clients, 
                        ensuring reliability, sustainability, and continuous innovation.
                    </p>
                </section>
            </div>
        );
    }
}

// Custom section styles
const sectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for better readability
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '80%',
    color: '#fff'
};

// Custom heading style
const headingStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    marginBottom: '15px'
};
