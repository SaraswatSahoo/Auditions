import React, { useState } from "react";
import Layout from "../../component/Layout";
import { departmentList, roleList } from "./data";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function RegistrationPage(){

    const [ formData, setFormData ] = useState({
        name: "",
        rollNum: "",
        phoneNum: "",
        department: "",
        role1: "",
        role2: "",
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const fieldClassName = " flex flex-col my-[10px] sm:my-[20px] w-[70%] sm:w-full";
    const titleClassName = " text-[20px] sm:text-[30px] font-semibold ";
    const inputClassName = " py-2.5 text-[15px] sm:text-[20px] border-2 border-black focus:border-[#1AC0E6] px-2.5 my-2.5 rounded-lg outline-none";

    function changeHandler(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function submitHandler(){

        setLoading(true);
        
        try{

            const response = await axios.post(`${BACKEND_URL}/register`,{
                name: formData.name,
                rollNum: formData.rollNum,
                phoneNum: formData.rollNum,
                department: formData.department,
                role1: formData.role1,
                role2: formData.role2,
            });
            
            localStorage.setItem("token", JSON.stringify(response.data.token));

            setLoading(false);

            if(response.status === 200){
                navigate("/questions");
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
                    <span className=" text-[30px] sm:text-[50px] font-semibold">Registration</span>

                    {/* Name */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Name</span>
                        <input 
                            type="text" 
                            name="name"
                            onChange={changeHandler}
                            placeholder="Enter Your name"
                            className= {inputClassName}
                            value={formData.name}
                            autoComplete="off"
                        />
                    </div>

                    {/* Roll Number */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Roll Number</span>
                        <input 
                            type="text" 
                            name="rollNum"
                            onChange={changeHandler} 
                            placeholder="Enter Your roll number"
                            className={inputClassName}
                            value={formData.rollNum}
                            autoComplete="off"
                        />
                    </div>

                    {/* //Phone Number  */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Phone</span>
                        <input 
                            type="text" 
                            name="phoneNum"
                            onChange={changeHandler} 
                            placeholder="Enter Your phone number"
                            className={inputClassName}
                            value={formData.phoneNum}
                            autoComplete="off"
                        />
                    </div>

                    {/* //Department  */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Department</span>
                        <select 
                            className={inputClassName }
                            name="department"
                            value={formData.department}
                            onChange={changeHandler}
                        >
                            <option value='' disabled hidden>
                                Select your department
                            </option>
                            {departmentList.map((dept) => (
                            <option key={dept} value={dept} className='text-black'>
                                {dept}
                            </option>
                            ))}
                        </select>
                    </div>

                    {/* //Domain 1 */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Domain 1</span>
                        <select 
                            className={inputClassName}
                            name="role1"
                            value={formData.role1}
                            onChange={changeHandler}
                        >
                            <option value='' disabled hidden>
                                Select Domain 1
                            </option>
                            {roleList.map((role1) => (
                            <option key={role1} value={role1} className='text-black'>
                                {role1}
                            </option>
                            ))}
                        </select>
                    </div>

                    {/* //Domain 2 */}

                    <div className={fieldClassName}>
                        <span className={titleClassName}>Domain 2</span>
                        <select 
                            className={inputClassName}
                            name="role2"
                            value={formData.role2}
                            onChange={changeHandler}
                        >
                            <option value='' disabled hidden>
                                Select Domain 2
                            </option>
                            {roleList.map((role2) => (
                            <option key={role2} value={role2} className='text-black'>
                                {role2}
                            </option>
                            ))}
                        </select>
                    </div>
                    <button onClick={submitHandler} className=" w-[70%] sm:w-full text-[20px] sm:text-[30px] text-white font-semibold bg-black flex justify-center items-center px-[8px] py-[8px] hover:scale-110 transition-all duration-300 ease-in-out mt-[40px] rounded-[10px]">Next</button>
                </div>
            </div>
        </Layout>
    )
}

export default RegistrationPage;