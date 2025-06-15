export default function ContactForm() {
  return (
    <section id="contact" className="px-6 py-16 dark:bg-gray-900"  >
      <div className="w-[85%] m-auto max-w-[1200px]" data-aos="fade-in" data-aos-duration="2000">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input name="name" required placeholder="Your Name" className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
        <input name="email" required placeholder="Your Email" className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
        <textarea name="message" required placeholder="Your Message" rows="4" className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
        <button className="bg-[#00FFE0] text-black px-4 py-2 rounded hover:bg-white transition cursor-pointer">Send Message</button>
      </form>
      </div>
    </section>
  );
}
