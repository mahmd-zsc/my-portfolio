"server side"
import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import project from "@/images/Untitled.png";
import { FaGithub } from "react-icons/fa";
const fetchProjects = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/projects");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
};
async function Projects({ setHoverProject, setHiddenMouse, setProjectSide }) {

  let projects = await fetchProjects();

  return (
    <div className="bg-black relative py-10">
      <div className="container">
        <div className="mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30">
          <h3>My Cool Projects</h3>
          <a
            href="https://github.com/mahmd-zsc"
            target="_blank"
            className="cursor-none"
            rel="noopener noreferrer"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className="bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
            >
              <span>Check more on GitHub</span>
              <FaGithub />
            </div>
          </a>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 overflow-hidden relative z-30 w-full">
          {/* {  projects.map((_, index) => (
            <div
              onMouseEnter={() => setHoverProject(true)}
              onMouseLeave={() => setHoverProject(false)}
              onClick={() => setProjectSide(true)}
              key={index}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                className="duration-300 filter hover:scale-105"
                src={project}
                alt="project"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-black opacity-10 hover:opacity-0 duration-300" />
            </div>
          ))} */}
        </div>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 touch-none"
        src={pattern}
        alt="pattern"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
}

export default Projects;
