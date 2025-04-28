const portfolioItems = [
  {image: './src/assets/portfolio/cabin.png' },
  { image: './src/assets/portfolio/cake.png' },
  { image: './src/assets/portfolio/circus.png' },
  { image: './src/assets/portfolio/game.png' },
  { image: './src/assets/portfolio/safe.png' },
  {image: './src/assets/portfolio/submarine.png' },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio">Portfolio</h2>
        <img src='./src/assets/portfolio/star2.png' className="star2"></img>

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
