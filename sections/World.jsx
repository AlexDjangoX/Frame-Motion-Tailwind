'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewPort={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People of the Universe" textStyles="text-center" />
      <TitleText
        title={<>Track friends around Planet Earth</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[450px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute top-[10%] right-[35%] w-[75px] h-[45px]  rounded-full bg-[#e50f36]">
          <img
            src="/people-01.png"
            alt="people"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
        <div className="absolute top-[45%] right-[65%] w-[75px] h-[45px]  rounded-full bg-[#e50f36]">
          <img
            src="/people-02.png"
            alt="people"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
        <div className="absolute bottom-[25%] right-[5%] w-[75px] h-[45px]  rounded-full bg-[#e50f36]">
          <img
            src="/people-03.png"
            alt="people"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
        <div className="absolute top-[30%] left-[30%] w-[75px] h-[45px]  rounded-full bg-[#e50f36]">
          <img
            src="/people-04.png"
            alt="people"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
