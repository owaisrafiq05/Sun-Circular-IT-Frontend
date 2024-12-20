import { motion } from "framer-motion";
import logo from "../images/logo.png";
import Image from "next/image";

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
      <div className="w-96">
        <Image
          src={logo}
          alt="Heart-shaped forest"
          layout="responsive"
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>
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
