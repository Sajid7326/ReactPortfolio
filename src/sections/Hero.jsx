import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../sections/ParallaxBackground";
import RainParticles from "../components/RainParticles";
import { Float, Loader } from "@react-three/drei";
import { Suspense } from "react";
import { easing } from "maath";


const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space relative">
      {/* Content */}
      <HeroText />

      {/* 3D Canvas */}
      <figure className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <Float>
              <ambientLight intensity={0.5} />
              {/* <RainParticles count={800} areaX={100} areaY={15} areaZ={20} /> */}
            </Float>
          </Suspense>
          <Rig />
        </Canvas>
      </figure>

      {/* Loader UI */}
      <Loader />
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
