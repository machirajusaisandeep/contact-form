import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import CompanyDetails from './components/CompanyDetails';
import ContactForm from './components/ContactForm';
import {TweenMax,Power3}  from "gsap";

function App() {
  const [loadView,setLoadView]=useState(false);
  const [changeView,setChangeView]=useState(true);
  let loaderRef=useRef(null);
  useEffect(()=>{
    TweenMax.to(loaderRef,.8,{opacity:1,y:-20,ease:Power3.easeOut,delay:0.2})
    setTimeout(()=>{
      setLoadView(true);
    },1000)
  },[])

  const MainBody=()=>{
    return (<React.Fragment>
      <div className={"information container "+(changeView?"shrink":'')}>
     <CompanyDetails></CompanyDetails>
     </div>
     <div  className={"steps container "+(changeView?"grow":'')}>
          <ContactForm onStepChange={(e)=>setChangeView(e)}></ContactForm>
     </div></React.Fragment>)
  }
  const Loader=()=>{
    return (
      <div className="loader" ref={el=>(loaderRef=el)}>
        <h1>Every Pixel Matters</h1>
        <p>
        We’re a design studio from Amsterdam. We help startups and other businesses to refine, design and launch their digital products. 
        </p>
      </div>
    )
  }
  return (
    <div className="App">
     {
       loadView? <MainBody/>:<Loader/>
     }
    </div>
  );
}

export default App;
