import Image from 'next/image';

export default function Hero() {
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
            <a
              href="/document/Bamirin-Francis-Cv.pdf"
              download
              className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
            >
              Download CV
            </a>
            <a
              href="/document/Bamirin-Francis-Cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-5 py-2 rounded text-white hover:bg-white hover:text-black transition"
            >
              Print CV
            </a>
          </div>
        </div>

        <div
          className="relative w-[300px] h-[300px] rounded-[30px] overflow-hidden shadow-2xl group"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFE0] to-[#00d9ff] opacity-30 blur-2xl z-0"></div>
          <Image
            src="/all-images/my-image.jpg"
            alt="myphoto"
            width={300}
            height={300}
            className="object-cover w-full h-full relative z-10 rounded-[30px] group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
