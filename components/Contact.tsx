import React from 'react';
import AnimatedElement from './AnimatedElement';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-40 bg-gray-900 relative">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-grid-gray-700/[0.05] [mask-image:linear-gradient(to_top,white_5%,transparent_90%)]"></div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <AnimatedElement>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white">
            드림팩토리에서 당신의 상상을
            <br />
            현실로 만들어보세요.
          </h2>
        </AnimatedElement>
        <AnimatedElement delay="delay-200">
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            영상 제작을 의뢰하고 싶으신가요? 지금 바로 문의해 주세요. 4K영상, 8K영상으로 제대로 만들어드립니다.
          </p>
        </AnimatedElement>
        <AnimatedElement delay="delay-400">
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf604dwL_7QmaelZzBYlaRDNrHmaaRS7fQmUS3TuIobBMxBgA/viewform?usp=header" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <DocumentTextIcon />
              <span>견적내기</span>
            </a>
            <a 
              href="https://invite.kakao.com/tc/K1L981rSOY" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg hover:shadow-yellow-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <ChatIcon />
              <span>카카오톡 문의</span>
            </a>
            <a 
              href="tel:010-2110-8917"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <PhoneIcon />
              <span>전화 문의</span>
            </a>
            <a 
              href="mailto:contact@dojong-ai.com" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg hover:shadow-sky-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <MailIcon />
              <span>이메일 문의</span>
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

// SVG Icon Components
const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

export default Contact;
