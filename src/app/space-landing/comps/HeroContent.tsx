"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";
import StarsCanvas from "./StarBackground";
import { SparklesIcon } from "@heroicons/react/24/solid";
import FormGenerator from "@/app/form-generator";
import Image from "next/image";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row m-auto items-center justify-center mt-4 sm:mt-[30px] sm:pl-[100px] pl-[40px] sm:pr-0 pr-[20px] sm:ml-0 sm:w-full"
    >
      <div className="h-full flex flex-col gap-5 w-full items-center sm:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] ">
            AI Generated Forms
          </h1>
        </motion.div>

        <div className="">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white w-auto h-auto"
        >
          <span>
            Create your Forms in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              {" "}
              Seconds{" "}
            </span>
            not Hours.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Generate, publish and share your form right away with AI. <br></br>
          Dive into insightful results, charts and analytics.
        </motion.p>
        </div>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */ }
        <motion.a className="m-auto sm:m-0"
         variants={slideInFromLeft(1)} 
        >
          <FormGenerator/>
        </motion.a>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden sm:block w-full h-full flex justify-center items-center"
      >
        <Image className="hidden sm:block"
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
