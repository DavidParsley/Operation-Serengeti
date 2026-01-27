// src/components/Navbar/RegionMenu.jsx
import React, { useState } from "react";
import { regions } from "../../data/regions";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RegionMenu = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="relative flex flex-col gap-3 text-[#2d1b00]">
      {regions.map((region) => (
        <div
          key={region.region}
          className="relative group"
          onMouseEnter={() => setHoveredRegion(region.region)}
          onMouseLeave={() => setHoveredRegion(null)}
        >
          {/* Region Label */}
          <div className="cursor-pointer font-medium tracking-wide transition-colors duration-200 group-hover:text-[#d2a679] flex items-center gap-2">
            <span>{region.region}</span>
            <span className="text-xs text-[#b08b57] opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </div>

          {/* Floating Country Panel */}
          <AnimatePresence>
            {hoveredRegion === region.region && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute top-0 left-full ml-4 bg-white/95 backdrop-blur-md border border-[#eee4d6] shadow-[0_18px_45px_rgba(0,0,0,0.25)] rounded-xl py-3 px-3 w-44 z-50"
              >
                <div className="flex flex-col gap-1">
                  {region.countries.map((code) => (
                    <Link
                      key={code}
                      to={`/destinations/${code}`}
                      className="group flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium tracking-wide text-[#2d1b00] hover:text-[#d2a679] hover:bg-[#faf6f0] transition-all"
                    >
                      <span>{countries[code].name}</span>
                      <span className="text-xs text-[#b08b57] opacity-0 group-hover:opacity-100 transition">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default RegionMenu;
