import { myPublications } from "../constants";
import { PublicationCard } from "../components/PublicationCard";
import { BackgroundBeams } from "../components/background-beams";

const Publications = () => {
  return (
    <section className="relative w-full pt-28 pb-20 px-6 md:px-20">
      {/* Background Beams */}
      <div className="absolute inset-0 z-5">
        <BackgroundBeams />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          Publications
        </h2>

        <div className="flex flex-col gap-5">
          {myPublications.map((pub, idx) => (
            <PublicationCard key={idx} {...pub} delay={idx * 0.4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
