(() => {
  "use strict";

  /*
   * Replace these values with your live Perchance URLs.
   */
  const CONFIG = Object.freeze({
    gameUrl: "https://perchance.org/2d-top-down-rpg-multiplayer",
    editorUrl: "https://perchance.org/2d-top-down-rpg-multiplayer#edit",
    authorUrl: "https://github.com/Mosberg",
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function setConfiguredLinks() {
    document.querySelectorAll("[data-game-link]").forEach((link) => {
      link.href = CONFIG.gameUrl;
    });

    document.querySelectorAll("[data-editor-link]").forEach((link) => {
      link.href = CONFIG.editorUrl;
      link.target = "_blank";
    });

    document.querySelectorAll("[data-author-link]").forEach((link) => {
      link.href = CONFIG.authorUrl;
      link.target = "_blank";
    });
  }

  function resizeCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    return {
      context: canvas.getContext("2d"),
      width,
      height,
      dpr,
    };
  }

  function mulberry32(seed) {
    return () => {
      let value = (seed += 0x6d2b79f5);
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function drawHeroScene(canvas, time) {
    const { context: ctx, width, height } = resizeCanvas(canvas);
    const random = mulberry32(0xe11b4a);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const scale = Math.max(width / 1280, height / 760);
    ctx.scale(scale, scale);

    const sceneWidth = width / scale;
    const sceneHeight = height / scale;
    const horizon = sceneHeight * 0.58;

    const sky = ctx.createLinearGradient(0, 0, 0, sceneHeight);
    sky.addColorStop(0, "#171321");
    sky.addColorStop(0.52, "#392137");
    sky.addColorStop(1, "#17141b");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, sceneWidth, sceneHeight);

    const moonGlow = ctx.createRadialGradient(
      sceneWidth * 0.78,
      sceneHeight * 0.22,
      4,
      sceneWidth * 0.78,
      sceneHeight * 0.22,
      sceneWidth * 0.26,
    );
    moonGlow.addColorStop(0, "rgba(255, 188, 101, .22)");
    moonGlow.addColorStop(1, "rgba(255, 188, 101, 0)");
    ctx.fillStyle = moonGlow;
    ctx.fillRect(0, 0, sceneWidth, sceneHeight);

    ctx.fillStyle = "#f5c879";
    ctx.beginPath();
    ctx.arc(sceneWidth * 0.78, sceneHeight * 0.22, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#2a1b2e";
    for (let index = 0; index < 9; index += 1) {
      const x = (index * sceneWidth) / 8 - 70;
      const peak = horizon - 35 - random() * 90;
      ctx.beginPath();
      ctx.moveTo(x, horizon + 35);
      ctx.lineTo(x + sceneWidth * 0.12, peak);
      ctx.lineTo(x + sceneWidth * 0.25, horizon + 35);
      ctx.closePath();
      ctx.fill();
    }

    const ground = ctx.createLinearGradient(0, horizon, 0, sceneHeight);
    ground.addColorStop(0, "#1e3b2b");
    ground.addColorStop(1, "#101c1c");
    ctx.fillStyle = ground;
    ctx.fillRect(0, horizon, sceneWidth, sceneHeight - horizon);

    ctx.strokeStyle = "rgba(164, 187, 112, .22)";
    ctx.lineWidth = 2;
    for (let index = -3; index < 17; index += 1) {
      const x = index * 110;
      ctx.beginPath();
      ctx.moveTo(sceneWidth * 0.46, horizon + 20);
      ctx.quadraticCurveTo(
        sceneWidth * 0.5 + Math.sin(index) * 120,
        sceneHeight * 0.74,
        x,
        sceneHeight,
      );
      ctx.stroke();
    }

    drawPineCluster(ctx, sceneWidth * 0.06, horizon + 5, 1.25, "#12261e");
    drawPineCluster(ctx, sceneWidth * 0.16, horizon + 35, 0.9, "#162b21");
    drawPineCluster(ctx, sceneWidth * 0.9, horizon + 5, 1.1, "#12261e");
    drawPineCluster(ctx, sceneWidth * 0.98, horizon + 50, 0.82, "#172d23");

    drawVillage(ctx, sceneWidth * 0.61, horizon + 28, 1.15);
    drawHero(ctx, sceneWidth * 0.48, sceneHeight * 0.69, 1.05, time);

    ctx.fillStyle = "rgba(239, 115, 53, .16)";
    for (let index = 0; index < 18; index += 1) {
      const x = sceneWidth * (0.35 + random() * 0.4);
      const y = sceneHeight * (0.36 + random() * 0.55);
      const radius = 1 + random() * 2;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const vignette = ctx.createRadialGradient(
      sceneWidth / 2,
      sceneHeight / 2,
      sceneHeight * 0.2,
      sceneWidth / 2,
      sceneHeight / 2,
      sceneWidth * 0.72,
    );
    vignette.addColorStop(0.55, "rgba(0, 0, 0, 0)");
    vignette.addColorStop(1, "rgba(4, 4, 8, .7)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, sceneWidth, sceneHeight);
  }

  function drawPineCluster(ctx, x, y, scale, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = color;

    for (let index = 0; index < 3; index += 1) {
      const offset = index * 48;
      ctx.fillRect(offset + 15, 58, 10, 44);

      ctx.beginPath();
      ctx.moveTo(offset + 20, 0);
      ctx.lineTo(offset - 10, 72);
      ctx.lineTo(offset + 50, 72);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(offset + 20, 25);
      ctx.lineTo(offset - 17, 88);
      ctx.lineTo(offset + 57, 88);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  function drawVillage(ctx, x, y, scale) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    ctx.fillStyle = "rgba(9, 14, 13, .55)";
    ctx.fillRect(-115, 44, 238, 10);

    drawHouse(ctx, -92, 0, 1);
    drawHouse(ctx, -22, -22, 0.84);
    drawHouse(ctx, 50, 4, 1.12);

    ctx.fillStyle = "#96734f";
    ctx.fillRect(-8, 28, 14, 26);
    ctx.fillStyle = "#efa14c";
    ctx.beginPath();
    ctx.arc(-1, 27, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawHouse(ctx, x, y, scale) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    ctx.fillStyle = "#5e433d";
    ctx.fillRect(0, 25, 62, 42);

    ctx.fillStyle = "#a85a42";
    ctx.beginPath();
    ctx.moveTo(-9, 28);
    ctx.lineTo(31, -5);
    ctx.lineTo(72, 28);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#f6b862";
    ctx.fillRect(23, 43, 15, 13);
    ctx.fillStyle = "#2a1d24";
    ctx.fillRect(47, 39, 8, 10);

    ctx.restore();
  }

  function drawHero(ctx, x, y, scale, time) {
    ctx.save();
    ctx.translate(x, y + Math.sin(time * 0.0015) * 2);
    ctx.scale(scale, scale);

    ctx.fillStyle = "rgba(5, 8, 8, .5)";
    ctx.beginPath();
    ctx.ellipse(0, 22, 27, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#352b3a";
    ctx.fillRect(-16, -42, 32, 54);

    ctx.fillStyle = "#ca653d";
    ctx.beginPath();
    ctx.moveTo(-24, -35);
    ctx.lineTo(0, -55);
    ctx.lineTo(24, -35);
    ctx.lineTo(17, -27);
    ctx.lineTo(0, -41);
    ctx.lineTo(-17, -27);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#efbd83";
    ctx.beginPath();
    ctx.arc(0, -55, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#402c32";
    ctx.fillRect(-13, -65, 26, 8);

    ctx.strokeStyle = "#e7b356";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(18, -20);
    ctx.lineTo(37, -47);
    ctx.stroke();

    ctx.fillStyle = "#ffb34e";
    ctx.beginPath();
    ctx.arc(37, -50, 5 + Math.sin(time * 0.008) * 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawWorldMap(canvas, time) {
    const { context: ctx, width, height } = resizeCanvas(canvas);
    const random = mulberry32(0xbadc0de);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.scale(dpr, dpr);

    const mapWidth = width / dpr;
    const mapHeight = height / dpr;

    ctx.fillStyle = "#183b2d";
    ctx.fillRect(0, 0, mapWidth, mapHeight);

    ctx.fillStyle = "#275342";
    ctx.beginPath();
    ctx.moveTo(mapWidth * 0.1, mapHeight * 0.23);
    ctx.bezierCurveTo(
      mapWidth * 0.3,
      mapHeight * 0.02,
      mapWidth * 0.75,
      mapHeight * 0.12,
      mapWidth * 0.9,
      mapHeight * 0.32,
    );
    ctx.bezierCurveTo(
      mapWidth * 1.04,
      mapHeight * 0.58,
      mapWidth * 0.78,
      mapHeight * 0.89,
      mapWidth * 0.49,
      mapHeight * 0.92,
    );
    ctx.bezierCurveTo(
      mapWidth * 0.2,
      mapHeight * 1.02,
      mapWidth * 0.01,
      mapHeight * 0.68,
      mapWidth * 0.1,
      mapHeight * 0.23,
    );
    ctx.fill();

    ctx.strokeStyle = "rgba(202, 176, 104, .46)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(mapWidth * 0.2, mapHeight * 0.75);
    ctx.bezierCurveTo(
      mapWidth * 0.35,
      mapHeight * 0.5,
      mapWidth * 0.44,
      mapHeight * 0.57,
      mapWidth * 0.63,
      mapHeight * 0.38,
    );
    ctx.stroke();

    ctx.strokeStyle = "rgba(230, 200, 125, .2)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mapWidth * 0.63, mapHeight * 0.38);
    ctx.bezierCurveTo(
      mapWidth * 0.7,
      mapHeight * 0.54,
      mapWidth * 0.77,
      mapHeight * 0.58,
      mapWidth * 0.82,
      mapHeight * 0.78,
    );
    ctx.stroke();

    ctx.fillStyle = "#be7a4c";
    ctx.fillRect(
      mapWidth * 0.24,
      mapHeight * 0.38,
      mapWidth * 0.18,
      mapHeight * 0.2,
    );

    ctx.fillStyle = "#db9659";
    for (let index = 0; index < 5; index += 1) {
      const x = mapWidth * (0.26 + index * 0.035);
      ctx.fillRect(x, mapHeight * 0.4 + (index % 2) * 25, 16, 13);
    }

    ctx.fillStyle = "#eb6e40";
    ctx.beginPath();
    ctx.arc(mapWidth * 0.78, mapHeight * 0.74, 22, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffcb6b";
    ctx.beginPath();
    ctx.arc(mapWidth * 0.33, mapHeight * 0.48, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(191, 223, 139, .5)";
    for (let index = 0; index < 65; index += 1) {
      const x = mapWidth * (0.09 + random() * 0.82);
      const y = mapHeight * (0.12 + random() * 0.76);

      ctx.fillRect(x, y, 2, 2);
      if (index % 4 === 0) {
        ctx.fillRect(x - 3, y + 3, 8, 2);
      }
    }

    const glow = ctx.createRadialGradient(
      mapWidth * 0.78,
      mapHeight * 0.74,
      2,
      mapWidth * 0.78,
      mapHeight * 0.74,
      90 + Math.sin(time * 0.002) * 8,
    );
    glow.addColorStop(0, "rgba(255, 145, 63, .32)");
    glow.addColorStop(1, "rgba(255, 145, 63, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, mapWidth, mapHeight);

    ctx.strokeStyle = "rgba(255, 218, 151, .16)";
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, mapWidth - 24, mapHeight - 24);
  }

  function setupCanvases() {
    const heroCanvas = document.querySelector("#heroCanvas");
    const worldCanvas = document.querySelector("#worldCanvas");

    let animationFrame = 0;

    const render = (time) => {
      drawHeroScene(heroCanvas, time);
      drawWorldMap(worldCanvas, time);

      if (!prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    render(0);

    window.addEventListener(
      "resize",
      () => {
        drawHeroScene(heroCanvas, 0);
        drawWorldMap(worldCanvas, 0);
      },
      { passive: true },
    );

    return () => window.cancelAnimationFrame(animationFrame);
  }

  function setupRevealAnimations() {
    const elements = document.querySelectorAll(".fade-in");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));
  }

  setConfiguredLinks();
  setupCanvases();
  setupRevealAnimations();
})();
