import { Link } from "react-router-dom";
import Logo from "../../public/mntc.png"

function Header (){

    return(
        <div className=" sm:px-[40px] px-[20px] py-[20px] flex justify-between items-center">
            <Link to={"/"}>
                <img src={Logo} alt="MNTC" className="sm:w-35 w-20"/>
            </Link>
            <div className=" sm:space-x-[20px] space-x-[10px] sm:text-[30px] text-[15px] font-semibold text-white">
                <Link to={"/"} > Home </Link>
                <Link to={"https://mntcnitdgp.co.in/"}> MNTC </Link>
                <Link to={"/register"}> Audition </Link>
            </div>
        </div>
    )
}

export default Header;