"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    "num": "01",
    "category": "Final Year",
    "title": "XAI-FDCNN Classification",
    "description": "A research-driven project exploring Explainable AI (XAI) for image classification using CNNs in the frequency domain. Applies techniques like CAM and multi-scale frequency pyramids on various medical and non-medical imaging datasets.",
    "stack": [ { "name": "Python" }, { "name": "PyTorch" }, { "name": "CAM" }, { "name": "OpenCV" }, { "name": "XAI" } ],
    "image": "/assets/xai.png",
    "live": "",
    "github": "https://github.com/nagakushal786/xai-fdcnn-classification"
  },
  {
    num: "02",
    category: "Full Stack",
    title: "AI-Resume Enhancer",
    description: "An AI-driven career recommendation system along with the enhancement of your resume with respect to the current market trends.",
    stack: [{ name: "NextJS" }, { name: "Groq" }, {name: "Tailwind-CSS"}, {name: "Prisma"}],
    image: "/assets/ai-resume.png",
    live: "https://resume-enhancer-lovat.vercel.app/",
    github: "https://github.com/nagakushal786/resume-enhancer"
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Prescripto",
    description: "Prescripto is a web-based application designed to streamline medical prescription management.",
    stack: [{ name: "Vite" }, { name: "Tailwind-CSS" }, {name: "ExpressJS"}],
    image: "/assets/hms.png",
    live: "",
    github: "https://github.com/nagakushal786/Prescripto-hms"
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Authify",
    description: "Built a MERN-based email veriﬁcation and login template with MAILTRAP integration for seamless authentication",
    stack: [{ name: "Vite" }, { name: "Tailwind-CSS" }, {name: "ExpressJS"}, {name: "Mailtrap"}],
    image: "/assets/verification.png",
    live: "",
    github: "https://github.com/nagakushal786/Authify"
  },
  {
    num: "05",
    category: "ML",
    title: "Diabetes Prediction",
    description: "Developed a diabetes prediction application leveraging machine learning classification, with interactive UI for seamless user input and real-time prediction visualization.",
    stack: [{ name: "Python" }, { name: "Streamlit" }, {name: "Pandas"}],
    image: "/assets/diabetes.png",
    live: "",
    github: "https://github.com/nagakushal786/diabetes-prediction"
  },
  {
    num: "06",
    category: "CV",
    title: "Virtual Painter",
    description: "Developed a Python-based virtual painting application leveraging OpenCV and MediaPipe for real-time hand-tracking and gesture-controlled drawing.",
    stack: [{ name: "Python" }, { name: "Opencv" }, {name: "Mediapipe"}],
    image: "/assets/paint-brush.png",
    live: "",
    github: "https://github.com/nagakushal786/Virtual-Painter"
  }
]

const Work = () => {
  const [ project, setProject ] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.7, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-6xl md:text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[32px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
              </h2>
              <h3 className="text-[22px] xl:text-[28px] font-semibold leading-tight text-accent">{project.title}</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length-1 && ","}
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 mt-2">
                {project.live && (
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl xl:text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                )}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl xl:text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] mt-8 xl:mt-0">
            <Swiper spaceBetween={30} slidesPerView={1} className="h-[300px] sm:h-[400px] xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((item, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[280px] sm:h-[380px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-contain" alt={project.title}/>
                    </div>
                  </div>
                </SwiperSlide>;
              })}
              <WorkSlideBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work