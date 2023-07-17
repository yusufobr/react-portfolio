import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./cursor.css";
import { motion } from "framer-motion";

function Cursor() {
  const [cord, setCord] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setCord({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div className="w-full h-full fixed -z-10">
      <motion.div
        animate={{ x: cord.x, y: cord.y }}
        className="circle"
      ></motion.div>
    </div>
  );
}

export default Cursor;
