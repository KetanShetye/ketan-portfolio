import { FaLaptopCode, FaMobileAlt, FaDesktop, FaTasks } from "react-icons/fa";
import {  SiGithub } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
  <Card
    title="Web Development"
    des="Crafting fast, responsive, and beautiful websites that don’t just work — they wow. From landing pages to full-stack apps, I turn ideas into sleek digital experiences."
    icon={<FaLaptopCode />} // 💻 Best for web dev
  />
  <Card
    title="Mobile App Development"
    des="Building smooth, high-performance mobile apps that bring ideas to life — from your pocket. One codebase, endless possibilities with React Native."
    icon={<FaMobileAlt />} // 📱 Better fit than AiFillAppstore
  />
  <Card
    title="Desktop App Development"
    des="Designing powerful desktop applications that work offline, run fast, and feel native. Ideal for businesses, tools, and custom workflows — all built with Electron."
    icon={<FaDesktop />} // 🖥️ Clear desktop icon
  />
  <Card
    title="Project Management"
    des="Efficiently managing projects from concept to deployment — using GitHub for version control, collaboration, and tracking progress every step of the way."
    icon={<SiGithub />} // 🐱 GitHub-focused management
  />
  <Card
    title="Project Planning"
    des="Laying the groundwork with clear roadmaps, user flows, and documentation. From Jira boards to PPTs, Sheets, and Docs — I plan every detail before the first commit."
    icon={<FaTasks />} // 📋 For planning, tasks, docs
  />
</div>
      </FadeIn>
    </section>
  );
};

export default Feature;
