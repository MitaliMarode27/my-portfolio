import "./LandingPage.css";
import billingSoftwareImg from "./Images/billingDashboard.png";
import myImg from "./Images/my photo.jpeg";
import DigitronLogo from "./Images/digitronLogo.png";
import freelanceLogo from "./Images/freelanceLogo.jpg";
import aboutImg from "./Images/aboutmeimg.avif";
import LuxeHeavenImg from "./Images/luxeHeavenImg.png";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

function LandingPage() {

    const data = [
    {
      year: "2022 – 2026",
      title: "Bachelor of Technology",
      institution:
        "Vidarbha Institute of Technology, Nagpur (DBATU University)",
      detail: "Specialization: MERN Stack Development",
    },
    {
      year: "2020 – 2021",
      title: "Higher Secondary Education",
      institution:
        "Adarsh Sanskar Vidhyalaya, Nagpur, Maharashtra (Maharashtra State Board)",
    },
    {
      year: "2018 – 2019",
      title: "Secondary School Education",
      institution:
        "Adarsh Sanskar Vidhyalaya, Nagpur, Maharashtra (Maharashtra State Board)",
    },
  ];


  return (
    <div className="App">
     

      {/* Hero Section */}
<header
  id="hero"
  className="hero"
  style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#e0f7ff,#f3e8ff,#ffffff)",
  }}
>
  <div className="hero-content">
    <img
      className="myImg"
      src={myImg}
      alt="Mitali Marode"
    />

    <h1 className="hero-title mt-3">
      <TypeAnimation
        sequence={[
          "Hi, I'm Mitali Marode 👋",
          2000,
          "MERN Stack Developer",
          2000,
          "I Build Modern Web Applications",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>

    <p className="hero-subtitle">
      Creating responsive and modern web experiences using React, Node.js and MongoDB
    </p>

    <a href="#projects" className="cta-btn">
     <i className="fa-solid fa-eye"></i> View My Projects
    </a>
  </div>
</header>

      {/* About Section */}
<section id="about" className="about-section">
  <div className="about-container">


 <div className="about-card">
      <h1 style={{color:"#2c5364"}}>About Me</h1>

        <p className="about-text mt-3">
        Hello! I’m <b>Mitali Marode</b>, a passionate Full Stack Web Developer
        skilled in building modern, responsive and user-friendly web
        applications.

        I specialize in frontend development using <b>HTML, CSS,
        JavaScript, ReactJS and Bootstrap</b> and I'm expanding my backend
        expertise with <b>Node.js, Express.js and MongoDB</b> as part of
        the MERN stack.

        I enjoy building complete web solutions that combine
        functionality, design and great user experience.
      </p>

      <ul className="about-info">
        <li>Name : <span>Mitali Marode</span></li>
        <li>Education : <span>B.Tech</span></li>
        <li>Specialization : <span>MERN Stack Development</span></li>
        <li>Date of Birth : <span>July 09, 2004</span></li>
        <li>Location : <span>Nagpur, Maharashtra</span></li>
      </ul>

     <a
            href="/MITALI-MARODE-FlowCV-Resume-20251008.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
           <i className="fa-solid fa-eye"></i> View Resume
          </a>
      <a
        href="/MITALI-MARODE-FlowCV-Resume-20251008.pdf"
        download="Mitali_Marode_Resume.pdf"
        className="resume-btn"
      >
       <i className="fa-solid fa-download"></i>  Download Resume
      </a>

      {/* info list + resume button */}
    </div>

    {/* RIGHT SIDE FIRST (IMAGE + SKILLS) */}
    <div className="about-right">

      <img
        src={aboutImg}
        className="about-img"
        alt=""
      />

      <div className="skills">

        <div className="skill">
          <span>ReactJS</span>
          <div className="skill-bar">
            <div className="skill-progress react"></div>
          </div>
        </div>

        <div className="skill">
          <span>Node.js & Express</span>
          <div className="skill-bar">
            <div className="skill-progress node"></div>
          </div>
        </div>

        <div className="skill">
          <span>MongoDB</span>
          <div className="skill-bar">
            <div className="skill-progress mongo"></div>
          </div>
        </div>

        <div className="skill">
          <span>HTML, CSS, JavaScript</span>
          <div className="skill-bar">
            <div className="skill-progress frontend"></div>
          </div>
        </div>

      </div>
    </div>   

  </div>
</section>

{/* Education Section */}
<section className="education-section">
  <h2 className="section-title">Education</h2>

  <div className="education-container">
    {data.map((item, index) => (
      <div key={index} className="education-card">

        <div className="education-dot"></div>

        <h3 className="education-year">{item.year}</h3>

        <h4 className="education-title">{item.title}</h4>

        <p className="education-institution">
          {item.institution}
        </p>

        {item.detail && (
          <p className="education-detail">{item.detail}</p>
        )}

      </div>
    ))}
  </div>
</section>

      {/* Projects Section */}
<section id="projects" className="projects-section">
  <h2 className="section-title">Featured Projects</h2>
  <p className="section-subtitle">Some of my best work</p>
<div className=" d-flex justify-content-center align-items-center flex-wrap" style={{columnGap:"2rem"}}>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-image">
        <img src={billingSoftwareImg} alt="Billing Software" />
      </div>

      <div className="project-content">
        <h3>Billing Software</h3>

        <p>
          A responsive full-stack billing application to manage products,
          purchases and sales with real-time database integration.
        </p>

        <div className="project-tech">
          React • Node.js • MongoDB • Bootstrap
        </div>

        <div className="project-buttons">
          <a href="https://github.com/MitaliMarode27/billing-Software.git">
           <i className="fa-brands fa-github"></i> GitHub
          </a>

        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card reverse">
      <div className="project-image">
        <img src={LuxeHeavenImg} alt="Luxe Heaven" />
      </div>

      <div className="project-content">
        <h3>Luxe Heaven</h3>

        <p>
          Full-stack interior design platform with payment gateway
          integration and dynamic product management.
        </p>

        <div className="project-tech">
          React • Node.js • MongoDB • Stripe
        </div>

        <div className="project-buttons">
          <a href="https://github.com/MitaliMarode27/Luxe-Heaven.git">
           <i className="fa-brands fa-github"></i> GitHub
          </a>

          <a href="#">
            Live Demo
          </a>
        </div>
      </div>
    </div>

  </div>

  <div className="view-all">
   <NavLink to="/projects" className="view-all-btn">
  View All Projects <i className="fa-solid fa-arrow-right"></i>
</NavLink>
    </div>

  </div>
</section>

      {/*Experience Section */}
<section id="experience" className="section experience">
  <h2 className="text-center">Experience</h2>
  <hr className="w-50 mx-auto mb-5" />

  <div className="experience-container">

    {/* Digitron Internship */}
    <div className="experience-card">
      <img src={DigitronLogo} className="experience-logo" alt="Digitron" />

      <div className="experience-content">
        <h3>Web Development Intern - Digitron Software & Technology</h3>
        <span>Jun 2025 – Dec 2025 | Nagpur</span>

        <p>
          Worked on full-stack web development, implemented responsive UI
          components, improved website performance and collaborated with
          developers on real-world projects.
        </p>

        <div className="certificate-buttons">
          <a
            href="/internshipCertificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            <i className="fa-solid fa-eye"></i> View Certificate
          </a>

          <a
            href="/internshipCertificate.pdf"
            download
            className="download-btn"
          >
           <i className="fa-solid fa-download"></i> Download
          </a>
        </div>
      </div>
    </div>

    {/* Freelance */}
    <div className="experience-card">
      <img src={freelanceLogo} className="experience-logo" alt="Freelance" />

      <div className="experience-content">
        <h3>Freelance Web Developer</h3>
        <span>Jul 2025 – Present</span>

        <p>
          Designed and developed modern responsive websites for small
          businesses, implementing custom animations and interactive UI
          features to enhance user experience.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Contact Section */}
<section
  id="contact"
  className="section contact"
  style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}
