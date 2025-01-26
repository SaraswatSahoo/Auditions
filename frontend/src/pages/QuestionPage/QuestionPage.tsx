import { useState } from "react";
import Layout from "../../component/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

function QuestionPage(){

    const [ answers, setAnswers ] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const fieldClassName = " flex flex-col my-[10px] sm:my-[20px] w-[70%] sm:w-full";
    const titleClassName = " text-[20px] sm:text-[30px] font-semibold ";
    const inputClassName = " py-2.5 text-[15px] sm:text-[20px] border-2 border-black focus:border-[#1AC0E6] px-2.5 my-2.5 rounded-lg outline-none";

    function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setAnswers((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function submitHandler(){

        //@ts-ignore
        const token = localStorage.getItem("token");

        try{

            setLoading(true);

            const response = await axios.put(`${BACKEND_URL}/questions`,{
                answer1: answers.answer1,
                answer2: answers.answer2,
                answer3: answers.answer3,
            },{
                headers: {
                    //@ts-ignore
                    token: JSON.parse(token),
                }
            });

            setLoading(false);

            if(response.status === 200){
                navigate("/rating");
            }
        } catch (e) {

            console.log("There was an error" + e);

        }
        
    }

    return(
        <Layout>
            {loading && (
                <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-50">
                    <ScaleLoader color="#1AC0E6" loading={loading} />
                </div>
            )}
            <div className=" h-full flex justify-center items-center mt-[50px] mb-[80px]">
                <div className=" bg-[#ffffff] py-[50px] sm:py-[80px] px-0 sm:px-[100px] rounded-[20px] flex flex-col justify-center items-center sm:justify-start sm:items-start">
                    <span className=" text-[30px] sm:text-[50px] font-semibold">Questions</span>

                    {/* Question 1 */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Why do you want to join this club?</span>
                        <textarea
                            name="answer1"
                            onChange={changeHandler}
                            placeholder="Write atleast 100 words"
                            className= {inputClassName}
                            value={answers.answer1}
                            autoComplete="off"
                        />
                    </div>

                    {/* Question 2 */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>How will you contribute to the club ?</span>
                        <textarea
                            name="answer2"
                            onChange={changeHandler}
                            placeholder="Write atleast 100 words"
                            className= {inputClassName}
                            value={answers.answer2}
                            autoComplete="off"
                        />
                    </div>

                    {/* Question 3 */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Why did you chose this role ?</span>
                        <textarea
                            name="answer3"
                            onChange={changeHandler}
                            placeholder="Write atleast 100 words"
                            className= {inputClassName}
                            value={answers.answer3}
                            autoComplete="off"
                        />
                    </div>

                    <button onClick={submitHandler} className=" w-[70%] sm:w-full text-[20px] sm:text-[30px] text-white font-semibold bg-black flex justify-center items-center px-[8px] py-[8px] hover:scale-110 transition-all duration-300 ease-in-out mt-[40px] rounded-[10px]">Next</button>
                </div>
            </div>
        </Layout>
    )
}

export default QuestionPage;