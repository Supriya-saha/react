import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Supriya
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/supriya-saha-85bb46293/" target="blank">
            <img src="/linked.png" alt="" />
          </a>
          <a href="https://github.com/Supriya-Saha" target="blank">
            <img src="/Git.png" alt="" />
          </a>
          <a href="https://www.codechef.com/users/supriyasahaa03" target="blank">
            <img src="/code.jpg" alt="" />
          </a>
          <a href="https://leetcode.com/nitrsupriya/" target="blank">
            <img src="/leet.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
