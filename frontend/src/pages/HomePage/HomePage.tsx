import Layout from "../../component/Layout";
import disImg from "../../../public/Artboard.png";
import GD from "../../../public/GD.png"
import CW from "../../../public/CW.png"
import EM from "../../../public/EM.png"
import FM from "../../../public/FM.png"
import VE from "../../../public/VE.png"
import WD from "../../../public/WD.png"
import TypewriterComponent from "typewriter-effect";
//@ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomePage(){

    const Text = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (Text.current) {
          const typewriter = new Typewriter(Text.current, {
            loop: true,
            delay: 75,
          });
    
          typewriter
            .pauseFor(200)
            .typeString('<span style="color: #1AC0E6;">Welcome to</span><br/>')
            .pauseFor(500)
            .typeString('MNTC<br/>')
            .pauseFor(500)
            .typeString('<span style="color: #1AC0E6;"> Auditions</span>')
            .pauseFor(2000)
            .start();
    
          return () => {
            typewriter.stop();
          };
        }
      }, []);

    return(
        <div>
            <Layout>

                <div className=" flex flex-col-reverse sm:flex sm:flex-row justify-between items-center mt-[20px] sm:mt-[80px] mb-[10px] sm:mb-[80px] w-full h-[550px]">
                    <div className=" text-white text-[45px] sm:text-[80px] font-semibold flex flex-col justify-center items-center px-0 sm:px-[80px] w-full sm:w-[700px] h-full">
                        <div className=" h-[200px] sm:h-full">
                            <div id="headTitle" ref={Text} className=" h-full text-center sm:text-left"></div>
                        </div>
                        <button onClick={() => {navigate("/register")}} className=" w-[80%] text-[20px] bg-[#1AC0E6] hover:bg-[#1a98e6] flex justify-center items-center px-[8px] py-[8px] hover:scale-110 transition-all duration-300 ease-in-out mt-[50px] sm:mt-[30px] rounded-[10px]">Register</button>
                    </div>
                    <div className=" px-[80px]">
                        <img src={disImg} alt="disImg" className=" w-[600px]"/>
                    </div>
                </div>

                <br />

                <div className=" mb-[150px]">
                    <div className=" text-[40px] sm:text-[50px] text-white font-semibold flex w-full justify-center items-center py-[20px]">
                        <TypewriterComponent
                            options={{
                                strings: ['Domains'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <div className=" flex flex-col sm:flex-row sm:flex justify-center items-center space-x-0 sm:space-x-[30px] space-y-[40px] sm:space-y-0 my-[40px] sm:my-[80px]">
                        <div className=" flex flex-col justify-center items-center p-[20px] sm:p-[10px] rounded-[20px] border-gray-300 border-2 sm:border-0 hover:border-gray-300 hover:border-2 hover:scale-110 transition-all duration-300 ease-in-out">
                            <div className=" h-[200px] sm:h-[250px] rounded-[20px]">
                                <img src={GD} alt="Graphic Designing" className=" h-full rounded-[20px]"/>
                            </div>
                            <span className=" text-white font-semibold text-[20px]">Graphic Designer</span>
                        </div>
                        <div className=" flex flex-col justify-center items-center p-[20px] sm:p-[10px] rounded-[20px] border-gray-300 border-2 sm:border-0 hover:border-gray-300 hover:border-2 hover:scale-110 transition-all duration-300 ease-in-outz">
                            <div className=" h-[200px] sm:h-[250px] rounded-[20px]">
                                <img src={CW} alt="Content Writer" className=" h-full rounded-[20px]"/>
                            </div>
                            <span className=" text-white font-semibold text-[20px]">Content Writer</span>
                        </div>
                        <div className=" flex flex-col justify-center items-center p-[20px] sm:p-[10px] rounded-[20px] border-gray-300 border-2 sm:border-0 hover:border-gray-300 hover:border-2 hover:scale-110 transition-all duration-300 ease-in-outz">
                            <div className=" h-[200px] sm:h-[250px] rounded-[20px]">
                                <img src={WD} alt="Web Developer" className=" h-full rounded-[20px]"/>
                            </div>
                            <span className=" text-white font-semibold text-[20px]">Web Developer</span>
                        </div>
                        <div className=" flex flex-col justify-center items-center p-[20px] sm:p-[10px] rounded-[20px] border-gray-300 border-2 sm:border-0 hover:border-gray-300 hover:border-2 hover:scale-110 transition-all duration-300 ease-in-outz">
                            <div className=" h-[200px] sm:h-[250px] rounded-[20px]">
                                <img src={EM} alt="Event Management" className=" h-full rounded-[20px]"/>
                            </div>
                            <span className=" text-white font-semibold text-[20px]">Event Management</span>
                        </div>
                        <div className=" flex flex-col justify-center items-center p-[20px] sm:p-[10px] rounded-[20px] border-gray-300 border-2 sm:border-0 hover:border-gray-300 hover:border-2 hover:scale-110 transition-all duration-300 ease-in-outz">
                            <div className=" h-[200px] sm:h-[250px] rounded-[20px]">
                                <img src={VE} alt="Video Editor" className=" h-full rounded-[20px]"/>
                            </div>
                            <span className=" text-white font-semibold text-[20px]">Video Editor</span>
                        </div>
                        <div className=" flex flex-col justify-center items-center p-[20px] sm:p-[10px] rounded-[20px] border-gray-300 border-2 sm:border-0 hover:border-gray-300 hover:border-2 hover:scale-110 transition-all duration-300 ease-in-outz">
                            <div className=" h-[200px] sm:h-[250px] rounded-[20px]">
                                <img src={FM} alt="Finance" className=" h-full rounded-[20px]"/>
                            </div>
                            <span className=" text-white font-semibold text-[20px]">Finance</span>
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    )    
}

export default HomePage;

