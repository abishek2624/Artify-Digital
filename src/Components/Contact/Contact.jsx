'use client'
import React from 'react'
import './Contact.css'
import { BsEnvelope,BsFillGeoAltFill,BsFillTelephoneFill} from "react-icons/bs";

function Contact() {
  return (
    <div className="container contact-section" id='contact'>
        <div className="row">
            <div className="col-12">
                <h1>
                    Let's Build Something Amazing Together
                </h1>
                <p>Have a project in mind? Whether you need a website, branding, or UI/UX design, we're here to help bring your ideas to life.</p>

            </div>
            <div className="col-12 col-lg-6 contact-info-card ">
               <div className='mb-5'>
                 <BsEnvelope/>
               <span className="p-2 ">Email</span>
               <p>abishek@gmail.com</p>
               </div>
               <div className='mb-5'>
                <BsFillGeoAltFill />
                <span className='p-2'>Location</span>
                <p> Chennai,Tamilnadu,India.</p>
               </div>
               <div className='mb-5'>
                <BsFillTelephoneFill />
                <span className='p-2'> Phone</span>
                <p> +916381496538</p>
               </div>

            </div>
            <div className="col-12 col-lg-6 contact-form">
                <div>
                    <form>
                        <div className='mb-3 ml-3'>
                        <label>Name</label>
                        <input type="text" placeholder='Name' className='input-field'/>
                        </div>
                        <div className='mb-3'>
                        <label>Email</label>
                        <input type="text" placeholder='Email' className='input-field'/>
                        </div>
                        <div className='mb-3'>
                            <label>Subject</label>
                        <textarea cols={15} rows={2} placeholder='project description'></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className=''>Message</label>
                            <textarea cols={15} rows={2} placeholder='Tell about your project'></textarea>
                        </div>
                        <div>
                            <button>Send the Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact