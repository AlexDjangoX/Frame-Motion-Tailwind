/* eslint-disable react/no-unknown-property */

'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei';

import CanvasLoader from './Loader';

const CubeObject = () => (
  <mesh>
    <boxGeometry />
    <meshStandardMaterial>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['#00347f']} />
        <CubeText />
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
);

const CubeText = () => {
  const textRef = useRef();

  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <Text ref={textRef} fontSize={2} color="#555" className="light">
      Journey Joy
    </Text>
  );
};

const Cube = () => (
  <div className="flex justify-center h-[640px] w-auto">
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 1]} />
        <CubeObject />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  </div>
);

export default Cube;
