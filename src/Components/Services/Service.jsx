'use client';
import Image from 'next/image';
import '@/Components/Services/Service.css';
function Service(props) {
  return ( 
        <div className=" col-12 col-md-6 col-lg-3 mb-4">
        <div className="section-card p-3 mb-3">
           <Image src={props.image} alt="UI/UX Design" className="wcu-card-image"/>
            <h1 className="card-title mt-3">{props.title}</h1>
            <p className="card-description">
                {props.description}
                </p>
           </div>
  </div>
  )
}


export default Service
