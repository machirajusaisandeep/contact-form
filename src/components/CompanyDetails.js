import React, {useState,useEffect} from 'react';
import medium from '../assets/social/medium.svg';
import backIcon from '../assets/icons/back.svg';
export const CompanyDetails = (props) => {
    const [showDetails,setShowDetails]=useState(true);
    useEffect(()=>{
        setShowDetails(props.show)
       },[props.show]);
    

    const Details=()=>{
        return (  <div>
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
                <img src="https://img.icons8.com/metro/26/000000/twitter.png"  alt="Twitter Logo"/>
                <img src="https://img.icons8.com/material/26/000000/instagram-new--v1.png" alt="Instagram Logo"/>
                <img src={medium} alt="Medium Logo"/>
            </div>
            </div> )
    }
    return (
        <div>
           {
               !showDetails? <button className="back-btn" onClick={()=>{props.onBackClick(true);setShowDetails(false)}}>
               <img src={backIcon} alt="back button"/>
           </button>:
         <Details></Details>
           }
           
            <div className="map"></div>
        </div>
    )
}
export default CompanyDetails;