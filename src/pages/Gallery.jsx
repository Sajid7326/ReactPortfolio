import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, AnimatePresence } from "motion/react";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const itemData = [
    {
      img: "/gallery/img1.jpg",
      title: "Gateway to Green Heaven",
      location: "CUET Campus, Chittagong",
    },
    {
      img: "/gallery/img2.jpg",
      title: "Through the Mangrove Channel",
      location: "Rataegul Swamp Forest, Bangladesh",
    },
    {
      img: "/gallery/img3.jpg",
      title: "Calm Before the Horizon",
      location: "Bay of Bengal",
    },
    {
      img: "/gallery/img4.jpg",
      title: "Rag Concert",
      location: "CUET Campus, Chittagong",
    },
    {
      img: "/gallery/img5.jpg",
      title: "The Shining Star",
      location: "Saint Martin's Island",
    },
    {
      img: "/gallery/img6.jpg",
      title: "Golden Hour by the Sea",
      location: "Cox's Bazar",
    },
    {
      img: "/gallery/img7.jpeg",
      title: "Spring in Bloom",
      location: "Institute of Water Modelling, Dhaka",
    },
    {
      img: "/gallery/img8.jpeg",
      title: "Evening Glow",
      location: "Dhaka, Bangladesh",
    },
    {
      img: "/gallery/img9.jpeg",
      title: "Reflections at Kaptai Lake",
      location: "Kaptai",
    },
    {
      img: "/gallery/img10.jpg",
      title: "",
      location: "Cox's Bazar",
    },
    {
      img: "/gallery/img11.jpg",
      title: "Moonrise Over the City",
      location: "Kodala, Chittagong",
    },
    {
      img: "/gallery/img12.jpg",
      title: "Quiet Waters",
      location: "Bhatiary, Chittagong",
    },
    {
      img: "/gallery/img13.jpg",
      title: "Green Hills and Blue Skies",
      location: "Kaptai",
    },
  ];

  return (
    <section id="gallery" className="py-24 w-full flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-slate-900 dark:text-white">
        Gallery
      </h1>

      <p className="text-lg text-neutral-500 dark:text-neutral-400 text-center mt-2 max-w-lg">
        A visual diary of travel and moments in between—photography is one of my biggest hobbies, and through it, I capture the stories that matter to me.
      </p>

      {/* Image Grid */}
      <div className="mt-10 w-full px-4">
        <ImageList
          variant="masonry"
          cols={isMobile ? 1 : 3}
          gap={12}
          sx={{
            width: "100%",
            maxWidth: "1100px",
            mx: "auto",
          }}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => setActiveImage(item)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 12,
                  display: "block",
                }}
              />

              <ImageListItemBar
                sx={{
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                subtitle={item.location}
                position="top"
                actionIcon={
                  <IconButton sx={{ color: "white" }} aria-label="view">
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="
              fixed inset-0 z-[999]
              bg-black/80 backdrop-blur-md
              flex items-center justify-center px-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="
                w-full max-w-5xl
                rounded-2xl
                bg-white dark:bg-neutral-900
                border border-slate-200 dark:border-white/10
                p-4
                shadow-2xl
              "
            >
              <div className="flex items-center justify-center w-full h-[80vh]">
                <img
                  src={activeImage.img}
                  alt={activeImage.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60">
                  {activeImage.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;