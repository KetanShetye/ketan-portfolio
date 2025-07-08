import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { logo,projectOne,projectThree } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
   <section id="projects" className="w-full py-20 border-b-[1px] border-b-gray-700">
  <FadeIn>
    <div className="flex justify-center items-center text-center">
      <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
    </div>

    {/* Personal Projects Section */}
    <div className="mt-10 mb-6">
      <h2 className="text-2xl font-bold text-designColor mb-4">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio Website"
          des="A personal portfolio website showcasing my skills, experience, and projects. Built using React.js with modern UI components. The project is containerized using Docker and deployed on Render using a CI/CD pipeline, ensuring smooth and automated updates on every code push."
          src={logo}
          href="https://github.com/KetanShetye/ketan-portfolio"
        />
      </div>
    </div>

    {/* Professional Projects Section */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-designColor mb-4">Corporate Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Fitness Training App"
          des="Worked on a fitness training mobile application at Mypcot Infotech Pvt. Ltd., where I built the complete authentication stack using React Native. The app was designed to be fully responsive across both mobile and tablet devices, focusing on clean UI and seamless UX for user onboarding and login workflows."
          src={projectOne}
        />
        <ProjectsCard
          title="Permiteyes App"
          des="At Mayking Technology Pvt. Ltd., I played a key role in transitioning the legacy Permiteyes application from PHP to the MERN stack. I led the frontend development team and was responsible for architecting and implementing core UI components. Additionally, I conducted internal training sessions to onboard and mentor other developers in React and modern frontend practices."
          src={projectThree}
        />
      </div>
    </div>
  </FadeIn>
</section>

  );
};

export default Projects;
