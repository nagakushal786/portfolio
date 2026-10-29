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
    "description": "Developed a frequency-domain image classification framework using CNNs to explore model interpretability across medical and non-medical datasets. Integrated CAM-based visual explanations to understand model predictions and improve interpretability.",
    "stack": [ { "name": "Python" }, { "name": "PyTorch" }, { "name": "CAM" }, { "name": "OpenCV" }, { "name": "XAI" } ],
    "image": "/assets/xai.png",
    "live": "",
    "github": "https://github.com/nagakushal786/xai-fdcnn-classification"
  },
  {
    "num": "02",
    "category": "Data Analytics",
    "title": "Housing Market Analytics",
    "description": "Built an interactive Power BI dashboard using Google BigQuery to analyze housing market trends, uncover pricing patterns, and present key insights through SQL queries, DAX measures, and data visualizations for informed decision-making.",
    "stack": [
      { "name": "Power BI" },
      { "name": "Google BigQuery" },
      { "name": "SQL" },
      { "name": "DAX" },
      { "name": "Excel" }
    ],
    "image": "/assets/house-market.png",
    "live": "",
    "github": "https://github.com/nagakushal786/Housing-Data-Analytics"
  },
  {
    num: "03",
    category: "Data Analytics",
    title: "Retail Sales Analytics",
    description: "Built an end-to-end retail analytics solution using Databricks and medallion architecture to transform raw datasets, uncover sales trends, analyze customer behavior, and deliver actionable business insights through structured data processing.",
    stack: [
      { name: "Databricks" },
      { name: "PySpark" },
      { name: "Power BI" },
      { name: "SQL" }
    ],
    image: "/assets/sales.png",
    live: "",
    github: "https://github.com/nagakushal786/RetailSphere"
  },
  {
    num: "04",
    category: "Data Analytics",
    title: "Student Engagement Automation",
    description: "Built an automated student engagement analytics workflow using n8n and Gemini AI to process survey responses, generate insights, visualize feedback, and deliver interactive dashboards for data-driven educational decision-making.",
    stack: [
      { name: "n8n" },
      { name: "Javascript" },
      { name: "Gemini AI" },
      { name: "HTML" },
      { name: "QuickChart" }
    ],
    image: "/assets/student.png",
    live: "",
    github: "https://github.com/nagakushal786/n8n-Automation"
  },
  {
    num: "05",
    category: "Full Stack",
    title: "AI-Resume Enhancer",
    description: "Built an AI-powered resume enhancer that analyzes resumes against job descriptions, identifies skill gaps, and suggests tailored improvements using Groq Cloud’s LLM API to create more relevant, job-specific applications.",
    stack: [{ name: "NextJS" }, { name: "Groq" }, {name: "Tailwind-CSS"}, {name: "Prisma"}],
    image: "/assets/resume.png",
    live: "https://resume-enhancer-lovat.vercel.app/",
    github: "https://github.com/nagakushal786/resume-enhancer"
  },
]

const Work = () => {
  const [ project, setProject ] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.7, duration: 0.4, ease: "easeIn"}}} className="h-full min-h-0 flex flex-col justify-center py-4 xl:py-3 xl:px-0">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:min-h-[460px] flex flex-col order-2 xl:order-none">
            <div className="flex flex-col gap-4 xl:gap-3">
              <div className="text-6xl md:text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[32px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
              </h2>
              <h3 className="text-[22px] xl:text-[28px] font-semibold leading-tight text-accent">{project.title}</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-x-4 gap-y-1 flex-wrap">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length-1 && ","}
                  </li>
                })}
              </ul>
              <div className="border border-white/20 mt-1"></div>
              <div className="flex items-center gap-4 mt-1"> 
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
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px"
                        className="object-contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </SwiperSlide>;
              })}
              <WorkSlideBtns
                showPrev={activeIndex > 0}
                showNext={activeIndex < projects.length - 1}
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