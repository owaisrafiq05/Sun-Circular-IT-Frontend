import { motion } from "framer-motion";
import logo from "../images/logo.jpg"

const Loader = () => {
  const variants = {
    initial: { scaleY: 0.5, opacity: 0 },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center gap-8">
      <img
        src={logo}
        alt="Coders Cup Logo"
        className="h-52 w-auto"
      />

      <motion.div
        transition={{ staggerChildren: 0.25 }}
        initial="initial"
        animate="animate"
        className="flex gap-2"
      >
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
      </motion.div>
    </div>
  );
};

export default Loader;