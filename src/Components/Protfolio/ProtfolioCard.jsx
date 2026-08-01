'use client'
import React from 'react'
import Protfolio from '@/Components/Protfolio/Protfolio'
import fintness from '@/Components/assets/fitness.jpg'
import eco from'@/Components/assets/ecomerence.jpg'
import banking from'@/Components/assets/banking.jpg'
import dashborad from'@/Components/assets/dashborad.jpg'
import travel from'@/Components/assets/travel.jpg'
import restaurant from '@/Components/assets/restaurant.jpg'


function ProtfolioCard() {

  const portfolioItems =[
    {
      projectName:'E-commerce Website',
      description:"A modern e-commerce solution for online businesses.",
      image:eco
    },
    {
      projectName:'Banking App',
      description:"A modern banking solution for financial institutions.",
      image:banking
    },
    {
      projectName:'Restaurant Brand Identity',
      description:"A modern restaurant branding solution.",
      image:restaurant
    },
    {
      projectName:'Travel Booking Website',
      description:"A modern travel booking solution.",
      image:travel
    },
    {
      projectName:'Fitness App',
      description:"A modern fitness solution for health-conscious users.",
      image:fintness
    },
    {
      projectName:'Digital Marketing Dashboard',
      description:"A modern digital marketing solution for online businesses.",
      image:dashborad
    }
  ]
  return (
    <div className="container" id="protfolio">
        <div className="row">
            <div className="col-12">
                <h1 className="heading">Our Portfolio</h1>
                <p className="description">Recent Projects we've completed</p>
            </div>
            {portfolioItems.map((item, index) => (
                <Protfolio key={index} image={item.image} projectName={item.projectName} description={item.description} />
            ))}
        </div>
    </div>
  )
}

export default ProtfolioCard