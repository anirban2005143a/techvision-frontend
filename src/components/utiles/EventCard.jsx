import React, { useEffect } from 'react'
import '../../index.css'
import { useNavigate } from 'react-router-dom'


const EventCard = () => {

    const navigate = useNavigate()

    return (
        <div id='EventCard' className=' relative mx-4 my-10 rounded-lg pb-4'>
            <div className="original">
                <div className="img my-3 rounded-lg overflow-hidden p-3">
                    <img src="/images (2).jpeg" alt="" className=' w-[220px] h-[140px] rounded-lg object-cover' />
                </div>
                <div className="eventname unlock-regular text-white text-center text-xl font-serif font-bold transition-all duration-300 ease-in-out">Robo Race</div>
                <div className="eventReadMore unlock-regular flex justify-center my-4 transition-all duration-300 ease-in-out" style={{ letterSpacing: "2px", fontWeight: "100" }}>
                    <button
                    onClick={()=>{
                        navigate("/eventDesc")
                    }}
                        className=" overflow-hidden relative  px-4 py-2 bg-slate-800 text-white border-none rounded-full text-sm font-light cursor-pointer  z-10 group"
                    >
                        Register
                    </button>
                </div>
            </div>
            <div className="layout  absolute top-0 left-0 w-full h-full text-white px-5 flex flex-col justify-center" >
                <div className="name text-xl font-sans mb-2.5 font-bold unlock-regular">Robo War</div>
                <div className="desc text-sm font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptatem dicta doloribus, </div>
                <div className="layoutEventReadMore mt-3 unlock-regular" style={{ letterSpacing: "2px", fontWeight: "100" }}>
                    <button
                    onClick={()=>{
                        navigate("/eventDesc")
                    }}
                        className=" overflow-hidden relative  px-4 py-2 bg-slate-800 text-white border-none rounded-full text-base font-normal cursor-pointer  z-10 group"
                    >
                        Register
                        <span
                            className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                        ></span>
                        <span
                            className="absolute w-36 h-32 -top-8 -left-2 bg-[#17ae8b] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                        ></span>
                        <span
                            className="absolute w-36 h-32 -top-8 -left-2 bg-[#12d068] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                        ></span>
                        <span
                            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-4 z-10 text-black font-semibold"
                        >Register</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard