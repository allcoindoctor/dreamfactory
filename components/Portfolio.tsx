import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';

const portfolioItems = [
  { title: "기업 홍보 영상", img: "https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/003.png", videoUrl: "https://www.youtube.com/embed/IOICXUGpSY8?si=zu7lfi0VN0RuhXu2" },
  { title: "광고 영상", img: "https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/007.png", videoUrl: "https://www.youtube.com/embed/ZexeNsdJPK4?si=UmNvxGJYmO1gJgrK" },
  { title: "모션그래픽", img: "https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/001.png", videoUrl: "https://www.youtube.com/embed/ZexeNsdJPK4?si=UmNvxGJYmO1gJgrK" },
  { title: "교육 콘텐츠", img: "https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/010.png", videoUrl: "https://www.youtube.com/embed/GRruV96eNsw?si=GZ0A_1PtUGnZAXiP" },
  { title: "제품 소개 영상", img: "https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/012.png", videoUrl: "https://www.youtube.com/embed/LQJMYwPRDdY?si=TB63MTWI_ClJpyis" },
  { title: "행사 스케치", img: "https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/011.png", videoUrl: "https://www.youtube.com/embed/cYRbkgL9Bdc?si=iiyTTTCepMTWjndz" },
];

const PlayIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.648c1.295.746 1.295 2.54 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideoUrl(null), 300); // Allow fade-out animation
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimatedElement className="text-center">
          <h2 className="text-sm font-semibold text-sky-400 uppercase tracking-wider">Our Work</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            포트폴리오
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            다양한 프로젝트를 통해 축적된 노하우와 크리에이티브를 확인하세요.
          </p>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <AnimatedElement key={index} delay={`delay-${(index % 3) * 150}`}>
              <button 
                onClick={() => openModal(item.videoUrl)}
                className="group relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3 block w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-sky-500"
                aria-label={`${item.title} 영상 보기`}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <PlayIcon className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transform transition-all duration-300" />
                </div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </button>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className={`relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden aspect-video transition-all duration-300 ease-in-out ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={closeModal}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="비디오 팝업 닫기"
            >
              &times;
            </button>
            {selectedVideoUrl && (
              <iframe
                className="w-full h-full"
                src={`${selectedVideoUrl}?autoplay=1&rel=0`}
                title="Portfolio Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
