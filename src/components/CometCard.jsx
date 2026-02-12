import { CometCard } from "./ui/comet-card";

const CometCardDemo = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio with React, animations, and modern UI.",
      tech: ["React", "CSS", "Animations"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      title: "DSA Visualizer",
      description: "Interactive platform to visualize data structures & algorithms.",
      tech: ["JavaScript", "Algorithms", "UI"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Competitive Tracker",
      description: "Tracks Codeforces, LeetCode & Coding Ninjas progress.",
      tech: ["React", "APIs", "Charts"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="projects-grid flex flex-wrap justify-center gap-6">
      {projects.map((project, index) => (
        <CometCard key={index}>
          <div
            className="
              my-6 flex w-72 md:w-80 cursor-pointer flex-col items-stretch
              rounded-3xl bg-gradient-to-br from-[#1F2121] to-[#27292a]
              p-4 md:p-5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl
              hover:shadow-[#7df9ff]/60 relative overflow-hidden
            "
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Project Image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl z-10">
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-3xl contrast-125 transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-4 md:p-5 bg-black/25 rounded-xl backdrop-blur-md flex flex-col gap-3 mt-3">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-snug">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#1F2121]/70 text-[#7df9ff] text-xs font-semibold rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CometCard>
      ))}
    </div>
  );
};

export default CometCardDemo;
