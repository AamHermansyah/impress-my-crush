import { motion as m } from "framer-motion"
import { useCallback, useRef, useState } from "react";
import Masonry from "react-masonry-css"

const breakpoints = {
  default: 4,
  1700: 5,
  1000: 4,
  800: 3,
  500: 2,
  250: 1
}

function Gallery() {
  const [popupDisplay, setPopupDisplay] = useState(false);
  const [srcImage, setSrcImage] = useState(null);
  // observer ref
  const observer = useRef();
  let mounted = true;

  const lastDataElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      const saveGames = JSON.parse(localStorage.getItem('saveGame')) || {};

      if (
        entries[0].isIntersecting &&
        mounted === false &&
        !saveGames.hasOwnProperty('gallery')
      ) {
        saveGames.gallery = true;
        localStorage.setItem('saveGame', JSON.stringify(saveGames));
        mounted = null;
      };

      if (mounted) mounted = false;
    })
    if (node) observer.current.observe(node);
  }, [mounted]);

  return (
    <m.section id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
      className="relative p-4 sm:p-10"
    >
      {popupDisplay && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4 z-10"
          onClick={(e) => {
            setPopupDisplay(false);
            setSrcImage(null);
          }}
        >
          <div
            id="popup-gallery"
            className="relative max-w-[800px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              onClick={(e) => {
                setPopupDisplay(false);
                setSrcImage(null);
              }}
              src="close-button.svg"
              alt="close-button"
              className="absolute top-0 right-0 w-[20px] sm:w-[40px] aspect-square object-cover cursor-pointer"
            />
            <img
              src={srcImage}
              alt={srcImage}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </m.div>
      )}
      <h1 className="text-center text-xl sm:text-2xl mb-2">
        Our Memories Gallery💕😍
      </h1>
      <Masonry id="gallery-container" className="flex gap-1" breakpointCols={breakpoints}>
        {Array.from({ length: 64 }).map((fill, index, arr) => {
          if (arr.length === index + 1) return (
            <div
              ref={lastDataElementRef}
              key={`image-gallery-${index + 1}`}
              className="cursor-pointer bg-black mt-1 rounded overflow-hidden group"
            >
              <img
                src={`gallery/${index + 1}.jpg`}
                alt={`our-image-${index + 1}`}
                loading="lazy"
                className="w-full group-hover:opacity-50 hover:cursor-zoom-in transition-all duration-200"
                onClick={(e) => {
                  setPopupDisplay(true);
                  setSrcImage(e.target.src);
                }}
              />
            </div>
          )

          return (
            <div
              key={`image-gallery-${index + 1}`}
              className="cursor-pointer bg-black mt-1 rounded overflow-hidden group"
            >
              <img
                src={`gallery/${index + 1}.jpg`}
                alt={`our-image-${index + 1}`}
                loading="lazy"
                className="w-full group-hover:opacity-50 hover:cursor-zoom-in transition-all duration-200"
                onClick={(e) => {
                  setPopupDisplay(true);
                  setSrcImage(e.target.src);
                }}
              />
            </div>
          )
        })}
      </Masonry>
    </m.section>
  )
}

export default Gallery