
import React, { useRef, ReactNode } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-300'
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', delay = 'delay-0' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  const baseClasses = `transition-all duration-1000 ease-out ${delay}`;
  const hiddenClasses = 'opacity-0 translate-y-6';
  const visibleClasses = 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${className} ${baseClasses} ${onScreen ? visibleClasses : hiddenClasses}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
