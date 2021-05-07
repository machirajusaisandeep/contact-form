import React from 'react';
import twitter from '../assets/social/twitter.svg';
import instagram from '../assets/social/instagram.svg';
import medium from '../assets/social/medium.svg';
export const CompanyDetails = () => {
    return (
        <div>
            <div className="top">
                <h2 className="title">We’re here</h2>
                <p>Our door is always open for a good cup of coffee.</p>
            </div>
            <div className="info">
                <h4>Our Office</h4>
                <a href="https://goo.gl/maps/36etXfHjYR52" target="_blank" rel="noreferrer">
                    <p>Jacob van Lennepkade 334-H</p>
                    <p>1053 NJ Amsterdam</p>
                    <p>The Netherlands
                        <span className="emoji">🇳🇱</span>
                    </p>
                </a>
            </div>
            <div className="social-icons">
                <img src={twitter} alt="Twitter Logo"/>
                <img src={instagram} alt="Instagram Logo"/>
                <img src={medium} alt="Medium Logo"/>
            </div>
            <div className="map"></div>
        </div>
    )
}
export default CompanyDetails;