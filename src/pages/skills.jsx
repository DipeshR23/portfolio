function Skills() {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#161b33] text-white py-12">
        <h2 className="text-4xl font-bold text-rose-400 mb-8">Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-medium">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "PHP", "MySQL","C","Java","network connection","python"].map((skill, index) => (
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
  
  export default Skills;
  