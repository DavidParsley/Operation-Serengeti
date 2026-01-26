import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1f1301] to-[#080808] text-[#f9f5ef] font-serif pt-12 pb-8 px-6 md:px-16 font-[Playfair Display]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Column 1 - About */}
        <div>
          <h2 className="text-xl font-bold mb-4 tracking-wider uppercase text-[#d2a679]">
            Grand Line Safaris
          </h2>
          <p className="leading-6 text-[#e8dfd1] font-sans font-light">
            Grand Line Safaris curates transformative journeys through Africa’s
            wild heart — where elegance, legacy, and discovery meet.
          </p>
        </div>

        {/* Column 2 - Explore */}
        <div>
          <h2 className="text-xl font-bold mb-4 tracking-wider uppercase text-[#d2a679]">
            Explore
          </h2>
          <ul className="space-y-2 text-[#e8dfd1]">
            {["Destinations", "Newsletter", "Blog", "Gallery", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#d2a679] hover:underline underline-offset-4 transition-all"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 tracking-wider uppercase text-[#d2a679]">
            Follow Us
          </h2>
          <ul className="space-y-3 text-[#e8dfd1]">
            <li>
              <a
                href="https://facebook.com/grandline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grand Line Safaris on Facebook"
                className="flex items-center gap-2 hover:text-[#d2a679] transition-all"
              >
                <FaFacebookF /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/grandline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grand Line Safaris on Instagram"
                className="flex items-center gap-2 hover:text-[#d2a679] transition-all"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/grandline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grand Line Safaris on X"
                className="flex items-center gap-2 hover:text-[#d2a679] transition-all"
              >
                <FaXTwitter /> <span>X (Twitter)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 tracking-wider uppercase text-[#d2a679]">
            Contact
          </h2>
          <ul className="space-y-2 text-[#e8dfd1] font-sans">
            <li>
              <a
                href="tel:+254701020304"
                className="hover:text-[#d2a679] transition"
              >
                Phone: +254 701 020 304
              </a>
            </li>
            <li>
              <a
                href="mailto:info@grandlinesafaris.com"
                className="hover:text-[#d2a679] transition"
              >
                Email: info@grandlinesafaris.com
              </a>
            </li>
            <li>Nairobi, Kenya 00100</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3b3026] mt-10 pt-6 text-sm text-[#b5ab9a] flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
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

        <div className="mt-2 md:mt-0">
          <a
            href="https://davidparsley.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d2a679] transition"
          >
            {/* Designed & Developed by David Parsley */}
          </a>
        </div>
      </div>
    </footer>
  );
}
