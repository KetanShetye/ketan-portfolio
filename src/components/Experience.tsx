import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer (MERN Stack)"
            subTitle="Mayking Technology Pvt. Ltd. (formerly Megavision) | Dec 2023 – Present"
            result="REMOTE"
            des="Developing and maintaining full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Responsible for building responsive user interfaces, designing RESTful APIs, integrating third-party services, managing database operations, and deploying applications for production use."
          />
          <ResumeCard
            title="Jr. React Native Developer"
            subTitle="Mypcot Infotech Pvt. Ltd. | Oct 2023 – Nov 2023"
            result="MUMBAI"
            des="Worked as a Jr. React Native Developer on a 2-month contract-based role. Contributed to building and enhancing cross-platform mobile applications, developed responsive UI components, integrated REST APIs, and assisted in optimizing app performance for both Android and iOS platforms."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
