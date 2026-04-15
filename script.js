/* ============================================
   VetTJ — Language Toggle & Interactions
   ============================================ */

(function () {
  'use strict';

  // ---- Language System ----

  let currentLang = localStorage.getItem('vettj-lang') || 'es';

  const translations = {
    es: {
      // Nav
      nav_servicios: 'Servicios',
      nav_nosotros:  'Nosotros',
      nav_horarios:  'Horarios',
      nav_contacto:  'Contacto',
      nav_cita:      'Cita',

      // Hero
      hero_tag:   'Clínica Veterinaria · Tijuana, B.C.',
      hero_line1: 'LA SALUD',
      hero_line2: 'que tu',
      hero_line3: 'MASCOTA',
      hero_line4: 'MERECE.',
      hero_sub:   'Desde 2008 · Perros & Gatos · Español & English',
      hero_cta1:  'Llamar Ahora',
      hero_cta2:  'Ver Servicios',
      hero_since: 'DESDE',
      hero_city:  'TIJUANA',

      // Services
      sec_servicios_label: 'Nuestros Servicios',
      sec_servicios_h2:    'Todo lo que tu<br>mascota necesita.',

      // Hours
      hours_label: 'Horarios',
      hours_h2:    'Abiertos cuando<br>nos necesitas.',
      hours_p:     'Atendemos de lunes a sábado. Para emergencias fuera de horario llama a nuestra línea de urgencias.',
      hours_btn:   '📞 Emergencias 24h',
      hours_lv:    'Lunes — Viernes',
      hours_sat:   'Sábado',
      hours_sun:   'Domingo',
      hours_closed:'Solo Urgencias',
      hours_note:  '* Urgencias disponibles las 24 horas, los 7 días de la semana.',

      // About
      about_label: 'Sobre Nosotros',
      about_h2:    'Cuidamos a tu<br><em>familia</em> entera.',
      about_p1:    'En VetTJ entendemos que tus mascotas son parte de tu familia. Ubicados en el corazón de Tijuana, atendemos a la comunidad fronteriza con calidez, profesionalismo y amor por los animales — tanto en español como en inglés.',
      about_p2:    'Nuestro equipo de veterinarios certificados está listo para brindar la mejor atención médica a perros y gatos, utilizando tecnología moderna y un trato humano.',
      about_stat1: 'Años de experiencia',
      about_stat2: 'Pacientes atendidos',
      about_stat3: 'Veterinarios certificados',
      flag1:       '🇲🇽 Atención en Español',
      flag2:       '🇺🇸 English Spoken Here',

      // Pets band
      dogs_label:  'Perros',
      dogs_sub:    'Todas las razas bienvenidas',
      cats_label:  'Gatos',
      cats_sub:    'Especialistas en felinos',

      // Testimonials
      test_label:  'Testimonios',
      test_h2:     'Lo que dicen<br>nuestros clientes.',
      test1_text:  '«El mejor veterinario en Tijuana. Atendieron a mi perro Luna con mucho cuidado y profesionalismo. Los recomiendo al 100%.»',
      test1_pet:   'Mamá de Luna 🐕',
      test2_text:  '«I drive from San Diego specifically for VetTJ. Their bilingual staff makes everything so easy, and my cats Mochi and Biscuit are in the best hands.»',
      test3_text:  '«Llevé a mi gato Mango a una emergencia a las 11 de la noche y los doctores estuvieron ahí. Gracias por salvarle la vida.»',
      test3_pet:   'Papá de Mango 🐈',

      // Contact
      contact_label: 'Contacto & Ubicación',
      contact_h2:    'Visítanos en<br><em>Tijuana.</em>',
      contact_addr:  'Dirección',
      contact_phone: 'Teléfono',
      contact_border:'A solo 20 minutos del cruce fronterizo de San Ysidro. Atención en español e inglés.',
      form_h3:       'Agenda tu cita',
      form_name:     'Tu nombre',
      form_pet:      'Tu mascota',
      form_phone:    'Teléfono / WhatsApp',
      form_reason:   'Motivo de la consulta',
      form_submit:   'Enviar por WhatsApp 💬',
      form_dog:      '🐕 Perro / Dog',
      form_cat:      '🐈 Gato / Cat',
      form_placeholder_reason: 'Ej: Vacuna anual / Annual vaccine...',

      // Footer
      footer_tagline: 'Cuidamos a tus mascotas como si fueran las nuestras.',
      footer_svc:     'Servicios',
      footer_clinic:  'Clínica',
      footer_find:    'Encuéntranos',
      footer_gmed:    'Medicina General',
      footer_vacc:    'Vacunación',
      footer_lab:     'Laboratorio',
      footer_surg:    'Cirugía',
      footer_groom:   'Grooming',
      footer_emerg:   'Urgencias',
      footer_about:   'Sobre Nosotros',
      footer_hours:   'Horarios',
      footer_contact: 'Contacto',
      footer_book:    'Agendar Cita',
      footer_copy:    '© 2024 VetTJ · Todos los derechos reservados',
      footer_city:    'Tijuana, Baja California, México',

      // Service cards
      svc1_h: 'Medicina General',
      svc1_p: 'Consultas de rutina, diagnóstico y tratamiento para perros y gatos de todas las edades.',
      svc2_h: 'Vacunación',
      svc2_p: 'Esquemas completos para perros y gatos. Protege a tu mascota con las vacunas esenciales.',
      svc3_h: 'Laboratorio',
      svc3_p: 'Análisis de sangre, orina y más. Resultados rápidos para un diagnóstico preciso.',
      svc4_h: 'Cirugía',
      svc4_p: 'Esterilizaciones, castraciones y procedimientos quirúrgicos con equipo moderno.',
      svc5_h: 'Estética & Grooming',
      svc5_p: 'Baño, corte de pelo y uñas para que tu mascota siempre luzca increíble.',
      svc6_h: 'Urgencias',
      svc6_p: 'Atención de emergencias veterinarias. Llámanos, estamos para ayudarte cuando más lo necesitas.',
    },

    en: {
      nav_servicios: 'Services',
      nav_nosotros:  'About',
      nav_horarios:  'Hours',
      nav_contacto:  'Contact',
      nav_cita:      'Book',

      hero_tag:   'Veterinary Clinic · Tijuana, B.C.',
      hero_line1: 'THE HEALTH',
      hero_line2: 'your pet',
      hero_line3: 'TRULY',
      hero_line4: 'DESERVES.',
      hero_sub:   'Since 2008 · Dogs & Cats · Español & English',
      hero_cta1:  'Call Now',
      hero_cta2:  'Our Services',
      hero_since: 'SINCE',
      hero_city:  'TIJUANA',

      sec_servicios_label: 'Our Services',
      sec_servicios_h2:    'Everything your<br>pet needs.',

      hours_label: 'Hours',
      hours_h2:    'Open when<br>you need us.',
      hours_p:     'Open Monday through Saturday. For after-hours emergencies, call our emergency line.',
      hours_btn:   '📞 24h Emergencies',
      hours_lv:    'Monday — Friday',
      hours_sat:   'Saturday',
      hours_sun:   'Sunday',
      hours_closed:'Emergencies Only',
      hours_note:  '* Emergency care available 24 hours, 7 days a week.',

      about_label: 'About Us',
      about_h2:    'We care for your<br><em>whole</em> family.',
      about_p1:    'At VetTJ we understand your pets are part of your family. Located in the heart of Tijuana, we serve the border community with warmth, professionalism, and a love for animals — in both Spanish and English.',
      about_p2:    'Our team of certified veterinarians is ready to provide the best medical care for dogs and cats, using modern technology and a compassionate approach.',
      about_stat1: 'Years of experience',
      about_stat2: 'Patients treated',
      about_stat3: 'Certified vets',
      flag1:       '🇲🇽 Spanish Available',
      flag2:       '🇺🇸 English Spoken Here',

      dogs_label:  'Dogs',
      dogs_sub:    'All breeds welcome',
      cats_label:  'Cats',
      cats_sub:    'Feline specialists',

      test_label:  'Testimonials',
      test_h2:     'What our<br>clients say.',
      test1_text:  '«Best vet in Tijuana. They treated my dog Luna with so much care and professionalism. 100% recommended.»',
      test1_pet:   "Luna's mom 🐕",
      test2_text:  '«I drive from San Diego specifically for VetTJ. Their bilingual staff makes everything so easy, and my cats Mochi and Biscuit are in the best hands.»',
      test3_text:  '«I brought my cat Mango in for an emergency at 11pm and the doctors were there. Thank you for saving his life.»',
      test3_pet:   "Mango's dad 🐈",

      contact_label: 'Contact & Location',
      contact_h2:    'Come visit us in<br><em>Tijuana.</em>',
      contact_addr:  'Address',
      contact_phone: 'Phone',
      contact_border:'Just 20 minutes from the San Ysidro border crossing. Service in Spanish and English.',
      form_h3:       'Book an Appointment',
      form_name:     'Your name',
      form_pet:      'Your pet',
      form_phone:    'Phone / WhatsApp',
      form_reason:   'Reason for visit',
      form_submit:   'Send via WhatsApp 💬',
      form_dog:      '🐕 Dog / Perro',
      form_cat:      '🐈 Cat / Gato',
      form_placeholder_reason: 'E.g.: Annual vaccine / Vacuna anual...',

      footer_tagline: 'We care for your pets as if they were our own.',
      footer_svc:     'Services',
      footer_clinic:  'Clinic',
      footer_find:    'Find Us',
      footer_gmed:    'General Medicine',
      footer_vacc:    'Vaccination',
      footer_lab:     'Laboratory',
      footer_surg:    'Surgery',
      footer_groom:   'Grooming',
      footer_emerg:   'Emergencies',
      footer_about:   'About Us',
      footer_hours:   'Hours',
      footer_contact: 'Contact',
      footer_book:    'Book Appointment',
      footer_copy:    '© 2024 VetTJ · All rights reserved',
      footer_city:    'Tijuana, Baja California, Mexico',

      svc1_h: 'General Medicine',
      svc1_p: 'Routine check-ups, diagnosis, and treatment for dogs and cats of all ages.',
      svc2_h: 'Vaccination',
      svc2_p: 'Complete vaccination schedules for dogs and cats. Keep your pet protected.',
      svc3_h: 'Laboratory',
      svc3_p: 'Blood work, urinalysis and more. Fast results for precise diagnosis.',
      svc4_h: 'Surgery',
      svc4_p: 'Spay & neuter and surgical procedures with modern equipment.',
      svc5_h: 'Grooming & Spa',
      svc5_p: 'Bath, haircut, and nail trim so your pet always looks amazing.',
      svc6_h: 'Emergency',
      svc6_p: "Emergency veterinary care. Call us, we're here when you need us most.",
    },
  };

  // DOM map: [selector, property, key]
  const domMap = [
    // Nav
    ['a.nav__link[href="#servicios"]', 'textContent', 'nav_servicios'],
    ['a.nav__link[href="#nosotros"]',  'textContent', 'nav_nosotros'],
    ['a.nav__link[href="#horarios"]',  'textContent', 'nav_horarios'],
    ['a.nav__link[href="#contacto"]',  'textContent', 'nav_contacto'],
    ['.btn--nav',                      'textContent', 'nav_cita'],

    // Hero
    ['.hero__tag',      'textContent', 'hero_tag'],
    ['.hero__sub',      'textContent', 'hero_sub'],
    ['#heroCta1',       'textContent', 'hero_cta1'],
    ['#heroCta2',       'textContent', 'hero_cta2'],

    // Services section header
    ['.services__header .label', 'textContent', 'sec_servicios_label'],
    ['.services__header h2',     'innerHTML',   'sec_servicios_h2'],

    // Service cards h3 + p (by index)
    ['#svc1h', 'textContent', 'svc1_h'],
    ['#svc1p', 'textContent', 'svc1_p'],
    ['#svc2h', 'textContent', 'svc2_h'],
    ['#svc2p', 'textContent', 'svc2_p'],
    ['#svc3h', 'textContent', 'svc3_h'],
    ['#svc3p', 'textContent', 'svc3_p'],
    ['#svc4h', 'textContent', 'svc4_h'],
    ['#svc4p', 'textContent', 'svc4_p'],
    ['#svc5h', 'textContent', 'svc5_h'],
    ['#svc5p', 'textContent', 'svc5_p'],
    ['#svc6h', 'textContent', 'svc6_h'],
    ['#svc6p', 'textContent', 'svc6_p'],

    // About
    ['.about .label',       'textContent', 'about_label'],
    ['.about__text h2',     'innerHTML',   'about_h2'],
    ['#aboutP1',            'textContent', 'about_p1'],
    ['#aboutP2',            'textContent', 'about_p2'],
    ['#aboutStat1',         'textContent', 'about_stat1'],
    ['#aboutStat2',         'textContent', 'about_stat2'],
    ['#aboutStat3',         'textContent', 'about_stat3'],
    ['#flag1',              'textContent', 'flag1'],
    ['#flag2',              'textContent', 'flag2'],

    // Pets band
    ['#dogsLabel',  'textContent', 'dogs_label'],
    ['#dogsSub',    'textContent', 'dogs_sub'],
    ['#catsLabel',  'textContent', 'cats_label'],
    ['#catsSub',    'textContent', 'cats_sub'],

    // Hours
    ['.hours .label',     'textContent', 'hours_label'],
    ['.hours h2',         'innerHTML',   'hours_h2'],
    ['#hoursP',           'textContent', 'hours_p'],
    ['#hoursBtn',         'textContent', 'hours_btn'],
    ['#hoursLV',          'textContent', 'hours_lv'],
    ['#hoursSat',         'textContent', 'hours_sat'],
    ['#hoursSun',         'textContent', 'hours_sun'],
    ['#hoursClosed',      'textContent', 'hours_closed'],
    ['#hoursNote',        'textContent', 'hours_note'],

    // Testimonials
    ['.testimonials .label', 'textContent', 'test_label'],
    ['.testimonials h2',     'innerHTML',   'test_h2'],
    ['#test1Text',  'textContent', 'test1_text'],
    ['#test1Pet',   'textContent', 'test1_pet'],
    ['#test2Text',  'textContent', 'test2_text'],
    ['#test3Text',  'textContent', 'test3_text'],
    ['#test3Pet',   'textContent', 'test3_pet'],

    // Contact
    ['.contact .label',      'textContent', 'contact_label'],
    ['.contact__info h2',    'innerHTML',   'contact_h2'],
    ['#contactAddr',         'textContent', 'contact_addr'],
    ['#contactPhone',        'textContent', 'contact_phone'],
    ['#contactBorder',       'textContent', 'contact_border'],
    ['.contact__form-wrap h3','textContent','form_h3'],
    ['#formName',            'textContent', 'form_name'],
    ['#formPet',             'textContent', 'form_pet'],
    ['#formPhone',           'textContent', 'form_phone'],
    ['#formReason',          'textContent', 'form_reason'],
    ['#formSubmit',          'textContent', 'form_submit'],

    // Footer
    ['.footer__brand p',    'textContent', 'footer_tagline'],
    ['#footerSvc',          'textContent', 'footer_svc'],
    ['#footerClinic',       'textContent', 'footer_clinic'],
    ['#footerFind',         'textContent', 'footer_find'],
    ['#footerGmed',         'textContent', 'footer_gmed'],
    ['#footerVacc',         'textContent', 'footer_vacc'],
    ['#footerLab',          'textContent', 'footer_lab'],
    ['#footerSurg',         'textContent', 'footer_surg'],
    ['#footerGroom',        'textContent', 'footer_groom'],
    ['#footerEmerg',        'textContent', 'footer_emerg'],
    ['#footerAbout',        'textContent', 'footer_about'],
    ['#footerHours',        'textContent', 'footer_hours'],
    ['#footerContact',      'textContent', 'footer_contact'],
    ['#footerBook',         'textContent', 'footer_book'],
    ['#footerCopy',         'textContent', 'footer_copy'],
    ['#footerCity',         'textContent', 'footer_city'],
  ];

  function applyLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;

    domMap.forEach(([sel, prop, key]) => {
      const el = document.querySelector(sel);
      if (el && t[key] !== undefined) el[prop] = t[key];
    });

    // Hero lines (special markup)
    const lines = document.querySelectorAll('.hero__line');
    const lineKeys = ['hero_line1', 'hero_line2', 'hero_line3', 'hero_line4'];
    lines.forEach((el, i) => { if (t[lineKeys[i]]) el.textContent = t[lineKeys[i]]; });

    // Form placeholder
    const ta = document.getElementById('consultaTextarea');
    if (ta) ta.placeholder = t['form_placeholder_reason'] || '';

    // Form select options
    const sel = document.querySelector('.contact__form select');
    if (sel) {
      const opts = sel.querySelectorAll('option');
      if (opts[0]) opts[0].textContent = t['form_dog'] || '';
      if (opts[1]) opts[1].textContent = t['form_cat'] || '';
    }

    // Badge spinning label
    const badgeSpans = document.querySelectorAll('.hero__badge-inner span');
    if (badgeSpans[0]) badgeSpans[0].textContent = t['hero_since'];
    if (badgeSpans[1]) badgeSpans[1].textContent = t['hero_city'];

    // Body class for pill position
    document.body.classList.toggle('lang-en', lang === 'en');

    localStorage.setItem('vettj-lang', lang);
  }

  // ---- Add IDs to elements that need them ----
  function addIds() {
    // Hero CTAs
    const heroBtns = document.querySelectorAll('.hero__cta .btn');
    if (heroBtns[0]) heroBtns[0].id = 'heroCta1';
    if (heroBtns[1]) heroBtns[1].id = 'heroCta2';

    // Service cards
    const cards = document.querySelectorAll('.service-card');
    const svcNums = [1, 2, 3, 4, 5, 6];
    cards.forEach((card, i) => {
      const n = svcNums[i];
      const h = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h) h.id = `svc${n}h`;
      if (p) p.id = `svc${n}p`;
    });

    // About paragraphs
    const aboutPs = document.querySelectorAll('.about__text p');
    if (aboutPs[0]) aboutPs[0].id = 'aboutP1';
    if (aboutPs[1]) aboutPs[1].id = 'aboutP2';

    // About stat labels
    const statLabels = document.querySelectorAll('.about__stat-label');
    if (statLabels[0]) statLabels[0].id = 'aboutStat1';
    if (statLabels[1]) statLabels[1].id = 'aboutStat2';
    if (statLabels[2]) statLabels[2].id = 'aboutStat3';

    // Flag badges
    const flags = document.querySelectorAll('.flag-badge');
    if (flags[0]) flags[0].id = 'flag1';
    if (flags[1]) flags[1].id = 'flag2';

    // Pets band
    const pLabels = document.querySelectorAll('.pets-band__label h3');
    const pSubs   = document.querySelectorAll('.pets-band__label p');
    if (pLabels[0]) pLabels[0].id = 'dogsLabel';
    if (pSubs[0])   pSubs[0].id   = 'dogsSub';
    if (pLabels[1]) pLabels[1].id = 'catsLabel';
    if (pSubs[1])   pSubs[1].id   = 'catsSub';

    // Hours
    const hoursPs = document.querySelectorAll('.hours__text p');
    if (hoursPs[0]) hoursPs[0].id = 'hoursP';
    const hoursBtn = document.querySelector('.hours .btn--primary');
    if (hoursBtn) hoursBtn.id = 'hoursBtn';
    const hoursRows = document.querySelectorAll('.hours__row span:first-child');
    const hoursVals = document.querySelectorAll('.hours__row--closed span:last-child');
    if (hoursRows[0]) hoursRows[0].id = 'hoursLV';
    if (hoursRows[1]) hoursRows[1].id = 'hoursSat';
    if (hoursRows[2]) hoursRows[2].id = 'hoursSun';
    if (hoursVals[0]) hoursVals[0].id = 'hoursClosed';
    const hoursNote = document.querySelector('.hours__note');
    if (hoursNote) hoursNote.id = 'hoursNote';

    // Testimonials
    const testCards = document.querySelectorAll('.testimonial-card');
    if (testCards[0]) {
      const p = testCards[0].querySelector('p'); if (p) p.id = 'test1Text';
      const pet = testCards[0].querySelector('.testimonial-card__pet'); if (pet) pet.id = 'test1Pet';
    }
    if (testCards[1]) {
      const p = testCards[1].querySelector('p'); if (p) p.id = 'test2Text';
    }
    if (testCards[2]) {
      const p = testCards[2].querySelector('p'); if (p) p.id = 'test3Text';
      const pet = testCards[2].querySelector('.testimonial-card__pet'); if (pet) pet.id = 'test3Pet';
    }

    // Contact
    const contactStrongs = document.querySelectorAll('.contact__item strong');
    if (contactStrongs[0]) contactStrongs[0].id = 'contactAddr';
    if (contactStrongs[1]) contactStrongs[1].id = 'contactPhone';
    const borderP = document.querySelector('.contact__border-note p');
    if (borderP) borderP.id = 'contactBorder';

    // Form labels
    const formLabels = document.querySelectorAll('.contact__form .form-row label');
    if (formLabels[0]) formLabels[0].id = 'formName';
    if (formLabels[1]) formLabels[1].id = 'formPet';
    if (formLabels[2]) formLabels[2].id = 'formPhone';
    if (formLabels[3]) formLabels[3].id = 'formReason';
    const formSubmit = document.querySelector('.contact__form .btn--primary');
    if (formSubmit) formSubmit.id = 'formSubmit';

    // Footer columns
    const footerH4s = document.querySelectorAll('.footer__links h4');
    if (footerH4s[0]) footerH4s[0].id = 'footerSvc';
    if (footerH4s[1]) footerH4s[1].id = 'footerClinic';
    const footerContactH4 = document.querySelector('.footer__contact-block h4');
    if (footerContactH4) footerContactH4.id = 'footerFind';

    const footerLinks1 = document.querySelectorAll('.footer__links:nth-of-type(2) a');
    const footerLinks2 = document.querySelectorAll('.footer__links:nth-of-type(3) a');
    const f1ids = ['footerGmed','footerVacc','footerLab','footerSurg','footerGroom','footerEmerg'];
    const f2ids = ['footerAbout','footerHours','footerContact','footerBook'];
    footerLinks1.forEach((a, i) => { if (f1ids[i]) a.id = f1ids[i]; });
    footerLinks2.forEach((a, i) => { if (f2ids[i]) a.id = f2ids[i]; });

    const footerBottom = document.querySelectorAll('.footer__bottom span');
    if (footerBottom[0]) footerBottom[0].id = 'footerCopy';
    if (footerBottom[1]) footerBottom[1].id = 'footerCity';
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    addIds();
    applyLanguage(currentLang);

    // Language toggle button
    const toggle = document.getElementById('langToggle');
    toggle.addEventListener('click', function () {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(currentLang);
    });

    // Nav scroll effect
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function () {
      nav.style.boxShadow = window.scrollY > 40
        ? '0 2px 24px rgba(0,0,0,0.12)'
        : 'none';
    });

    // WhatsApp form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs  = form.querySelectorAll('input, select, textarea');
      const name    = inputs[0].value.trim();
      const petType = inputs[1].options[inputs[1].selectedIndex].text;
      const petName = inputs[2].value.trim();
      const phone   = inputs[3].value.trim();
      const reason  = inputs[4].value.trim();

      const t = translations[currentLang];
      const msg = currentLang === 'es'
        ? `Hola VetTJ! Me llamo ${name || '(nombre)'}, y quisiera agendar una cita para mi mascota ${petType}${petName ? ' ' + petName : ''}. Teléfono: ${phone || '(teléfono)'}. Motivo: ${reason || '(sin especificar)'}.`
        : `Hello VetTJ! My name is ${name || '(name)'}, and I'd like to book an appointment for my ${petType}${petName ? ' ' + petName : ''}. Phone: ${phone || '(phone)'}. Reason: ${reason || '(not specified)'}.`;

      const url = 'https://wa.me/526641234567?text=' + encodeURIComponent(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });

    // Scroll reveal (Intersection Observer)
    const revealEls = document.querySelectorAll(
      '.service-card, .testimonial-card, .about__text, .about__visual, .hours__inner > *, .contact__info, .contact__form-wrap'
    );

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(function (el) {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  });

})();
