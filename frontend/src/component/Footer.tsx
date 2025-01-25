import { Copyright, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className=" text-white bg-black flex flex-col items-center rounded-[20px]">
            <div className="sm:flex sm:flex-row flex flex-col sm:space-y-[50px] space-y-[30px] justify-between py-[50px] w-[80%] border-gray-800 border-b-2">
                <div className=" flex flex-col sm:space-y-[30px] space-y-[20px]">
                    <h2 className=" font-semibold sm:text-[30px] text-[20px]">Our Social Links</h2>
                    <div className=" sm:space-y-[30px] space-y-[20px] sm:text-[18px] text-[15px] px-[20px]">
                        <Link to={"https://www.facebook.com/mathsntechclub/"} className="flex items-center"><Facebook className=" mr-[10px]"/> mathsntechclub</Link>
                        <Link to={"https://www.instagram.com/mntc.nitd/"} className="flex items-center"><Instagram className=" mr-[10px]"/> mntc.nitd</Link>
                        <Link to={"https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/"} className="flex items-center"><Linkedin className=" mr-[10px]"/> mathsntechclub</Link>
                    </div>
                </div>
                <div className=" flex flex-col sm:space-y-[30px] space-y-[20px]">
                    <h2 className=" font-semibold sm:text-[30px] text-[20px]">Contact Us On</h2>
                    <div className=" sm:space-y-[30px] space-y-[20px] sm:text-[18px] text-[15px] px-[20px]">
                        <Link to={""} className="flex items-center"><Phone className=" mr-[10px]"/> 93396-09242 (Tathagata)</Link>
                        <Link to={""} className="flex items-center"><Phone className=" mr-[10px]"/> 97921-61125 (Shivanshu)</Link>
                        <Link to={""} className="flex items-center"><Mail className=" mr-[10px]"/> mntcnitd@gmail.com</Link>
                    </div>
                </div>
                <div className=" flex flex-col sm:space-y-[30px] space-y-[20px]">
                    <h2 className=" font-semibold sm:text-[30px] text-[20px]">Visit Our Other Pages</h2>
                    <div className=" sm:space-y-[30px] space-y-[20px] sm:text-[18px] text-[15px] px-[20px]">
                        <Link to={"https://mntcnitdgp.co.in/events"} className="flex items-center">Events</Link>
                        <Link to={"https://mntcnitdgp.co.in/team"} className="flex items-center">Our Team</Link>
                        <Link to={"https://mntcnitdgp.co.in/about"} className="flex items-center">About Us</Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-[40px]">
                <Copyright className=" mr-[10px]"/> All rights reserved by MNTC
            </div>
        </div>
    )
}

export default Footer;