import { ArcTimeline, EDUCATION_TIMELINE } from "../components/arc-timeline";

export default function EducationTimeline() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-10 ml-4 text-center text-white">
        Education
      </h2>
      <ArcTimeline data={EDUCATION_TIMELINE} />
    </section>
  );
}
