/**
 * Kumkum Sharma - Biotechnology Scholar Portfolio
 * Interactive Application Logic & In-Silico Biological Simulations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light Theme with LocalStorage)
  initTheme();

  // 2. Mobile Navigation Toggle
  initMobileNav();

  // 3. Scroll Progress Indicator & Active Section Spy
  initScrollSpy();

  // 4. Hero Subtitle Typewriter Effect
  initTypewriter();

  // 5. Skills Matrix Filtering
  initSkillsFilter();

  // 6. Interactive In-Silico BLAST Lab Simulator
  initBlastSimulator();

  // 7. Contact Form Handling & Feedback Toast
  initContactForm();

  // 8. Print & Document Handlers
  initPrintHandlers();

  // 9. Update Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* ==========================================================================
   1. Theme Management
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve stored theme or default to light
  const storedTheme = localStorage.getItem('ks_theme') || 'light';
  htmlRoot.setAttribute('data-theme', storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('ks_theme', nextTheme);
    });
  }
}

/* ==========================================================================
   2. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   3. Scroll Progress & ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const progressBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Update progress bar
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (progressBar && height > 0) {
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }

    // Active Section Spy
    let currentId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
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
   4. Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const targetElement = document.getElementById('typewriter');
  if (!targetElement) return;

  const roles = [
    "Biotechnology Scientist",
    "Molecular Biology Researcher",
    "Genomics & Bioinformatics Scholar",
    "Future R&D Specialist",
    "GLP Laboratory Trainee"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      targetElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. Skills Matrix Filtering
   ========================================================================== */
function initSkillsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. Interactive In-Silico BLAST Lab Simulator
   ========================================================================== */
