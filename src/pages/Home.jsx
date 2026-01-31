import ParallaxBackground from "./ParallaxBackground";
import Hero from "./Hero";

const Home = () => {
  return (
    <ParallaxBackground navbar={null} bg3D={null}>
      <Hero />
    </ParallaxBackground>
  );
};

export default Home;
