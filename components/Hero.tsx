import React from 'react';
import AnimatedElement from './AnimatedElement';

const Hero: React.FC = () => {
  const videoId = 'z3z_vj_t-hY'; // Abstract tech-style background video

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/GRruV96eNsw?si=uMiHXWz_wJD5MLgu`}
          frameBorder="0"
          allow="autoplay=1; encrypted-media"
          title="Background Video"
        ></iframe>
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative text-center z-10 px-4">
        <AnimatedElement>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
              생성 AI
            </span>
            가 만드는
            <br />
            영상의 새로운 시대
          </h1>
        </AnimatedElement>
        <AnimatedElement delay="delay-300">
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
            드림팩토리 AI 비디오 프로덕션: 아이디어를 현실로, 상상을 영상으로 만듭니다.
          </p>
        </AnimatedElement>
        <AnimatedElement delay="delay-500">
          <div className="mt-10">
            <a href="#contact" className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transform hover:scale-105 transition-all duration-300">
              프로젝트 문의하기
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
