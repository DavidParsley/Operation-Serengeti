import React, { useState } from "react";
import { Link } from "react-router-dom";
import { regions } from "../../data/regions";
import { getImageUrl } from "../../utils";

export default function DropdownMenu({ menuType, isOpen, isMobile }) {
  const [activeRegion, setActiveRegion] = useState(null);

  if (!isOpen) return null;

  const getMenuContent = () => {
    switch (menuType) {
      case "destinations":
        if (isMobile) {
          // MOBILE VIEW: Full screen handled in Navbar, just inline expandable region lists
          return (
            <div className="space-y-3">
              {regions.map((region) => (
                <div key={region.region} className="border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 text-[#2d1b00] font-medium hover:text-[#d2a679] transition-colors"
                    onClick={() =>
                      setActiveRegion(
                        activeRegion === region.region ? null : region.region
                      )
                    }
                  >
                    {region.region}
                    <span className="ml-2 text-sm">
                      {activeRegion === region.region ? "▲" : "▼"}
                    </span>
                  </button>
                  {activeRegion === region.region && (
                    <div className="pl-4 mt-2 space-y-1">
                      {region.countries.map((country) => (
                        <Link
                          key={country.name}
                          to={country.path}
                          className="flex justify-between items-center px-3 py-2 text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] rounded-md transition"
                        >
                          <span>{country.name}</span>
                          {country.image && (
                            <img
                              src={getImageUrl(country.image)}
                              className="h-5 w-5 object-cover rounded-sm ml-2"
                              alt={country.name}
                            />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        } else {
          // DESKTOP VIEW: Original hover dropdown
          return (
            <div
              className="absolute left-0 mt-5 w-64 bg-white border border-[#e5e5e5] rounded-lg shadow-xl py-4 px-4 z-50 transition-all duration-200"
              onMouseLeave={() => setActiveRegion(null)}
            >
              {regions.map((region) => (
                <div key={region.region} className="relative group">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 text-left font-medium text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] rounded-md transition-all duration-150"
                    onMouseEnter={() => setActiveRegion(region.region)}
                  >
                    {region.region}
                    <svg
                      className="w-3.5 h-3.5 ml-2 text-[#b08b57] group-hover:translate-x-0.5 transition-transform duration-150"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {activeRegion === region.region && (
                    <div
                      className="absolute left-full top-0 ml-2 w-56 bg-white border border-[#e5e5e5] rounded-lg shadow-lg py-2 px-3 transition-all duration-150"
                      onMouseEnter={() => setActiveRegion(region.region)}
                    >
                      {region.countries.map((country) => (
                        <Link
                          key={country.name}
                          to={country.path}
                          className="flex items-center justify-between px-3 py-1.5 text-base font-medium text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] rounded-md transition-all duration-150"
                        >
                          <span>{country.name}</span>
                          {country.image && (
                            <img
                              src={getImageUrl(country.image)}
                              className="h-5 w-5 object-cover rounded-sm ml-2"
                              alt={`${country.name} icon`}
                            />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }

      case "why us":
        if (isMobile) {
          return (
            <div className="space-y-3">
              {[
                { name: "Grand Line Blog", path: "/blog", image: "Navbar/blog.png" },
                { name: "Our Team", path: "/our-team", image: "Navbar/group.png" },
                { name: "Testimonials", path: "/testimonials", image: "Navbar/review.png" },
              ].map((link) => (
                <div key={link.name} className="border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 text-[#2d1b00] font-medium hover:text-[#d2a679] transition-colors"
                    onClick={() =>
                      setActiveRegion(activeRegion === link.name ? null : link.name)
                    }
                  >
                    {link.name}
                    <span className="ml-2 text-sm">
                      {activeRegion === link.name ? "▲" : "▼"}
                    </span>
                  </button>
                  {activeRegion === link.name && (
                    <Link
                      to={link.path}
                      className="flex justify-between items-center px-3 py-2 text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] rounded-md transition"
                    >
                      <span>{link.name}</span>
                      <img
                        src={getImageUrl(link.image)}
                        className="h-5 w-5 object-cover rounded-sm ml-2"
                        alt={link.name}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          );
        } else {
          // DESKTOP VIEW: Original layout
          return (
            <div className="absolute left-0 mt-5 w-56 bg-white border border-[#e5e5e5] rounded-lg shadow-md py-3 px-3 z-50">
              {[
                { name: "Grand Line Blog", path: "/blog", image: "Navbar/blog.png" },
                { name: "Our Team", path: "/our-team", image: "Navbar/group.png" },
                { name: "Testimonials", path: "/testimonials", image: "Navbar/review.png" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#faf6f0] transition-all duration-150"
                >
                  <span className="text-sm font-medium text-[#2d1b00] hover:text-[#d2a679]">
                    {link.name}
                  </span>
                  {link.image && (
                    <img
                      src={getImageUrl(link.image)}
                      className="h-5 w-5 object-cover rounded-sm ml-2"
                      alt={`${link.name} icon`}
                    />
                  )}
                </Link>
              ))}
            </div>
          );
        }

      case "safaris":
        return (
          <div className="absolute left-0 mt-5 w-56 bg-white border border-[#e5e5e5] rounded-lg shadow-md py-3 px-3 z-50">
            <span className="block px-3 py-2 text-[#b08b57] italic font-medium text-center">
              Coming soon...
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  return getMenuContent();
}
