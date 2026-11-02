import Navbar from '../components/navbar';
import banner from '../assets/banner.jpg';
import headshot from '../assets/headshot.jpeg';
import smartBoard from '../assets/smart-system-board.jpeg';
import smartDashboard from '../assets/smart-system-dashboard.jpeg';

import vexMechanisms from '../assets/vex-mechanisms.jpeg';
import vexChampionship from '../assets/vex-championship.jpeg';
import vexWorkbench from '../assets/vex-workbench.jpeg';
import vexAward from '../assets/vex-award.jpeg';
import frcWorkbench from '../assets/frc-workbench.jpeg';
import frcCompetition from '../assets/frc-competition.jpeg';

const vexPhotos = [
  { src: vexWorkbench, caption: 'Robot on the workbench', alt: 'Pink VEX robot with raised arm and exposed drivetrain on a workbench' },
  { src: vexMechanisms, caption: 'Mechanisms and wiring', alt: 'Close-up of the VEX robot frame, gears, motors, and wiring' },
  { src: vexChampionship, caption: 'Robots and regional championship banners', alt: 'Two VEX robots displayed with trophies and Vancouver Island Regional Championship banners' },
  { src: vexAward, caption: 'Robot with the Innovate Award', alt: 'VEX robot 7842Z beside an Innovate Award trophy in Port Alberni' },
];

