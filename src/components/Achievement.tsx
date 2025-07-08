import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Published Reasearch Paper - Fitness And Healthcare App"
            subTitle="International Journal Of Innovations in Engineering And Science"
            result="ISSN:2456-3463"
            des="Published a research paper on a cross-platform mobile application focused on fitness tracking and healthcare monitoring. The paper highlights app architecture, features, and the impact of tech-enabled wellness solutions.(https://drive.google.com/file/d/1Fqp25mdXnLXWGsTETzTaABbmSy2keAH_/view?usp=sharing)"
          />
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
