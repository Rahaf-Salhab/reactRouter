import star2 from '../assets/portfolio/star2.png';

const ContactMe = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contTit">Contact Me</h2>
        <img src={star2} className="star2" alt="Star Divider" />

        <div className="divider"></div>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Message" required></textarea>
          <button className="send" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
