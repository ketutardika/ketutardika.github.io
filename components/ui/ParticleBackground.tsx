'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let centerX = width / 2;
    let centerY = height / 2;

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 3D Perspective settings
    const focalLength = 300;
    const maxDepth = 1500;

    // Particle class with 3D coordinates
    class Particle3D {
      x: number;
      y: number;
      z: number;
      prevX: number;
      prevY: number;
      speed: number;
      color: string;

      constructor() {
        this.x = (Math.random() - 0.5) * width * 2;
        this.y = (Math.random() - 0.5) * height * 2;
        this.z = Math.random() * maxDepth;
        this.prevX = 0;
        this.prevY = 0;
        this.speed = Math.random() * 2 + 1;

        // Particle colors
        const colors = theme === 'dark'
          ? [
              '147, 51, 234',   // Purple
              '168, 85, 247',   // Light purple
              '139, 92, 246',   // Violet
              '99, 102, 241',   // Indigo
              '59, 130, 246',   // Blue
            ]
          : [
              '147, 51, 234',   // Purple
              '168, 85, 247',   // Light purple
              '124, 58, 237',   // Violet
              '79, 70, 229',    // Indigo
              '99, 102, 241',   // Blue
            ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      // Project 3D coordinates to 2D screen
      project(): { x: number; y: number; scale: number } | null {
        if (this.z <= 0) return null;

        const scale = focalLength / this.z;
        const x2d = this.x * scale + centerX;
        const y2d = this.y * scale + centerY;

        return { x: x2d, y: y2d, scale };
      }

      update() {
        // Store previous projected position for trail
        const prevProjection = this.project();
        if (prevProjection) {
          this.prevX = prevProjection.x;
          this.prevY = prevProjection.y;
        }

        // Move particle towards viewer
        this.z -= this.speed * 3;

        // Reset particle when it passes the viewer
        if (this.z <= 1) {
          this.x = (Math.random() - 0.5) * width * 2;
          this.y = (Math.random() - 0.5) * height * 2;
          this.z = maxDepth;
          this.prevX = 0;
          this.prevY = 0;
        }
      }

      draw() {
        if (!ctx) return;

        const projection = this.project();
        if (!projection) return;

        const { x, y, scale } = projection;

        // Skip if outside canvas
        if (x < -50 || x > width + 50 || y < -50 || y > height + 50) return;

        // Calculate opacity based on depth
        const opacity = Math.min(1, (1 - this.z / maxDepth) * 1.5);
        const size = Math.max(0.5, scale * 2);

        // Draw trail line
        if (this.prevX !== 0 && this.prevY !== 0) {
          const trailLength = Math.sqrt(
            Math.pow(x - this.prevX, 2) + Math.pow(y - this.prevY, 2)
          );

          if (trailLength > 1 && trailLength < 100) {
            const gradient = ctx.createLinearGradient(this.prevX, this.prevY, x, y);
            gradient.addColorStop(0, `rgba(${this.color}, 0)`);
            gradient.addColorStop(1, `rgba(${this.color}, ${opacity * 0.8})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = size * 0.5;
            ctx.beginPath();
            ctx.moveTo(this.prevX, this.prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }

        // Draw particle with glow
        const glowSize = size * 3;
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        glowGradient.addColorStop(0, `rgba(${this.color}, ${opacity})`);
        glowGradient.addColorStop(0.4, `rgba(${this.color}, ${opacity * 0.3})`);
        glowGradient.addColorStop(1, `rgba(${this.color}, 0)`);

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = 200;
    const particles: Particle3D[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle3D());
    }

    // Mouse interaction for parallax effect
    let mouseX = 0;
    let mouseY = 0;
    let targetOffsetX = 0;
    let targetOffsetY = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;

    canvas.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - centerX) / centerX;
      mouseY = (e.clientY - centerY) / centerY;
      targetOffsetX = mouseX * 50;
      targetOffsetY = mouseY * 50;
    });

    canvas.addEventListener('mouseleave', () => {
      targetOffsetX = 0;
      targetOffsetY = 0;
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      // Smooth mouse parallax
      currentOffsetX += (targetOffsetX - currentOffsetX) * 0.05;
      currentOffsetY += (targetOffsetY - currentOffsetY) * 0.05;

      // Update center based on mouse
      centerX = width / 2 + currentOffsetX;
      centerY = height / 2 + currentOffsetY;

      // Clear canvas with fade effect for motion blur
      ctx.fillStyle = theme === 'dark'
        ? 'rgba(10, 10, 10, 0.2)'
        : 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // Sort particles by depth (far to near)
      particles.sort((a, b) => b.z - a.z);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = theme === 'dark' ? '#0a0a0a' : '#ffffff';
    ctx.fillRect(0, 0, width, height);

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ width: '100%', height: '100vh' }}
    />
  );
}
