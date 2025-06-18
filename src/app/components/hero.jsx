import Image from 'next/image';
export default function hero() {
return (
<section className="py-24 flex items-center justify-center bg-gray-800">
  <div className="w-[85%] flex justify-between gap-3 items-center max-w-[1200px] flex-wrap-reverse">
    <div className="max-w-xl" data-aos="fade-left" data-aos-duration="2000">
      <h2 className="text-7xl font-bold mb-4 leading-tight max-[644px]:text-4xl text-white">
        Hello, I'm <span className="text-[#00FFE0]">Bamirin Francis</span>
      </h2>
      <p className="text-gray-300 mb-6">
        A multi-stack developer building reliable, scalable web and desktop applications using modern tech like <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">PHP</span>, <span className="text-white font-medium">VB.NET</span>, and <span className="text-white font-medium">MySQL</span>.
      </p>
      <div className="flex gap-4">
        <a href="/document/newest-Cv.pdf" download="/document/newest-Cv.pdf" className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition">Download CV</a>
        <a href="/document/newest-Cv.pdf" target="_blank" rel="noopener noreferrer" className="border border-white px-5 py-2 rounded text-white hover:bg-white hover:text-black transition">Print CV</a>
      </div>
    </div>
    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#00FFE0] shadow-lg" data-aos="fade-right" data-aos-duration="2000">
      <Image src="/your-photo.jpg" alt="Your photo" width={256} height={256} className="object-cover w-full h-full" />
    </div>
  </div>
</section>

);
}