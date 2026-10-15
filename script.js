/**
 * Kumkum Sharma - Biotechnology Scholar Portfolio Script
 * Modern, Lightweight, Accessible Interactive Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStickyNav();
  initMobileMenu();
  initScrollSpy();
  initContactForm();
  initDynamicYear();
});

/* ==========================================================================
   1. Theme Management (Light / Dark with Local Storage)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('ks_biotech_theme') || 'light';
  
  root.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const target = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', target);
      localStorage.setItem('ks_biotech_theme', target);
    });
  }
}

/* ==========================================================================
   2. Sticky Navbar Compact State on Scroll
   ========================================================================== */
function initStickyNav() {
  const navbar = document.getElementById('main-nav');
  const progressBar = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Compact navbar
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('compact');
      } else {
        navbar.classList.remove('compact');
      }
    }

    // Scroll reading progress
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const percent = (scrollY / docHeight) * 100;
        progressBar.style.width = percent + '%';
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   4. Scroll Spy (Active Section Indication)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   5. Client-Side Contact Form Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const statusBox = document.getElementById('form-status-msg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const subject = document.getElementById('cf-subject').value.trim();
      const message = document.getElementById('cf-message').value.trim();

      // Basic client validation
      if (!name || !email || !subject || !message) {
        if (statusBox) {
          statusBox.textContent = 'Please fill out all required fields.';
          statusBox.style.color = '#ef4444';
        }
        return;
      }

      // Validate email pattern
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (statusBox) {
          statusBox.textContent = 'Please provide a valid email address.';
          statusBox.style.color = '#ef4444';
        }
        return;
      }

      const submitBtn = document.getElementById('cf-submit-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';

      // Simulation with transparent message
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (statusBox) {
          statusBox.textContent = 'Thank you for reaching out! (Form demo: message logged client-side. To receive real emails, connect Formspree or EmailJS as documented in README).';
          statusBox.style.color = 'var(--teal-primary)';
        }

        showToast('Message captured! In a deployed setup, this dispatches to your inbox.');
        
        setTimeout(() => {
          if (statusBox) statusBox.textContent = '';
        }, 7000);
      }, 700);
    });
  }
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-text');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   6. Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year-text');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
