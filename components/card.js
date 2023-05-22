import React from "react";

function Card (props){

    return(
        <div className="bg-[#524BFC] rounded-xl px-1 py-4 w-[90%] flex flex-col justify-item-center">
            <h1 className="text-white text-center font-bold text-xs w-[90%] mx-auto lg:text-lg">{props.text}</h1>
            <div className=" mt-8 mx-auto lg:mb-[41px] lg:mt-16">
                <img src={props.src} alt={props.alt} className={props.className} style={props.style} />
            </div>
        </div>
    );

};

export default Card;