import "./portfolio.scss";
import {
  motion,
  useIsPresent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "RetroGroove Heaven",
    img: "https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Step into a world where time rewinds and melodies reign supreme. At RetroGroove Haven, we're passionate about celebrating the timeless magic of retro music that transcends eras.",
  },
  {
    id: 2,
    title: "AL-Eaze",
    img: "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Step into a world where time rewinds and melodies reign supreme. At RetroGroove Haven, we're passionate about celebrating the timeless magic of retro music that transcends eras.",
  },
  {
    id: 3,
    title: "Flutify",
    img: "https://images.pexels.com/photos/258266/pexels-photo-258266.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Step into a world where time rewinds and melodies reign supreme. At RetroGroove Haven, we're passionate about celebrating the timeless magic of retro music that transcends eras.",
  },
  {
    id: 4,
    title: "Flutify",
    img: "https://images.pexels.com/photos/258266/pexels-photo-258266.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Step into a world where time rewinds and melodies reign supreme. At RetroGroove Haven, we're passionate about celebrating the timeless magic of retro music that transcends eras.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <button>See demo</button>
              <button>Go to github</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
