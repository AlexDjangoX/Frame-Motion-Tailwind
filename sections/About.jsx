'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Universe" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Within</span> is a space
        that morphs with all pervading expansiveness.You have never been
        separate. The illusion of separation is the{' '}
        <span className="font-extrabold text-white">
          sadness of the universe.{' '}
        </span>{' '}
        Delve within{' '}
        <span className="font-extrabold text-white">Vajra Space</span>, be the
        creative genius that you are. Throughout beginningless time.
        <span className="font-extrabold text-white"> Imagination</span> free of
        limits <span className="font-extrabold text-white">explore</span> the
        wonder of the universe by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
