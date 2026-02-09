import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  professionalWork,
  memberships,
  extracurricular,
} from "../constants/workCards";

const Experiences = () => {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-transparent">
      
      {/* ===== SECTION TITLE ===== */}
      <h2
        className="
          text-center
          text-4xl md:text-5xl
          font-bold
          text-slate-900
          dark:text-white
          mb-16
        "
      >
        Experience
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* ===== PROFESSIONAL EXPERIENCE ===== */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Professional Experience
          </h3>
          <HoverEffect items={professionalWork} />
        </div>

        {/* ===== PROFESSIONAL MEMBERSHIP ===== */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Professional Membership & Roles
          </h3>
          <HoverEffect items={memberships} />
        </div>

        {/* ===== EXTRACURRICULAR ACTIVITIES ===== */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Extracurricular Activities
          </h3>
          <HoverEffect items={extracurricular} />
        </div>

      </div>
    </section>
  );
};

export default Experiences;
