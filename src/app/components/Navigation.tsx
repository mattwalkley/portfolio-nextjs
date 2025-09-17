"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 88);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-nav') && !target.closest('.mobile-menu-button')) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        {/* Logo and Name */}
        <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
          <svg
            width="auto"
            height="28"
            viewBox="0 0 68 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.2623 36L68 1.68465e-06L1.3877e-08 3.8147e-06L46.2623 36Z"
              fill="#8FA1B3"
            />
            <path
              d="M21.5666 36L3.14722e-06 -3.26476e-05L68 1.14441e-05L21.5666 36Z"
              fill="white"
            />
          </svg>
          <span className={`nav-name ${isScrolled ? "nav-name-visible" : ""}`}>
            Matt Walkley
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <Link
            href="https://linkedin.com/in/matt-walkley/"
            target="_blank"
            className="nav-link"
          >
            LinkedIn
          </Link>
          <Link href="/" className="nav-link">
            Resume
          </Link>
          <a href="mailto:matthew.walkley@gmail.com" className="btn btn-nav">
            Let's connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <Link
            href="https://linkedin.com/in/matt-walkley/"
            target="_blank"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            LinkedIn
          </Link>
          <Link
            href="/"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Resume
          </Link>
          <a
            href="mailto:matthew.walkley@gmail.com"
            className="btn btn-mobile"
            onClick={closeMobileMenu}
          >
            Let's connect
          </a>
        </div>
      </div>
    </nav>
  );
}
