import React from 'react'
import '../../index.css'
import Particles from '../magicui/particles'
import TypingAnimation from '../magicui/typing-animation'

const Results = () => {
    return (
        <div id='results' className=' mt-10'>
            <Particles className='fixed w-full h-full top-0 left-0 ' />
            <TypingAnimation text="Checkout Results" className="title text-4xl font-semibold text-center text-white protest-guerrilla-regular mb-10" />
            <div className="hackthon flex md:flex-row flex-col justify-center md:items-start items-center">
                <div className="image md:w-5/12 w-10/12 md:mx-4 mx-2">
                    <img src="/hack1.jpg" alt="" className=' w-full bg-cover' /></div>
                <div className="content md:w-9/12 my-6 md:mx-8 mx-4 ">
                    <div className="title capitalize unlock-regular text-2xl text-teal-600">24 hours hackthon</div>
                    <div className="result dosis-font text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore blanditiis enim eum sapiente aliquam nulla laudantium a fuga, minus perspiciatis exercitationem eius incidunt numquam, possimus nam repellendus rerum. Ipsum.</div>
                </div>
            </div>

            <div className=' border-0 border-t-2 border-teal-800 w-11/12 my-10 mx-auto'></div>

            <div className="hackthon flex md:flex-row flex-col justify-center md:items-start items-center">
                <div className="image md:w-5/12  w-10/12 md:mx-4 mx-2">
                    <img src="/hack1.jpg" alt="" className=' w-full bg-cover' /></div>
                <div className="content md:w-9/12 sm:w-8/12 my-6 md:mx-8 mx-4 ">
                    <div className="title capitalize unlock-regular text-2xl text-teal-600">24 hours hackthon</div>
                    <div className="result dosis-font text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore blanditiis enim eum sapiente aliquam nulla laudantium a fuga, minus perspiciatis exercitationem eius incidunt numquam, possimus nam repellendus rerum. Ipsum.</div>
                </div>
            </div>

            <div className=' border-0 border-t-2 border-teal-800 w-11/12 my-10 mx-auto'></div>

            <div className="hackthon flex md:flex-row flex-col justify-center md:items-start items-center">
                <div className="image md:w-5/12  w-10/12 md:mx-4 mx-2">
                    <img src="/hack1.jpg" alt="" className=' w-full bg-cover' /></div>
                <div className="content md:w-9/12 sm:w-8/12 my-6 md:mx-8 mx-4 ">
                    <div className="title capitalize unlock-regular text-2xl text-teal-600">24 hours hackthon</div>
                    <div className="result dosis-font text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore blanditiis enim eum sapiente aliquam nulla laudantium a fuga, minus perspiciatis exercitationem eius incidunt numquam, possimus nam repellendus rerum. Ipsum.</div>
                </div>

            </div>

            <div className=' border-0 border-t-2 border-teal-800 w-11/12 my-10 mx-auto'></div>
        </div>
    )
}

export default Results