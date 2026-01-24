import { useEffect, useRef } from "react";
import * as maptiler from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function MiniMap({ lat, lon, zoom = 14.8 }) {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || instanceRef.current) return;

    maptiler.config.apiKey = "c4JuedwLk3rvS01R7W3j";

    const map = new maptiler.Map({
      container: mapRef.current,
      style: maptiler.MapStyle.STREETS,
      center: [lon, lat],
      zoom,
      interactive: true, // mini interactive
    });

    instanceRef.current = map;

    // Custom marker element
    const el = document.createElement("img");
    el.src = "/assets/marker.png";
    el.style.width = "28px";
    el.style.height = "28px";

    new maptiler.Marker({ element: el })
      .setLngLat([lon, lat])
      .addTo(map);

    return () => map.remove();
  }, [lat, lon, zoom]);

  return (
    <div ref={mapRef} className="w-full h-full rounded-xl overflow-hidden" />
  );
}
