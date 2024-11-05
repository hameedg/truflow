'use client';

import React, { useEffect, useRef } from 'react';

export default function DotPatternBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawDotPattern = () => {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const dotSize = 2;
      const spacing = 20;
      ctx.fillStyle = '#d0d0d0';

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // #b998ff #7f4cf6 #5c1fe7 )


    const drawCursorEffect = () => {
      const { x, y } = targetPosRef.current; // Interpolated position
      const radius = 200;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, 'rgba(100, 100, 255, 0.35)');
      gradient.addColorStop(0.75, 'rgba(100, 100, 255, 0.05)');
      gradient.addColorStop(1, 'rgba(100, 100, 255, 0)');

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDotPattern();
      
      // Smoothly interpolate the cursor position
      targetPosRef.current.x = lerp(targetPosRef.current.x, cursorPosRef.current.x, 0.1);
      targetPosRef.current.y = lerp(targetPosRef.current.y, cursorPosRef.current.y, 0.1);
      
      drawCursorEffect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      cursorPosRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      style={{ pointerEvents: 'none' }}
    />
  );
}
