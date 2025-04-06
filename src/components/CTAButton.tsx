import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function CTAButton({ children, onClick, className = '', href }: CTAButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const createSplash = (e: MouseEvent) => {
      const splash = document.createElement('div');
      const rect = button.getBoundingClientRect();
      const size = Math.max(button.offsetWidth, button.offsetHeight) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      splash.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(14, 165, 233, 0.2) 70%, transparent 100%);
        pointer-events: none;
        z-index: 0;
        animation: ctaSplash 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `;

      button.appendChild(splash);

      setTimeout(() => {
        splash.remove();
      }, 1000);
    };

    button.addEventListener('click', createSplash);

    return () => {
      button.removeEventListener('click', createSplash);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      window.location.href = href;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      ref={buttonRef}
      onClick={handleClick}
      className={`cta-button group relative overflow-hidden ${className}`}
    >
      <div className="cta-button-content relative z-10">
        <span>{children}</span>
        <ArrowRight className="w-5 h-5 text-emerald-500 transform transition-transform duration-500 cta-arrow" />
      </div>
    </button>
  );
}