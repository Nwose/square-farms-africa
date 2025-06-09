import { Instagram, TwitterIcon, LinkedinIcon } from "lucide-react";
import squarefarmlogo from "../assets/squarefarmlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#3f6f30] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 font-glancyr">
              Square Farms Africa
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              Empowering Nigerian farmers through innovation, finance, and
              sustainable agricultural solutions for a prosperous future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="hover:text-white transition-colors"
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agricultural Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Farmer Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Market Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Risk Management
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              © 2025 Square Farms Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
