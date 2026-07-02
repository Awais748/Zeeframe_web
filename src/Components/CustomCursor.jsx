import { useEffect, useRef } from "react";

export default function CursorGlow({ color = "#f3fe00" }) {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const rafRef = useRef(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < 60) return;
      lastSpawnRef.current = now;

      dotsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 45 + Math.random() * 15, // pehlay 18-24 tha, ab bara kar diya
        life: 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((d) => {
        d.life -= 0.012;

        if (d.life > 0) {
          const gradient = ctx.createRadialGradient(
            d.x,
            d.y,
            0,
            d.x,
            d.y,
            d.radius
          );
          // max alpha pehlay 180 (~70%) tha, ab 90 (~35%) - kam intense
          const alpha = Math.floor(d.life * 90)
            .toString(16)
            .padStart(2, "0");
          gradient.addColorStop(0, `${color}${alpha}`);
          gradient.addColorStop(
            0.5,
            `${color}${Math.floor(d.life * 40)
              .toString(16)
              .padStart(2, "0")}`
          );
          gradient.addColorStop(1, `${color}00`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      dotsRef.current = dotsRef.current.filter((d) => d.life > 0);
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-0 hidden md:block"
      style={{ filter: "blur(20px)" }} // extra soft blur, CSS se
    />
  );
}
