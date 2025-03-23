
import { useState, useEffect } from "react";

function About() {
  const roles = ["FullStack Developer", "Frontend Developer", "Backend Developer", "Mobile Apps Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#161b33] text-white py-12">

 
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-rose-400 mb-4">
          About Me``
        </h1>
        <h3 className="text-lg text-rose-300 mb-4">
          I'm <span className="text-green-500">{roles[roleIndex]}</span>
        </h3>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          I am a BIT student with a passion for web development. I specialize in building clean, responsive websites and applications using modern technologies like React and Tailwind CSS. 
          My goal is to create engaging and user-friendly digital experiences that empower users and solve real-world problems.
        </p>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-medium mt-12">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "PHP", "MySQL", "Git", "Node.js","C","Java","network connection","python"].map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-gray-800 rounded-lg shadow-md shadow-rose-600 hover:bg-rose-500 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;



