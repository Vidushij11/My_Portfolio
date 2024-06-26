// import Sidebar from "../sidebar/Sidebar";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Sidebar /> */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          VIDUSHI JAISWAL
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/linkdin.png" />
          </a>
          <a href="#">
            <img src="/github.png" />
          </a>
          <a href="#">
            <img src="/leetcode.png" />
          </a>
          <a href="#">
            <img src="/resume.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
