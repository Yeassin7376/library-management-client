import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: [-100] }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, repeat:Infinity, ease: 'easeOut' }}
      className="p-6 mt-10 bg-cyan-200 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold">Welcome to the Library</h2>
      <p className="text-gray-600 mt-2">Explore thousands of books and manage your collection.</p>
    </motion.div>
  );
};

export default AnimatedSection;
