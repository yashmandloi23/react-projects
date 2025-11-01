import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <div className="[perspective::100px] [transform-style::preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center">
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y:-10,
        }}
        className="group-hover:text-cyan-500 transition-colors relative text-neutral-200 px-12 py-4 rounded-lg bg-black shadow-[inset_0px_1px_2px_rgba(255,255,255,0.1),inset_0px_-1px_1px_rgba(255,255,255,0.1)]"
      >
        Subscribe
        <span className="absolute inset-x-0 bottom-px h-[4px] w-full mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default Button;
