import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Contack from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';

function App() {

  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };

  const observer = new IntersectionObserver(callback);
  const targets = document.querySelectorAll("#works");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });

  var style = document.createElement("style");
  style.innerHTML = `::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #18181B; /* or add it to the track */
  }
  ::-webkit-scrollbar-thumb {
    background: #267E61;
  }`;
  document.head.appendChild(style);

  return (
    <>
      <div>
        <div className={`${process.env.NODE_ENV === "development" ? "debug-screens" : ""}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&family=Bungee+Outline&family=Iceberg&family=Karla&family=Nova+Square&family=Spectral:wght@600;700&display=swap" rel="stylesheet" />
        {/* 
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
              <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet" /> */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </div>
      <div className="scroll-smooth bg-gradient-to-l from-zinc-900 via-zinc-900 to-black text-white overflow-hidden selection:bg-emerald-800 selection:text-white">
        <Header />
        <div className='container mx-auto gap-8 flex flex-col'>
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contack />
        </div>
        <Footer />
      </div>
    </>

  );
}

export default App;
