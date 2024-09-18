import React from 'react'
import EventCard from './EventCard'
import TypingAnimation from '../magicui/typing-animation'
import '../../index.css'

const Events = () => {
    return (
        <div id='eventList' className=' mt-8'>
            {window.location.pathname === "/events" && <TypingAnimation text="Checkout Events" className="title text-4xl font-semibold text-center text-white protest-guerrilla-regular"  />}

            <div className='flex flex-wrap justify-center items-center'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => {
                    return <EventCard key={index}  />
                })}
            </div>
        </div>
    )
}

export default Events