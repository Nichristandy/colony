import React from "react";

function Footer (){


    return(
        <div className="flex flex-row   items-center bg-[#524BFC] p-2 space-x-5 md:px-5 lg:pl-[57px] lg:pr-[28px]">
           <div className="lg:mr-64">
            <img src="assets/logo-putih.svg" alt="logo putih" className="w-auto h-12px lg:w-auto lg:h-auto"/>
            </div>
            
            <p className="text-white text-[8px] w-[50%] md:text-xs md:w-[70%] lg:text-lg lg:w-4/12" >IT Solution for Your Property Management</p>
            <div className="flex flex-row md:w-[40%] md:mr-6 items-center lg:w-[30%] lg:pl-10 lg:mr-0">
                <p className="text-white text-[8px] font-bold md:text-xs md:mr-20  lg:text-lg lg:mr-18">Legal</p>
                <p className="text-white text-right text-[8px] md:text-xs lg:text-lg">© 2023 PT Digital Koloni Utopia</p>
            </div>
        </div>
    );


}

export default Footer;