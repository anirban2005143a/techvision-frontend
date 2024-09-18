import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideNavbar from './SideNavbar'


const navbar = () => {

    const navigate = useNavigate()

    const [isSidebar, setisSidebar] = useState(false)
    const [aboutMenuOpen, setaboutMenuOpen] = useState(false)

    const sidebar = () => {
        !isSidebar ? (() => {
            document.body.style.overflow = "hidden"
            setisSidebar(true)
        })() : (() => {
            document.body.style.overflow = "auto"
            setisSidebar(false)
        })()
    }

    console.log(isSidebar)

    return (
        <div id='navbar' className=' relative flex justify-between items-center py-2 px-2 z-50'>
            <div id="logo" className='transition-all duration-500' onClick={() => {
                document.body.style.overflow = "auto"
                navigate("/")
            }}>
                <img src="/logo.png" alt="" className=' w-10 m-2 cursor-pointer  ease-in-out' />
            </div>
            {window.innerWidth >= 500 && <div id="menu" className=' flex justify-center text-sm items-center mx-5 gap-4'>
                <div className=" events">
                    <div className="relative group">
                        <Link to="/events">
                            <button
                                className="relative inline-block p-[1px] py-[3px] font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer  shadow-zinc-900  duration-300 ease-in-out hover:scale-105 active:scale-95"
                            >
                                <span
                                    className="absolute inset-0  bg-gradient-to-r from-teal-400 via-green-500 to-teal-700 px-4 py-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></span>

                                <span className="relative z-10 block px-3 py-2  bg-gray-950">
                                    <div className="relative z-10 flex items-center ">
                                        <span className="font-thin text-sm"
                                        >Events</span>

                                    </div>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" results">
                    <div className="relative group">
                        <Link to="/results">
                            <button
                                className="relative inline-block p-[1px] py-[3px] font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer  shadow-zinc-900  duration-300 ease-in-out hover:scale-105 active:scale-95"
                            >
                                <span
                                    className="absolute inset-0  bg-gradient-to-r from-teal-400 via-green-500 to-teal-700 px-4 py-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></span>

                                <span className="relative z-10 block px-3 py-2  bg-gray-950">
                                    <div className="relative z-10 flex items-center ">
                                        <span className="font-thin text-sm"
                                        >Results</span>

                                    </div>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="about">
                    <div className="relative group">
                        <button
                        onClick={()=>{
                            navigate("/about/gec")
                            // aboutMenuOpen ? setaboutMenuOpen(false) : setaboutMenuOpen(true)
                        }}
                            className="relative inline-block p-[1px] py-[3px] font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer  shadow-zinc-900  duration-300 ease-in-out hover:scale-105 active:scale-95"
                        >
                            <span
                                className="absolute inset-0  bg-gradient-to-r from-teal-400 via-green-500 to-teal-700 px-4 py-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            ></span>

                            <span className="relative z-10 block px-3 py-2  bg-gray-950">
                                <div className="relative z-10 flex items-center ">
                                    <span className="font-thin text-sm"
                                    >About</span>

                                </div>
                            </span>
                        </button>
                        <div className={`aboutMenu flex flex-col justify-evenly px-4 ${aboutMenuOpen ? " h-28 border-[1px] border-b-4 border-l-4 ": " h-0 border-0"}  border-teal-700 transition-all duration-200 ease-in-out absolute top-full left-0 w-auto text-white overflow-hidden `}>
                            
                                <div className=' hover:text-green-400 cursor-pointer'>About GEC</div>
                                <div className=' hover:text-green-400 cursor-pointer'>Why GEC</div>
                                <div className=' hover:text-green-400 cursor-pointer'>Infrastructure</div>
                         
                        </div>
                    </div>
                </div>
                <div className=" contact">
                    <div className="relative group">
                        <button onClick={() => {
                            navigate('/contact')
                        }}
                            className="relative inline-block p-[1px] py-[3px] font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer  shadow-zinc-900  duration-300 ease-in-out hover:scale-105 active:scale-95"
                        >
                            <span
                                className="absolute inset-0  bg-gradient-to-r from-teal-400 via-green-500 to-teal-700 px-4 py-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            ></span>

                            <span className="relative z-10 block px-3 py-2  bg-gray-950">
                                <div className="relative z-10 flex items-center ">
                                    <span className="font-thin text-sm"
                                    >Contact</span>

                                </div>
                            </span>
                        </button>
                    </div>
                </div>
            </div>}
            {window.innerWidth <= 500 && <div className=" me-4">
                <div className={`bars ${isSidebar ? " hidden " : " block "}`} onClick={sidebar}>
                    <svg className={`w-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill='#ffffff' d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
                <div className={`bars ${isSidebar ? " block " : " hidden "}`} onClick={sidebar}>
                    <svg className={` w-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill='#ffffff' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
            </div>}
            <SideNavbar isSidebar={isSidebar} />
        </div>
    )
}

export default navbar