import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";


const About = () => {
   // define the ref for Grid 2
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-center text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/ss.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[3rem] md:scale-[3] md:left-60 md:inset-y-18 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Syed Shoabul Islam</p>
            <p className="subtext">
              Over the last 4 years, I have developed my skills in GIS & Remote Sensing and spatial analysis 
              to deliver data-driven solutions for sustainable cities and resilient communities.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-2 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CITIES ARE CANVAS
            </p> 

            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="DESIGN" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="FUTURE" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="VISION" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="SUSTAINABLE" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="RESILIENCE" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/arc.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/qgis.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/gee.png" containerRef={grid2Container} />
          </div>
        </div>

                {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I am based in Bangladesh and available for remote work globally.
            </p>
          </div>
          <figure className="absolute left-[51%] top-[2%]">
            <Globe />
          </figure>
        </div>


        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 justify-between gap-4">
          <div className="z-1 w-[55%]">
                         <p className="headText"><b>Toolkit</b></p>
            <p className="subtext" >
              Expertise in GIS and urban planning tools with advanced analytical models such as the Shannon Diversity Index, Principal Component Analysis (PCA), Artificial Neural Networks (ANN), and Binary Logistic Regression.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
