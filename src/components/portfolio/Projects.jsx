const Projects = ({ data }) => {
  return (
    <div className="group relative bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-[#8b5cf6]/90 backdrop-blur-sm rounded-full">
            {data.category}
          </span>
        </div>

        {/* GitHub Link Button - Shows on Hover */}
        <a 
          href={data.link}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#8b5cf6]"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-4.646 0-1.029.377-1.93 1-2.546-.101-.246-.438-1.23.095-2.56 0 0 .812-.26 2.661.985.771-.215 1.596-.322 2.416-.326.82.004 1.645.111 2.416.326 1.849-1.245 2.661-.985 2.661.985.533 1.33.2 2.314.095 2.56.623.616 1 1.517 1 2.546 0 3.319-2.807 4.344-5.479 4.646.435.377.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8b5cf6] transition-colors duration-300">
          {data.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {data.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {data.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 text-xs font-medium bg-gray-900 text-gray-300 rounded-lg border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Line (Purple to Cyan matching your image) */}
      <div className="h-1 bg-gradient-to-r from-[#8b5cf6] to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default Projects;