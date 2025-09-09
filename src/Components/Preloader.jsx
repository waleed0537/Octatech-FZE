import React, { useState, useEffect } from 'react';

const Preloader = ({ images, children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalImages = images?.length || 0;

  useEffect(() => {
    let loadedImages = 0;

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages++;
          // Calculate percentage and ensure it doesn't exceed 100
          const percentage = Math.min(Math.round((loadedImages / totalImages) * 100), 100);
          setProgress(percentage);
          resolve();
        };
        img.onerror = () => {
          loadedImages++;
          const percentage = Math.min(Math.round((loadedImages / totalImages) * 100), 100);
          setProgress(percentage);
          // Still resolve on error to continue loading
          resolve();
        };
      });
    };

    const preloadImages = async () => {
      try {
        // Start with initial progress
        setProgress(0);
        
        // Load all images concurrently
        await Promise.all(images.map(url => loadImage(url)));
        
        // Ensure we set 100% when complete
        setProgress(100);
        
        // Add small delay before hiding loader
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        console.error('Error preloading images:', error);
        setLoading(false);
      }
    };

    if (images && images.length > 0) {
      preloadImages();
    } else {
      setLoading(false);
    }
  }, [images, totalImages]);

  if (loading) {
    return (
      <div className="preloader-wrapper">
        <div className="loader-container">
          <div className="animation-preloader">
            <div className="logo-container">
              <div className="logo-ring">
                <div className="logo-inner">
                  <span className="logo-text">OCTA TECH</span>
                </div>
              </div>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: `${progress}%`}}></div>
              </div>
              <div className="progress-text">{progress}%</div>
            </div>
            <div className="loading-status">Loading assets...</div>
          </div>
        </div>
        <style jsx>{`
          .preloader-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #1e2547 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          
          .loader-container {
            text-align: center;
            position: relative;
          }

          .logo-container {
            margin-bottom: 40px;
          }

          .logo-ring {
            position: relative;
            width: 140px;
            height: 140px;
            margin: 0 auto;
            border: 3px solid rgba(78, 97, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: rotate 3s linear infinite;
          }

          .logo-ring::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border: 3px solid transparent;
            border-top: 3px solid #4e61ff;
            border-right: 3px solid #4e61ff;
            border-radius: 50%;
            animation: rotate 2s linear infinite reverse;
          }

          .logo-inner {
            width: 110px;
            height: 110px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(78, 97, 255, 0.05);
            backdrop-filter: blur(10px);
          }

          .logo-text {
            color: #ffffff;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-align: center;
            line-height: 1.2;
            text-shadow: 0 0 10px rgba(78, 97, 255, 0.5);
          }

          .progress-container {
            margin-bottom: 30px;
          }

          .progress-bar {
            width: 280px;
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            margin: 0 auto 15px;
            overflow: hidden;
            position: relative;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #4e61ff 0%, #7c3aed 50%, #4e61ff 100%);
            border-radius: 10px;
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            box-shadow: 0 0 20px rgba(78, 97, 255, 0.4);
          }

          .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
            animation: shimmer 2s infinite;
          }

          .progress-text {
            color: #ffffff;
            font-size: 18px;
            font-weight: 600;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          .loading-status {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.5px;
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
          }

          @media screen and (max-width: 767px) {
            .logo-ring {
              width: 100px;
              height: 100px;
            }
            
            .logo-inner {
              width: 80px;
              height: 80px;
            }
            
            .logo-text {
              font-size: 10px;
              letter-spacing: 1.5px;
            }
            
            .progress-bar {
              width: 220px;
              height: 5px;
            }
            
            .progress-text {
              font-size: 16px;
            }
            
            .loading-status {
              font-size: 12px;
            }
          }
        `}</style>
      </div>
    );
  }

  return children;
};

export default Preloader;