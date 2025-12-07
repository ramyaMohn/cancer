import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

import hopeImg from "./assets/hope.jpeg";
import fightImg from "./assets/fight.png";
import supportImg from "./assets/support.png";

function App() {
  const [quote, setQuote] = useState("Loading inspiring quote...");

  useEffect(() => {
    
    fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://type.fit/api/quotes")
    )
      .then((res) => res.json())
      .then((data) => {
        const quotes = JSON.parse(data.contents);
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(random.text);
      })
      .catch(() =>
        setQuote("Stay strong — every day is a new chance 💗")
      );
  }, []);

  return (
    <>
      <header className="header">
        <h1>Cancer Awareness & Support</h1>
        <p>You are not alone. Early detection saves lives.</p>
      </header>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="carousel-container"
         showArrows={true} 
         emulateTouch={true}
      >
        <div>
          <img src={hopeImg} alt="Hope and Strength" />
        </div>
        <div>
          <img src={fightImg} alt="Fight Cancer Together" />
        </div>
        <div>
          <img src={supportImg} alt="Support and Love" />
        </div>
      </Carousel>

      <section className="container">
        <h2>Stay Strong — Stay Aware</h2>
        <p className="text">
          Cancer affects millions every year, but awareness, early diagnosis,
          and emotional support bring hope and strength. Together we inspire
          courage, compassion, and healing.
        </p>

        <div className="quote-box">{quote}</div>

        <div className="form-section">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows="4" placeholder="Message"></textarea>
            <button type="button">Send</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        © 2025 Cancer Awareness & Support | You are stronger than you think 
      </footer>
    </>
  );
}

export default App;
