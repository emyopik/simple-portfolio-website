import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      category: "Digital Marketing",
      title: "Brand Growth Campaign",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      description: "Increased social media engagement by 200% through strategic content planning"
    },
    {
      category: "Photography",
      title: "Corporate Event Coverage",
      image: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?auto=format&fit=crop&q=80",
      description: "Professional event photography for Fortune 500 company annual meeting"
    },
    {
      category: "Content Creation",
      title: "Lifestyle Blog Series",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80",
      description: "Created engaging lifestyle content reaching over 100k monthly readers"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}