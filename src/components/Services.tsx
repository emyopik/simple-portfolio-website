import React from 'react';
import { Megaphone, Camera, Video } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Megaphone className="w-12 h-12 text-blue-600" />,
      title: "Digital Marketing",
      description: "Strategic social media management, SEO optimization, and targeted advertising campaigns that drive real results.",
      features: ["Social Media Strategy", "SEO Optimization", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: <Camera className="w-12 h-12 text-blue-600" />,
      title: "Photography",
      description: "Professional photography services capturing moments that tell your story with stunning clarity and artistic vision.",
      features: ["Portrait Photography", "Event Coverage", "Product Photography", "Photo Editing"]
    },
    {
      icon: <Video className="w-12 h-12 text-blue-600" />,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience across all digital platforms.",
      features: ["Video Production", "Blog Writing", "Social Media Content", "Visual Design"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}