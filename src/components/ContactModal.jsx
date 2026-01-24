import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ close }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_wt9uxfb",
        "template_c1zwjwn",
        {
          from_name: formData.name,
          to_name: "Syed Shoabul Islam",
          from_email: formData.email,
          message: formData.message,
        },
        "gnQe11P3ENuAVw70v"
      );

      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      close();
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }

    setSending(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#101215] text-white p-6 rounded-2xl w-[350px] max-w-full border border-white/10 shadow-xl">
        <h2 className="text-xl font-semibold">Let's Talk</h2>
        <p className="text-sm text-white/60 mt-2">
          Send me a message and I’ll get back soon.
        </p>

        <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="bg-black/30 border border-white/20 rounded-md px-3 py-2 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="bg-black/30 border border-white/20 rounded-md px-3 py-2 text-sm"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Your message..."
            required
            onChange={handleChange}
            className="bg-black/30 border border-white/20 rounded-md px-3 py-2 text-sm"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-white text-black font-medium hover:bg-gray-300 transition"
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </form>

        <button
          onClick={close}
          className="mt-3 text-xs text-white/40 hover:text-white transition w-full text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