>
  <h2 className="text-center">Get In Touch</h2>
  <hr className="w-50 mx-auto mb-5" />

  <div className="contact-container">

    {/* LEFT SIDE - CONTACT INFO */}
    <div className="contact-info">

      <h3>Let's Work Together</h3>
      <p>
        If you have a project idea, internship opportunity, or freelance work,
        feel free to contact me. I'm always open to discussing new ideas and collaborations.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> mitalimarode799@gmail.com</p>
        <p><strong>Location:</strong>Nagpur, Maharashtra, India</p>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mitali-marode-1307b231a/" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
        <a href="https://github.com/MitaliMarode27" target="_blank"><i className="fa-brands fa-github"></i>GitHub</a>
        <a href="https://www.instagram.com/mitalimarode/?hl=en" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</a>
      </div>

    </div>


    {/* RIGHT SIDE - CONTACT FORM */}
    <form className="contact-form">

      <input type="text" placeholder="Your Name" required />

      <input type="email" placeholder="Your Email" required />

      <textarea placeholder="Your Message" rows="5" required></textarea>

      <button type="submit">Send Message</button>

    </form>

  </div>
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

      <a href="#hero"><i className="fa-solid fa-house"></i> Home</a>
      <a href="#about"><i className="fa-solid fa-circle-info"></i> About</a>
      <a href="#projects"><i className="fa-solid fa-diagram-project"></i> Projects</a>
      <a href="#contact"><i className="fa-solid fa-phone"></i> Contact </a>
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

export default LandingPage;
