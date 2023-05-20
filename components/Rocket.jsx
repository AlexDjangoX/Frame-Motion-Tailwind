/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

import { MoveRocketY } from '../utils/motion';

import CanvasLoader from './Loader';

const Rocket = () => (
  <section>
    <div className="relative h-[440px] w-auto">
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#1b0036"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          variants={MoveRocketY}
          className="w-200"
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <Image
            src="/spaceman.png"
            alt="guy on rocket"
            width={160}
            height={160}
            className="w-full h-auto bg-transparent rounded-full"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Rocket;
