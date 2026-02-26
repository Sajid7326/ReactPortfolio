import ExpandableEducation from "../components/ExpandableEducation";

export default function Education() {
  return (
    <section className="pt-28 pb-20 min-h-screen bg-white dark:bg-black transition-colors">
      <h2 className="text-center text-4xl font-semibold mb-10 text-slate-900 dark:text-white">
        Education
      </h2>
      <ExpandableEducation />
    </section>
  );
}