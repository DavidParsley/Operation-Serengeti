import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { getImageUrl } from "../../utils";
import DropdownMenu from "./DropdownMenu";
import { regions } from "../../data/regions";

const navItems = [
  { name: "Destinations", type: "dropdown" },
  { name: "Safaris", type: "dropdown" },
  { name: "Why Us", type: "dropdown" },
  { name: "Gallery", to: "/gallery", type: "link" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      if (!isOpen) setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const isSolid = scrolled || isOpen || isHovered;

  const handleDropdownEnter = (menu) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header
      className="fixed w-full z-40 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Bar */}
      <div
        className={classNames(
          "w-full text-sm px-4 sm:px-6 lg:px-10 transition-all duration-500 flex items-center justify-between",
          isSolid
            ? "bg-white/95 backdrop-blur-sm shadow-sm h-14"
            : "bg-transparent text-white h-16",
        )}
      >
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4 min-w-0 group">
          <Link to="/" className="flex-shrink-0 relative">
            <img
              src={getImageUrl("Navbar/elephant.png")}
              className="h-9 w-auto transition-transform duration-500 ease-out group-hover:scale-110"
              alt="Elephant Logo"
            />
            {/* Soft gold glow */}
            <span className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition bg-[#d2a679]/40"></span>
          </Link>

          <Link
            to="/"
            className={classNames(
              "relative font-[Playfair Display] font-semibold text-lg sm:text-xl tracking-[0.28em] uppercase whitespace-nowrap transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#d2a679] after:transition-all after:duration-500 hover:after:w-full",
              isSolid ? "text-[#2d1b00]" : "text-white",
            )}
          >
            Grand Line Safaris
          </Link>
        </div>

        {/* Right: Contact & CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img
              src={getImageUrl("Navbar/phone.png")}
              className="h-4 w-auto"
              alt="Phone icon"
            />
            <a
              href="tel:+254701020202"
              className={classNames(
                "text-inherit no-underline transition-colors duration-100",
                isSolid ? "text-[#2d1b00]" : "text-white",
              )}
            >
              +254 701 020 202
            </a>
          </div>
          <Link
            to="/contact"
            className={classNames(
              "flex items-center gap-2 font-medium hover:underline tracking-wider transition",
              isSolid ? "text-[#d2a679]" : "text-white",
            )}
          >
            <img
              src={getImageUrl("Navbar/email.png")}
              className="h-4 w-auto"
              alt="Email icon"
            />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden absolute right-4 top-4 z-50">
          <button
            className={classNames(
              "p-2 focus:outline-none",
              isSolid ? "text-[#2d1b00]" : "text-white",
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl z-40 transition-all duration-300">
          {!activeMobileDropdown ? (
            // MAIN MOBILE MENU
            <div className="px-5 pt-5 pb-6 space-y-4">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      className="w-full flex justify-between items-center text-[#2d1b00] font-medium text-base tracking-wide pb-2 border-b border-gray-200 last:border-0 hover:text-[#d2a679] transition-colors"
                      onClick={() =>
                        setActiveMobileDropdown(item.name.toLowerCase())
                      }
                    >
                      {item.name}
                      <span className="ml-2 text-sm">▶</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to || "#"}
                    className="block pb-2 text-[#2d1b00] hover:text-[#d2a679] text-base font-medium tracking-wide border-b border-gray-200 last:border-0 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}

              {/* CTA Buttons */}
              <div className="space-y-3 pt-3">
                <button
                  className="w-full bg-gradient-to-r from-[#d2a679] to-[#b08b57] text-[#2d1b00] px-4 py-2 rounded-md font-semibold tracking-wide hover:opacity-95 transition transform hover:scale-105 shadow-sm text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Plan Your Journey
                </button>
                <button
                  className="w-full border border-[#d2a679] text-[#d2a679] px-4 py-2 rounded-md font-semibold tracking-wide hover:bg-[#d2a679] hover:text-[#2d1b00] transition transform hover:scale-105 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Request Brochure
                </button>
              </div>

              {/* Contact Info Side by Side */}
              <div className="flex justify-between items-center pt-5 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <img
                    src={getImageUrl("Navbar/phone.png")}
                    className="h-4 w-auto"
                    alt="Phone icon"
                  />
                  <a
                    href="tel:+254701020202"
                    className="text-sm font-medium hover:underline text-[#2d1b00]"
                  >
                    +254 701 020 202
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center space-x-2 text-[#d2a679] font-medium text-sm hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={getImageUrl("Navbar/email.png")}
                    className="h-4 w-auto"
                    alt="Email icon"
                  />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          ) : (
            // FULL-SCREEN DROPDOWN VIEW
            <div className="px-5 pt-5 pb-6 min-h-[70vh] transition-all duration-300">
              {/* Back button */}
              <button
                onClick={() => setActiveMobileDropdown(null)}
                className="flex items-center text-[#2d1b00] font-semibold mb-4 hover:text-[#d2a679] transition-colors"
              >
                <span className="mr-2">←</span> Back
              </button>

              {/* Destinations / Safaris / Why Us Content */}
              {activeMobileDropdown === "destinations" && (
                <div className="space-y-3">
                  {/* Example region: East Africa */}
                  <div className="border-b border-gray-200">
                    <button
                      className="w-full flex justify-between items-center px-3 py-2 text-[#2d1b00] font-medium hover:text-[#d2a679] transition-colors"
                      onClick={() =>
                        setMobileDropdowns((prev) => ({
                          ...prev,
                          eastafrica: !prev.eastafrica,
                        }))
                      }
                    >
                      East Africa
                      <span className="ml-2 text-sm">
                        {mobileDropdowns.eastafrica ? "▲" : "▼"}
                      </span>
                    </button>
                    {mobileDropdowns.eastafrica && (
                      <div className="pl-4 mt-2 space-y-1">
                        {/* Country list */}
                        {regions
                          .find((r) => r.region === "East Africa")
                          ?.countries.map((country) => (
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
                </div>
              )}

              {activeMobileDropdown === "safaris" && (
                <div className="flex justify-center items-center h-full py-20">
                  <span className="text-[#b08b57] italic font-medium text-center text-lg">
                    Coming soon...
                  </span>
                </div>
              )}

              {activeMobileDropdown === "why us" && (
                <div className="space-y-3">
                  <button
                    className="w-full flex justify-between items-center px-3 py-2 text-[#2d1b00] font-medium hover:text-[#d2a679] transition-colors"
                    onClick={() =>
                      setMobileDropdowns((prev) => ({
                        ...prev,
                        whyus: !prev.whyus,
                      }))
                    }
                  >
                    Why Us
                    <span className="ml-2 text-sm">
                      {mobileDropdowns.whyus ? "▲" : "▼"}
                    </span>
                  </button>
                  {mobileDropdowns.whyus && (
                    <div className="pl-4 mt-2 space-y-1">
                      {[
                        {
                          name: "Grand Line Blog",
                          path: "/blog",
                          image: "Navbar/blog.png",
                        },
                        {
                          name: "Our Team",
                          path: "/our-team",
                          image: "Navbar/group.png",
                        },
                        {
                          name: "Testimonials",
                          path: "/testimonials",
                          image: "Navbar/review.png",
                        },
                      ].map((link) => (
                        <Link
                          key={link.name}
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
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Desktop Navbar */}
      <nav
        className={classNames(
          "hidden md:block transition-all duration-500 relative",
          isSolid ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
        )}
      >
        <div className="max-w-screen-xl mx-auto px-16 lg:px-28">
          <div
            className="flex justify-between items-center"
            style={{ height: "64px" }}
          >
            <div className="flex items-center space-x-6 relative">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      handleDropdownEnter(item.name.toLowerCase())
                    }
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={classNames(
                        "px-2 py-1 text-base font-medium tracking-wider uppercase flex items-center gap-1 transition-colors duration-300",
                        isSolid
                          ? "text-[#2d1b00] hover:text-[#d2a679]"
                          : "text-white hover:text-[#d2a679]",
                      )}
                    >
                      {item.name}
                      <span className="text-xs transform translate-y-[1px]">
                        ▼
                      </span>
                    </button>
                    <div
                      className={classNames(
                        "absolute top-full left-0 transition-all duration-300",
                        activeDropdown === item.name.toLowerCase()
                          ? "opacity-100 visible"
                          : "opacity-0 invisible",
                      )}
                      onMouseEnter={() =>
                        handleDropdownEnter(item.name.toLowerCase())
                      }
                      onMouseLeave={handleDropdownLeave}
                    >
                      <DropdownMenu
                        menuType={item.name.toLowerCase()}
                        isOpen={activeDropdown === item.name.toLowerCase()}
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      "px-2 py-1 text-base font-medium tracking-wider uppercase transition-colors duration-300",
                      isSolid
                        ? "text-[#2d1b00] hover:text-[#d2a679]"
                        : "text-white hover:text-[#d2a679]",
                    )}
                  >
                    {item.name}
                  </Link>
                ),
              )}

              {/* CTA Buttons */}
              <div className="flex space-x-3 ml-4">
                <button className="bg-gradient-to-r from-[#d2a679] to-[#b08b57] text-[#2d1b00] px-4 py-1.5 rounded-md text-sm font-semibold tracking-wide hover:opacity-95 transition transform hover:scale-105 shadow-sm">
                  Plan Your Journey
                </button>
                <button
                  className={classNames(
                    "border border-[#d2a679] px-4 py-1.5 rounded-md text-sm font-semibold tracking-wide transition transform hover:scale-105 shadow-sm",
                    isSolid ? "text-[#2d1b00]" : "text-white",
                    "hover:bg-[#d2a679] hover:text-[#2d1b00]",
                  )}
                >
                  Request Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
