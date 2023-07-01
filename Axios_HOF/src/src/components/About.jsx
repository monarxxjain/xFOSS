import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import "./gradient.css"
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border p-[1px] rounded-[20px] shadow-card IntroCardBg'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} style={{fontSize: "24px", opacity: 0.7}}>Introduction</p>
        <h2 className={styles.sectionHeadText} style={{textAlign: "left"}}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to the Indian Institute of Information Technology, Lucknow, an institute of national importance. IIITs have a tradition of producing best-in-class human resources in multi-dimensional aspects of Engineering and Management. IIIT Lucknow is an emerging institute that takes this initiative further in leaps and bounds by providing world-class education in Engineering, Technology, and Business. We have a team of best educators and industrialists who teach contemporary topics and bring real-life scenarios to the classroom. With this kind of training, our students enter the real world with full awareness and become adept in problem-solving.

Graduating from a college is like a venture where students invest their efforts and dreams in anticipation of a life-transforming future. It is, therefore, essential that they choose the right career path. While you consider various courses that we offer, our support team will help you make an optimal choice to achieve your goals.  Apart from the on-campus BTech., MTech. and PhD programmes, we are launching six off-campus programmes in IT and allied areas in August 2020. Besides dedicated teaching, we also promote quality research and life-long learning.



      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
