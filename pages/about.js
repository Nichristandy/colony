import Button from '@/components/button'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function About(){


    return(
        <>
        <Navbar className="flex flex-row z-10 align-middle mt-6 w-full md:px-6 md:w-full lg:px-12 text-black" img="assets/logo-ungu.svg"/>
        {/* introduction */}
        <div className='flex flex-col items-center space-y-7 py-12 md:flex-row md:px-[60px] md:space-x-6 md:py-14 lg:px-24 lg:py-[100px] lg:pb-[250px]'>
            <div className='flex flex-col space-y-5 text-center w-[75%] md:text-left md:w-[50%] md:space-y-2 lg:w-[47%]'>
                <h1 className='font-bold text-lg md:text-2xl lg:text-5xl'>COLONY</h1>
                <p className='text-xs text-[#808080] lg:text-2xl lg:pt-4'>We believe that managing properties should be easy and stress-free. we are committed to providing innovative technology solutions that help property managers succeed.</p>
            </div>
            <div>
                <img className='w-[295px] h-[238px] lg:w-[632px] lg:h-[510px]' src="assets/tab-app.png"/>
            </div>
        </div>
        {/* vision-mission */}
        <div className='flex flex-col px-[40px] py-[50px] items-center md:py-14 md:px-[60px] lg:pb-[50px] lg:px-[96px] '>
            <div className='flex flex-col-reverse md:flex-row md:items-center'>
                <div className='flex flex-col md:w-[45%] md:mx-8 lg:w-1/2'>
                    <h1 className='font-bold text-center md:text-left text-lg md:text-2xl lg:text-5xl'>VISION</h1>
                    <p className='text-xs text-center md:text-left text-[#808080] md:pt-4 lg:text-2xl'>To be the leading provider of innovative space solutions that revolutionize by providing innovative technology solutions 
                        that make managing and communicating property maintenance programs easier and more efficient.
                    </p>
                </div>

                <div className='lg:w-1/2'>
                <img className='w-[280] h-auto md:w-[309px] md:h-auto  lg:w-auto lg:h-auto' src="assets/vision.svg"/>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center'>
               
                <div className='md:w-1/2'>
                    <img className='md:w-[309px] md:h-auto  lg:w-auto lg:h-auto' src="assets/vision.svg"/>
                </div>
               
               
                <div className='flex flex-col text-center md:text-left  md:w-[45%] md:mx-8 lg:w-1/2'>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-5xl'>MISSION</h1>
                    <p className='text-xs text-[#808080] lg:text-2xl md:pt-4'>Our mission is to provide a comprehensive property management platform that enables management to 
                    streamline property maintenance programs and improve engagement between management and tenant to create pleasant ecosystem.
                    </p>
                </div>
            </div>
        </div>

        {/* values */}
        <div className='bg-[#5F59F7] flex text-left px-[82px] py-[50px] md:flex-col md:px-[36px] md:py-[100px] lg:px-[72px]'>
            <div className='flex flex-col md:w-[90%] self-center'>

            <h1 className='text-white text-center md:text-left font-bold text-2xl lg:text-5xl'>Our Values</h1>
            <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-[31px] lg:space-x-[34px] lg:w-[100%] mt-6 self-center'>
                <div className='bg-[#524BFC] flex flex-col px-3 py-6 justify-items-center md:px-3 md:py-[24px]   lg:px-8 lg:py-12 md:w-4/12 rounded-[20px]'>
                    <div>
                        <img className='w-auto h-[69px] lg:w-auto lg:h-[139px]' src='assets/technology.png'/>
                    </div>
                    <div className='flex flex-col w-11/12 mt-[12px] lg:mt-[35px]'>
                        <div className='mb-2 lg:mb-5'>
                            <h1 className='text-white font-bold text-xs lg:text-2xl'>Empowerment through technology</h1>
                        </div>
                        <p className='text-white text-xs lg:text-2xl'>we are commited to using technology to empower property managers and property owners to more efficiently manage their properties and streamline their processes</p>
                    </div>

                </div>

                <div className='bg-[#524BFC] flex flex-col px-3 py-6 justify-items-center md:px-3 md:py-[24px]   lg:px-8 lg:py-12 md:w-4/12 rounded-[20px]'>
                    <div>
                        <img className='w-auto h-[69px] lg:w-auto lg:h-[139px]' src='assets/growth.png'/>
                    </div>
                    <div className='flex flex-col w-11/12 mt-[12px] lg:mt-[35px]'>
                        <div className='mb-2 lg:mb-5'>
                            <h1 className='text-white font-bold text-xs lg:text-2xl'>Quality through continuous improvement</h1>
                        </div>
                        <p className='text-white text-xs lg:text-2xl'> we are commited to delivering high-quality software system products and services to customers, while continuously striving to improve them</p>
                    </div>

                </div>

                <div className='bg-[#524BFC] flex flex-col px-3 py-6 justify-items-center md:px-3 md:py-[24px]   lg:px-8 lg:py-12 md:w-4/12 rounded-[20px]'>
                    <div>
                        <img className='w-auto h-[69px] lg:w-auto lg:h-[139px]' src='assets/user.png'/>
                    </div>
                    <div className='flex flex-col w-11/12 mt-[12px] lg:mt-[35px]'>
                        <div className='mb-2 lg:mb-5'>
                            <h1 className='text-white font-bold text-xs lg:text-2xl'>Customer-centric approach</h1>
                        </div>
                        <p className='text-white text-xs lg:text-2xl'>we believe the  importance of delivering software products and services that meet the needs and expectations of customers, that's why we make it to be one of our priorities</p>
                    </div>

                </div>

            </div>  
            </div>
        </div>
        {/* CTA */}
        <div className='px-[40px] py-[60px] md:px-[60px] lg:px-[96px] md:pt-[100px] md:pb-[50px]'>
            <div className='flex flex-col md:flex-row md:items-center'>
                <div className='md:w-1/2'>
                    <img src='assets/phone.svg' className='w-[280px] h-auto lg:w-[621px] lg:h-[677px]'/>
                </div>
                <div className='flex flex-col md:w-[309px] lg:w-[542px]'>
                    <h1 className='font-bold text-center md:text-left text-lg md:text-2xl lg:text-5xl lg:w-[90%]'>Let Colony make things easier for you!</h1>
                    <div className=' md:mt-2 lg:mt-6'>
                        <p className='text-xs text-center md:text-left text-[#808080] lg:text-2xl md: pb-4'>Our team will walk you through the features and show you how our application can transform the way you manage your building. Click the button below to schedule your demo today and take the first step towards a more efficient future!</p>
                        <Button className="flex justify-center mx-auto md:mx-0 bg-gradient-to-r from-[#5F59F7] to-[#2620A9] py-2 px-1 w-4/12 rounded-md md:w-[25%] lg:w-[30%]"/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )

}