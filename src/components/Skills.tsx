import { motion } from "framer-motion";
import { FaReact, FaDocker, FaGithub, FaGitlab, FaMobileAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiAxios, SiDrupal, SiMaterialdesign, SiPostman, SiJira, SiJavascript, SiTypescript, SiNodedotjs, } from "react-icons/si";
import { BsGearWideConnected } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { ReactNode } from "react";

type Skill = {
  icon: ReactNode;
  name: string;
};

type SkillCategoryProps = {
  title: string;
  skills: Skill[];
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">SKILLS</h2>
        </div>
        <div className="space-y-10">
          {/* Languages */}
          <SkillCategory title="Languages" skills={[
            { icon: <SiJavascript className="text-yellow-400 text-4xl" />, name: "JavaScript" },
            { icon: <SiTypescript className="text-blue-600 text-4xl" />, name: "TypeScript" },
          ]} />

          {/* Frontend Libraries & Frameworks */}
          <SkillCategory title="Frontend" skills={[
            { icon: <FaReact className="text-blue-500 text-4xl" />, name: "React" },
            { icon: <FaMobileAlt className="text-purple-600 text-4xl" />, name: "React Native" },
            { icon: <SiMaterialdesign className="text-indigo-500 text-4xl" />, name: "Material UI" },
            { icon: <SiAxios className="text-cyan-600 text-4xl" />, name: "Axios" },
          ]} />

          {/* Backend */}
          <SkillCategory title="Backend" skills={[
            { icon: <SiNodedotjs className="text-green-600 text-4xl" />, name: "Node.js" },
            { icon: <SiExpress className="text-gray-700 text-4xl" />, name: "Express" },
          ]} />

          {/* DevOps & Version Control */}
          <SkillCategory title="DevOps & Version Control" skills={[
            { icon: <FaDocker className="text-blue-400 text-4xl" />, name: "Docker" },
            { icon: <FaGithub className="text-black text-4xl" />, name: "GitHub" },
            { icon: <FaGitlab className="text-orange-600 text-4xl" />, name: "GitLab" },
            { icon: <BsGearWideConnected className="text-gray-800 text-4xl" />, name: "CI/CD" },
          ]} />

          {/* Project Management & Tools */}
          <SkillCategory title="Project Planning & API Tools" skills={[
            { icon: <SiJira className="text-[#0052CC] text-4xl" />, name: "Jira" },
            { icon: <SiPostman className="text-orange-500 text-4xl" />, name: "Postman" },
          ]} />

          <SkillCategory title="Expertise" skills={[
            { icon: <BiGitBranch className="text-pink-600 text-4xl" />, name: "State Management" },
            { icon: <TbApi className="text-blue-700 text-4xl" />, name: "API Integration" },
            { icon: <MdDevices className="text-green-500 text-4xl" />, name: "Responsive Layout" },
          ]} />

          <SkillCategory title="Database" skills={[
            { icon: <SiMongodb className="text-green-600 text-4xl" />, name: "MongoDB" },
          ]} />

           <SkillCategory title="CMS" skills={[
          { icon: <SiDrupal className="text-sky-700 text-4xl" />, name: "Drupal" },
        ]} />
        </div>

       



      </div>
    </motion.div>
  );
};

export default Skills;



const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center w-20">
          {skill.icon}
          <p className="text-sm uppercase font-medium text-center mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);



