import React, { useEffect, useRef } from "react";

interface Ball {
  x: number;
  y: number;
  r: number;
  color: string;
  vy: number;
}

const Balls: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const balls = useRef<Ball[]>([]);
  const gravity = 0.3;
  const friction = 0.9;
  const numBalls = 30;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // ✅ canvas safety check

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ ctx safety check

    // ✅ We’re sure ctx is defined now
    const context: CanvasRenderingContext2D = ctx;

 const randomColor = () => `hsl(${Math.random() * 360}, 70%, 60%)`;

// Define resetBalls first
const resetBalls = () => {
  balls.current = Array.from({ length: numBalls }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: 10 + Math.random() * 15,
    color: randomColor(),
    vy: 0,
  }));
};

// Then define resize
const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  resetBalls(); // ✅ now safe
};

window.addEventListener("resize", resize);
resize();

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const b of balls.current) {
        context.beginPath();
        context.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        context.fillStyle = b.color;
        context.fill();
      }
    };

    const update = () => {
      const floor = canvas.height;
      for (const b of balls.current) {
        b.vy += gravity;
        b.y += b.vy;

        // Floor collision
        if (b.y + b.r > floor) {
          b.y = floor - b.r;
          b.vy *= -friction;
        }
      }

      // Stacking logic (simple collision handling)
      for (let i = 0; i < balls.current.length; i++) {
        for (let j = i + 1; j < balls.current.length; j++) {
          const bi = balls.current[i];
          const bj = balls.current[j];
          const dx = bi.x - bj.x;
          const dy = bi.y - bj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = bi.r + bj.r;

          if (dist < minDist) {
            const overlap = (minDist - dist) / 2;
            const angle = Math.atan2(dy, dx);
            bi.x += Math.cos(angle) * overlap;
            bi.y += Math.sin(angle) * overlap;
            bj.x -= Math.cos(angle) * overlap;
            bj.y -= Math.sin(angle) * overlap;
          }
        }
      }

      // Reset once most balls reach the floor
      const grounded = balls.current.filter(
        (b) => b.y + b.r >= floor - 1
      );
      if (grounded.length > balls.current.length * 0.8) {
        resetBalls();
      }
    };

    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 bg-black"
    />
  );
};

export default Balls;