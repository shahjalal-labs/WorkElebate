import { motion } from "motion/react";

import { useMediaQuery } from "react-responsive";
const BannerImg = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div className="*:w-[270px] mt-[-150px] flex-1">
      <motion.img
        src={
          "https://images.deepai.org/art-image/926686fe6d2f42aeb70aa2ca99dd87c7/a-group-of-young-diverse-male-professionals-smiling-a.jpg"
        }
        animate={{ y: [250, 150, 250] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl "
      />
      <motion.img
        src={
          "https://images.deepai.org/art-image/802e3bd5f1cf427f94320c26ef1ce1ca/a-confident-male-hiring-manager-or-business-owner-sha.jpg"
        }
        animate={{ x: isMobile ? [45, 23, 45] : [250, 150, 250] }}
        transition={{ duration: !isMobile ? 7 : 3, repeat: Infinity }}
        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl "
      />
    </div>
  );
};

export default BannerImg;
