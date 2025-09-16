Here's the updated React component with a "블로그" (Blog) button added to the header.

-----

### **Explanation of Changes**

I've added a new `<a>` tag inside the `<nav>` element. This new link, labeled "블로그", will direct users to the `/blog` page. I've used the same styling conventions as the existing "프로젝트 문의" button to maintain a consistent look and feel.

-----

```javascript
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#hero" className="text-xl font-bold tracking-wider text-white hover:text-sky-400 transition-colors">
            DREAM FACTORY
          </a>
          <nav>
            <a href="/blog" className="px-4 py-2 text-sm font-medium border border-gray-600 rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 mr-4">
              블로그
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium border border-gray-600 rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300">
              프로젝트 문의
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
```
