import { useState, useEffect } from "react";
import profile from "../assets/pp.jpg"
function Contact() {
  const roles = ["FullStack Developer", "Frontend Developer", "Backend Developer", "Mobile Apps Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161b33] text-white">

<div className="relative w-full mb-6 flex justify-center">

  <img
    className="rounded-full w-60 h-60 lg:w-40 lg:h-40 mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30 object-cover"
    src={profile}
    alt="Dipesh Rijal"
  />
</div>

  
      <div className="w-full flex flex-col items-center justify-center text-center gap-4 md:text-left sm:mt-8 mt-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
          Contact Me
        </h1>
        <h3 className="capitalize text-rose-400">
          I'm <span className="text-green-500">{roles[roleIndex]}</span>
        </h3>
        <p>Feel free to reach out to me for any inquiries or collaborations.</p>

      
        <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
