// src/components/Navbar/RegionMenu.jsx
import React, { useState } from "react";
import { regions } from "../../data/regions";
import { countries } from "../../data/countries";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RegionMenu = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="relative flex flex-col gap-2 text-gray-700">
      {regions.map((region) => (
        <div
          key={region.region}
          className="relative group"
          onMouseEnter={() => setHoveredRegion(region.region)}
          onMouseLeave={() => setHoveredRegion(null)}
        >
          <div className="cursor-pointer hover:text-primary font-medium transition-colors">
            {region.region}
          </div>

          <AnimatePresence>
            {hoveredRegion === region.region && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg py-2 px-3 w-40"
              >
                {region.countries.map((code) => (
                  <Link
                    key={code}
                    to={`/destinations/${code}`}
                    className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary rounded"
                  >
                    {countries[code].name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default RegionMenu;
