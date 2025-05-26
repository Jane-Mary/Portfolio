import React from 'react';

const HomeSection = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row p-10">
      <div className="flex items-center justify-center pb-4">
        <img src="../assets/image.png" alt="Jane-Mary - Front-End Developer" className="rounded-full border object-cover w-80 h-80 " />
      </div>
      <div className="flex flex-col justify-center lg:ml-12 ">
        <h2 className="text-center pb-4 font-extrabold text-4xl">
          Hi, I'm <span className="text-primary">Jane-Mary</span>
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
            <button className="text-text-light w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-primary font-medium transition-all duration-300 hover:scale-105 hover:brightness-110 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
