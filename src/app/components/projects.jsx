
export default function projects() {
  return (
<section id="projects" className="px-6 py-20 border-t border-white/10 bg-gray-800">
  <div className="w-[85%] m-auto max-w-[1200px]">
  <h3 className="text-2xl font-semibold mb-6">Projects</h3>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="border border-white/10 p-6 rounded-lg hover:border-[#00FFE0] transition" data-aos="fade-right" data-aos-duration="2000">
      <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
      <p className="text-gray-300 text-sm mb-2">Built with Next.js and Tailwind CSS, this site showcases my work and provides access to my CV and contact details.</p>
      <a href="https://github.com/Xisco0" className="text-[#00FFE0] text-sm hover:underline">View Project →</a>
    </div>

    <div className="border border-white/10 p-6 rounded-lg hover:border-[#00FFE0] transition" data-aos="fade-left" data-aos-duration="2000">
      <h4 className="text-xl font-semibold mb-2">Inventory App (VB.NET)</h4>
      <p className="text-gray-300 text-sm mb-2">Desktop application for small businesses with stock tracking, invoicing, and PDF export features.</p>
      <a href="#" className="text-[#00FFE0] text-sm hover:underline">View Project →</a>
    </div>
  </div>
  </div>
</section>

  );
  }