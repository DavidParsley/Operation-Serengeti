import React, { useState } from "react";
import { Link } from "react-router-dom";
import { regions } from "../../data/regions";
import { getImageUrl } from "../../utils";

export default function DropdownMenu({ menuType, isOpen, isMobile }) {
  const [activeRegion, setActiveRegion] = useState(null);

  if (!isOpen) return null;

  const panelBase =
    "bg-white/95 backdrop-blur-md border border-[#e9dfd2] rounded-xl shadow-[0_18px_45px_rgba(0,0,0,0.25)]";

  const itemBase =
    "w-full flex justify-between items-center px-3 py-2 text-left font-medium tracking-wide text-[#2d1b00] rounded-md transition-all duration-200 hover:text-[#d2a679] hover:bg-[#faf6f0]";

  const submenuBase =
    "bg-white border border-[#ede4d6] rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)]";

  const getMenuContent = () => {
    switch (menuType) {
      case "destinations":
        if (isMobile) {
          // MOBILE VIEW
          return (
            <div className="space-y-4">
              {regions.map((region) => (
                <div
                  key={region.region}
                  className="border-b border-[#eee4d6] pb-1 last:border-0"
                >
                  <button
                    className={`${itemBase}`}
                    onClick={() =>
                      setActiveRegion(
                        activeRegion === region.region ? null : region.region
                      )
                    }
                  >
                    <span>{region.region}</span>
                    <span className="ml-2 text-xs tracking-widest text-[#b08b57]">
                      {activeRegion === region.region ? "—" : "+"}
                    </span>
                  </button>

                  {activeRegion === region.region && (
                    <div className="pl-4 mt-2 space-y-1">
                      {region.countries.map((country) => (
                        <Link
                          key={country.name}
                          to={country.path}
                          className="group flex justify-between items-center px-3 py-2 rounded-md text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] transition-all"
                        >
                          <span className="tracking-wide text-sm">
                            {country.name}
                          </span>
                          {country.image && (
                            <img
                              src={getImageUrl(country.image)}
                              className="h-5 w-5 object-cover rounded-sm ml-2 opacity-80 group-hover:opacity-100 transition"
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
          // DESKTOP VIEW
          return (
            <div
              className={`absolute left-0 mt-6 w-64 ${panelBase} py-4 px-4 z-50`}
              onMouseLeave={() => setActiveRegion(null)}
            >
              {regions.map((region) => (
                <div key={region.region} className="relative group">
                  <button
                    className={`${itemBase}`}
                    onMouseEnter={() => setActiveRegion(region.region)}
                  >
                    <span>{region.region}</span>
                    <svg
                      className="w-3.5 h-3.5 ml-2 text-[#b08b57] group-hover:translate-x-0.5 transition-transform duration-200"
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
                      className={`absolute left-full top-0 ml-3 w-56 ${submenuBase} py-2 px-3`}
                      onMouseEnter={() => setActiveRegion(region.region)}
                    >
                      {region.countries.map((country) => (
                        <Link
                          key={country.name}
                          to={country.path}
                          className="group flex items-center justify-between px-3 py-1.5 text-sm font-medium tracking-wide text-[#2d1b00] rounded-md hover:text-[#d2a679] hover:bg-[#faf6f0] transition-all"
                        >
                          <span>{country.name}</span>
                          {country.image && (
                            <img
                              src={getImageUrl(country.image)}
                              className="h-5 w-5 object-cover rounded-sm ml-2 opacity-80 group-hover:opacity-100 transition"
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
            <div className="space-y-4">
              {[
                { name: "Grand Line Blog", path: "/blog", image: "Navbar/blog.png" },
                { name: "Our Team", path: "/our-team", image: "Navbar/group.png" },
                { name: "Testimonials", path: "/testimonials", image: "Navbar/review.png" },
              ].map((link) => (
                <div
                  key={link.name}
                  className="border-b border-[#eee4d6] pb-1 last:border-0"
                >
                  <button
                    className={`${itemBase}`}
                    onClick={() =>
                      setActiveRegion(activeRegion === link.name ? null : link.name)
                    }
                  >
                    <span>{link.name}</span>
                    <span className="ml-2 text-xs tracking-widest text-[#b08b57]">
                      {activeRegion === link.name ? "—" : "+"}
                    </span>
                  </button>

                  {activeRegion === link.name && (
                    <Link
                      to={link.path}
                      className="group flex justify-between items-center px-3 py-2 rounded-md text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] transition-all"
                    >
                      <span className="tracking-wide text-sm">{link.name}</span>
                      <img
                        src={getImageUrl(link.image)}
                        className="h-5 w-5 object-cover rounded-sm ml-2 opacity-80 group-hover:opacity-100 transition"
                        alt={link.name}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          );
        } else {
          // DESKTOP VIEW
          return (
            <div
              className={`absolute left-0 mt-6 w-56 ${panelBase} py-3 px-3 z-50`}
            >
              {[
                { name: "Grand Line Blog", path: "/blog", image: "Navbar/blog.png" },
                { name: "Our Team", path: "/our-team", image: "Navbar/group.png" },
                { name: "Testimonials", path: "/testimonials", image: "Navbar/review.png" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center justify-between py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#faf6f0]"
                >
                  <span className="text-sm font-medium tracking-wide text-[#2d1b00] group-hover:text-[#d2a679] transition-colors">
                    {link.name}
                  </span>
                  {link.image && (
                    <img
                      src={getImageUrl(link.image)}
                      className="h-5 w-5 object-cover rounded-sm ml-2 opacity-80 group-hover:opacity-100 transition"
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
          <div
            className={`absolute left-0 mt-6 w-56 ${panelBase} py-4 px-4 z-50`}
          >
            <span className="block text-center text-[#b08b57] italic font-medium tracking-wide">
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
