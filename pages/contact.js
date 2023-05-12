import { Input } from "@/components/form/Input";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar"; 
import secondButton from "@/components/secondbutton";

export default function Contact(){

    return(
        <>
        <Navbar className="flex flex-row z-10 align-middle w-full py-6 px-6 md:px-6 md:w-full lg:px-12 bg-white text-black" img="assets/logo-ungu.svg"/>
        <div className="bg-[#5F59F7] ">
        
            <div className="w-full flex flex-col items-center py-4  md:flex-row md:py-[100px] md:px-[96px] md:justify-between  lg:gap-28 mx-auto md:gap-20">
                    <div className="flex flex-col text-center text-white md:text-left lg:gap-3 w-5/6 md:w-1/2 md:space-y-[16px]">
                        <p className="font-bold text-[14px] lg:text-2xl md:text-[16px]"> Do you have a business plan or idea?</p>
                        <p className="font-bold mt-10 text-[32px] lg:text-6xl md:text-[24px]"> Let’s talk about it!</p>
                        <p className="lg:text-lg mt-10 text-[14px] md:text-[12px]"> We would love to hear about your project. One of our specialists will reach out to you within the next 2 hours.  Simply fill out the form or email us at hi@dgcolony.com</p>
                    
                        <div className="hidden md:flex flex-col text-center md:text-left gap-2 text-white lg:text-xl md:text-[12px] md:pt-[60px] lg:pt-0 lg:mt-28">
                            <p className="font-bold">Headquarters</p>
                            <p>Graha Sumartadinata</p>
                            <p>Jl Ciputat Raya No.102, Kebayoran Lama</p>
                            <p>Jakarta Selatan, DKI Jakarta</p>
                            <p>122040</p>
                        </div>     
                    </div>

                    <div className="w-full flex flex-col-reverse items-center md:w-1/2  pt-16 md:flex-row md:justify-between md:pt-0">
                        <div className="flex md:hidden flex-col text-center md:text-left gap-2 text-white lg:text-xl md:text-[12px] mt-28">
                            <p className="font-bold ">Headquarters</p>
                            <p>Graha Sumartadinata</p>
                            <p>Jl Ciputat Raya No.102, Kebayoran Lama</p>
                            <p>Jakarta Selatan, DKI Jakarta</p>
                            <p>122040</p>
                        </div>

                        <div className="flex w-5/6 md:w-11/12">
                            <form className="flex flex-col gap-8 w-full">
                                <Input type="text" value="name" label="name" />
                                <Input type="email" value="email" label="email" />
                                <Input type="number" value="phone-number" label="phone number" />
                                <Input type="text" value="message" label="message or question" />

                                <div className="flex w-full justify-between lg:text-lg md:text-[12px]">
                                    <div className="flex gap-2 items-center">
                                        <input type="checkbox" className="rounded lg:h-5 lg:w-5 md:h-[14px] md:w-[14px]" id="check" />
                                        <label className="cursor-pointer text-[12px] text-white lg:text-[18px]" htmlFor="check"> Request a demo </label>
                                    </div>
                                    <input type="file" name="file" id="file" className="hidden"/>
                                    <label for="file" className="text-[12px] text-white lg:text-[18px] cursor-pointer">Attach File</label>
                                </div>

                                <div className="flex items-center md:gap-3 lg:gap-5 md:w-7/8 lg:space-x-20 lg:w-[100%] ">
                                    <div className="w-5/12 lg:w-1/4">
                                        <input type="submit" value="Send Mail" className="text-[12px] lg:text-[18px] text-white bg-gradient-to-tr from-[#5F59F7] to-[#2620A9] p-2 lg:p-3 md:w-auto rounded shadow-md lg:w-40"/>
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