import React, { useState } from 'react';
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
const step2Titles = ["Your great project", "Meeting for a coffee", "Birds and bees", "Plan a video call"];

export const ContactForm = () => {
    const [optionIndex, setoptionIndex] = useState(3);
    return (
        <div>
            <div className="step-1">
                <div className="top">
                    <h2>Let’s talk.</h2>
                    <p>Share your excitement with us.</p>
                    <a
                        class="link link-animation white"
                        id="contact"
                        href="mailto:info@yummygum.com">
                        <span>info@yummygum.com</span>
                    </a>
                </div>
                <div>
                  <ul>
                  {step1Options.map((option, index) => {
                        return (
                            <li>
                                <input type='radio' id={index} value={index} 
                                checked={index === optionIndex} onChange={()=>setoptionIndex(index)} />
                                <label htmlFor={index}>{option}</label>
                            </li>
                        )
                    })
                }
                  </ul>
                </div>
            </div>
            <div className="step-2">
            <h2>{step2Titles[optionIndex]}</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize>
                    {formik => {
                        console.log('Formik props', formik)
                        return (
                            <Form>
                                <div className='form-control'>
                                    <label htmlFor='name'>Name</label>
                                    <Field type='text' id='name' name='name'/>
                                </div>

                                <div className='form-control'>
                                    <label htmlFor='email'>Email</label>
                                    <Field type='email' id='email' name='email'/>
                                    <ErrorMessage name='email'>
                                        {error => <div className='error'>{error}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className='form-control'>
                                    <label htmlFor='about'>About</label>
                                    <Field as='textarea' id='about' name='about'/>
                                </div>

                                <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default ContactForm;