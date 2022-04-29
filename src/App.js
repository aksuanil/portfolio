import Header from './Header';
import Hero from './Hero';
import Works from './Works';
import Contack from './Contact';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';


function App() {

  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);

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

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body class="debug-screens" />
      <div className="bg-gradient-to-l from-zinc-900 via-zinc-900 to-black text-white scroll-smooth	overflow-hidden">
        <Header />
        <div className='container mx-auto gap-8 flex flex-col'>
            <Hero />
            <About />
            <Skills />
            <Works />
            <Contack />
            <Footer />
        </div>
      </div></>

  );
}

export default App;
