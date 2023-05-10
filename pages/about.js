import Button from '@/components/button'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function About(){


    return(
        <>
        <Navbar className="flex flex-row z-10 align-middle mt-6 w-full md:px-6 md:w-full lg:px-12 text-black"/>
        {/* introduction */}
        <div className='flex flex-col items-center space-y-7 pb-12 md:flex-row md:px-[60px] md:space-x-6 md:pb-16 lg:px-24 lg:py-[100px] lg:pb-[250px]'>
            <div className='flex flex-col space-y-5 text-center w-[75%] md:text-left md:w-[50%] md:space-y-2 lg:w-[47%]'>
                <h1 className='font-bold text-lg md:text-2xl lg:text-5xl'>COLONY</h1>
                <p className='text-xs text-[#808080] lg:text-2xl lg:pt-4'>We believe that managing properties should be easy and stress-free. we are committed to providing innovative technology solutions that help property managers succeed.</p>
            </div>
            <div>
                <img className='w-[295px] h-[238px] lg:w-[632px] lg:h-[510px]' src="assets/tab-app.png"/>
            </div>
        </div>
        {/* vision-mission */}
        <div className='flex lg:flex-col lg:pb-[50px] lg:px-[96px] '>
            <div className='flex lg:flex-row lg:items-center'>
                <div className='flex lg:flex-col lg:w-1/2'>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-5xl'>VISION</h1>
                    <p className='text-xs text-[#808080] lg:text-2xl lg:pt-4'>To be the leading provider of innovative space solutions that revolutionize by providing innovative technology solutions 
                        that make managing and communicating property maintenance programs easier and more efficient.
                    </p>
                </div>

                <div className='lg:w-1/2'>
                <img className='lg:w-auto lg:h-auto' src="assets/vision.svg"/>
                </div>
            </div>

            <div className='flex lg:flex-row lg:items-center'>
               
                <div className='lg:w-1/2'>
                    <img className='lg:w-auto lg:h-auto' src="assets/vision.svg"/>
                </div>
               
               
                <div className='flex lg:flex-col lg:w-1/2'>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-5xl'>MISSION</h1>
                    <p className='text-xs text-[#808080] lg:text-2xl lg:pt-4'>Our mission is to provide a comprehensive property management platform that enables management to 
                    streamline property maintenance programs and improve engagement between management and tenant to create pleasant ecosystem.
                    </p>
                </div>
            </div>
        </div>

        {/* values */}
        <div className='bg-[#5F59F7] flex text-left lg:flex-col lg:py-[100px] lg:px-[72px]'>
            <div className='flex flex-col lg:w-[90%] self-center'>

            <h1 className='text-white text-left font-bold lg:text-5xl'>Our Values</h1>
            <div className='flex md:flex-row lg:space-x-[34px] lg:w-[100%] lg:mt-6 self-center'>
                <div className='bg-[#524BFC] flex flex-col justify-items-center lg:px-8 lg:py-12 lg:w-4/12 lg:rounded-[20px]'>
                    <div>
                        <img className='lg:w-auto lg:h-auto' src='assets/values.svg'/>
                    </div>
                    <div className='flex flex-col lg:w-11/12 lg:mt-[35px]'>
                        <div className='lg:mb-5'>
                            <h1 className='text-white font-bold lg:text-2xl'>BUILD OPERATIONAL EFFICIENCY</h1>
                        </div>
                        <p className='text-white lg:text-2xl'>Prepare your apartment starting from the number of towers, floors, units, to existing public facilities.</p>
                    </div>

                </div>

                <div className='bg-[#524BFC] flex flex-col justify-items-center lg:px-8 lg:py-12 lg:w-4/12 lg:rounded-[20px]'>
                    <div>
                        <img className='lg:w-auto lg:h-auto' src='assets/values.svg'/>
                    </div>
                    <div className='flex flex-col lg:w-11/12 lg:mt-[35px]'>
                        <div className='lg:mb-5'>
                            <h1 className='text-white font-bold lg:text-2xl'>BUILD OPERATIONAL EFFICIENCY</h1>
                        </div>
                        <p className='text-white lg:text-2xl'>Prepare your apartment starting from the number of towers, floors, units, to existing public facilities.</p>
                    </div>

                </div>

                <div className='bg-[#524BFC] flex flex-col justify-items-center lg:px-8 lg:py-12 lg:w-4/12 lg:rounded-[20px]'>
                    <div>
                        <img className='lg:w-auto lg:h-auto' src='assets/values.svg'/>
                    </div>
                    <div className='flex flex-col lg:w-11/12 lg:mt-[35px]'>
                        <div className='lg:mb-5'>
                            <h1 className='text-white font-bold lg:text-2xl'>BUILD OPERATIONAL EFFICIENCY</h1>
                        </div>
                        <p className='text-white lg:text-2xl'>Prepare your apartment starting from the number of towers, floors, units, to existing public facilities.</p>
                    </div>

                </div>

            </div>  
            </div>
        </div>
        {/* CTA */}
        <div className='lg:px-[96px] lg:pt-[100px] lg:pb-[50px]'>
            <div className='flex lg:flex-row lg:items-center'>
                <div className='lg:w-1/2'>
                    <img src='assets/phone.svg' className='lg:w-[621px] lg:h-[677px]'/>
                </div>
                <div className='flex flex-col lg:w-[542px]'>
                    <h1 className='font-bold text-lg md:text-2xl lg:text-5xl lg:w-[90%]'>Let Colony make things easier for you!</h1>
                    <div className='lg:mt-6'>
                        <p className='text-xs text-[#808080] lg:text-2xl lg:pb-4'>Our team will walk you through the features and show you how our application can transform the way you manage your building. Click the button below to schedule your demo today and take the first step towards a more efficient future!</p>
                        <Button className="flex justify-center bg-gradient-to-r from-[#5F59F7] to-[#2620A9] py-2 px-1 w-4/12 rounded-md md:w-2/12 lg:w-[30%]"/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )

}