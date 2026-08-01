import "@/Components/Hero/Hero.css"

function Hero(){
    return(
        <div className="hero-section-bg-container d-flex justify-content-center flex-column" id='home'>
            <div className="text-center">
            <h1 className="hero-heading mb-3">We Create Digital Experiences That Inspire</h1>
            <p className="hero-caption mb-4">We design modern websites, intuitive user interfaces, and impactful digital brands that help businesses grow online.</p>
            <button className="custom-button">Get Started</button>
            <button className=" custom-button">View Our Work</button>

            </div>

        </div>
    )
}

export default Hero