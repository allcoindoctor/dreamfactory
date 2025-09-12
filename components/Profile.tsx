import React from 'react';
import AnimatedElement from './AnimatedElement';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedElement className="relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-grid-gray-700/[0.1] [mask-image:radial-gradient(50%_50%_at_50%_50%,white,transparent)]"></div>
            <img 
              src="https://raw.githubusercontent.com/allcoindoctor/dreamfactory/main/img/015.png" 
              alt="김도종 프로필" 
              className="rounded-2xl w-full h-full object-cover object-center shadow-2xl shadow-sky-900/20"
            />
          </AnimatedElement>
          <AnimatedElement delay="delay-200">
            <h2 className="text-sm font-semibold text-sky-400 uppercase tracking-wider">About Me</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              제작자 : 김도종
            </p>
            <div className="mt-8 text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                IT 기획자이며 국내 코인 광풍 시기에 각종 사기 사례를 파헤친 소설 《비트코인의 비밀》의 저자이기도 합니다.
              </p>
              <p>
                기획통으로 (주)워크도니 CSO, (사)한국라오스문화유산교류협회 기획이사, 한국추리작가협회 정회원이고, 포블(포스텍 디지털자산과 블록체인 전문가 과정) 4기 출신입니다.
              </p>
              <p>
                도니캣PFP(Donicat PFP) 파운더로 2023년 인기리에 방영된 KBS 드라마 〈비밀의 여자〉에서 선보인 기부 고양이 ‘도니캣’을 창안했습니다. 
              </p>
              <p>
                쿠키코인 파운더로 2025년 솔라나기반 밈코인 개발에 참여하였고, &lt;일주일이면 나도 생성AI 전문가&gt;(매일경제신문)를 공동 출간하였습니다. 생성AI 영상 제작 전문 드림팩토리를 런칭하였습니다.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Profile;
