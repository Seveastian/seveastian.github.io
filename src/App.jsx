import banner from "./assets/banner.jpg";
import headshot from "./assets/headshot.jpeg";

export default function EngineeringPortfolio() {
  const projects = [
    {
      title: "Autonomous Robot",
      description:
        "A robotics project using computer vision and sensor fusion for autonomous navigation.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
      tech: ["ROS", "Python", "OpenCV"],
    },
    {
      title: "IoT Smart Home System",
      description:
        "An IoT dashboard for monitoring and automating home devices in real time.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      tech: ["React", "Node.js", "MQTT"],
    },
    {
      title: "Embedded Systems Design",
      description:
        "Microcontroller-based engineering project focused on low-power system optimization.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      tech: ["C++", "STM32", "PCB Design"],
    },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Sebastian Graham
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950"
      >
        <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm">
              Sebastian Graham
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Engineering Portfolio
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Compilation of my engineering projects and experiences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={banner}
              alt="Booth photo at robotics competition"
              className="relative rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-28 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={headshot}
              alt="headshot photo"
              className="rounded-3xl border border-white/10"
            />
          </div>

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h3 className="text-4xl font-bold mb-6">
              Curious and passionate engineer.
            </h3>

            <p className="text-zinc-300 leading-relaxed mb-6">
              I'm Sebastian, a computer engineering student at the University of Victoria with a passion for robotics. I competed in VEX and FRC robotics throughout high school, and I want to continue to build and design usign my skills in embedded systems and software development. I have experience with C++/C, Java, Python, PCB design, CAD, and microcontroller programming. I'm excited to share my projects and engineering journey through this portfolio.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-zinc-800 p-4 rounded-2xl border border-white/10">
                <h4 className="font-semibold mb-2">Software</h4>
                <p className="text-zinc-400">C++/C, Java, Python</p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-2xl border border-white/10">
                <h4 className="font-semibold mb-2">Hardware</h4>
                <p className="text-zinc-400">PCB Design, CAD, Arduino/Pi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Featured Work
            </p>

            <h3 className="text-5xl font-bold mb-6">Engineering Projects</h3>

            <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Projects that I have worked on throughout my highschool and university career.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full min-h-[400px] object-cover"
                    />
                  </div>

                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
                      Project {index + 1}
                    </p>

                    <h4 className="text-4xl font-black mb-6">
                      {project.title}
                    </h4>

                    <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-zinc-800/80 p-5 rounded-2xl border border-white/5">
                        <h5 className="font-bold text-lg mb-3 text-white">What</h5>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                          Describe what the project does and what engineering problem it solves.
                        </p>
                      </div>

                      <div className="bg-zinc-800/80 p-5 rounded-2xl border border-white/5">
                        <h5 className="font-bold text-lg mb-3 text-white">Why</h5>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                          Explain the motivation behind the project and why
                        </p>
                      </div>

                      <div className="bg-zinc-800/80 p-5 rounded-2xl border border-white/5">
                        <h5 className="font-bold text-lg mb-3 text-white">How</h5>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                          Discuss workflow, technical stack, testing process, and engineering decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 border-t border-white/10 bg-zinc-950/40">
                  <div className="mb-8">
                    <h5 className="text-2xl font-bold mb-2">Development Process</h5>
                    <p className="text-zinc-400">
                      Add progress photos, CAD renders, schematics, diagrams, testing, or prototype iterations here.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
                      <img
                        src={project.image}
                        alt="Process step"
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-5">
                        <h6 className="font-semibold mb-2">Concept Design</h6>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          Add notes about sketches, early prototypes, or system planning.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
                      <img
                        src={project.image}
                        alt="Process step"
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-5">
                        <h6 className="font-semibold mb-2">Build & Testing</h6>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          Explain fabrication, electronics integration, or testing.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
                      <img
                        src={project.image}
                        alt="Process step"
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-5">
                        <h6 className="font-semibold mb-2">Final Outcome</h6>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          Showcase final performance, metrics, or completed hardware.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-28 px-6 bg-gradient-to-br from-zinc-900 to-zinc-950"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:sebastiangraham2007@gmail.com"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-transform"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Seveastian"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sebastian-graham-uvic/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
