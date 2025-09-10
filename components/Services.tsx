import React from 'react';
import AnimatedElement from './AnimatedElement';

type Service = {
  // Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  title: string;
  description: string;
};

const servicesList: Service[] = [
  { icon: <BuildingOfficeIcon />, title: "관공서 영상", description: "정책 홍보 및 공공 캠페인 영상" },
  { icon: <BriefcaseIcon />, title: "기업 홍보", description: "브랜드 가치를 높이는 홍보 영상" },
  { icon: <SparklesIcon />, title: "모션그래픽", description: "메시지를 효과적으로 전달하는 그래픽" },
  { icon: <MegaphoneIcon />, title: "광고 영상", description: "시청자의 시선을 사로잡는 CF" },
  { icon: <AcademicCapIcon />, title: "교육 영상", description: "복잡한 지식을 쉽게 전달하는 콘텐츠" },
  { icon: <DevicePhoneMobileIcon />, title: "제품 · 앱", description: "제품의 매력을 극대화하는 영상" },
  { icon: <CalendarDaysIcon />, title: "행사 영상", description: "생생한 현장의 감동을 담은 스케치" },
  { icon: <UserGroupIcon />, title: "인터뷰 영상", description: "진솔한 이야기를 담은 인터뷰" },
  { icon: <HeartIcon />, title: "의료 · 병원", description: "신뢰감을 주는 전문 의료 영상" },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimatedElement className="text-center">
          <h2 className="text-sm font-semibold text-sky-400 uppercase tracking-wider">Our Services</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            제공 서비스
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            생성 AI 기술을 활용하여 다양한 목적과 형태의 영상을 제작합니다.
          </p>
        </AnimatedElement>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <AnimatedElement key={service.title} delay={`delay-${(index % 3) * 150}`}>
              <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-sky-400">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

// SVG Icon Components
function BuildingOfficeIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v-1.5A.75.75 0 019 6.75zM9 12.75h6.375a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75z" /></svg>; }
function BriefcaseIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25V14.15M16.5 6.75h-9v-1.5a2.25 2.25 0 012.25-2.25h4.5A2.25 2.25 0 0116.5 5.25v1.5z" /></svg>; }
function SparklesIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 20l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 23.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 20l1.035-.259a3.375 3.375 0 002.456-2.456L18 15.75z" /></svg>; }
function MegaphoneIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>; }
function AcademicCapIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0L12 10.147M5.106 5.272l6.894 6.894" /></svg>; }
function DevicePhoneMobileIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>; }
function CalendarDaysIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-3 14.25h18" /></svg>; }
function UserGroupIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-9.094-9.094H7.172c-.28.004-.555.034-.827.094m5.44 9.011c.142.023.285.042.428.06M7.172 18.72c-.896-.062-1.77-.206-2.607-.422m10.234-11.085c.386.058.766.126 1.14.204M15.75 18.72c-.417-.03-.83-.075-1.238-.135M14.25 7.5c0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6 6-2.686 6-6zM4.5 18.72c-.176.012-.352.023-.529.034" /></svg>; }
function HeartIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>; }

export default Services;