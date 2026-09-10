import React from 'react';
import { motion } from 'motion/react';

const SectionDivider = () => {
  return (
    <div className="w-full flex justify-center py-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"
      />
    </div>
  );
};

export default SectionDivider;
