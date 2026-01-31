import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { useEffect } from "react";

const AboutProfileModal = ({ open, onClose }) => {
  // 🔒 LOCK BACKGROUND SCROLL
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* MODAL CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-3xl mx-4
          rounded-2xl
          bg-[#0b1220]/95 border border-white/10
          shadow-xl
          max-h-[80vh] overflow-y-auto
          p-6 md:p-8 pr-4
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/60 
                     hover:text-white text-sm"
        >
          ✕
        </button>

        <HeroHighlight>
              <div
                  className="
                      space-y-5
                      text-sm md:text-base
                      text-white/80 leading-relaxed
                      text-justify
                      break-words
                      hyphens-auto
                             "
              >
            <p>
             Syed Shoabul Islam is a <Highlight>Geographic Information System (GIS) Analyst</Highlight> at the Institute of Water Modelling (IWM). 
             He completed his <Highlight>Bachelor of Urban and Regional Planning (BURP) </Highlight> from the Chittagong University of Engineering & Technology (CUET) in August 2025. 
             His research interests focus on urban climate and risk assessment, and environmental analysis. He is especially interested in how spatial analytics, remote sensing, and multi-criteria analysis can be applied to examine the 
             interactions between physical hazards, urban form, infrastructure systems, and socio-environmental vulnerability, in support of resilient 
             and inclusive urban development.
            </p>

            <p>
              Shoabul has also contributed to international, peer-led initiative as a <Highlight>Research Assistant</Highlight> under the
              <Highlight>Tomorrow’s Cities Decision Support Environment (TCDSE) </Highlight>, led by
              University College London and the University of Edinburgh. Within this initiative, he worked across two core 
              modules—Future Visioning and Risk Agreement.
            </p>

            <p>
             In the <Highlight>Future Visioning</Highlight> module of the Tomorrow’s Cities Decision Support Environment (TCDSE), <Highlight>a people-centred participatory methodology  </Highlight>
             aimed at amplifying marginalised voices and articulating diverse social aspirations for more inclusive and equitable urban futures. 
             His involvement focused on understanding how community perspectives—captured through participatory techniques such as storytelling, 
            dream maping— to see how the marginalised people wants to see their homes in 2050. Through this process, Shoabul worked with approaches that 
             integrate social aspirations, spatial planning considerations, and policy relevance to support disaster risk reduction and risk-aware 
             urban development.
            </p>

            <p>
            Shoabul also engaged with the <Highlight>Risk Agreement</Highlight> module, which evaluates Urban Scenarios using multi-hazard impact modelling and 
            interactive risk dashboards. In this process, he supported marginalised stakeholder groups by using ArcGIS Dashboards to 
            <Highlight>communicate how disaster could affect the futures</Highlight> they had envisioned during the Future Visioning module. By visualising 
            hazard impacts, exposure patterns, and potential risk outcomes,he helped participants reflect on and reassess their proposed 
            scenarios in light of disaster consequences. Through this evidence-informed and participatory approach, he worked with methods that 
            encourage stakeholders to review development choices, consider necessary revisions, and engage in risk-informed and equitable urban 
            decision-making within real-world governance constraints.
            </p>
            
            <p>
                Shoabul has also worked as an <Highlight>Intern</Highlight> at Urban development directorate (UDD), under the Ministry of Housing and Public Works, Government of Bangladesh (GoB).
                During his internship, he has contributed to the drafting process of Bangladesh’s <Highlight>National Urbanization Policy </Highlight>
            </p>
            <p>
              Beyond academics and professional practice, he is highly interested in travel and photography,
              exploring cities through spatial narratives. He is also a die-hard
              supporter of <b>Real Madrid CF</b>.
            </p>

          </div>
        </HeroHighlight>
      </motion.div>
    </div>
  );
};

export default AboutProfileModal;
