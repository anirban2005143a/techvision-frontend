import React from 'react'
import '../../index.css'
import Particles from '../magicui/particles'

const EventDetail = () => {
    return (
        <div id='eventDetail' className='  relative my-3'>
            <Particles className='fixed w-full h-full top-0 left-0 ' />
            <div className="header relative overflow-hidden ">
                <div className=" mx-auto slider relative overflow-hidden md:w-8/12 sm:w-9/12 w-full z-0 " >
                    <div className=' absolute w-full h-full top-0 left-0 z-10 ' style={{ backgroundImage: "linear-gradient(to top , black, black , transparent)", backgroundSize: "100% 180%" }}></div>
                    <div className="slide flex w-[300%] h-[400px] ">
                        <img className=' w-1/3 bg-cover' src="/hack1.jpg" alt="" />
                        <img className=' w-1/3 bg-cover' src="/hack2.png" alt="" />
                        <img className=' w-1/3 bg-cover' src="/hack3.jpg" alt="" />
                    </div>
                </div>
                <div className="title -translate-y-[2rem] bg-black capitalize protest-guerrilla-regular text-4xl text-white z-20 flex justify-center" >
                    <div className=' relative'>
                        <div className="polygon-border absolute top-0 left-0 w-full h-full bg-teal-600" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)" }}></div>
                        <div className=' m-1 bg-black p-8' style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)" }}>48 hours smart hackthon </div>
                    </div>
                </div>
            </div>
            <div className="desc text-center text-white md:px-12 px-3 dosis-font text-base pb-4" style={{ fontWeight: "400" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid  dolore praesentium, sed enim veritatis iure beatae consequuntur architecto explicabo aperiam necessitatibus temporibus corrupti consectetur sint, odit, ex itaque cum. Enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore praesentium, sed enim veritatis iure beatae consequuntur architecto explicabo aperiam necessitatibus temporibus corrupti consectetur sint, odit, ex itaque cum. Enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore praesentium, sed enim veritatis iure beatae consequuntur architecto explicabo aperiam necessitatibus temporibus corrupti consectetur sint, odit, ex itaque cum. Enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore praesentium, sed enim veritatis iure beatae consequuntur architecto explicabo aperiam necessitatibus temporibus corrupti consectetur sint, odit, ex itaque cum. Enim.
                Lorem ipsum dolor sit amet consectetur
            </div>
            <div className=' my-4 md:w-9/12 sm:w-10/12 w-11/12 border-0 border-t-2 border-teal-700 mx-auto'></div>
            <div className="time-place my-10 text-center text-white text-2xl unlock-regular" style={{ fontWeight: "200" }}>
                30th September at 2:00pm<br />
                Gandhi Engineering College
            </div>
            <div className=' my-4 md:w-9/12 sm:w-10/12 w-11/12 border-0 border-t-2 border-teal-700 mx-auto'></div>
            <div className="prices"></div>
            <div className="rules flex justify-center items-start md:mx-10 sm:mx-7 mx-3 my-10">
                <div className="heading text-teal-500  px-4 py-2 unlock-regular  text-2xl">RULES </div>
                <div className="content dosis-font text-white text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat tempora sed, rem dolores voluptate repellendus voluptates odit aspernatur, quas dolor hic atque dolorum esse veniam, saepe dolore similique iure.
                    Corporis nobis voluptas hic, distinctio veniam similique nesciunt maxime harum, eveniet consequatur dolorum, error beatae numquam culpa provident qui animi amet earum nulla quas esse ea optio ut fugit. Officia.
                    Est quis repellat odit qui consequatur dolorum deleniti voluptatibus, unde, nemo fugiat quas? Iure animi nulla, sint beatae ipsa ducimus consequuntur numquam quaerat voluptas illo soluta ipsam temporibus accusantium ea?
                </div>
            </div>
            <div className="registration flex justify-center my-16">
                <button
                    aria-label="Start Game"
                    className=" text-2xl px-8 py-2 text-black font-bold transition-transform transform bg-[#16ffc8] border-none hover:scale-95 outline-none"
                    id="register-events"
                >
                    Register
                </button>
            </div>
        </div>
    )
}

export default EventDetail