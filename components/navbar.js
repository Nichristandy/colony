import Link from "next/link";

function Navbar(props){




    return(
        <nav  className={props.className}>
            {/* logo */}
            <div className="flex mx-auto md:hidden">
                <img src={props.img} alt="logo"/>
            </div>
            <Link href="/home">
            
            
            <div classname="hidden md:flex md:justify-end">
                <img className="hidden md:flex md:w-[100px] md:h-auto md:mr-[400px] lg:w-auto lg:h-auto"src="assets/logo-ungu.svg" alt="logo"/>
            </div>
            
            </Link>

            <div className="hidden md:flex md:flex-row md:justify-start md:ml-[20px] md:space-x-8 lg:ml-[600px] lg:space-x-16">
                <Link href="/about">
                    <p className="font-aeonik text-sm lg:text-lg">About Us</p>
                </Link>

                <Link href="/contact">
                    <p className="text-sm  lg:text-lg">Contact Us</p>
                </Link>
                {/* <div>
                    <p className="font-aeonik text-sm lg:text-lg">Product</p>
                </div> */}
            </div>
        </nav>

    )

}

export default Navbar;