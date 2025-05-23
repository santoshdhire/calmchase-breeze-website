
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              CalmChase
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering individuals with self-confidence, mental well-being, and life skills.
              Chase your goals with calmness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/calm_chase" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Programs</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">Testimonials</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors duration-200">Gallery</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">SSB Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Digital Detox</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Personality Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Leadership Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Resilience Building</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="text-blue-400 mr-3" size={18} />
                <span className="text-gray-400">calmchase@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-400 mr-3" size={18} />
                <span className="text-gray-400">+91 9503796276</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-blue-400 mr-3 mt-1" size={18} />
                <span className="text-gray-400">
                  Hadapsar, Pune,<br />
                  Maharashtra - 412307
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CalmChase. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Chase your goals with calmness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
