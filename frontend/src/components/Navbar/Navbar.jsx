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
            ? "bg-white/90 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.06)] h-14"
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
              "relative font-[Playfair Display] font-medium text-sm sm:text-xl tracking-[0.28em] uppercase whitespace-nowrap transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#d2a679] after:transition-all after:duration-500 hover:after:w-full",
              isSolid ? "text-[#2d1b00]" : "text-white",
            )}
          >
            Grand Line Safaris
          </Link>
        </div>

        {/* Right: Contact & CTA */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Phone */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="w-8 h-8 rounded-full bg-[#d2a679]/10 flex items-center justify-center transition group-hover:bg-[#d2a679]/20">
              <img
                src={getImageUrl("Navbar/phone.png")}
                className="h-4 w-auto"
                alt="Phone icon"
              />
            </span>
            <a
              href="tel:+254701020202"
              className={classNames(
                "relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#d2a679] after:transition-all after:duration-500 group-hover:after:w-full",
                isSolid ? "text-[#2d1b00]" : "text-white",
              )}
            >
              +254 701 020 202
            </a>
          </div>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className={classNames(
              "group flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 tracking-wide font-semibold text-sm",
              isSolid
                ? "border-[#d2a679] text-[#2d1b00] hover:bg-[#d2a679]/10"
                : "border-white/60 text-white hover:bg-white/10",
            )}
          >
            <span className="w-8 h-8 rounded-full bg-[#d2a679]/15 flex items-center justify-center transition group-hover:bg-[#d2a679]/30">
              <img
                src={getImageUrl("Navbar/email.png")}
                className="h-4 w-auto"
                alt="Email icon"
              />
            </span>
            <span className="relative after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-[#d2a679] after:transition-all after:duration-500 group-hover:after:w-full">
              Contact Concierge
            </span>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fffdf9] shadow-2xl z-40 transition-all duration-300 border-t border-[#e8dccb]">
          {!activeMobileDropdown ? (
            // MAIN MOBILE MENU
            <div className="px-6 pt-6 pb-7 space-y-5">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      className="w-full flex justify-between items-center text-[#2d1b00] font-[Playfair Display] text-[15px] tracking-widest uppercase pb-3 border-b border-[#eee2d3] hover:text-[#d2a679] transition-colors"
                      onClick={() =>
                        setActiveMobileDropdown(item.name.toLowerCase())
                      }
                    >
                      {item.name}
                      <span className="ml-2 text-xs tracking-normal">›</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to || "#"}
                    className="block pb-3 text-[#2d1b00] hover:text-[#d2a679] text-[15px] font-[Playfair Display] tracking-widest uppercase border-b border-[#eee2d3] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}

              {/* CTA Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  className="w-full bg-gradient-to-r from-[#d2a679] to-[#b08b57] text-[#2d1b00] px-4 py-2.5 rounded-lg font-semibold tracking-wider uppercase hover:opacity-95 transition transform hover:scale-[1.02] shadow-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Plan Your Journey
                </button>
                <button
                  className="w-full border border-[#d2a679] text-[#2d1b00] px-4 py-2.5 rounded-lg font-semibold tracking-wider uppercase hover:bg-[#d2a679] hover:text-[#2d1b00] transition transform hover:scale-[1.02] text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Request Brochure
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex justify-between items-center pt-6 border-t border-[#eee2d3] text-sm">
                <div className="flex items-center space-x-2">
                  <img
                    src={getImageUrl("Navbar/phone.png")}
                    className="h-4 w-auto opacity-80"
                    alt="Phone icon"
                  />
                  <a
                    href="tel:+254701020202"
                    className="font-medium tracking-wide text-[#2d1b00] hover:text-[#d2a679] transition"
                  >
                    +254 701 020 202
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center space-x-2 text-[#b08b57] font-semibold tracking-wide hover:text-[#d2a679] transition"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={getImageUrl("Navbar/email.png")}
                    className="h-4 w-auto opacity-80"
                    alt="Email icon"
                  />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          ) : (
            // FULL-SCREEN DROPDOWN VIEW
            <div className="px-6 pt-6 pb-7 min-h-[70vh] transition-all duration-300 bg-[#fffdf9]">
              {/* Back button */}
              <button
                onClick={() => setActiveMobileDropdown(null)}
                className="flex items-center text-[#2d1b00] font-[Playfair Display] tracking-widest uppercase mb-5 hover:text-[#d2a679] transition-colors text-sm"
              >
                <span className="mr-2 text-lg">←</span> Back
              </button>

              {/* Destinations */}
              {activeMobileDropdown === "destinations" && (
                <div className="space-y-4">
                  <div className="border-b border-[#eee2d3] pb-3">
                    <button
                      className="w-full flex justify-between items-center px-2 py-2 text-[#2d1b00] font-[Playfair Display] tracking-widest uppercase hover:text-[#d2a679] transition-colors text-sm"
                      onClick={() =>
                        setMobileDropdowns((prev) => ({
                          ...prev,
                          eastafrica: !prev.eastafrica,
                        }))
                      }
                    >
                      East Africa
                      <span className="ml-2 text-xs">
                        {mobileDropdowns.eastafrica ? "▲" : "▼"}
                      </span>
                    </button>

                    {mobileDropdowns.eastafrica && (
                      <div className="pl-3 mt-3 space-y-1">
                        {regions
                          .find((r) => r.region === "East Africa")
                          ?.countries.map((country) => (
                            <Link
                              key={country.name}
                              to={country.path}
                              className="flex justify-between items-center px-3 py-2 text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] rounded-lg transition text-sm tracking-wide"
                              onClick={() => setIsOpen(false)}
                            >
                              <span>{country.name}</span>
                              {country.image && (
                                <img
                                  src={getImageUrl(country.image)}
                                  className="h-5 w-5 object-cover rounded-sm ml-2 shadow-sm"
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

              {/* Safaris */}
              {activeMobileDropdown === "safaris" && (
                <div className="flex justify-center items-center h-full py-24">
                  <span className="text-[#b08b57] italic font-[Playfair Display] text-center text-lg">
                    Coming soon...
                  </span>
                </div>
              )}

              {/* Why Us */}
              {activeMobileDropdown === "why us" && (
                <div className="space-y-4">
                  <button
                    className="w-full flex justify-between items-center px-2 py-2 text-[#2d1b00] font-[Playfair Display] tracking-widest uppercase hover:text-[#d2a679] transition-colors text-sm"
                    onClick={() =>
                      setMobileDropdowns((prev) => ({
                        ...prev,
                        whyus: !prev.whyus,
                      }))
                    }
                  >
                    Why Us
                    <span className="ml-2 text-xs">
                      {mobileDropdowns.whyus ? "▲" : "▼"}
                    </span>
                  </button>

                  {mobileDropdowns.whyus && (
                    <div className="pl-3 mt-3 space-y-1">
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
                          className="flex justify-between items-center px-3 py-2 text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] rounded-lg transition text-sm tracking-wide"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{link.name}</span>
                          <img
                            src={getImageUrl(link.image)}
                            className="h-5 w-5 object-cover rounded-sm ml-2 shadow-sm"
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
          isSolid
            ? "bg-white/90 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
            : "bg-transparent",
        )}
      >
        <div className="max-w-screen-xl mx-auto px-16 lg:px-28">
          <div
            className="flex justify-between items-center"
            style={{ height: "64px" }}
          >
            <div className="flex items-center space-x-8 relative">
              {/* Nav Links */}
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
                        "group relative px-1 py-1 text-[0.82rem] font-semibold tracking-[0.22em] uppercase flex items-center gap-1 transition-all duration-300",
                        isSolid ? "text-[#2d1b00]" : "text-white",
                      )}
                    >
                      <span className="relative after:absolute after:left-0 after:-bottom-[3px] after:h-[1px] after:w-0 after:bg-[#d2a679] after:transition-all after:duration-500 group-hover:after:w-full">
                        {item.name}
                      </span>
                      <span className="text-[0.6rem] translate-y-[1px] opacity-70 group-hover:opacity-100 transition">
                        ▼
                      </span>
                    </button>

                    <div
                      className={classNames(
                        "absolute top-full left-0 transition-all duration-300",
                        activeDropdown === item.name.toLowerCase()
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2",
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
                      "group relative px-1 py-1 text-[0.82rem] font-semibold tracking-[0.22em] uppercase transition-all duration-300",
                      isSolid ? "text-[#2d1b00]" : "text-white",
                    )}
                  >
                    <span className="relative after:absolute after:left-0 after:-bottom-[3px] after:h-[1px] after:w-0 after:bg-[#d2a679] after:transition-all after:duration-500 group-hover:after:w-full">
                      {item.name}
                    </span>
                  </Link>
                ),
              )}

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4 ml-6">
                <button className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#d2a679] to-[#b08b57] px-5 py-2 text-[0.8rem] font-semibold tracking-wide text-[#2d1b00] shadow-[0_6px_18px_rgba(210,166,121,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_10px_28px_rgba(210,166,121,0.45)]">
                  Plan Your Journey
                </button>

                <button
                  className={classNames(
                    "relative rounded-full border px-5 py-2 text-[0.8rem] font-semibold tracking-wide transition-all duration-300 hover:scale-[1.04]",
                    isSolid
                      ? "border-[#d2a679] text-[#2d1b00] hover:bg-[#d2a679]/10"
                      : "border-white/70 text-white hover:bg-white/10",
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
