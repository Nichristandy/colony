import Link from "next/link";

function Button(props){

    return(
        <div className={props.className}>
            <Link href="/contact">
                <p className="aeonik text-xs text-white  lg:text-lg">Get Started</p>
            </Link>
            
        </div>
    );

};

export default Button;