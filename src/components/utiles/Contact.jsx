
import React, { useState } from 'react'
import '../../css/contact.css'
import '../../index.css'
import Navbar from './navbar'
import bghori from '/herobghori.jpg'
import bgver from '/herobgver.jpg'

const Contatct = () => {

    const backendUrl = import.meta.env.VITE_REACT_BACKEND_URL

    const [content, setcontent] = useState("")
    const [mailSubject, setmailSubject] = useState("")
    const [usermail, setusermail] = useState("")
    const [isProcess, setisProcess] = useState(null)
    const [update, setupdate] = useState("dsjhfu dufhurfn dfhr fgnfroigr")

    const sendMail = async () => {
        console.log("form submited")
        setisProcess(true)
        const res = await fetch(`${backendUrl}/contact/sendmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                subject: mailSubject,
                usermail
            })
        })
        const data = await res.json()
        setisProcess(false)
        if (data.result) {
            setupdate("Mail send successfully")
        } else {
            setupdate("Some internal error ocured , Please try again")
        }
    }

    return (

        <div id='contact' className=' absolute h-full w-full overflow-hidden '
            style={{
                backgroundImage: window.innerWidth > 500 ?
                    `linear-gradient(to top , black  ,transparent,transparent , black) , url(${bghori})` :
                    `linear-gradient(to top , black , transparent,transparent , black) , url(${bgver})`
            }}>

            <Navbar />
            <div className=' mt-10 w-full flex justify-center items-center z-10 '>
                <div id='' className=" blurryBg py-5 md:w-7/12 sm:w-9/12 w-full mx-4 contactForm rounded-4 bg-[#6262624a] rounded-xl" style={{
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(3px)",
                }}>
                    <form className=' relative p-2 z-10 rounded-4' onSubmit={(e) => {
                        e.preventDefault()
                        sendMail()
                    }}>
                        <div className=' mx-auto formContent' >
                            <div className="enterGmail w-full my-1">
                                <label className='dosis-font text-sm text-white' htmlFor="userMail" style={{ fontWeight: "600" }}>Enter email</label><br />
                                <input required type="email" id='userMail' placeholder='Enter email' className='placeholder:text-gray-900 dosis-font' value={usermail} onChange={(e)=>{
                                    setusermail(e.target.value)
                                }} />
                            </div>
                            <div className="mailQurey w-full my-1">
                                <label className='dosis-font text-sm text-white' htmlFor="mailQurey" style={{ fontWeight: "600" }}>Write Qurey</label><br />
                                <input required type="text" id='mailQurey' placeholder='Write Qurey' className='placeholder:text-gray-900 dosis-font' value={mailSubject} onChange={(e) => {
                                    setmailSubject(e.target.value)
                                }} />
                            </div>
                            <div className="mailContent w-full my-1">
                                <label className='dosis-font text-sm text-white' htmlFor="mailingText" style={{ fontWeight: "600" }}>Write Content</label><br />
                                <textarea required className='placeholder:text-gray-900 dosis-font' name="mailingText" id="mailingText" placeholder='Write content for your mail...' value={content} onChange={(e) => {
                                    setcontent(e.target.value)
                                }} ></textarea>
                            </div>
                        </div>
                        <div className="submitBtn w-full flex flex-col items-center justify-center ">
                            {!isProcess && <button type='submit' className=' mx-auto overflow-hidden px-2 py-1 my-3 text-2xl text-black protest-guerrilla-regular bg-[#8effd4]'>
                                Contact
                            </button>}
                            {isProcess &&  <div
                                    className="w-12 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]"
                                >
                                    <span
                                        className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"
                                    >
                                    </span>
                                </div>
                            }
                            {isProcess === false && <div className='update text-white font-semibold'>{update}</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contatct