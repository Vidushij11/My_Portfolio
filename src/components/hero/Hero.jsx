import { animate, motion } from "framer-motion";
import "./hero.scss";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>Vidushi Jaiswal</motion.h2>
          <motion.h1 variants={textVariant}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div className="buttonContainer" variants={textVariant}>
            <motion.button variants={textVariant}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariant}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariant}
            animate="scrollButton"
            src="/scroll.png"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Coder Developer Designer
      </motion.div>
      <div className="imgContainer">
        <img src="/hero1.png" />
      </div>
    </div>
  );
};

export default Hero;
