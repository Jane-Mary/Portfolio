import "./App.css";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      <div id="home" className="bg-[#faf8ed]  p-2">
      <div className="sticky top-0 z-50 flex justify-between p-4 bg-inherit shadow-sm mb-7 ">
      <div className="flex flex-col items-center mb-2">
        <div className="flex items-center">
          <img src="src/assets/react.svg" alt="logo" className="h-8" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="absolute top-4 right-4">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          {['home', 'skills', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              className={`p-2 cursor-pointer ${activeSection === item ? 'text-[#e03f4f] font-bold' : 'hover:text-[#e03f4f]'}`}
              onClick={() => handleScroll(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>

        {/* Home  */}
        <div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-center pb-4">
              <img src="src/assets/image.png" alt="image" className="rounded-full border border-black object-cover w-80 h-80" />
            </div>
            <div>
              <h2 className="text-center pb-4 font-extrabold text-4xl">
                Hi, I'm <span className="text-[#7a141e]">Jane-Mary</span>
              </h2>
              <p className="text-base text-justify pb-4 ">
                A motivated Front-End Developer with hands-on experience in
                building responsive, dynamic web applications. I am passionate
                about crafting visually appealing and user-friendly interfaces
                while ensuring optimal performance and accessibility.
              </p>
              <div className="pb-3">
                <a
                  href="https://docs.google.com/document/d/1nuy7lG7MFdG_zqceakZO0eOqIehqgiki/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-[#f8f4e3] w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-[#7a141e] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="pb-6">
          <div className="bg-white rounded-md flex items-center justify-center p-8">
            <div className="max-w-5xl w-full mx-auto">
              <h1 className="text-5xl text-center text-black mb-12 font-bold">
                My Skills
              </h1>
              <div className="flex flex-wrap justify-center gap-10">
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/html-5.svg"
                      alt="HTML"
                    />
                  </div>
                  <p>HTML</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097]  flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/css-3.svg"
                      alt="css"
                    />
                  </div>
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097]  flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/scss.svg"
                      alt="SCSS"
                    />
                  </div>
                  <p>SCSS</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/js.svg"
                      alt="JS"
                    />
                  </div>
                  <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/typescript.svg"
                      alt="TS"
                    />
                  </div>
                  <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/angular.svg"
                      alt="angular"
                    />
                  </div>
                  <p>Angular</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/react.svg"
                      alt="react"
                    />
                  </div>
                  <p>React.js</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/node-js.svg"
                      alt="node"
                    />
                  </div>
                  <p>Node.js</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/nest.svg"
                      alt="nest"
                    />
                  </div>
                  <p>Nest.js</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/mysql.svg"
                      alt="mysql"
                    />
                  </div>
                  <p>MySQL</p>
                </div>
                <div className="flex flex-col items-center justify-center w-24 mx-4 mb-8">
                  <div className="bg-white shadow-2xl shadow-[#d49097] flex h-24 items-center justify-center rounded-md w-24">
                    <img
                      className="w-12 h-12"
                      src="src/assets/postgresql.svg"
                      alt="PSQL"
                    />
                  </div>
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects*/}
        <div id="projects" className="pb-6">
          <h1 className="text-center font-bold text-3xl">Projects</h1>
          <div className="pb-4">
            <div className="flex items-center justify-center py-4">
              <img
                src="src/assets/moon.jpg"
                alt="comfy"
                className="rounded-2xl w-full shadow-lg "
              />
            </div>
            <div className="">
              <h1 className="text-base font-bold">Comfy Homes</h1>
              <p className="pb-1">
                A websites where you can get easy, affordable and applicable
                designs for your home.
              </p>
              <button className="border rounded-md p-2 bg-[#7a141e] text-[#f8f4e3]">
                View Project
              </button>
            </div>
          </div>
          <div className="2">
            <div className="flex items-center justify-center py-4">
              <img
                src="src/assets/moon.jpg"
                alt="events"
                className="rounded-2xl w-full shadow-lg"
              />
            </div>
            <div className="">
              <h1 className="text-base font-bold">Aura Creations</h1>
              <p className="pb-1">
                A platform where event planners can come together and display
                their ideas to customers giving them varities to choose from.
              </p>
              <button className="border rounded-md p-2 bg-[#7a141e] text-[#f8f4e3]">
                View Project(Upcoming)
              </button>
            </div>
          </div>
        </div>

        {/*Contact Me */}

        <div
          id="contact"
          className=" mx-auto relative overflow-hidden  p-8 rounded-lg bg-white"
        >
          <h2 className="text-2xl font-bold text-[#7a141e] mb-6 text-center">
            Contact Me
          </h2>
          <div className="">
          <div className="">
            <img src="src/assets/Messages-rafiki.svg" alt="" />
          </div>
          <div className="">
          <form method="post" action="#">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-[#7a141e]"
                for="name"
              >
                Full Name
              </label>
              <input
                className="mt-1 p-2 w-full border-2 rounded-md "
                type="text"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-[#7a141e]"
                for="email"
              >
                Email Address
              </label>
              <input
                className="mt-1 p-2 w-full  border-2  rounded-md "
                name="email"
                id="email"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-[#7a141e]"
                for="message"
              >
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full border-2  rounded-md "
                rows="3"
                name="message"
                id="message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#7a141e] text-[#f8f4e3] px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Leave a Message
              </button>
            </div>
          </form>
          </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 p-4 rounded-2xl">
          <img
            src="src/assets/arrow-up.svg"
            alt=""
            className="w-12 h-12"
            onClick={() => handleScroll("home")}
          />
        </div>
      </div>
    </>
  );
};

export default App;
