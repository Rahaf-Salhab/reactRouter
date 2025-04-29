import avatar from '../assets/img/avataaars.svg';
import star from '../assets/portfolio/star.png';

const Hero = () => {
  return (
    <header className="hero">
      <div className="container text-center">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>Start Bootstrap</h1>
        <img src={star} alt="Star Divider" />
        <p className="subtitle">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
};

export default Hero;
