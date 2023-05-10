import Link from "next/link";

function Button(props){

    return(
        <div className={props.className}>
            <p className="text-xs text-white  lg:text-lg">Get Started</p>
        </div>
    );

};

export default Button;