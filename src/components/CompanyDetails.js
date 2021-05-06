import React from 'react';

export const CompanyDetails =()=> {
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
                            <p>The Netherlands <span class="emoji">🇳🇱</span></p>
                        </a>
            </div>
            <div className="map">

            </div>
        </div>
    )
}
export default CompanyDetails;