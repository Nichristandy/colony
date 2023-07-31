import Navbar from '@/components/navbar'
import Button from '@/components/button'
import Video from '@/components/video'
import Card from '@/components/card'
import Footer from '@/components/footer'
import navbar2 from '@/components/navbar2'


export default function Home() {
  return (
    <main>
      
      {/* hero */}
      <div className='flex flex-col relative mb-12 lg:mb-20'>
        <Navbar/>
          {/* background */}
          <img className='absolute z-0 top-0 right-0 w-auto md:w-[566px] md:h-[312px] lg:w-auto lg:h-auto' src='assets/hero.png' alt='hero'/>
          <div className='flex flex-col w-[70%] mt-8 mx-8 md:mt-[150px] md:mx-12 lg:w-[70%]] lg:px-12 lg:mt-[200px]'>
              <h1 className='aeonik-bold font-bold text-lg leading-5 md:text-[24px] md:w-[70%] lg:w-[90%] md:leading-7 lg:text-[48px] lg:leading-10 lg:px'>Streamlined Platform for Your Convenient Property Management</h1>
              <div className='mt-2 md:mt-4'>
                <Button className="flex justify-center bg-gradient-to-r from-[#5F59F7] to-[#2620A9] py-2 px-1 w-4/12 rounded-md md:w-2/12 lg:w-[122px]"/>
              </div>
          </div>
      </div>
      {/* video */}
      <div className='flex flex-col w-full items-center py-[30px] md:flex-row md:px-14 md:space-x-6 lg:py-[100px] lg:px-[96px]'>
        <div className='flex flex-col w-[75%] md:w-[6/12]'>
          <h1 className='font-bold aeonik-bold text-lg text-center md:text-left lg:text-[48px]'>Colony</h1>
          <div className='aeonik text-center text-xs leading-[14px] mt-2 md:text-left md:w-11/12 lg:text-2xl lg:leading-[24px] lg:mt-6'>
            <p className='text-[#808080]'>a platform that helps Building Management to manage property maintenance programs and communication media that includes managers, unit, merchants and guests. 
              established in 2022, we committed to be the answer for all your property management’s problems</p>
          </div>
        </div>
        <div className="mt-10 mx-auto md:mx-0 w-[80%] md:w-[60%] lg:h-auto">
          <Video/>
        </div>
      </div>
      {/* problems */}
      <div className="flex flex-col py-[50px] items-center my-12 aeonik-bold">
        <div className='w-[80%] mb-[50px] md:w-[50%] '>
          <p className='aeonik-bold text-center text-xs text-[#808080] font-bold lg:text-2xl'>Building management can be a challenging task that requires a lot of attention to detail and coordination between multiple parties. 
          Some common problems in building management include:</p>
        </div>


        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full px-10 space-x-5 mb-5 md:space-x-1 md:px-[60px] lg:px-[96px]">
            <div className='flex flex-col text-center w-4/12'>
              <img className="w-[80px] h-[73px] md:w-[150px] md:h-[137px] mb-4 md:mx-auto lg:w-[327px] lg:h-[300px] lg:mb-10" src='assets/maintenance.png' alt='maintenance issues'/>
              <p className="text-[8px] font-bold md:text-base lg:text-[24px]">Maintenance Issues</p>
            </div>
            <div className='flex flex-col text-center w-4/12'>
              <img className="w-[90px] h-[67px] mb-[22px] md:w-[187px] md:h-[137px] md:mb-[16px] md:mx-auto lg:w-[400px] lg:h-[300px] lg:mb-10" src='assets/struggle.png' alt='maintenance issues'/>
              <p className="text-[8px] font-bold md:text-base lg:text-[24px]">Struggle Managing Technician</p>
            </div>
            <div className='flex flex-col text-center w-4/12'>
              <img className="w-[73px] h-[73px] mb-4 md:w-[137px] md:h-[137px] md:mx-auto lg:w-[300px] lg:h-[300px] lg:mb-10" src='assets/tenant.png' alt='maintenance issues'/>
              <p className="text-[8px] font-bold md:text-base lg:text-[24px]">Tenant Complaints</p>
            </div>
          </div>
          <div className="flex flex-row w-full px-10 space-x-1 md:mt-8">
            <div className='flex flex-col text-center items-center w-6/12 pl-4 md:pl-32 lg:pl-56'>
              <img className="w-[80px] h-[80px] mb-[10px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] lg:mb-10 " src='assets/communication.png' alt='maintenance issues'/>
              <p className="text-[8px] font-bold md:text-base lg:text-[24px]">Communication Breakdowns</p>
            </div>
            <div className='flex flex-col text-center items-center w-6/12 pr-4 md:pr-32 lg:pr-56'>
              <img className="w-[80px] h-[80px] mb-[10px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] lg:mb-10 " src='assets/security.png' alt='maintenance issues'/>
              <p className="text-[8px] font-bold md:text-base lg:text-[24px]">Security Concerns</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className='flex flex-col md:relative'>
      {/* solution */}
      <div className='flex flex-col items-center space-y-7 pb-12 md:flex-row md:px-[60px] md:space-x-6 md:pb-16 lg:px-24 lg:py-[100px] lg:pb-[250px]'>
        <div className='flex flex-col space-y-5 text-center w-[75%] md:text-left md:w-[50%] md:space-y-2'>
            <h1 className='aeonik-bold font-bold text-lg md:text-2xl lg:text-5xl'>We Provide The Solution</h1>
            <p className='aeonik text-xs text-[#808080] lg:text-2xl'>where building managers can adopt effective communication strategies, implement regular maintenance schedules, 
              invest in security measures, and seek feedback from tenants to improve their experience.</p>
        </div>
        <div>
          <img className='w-[295px] h-[238px] lg:w-[632px] lg:h-[510px]' src="assets/tab-app.png"/>
        </div>
      </div>

        <img src="assets/hiasan.png" className='hidden md:flex md:absolute md:w-[250px] md:h-auto md:left-0 md:top-48 lg:h-[430px] lg:w-auto lg:top-[525px] lg:-left-4'/>




      <div className='bg-[#5F59F7]'>
        {/* advantage */}
      <div className='flex py-[50px] m-0 lg:py-[100px] lg:px-[96px]'>
        <div className='flex flex-col px-[40px]'>
          <h1 className='aeonik-bold text-center font-bold text-lg text-white lg:text-5xl'>Advantage of implementing Colony in your property</h1>
          <div className='flex flex-row w-full mt-7 md:flex-col md:mt-[52px]'>
            <div className='flex flex-col w-1/2 space-y-8 md:flex-row md:w-full md:space-y-0 md:space-x-8'>
              <Card
                text="BUILD OPERATIONAL EFFICIENCY"
                src="assets/efficient.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-auto"
              />
              <Card
                text="EASIER AND ACCURATE REPORTING"
                src="assets/accurate.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-auto"
              />
              <Card
                text="KEEP ON TRACK WITH YOUR ASSETS"
                src="assets/keep-on-track.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-[81px]"
              />
              <Card
                text="SIMPLIFY YOUR ECOSYSTEM IN YOUR PROPERTY"
                src="assets/ecosystem.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-auto"
              />
            </div>
            <div className='flex flex-col w-1/2 space-y-8 md:flex-row md:w-full md:space-y-0 md:space-x-8 md:mt-6'>
              <Card
                text="FULLY INTEGRATED SYSTEM AUTOMATION"
                src="assets/integrated.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-[81px]"
              />
              <Card
                text="IMPROVE PROPERTY MANAGEMENT"
                src="assets/improve_1.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-[81px]"
              />
              <Card
                text="CUSTOMIZE DASHBOARD BY YOUR NEEDS"
                src="assets/customize.png"
                alt ="icon"
                className="w-auto h-5 lg:w-[81px] lg:h-auto"
              />
              <Card
                text="FULFILL ALL YOUR UNIT'S NEEDS"
                src="assets/needs.png"
                alt ="icon"
                className="w-auto h-5 mt-[17px] md:mt-0 lg:w-[81px] lg:h-[81px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className='flex justify-center py-[50px]  md:px-[60px] m-0 lg:py-[100px] lg:px-24'>
        <div className='flex flex-col md:flex-row w-[80%] md:w-full md:items-center md:space-x-12'>
          <h1 className='aeonik-bold text-center font-bold text-lg text-white md:text-left md:text-xl md:w-[45%] md:pl-8 lg:text-5xl lg:leading-auto lg:pl-0 lg:w-[696px]'>Streamlined Platform for Your Convenient Property Management</h1>
          <div className='mt-[46px] md:mt-0'>
            <img src='assets/banner2.png' alt='photo' className='w-[261px] h-[322px] lg:w-auto lg:h-auto'/>
          </div>
        </div>
      </div>
    
      <Footer/>
      
      </div>
      </div>
      
      

      


    </main>
  )
}
