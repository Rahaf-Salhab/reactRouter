import { FaDownload } from 'react-icons/fa'; // استيراد أيقونة التحميل

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">ABOUT</h2>
        <img src='./src/assets/portfolio/star.png' className='star'></img>
        <div className="custom-divider">
          </div>
        <div className="about-content">
          <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p>
            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
          </p>
        </div>
        <a href="#" className="download-btn">
          <FaDownload /> Free Download!
        </a>
      </div>
    </section>
  );
};

export default About;
