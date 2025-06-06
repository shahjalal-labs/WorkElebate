import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.button
        onClick={() => navigate("/")}
        className="btn btn-ghost text-xl"
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff", "#ce9733"],
          transition: { duration: 7, repeat: Infinity },
        }}
      >
        WorkElebate
      </motion.button>
    </div>
  );
};

export default Brand;
