'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-transparent md:bg-white/80 md:dark:bg-black/80 md:backdrop-blur-lg md:shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Services & Experience
            </a>
            {/* <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </a> */}
            <a
              href="#tech-stack"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('tech-stack');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Technical Skill
            </a>
            {/* <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('education');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Education
            </a> */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
