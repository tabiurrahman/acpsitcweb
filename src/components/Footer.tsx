import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark border-t border-tech-purple/20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/ede390a1-f65c-4a66-8f23-95a4b7728456.png" 
                alt="ACPSITC Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-orbitron font-bold tech-gradient-text">ACPSITC</h3>
                <span className="text-xs text-foreground/70">Adamjee Cantonment Public School IT Club</span>
              </div>
            </div>
            <p className="text-foreground/70 mb-4">
              Technology is to be invented or adopted.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/acpsit" target="_blank" rel="noreferrer" 
                className="h-10 w-10 rounded-full bg-tech-purple/10 hover:bg-tech-purple/20 flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5 text-tech-purple" />
              </a>
              <a href="https://www.instagram.com/acpsitc/" target="_blank" rel="noreferrer"
                className="h-10 w-10 rounded-full bg-tech-purple/10 hover:bg-tech-purple/20 flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5 text-tech-purple" />
              </a>
              <a href="https://www.linkedin.com/company/adamjee-cantonment-public-school-it-club/" target="_blank" rel="noreferrer"
                className="h-10 w-10 rounded-full bg-tech-purple/10 hover:bg-tech-purple/20 flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5 text-tech-purple" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/70 hover:text-tech-purple transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-foreground/70 hover:text-tech-purple transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-foreground/70 hover:text-tech-purple transition-colors">Gallery</Link></li>
              <li><Link to="/members" className="text-foreground/70 hover:text-tech-purple transition-colors">Executive Members</Link></li>
              <li><Link to="/history" className="text-foreground/70 hover:text-tech-purple transition-colors">Our History</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-orbitron font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tech-purple" />
                <span className="text-foreground/70">+880 1741947492</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-tech-purple" />
                <a href="mailto:acpsitc@gmail.com" className="text-foreground/70 hover:text-tech-purple transition-colors">
                  acpsitc@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-tech-purple flex-shrink-0 mt-1" />
                <span className="text-foreground/70">
                  Adamjee Cantonment Public School, Dhaka Cantonment, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-tech-purple/10 text-center text-sm text-foreground/50">
          <p>© {currentYear} Adamjee Cantonment Public School I.T Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
