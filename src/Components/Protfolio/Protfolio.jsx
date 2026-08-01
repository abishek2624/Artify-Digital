'use client'
import React from 'react'
import Image from'next/image'
import './Protfolio.css'
function Protfolio(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
        <div className="shadow menu-item-card p-3 mb-3">
            <Image src={props.image}
            alt="Portfolio Item" 
            className="menu-item-image"
            />
            <h1 className="menu-card-title">{props.projectName}</h1>
            <p className="menu-item-description">{props.description}</p>
        </div>

    </div>
  )
}

export default Protfolio