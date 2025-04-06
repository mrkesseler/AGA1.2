import React, { useEffect, useRef } from 'react';

interface SplashProps {
  color?: string;
}

export function SplashEffect({ color = '#4F46E5' }: SplashProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSplash = (e: MouseEvent) => {
      const splash = document.createElement('div');
      const rect = container.getBoundingClientRect();
      const size = Math.max(container.offsetWidth, container.offsetHeight);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      splash.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        pointer-events: none;
        opacity: 0;
        transform: scale(0);
        animation: splash 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `;

      container.appendChild(splash);

      setTimeout(() => {
        splash.remove();
      }, 1000);
    };

    container.addEventListener('click', createSplash);

    return () => {
      container.removeEventListener('click', createSplash);
    };
  }, [color]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
}