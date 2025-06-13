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
      </div>
      <div className="navigation-controls">
        <button className="nav-button" onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))} disabled={currentSlide === 0}>Previous</button>
        <div className="slide-dots">
          {slides.map((_, idx) => (
            <div key={idx} className={`dot${idx === currentSlide ? ' active' : ''}`} onClick={() => setCurrentSlide(idx)}>{idx + 1}</div>
          ))}
        </div>
        <button className="nav-button" onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))} disabled={currentSlide === slides.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default App;
