import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaDownload } from "react-icons/fa";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer...", "Professional Coder...", "Web Developer...", "App Developer..."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hey there,</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ketan Vilas Shetye</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I craft interfaces that don’t just look good — they feel right. I treat every click, scroll, and hover as a chance to create meaning. I use motion as a language — not for decoration, but to guide, inform, and simplify. Code is my canvas, and I build digital experiences that are not only functional, but delightful to use.”
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ketan-shetye/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Download CV
          </h2>
          <div className="flex gap-4">
            
            <a
              href="/ketan-cv.pdf" // place this file inside your /public folder
              download
              className="flex items-center gap-2 text-base font-titleFont uppercase text-blue-600 hover:underline"
            >
              <span className="bannerIcon">
              <FaDownload />
            </span>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
