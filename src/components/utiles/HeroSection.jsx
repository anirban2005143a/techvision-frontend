import React from 'react'
import BoxReveal from '../magicui/box-reveal'
import bghori from '/herobghori.jpg'
import bgver from '/herobgver.jpg'

const HeroSection = () => {
    return (
        <div id="hero-section" 
        className=' relative py-6 flex flex-col-reverse md:flex-row justify-center items-center bg-cover bg-no-repeat'
            style={{
                backgroundImage: window.innerWidth > 500 ?
                    `linear-gradient(to top , black  ,transparent,transparent , black) , url(${bghori})` :
                    `linear-gradient(to top , black , transparent,transparent , black) , url(${bgver})`
            }}>
            <div className="content p-4  md:w-7/12 sm:w-9/12 w-full z-30 ">
                <BoxReveal boxColor="transparent" children={
                    <p className='text-yellow-50 text-5xl protest-guerrilla-regular title mb-8' style={{ letterSpacing: "1px" }}>Techno Vision</p>} />
                <BoxReveal boxColor="transparent" delay={0.4} children={<div className=' content text-white text-xl handjet-font' style={{ letterSpacing: "0px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit sequi unde provident veniam possimus similique, asperiores aperiam
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit sequi unde provident veniam possimus similique, asperiores aperiam
                </div>} />
                <BoxReveal boxColor="transparent" delay={0.5} children={<div className=' mt-4 date-location gap-4 flex justify-center items-center'>
                    <div className="date text-yellow-50 font-thin text-lg unlock-regular">30th September</div>
                    <div className="location">
                        <a href="https://www.google.com/maps/place/Gandhi+Engineering+College+(GEC+AUTONOMOUS)/@20.2387247,85.7004606,18554m/data=!3m1!1e3!4m6!3m5!1s0x3a19a9ab379f5add:0xac5267d0f9776906!8m2!3d20.2374698!4d85.725334!16s%2Fg%2F11b7lmdgxf?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                            <svg className='w-4 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="#ff3d3d" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </a>
                    </div>
                </div>} />
            </div>
            <div className=' absolute w-full h-full top-0 left-0 bg-[##0000004a] '></div>
            {/* <div className="festLogo md:w-3/12 w-full">
                <img src="/logo.png" alt="" className=' mx-auto my-6 w-2/3 object-cover transition-all duration-1000 ease-out ' />
            </div> */}

        </div>
    )
}

export default HeroSection