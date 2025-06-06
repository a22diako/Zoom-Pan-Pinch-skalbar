import React, { useState, useEffect } from "react";
import "./App.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function App() {
  const [currentPage, setCurrentPage] = useState("hem");


  return (
    <div>
      <Header />
      <Navbar setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
      <Footer />
    </div>
  );
}


function Header() {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);


  const formattedDate = time.toLocaleDateString("sv-SE");
  const formattedTime = time.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });


  return (
    <header className="header">
      <img src="/Nyheter.png" alt="Nyheter" className="header-image" />
      <div className="header-dateTime">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </header>
  );
}


function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#" onClick={() => setCurrentPage("hem")} className="nav-link">Hem</a></li>
        <li><a href="#" onClick={() => setCurrentPage("ekonomi")} className="nav-link">Ekonomi</a></li>
        <li><a href="#" onClick={() => setCurrentPage("sport")} className="nav-link">Sport</a></li>
        <li><a href="#" onClick={() => setCurrentPage("politik")} className="nav-link">Politik</a></li>
        <li><a href="#" onClick={() => setCurrentPage("noje")} className="nav-link">Nöje</a></li>
      </ul>
    </nav>
  );
}


function MainContent({ currentPage }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const goNext = () => setCurrentImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
  const goPrev = () => setCurrentImageIndex((prev) => (prev === 0 ? 2 : prev - 1));


  const renderPage = () => {
    switch (currentPage) {
      case "hem":
        return (
          <div className="main-content">
            <div className="left-column">
              <Card image="/stare.png" title="Synnedsatta upplever en sämre användarupplevelse" description="En kort beskrivning av nyheten." />
              <Card image="/newyork.png" title="New Yorks biggest economy crisis in ten years" description="En annan kort beskrivning." />
              <Card image="/eu.png" title="EU vägrar ha omröstning" description="Ytterligare en beskrivning." />
              <Card image="/tak.png" title="Elpriser ökar igen" description="Rekordnivåer i hela Europa." />
              <Card image="/tidning.png" title="Barnbidrag förändras" description="Nya regler gäller från maj." />
              <Card image="/glasögon.png" title="Tågstrejk i Tyskland" description="Kan påverka semestertrafiken." />
            </div>
            <div className="middle-column">
              <Card image="/egg.png" title="Nyhet 4" description="En fjärde nyhet." />
              <Card image="/nationellaprovet.png" title="Nationella provet läckt" description="Stora konsekvenser väntas." />
              <Card image="/politik.png" title="Politiker i blåsväder" description="Granskning pågår." />
              <Card image="/baseboll.png" title="Baseboll" description="Baseboll rack" />
              <Card image="/slott.png" title="Kungliga slottet" description="Slott." />
              <Card image="/ingenjör.png" title="Fler startar företag" description="Ny rapport visar ökning." />
            </div>
            <div className="right-column">
              <Card image="/royalty.png" title="Kungligt bröllop" description="Ett storslaget evenemang." />
              <Card image="/slott.png" title="Ny konstutställning" description="Visas i slottets galleri." />
              <Card image="/pengar.png" title="Ekonomiska tips" description="Så sparar du bäst." />
              <Card image="/kungligt.png" title="Modeveckan startar" description="Designers visar framtiden." />
              <Card image="/webb.png" title="Streamingkrig hårdnar" description="Fler tjänster på marknaden." />
              <Card image="/mobil.png" title="Sommarens festivaler" description="Fullspäckat schema i juli." />
            </div>
          </div>
        );
      case "ekonomi":
        return (
          <div className="main-content">
            <div className="column">
              <TransformWrapper>
                <TransformComponent>
                  <p className="zoomable-text">
                    {/* Lorem ipsum-texten här */}
                    Lorem ipsum dolor sit amet consectetur adipiscing elit...
                  </p>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
        );
      case "sport":
        return (
          <div className="sport-content">
            <h1 className="header-title">Sport Nyheter</h1>
            <TransformWrapper>
              <TransformComponent>
                <p className="small-text">Fusce convallis, mauris imperdiet gravida bibendum</p>
              </TransformComponent>
            </TransformWrapper>
            <TransformWrapper>
              <TransformComponent>
                <p className="medium-text">Fusce convallis, mauris imperdiet gravida bibendum</p>
              </TransformComponent>
            </TransformWrapper>
            <TransformWrapper>
              <TransformComponent>
                <p className="large-text">Fusce convallis, mauris imperdiet gravida bibendum</p>
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case "politik":
        return (
          <div className="politics-content">
            <h1>Politik Nyheter</h1>
            <div className="carousel-container">
              <TransformWrapper>
                <TransformComponent>
                  <img src={["/slott.png", "/baseboll.png", "/politik.png"][currentImageIndex]} alt="Politik Bild" className="carousel-image" />
                </TransformComponent>
              </TransformWrapper>
              <div className="carousel-controls">
                <button onClick={goPrev}>Förra</button>
                <button onClick={goNext}>Nästa</button>
              </div>
            </div>
          </div>
        );
      case "noje":
        return (
          <div className="noje-content">
            <h1>Nöje - Nyheter</h1>
            <TransformWrapper>
              <TransformComponent>
                <table className="news-table">
                  <thead>
                    <tr>
                      <th>Nyhet</th>
                      <th>Beskrivning</th>
                      <th>Datum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Paris fashion week</td>
                      <td>Det största eventet under 2025 i Frankrike.</td>
                      <td>2025-04-15</td>
                    </tr>
                    <tr>
                      <td>Oscar galan</td>
                      <td>Den årliga klassiska galan hålls i Los Angeles iår.</td>
                      <td>2025-04-27</td>
                    </tr>
                    <tr>
                      <td>Balett i kungliga teatern</td>
                      <td>Svansjön har premiär återigen, men med en annan huvudroll.</td>
                      <td>2025-04-19</td>
                    </tr>
                  </tbody>
                </table>
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      default:
        return <div>Hem - Nyheter</div>;
    }
  };


  return <div>{renderPage()}</div>;
}


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; Nyheter du kan lita på.</p>
    </footer>
  );
}


function Card({ image, title, description }) {
  return (
    <div className="card">
      <TransformWrapper>
        <TransformComponent>
          <img src={image} alt={title} className="card-image" />
        </TransformComponent>
      </TransformWrapper>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}


export default App;


