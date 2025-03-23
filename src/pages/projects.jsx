function Projects() {
    const projects = [
      {
        title: "E-commerce Website",
        description: "An online platform for selling bamboo-made handicrafts with a clean UI.",
      },
      {
        title: "IoT-based Smart Home",
        description: "A home automation system using ESP32 and sensors for better security and convenience.",
      },
      {
        title: "Student Management System",
        description: "A web-based system to manage students, faculties, and academic records efficiently.",
      },
    ];
  
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#161b33] text-white py-12">
        <h2 className="text-4xl font-bold text-rose-400 mb-8">Projects</h2>
  
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md shadow-rose-600 hover:bg-rose-500 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  