import cabin from '../assets/portfolio/cabin.png';
import cake from '../assets/portfolio/cake.png';
import circus from '../assets/portfolio/circus.png';
import game from '../assets/portfolio/game.png';
import safe from '../assets/portfolio/safe.png';
import submarine from '../assets/portfolio/submarine.png';
import star2 from '../assets/portfolio/star2.png';

const portfolioItems = [
  { image: cabin, title: "Cabin" },
  { image: cake, title: "Cake" },
  { image: circus, title: "Circus" },
  { image: game, title: "Game" },
  { image: safe, title: "Safe" },
  { image: submarine, title: "Submarine" },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio">Portfolio</h2>
        <img src={star2} className="star2" alt="Star Divider" />
        <div className="divider"></div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
