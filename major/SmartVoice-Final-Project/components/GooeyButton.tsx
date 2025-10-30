
import React, { useRef, useEffect } from 'react';

interface GooeyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GooeyButton: React.FC<GooeyButtonProps> = ({ children, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bubblesRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    bubblesRef.current.forEach((bubble) => {
      const size = Math.floor(Math.random() * 20) + 15 + "px";
      const top = Math.floor(Math.random() * 100) + "%";
      const left = Math.floor(Math.random() * 100) + "%";

      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.top = top;
      bubble.style.left = left;
    });
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newBubble = document.createElement('span');
      newBubble.className = "bubble";
      newBubble.style.left = `${x}px`;
      newBubble.style.top = `${y}px`;
      const size = Math.floor(Math.random() * 30) + 20;
      newBubble.style.width = `${size}px`;
      newBubble.style.height = `${size}px`;
      
      const animation = newBubble.animate(
        [
          { transform: 'scale(0)', opacity: 1 },
          { transform: 'scale(3)', opacity: 0 }
        ],
        {
          duration: 400,
          easing: 'ease-out'
        }
      );
      animation.onfinish = () => newBubble.remove();
      
      buttonRef.current?.querySelector('.bubbles')?.appendChild(newBubble);
    }
  };

  return (
    <button ref={buttonRef} onPointerMove={handlePointerMove} className="gooey-button" {...props}>
      {children}
      <span className="bubbles">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} ref={(el) => { if (el) bubblesRef.current[i] = el; }} className="bubble" />
        ))}
      </span>
    </button>
  );
};
