import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialValues = {
    name: '',
    email: ''
}

const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    toast.success('Details have been captured successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

const validationSchema = Yup.object({
    name: Yup
        .string()
        .required('Required'),
    email: Yup
        .string()
        .email('Invalid email format')
        .required('Required'),
    about: Yup
        .string()
        .required('Required')
})
const step1Options = ["Your great project", "Meeting for a coffee", "Birds and bees", "Plan a video call"];
const step2Titles = ["Let's craft your product.", "We like coffee too! ☕️", "What's on your mind?", "Let's plan a video call! 🎥"];

export const ContactForm = ({step,onStepChange}) => {
    const [optionIndex,
        setoptionIndex] = useState(3);
    const Step1 = () => {
        return (
            <div className="step-1">
                <div className="top">
                    <h2 className="title">Let’s talk.</h2>
                    <p>Share your excitement with us.</p>
                    <a
                        className="link link-animation light"
                        id="contact"
                        href="mailto:info@yummygum.com">
                        <span>info@yummygum.com</span>
                    </a>
                </div>
                <div >
                    <h4>Let’s talk about</h4>
                    <ul className="radio-list">
                        {step1Options.map((option, index) => {
                            return (
                                <li key={index}>
                                    <input
                                        type='radio'
                                        id={index}
                                        value={index}
                                        className="light"
                                        checked={index === optionIndex}
                                        onChange={() => setoptionIndex(index)}/>
                                    <label htmlFor={index}>{option}</label>
                                </li>
                            )
                        })
}
                    </ul>
                    <button className="next-btn" onClick={()=>onStepChange(2)}>Next</button>
                </div>
            </div>
        )
    }
    const Step2 = () => {
        return (
            <div className="step-2">
                <h2 className="title">{step2Titles[optionIndex]}</h2>
                <div className="contact-bg"> 
                <h4>Personal Details</h4>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize>
                    {({errors, touched,isValid,isSubmitting}) => {
                        return (
                            <Form>
                                <div className="left-half">
                                    <div className='form-control mr-b-24'>
                                        <Field type='text' id='name' name='name' placeholder="Name"
                                        className={errors.name && touched.name ?"error":''}
                                        />
                                        <ErrorMessage name='name'>
                                            {error => <div className='error'>{error}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='form-control mr-b-24'>
                                        <Field type='email' id='email' name='email' placeholder="Email"
                                         className={errors.email && touched.email ?"error":''}/>
                                        <ErrorMessage name='email'>
                                            {error => <div className='error'>{error}</div>}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className="right-half">
                                    <div className='form-control mr-b-24'>
                                        <Field as='textarea' id='about'  className={errors.about && touched.about ?"error":''} placeholder="What do you want to talk about?" name='about'/>
                                    </div>
                                    <button type='submit' className="next-btn"  disabled={!isValid || isSubmitting}>
                                    Send Inquiry
                                </button>
                                </div>

                                
                            </Form>
                        )
                    }}
                </Formik>
                </div>
            </div>
        )
    }
    return (
        <div className="light">
            {step === 1
                ? <Step1/>
                : <Step2/>
            }
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
        </div>
    )
}

export default ContactForm;