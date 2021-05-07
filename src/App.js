import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import CompanyDetails from './components/CompanyDetails';
import ContactForm from './components/ContactForm';
import {TweenMax,Power3}  from "gsap";

function App() {
  const [loadView,setLoadView]=useState(false);
  const [currentStep,
    setCurrentStep] = useState(1); 
  let loaderRef=useRef(null);
  let detailRef=useRef(null);
  let formRef=useRef(null);
  useEffect(()=>{
    TweenMax.to(loaderRef,.8,{opacity:1,y:-20,ease:Power3.easeOut,delay:0.2})
    setTimeout(()=>{
      setLoadView(true);
    },1000)
  },[])

  useEffect(()=>{
   if(loadView){
    if(currentStep === 2){
      TweenMax.fromTo(detailRef,.8,{width:"50%"},{width:"0%",ease:Power3.easeInOut})
      TweenMax.fromTo(formRef,.8,{width:"50%"},{width:"100%",ease:Power3.easeInOut})
    }
   }
  },[loadView,currentStep])

  const onBack=(e)=>{
      TweenMax.to([detailRef,formRef],1,{width:"50%",ease:Power3.easeIn});
      setCurrentStep(e)
  }
  const MainBody=()=>{
    return (<React.Fragment>
      <div className="information container" ref={el=>(detailRef=el)}>
     <CompanyDetails showBack={currentStep===2} onBackClick={(e)=>onBack(e)}></CompanyDetails>
     </div>
     <div  className="steps container" ref={el=>(formRef=el)}>
          <ContactForm step={currentStep} onStepChange={(e)=>setCurrentStep(e)}></ContactForm>
     </div></React.Fragment>)
  }
  const Loader=()=>{
    return (
      <div className="loader" ref={el=>(loaderRef=el)}>
        <h1 className="title">Every Pixel <br /> Matters</h1>
        <p>
        We’re a design studio from Amsterdam. We help <br /> startups and other businesses to refine, design and <br /> launch their digital products. 
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
