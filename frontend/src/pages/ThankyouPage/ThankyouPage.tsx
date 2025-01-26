import { useEffect, useRef } from "react";
import Layout from "../../component/Layout";
//@ts-ignore
import Typewriter from "typewriter-effect/dist/core";

function ThankyouPage() {

    const Text = useRef<HTMLDivElement>(null);

    useEffect(() => {
            if (Text.current) {
              const typewriter = new Typewriter(Text.current, {
                loop: true,
                delay: 75,
              });
        
              typewriter
                .pauseFor(200)
                .typeString('Will see you soon<br/>')
                .pauseFor(500)
                .typeString('in the<br/>')
                .pauseFor(500)
                .typeString('Auditions')
                .pauseFor(2000)
                .start();
        
              return () => {
                typewriter.stop();
              };
            }
    }, []);

    return(
        <Layout>
            <div className='text-white text-[60px] font-semibold flex flex-col justify-center items-center mt-[50px]'>
                <div className=" text-[#1AC0E6] my-[30px]">Thank You</div>
                <div className='flex flex-col gap-2 h-[350px]'>
                    <div id="headTitle" ref={Text} className=" h-full text-center"></div>
                </div>
            </div>
        </Layout>
    )
}

export default ThankyouPage;