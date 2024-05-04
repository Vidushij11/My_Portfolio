import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallex = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div ref={ref} className="parallax">
      <motion.h1 style={{ y: yText }}>What I Did?</motion.h1>
      <motion.p style={{ y: yText }}>Ps: My Projects</motion.p>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yText }} className="stars"></motion.div>
    </div>
  );
};

export default Parallex;
