import { Input } from "@/components/form/Input";
import Footer from "@/components/footer";
import Navbar2 from "@/components/navbar2"; 
import { useState } from "react";




export default function Contact(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [request, setRequest] = useState('')
    const [attach, setAttach] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Sending');

        let data = {
            name,
            email,
            phone,
            message,
            request,
            attach,
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
              setMessage('')
              setPhone('')
              setRequest('')
              setAttach('')
            }
          })

    }



    return(
        <>
        <Navbar2/>
        <div className="bg-[#5F59F7] ">
        
            <div className="w-full flex flex-col items-center py-4  md:flex-row md:py-[100px] md:px-[96px] md:justify-between  lg:gap-28 mx-auto md:gap-20">
                    <div className="flex flex-col text-center text-white md:text-left lg:gap-3 w-5/6 md:w-1/2 md:space-y-[16px]">
                        <p className="aeonik-bold font-bold text-[14px] lg:text-2xl md:text-[16px]"> Do you have a business plan or idea?</p>
                        <p className="aeonik-bold font-bold mt-10 text-[32px] lg:text-6xl md:text-[24px]"> Let’s talk about it!</p>
                        <p className="aeonik lg:text-lg mt-10 text-[14px] md:text-[12px]"> We would love to hear about your project. One of our specialists will reach out to you within the next 2 hours.  Simply fill out the form or email us at hi@dgcolony.com</p>
                    
                        <div className="aeonik hidden md:flex flex-col text-center md:text-left gap-2 text-white lg:text-xl md:text-[12px] md:pt-[60px] lg:pt-0 lg:mt-28">
                            <p className="aeonik-bold font-bold">Headquarters</p>
                            <p>Graha Sumartadinata</p>
                            <p>Jl Ciputat Raya No.102, Kebayoran Lama</p>
                            <p>Jakarta Selatan, DKI Jakarta</p>
                            <p>122040</p>
                        </div>     
                    </div>

                    <div className="w-full flex flex-col-reverse items-center md:w-1/2  pt-16 md:flex-row md:justify-between md:pt-0">
                        <div className="aeonik flex md:hidden flex-col text-center md:text-left gap-2 text-white lg:text-xl md:text-[12px] mt-28">
                            <p className="aeonik-bold font-bold ">Headquarters</p>
                            <p>Graha Sumartadinata</p>
                            <p>Jl Ciputat Raya No.102, Kebayoran Lama</p>
                            <p>Jakarta Selatan, DKI Jakarta</p>
                            <p>122040</p>
                        </div>

                        <div className="flex w-5/6 md:w-11/12">
                            <form className="flex flex-col gap-8 w-full">
                                <div className="flex flex-col">
                                        <label htmlFor="name" className="capitalize text-white lg:text-lg text-[12px]"> Name </label>
                                        <input type="text" id="name" onChange={(e) =>{setName(e.target.value)}}  className="border-b-2 outline-none text-lg border-white bg-transparent w-full" />
                                </div>
                                <div className="flex flex-col">
                                        <label htmlFor="email" className="capitalize text-white lg:text-lg text-[12px]"> Email </label>
                                        <input type="email" id="email" onChange={(e) =>{setEmail(e.target.value)}}  className="border-b-2 outline-none text-lg border-white bg-transparent w-full" />
                                </div>
                                <div className="flex flex-col">
                                        <label htmlFor="phone-number" className="capitalize text-white lg:text-lg text-[12px]"> Phone Number </label>
                                        <input type="number" id="phone-number" onChange={(e) =>{setPhone(e.target.value)}}  className="border-b-2 outline-none text-lg border-white bg-transparent w-full" />
                                </div>
                                <div className="flex flex-col">
                                        <label htmlFor="message" className="capitalize text-white lg:text-lg text-[12px]"> Message </label>
                                        <input type="text" id="message" onChange={(e) =>{setMessage(e.target.value)}}  className="border-b-2 outline-none text-lg border-white bg-transparent w-full" />
                                </div>
                                {/* <Input type="text"  value={stateOfInput} label="name" /> */}
                                {/* <Input type="email" onChange={(e) =>{setEmail(e.target.value)}} value="email" label="email" />
                                <Input type="number" onChange={(e) =>{setPhone(e.target.value)}} value="phone-number" label="phone number" />
                                <Input type="text" onChange={(e) =>{setMessage(e.target.value)}} value="message" label="message or question" /> */}

                                <div className="flex w-full justify-between lg:text-lg md:text-[12px]">
                                    <div className="flex gap-2 items-center">
                                        <input type="checkbox" onChange={(e) =>{setRequest(e.target.value)}} className="rounded lg:h-5 lg:w-5 md:h-[14px] md:w-[14px]" id="check" />
                                        <label className="cursor-pointer text-[12px] text-white lg:text-[18px]" htmlFor="check"> Request a demo </label>
                                    </div>
                                    <input type="file" onChange={(e) =>{setAttach(e.target.value)}} name="file" id="file" className="hidden"/>
                                    <label for="file" className="text-[12px] text-white lg:text-[18px] cursor-pointer">Attach File</label>
                                </div>

                                <div className="flex items-center md:gap-3 lg:gap-5 md:w-7/8 lg:space-x-20 lg:w-[100%] ">
                                    <div className="w-5/12 lg:w-1/4">
                                        <input type="submit" onClick={(e) => {handleSubmit(e)}} value="Send Mail" className="text-[12px] hover:cursor-pointer lg:text-[18px] text-white bg-gradient-to-tr from-[#5F59F7] to-[#2620A9] p-2 lg:p-3 md:w-auto rounded shadow-md lg:w-40"/>
                                    </div>

                                    <div className="w-8/12 ml-1 md:w-7/12 lg:w-8/12 lg:ml-6">
                                        <p className="lg:text-lg text-[12px] text-white">Colony processing my personal data according to the <span className="font-bold">Privacy Policy</span> </p>
                                    </div>
                                </div>
                            </form>
                        </div>             

                    </div>                   
            </div>





          <Footer/>
        </div>
        </>
    )




}

