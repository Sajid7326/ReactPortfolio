import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as maptiler from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function MapModal({ open, onClose }) {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  const lat = 23.763111;
  const lon = 90.441417;
  const key = "c4JuedwLk3rvS01R7W3j";

  useEffect(() => {
    if (!open) return;

    maptiler.config.apiKey = key;

    // Always create a fresh map
    mapInstance.current = new maptiler.Map({
      container: mapContainer.current,
      style: maptiler.MapStyle.STREETS,
      center: [lon, lat],
      zoom: 16,
    });

    // marker with custom asset icon
    const marker = document.createElement("img");
    marker.src = "/assets/marker.png";
    marker.style.width = "28px";
    marker.style.height = "28px";

    new maptiler.Marker({ element: marker })
      .setLngLat([lon, lat])
      .addTo(mapInstance.current);

    // cleanup on modal close
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-[90vw] max-w-3xl h-[70vh] rounded-xl overflow-hidden bg-black"
      >
        <div ref={mapContainer} className="w-full h-full" />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-1 text-sm rounded bg-white/10 border border-white/20 text-white hover:bg-white/20"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
