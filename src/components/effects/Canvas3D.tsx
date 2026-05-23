import React, { useEffect, useRef, useState } from 'react';

export const Canvas3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = 300;
    let height = canvas.height = 300;

    // 3D Point structure
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    // Generate points on a sphere
    const points: Point3D[] = [];
    const numPoints = 80;
    const radius = 100;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    // Rotations angles
    let angleX = 0.003;
    let angleY = 0.005;

    // Project 3D points to 2D
    const project = (point: Point3D) => {
      const distance = 300; // perspective distance
      const fov = 200; // field of view
      const scale = fov / (distance + point.z);
      const x2d = point.x * scale + width / 2;
      const y2d = point.y * scale + height / 2;

      return { x: x2d, y: y2d, size: scale * 1.5, alpha: (distance - point.z) / (distance * 2) };
    };

    // Rotate points
    const rotateX = (point: Point3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = point.y * cos - point.z * sin;
      const z = point.z * cos + point.y * sin;
      point.y = y;
      point.z = z;
    };

    const rotateY = (point: Point3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = point.x * cos - point.z * sin;
      const z = point.z * cos + point.x * sin;
      point.x = x;
      point.z = z;
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background golden glow inside canvas
      const glowGrad = ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, radius + 20);
      glowGrad.addColorStop(0, 'rgba(200, 155, 60, 0.04)');
      glowGrad.addColorStop(1, 'rgba(200, 155, 60, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(width/2, height/2, radius + 20, 0, Math.PI * 2);
      ctx.fill();

      // Sort points by Z (depth buffer) for correct occlusion drawing
      const sortedPoints = [...points].sort((a, b) => b.z - a.z);

      sortedPoints.forEach((point) => {
        rotateX(point, angleX);
        rotateY(point, angleY);

        const proj = project(point);

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, Math.max(0.5, proj.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 155, 60, ${proj.alpha * 0.85})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Responsive resize handler
    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none select-none max-w-full max-h-full"
      style={{ filter: 'drop-shadow(0 0 15px rgba(200, 155, 60, 0.15))' }}
    />
  );
};
