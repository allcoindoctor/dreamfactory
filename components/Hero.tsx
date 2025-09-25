import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Check if the YouTube Iframe Player API script is already loaded
    if (!window.YT) {
      // Create and append the script tag
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // This function will be called by the API script when it's ready
    window.onYouTubeIframeAPIReady = () => {
      if (videoContainerRef.current) {
        playerRef.current = new window.YT.Player(videoContainerRef.current, {
          videoId: '27PSbkN1zi9V4x1p',
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: '27PSbkN1zi9V4x1p',
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1
          },
          events: {
            'onReady': onPlayerReady
          }
        });
      }
    };

    return () => {
      // Clean up the player when the component unmounts
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {/*
          The YouTube player will be injected into this div.
          We are using a wrapper to make it fill the container.
          
          플레이어가 항상 배경을 채우도록 크기를 조정하는 CSS를 추가합니다.
          이는 비디오의 16:9 종횡비를 유지하면서 전체 화면을 덮도록 계산된 값입니다.
        */}
        <div className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2" style={{
          width: '177.77777778vh', // 16 / 9 = 1.7778
          height: '56.25vw', // 9 / 16 = 0.5625
        }}>
          <div ref={videoContainerRef} className="w-full h-full"></div>
        </div>
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative text-center z-10 px-4">
        {/* Using standard HTML for simplicity instead of a separate AnimatedElement component */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-tight animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
            생성 AI
          </span>
          가 만드는
          <br />
          영상의 새로운 시대
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 animate-fade-in-up delay-300">
          드림팩토리는 고객이 원하는 모든 아이디어와 상상을 현실로 만듭니다.
        </p>
        <div className="mt-10 animate-fade-in-up delay-500">
          <a href="#contact" className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transform hover:scale-105 transition-all duration-300">
            프로젝트 문의하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
