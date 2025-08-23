import Contact from "../sections/Contact";

export function ShineBorder({ children, shineColor }) {
  return (
    <div className="relative overflow-hidden max-w-md w-full mx-auto rounded-2xl">
      <div className="absolute inset-0 animate-pulse rounded-2xl" 
           style={{ background: `linear-gradient(90deg, ${shineColor.join(", ")})`, opacity: 0.2 }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function ContactShineBorder() {
  return (
    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <Contact />
    </ShineBorder>
  );
}
