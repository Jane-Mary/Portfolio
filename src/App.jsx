import "./App.css";
import { useState, useEffect } from "react";
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import HomeSection from './components/HomeSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "skills", "projects", "contact"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <>
      <div id="home" className="bg-background text-text-dark p-2">
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
          handleScroll={handleScroll}
        />

        {/* Home  */}
        <div>
          <HomeSection />
        </div>

        {/* Skills */}
        <SkillsSection />

        {/* Projects*/}
        <div id="projects" className="mb-20">
          <h1 className="text-center font-bold text-4xl mb-10 text-primary">Projects</h1>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className=" ">
              <img src="src/assets/moon.jpg" alt="comfy" className="rounded-2xl w-96 shadow-lg "/>
            </div>
            <div className="">
              <h1 className="font-bold text-3xl">Comfy Homes</h1>
              <p className="pb-1 w-96">
                A websites where you can get easy, affordable and applicable
                designs for your home.
              </p>
              <button className="border rounded-md p-2 bg-primary text-text-light hover:brightness-110 transition-all duration-200">
                View Project
              </button>
            </div>
          </div>
          <div className="flex flex-wrap flex-row-reverse items-center justify-center mt-9 gap-10">
            <div className="">
              <img src="src/assets/moon.jpg" alt="events" className="rounded-2xl w-96 shadow-lg0"/>
            </div>
            <div className="">
              <h1 className="pb-3 font-bold text-3xl">Aura Creations</h1>
              <p className="pb-5 w-96">
                A platform where event planners can come together and display
                their ideas to customers giving them varities to choose from.
              </p>
              <button className="border rounded-md p-2 bg-primary text-text-light hover:brightness-110 transition-all duration-200">
                View Project(Upcoming)
              </button>
            </div>
          </div>
        </div>

        {/*Contact Me */}

        <div
          id="contact"
          className=" mx-auto relative overflow-hidden  p-8 rounded-lg bg-surface"
        >
          <h2 className="text-center font-bold text-4xl text-primary mb-10">
            Contact Me
          </h2>
          <ContactSection />
        </div>
        <div className="fixed bottom-0 right-0 p-4 rounded-2xl">
          <img
            src="src/assets/arrow-up.svg"
            alt="Scroll to top"
            className="w-12 h-12 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={() => handleScroll("home")}
          />
        </div>
      </div>
    </>
  );
};

export default App;
