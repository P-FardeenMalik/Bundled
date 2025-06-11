import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';
import { AuthContext } from '@/contexts/AuthContext';
import Logo from '@/components/Logo';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStartedClick = () => {
    window.open('https://t.me/bundledhq', '_blank');
  };



  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="cursor-pointer" onClick={() => router.push("/")}>            <div className="flex items-center space-x-3">                <OptimizedImage
                  src="/images/logo.jpg"
                  alt="Bundled Logo"
                  width={48}
                  height={48}
                  className="rounded-xl"
                  priority
                />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Bundled
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/' ? 'text-yellow-500' : ''}`}>
              Home
            </Link>
            <Link href="/services" className={`text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/services' ? 'text-yellow-500' : ''}`}>
              Services
            </Link>
            <Link href="/partners" className={`text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/partners' ? 'text-yellow-500' : ''}`}>
              Partners
            </Link>
            <Link href="/about" className={`text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/about' ? 'text-yellow-500' : ''}`}>
              About
            </Link>
            <Link href="/projects" className={`text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/projects' ? 'text-yellow-500' : ''}`}>
              Projects
            </Link>
            <Link href="/contact" className={`text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
              Contact
            </Link>
            
            <Button 
              onClick={handleGetStartedClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join Telegram
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/10">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" className={`block text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/' ? 'text-yellow-500' : ''}`}>
              Home
            </Link>
            <Link href="/services" className={`block text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/services' ? 'text-yellow-500' : ''}`}>
              Services
            </Link>
            <Link href="/partners" className={`block text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/partners' ? 'text-yellow-500' : ''}`}>
              Partners
            </Link>
            <Link href="/about" className={`block text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/about' ? 'text-yellow-500' : ''}`}>
              About
            </Link>
            <Link href="/projects" className={`block text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/projects' ? 'text-yellow-500' : ''}`}>
              Projects
            </Link>
            <Link href="/contact" className={`block text-gray-400 hover:text-yellow-500 transition-colors duration-300 font-medium ${router.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
              Contact
            </Link>
            <Button 
              onClick={handleGetStartedClick}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold rounded-full flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Join Telegram
            </Button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;