function PhotoGallery({ title, photos, fullWidth = false }) {
  return (
    <details className={`project-details photo-disclosure${fullWidth ? ' photo-disclosure-wide' : ''}`}>
      <summary>{title} ({photos.length}) <span aria-hidden="true">+</span></summary>
      <div className="project-gallery">
        {photos.map((photo) => (
          <figure key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size photo: ${photo.caption}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </a>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <section id="home" className="hero wrap" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Computer engineering · University of Victoria</p>
            <h1 id="intro-title">Sebastian<br /><em>Graham.</em></h1>
            <p className="intro">Computer Engineering Portfolio</p>
            <p className="hero-note">I'm a computer engineering student interested in robotics, embedded systems, and the work of making software and hardware fit together.</p>
            <a className="text-link" href="#projects">Take a look at my work <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="portrait">
            <img src={headshot} alt="Sebastian Graham" width="642" height="428" fetchPriority="high" />

          </figure>
          <div className="hero-bottom"><span>Robotics / Software / Hardware</span></div>
        </section>

        <section id="projects" className="work-section" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-heading"><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Engineering Projects</h2></div>
            <article id="vex" className="featured-project">
              <header className="project-heading"><span className="project-index">01</span><span>VEX Robotics</span><span className="project-context">Competition robotics</span></header>
              <figure className="competition-photo">
                <img src={banner} alt="VEX robotics team members with their competition robots at the team booths" width="4080" height="3072" loading="lazy" />
                <figcaption>At the competition, with the robots and the team.</figcaption>
              </figure>
              <div className="project-story">
                <p className="eyebrow">Robotics / C++ / Controls</p>
                <h3>VEX Robotics</h3>
                <p className="project-lead">Autonomous navigation and robot controls</p>
                <p>As programming lead on a team of five students, I worked on autonomous navigation, sensors, and control logic. The goal was to get the robot following planned paths and moving its mechanisms reliably.</p>
                <dl className="project-facts"><div><dt>My role</dt><dd>Programming lead</dd></div><div><dt>Team</dt><dd>5 students</dd></div></dl>
                <details className="project-details">
                  <summary>Technical details <span aria-hidden="true">+</span></summary>
                  <div className="detail-copy">
                    <h4>Finding its position</h4><p>I implemented dead-wheel odometry to estimate the robot's position and orientation during autonomous operation.</p>
                    <h4>Following a path</h4><p>I developed a Pure Pursuit path-following system so the robot could follow planned trajectories.</p>
                    <h4>Controlling the mechanisms</h4><p>I integrated sensors with PID controllers for the arm subsystems, then tested and tuned the systems to improve consistency.</p>
                  </div>
                </details>
              </div>
              <PhotoGallery title="VEX photos" photos={vexPhotos} fullWidth />
            </article>
            <div className="additional-projects">
              <article id="frc" className="featured-project">
                <header className="project-heading"><span className="project-index">02</span><span>FIRST Robotics Competition</span><span className="project-context">2024 season</span></header>
                <figure className="competition-photo project-main-photo">
                  <a href={frcCompetition} target="_blank" rel="noopener noreferrer" aria-label="View full-size FRC competition photo">
                    <img src={frcCompetition} alt="FRC robot 9641 on the CRESCENDO competition field" loading="lazy" />
                  </a>
                  <figcaption>Team 9641 on the CRESCENDO field</figcaption>
                </figure>
                <div className="project-story">
                  <p className="eyebrow">Robotics / Python / AprilTags / Limelight</p>
                  <h3>FRC Team 9641</h3><p className="project-lead">CRESCENDO · 2024 season</p>
                  <p>I spent the 2024 season as lead and sole programmer for FIRST Robotics Competition team 9641. With guidance from a mentor, I implemented the robot's software in Python, including pose estimation, automated aiming, and subsystem automation.</p>
                  <dl className="project-facts"><div><dt>My role</dt><dd>Lead programmer</dd></div><div><dt>Season</dt><dd>2024</dd></div></dl>
                  <details className="project-details">
                    <summary>Season details <span aria-hidden="true">+</span></summary>
                    <div className="detail-copy">
                      <h4>Vision and automation</h4>
                      <p>I used AprilTags and Limelight to estimate the robot's position and orientation on the field. The robot used this estimate to automatically turn toward the goal before shooting game elements.</p>
                      <h4>My contribution</h4>
                      <p>As the team's only programmer, I implemented all software features with support from a mentor, including the vision integration and subsystem control logic.</p>
                      <h4>Team recognition</h4>
                      <p>Our team won the Rookie All Star Award at the 2024 Canadian Pacific Regional.</p>
                    </div>
                  </details>
                </div>
                <PhotoGallery title="FRC photos" photos={[
                  { src: frcWorkbench, caption: 'Robot mechanism on the workbench', alt: 'FRC robot mechanism and wiring being assembled on a workbench' },
                ]} fullWidth />
              </article>
              <article id="smart-system" className="featured-project">
                <header className="project-heading"><span className="project-index">03</span><span>Classroom Smart System</span><span className="project-context">Class project</span></header>
                <figure className="competition-photo project-main-photo">
                  <a href={smartBoard} target="_blank" rel="noopener noreferrer" aria-label="View full-size smart system breadboard photo">
                    <img src={smartBoard} alt="Smart system breadboard with Raspberry Pi Pico W, sensors, wiring, and indicator LEDs" loading="lazy" />
                  </a>
                  <figcaption>Breadboard prototype and sensor wiring</figcaption>
                </figure>
                <div className="project-story">
                  <p className="eyebrow">C++ / Raspberry Pi Pico W / Sensors</p>
                  <h3>Classroom Smart System</h3><p className="project-lead">Automated lighting, HVAC, and web monitoring</p>
                  <p>A team class project modelling automated classroom lighting and HVAC with a Raspberry Pi Pico W, temperature, humidity, and motion sensors, and a breadboard prototype. I wrote all the software and control logic in C++ and integrated the web interface.</p>
                  <details className="project-details">
                    <summary>Project details <span aria-hidden="true">+</span></summary>
                    <div className="detail-copy">
                      <h4>Control logic</h4>
                      <p>Heating adjusted automatically based on room temperature and humidity. When the room was unoccupied, the lights switched off and HVAC was reduced. After business hours, both switched off.</p>
                      <h4>Prototype and web interface</h4>
                      <p>LEDs represented lighting and HVAC outputs in the demonstration. The web interface displayed sensor readings and specific heating settings so we could monitor the system's response.</p>
                      <h4>Testing</h4>
                      <p>We tested every defined control-logic case and took the board into different environments to check temperature measurements and the system's response.</p>
                    </div>
                  </details>
                </div>
                <PhotoGallery title="Smart system photos" photos={[
                  { src: smartDashboard, caption: 'Web interface for sensor readings and system status', alt: 'Web dashboard displaying occupancy, lighting, temperature, and heating controls' },
                ]} fullWidth />
              </article>
              <article id="drone" className="featured-project project-without-photo">
                <header className="project-heading"><span className="project-index">04</span><span>Autonomous Drone Vision</span><span className="project-context">Ongoing</span></header>
                <div className="project-story">
                  <p className="eyebrow">Python / OpenCV / Raspberry Pi 4B / Pixhawk V6X</p>
                  <h3>Autonomous Drone Vision</h3><p className="project-lead">Person tracking and PID control · Ongoing</p>
                  <p>An ongoing project with a mechanical engineer friend. I'm responsible for the drone's wiring and software, developing a Python and OpenCV vision system that currently tracks people.</p>
                  <details className="project-details">
                    <summary>Project details <span aria-hidden="true">+</span></summary>
                    <div className="detail-copy">
                      <h4>Vision and hardware</h4>
                      <p>The system runs on a Raspberry Pi 4B mounted on the drone, using a Pi Camera 2 alongside a Pixhawk V6X flight controller. The vision software has been tested live on the onboard hardware.</p>
                      <h4>Tracking and control</h4>
                      <p>The software uses PID control for X, Y, and Z movement and yaw, with the goal of following a person and keeping them centered in the camera view.</p>
                      <h4>Current status</h4>
                      <p>The drone's tracking and following behavior has not yet been tested in flight. Flight testing is the next step.</p>
                    </div>
                  </details>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="about-section wrap" aria-labelledby="about-title">
          <p className="eyebrow">02 / A little about me</p>
          <div className="about-content"><h2 id="about-title">About Me</h2>
            <div className="about-copy"><p>I competed in VEX and FRC robotics throughout high school. I liked working on something where the code had to do more than run on a screen.</p><p>Now I'm studying computer engineering at the University of Victoria and continuing to build my skills in embedded systems and software development.</p>
              <dl className="skills"><div><dt>Software</dt><dd>C / C++ · Java · Python</dd></div><div><dt>Hardware</dt><dd>PCB design · CAD · Arduino / Raspberry Pi</dd></div></dl>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="wrap"><p className="eyebrow">03 / Get in touch</p><h2 id="contact-title">Contact</h2><p>Have a project in mind, or want to talk robotics? Send me a note.</p>
            <a className="email-link" href="mailto:sebastiangraham2007@gmail.com">sebastiangraham2007@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="contact-bottom"><div className="social-links"><a href="https://github.com/Seveastian" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/sebastian-graham-uvic/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div><a href="#home">Back to top ↑</a></div>
          </div>
        </section>
      </main>
      <footer className="wrap site-footer"><span>© {new Date().getFullYear()} Sebastian Graham</span><span>Engineering Portfolio</span></footer>
    </>
  );
}
