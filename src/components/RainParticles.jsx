import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const RainParticles = ({ count = 500 }) => {
  const mesh = useRef();
  const { viewport, camera } = useThree();

  // viewport gives us width/height in world units at the camera depth
  const { width, height } = viewport;

  // Generate random initial positions
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push([
        (Math.random() - 0.5) * width * 3,  // X spread (full screen width *2 for overflow)
        Math.random() * height * 2,         // Y height
        (Math.random() - 0.5) * 10,         // Z spread (depth)
      ]);
    }
    return pos;
  }, [count, width, height]);

  // Animate falling
  useFrame(() => {
    mesh.current.children.forEach((drop) => {
      drop.position.y -= 0.1; // falling speed
      if (drop.position.y < -height) {
        drop.position.y = height; // reset to top
      }
    });
  });

  return (
    <group ref={mesh}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.001, 0.001, 0.1]} />
          <meshBasicMaterial color="skyblue" />
        </mesh>
      ))}
    </group>
  );
};

export default RainParticles;
