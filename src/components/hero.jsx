import { useState, useEffect } from "react";
import profile from "../assets/pp.jpg";
  import { Link } from "react-router-dom";


function Home() {
  const roles = ["FullStack Developer", "Frontend Developer", "Backend Developer", "Mobile Apps Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161b33] text-white">

      
      <div className="w-full relative flex justify-center">
 
  <img
    className="rounded-full w-100 h-100 lg:w-48 lg:h-48 mx-auto object-cover outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
    src={profile}
    alt="Dipesh Rijal"
  />
</div>


     
      <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center md:mt-0 sm:mt-8 mt-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
          Hello, My name is Dipesh Rijal
        </h1>
        <h3 className="capitalize text-rose-400">
          I'm <span className="text-green-500">{roles[roleIndex]}</span>
        </h3>
        <p>BIT student and web developer skilled in React and Tailwind CSS.</p>
<Link to="/contact" className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition duration-300">
  Get In Touch
</Link>
      </div>
    </div>
  );
}

export default Home;
