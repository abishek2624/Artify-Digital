'use client'
import Image from 'next/image';
import React from 'react'
import '@/Components/Services/Service.css'
import Service from '@/Components/Services/Service.jsx';
import Ux from "@/Components/assets/ux.jpg";
import Web from "@/Components/assets/web.jpg";
import digital from"@/Components/assets/digital.jpg";
import brand from"@/Components/assets/brand.jpg";

function ServiceCard(props) {
  const services=[
    {
        title:"UI/UX Design",
        description:"Create intuitive and visually appealing interfaces that enhance user experience.",
        image:Ux
    },
    { 
        title:"Web Development",
        description:"Build responsive, secure, and high-performance websites using modern technologies.",
        image:Web

    },
    {
         title:" Digital Marketing",
        description:"Increase your brand's online visibility through SEO and digital campaigns.",
        image: digital

    },{
        title:" Branding",
        description:"Develop memorable brand identities with logos, colors, and visual systems.",
        image: brand
    }
  ]
 
  
  
  
    return (
     <div className="section-bg pt-5 pb-5" id='service' >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="heading">Our Services</h1>
                    <p className="description">
                        We provide a wide range of services to meet every type of need.
                    </p>
                </div>
                 
                    {services.map((service,index)=>{
                        return(
                            <Service key={index} title={service.title} description={service.description} image={service.image} />
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default ServiceCard