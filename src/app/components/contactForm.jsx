"use client";
import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form redirection

    const form = e.target;
    const data = new FormData(form);

    // Optional: add any field validations here

    try {
      const res = await fetch("https://formsubmit.co/b15536329c37dd71d8a4e049aa01a20f", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSuccess(true);
        setError("");
        form.reset(); // Clear inputs
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-6 py-16 bg-gray-900">
      <div className="w-[85%] m-auto max-w-[1200px]" data-aos="fade-in" data-aos-duration="2000">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for reaching out! I'll get back to you shortly."
          />
          <input type="hidden" name="_subject" value="New Portfolio Message!" />


          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 border rounded bg-gray-800 border-gray-700 text-white"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 border rounded bg-gray-800 border-gray-700 text-white"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded bg-gray-800 border-gray-700 text-white"
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-[#00FFE0] text-black px-4 py-2 rounded hover:bg-white transition cursor-pointer"
            >
              Send Message
            </button>

            {success && (
              <div className="text-green-400 text-sm font-medium">
                <i className="bi-check text-blue-400"></i> Message sent!
              </div>
            )}

            {error && (
              <div className="text-red-400 text-sm font-medium">
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
