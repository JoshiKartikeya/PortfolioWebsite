"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

// Simple fallback component
const Fallback = () => <div className="w-full h-full bg-transparent" />;

// Separate the 3D elements from the Canvas wrapper
function Scene() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
}

export default function ThreeDSphere() {
  return (
    <Suspense fallback={<Fallback />}>
      <Canvas>
        <Scene />
      </Canvas>
    </Suspense>
  );
}
