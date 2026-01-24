import { ArcTimeline, EDUCATION_TIMELINE } from "../components/arc-timeline";

export default function EducationTimeline() {
  return (
    <section className="p-10 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-6xl font-bold mb-15 ml-5 text-center text-white">
        Education
      </h2>
      <ArcTimeline data={EDUCATION_TIMELINE} />
    </section>
  );
}