function initBlastSimulator() {
  const sequenceSelect = document.getElementById('sample-seq-select');
  const runBtn = document.getElementById('run-blast-btn');
  const fastaCodeEl = document.getElementById('fasta-content');
  const fastaLenEl = document.getElementById('fasta-length');
  const resultsCard = document.getElementById('blast-results');

  const resScore = document.getElementById('res-score');
  const resEvalue = document.getElementById('res-evalue');
  const resIdentity = document.getElementById('res-identity');
  const resMatch = document.getElementById('res-match');
  const resSummary = document.getElementById('res-summary');

  // Pre-configured scientific biological datasets
  const database = {
    insulin: {
      length: '168 bp',
      header: '>sp|P01308|INS_HUMAN Insulin precursor [Homo sapiens]',
      seq: 'ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGAC\nCCAGCCGCAGCCTTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTAC\nCTAGTGTGCGGGGAACGAGGCTTCTTCTACACACCCAAGACCCGCCGG',
      score: '286 bits',
      evalue: '2e-74',
      identity: '99.2%',
      match: 'Homo sapiens (Human Insulin Exon 2)',
      summary: 'The query shows 99.2% alignment homology to human proinsulin. Critical disulfide-bond forming cysteine residues (Cys-A7, Cys-B7, Cys-A20) are fully preserved. High confidence candidate for recombinant expression vector design.'
    },
    gfp: {
      length: '210 bp',
      header: '>sp|P42212|GFP_AEQVI Green fluorescent protein [Aequorea victoria]',
      seq: 'ATGAGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATTCTTGTTGAATTAGATGGT\nGATGTTAATGGGCACAAATTTTCTGTCAGTGGAGAGGGTGAAGGTGATGCAACATACGGA\nAAACTTACCCTTAAATTTATTTGCACTACTGGAAAACTACCTGTTCCATGGCCAACACTT',
      score: '342 bits',
      evalue: '1e-92',
      identity: '98.5%',
      match: 'Aequorea victoria (GFP Fluorescent Reporter)',
      summary: 'Significant homology with wild-type jellyfish green fluorescent protein. The fluorophore chromophore triad (Ser65-Tyr66-Gly67) is intact within the beta-barrel cylinder, rendering it optimal for in-vivo gene expression visualization.'
    },
    rbcl: {
      length: '195 bp',
      header: '>gi|434882|gb|L13485.1|SOIRBCL Spinacia oleracea ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit (rbcL) gene',
      seq: 'ATGTCACCACAAACAGAAACTAAAGCAAGTGTTGGATTCAAAGCTGGTGTTAAAGATTAT\nAAATTGACTTATTATACTCCTGAATATGAAACCAAAGATACTGATATCTTGGCAGCATTC\nCGAGTAACTCCTCAACCTGGAGTTCCGCCTGAAGAAGCAGGGGCTGCGGTAGCTGCCGAA',
      score: '315 bits',
      evalue: '4e-85',
      identity: '99.5%',
      match: 'Spinacia oleracea (Chloroplast rbcL Marker)',
      summary: 'Chloroplast rbcL barcode sequence correctly aligned. Zero frameshifts detected in the catalytic RuBisCO active pocket. Suitable for plant DNA extraction validation and taxonomic barcoding experiments.'
    },
    '16s': {
      length: '180 bp',
      header: '>NR_024570.1 Escherichia coli strain K-12 16S ribosomal RNA gene, partial sequence',
      seq: 'AGAGTTTGATCATGGCTCAGATTGAACGCTGGCGGCAGGCCTAACACATGCAAGTCGAAC\nGGTAACAGGAAGAAGCTTGCTTCTTTGCTGACGAGTGGCGGACGGGTGAGTAATGTCTGG\nGAAACTGCCTGATGGAGGGGGATAACTACTGGAAACGGTAGCTAATACCGCATAACGTCG',
      score: '310 bits',
      evalue: '3e-81',
      identity: '100.0%',
      match: 'Escherichia coli K-12 (16S rRNA Marker)',
      summary: '100% identity match to bacterial 16S ribosomal RNA conserved hypervariable regions V1-V2. Validates microbiological culture purity and confirms absence of non-target contamination in culture growth assays.'
    }
  };

  function updateSequenceDisplay() {
    const key = sequenceSelect.value;
    const data = database[key];
    if (data && fastaCodeEl && fastaLenEl) {
      fastaLenEl.textContent = `Length: ${data.length}`;
      fastaCodeEl.textContent = `${data.header}\n${data.seq}`;
    }
  }

  if (sequenceSelect) {
    sequenceSelect.addEventListener('change', updateSequenceDisplay);
  }

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const key = sequenceSelect.value;
      const data = database[key];
      if (!data) return;

      // Animate button during "computation"
      const originalBtnHTML = runBtn.innerHTML;
      runBtn.disabled = true;
      runBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Aligning via NCBI BLAST...`;

      // Simulated calculation latency
      setTimeout(() => {
        runBtn.disabled = false;
        runBtn.innerHTML = originalBtnHTML;

        // Populate results
        if (resScore) resScore.textContent = data.score;
        if (resEvalue) resEvalue.textContent = data.evalue;
        if (resIdentity) resIdentity.textContent = data.identity;
        if (resMatch) resMatch.textContent = data.match;
        if (resSummary) resSummary.textContent = data.summary;

        // Re-trigger visual highlight animation
        if (resultsCard) {
          resultsCard.style.animation = 'none';
          void resultsCard.offsetWidth; // trigger reflow
          resultsCard.style.animation = 'fadeIn 0.4s ease';
        }

        showToast(`BLAST Analysis Complete: ${data.match}`);
      }, 700);
    });
  }
}

/* ==========================================================================
   7. Contact Form & Toast Notifications
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('sender-name');
      const emailInput = document.getElementById('sender-email');
      const subjectInput = document.getElementById('sender-subject');
      const messageInput = document.getElementById('sender-message');

      if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
        if (statusEl) {
          statusEl.textContent = 'Please fill out all required fields.';
          statusEl.style.color = '#ef4444';
        }
        return;
      }

      // Simulated successful dispatch
      const submitBtn = document.getElementById('form-submit-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Inquiry...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (statusEl) {
          statusEl.textContent = 'Thank you! Your message has been recorded.';
          statusEl.style.color = 'var(--primary)';
        }

        showToast('Inquiry received! Kumkum Sharma will review your message.');

        setTimeout(() => {
          if (statusEl) statusEl.textContent = '';
        }, 6000);
      }, 1000);
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================================================
   8. Print & Document Handlers
   ========================================================================== */
function initPrintHandlers() {
  const printBtn = document.getElementById('print-cv-btn');
  const downloadSummaryBtn = document.getElementById('download-summary-btn');

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (downloadSummaryBtn) {
    downloadSummaryBtn.addEventListener('click', () => {
      showToast('Opening print dialog to save profile as PDF...');
      setTimeout(() => {
        window.print();
      }, 500);
    });
  }
}
