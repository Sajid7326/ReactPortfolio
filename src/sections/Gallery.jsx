const Gallery = () => {

  // Importing from public folder (no need for import statements, just paths)
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
  ];

  return (
    <section id="gallery" className="py-25 w-full flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-white">
        Gallery
      </h1>

      <p className="text-sm text-neutral-400 text-center mt-2 max-w-lg">
        A glimpse into moments I've captured throughout the years.
      </p>

      {/* Hover Expand Strip */}
      <div className="flex items-center gap-2 h-[380px] w-full max-w-5xl mt-13 mx-auto overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group flex-grow transition-all w-60 rounded-lg overflow-hidden h-[380px] duration-500 hover:w-full cursor-pointer"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
