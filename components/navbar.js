import Link from "next/link";

function Navbar(props){




    return(
        <nav  className={props.className}>
            {/* logo */}
            <div className="flex mx-auto md:hidden">
                <img src="assets/logo-putih.svg" alt="logo"/>
            </div>
            <div classname="hidden md:flex">
                <img className="hidden md:flex md:w-[100px] md:h-auto md:mr-[500px] lg:w-auto lg:h-auto"src="assets/logo-ungu.svg" alt="logo"/>
            </div>
            <div className="hidden md:flex md:flex-row md:ml-[20px] md:space-x-8 lg:ml-[600px] lg:space-x-16">
                <Link href="/about">
                    <p className="text-white font-aeonik text-sm lg:text-lg">About Us</p>
                </Link>
                <div>
                    <p className="text-white font-aeonik text-sm lg:text-lg">Product</p>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;