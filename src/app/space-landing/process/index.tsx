"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { SparklesIcon } from '@heroicons/react/24/solid';

const Process = () => {
    return(
        <div className='flex flex-col justify-center items-center mb-[60px] ml-[30px]'> 

            <motion.div
            className="Welcome-box py-[8px] px-[7px] mb-[20px] border border-[#7042f88b] opacity-[0.9]"
            >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
                Tips for Optimal AI Form Creation
            </h1>
            </motion.div> 
           <h2 className='text-2xl font-bold text-center tracking-tighter sm:text-4xl md:text-4xl text-white mb-[60px]'> Enhance your Form Builder </h2>
            
            <div className="grid items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-2 lg:py-12 sm:w-[600px] sm:min-h-[400px] lg:w-[900px] min-w-[400px]  ">
                <div className="lg:w-[500px] lg:h-[312.5px] lg:-ml-[140px]  lg:border lg:border-blue-50/20 rounded sm:w-[400px] w-full flex justify-center mb-[20px]">
                    <Image 
                    src="/workingg.png"
                    alt="workinggg"
                    height={310}
                    width={500}
                    />
                </div>
                    
                <div className="flex flex-col ">
                    <h1 className="text-white font-bold text-[1.2rem] mb-[15px] text-center Welcome-text"> User Experience Guidelines </h1>
                    <p className="text-white mb-[9px] text-[0.9rem]"> 🔗 Be Specific with Prompts for more accurate form! </p>
                    <p className="text-white mb-[9px] text-[0.9rem]"> 🔗 Always preview the generated forms before finalizing them.  </p>
                    <p className="text-white mb-[9px] text-[0.9rem]"> 🔗 Utilize the dashboard to track & analyze form submissions.  </p>
                    <p className="text-white mb-[9px] text-[0.9rem]"> 🔗 Share your form via a link by using the &apos;Publish&apos; button.  </p>
                    <p className="text-white mb-[9px] text-[0.9rem]"> 🔗 Customize form fields to capture the exact data you need.  </p>
                    <p className="text-white mb-[9px] text-[0.9rem]"> 🔗 Explore subscription options for more Forms generation!  </p>

                </div>
            </div>

        </div>
    );
}

export default Process;