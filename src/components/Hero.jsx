import { HERO } from '../constants';
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className='flex flex-col md:flex-row main-h-screen items-center'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2'
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'
        >
          {HERO.name}
        </motion.h2>
        <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>{HERO.greet}</p>
        <p className='mb-8 p-2 text-xl'>{HERO.description}</p>

        {/* Download CV Button */}
        <a
          href='/pdf/Frontend-react.pdf ' // Link to your CV file
          download
          className='inline-block px-6 py-3 mt-4 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300'
        >
          Download CV 
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2 lg:p-8'
      >
        <div className='flex justify-center'>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={profilePic}
            alt='UserPic'
            className='rounded-3xl height:auto w-auto'
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
