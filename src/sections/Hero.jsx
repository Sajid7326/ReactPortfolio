import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Float, Loader } from "@react-three/drei";
import { Suspense } from "react";
import { easing } from "maath";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden c-space">
      {/* 3D Background Canvas */}
      <figure className="absolute inset-0 w-full h-full -z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="w-full h-full"
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

      {/* Foreground Content */}
      <div className="relative z-10">
        <HeroText />
      </div>

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
