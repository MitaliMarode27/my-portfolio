import "./Projects.css";
import solarMatrix from "./Images/Screenshot 2025-10-31 145236.png";
import softlineInterior from "./Images/Screenshot 2025-11-28 111957.png";
import billing from "./Images/billingDashboard.png";
import luxe from "./Images/luxeHeavenImg.png";
import portfolio from "./Images/portfolioTemplate3Img.png";

const projects = [
  {
    title: "Softlines Interior Website",
    desc: "A Frontend interior design platform where users can explore modern interior solutions, view design collections and interact with a responsive UI.",
    tech: "ReactJS • CSS • Bootstrap • Node • MongoDB",
    image: softlineInterior,
    github: "https://github.com/MitaliMarode27/SoftlinesInterior",
    live: "https://softlines-interior.vercel.app/"
  },
  {
    title: "Solar Matrix",
    desc: "A responsive solar energy website that showcases solar solutions, services and sustainable energy information with a modern UI.",
    tech: "ReactJS • Node • MongoDB •  Bootstrap ",
    image: solarMatrix,
    github: "https://github.com/MitaliMarode27/SolarMatrix",
    live: "https://solar-matrix.vercel.app/"
  },
  {
    title: "Portfolio Website",
    desc: "Interactive portfolio website to showcase projects and skills.",
    tech: "React • CSS • Vite • Bootstrap",
    image: portfolio,
    github: "https://github.com/MitaliMarode27/PortfolioTemplate",
    live: "https://portfolio-template-gamma-peach.vercel.app/"
  },
  {
    title: "Billing Software",
    desc: "A responsive full-stack billing application to manage products, purchases and sales with real-time database integration.",
    tech: "React • Node • MongoDB• Bootstrap",
    image: billing,
    github: "https://github.com/MitaliMarode27/billing-Software",
    live: "#"
  },
  {
    title: "Luxe Heaven",
    desc: "Interior design platform with payment gateway integration.",
    tech: "React • Node • MongoDB• Bootstrap",
    image: luxe,
    github: "https://github.com/MitaliMarode27/Luxe-Heaven",
    live: "#"
  }
];

function Projects() {
  return (
    <div className="projects-page" style={{width:"100vw"}}>

      {/* HERO */}
      <section className="projects-hero">
        <h1 style={{fontFamily:"serif"}}>My Projects</h1>
        <p style={{fontFamily:"sans-serif"}}>Here are some applications I have built using modern web technologies.</p>
      </section>


      {/* PROJECTS GRID */}
      <section className="projects-section">

        <h2>All Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <img src={project.image} alt={project.title} />

              <div className="project-info">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <span className="tech">{project.tech}</span>

                <div className="project-buttons">

                  <a href={project.github} target="_blank">
                  <i className="fa-brands fa-github"></i>  GitHub
                  </a>

                  <a href={project.live} target="_blank">
                    Live Demo <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="projects-cta">

        <h2 style={{fontFamily:"serif"}}>More Projects on GitHub</h2>

        <a
          href="https://github.com/MitaliMarode27"
          target="_blank"
          className="github-btn"
        >
          <i className="fa-brands fa-github"></i> Visit GitHub
        </a>

      </section>


   {/* Footer */}
     <footer className="footer">

  <div className="footer-container">

    {/* Left */}
    <div className="footer-about">
      <h2>Mitali Marode</h2>
      <p>
       Open to opportunities in Web Development and
excited to build impactful digital products.
      </p>
    </div>


    {/* Quick Links */}
    <div className="footer-links">
      <h3>Quick Links</h3>

      <a href="#hero"><i class="fa-solid fa-house"></i> Home</a>
      <a href="#about"><i class="fa-solid fa-circle-info"></i> About</a>
      <a href="#projects"><i class="fa-solid fa-diagram-project"></i> Projects</a>
      <a href="#contact"><i class="fa-solid fa-phone"></i> Contact </a>
    </div>


    {/* Social */}
    <div className="footer-social">
      <h3>Connect</h3>

      <div className="social-icons">

        <a href="https://www.linkedin.com/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://instagram.com/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>

      </div>

    </div>

  </div>


  <div className="footer-bottom">
    © 2025 Mitali Marode ❤️ | Built with React <i class="fa-brands fa-react"></i>
  </div>

</footer>
    </div>
  );
}

export default Projects;