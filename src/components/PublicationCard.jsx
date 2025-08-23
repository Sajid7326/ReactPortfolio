import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
function cn(...classes) {
  return twMerge(classes.filter(Boolean).join(" "));
}

// 📱 Mobile Card
const PublicationCardMobile = ({
  title,
  authors,
  venue,
  year,
  link,
  delay,
  mobileWidth,
  mobileFont,
  mobileSpace,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={twMerge(
        "mx-auto rounded-xl bg-gray-800 shadow-lg transition hover:scale-[102%] hover:shadow-xl block md:hidden",
        mobileWidth,
        mobileSpace
      )}
    >
      <h3 className={cn("font-semibold text-white", mobileFont.title)}>{title}</h3>
      <p className={cn("text-gray-300 mt-1", mobileFont.authors)}>{authors}</p>
      <p className={cn("text-gray-400 mt-1 italic", mobileFont.venue)}>{venue}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-2 inline-block rounded-lg bg-cyan-700 px-3 py-1 font-medium text-white transition hover:bg-cyan-900",
            mobileFont.link
          )}
        >
          View Publication
        </a>
      )}
    </motion.div>
  );
};

// 💻 Desktop Card
const PublicationCardDesktop = ({
  title,
  authors,
  venue,
  year,
  link,
  delay,
  desktopWidth,
  desktopFont,
  desktopSpace,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={twMerge(
        "mx-auto rounded-xl bg-gray-800 shadow-lg transition hover:scale-[102%] hover:shadow-xl hidden md:block",
        desktopWidth,
        desktopSpace
      )}
    >
      <h3 className={cn("font-semibold text-white", desktopFont.title)}>{title}</h3>
      <p className={cn("text-gray-300 mt-1", desktopFont.authors)}>{authors}</p>
      <p className={cn("text-gray-400 mt-1 italic", desktopFont.venue)}>{venue}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-3 inline-block rounded-lg bg-cyan-700 px-3 py-1 font-medium text-white transition hover:bg-cyan-900",
            desktopFont.link
          )}
        >
          View Publication
        </a>
      )}
    </motion.div>
  );
};

// 🔥 Unified Responsive Component
export const ResponsivePublicationCard = ({
  mobileWidth = "w-full max-w-[350px] p-3",
  desktopWidth = "w-full max-w-[900px] p-5",
  mobileSpace = "space-y-1",
  desktopSpace = "space-y-2",
  mobileFont = {
    title: "text-lg",
    authors: "text-sm",
    venue: "text-xs",
    link: "text-xs",
  },
  desktopFont = {
    title: "text-2xl",
    authors: "text-base",
    venue: "text-sm",
    link: "text-sm",
  },
  ...props
}) => {
  return (
    <>
      <PublicationCardMobile
        {...props}
        mobileWidth={mobileWidth}
        mobileFont={mobileFont}
        mobileSpace={mobileSpace}
      />
      <PublicationCardDesktop
        {...props}
        desktopWidth={desktopWidth}
        desktopFont={desktopFont}
        desktopSpace={desktopSpace}
      />
    </>
  );
};

// ✅ Alias exports
export { 
  ResponsivePublicationCard as PublicationCard, 
  ResponsivePublicationCard as PublicationCardResponsive 
};
