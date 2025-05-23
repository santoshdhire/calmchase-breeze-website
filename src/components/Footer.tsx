
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              CalmChase
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering individuals with self-confidence, mental well-being, and life skills.
              Chase your goals with calmness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/calm_chase" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="bg-white/10 p-1 rounded mr-2 text-xs">01</span>Home</a></li>
              <li><a href="#features" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="bg-white/10 p-1 rounded mr-2 text-xs">02</span>Programs</a></li>
              <li><a href="#testimonials" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="bg-white/10 p-1 rounded mr-2 text-xs">03</span>Testimonials</a></li>
              <li><a href="/blog" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="bg-white/10 p-1 rounded mr-2 text-xs">04</span>Blog</a></li>
              <li><a href="/gallery" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="bg-white/10 p-1 rounded mr-2 text-xs">05</span>Gallery</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>SSB Preparation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Digital Detox</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>Personality Development</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Leadership Training</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Resilience Building</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-200">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover:bg-blue-500 transition-all duration-300">
                  <Mail className="text-blue-300 group-hover:text-white transition-colors duration-300" size={16} />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">calmchase@gmail.com</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 group-hover:bg-purple-500 transition-all duration-300">
                  <Phone className="text-purple-300 group-hover:text-white transition-colors duration-300" size={16} />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">+91 9503796276</span>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-3 mt-1 group-hover:bg-pink-500 transition-all duration-300">
                  <MapPin className="text-pink-300 group-hover:text-white transition-colors duration-300" size={16} />
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                  Hadapsar, Pune,<br />
                  Maharashtra - 412307
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 CalmChase. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm mt-4 md:mt-0">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chase your goals with calmness</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
