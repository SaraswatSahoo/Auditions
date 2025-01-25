import React, { useState } from "react";
import Layout from "../../component/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from '@mui/material/Slider';

function RatingPage(){

    const [ rating, setRating ] = useState({
        creativity: 1,
        hardworking: 1,
        punctuality: 1,
        dedication: 1,
    });

    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const fieldClassName = " flex flex-col my-[20px]";
    const titleClassName = " text-[30px] font-semibold ";

    function changeHandler(event: Event, value: number | number[], name: string) {
        setRating((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function submitHandler(){
        //@ts-ignore
        const token = localStorage.getItem("token");
        const response = await axios.put(`${BACKEND_URL}/rating`,{
            creativity: rating.creativity,
            hardworking: rating.hardworking,
            punctuality: rating.punctuality,
            dedication: rating.dedication,
        },{
            headers: {
                //@ts-ignore
                token: JSON.parse(token),
            }
        });

        if(response.status === 200){
            navigate("/thankyou");
        }
    }

    const marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 4,
          label: '4',
        },
        {
          value: 6,
          label: '6',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 10,
            label: '10',
        },
    ];

    return(
        <Layout>
            <div className=" h-full flex justify-center items-center mt-[50px] mb-[80px]">
                <div className=" bg-[#ffffff] py-[50px] px-[100px] rounded-[20px]">
                    <span className=" text-[50px] font-semibold pb-[20px]">Ratings</span>

                    {/* Creativity */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Creativity</span>
                        <div className="my-[20px] w-[500px]">
                            <Slider
                                value={rating.creativity}
                                step={1}
                                marks={marks}
                                min={0}
                                max={10}
                                onChange={(event, value) => changeHandler(event, value, 'creativity')}
                            />
                        </div>
                        
                    </div>

                    {/* Hardworking */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Hardworking</span>
                        <div className="my-[20px] w-[500px]">
                            <Slider
                                value={rating.hardworking}
                                step={1}
                                marks={marks}
                                min={0}
                                max={10}
                                onChange={(event, value) => changeHandler(event, value, 'hardworking')}
                            />
                        </div>
                        
                    </div>

                    {/* Punctuality */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Punctuality</span>
                        <div className="my-[20px] w-[500px]">
                            <Slider
                                value={rating.punctuality}
                                step={1}
                                marks={marks}
                                min={0}
                                max={10}
                                onChange={(event, value) => changeHandler(event, value, 'punctuality')}
                            />
                        </div>
                        
                    </div>

                    {/* Dedication */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Dedication</span>
                        <div className="my-[20px] w-[500px]">
                            <Slider
                                value={rating.dedication}
                                step={1}
                                marks={marks}
                                min={0}
                                max={10}
                                onChange={(event, value) => changeHandler(event, value, 'dedication')}
                            />
                        </div>
                        
                    </div>

                    <button onClick={submitHandler} className=" w-full text-[30px] text-white font-semibold bg-black flex justify-center items-center px-[8px] py-[8px] hover:scale-110 transition-all duration-300 ease-in-out mt-[40px] rounded-[10px]">Submit</button>
                </div>
            </div>
        </Layout>
    )
}

export default RatingPage;