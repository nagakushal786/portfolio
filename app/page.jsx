import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="xl:flex-1 xl:min-h-0 xl:overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-10 xl:h-full xl:pt-9">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-1">Data Analyst | Full Stack Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br/> <span className="text-accent">Naga Kushal Vankadara</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 mt-2">
              I'm a Computer Science graduate from IIITDM Kurnool who enjoys turning data into insights and building useful web applications. With skills in SQL, Python, Power BI, and full-stack development, I love solving real-world problems through data and technology.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume.pdf" download="resume.pdf">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home