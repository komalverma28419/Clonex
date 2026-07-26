import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState } from "react";

const MovingBorder = ({ children, className = "" }) => {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMove}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      {/* Border */}
      <motion.div className=" absolute inset-0 hidden dark:block rounded-xl p-[1.5px] pointer-events-none"
        style={{background: useMotionTemplate `radial-gradient(180px circle at ${mouseX}px ${mouseY}px,
            rgba(242,5,92,1), rgba(19,63,227,.9), transparent 70%)`,opacity: visible ? 1 : 0,}}
      />
      <div className="relative rounded-xl bg-white dark:bg-dark-card">
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;