/**
 * Wimalina & Partners — Public Affairs Engine (Monochrome & Red Theme)
 */

document.addEventListener('DOMContentLoaded', () => {
    initAmbientCanvas();
    initVideoModalAndAudio();
    initStatsCounter();
    initShowcaseFilters();
    initNavigation();
    initContactForm();
});

/* ==========================================================================
   1. Ambient Particle & Mesh Canvas Engine (Red & Silver Accent)
   ========================================================================== */
function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.color = Math.random() > 0.6 ? 'rgba(197, 168, 128, ' : 'rgba(148, 163, 184, ';
            this.alpha = Math.random() * 0.4 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            if (mouse.x && mouse.y) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    let force = (mouse.radius - distance) / mouse.radius;
                    this.x -= (dx / distance) * force * 3;
                    this.y -= (dy / distance) * force * 3;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.alpha + ')';
            ctx.fill();
        }
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 75);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    let opacity = (1 - dist / 120) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.strokeStyle = `rgba(197, 168, 128, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   2. Video Showreel Modal & Sound Engine
   ========================================================================== */
function initVideoModalAndAudio() {
    const video = document.getElementById('background-video');
    const videoBackdrop = document.getElementById('videoBackdrop');
    const soundTogglePill = document.getElementById('soundToggle');
    const modalSoundToggle = document.getElementById('modalSoundToggle');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    
    const triggerBtns = [
        document.getElementById('headerShowreelBtn'),
        document.getElementById('heroShowreelBtn')
    ].filter(Boolean);

    function openModal() {
        if (!videoBackdrop) return;
        videoBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (video) video.play();
    }

    function closeModal() {
        if (!videoBackdrop) return;
        videoBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    triggerBtns.forEach(btn => btn.addEventListener('click', openModal));
    if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeModal);

    if (videoBackdrop) {
        videoBackdrop.addEventListener('click', (e) => {
            if (e.target === videoBackdrop) closeModal();
        });
    }

    function toggleAudio() {
        if (!video) return;

        video.muted = !video.muted;
        const isMuted = video.muted;

        if (soundTogglePill) {
            const statusText = soundTogglePill.querySelector('.sound-status-text');
            if (isMuted) {
                soundTogglePill.classList.remove('unmuted');
                soundTogglePill.classList.add('muted');
                if (statusText) statusText.textContent = 'Audio: Off';
            } else {
                soundTogglePill.classList.remove('muted');
                soundTogglePill.classList.add('unmuted');
                if (statusText) statusText.textContent = 'Audio: On';
            }
        }

        if (modalSoundToggle) {
            const icon = modalSoundToggle.querySelector('.sound-icon');
            const label = modalSoundToggle.querySelector('.sound-label');
            if (isMuted) {
                if (icon) icon.textContent = '🔇';
                if (label) label.textContent = 'Unmute Audio';
            } else {
                if (icon) icon.textContent = '🔊';
                if (label) label.textContent = 'Mute Audio';
            }
        }
    }

    if (soundTogglePill) soundTogglePill.addEventListener('click', toggleAudio);
    if (modalSoundToggle) modalSoundToggle.addEventListener('click', toggleAudio);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.code === 'Space' && videoBackdrop && videoBackdrop.classList.contains('active')) {
            e.preventDefault();
            toggleAudio();
        }
    });
}

/* ==========================================================================
   3. Animated Stats Counter (Scroll-Triggered)
   ========================================================================== */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(num => {
                    const target = parseFloat(num.getAttribute('data-target'));
                    const isDecimal = target % 1 !== 0;
                    let current = 0;
                    const duration = 2000;
                    const stepTime = 30;
                    const steps = duration / stepTime;
                    const increment = target / steps;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            num.textContent = isDecimal ? target.toFixed(2) : Math.round(target);
                            clearInterval(timer);
                        } else {
                            num.textContent = isDecimal ? current.toFixed(2) : Math.round(current);
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.getElementById('stats');
    if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   4. Showcase Filtering Tabs
   ========================================================================== */
function initShowcaseFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const showcaseCards = document.querySelectorAll('.showcase-card');

    if (!filterTabs.length) return;

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            showcaseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   5. Navigation & Header Effects
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById('siteHeader');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }
}

/* ==========================================================================
   6. Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('inquiryForm');
    const feedback = document.getElementById('formFeedback');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
            if (feedback) {
                feedback.className = 'form-feedback success';
                feedback.textContent = '✓ Thank you! Your inquiry has been submitted successfully. Our partners will get back to you shortly.';
                feedback.style.display = 'block';
            }
            form.reset();
            setTimeout(() => {
                if (feedback) feedback.style.display = 'none';
            }, 5000);
        } else {
            form.reportValidity();
        }
    });
}
