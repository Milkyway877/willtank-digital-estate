
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-willtank-700">Will<span className="text-willtank-500">Tank</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-gray-700 hover:text-willtank-600 font-medium transition-colors">Features</Link>
            <Link to="#how-it-works" className="text-gray-700 hover:text-willtank-600 font-medium transition-colors">How It Works</Link>
            <Link to="#faq" className="text-gray-700 hover:text-willtank-600 font-medium transition-colors">FAQ</Link>
            <Button variant="outline" className="border-willtank-500 text-willtank-700 hover:bg-willtank-50">Sign In</Button>
            <Button className="bg-willtank-600 hover:bg-willtank-700">Get Started</Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-willtank-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b shadow-lg">
            <Link to="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-willtank-600 hover:bg-willtank-50">Features</Link>
            <Link to="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-willtank-600 hover:bg-willtank-50">How It Works</Link>
            <Link to="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-willtank-600 hover:bg-willtank-50">FAQ</Link>
            <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
              <Button variant="outline" className="border-willtank-500 text-willtank-700 hover:bg-willtank-50 w-full">Sign In</Button>
              <Button className="bg-willtank-600 hover:bg-willtank-700 w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
