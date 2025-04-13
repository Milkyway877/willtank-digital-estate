
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-willtank-700">Will<span className="text-willtank-500">Tank</span></span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              Secure your digital legacy with our comprehensive digital will platform designed to protect what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-willtank-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-willtank-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-willtank-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-willtank-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="#features" className="text-gray-600 hover:text-willtank-600 transition-colors">Features</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Security</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Updates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">About</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="#faq" className="text-gray-600 hover:text-willtank-600 transition-colors">FAQs</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-willtank-600 transition-colors">Help Center</Link></li>
              <li>
                <a href="mailto:support@willtank.com" className="text-gray-600 hover:text-willtank-600 flex items-center transition-colors">
                  <Mail size={16} className="mr-2" /> Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} WillTank. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-500 hover:text-willtank-600 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-willtank-600 transition-colors">Terms of Service</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-willtank-600 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
