import { motion } from "motion/react";

const BannerCard = () => {
  return (
    <div className="flex-1 max-lg:mt-10">
      {/* <motion.h1 
        animate={{
            rotate: 180,
            x: 200,
            y: -200,
            transition: {duration: 4}
        }}
      className="text-5xl font-bold">Latest Jobs For you!</motion.h1> */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 4 } }}
        className="sm:text-4xl text-2xl font-bold font-kaushan"
      >
        Live
        <motion.span
          animate={{
            color: ["#ff5733", "#33ff33", "#8a33ff"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          {" "}
          Anywhere,
        </motion.span>{" "}
        Work Everywhere
      </motion.h1>
      <p className="py-6">
        A platform for job seekers and givers. Discover jobs, hire talent —
        globally, effortlessly. Connecting job seekers and employers without
        borders. Find talent or your next opportunity — anytime, anywhere.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
};

export default BannerCard;
