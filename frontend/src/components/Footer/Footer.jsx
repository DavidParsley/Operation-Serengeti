import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1f1301] via-[#120b02] to-[#080808] text-[#f9f5ef] font-[Playfair Display] pt-14 pb-8 px-6 md:px-16 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,166,121,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Column 1 - About */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-[0.18em] uppercase text-[#d2a679]">
            Grand Line Safaris
          </h2>
          <p className="leading-7 text-[#e8dfd1] font-sans font-light">
            Grand Line Safaris curates transformative journeys through Africa’s
            wild heart — where elegance, legacy, and discovery meet.
          </p>
        </div>

        {/* Column 2 - Explore */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-[0.18em] uppercase text-[#d2a679]">
            Explore
          </h2>
          <ul className="space-y-2.5 text-[#e8dfd1]">
            {["Destinations", "Newsletter", "Blog", "Gallery", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 hover:text-[#d2a679] transition-colors"
                  >
                    <span className="h-[1px] w-3 bg-[#d2a679]/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    <span className="group-hover:tracking-wide transition-all duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-[0.18em] uppercase text-[#d2a679]">
            Follow Us
          </h2>
          <ul className="space-y-3 text-[#e8dfd1]">
            <li>
              <a
                href="https://facebook.com/grandline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grand Line Safaris on Facebook"
                className="group flex items-center gap-3 hover:text-[#d2a679] transition-colors"
              >
                <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#d2a679]/40 group-hover:bg-[#d2a679]/10 transition">
                  <FaFacebookF size={13} />
                </span>
                <span className="tracking-wide">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/grandline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grand Line Safaris on Instagram"
                className="group flex items-center gap-3 hover:text-[#d2a679] transition-colors"
              >
                <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#d2a679]/40 group-hover:bg-[#d2a679]/10 transition">
                  <FaInstagram size={13} />
                </span>
                <span className="tracking-wide">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/grandline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grand Line Safaris on X"
                className="group flex items-center gap-3 hover:text-[#d2a679] transition-colors"
              >
                <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#d2a679]/40 group-hover:bg-[#d2a679]/10 transition">
                  <FaXTwitter size={13} />
                </span>
                <span className="tracking-wide">X (Twitter)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-[0.18em] uppercase text-[#d2a679]">
            Contact
          </h2>
          <ul className="space-y-2.5 text-[#e8dfd1] font-sans">
            <li>
              <a
                href="tel:+254701020304"
                className="hover:text-[#d2a679] transition-colors"
              >
                +254 701 020 304
              </a>
            </li>
            <li>
              <a
                href="mailto:info@grandlinesafaris.com"
                className="hover:text-[#d2a679] transition-colors"
              >
                info@grandlinesafaris.com
              </a>
            </li>
            <li className="text-[#cbbfae]">Nairobi, Kenya 00100</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[#3b3026] mt-12 pt-6 text-sm text-[#b5ab9a] flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
          <span>
            © {new Date().getFullYear()} Grand Line Safaris — Luxury with Soul.
          </span>
          <a href="/privacy-policy" className="hover:text-[#d2a679] transition">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-[#d2a679] transition">
            Terms of Service
          </a>
        </div>

        <div>
          <a
            href="https://davidparsley.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8f8574] hover:text-[#d2a679] transition tracking-wide"
          >
            {/* Designed & Developed by David Parsley */}
          </a>
        </div>
      </div>
    </footer>
  );
}
