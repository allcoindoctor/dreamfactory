Here's the updated React component with the blog button linking to the specified Naver blog URL in a new window.

-----

### **Corrected React Component**

I've changed the `href` attribute on the blog link to `https://blog.naver.com/mzmanager` and added the `target="_blank"` and `rel="noopener noreferrer"` attributes.

  - **`target="_blank"`**: This tells the browser to open the link in a new tab or window.
  - **`rel="noopener noreferrer"`**: This is a security best practice. It prevents the new page from accessing the window object of your original page, which protects your site from potential security vulnerabilities.

<!-- end list -->

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
            <a 
              href="https://blog.naver.com/mzmanager" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium border border-gray-600 rounded-full hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300 mr-4"
            >
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
