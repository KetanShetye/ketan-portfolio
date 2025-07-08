import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE/B-TECH in Computer Science"
            subTitle="University of Mumbai (2019 - 2023)"
            result="9.12/10"
            des="Completed a comprehensive 4-year program focused on software development, data structures, algorithms, and computer systems — laying a strong foundation for real-world problem solving and tech innovation."
          />
          <ResumeCard
            title="Computer Science"
            subTitle="MAHARASHTRA STATE BOARD (2017 - 2019)"
            result="82%"
            des="Completed Higher Secondary Education with a focus on Computer Science, Mathematics, and Physics — building core analytical and logical thinking skills essential for a career in technology."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Education;
