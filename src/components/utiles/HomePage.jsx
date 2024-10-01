import React, { useEffect, useRef, useState } from 'react'
import '../../index.css'
import { useNavigate } from 'react-router-dom'
import Particles from '../magicui/particles'
import Navbar from './navbar'

import Events from './Events'
import Footer from './Footer'
import HeroSection from './HeroSection'

const HomePage = () => {

    const navigate = useNavigate()
    const highLight1 = useRef()
    const highLight2 = useRef()
    const highLight3 = useRef()

    const [isEventVisible, setisEventVisible] = useState(false)
    const [isball1drop, setisball1drop] = useState(false)
    const [isball2drop, setisball2drop] = useState(false)
    const [isball3drop, setisball3drop] = useState(false)
    const [isball4drop, setisball4drop] = useState(false)

    const [outerCircle1, setouterCircle1] = useState(false)
    const [outerCircle2, setouterCircle2] = useState(false)
    const [outerCircle3, setouterCircle3] = useState(false)
    const [outerCircle4, setouterCircle4] = useState(false)

    const [platform1, setplatform1] = useState(false)
    const [platform2, setplatform2] = useState(false)
    const [platform3, setplatform3] = useState(false)
    const [platform4, setplatform4] = useState(false)


    const blurryEventSec = () => {
        const eventsSec = document.querySelector("#exploreEvents .events")
        if (eventsSec &&
            document.querySelector("#EventCard")
        ) {
            const h = document.querySelector("#EventCard").clientHeight
            eventsSec.style.height = `${h * 2.5}px`
            eventsSec.querySelector(".blury").style.height = `${h * 1.2}px`
        }
    }


    const animateHighlights = () => {
        const hero = document.querySelector("#hero-section"),
            HL1 = document.querySelector("#highlights .variousEvents"),
            HL2 = document.querySelector("#highlights .hackthon"),
            HL3 = document.querySelector("#highlights .djNight")

        hero && highLight1.current && highLight2.current && highLight3.current ? (() => {
            const H = hero.clientHeight
            const H1 = HL1.clientHeight
            const H2 = HL2.clientHeight
            const H3 = HL3.clientHeight

            window.scrollY >= H * 0.25 ?
                (() => {
                    setisball1drop(true)
                    highLight1.current.classList.add("opacity-100")
                    highLight1.current.classList.remove("opacity-0")
                    setouterCircle1(true)
                    setplatform1(true)
                })() : (() => {
                    setisball1drop(false)
                    highLight1.current.classList.add("opacity-0")
                    highLight1.current.classList.remove("opacity-100")
                    setouterCircle1(false)
                    setplatform1(false)
                })()
            window.scrollY >= (H * 0.3 + H1) ?
                (() => {
                    setisball2drop(true)
                    highLight2.current.classList.add("opacity-100")
                    highLight2.current.classList.remove("opacity-0")
                    setouterCircle2(true)
                    setplatform2(true)
                })() : (() => {
                    setisball2drop(false)
                    highLight2.current.classList.add("opacity-0")
                    highLight2.current.classList.remove("opacity-100")
                    setouterCircle2(false)
                    setplatform2(false)
                })()
            window.scrollY >= (H * 0.3 + H1 + H2) ?
                (() => {
                    setisball3drop(true)
                    highLight3.current.classList.add("opacity-100")
                    highLight3.current.classList.remove("opacity-0")
                    setouterCircle3(true)
                    setplatform3(true)
                })() : (() => {
                    setisball3drop(false)
                    highLight3.current.classList.add("opacity-0")
                    highLight3.current.classList.remove("opacity-100")
                    setouterCircle3(false)
                    setplatform3(false)
                })()
            window.scrollY >= (H * 0.3 + H1 + H2 + H3) ?
                (() => {
                    setisball4drop(true)
                    setouterCircle4(true)
                    setplatform4(true)
                })() : (() => {
                    setisball4drop(false)
                    setouterCircle4(false)
                    setplatform4(false)
                })()
            window.scrollY >= (H * 0.3 + H1 + H2 + H3) ?
                (() => {
                    setisEventVisible(true)
                })() : (() => {
                    setisEventVisible(false)
                })()
        })() : ''
    }

    useEffect(() => {
        blurryEventSec()
        animateHighlights()

        document.querySelector("#hero-section") ? document.querySelector("#hero-section").style.minHeight = `${window.innerHeight * 0.75}px` : ''

        window.addEventListener("scroll", () => {
            animateHighlights()
        })
    }, [])




    return (
        <div id='homepage' className=' relative'>
            <Particles className='fixed w-full h-full top-0 left-0 ' />
            <Navbar />

            {/* hero section */}
            <HeroSection />

            {/* border below hero section  */}
            <div id='heroEnd' className=" mx-2 flex justify-center items-center  mt-6">
                <div className={` ${platform1 ? " w-0 " : " w-full border-2"}  transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1] rounded-full`} ></div>
                <div className={`${outerCircle1 ? "p-0" : "p-6  border-2"} transition-all duration-500 delay-400 rounded-full border-[#b1b1b1] mx-2 `}>
                    <div className={`ball w-3 h-3 rounded-full bg-[#ffffff] transition-all duration-700 ease-in-out ${isball1drop ? " translate-y-40 opacity-0" : " translate-y-0 opacity-100"}`} style={{ transitionDelay: "500ms" }} ></div>
                </div>
                <div className={`${platform1 ? " w-0 " : " w-full border-2"} transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1]  rounded-full`} ></div>
            </div>

            {/* //scrolling animation and highlighting part os fest  */}
            <div id="highlights" className=' relative'>
                <div className="variousEvents ">
                    <div ref={highLight1} className=" text-center content opacity-0 transition-all duration-400 ease-in-out py-14 text-white flex flex-col justify-center items-center  dosis-font" style={{ transitionDelay: "700ms" }}>
                        <p className='text-7xl'>Exciting Events</p>
                        <p className='text-xl md:w-2/3 sm:w-4/5 px-6 text-center my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus dignissimos a ratione quod delectus amet ullam molestiae unde, explicabo ut. Maiores odit neque dicta mollitia enim ratione optio autem!</p>
                        <div className="button">
                            <button onClick={() => {
                                navigate("/events")
                            }} className=' hover:bg-[#1ec534] hover:text-black hover:border-black transition-all duration-150 ease-linear outline-none border-2 border-white px-5 py-2 font-normal text-2xl rounded-full'>Explore</button>
                        </div>
                    </div>
                    <div className="platform flex justify-center items-center mx-2">
                        <div className={` ${platform2 ? " w-0 " : " w-full border-2"}  transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1] rounded-full`} ></div>
                        <div className={`${outerCircle2 ? "p-0" : "p-6  border-2"} transition-all duration-500 delay-400 rounded-full border-[#b1b1b1] mx-2 `}>
                            <div className={` ${isball2drop ? " translate-y-40 opacity-0" : " translate-y-0 opacity-100"} ball w-3 h-3 rounded-full bg-[#ffffff] transition-all duration-700 ease-in-out`} style={{ transitionDelay: "500ms" }} ></div>
                        </div>
                        <div className={`${platform2 ? " w-0 " : " w-full border-2"} transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1]  rounded-full`} ></div>
                    </div>
                </div>
                <div className="hackthon">
                    <div ref={highLight2} className=" text-center content opacity-0 transition-all duration-400 delay-300 ease-in-out py-14 text-white flex flex-col justify-center items-center  dosis-font" style={{ transitionDelay: "700ms" }}>
                        <p className='text-7xl'>Hackthon and Prices</p>
                        <p className='text-xl md:w-2/3 sm:w-4/5 px-6 text-center my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus dignissimos a ratione quod delectus amet ullam molestiae unde, explicabo ut. Maiores odit neque dicta mollitia enim ratione optio autem!</p>
                        <div className="button">
                            <button onClick={() => {
                                navigate("/events")
                            }} className=' hover:bg-[#1ec534] hover:text-black hover:border-black transition-all duration-150 ease-linear outline-none border-2 border-white px-5 py-2 font-normal text-2xl rounded-full'>Explore</button>
                        </div>
                    </div>
                    <div className="platform flex justify-center items-center mx-2">
                        <div className={` ${platform3 ? " w-0 " : " w-full border-2"}  transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1] rounded-full`} ></div>
                        <div className={`${outerCircle3 ? "p-0" : "p-6  border-2"} transition-all duration-500 delay-400 rounded-full border-[#b1b1b1] mx-2 `}>
                            <div className={` ${isball3drop ? " translate-y-40 opacity-0" : " translate-y-0 opacity-100"} ball w-3 h-3 rounded-full bg-[#ffffff] transition-all duration-700 ease-in-out`} style={{ transitionDelay: "500ms" }} ></div>
                        </div>
                        <div className={`${platform3 ? " w-0 " : " w-full border-2"} transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1]  rounded-full`} ></div>
                    </div>
                </div>
                <div className="djNight">
                    <div ref={highLight3} className=" text-center content opacity-0 transition-all duration-400 delay-300 ease-in-out py-14 text-white flex flex-col justify-center items-center  dosis-font" style={{ transitionDelay: "700ms" }}>
                        <p className='text-7xl'>Prom Night</p>
                        <p className='text-xl md:w-2/3 sm:w-4/5 px-6 text-center my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus dignissimos a ratione quod delectus amet ullam molestiae unde, explicabo ut. Maiores odit neque dicta mollitia enim ratione optio autem!</p>
                        <div className="button">
                            <button onClick={() => {
                                navigate("/events")
                            }} className=' hover:bg-[#1ec534] hover:text-black hover:border-black transition-all duration-150 ease-linear outline-none border-2 border-white px-5 py-2 font-normal text-2xl rounded-full'>Explore</button>
                        </div>
                    </div>
                    <div className="platform flex justify-center items-center mx-2">
                        <div className={` ${platform4 ? " w-0 " : " w-full border-2"}  transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1] rounded-full`} ></div>
                        <div className={`${outerCircle4 ? "p-0" : "p-6  border-2"} transition-all duration-500 delay-400 rounded-full border-[#b1b1b1] mx-2 `}>
                            <div className={` ${isball4drop ? " translate-y-40 opacity-0" : " translate-y-0 opacity-100"} ball w-3 h-3 rounded-full bg-[#ffffff] transition-all duration-700 ease-in-out`} style={{ transitionDelay: "500ms" }} >
                            </div>
                        </div>
                        <div className={`${platform4 ? " w-0 " : " w-full border-2"} transition-all duration-400 ease-in-out border-black border-t-[#b1b1b1]  rounded-full`} ></div>
                    </div>
                </div>
            </div>

            {/* all events  */}
            <section id='exploreEvents' className={` transition-all duration-1000 ease-in-out  py-10 ${isEventVisible ? " opacity-100 translate-y-0 " : " opacity-0 translate-y-20 "} `} style={{ transitionDelay: "700ms" }}>
                <div className="heading protest-guerrilla-regular text-white text-4xl text-center" style={{ letterSpacing: "1px" }}>Our Events</div>
                <div className="events relative  overflow-hidden">
                    <div className="blury absolute bottom-0 w-full z-20 flex justify-center items-center text-xl ">
                        <button
                            onClick={() => {
                                navigate("/events")
                            }}
                            aria-label="Start Game"
                            className=" mx-6 px-8 py-2 text-black font-bold transition-transform transform bg-[#12ffb8] border-none hover:scale-105 outline-none"
                            id="explore-events"
                        >
                            Explore
                        </button>
                        <button
                            onClick={() => {
                                navigate("/events")
                            }}
                            aria-label="Start Game"
                            className=" mx-6 px-8 py-2 text-black font-bold transition-transform transform bg-[#12ffb8] border-none hover:scale-105 outline-none"
                            id="register-events"
                        >
                            Register
                        </button>
                    </div>
                    <Events />
                </div>
            </section >

            {/* result section  */}
            <div id="result" className=' mt-10'>
                <div className="heading protest-guerrilla-regular text-white text-4xl text-center" style={{ letterSpacing: "1px" }}>Event Results</div>
                <div className={`hackthon flex md:flex-row flex-col justify-between items-center p-2 py-12`}>
                    <div className="img md:w-6/12 w-10/12 rounded-lg overflow-hidden mx-5">
                        <div className="slide flex w-[300%] ">
                            <img className=' w-1/3 bg-cover' src="/hack1.jpg" alt="" style={{aspectRatio:"16/9"}} />
                            <img className=' w-1/3 bg-cover' src="/hack2.png" alt="" style={{aspectRatio:"16/9"}} />
                            <img className=' w-1/3 bg-cover' src="/hack3.jpg" alt="" style={{aspectRatio:"16/9"}} />
                        </div>
                    </div>
                    <div className="content blurrybg md:w-5/12 w-11/12 my-4 text-white mx-5 text-end px-4 py-3 border-b-4 border-l-4 border-[1px] backdrop-blur-[1px] bg-[#4848485e]" style={{}}>
                        <p className='protest-guerrilla-regular text-4xl py-3 hover:text-[#58ed47]'>24 Hours Hackthon Ended</p>
                        <p className='dosis-font text-base hover:text-[#75f566]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In officia quod omnis recusandae </p>
                        <button onClick={()=>{navigate("/results")}} className=' outline-none border-[1px] border-b-4 border-l-4 border-green-500 unlock-regular text-xl px-4 py-1 my-4'>View</button>
                    </div>
                </div>
                <div className={`robotRace flex md:flex-row-reverse flex-col justify-between items-center p-2 py-12`}>
                    <div className="img md:w-6/12 w-10/12 rounded-lg overflow-hidden mx-5">
                        <div className="slide flex w-[300%] " style={{ animationDelay: "1s" }}>
                            <img className=' w-1/3 bg-cover' src="/carfight1.jpeg" alt="" style={{aspectRatio:"16/9"}}/>
                            <img className=' w-1/3 bg-cover' src="/carfight2.jpeg" alt="" style={{aspectRatio:"16/9"}}/>
                            <img className=' w-1/3 bg-cover' src="/carfight3.jpeg" alt="" style={{aspectRatio:"16/9"}}/>
                        </div>
                    </div>
                    <div className="content blurrybg md:w-5/12 w-11/12 my-4 text-white mx-5 text-start px-4 py-3 border-b-4 border-l-4 border-[1px] backdrop-blur-[1px] bg-[#4848485e]" style={{}}>
                        <p className='protest-guerrilla-regular text-4xl py-3 hover:text-[#58ed47]'>24 Hours Hackthon Ended</p>
                        <p className='dosis-font text-base hover:text-[#75f566]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In officia quod omnis recusandae </p>
                        <button onClick={()=>{navigate("/results")}} className=' outline-none border-[1px] border-b-4 border-l-4 border-green-500 unlock-regular text-xl px-4 py-1 my-4'>View</button>
                    </div>
                </div>
                <div className={`carFight flex md:flex-row flex-col justify-between items-center p-2 py-12`}>
                    <div className="img md:w-6/12 w-10/12 rounded-lg overflow-hidden mx-5">
                        <div className="slide flex w-[300%] ">
                            <img className=' w-1/3 bg-cover' src="/carfight1.jpeg" alt="" style={{aspectRatio:"16/9"}}/>
                            <img className=' w-1/3 bg-cover' src="/carfight2.jpeg" alt="" style={{aspectRatio:"16/9"}}/>
                            <img className=' w-1/3 bg-cover' src="/carfight3.jpeg" alt="" style={{aspectRatio:"16/9"}}/>
                        </div>
                    </div>
                    <div className="content blurrybg  md:w-5/12 w-11/12 my-4 text-white mx-5 text-end px-4 py-3 border-b-4 border-l-4 border-[1px] backdrop-blur-[1px] bg-[#4848485e]" style={{}}>
                        <p className='protest-guerrilla-regular text-4xl py-3 hover:text-[#58ed47]'>24 Hours Hackthon Ended</p>
                        <p className='dosis-font text-base hover:text-[#75f566]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In officia quod omnis recusandae </p>
                        <button onClick={()=>{navigate("/results")}} className=' outline-none border-[1px] border-b-4 border-l-4 border-green-500 unlock-regular text-xl px-4 py-1 my-4'>View</button>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HomePage