// Publications.jsx
import { myPublications } from "../constants";
import { PublicationCard } from "../components/PublicationCard";
import { BackgroundBeams } from "../components/background-beams";

export function Publications() {
  return (
    <section className="relative flex h-[1000px] w-full flex-col p-15 pt-20">
      {/* Background Beams */}
       <div className="absolute inset-0 z-0">
            <BackgroundBeams />
       </div>


      {/* Foreground content */}
      <div className="relative z-10">
        <h2 className="mb-8 ml-8 text-center text-4xl font-bold text-white">
          My Publications
        </h2>
        <div className="flex flex-col gap-5 z-10">
          {myPublications.map((pub, idx) => (
            <PublicationCard key={idx} {...pub} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
