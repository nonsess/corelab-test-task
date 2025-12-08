"use client";

import { useState } from "react";
import Container from "./Container";
import Image from "next/image";

import { MENU_ITEMS } from "@/constants/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky z-50 left-0 top-0 text-white py-4 bg-background">
      <Container className="flex justify-between items-end">
        <div className="flex items-end">
            <a href="#">
                <Image
                    src="/logotype.svg"
                    alt="Логотип"
                    width={0}
                    height={0}
                    style={{ width: 'auto', height: 'auto' }}
                    className="h-8 w-auto"
                />
            </a>
          <a 
            href="tel:+78006003538" 
            className="text-[#00E4F0] ml-6 hover:opacity-80 transition-opacity hidden lg:block"
          >
            + 7 (800) 600-35-38
          </a>
        </div>

        <ul className="uppercase items-end space-x-4 hidden lg:flex">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`
                  hover:text-[#00E4F0] transition-colors
                  ${item.isHighlighted ? "text-[#00E4F0] hover:opacity-80" : ""}
                `}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
          onClick={toggleMenu}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          <span className={`
            block w-6 h-0.5 bg-[#00E4F0] transition-all duration-300 ease-out
            ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}
          `}></span>
          <span className={`
            block w-6 h-0.5 bg-[#00E4F0] transition-all duration-300 ease-out my-1
            ${isMenuOpen ? "opacity-0" : "opacity-100"}
          `}></span>
          <span className={`
            block w-6 h-0.5 bg-[#00E4F0] transition-all duration-300 ease-out
            ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}
          `}></span>
        </button>

        <div className={`
          fixed inset-0 bg-background z-40 transition-all duration-300 ease-out
          lg:hidden flex flex-col
          ${isMenuOpen 
            ? "opacity-100 visible pointer-events-auto" 
            : "opacity-0 invisible pointer-events-none"
          }
        `}>
          <div className={`
            flex-1 pt-24 px-4 pb-8 overflow-y-auto
            transform transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-y-0" : "-translate-y-4"}
          `}>
            <ul className="flex flex-col space-y-6">
              {MENU_ITEMS.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`
                      block text-xl uppercase hover:text-[#00E4F0] transition-colors py-2
                      ${item.isHighlighted ? "text-[#00E4F0]" : ""}
                    `}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              
              <li className="pt-8 mt-8 border-t border-gray-700">
                <a 
                  href="tel:+78006003538" 
                  className="text-[#00E4F0] text-xl hover:opacity-80 transition-opacity block"
                  onClick={closeMenu}
                >
                  + 7 (800) 600-35-38
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}