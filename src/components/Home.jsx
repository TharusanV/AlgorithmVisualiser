import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/homeStyles.css';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="home-title">Algorithm Visualiser</h1>

          <div className="home-buttons">
            <Link to="/dataStructures">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="home-btn"
              >
                Data Structures
              </motion.button>
            </Link>
            
            <Link to="/algorithms">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="home-btn"
              >
                Algorithms
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;