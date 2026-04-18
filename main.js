/* ═══════════════════════════════════════════════════════════════════
   ForecastIQ — main.js
   Particle System · Scroll Animations · Nav · Counter · Form
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar scroll effect ─────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function updateNavbar() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ── Mobile menu toggle ────────────────────────────────────────── */
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ── Particle Canvas ──────────────────────────────────────────── */
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  let particles = [];
  let animFrame;
  let mouse = { x: -9999, y: -9999 };

  const PARTICLE_CONFIG = {
    count: 90,
    maxDist: 130,
    colors: ['#00D4FF', '#4070FF', '#F0A500', '#00FFB3'],
    minRadius: 1.2,
    maxRadius: 2.8,
    speed: 0.35,
    mouseRadius: 160,
    mouseForce: 0.06,
  };

  function resizeCanvas() {
    const hero = document.getElementById('hero');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticle() {
    const colorIndex = Math.floor(Math.random() * PARTICLE_CONFIG.colors.length);
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * PARTICLE_CONFIG.speed,
      vy: (Math.random() - 0.5) * PARTICLE_CONFIG.speed,
      r: PARTICLE_CONFIG.minRadius + Math.random() * (PARTICLE_CONFIG.maxRadius - PARTICLE_CONFIG.minRadius),
      color: PARTICLE_CONFIG.colors[colorIndex],
      alpha: 0.4 + Math.random() * 0.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.015,
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
      particles.push(createParticle());
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update & draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < PARTICLE_CONFIG.maxDist) {
          const opacity = (1 - dist / PARTICLE_CONFIG.maxDist) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    particles.forEach(p => {
      // Mouse repulsion
      const mx = p.x - mouse.x;
      const my = p.y - mouse.y;
      const md = Math.sqrt(mx * mx + my * my);
      if (md < PARTICLE_CONFIG.mouseRadius) {
        const force = (1 - md / PARTICLE_CONFIG.mouseRadius) * PARTICLE_CONFIG.mouseForce;
        p.vx += (mx / md) * force;
        p.vy += (my / md) * force;
      }

      // Velocity damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Speed cap
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > PARTICLE_CONFIG.speed * 3) {
        p.vx = (p.vx / speed) * PARTICLE_CONFIG.speed * 3;
        p.vy = (p.vy / speed) * PARTICLE_CONFIG.speed * 3;
      }

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Pulse
      p.pulse += p.pulseSpeed;
      const pulsedR = p.r + Math.sin(p.pulse) * 0.4;
      const pulsedAlpha = p.alpha + Math.sin(p.pulse) * 0.1;

      // Wrap around edges
      if (p.x < -20) p.x = canvas.width + 20;
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.y < -20) p.y = canvas.height + 20;
      if (p.y > canvas.height + 20) p.y = -20;

      // Glow effect
      ctx.beginPath();
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedR * 3);
      grd.addColorStop(0, p.color + 'AA');
      grd.addColorStop(1, p.color + '00');
      ctx.fillStyle = grd;
      ctx.arc(p.x, p.y, pulsedR * 3, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulsedR, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = pulsedAlpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    animFrame = requestAnimationFrame(drawParticles);
  }

  function initCanvas() {
    resizeCanvas();
    initParticles();
    cancelAnimationFrame(animFrame);
    drawParticles();
  }

  // Mouse tracking (hero section only)
  const heroEl = document.getElementById('hero');
  heroEl.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  heroEl.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Touch support
  heroEl.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const t = e.touches[0];
    mouse.x = t.clientX - rect.left;
    mouse.y = t.clientY - rect.top;
  }, { passive: true });

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  initCanvas();

  /* ── Intersection Observer — Scroll Reveal ────────────────────── */
  const revealTargets = document.querySelectorAll(
    '.reveal-fade, .reveal-scale, .reveal-left, .reveal-right'
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(() => {
          el.classList.add('revealed');
        }, delay);
        revealObserver.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ── Animated Counters ────────────────────────────────────────── */
  const counterEls = document.querySelectorAll('.stat-number[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const startVal = 0;

    function update(timestamp) {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counterEls.forEach(el => counterObserver.observe(el));

  /* ── Smooth scroll for anchor links ──────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      const navH = navbar.getBoundingClientRect().height;
      const top = targetEl.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── Parallax hint — hero badge wobble ───────────────────────── */
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      const heroH = heroEl.offsetHeight;
      if (s < heroH) {
        heroBadge.style.transform = `translateY(${s * 0.06}px)`;
      }
    }, { passive: true });
  }

  /* ── Feature card tilt effect ─────────────────────────────────── */
  const tiltCards = document.querySelectorAll('.feature-card, .decision-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      card.style.transform = `translateY(-4px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
      card.style.transition = 'transform 0.1s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });

  /* ── Active nav link highlight on scroll ─────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkEls.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${id}`) {
              link.style.color = 'var(--teal)';
            }
          });
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach(s => sectionObserver.observe(s));

  /* ── FAQ Accordion ────────────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    if (!btn || !answer) return;

    // Remove hidden attr so CSS animation can work
    answer.removeAttribute('hidden');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a')?.classList.remove('open-a');
          other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('open', !isOpen);
      answer.classList.toggle('open-a', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

})();
