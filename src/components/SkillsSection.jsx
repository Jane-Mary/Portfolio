const skillsData = [
  { name: 'HTML', iconSrc: '../assets/html-5.svg', alt: 'HTML' },
  { name: 'CSS', iconSrc: '../assets/css-3.svg', alt: 'CSS' },
  { name: 'SCSS', iconSrc: '../assets/scss.svg', alt: 'SCSS' },
  { name: 'JavaScript', iconSrc: '../assets/js.svg', alt: 'JavaScript' },
  { name: 'TypeScript', iconSrc: '../assets/typescript.svg', alt: 'TypeScript' },
  { name: 'Angular', iconSrc: '../assets/angular.svg', alt: 'Angular' },
  { name: 'React.js', iconSrc: '../assets/react.svg', alt: 'React.js' },
  { name: 'Node.js', iconSrc: '../assets/node-js.svg', alt: 'Node.js' },
  { name: 'Nest.js', iconSrc: '../assets/nest.svg', alt: 'Nest.js' },
  { name: 'MySQL', iconSrc: '../assets/mysql.svg', alt: 'MySQL' },
  { name: 'PostgreSQL', iconSrc: '../assets/postgresql.svg', alt: 'PostgreSQL' },
];

const SkillsSection = () => {
  return (
    <div id="skills" className="pb-6 mb-4">
      <div className="bg-surface rounded-md flex items-center justify-center p-8">
        <div className="max-w-5xl w-full mx-auto">
          <h1 className="text-4xl text-center text-primary mb-12 font-bold">
            My Skills
          </h1>
          <div className="flex flex-wrap justify-center gap-10">
            {skillsData.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center w-24 mx-4 mb-8 p-4 rounded-lg bg-surface shadow-2xl shadow-primary-light hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out cursor-pointer">
                <div className="flex h-20 items-center justify-center rounded-md w-20 mb-2"> {/* Adjusted size and margin */}
                  <img
                    className="w-12 h-12"
                    src={skill.iconSrc}
                    alt={skill.alt}
                  />
                </div>
                <p className="text-center">{skill.name}</p> {/* Added text-center */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
