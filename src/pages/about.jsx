import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import aboutImg from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import billgates from '../assets/Images/billGates.png'
import einstain from '../assets/Images/einstein.png'
import nelsonMandela from '../assets/Images/nelsonMandela.png'
import Stevejobs from '../assets/Images/steveJobs.png'


const About = () => {
    return (
        <HomeLayout>
            <div className=' md:pl-20 pt-20 h-full flex flex-col text-white bg-gray-900 h-[90vh] sm:overflow-hidden  '>
                <div className='flex items-center gap-5 '>
                    <section className=' w-1/2 space-y-10'>
                        <h1 className=' text-5xl text-yellow-500 font-semibold'>
                            Affordable and Quality Education
                        </h1>
                        <p className=' text-xl text-gray-500'>
                            Goal is provide  Affordable and Quality Education
                            Goal is provide  Affordable and Quality Education
                            Goal is provide  Affordable and Quality Education
                            Goal is provide  Affordable and Quality Education
                        </p>
                    </section>
                    <img src={aboutImg} className=' drop-shadow-2xl' id='test1' alt='about' style={{
                        filter: " drop-shadow(0px 10px 10px rgb(0,0,0));"
                    }}></img>
                </div>
                <div className="carousel w-1/2 m-auto border-2-gray rounded-full">
                    <div id="item1" className="carousel-item w-full ">
                        <img src={apj} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={Stevejobs} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={einstain} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={nelsonMandela} className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={billgates} className="w-full" />
                    </div>  
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                </div>
            </div>
        </HomeLayout>
    )
}

export default About