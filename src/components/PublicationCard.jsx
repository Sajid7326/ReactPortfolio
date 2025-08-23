import { motion } from "framer-motion";



// PublicationCard.jsx
export const PublicationCard = ({ title, authors, venue, year, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[920px] mx-auto rounded-xl bg-gray-800 p-5 shadow-lg transition hover:scale-[102%] hover:shadow-xl"
    >
      <h3 className="text-2xl font-semibold text-white text-justify">{title}</h3>
      <p className="text-sm text-gray-300 mt-1">{authors}</p>
      <p className="text-xs text-gray-400 mt-1 italic">{venue}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-lg bg-cyan-700 px-3 py-1 text-xs font-medium text-white transition hover:bg-cyan-900"
        >
          View Publication
        </a>
      )}
    </motion.div>
  );
};
