import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import { slides } from './Slides';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const SlideComponent = slides[currentSlide];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: '#333' }}>
      <div className="presentation-wrapper" style={{ position: 'relative' }}>
        {slides.map((_, idx) => (
          <div key={idx} className={`slide${idx === currentSlide ? ' active' : ''}`} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, opacity: idx === currentSlide ? 1 : 0, visibility: idx === currentSlide ? 'visible' : 'hidden', transition: 'opacity 0.5s, visibility 0.5s' }}>
            {idx === currentSlide && <SlideComponent />}
          </div>
        ))}
        {/* Navigation Arrows */}
        {currentSlide > 0 && (
          <button
            aria-label="Previous Slide"
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            style={{
              position: 'absolute',
              top: '50%',
              left: 8,
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              fontSize: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button
            aria-label="Next Slide"
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
            style={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              fontSize: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
