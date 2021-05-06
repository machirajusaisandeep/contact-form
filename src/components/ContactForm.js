import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: ''
}

const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    console.log('submitProps', submitProps)
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

export const ContactForm = () => {
    const [optionIndex,
        setoptionIndex] = useState(3);
    const [currentStep,
        setcurrentStep] = useState(1);
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
                    <button className="next-btn" onClick={() => setcurrentStep(2)}>Next</button>
                </div>
            </div>
        )
    }
    const Step2 = () => {
        return (
            <div className="step-2">
                <h2 className="title">{step2Titles[optionIndex]}</h2>
                <button onClick={() => setcurrentStep(1)}>Back</button>
                <h4>Personal Details</h4>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize>
                    {formik => {
                        console.log('Formik props', formik)
                        return (
                            <Form>
                                <div>
                                    <div className='form-control'>
                                        <Field type='text' id='name' name='name' placeholder="Name"/>
                                    </div>

                                    <div className='form-control'>
                                        <Field type='email' id='email' name='email' placeholder="Email"/>
                                        <ErrorMessage name='email'>
                                            {error => <div className='error'>{error}</div>}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <Field as='textarea' id='about' placeholder="What do you want to talk about?" name='about'/>
                                    </div>
                                </div>

                                <button type='submit' className="next-btn"  disabled={!formik.isValid || formik.isSubmitting}>
                                    Send Inquiry
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    }
    return (
        <div className="light">
            {currentStep === 1
                ? <Step1/>
                : <Step2/>
}

        </div>
    )
}

export default ContactForm;