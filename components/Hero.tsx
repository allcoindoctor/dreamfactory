
import React from 'react';
import AnimatedElement from './AnimatedElement';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-700/[0.1] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <div className="text-center z-10 px-4">
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