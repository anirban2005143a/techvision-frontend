import React from 'react'
import '../../index.css'
import { useNavigate } from 'react-router-dom'

const SideNavbar = (props) => {

    const naviagte = useNavigate()

    return (
        <div id='sidenavbar' className={` ${props.isSidebar ? " translate-x-0 " : " -translate-x-[110%] "} blurrybg backdrop-blur-[3px] rounded-br-xl rounded-tr-xl transition-all duration-700 ease-in-out absolute left-0 top-full bg-[#000000a8] text-white z-30`}
            style={{ width: `${window.innerWidth * 0.8}px`, height: `${window.innerHeight}px` }}>
            <div className='sidebarMenu h-full py-5 px-3 flex flex-col justify-center items-center'>
                <div className="home h-full text-3xl" onClick={() => {
                    document.body.style.overflow = "auto"
                    naviagte("/")
                }}>Home</div>
                <div className="about h-full text-3xl" onClick={() => {
                    document.body.style.overflow = "auto"
                    naviagte("/about/gec")
                }} >About</div>
                <div className="events h-full text-3xl" onClick={() => {
                    document.body.style.overflow = "auto"
                    naviagte("/events")
                }}>Events</div>
                <div className="results h-full text-3xl" onClick={() => {
                    document.body.style.overflow = "auto"
                    naviagte("/results")
                }}>Result </div>
                <div className="contatc h-full text-3xl" onClick={() => {
                    document.body.style.overflow = "auto"
                    naviagte("/contact")
                }}>Contact </div>
            </div>
        </div>
    )
}

export default SideNavbar