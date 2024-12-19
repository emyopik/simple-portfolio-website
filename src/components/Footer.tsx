import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">John Doe</h3>
            <p className="text-gray-400 mt-2">Digital Marketing • Photography • Content Creation</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}