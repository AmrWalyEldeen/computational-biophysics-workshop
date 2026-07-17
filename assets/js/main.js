(() => {
  'use strict';

  const data = window.WORKSHOP_DATA;
  if (!data) return;

  const translations = {
    en: {
      announcement: 'Registration is open for the one-month Computational Biophysics Workshop.',
      registerNow: 'Register now', brandWorkshop: 'Workshop', navAbout: 'About', navProgram: 'Program',
      navSpeakers: 'Presenters', navGallery: 'Gallery', navRegistration: 'Registration', navLocation: 'Location', register: 'Register',
      organizedBy: 'Scientific Culture Committee · Biophysics Department', heroComputational: 'Computational', heroBiophysics: 'Biophysics', heroWorkshop: 'Workshop',
      heroLead: 'A focused, one-month scientific program connecting structural bioinformatics, molecular simulation, quantum chemistry, instrumentation, and experimental validation.',
      secureSeat: 'Secure your seat', exploreProgram: 'Explore the program', month: 'Month', daysWeek: 'Days / week', coreModules: 'Core modules', presenters: 'Presenters',
      tagDocking: 'Molecular docking', tagDynamics: 'Molecular dynamics', tagDFT: 'DFT & quantum chemistry',
      aboutEyebrow: 'A complete learning pathway', aboutTitle: 'From molecular structure to validated scientific insight',
      aboutText: 'The workshop is designed for students and researchers who want a coherent, hands-on route through modern computational biophysics. Sessions combine scientific foundations, guided demonstrations, practical exercises, analysis workflows, and integrated project work.',
      meetPresenters: 'Meet the presenters', viewPosters: 'View official posters',
      featureHandsOn: 'Hands-on scientific training', featureHandsOnText: 'Practical sessions using current computational tools and open-source software.',
      featureAudience: 'Built for emerging researchers', featureAudienceText: 'Suitable for students and researchers in biology, biophysics, chemistry, physics, biotechnology, and related fields.',
      featureIntegration: 'Integrated computational workflow', featureIntegrationText: 'Move from preparation and modeling to simulation, analysis, visualization, and scientific communication.',
      featureLocation: 'On campus at Cairo University', featureLocationText: 'Hosted at the Biophysics Department, Faculty of Science, Cairo University.',
      patronageEyebrow: 'Institutional leadership', patronageTitle: 'Under the patronage of',
      programEyebrow: 'Workshop contents', programTitle: 'Eight connected modules. One scientific workflow.',
      programText: 'The curriculum is arranged as a progression: prepare the molecular system, model interactions, simulate dynamics, analyze results, and present a defensible scientific conclusion.',
      scheduleEyebrow: 'Schedule at a glance', scheduleTitle: 'Three focused days every week', scheduleText: 'The workshop runs for one month, with sessions on Saturday, Monday, and Wednesday from 09:00 to 15:00.',
      sat: 'Saturday', sun: 'Sunday', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', noSession: 'No session',
      speakersEyebrow: 'Workshop presenters', speakersTitle: 'Experts across the computational-to-experimental spectrum', speakersText: 'Explore each presenter’s lecture, expertise, affiliation, contact details, and official workshop poster.',
      filterAll: 'All presenters', filterComputational: 'Computational', filterPractical: 'Practical sessions', filterInstrumentation: 'Instrumentation', filterExperimental: 'Experimental & medical',
      impactEyebrow: 'What participants will practice', impactTitle: 'Scientific reasoning, not just software operation',
      impactText: 'The workshop emphasizes why each computational decision is made, how results should be checked, and how in silico findings can connect to instrumentation and wet-lab validation.',
      impactOne: 'Prepare reproducible molecular systems and document assumptions.', impactTwo: 'Interpret docking, simulation, and free-energy outputs critically.',
      impactThree: 'Create publication-ready analyses and scientific visualizations.', impactFour: 'Connect computational predictions with experimental strategy.',
      diagramModel: 'Model', diagramSimulate: 'Simulate', diagramAnalyze: 'Analyze', diagramValidate: 'Validate',
      galleryEyebrow: 'Official workshop materials', galleryTitle: 'Poster gallery', galleryText: 'Open any poster for a full-resolution view. The gallery includes the workshop overview in English and Arabic and the individual presenter posters.',
      registrationEyebrow: 'Registration', registrationTitle: 'Join the Computational Biophysics Workshop', registrationText: 'Complete the official Google Form to submit your registration. The QR code and the button below open the same registration form.',
      duration: 'Duration', oneMonth: 'One month', frequency: 'Frequency', threeDays: 'Three days per week', training: 'Training', lecturesPractical: 'Lectures and practical sessions',
      openForm: 'Open registration form', contactCoordinator: 'Contact scientific coordinator', scanRegister: 'Scan to register',
      venueEyebrow: 'Venue', venueTitle: 'Biophysics Department', venueAddress: 'Faculty of Science, Cairo University, Giza, Egypt', venueText: 'Use the map button or scan the QR code for directions to the workshop venue.', openMaps: 'Open in Google Maps', scanDirections: 'Scan for directions',
      footerOrganizer: 'Scientific Culture Committee, Biophysics Department, Faculty of Science, Cairo University.', quickLinks: 'Quick links', scientificCoordination: 'Scientific coordination', footerVenue: 'Biophysics Department, Faculty of Science, Cairo University.', copyright: 'Computational Biophysics Workshop. All rights reserved.', backTop: 'Back to top ↑',
      lectureTitle: 'Lecture title', openPoster: 'Open full poster', viewDetails: 'View details', poster: 'Poster', email: 'Email'
    },
    ar: {
      announcement: 'التسجيل متاح الآن في ورشة الفيزياء الحيوية الحاسوبية لمدة شهر.',
      registerNow: 'سجّل الآن', brandWorkshop: 'ورشة عمل', navAbout: 'عن الورشة', navProgram: 'المحتوى',
      navSpeakers: 'المحاضرون', navGallery: 'الملصقات', navRegistration: 'التسجيل', navLocation: 'الموقع', register: 'التسجيل',
      organizedBy: 'لجنة الثقافة العلمية · قسم الفيزياء الحيوية', heroComputational: 'الفيزياء الحيوية', heroBiophysics: 'الحاسوبية', heroWorkshop: 'ورشة عمل',
      heroLead: 'برنامج علمي مكثف لمدة شهر يربط بين المعلوماتية الحيوية البنيوية والمحاكاة الجزيئية والكيمياء الكمية والأجهزة العلمية والتحقق المعملي.',
      secureSeat: 'احجز مكانك', exploreProgram: 'استكشف المحتوى', month: 'شهر', daysWeek: 'أيام أسبوعيًا', coreModules: 'محاور رئيسية', presenters: 'محاضرًا',
      tagDocking: 'الالتحام الجزيئي', tagDynamics: 'الديناميكا الجزيئية', tagDFT: 'الكيمياء الكمية وDFT',
      aboutEyebrow: 'مسار تعليمي متكامل', aboutTitle: 'من البنية الجزيئية إلى استنتاج علمي موثوق',
      aboutText: 'صُممت الورشة للطلاب والباحثين الراغبين في مسار عملي مترابط داخل الفيزياء الحيوية الحاسوبية الحديثة. تجمع الجلسات بين الأسس العلمية والعروض الموجهة والتطبيقات العملية وتحليل النتائج والمشروع المتكامل.',
      meetPresenters: 'تعرّف على المحاضرين', viewPosters: 'شاهد الملصقات الرسمية',
      featureHandsOn: 'تدريب علمي عملي', featureHandsOnText: 'جلسات تطبيقية باستخدام أدوات حاسوبية حديثة وبرامج مفتوحة المصدر.',
      featureAudience: 'مصممة للباحثين في بداية مسيرتهم', featureAudienceText: 'مناسبة للطلاب والباحثين في الأحياء والفيزياء الحيوية والكيمياء والفيزياء والتكنولوجيا الحيوية والتخصصات المرتبطة.',
      featureIntegration: 'سير عمل حاسوبي متكامل', featureIntegrationText: 'انتقل من التحضير والنمذجة إلى المحاكاة والتحليل والتصور العلمي وعرض النتائج.',
      featureLocation: 'داخل جامعة القاهرة', featureLocationText: 'تُقام الورشة بقسم الفيزياء الحيوية، كلية العلوم، جامعة القاهرة.',
      patronageEyebrow: 'القيادات الأكاديمية', patronageTitle: 'تحت رعاية',
      programEyebrow: 'محتوى الورشة', programTitle: 'ثمانية محاور مترابطة في سير عمل علمي واحد',
      programText: 'يُقدَّم المحتوى كمسار تدريجي يبدأ بتحضير النظام الجزيئي، ثم نمذجة التفاعلات، وإجراء المحاكاة، وتحليل النتائج، وانتهاءً بتقديم استنتاج علمي قابل للدفاع عنه.',
      scheduleEyebrow: 'نظرة سريعة على المواعيد', scheduleTitle: 'ثلاثة أيام مكثفة كل أسبوع', scheduleText: 'تستمر الورشة لمدة شهر، وتُعقد الجلسات أيام السبت والاثنين والأربعاء من الساعة 09:00 إلى 15:00.',
      sat: 'السبت', sun: 'الأحد', mon: 'الاثنين', tue: 'الثلاثاء', wed: 'الأربعاء', thu: 'الخميس', fri: 'الجمعة', noSession: 'لا توجد جلسة',
      speakersEyebrow: 'محاضرو الورشة', speakersTitle: 'خبرات تمتد من الحوسبة إلى التجربة', speakersText: 'استعرض محاضرة كل متحدث وخبرته وجهة عمله وبيانات التواصل والملصق الرسمي.',
      filterAll: 'جميع المحاضرين', filterComputational: 'المجال الحاسوبي', filterPractical: 'الجلسات العملية', filterInstrumentation: 'الأجهزة العلمية', filterExperimental: 'المعملي والفيزياء الطبية',
      impactEyebrow: 'ما الذي سيتدرب عليه المشاركون؟', impactTitle: 'تفكير علمي يتجاوز مجرد تشغيل البرامج',
      impactText: 'تركز الورشة على سبب اتخاذ كل قرار حاسوبي، وكيفية فحص جودة النتائج، وكيف يمكن ربط التنبؤات الحاسوبية بالأجهزة العلمية والتحقق المعملي.',
      impactOne: 'إعداد أنظمة جزيئية قابلة لإعادة الإنتاج وتوثيق الافتراضات.', impactTwo: 'تفسير نتائج الالتحام والمحاكاة وطاقة الارتباط بصورة نقدية.',
      impactThree: 'إعداد تحليلات وأشكال علمية صالحة للنشر.', impactFour: 'ربط التنبؤات الحاسوبية باستراتيجية تجريبية مناسبة.',
      diagramModel: 'نمذجة', diagramSimulate: 'محاكاة', diagramAnalyze: 'تحليل', diagramValidate: 'تحقق',
      galleryEyebrow: 'المواد الرسمية للورشة', galleryTitle: 'معرض الملصقات', galleryText: 'افتح أي ملصق لمشاهدته بالحجم الكامل. يتضمن المعرض الملصق العام باللغتين العربية والإنجليزية وملصقات المحاضرين.',
      registrationEyebrow: 'التسجيل', registrationTitle: 'انضم إلى ورشة الفيزياء الحيوية الحاسوبية', registrationText: 'أكمل نموذج Google الرسمي لإرسال طلب التسجيل. رمز QR والزر أدناه يفتحان نموذج التسجيل نفسه.',
      duration: 'المدة', oneMonth: 'شهر واحد', frequency: 'المواعيد', threeDays: 'ثلاثة أيام أسبوعيًا', training: 'نوع التدريب', lecturesPractical: 'محاضرات وجلسات عملية',
      openForm: 'فتح نموذج التسجيل', contactCoordinator: 'التواصل مع المنسق العلمي', scanRegister: 'امسح الرمز للتسجيل',
      venueEyebrow: 'مكان الانعقاد', venueTitle: 'قسم الفيزياء الحيوية', venueAddress: 'كلية العلوم، جامعة القاهرة، الجيزة، مصر', venueText: 'استخدم زر الخرائط أو امسح رمز QR للوصول إلى مكان انعقاد الورشة.', openMaps: 'فتح الموقع على خرائط Google', scanDirections: 'امسح الرمز للوصول',
      footerOrganizer: 'لجنة الثقافة العلمية، قسم الفيزياء الحيوية، كلية العلوم، جامعة القاهرة.', quickLinks: 'روابط سريعة', scientificCoordination: 'التنسيق العلمي', footerVenue: 'قسم الفيزياء الحيوية، كلية العلوم، جامعة القاهرة.', copyright: 'ورشة الفيزياء الحيوية الحاسوبية. جميع الحقوق محفوظة.', backTop: 'العودة للأعلى ↑',
      lectureTitle: 'عنوان المحاضرة', openPoster: 'فتح الملصق الكامل', viewDetails: 'عرض التفاصيل', poster: 'الملصق', email: 'البريد الإلكتروني'
    }
  };

  const safeStorage = {
    get(key) { try { return window.localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch (_) { /* Storage can be unavailable in restricted contexts. */ } }
  };

  let currentLanguage = safeStorage.get('cbw-language') === 'ar' ? 'ar' : 'en';
  let currentFilter = 'all';
  let currentGalleryIndex = 0;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const tr = key => translations[currentLanguage][key] || translations.en[key] || key;
  const localText = (item, field) => currentLanguage === 'ar' && item[`${field}Ar`] ? item[`${field}Ar`] : item[field];

  const iconPaths = {
    university: '<path d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18M12 3l9 5H3l9-5Z"/>',
    graduation: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11.5V16c3 2.5 9 2.5 12 0v-4.5M22 9v6"/>',
    research: '<path d="M4 19h16M7 16l3-3 3 2 4-6"/><circle cx="17" cy="9" r="3"/>',
    dome: '<path d="M5 11h14M6 11a6 6 0 0 1 12 0M8 11v8M12 11v8M16 11v8M4 20h16M12 3v2"/>',
    students: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2.5-7 6-7s6 3 6 7M14 14c3.5 0 6 2.4 6 6"/>',
    book: '<path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 2V5ZM20 5a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 2V5Z"/>',
    atom: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>',
    committee: '<circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6 21v-3c0-3 2.5-5 6-5s6 2 6 5v3M1.5 21v-2.5c0-2.3 1.5-4 3.7-4.5M22.5 21v-2.5c0-2.3-1.5-4-3.7-4.5"/>',
    protein: '<path d="M4 7c3-5 6 5 9 0s6 5 7 1M4 17c3-5 6 5 9 0s6 5 7 1"/><path d="M5 8v8M19 8v8"/>',
    ligand: '<circle cx="7" cy="12" r="3"/><circle cx="17" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/><path d="m9.5 10.5 5-2M9.5 13.5l5 2"/>',
    dock: '<path d="M4 5h7v7H4zM13 12h7v7h-7z"/><path d="m10 10 4 4M14 10h4v4"/>',
    quantum: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/>',
    ppi: '<path d="M3 12c2-5 5-6 9-3-2 2-2 4 0 6-4 3-7 2-9-3ZM21 12c-2-5-5-6-9-3 2 2 2 4 0 6 4 3 7 2 9-3Z"/>',
    md: '<path d="M4 16c3-8 6 5 9-3s5 3 7-5"/><path d="M4 20h16M4 4v16"/>',
    analysis: '<path d="M4 19V5M4 19h16"/><path d="m6 15 4-4 3 2 5-7"/><circle cx="10" cy="11" r="1"/><circle cx="13" cy="13" r="1"/><circle cx="18" cy="6" r="1"/>',
    project: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9h3v4H7zM13 7h4v6h-4z"/>'
  };

  function svgIcon(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.atom}</svg>`;
  }

  function applyLanguage() {
    const html = document.documentElement;
    html.lang = currentLanguage;
    html.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.title = currentLanguage === 'ar'
      ? 'ورشة الفيزياء الحيوية الحاسوبية | جامعة القاهرة'
      : 'Computational Biophysics Workshop | Cairo University';

    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[currentLanguage][key]) el.textContent = translations[currentLanguage][key];
    });

    const languageToggle = $('.language-toggle');
    if (languageToggle) {
      $('.language-current', languageToggle).textContent = currentLanguage === 'en' ? 'AR' : 'EN';
      languageToggle.title = currentLanguage === 'en' ? 'العربية' : 'English';
      languageToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English');
    }

    renderPatronage();
    renderCurriculum();
    renderSpeakers();
    renderGallery();
  }

  function renderPatronage() {
    const grid = $('#patronage-grid');
    if (!grid) return;
    grid.innerHTML = data.patronage.map((person, index) => `
      <article class="patron-card reveal" data-delay="${(index % 4) * 60}">
        <div class="patron-icon">${svgIcon(person.icon)}</div>
        <h3>${person.name}</h3>
        <p>${currentLanguage === 'ar' ? person.roleAr : person.role}</p>
      </article>
    `).join('');
    observeReveals(grid);
  }

  function renderCurriculum() {
    const grid = $('#curriculum-grid');
    const nodes = $('#workflow-nodes');
    if (!grid || !nodes) return;
    nodes.innerHTML = data.curriculum.map(item => `
      <div class="workflow-node"><span>${item.number}</span><small>${localText(item, 'title')}</small></div>
    `).join('');
    grid.innerHTML = data.curriculum.map((item, index) => `
      <article class="module-card reveal" data-delay="${(index % 4) * 55}">
        <div class="module-top">
          <span class="module-number">${item.number}</span>
          <div class="module-icon">${svgIcon(item.icon)}</div>
        </div>
        <h3>${localText(item, 'title')}</h3>
        <p>${localText(item, 'description')}</p>
      </article>
    `).join('');
    observeReveals(grid);
  }

  function renderSpeakers() {
    const grid = $('#speakers-grid');
    if (!grid) return;
    grid.innerHTML = data.speakers.map((speaker, index) => {
      const hidden = currentFilter !== 'all' && currentFilter !== speaker.category ? ' hidden' : '';
      return `
        <article class="speaker-card reveal" data-category="${speaker.category}" data-speaker-id="${speaker.id}" data-delay="${(index % 3) * 55}"${hidden}>
          <div class="speaker-photo-wrap">
            <span class="speaker-category">${speaker.categoryLabel}</span>
            <img class="speaker-photo" src="${speaker.portrait}" alt="Portrait of ${speaker.name}" width="640" height="640" loading="lazy">
          </div>
          <div class="speaker-card-body">
            <h3>${speaker.name}</h3>
            <p class="speaker-role">${localText(speaker, 'role')}</p>
            <div class="speaker-lecture">
              <span>${tr('lectureTitle')}</span>
              <strong>${localText(speaker, 'lecture')}</strong>
            </div>
            <div class="speaker-card-actions">
              <button class="primary" type="button" data-open-speaker="${speaker.id}">${tr('viewDetails')}</button>
              <a href="${speaker.poster}" target="_blank" rel="noopener noreferrer">${tr('poster')}</a>
            </div>
          </div>
        </article>
      `;
    }).join('');
    bindSpeakerCards();
    observeReveals(grid);
  }

  function renderGallery() {
    const grid = $('#gallery-grid');
    if (!grid) return;
    grid.innerHTML = data.gallery.map((item, index) => `
      <button class="gallery-item reveal" type="button" data-gallery-index="${index}" data-delay="${(index % 4) * 45}" aria-label="Open ${item.title}">
        <img src="${item.src}" alt="${item.title}" width="1000" height="1400" loading="lazy">
        <span class="gallery-zoom" aria-hidden="true">＋</span>
        <span class="gallery-caption">${item.title}</span>
      </button>
    `).join('');
    $$('.gallery-item', grid).forEach(button => button.addEventListener('click', () => openLightbox(Number(button.dataset.galleryIndex))));
    observeReveals(grid);
  }

  function bindSpeakerCards() {
    $$('[data-open-speaker]').forEach(button => {
      button.addEventListener('click', () => openSpeaker(button.dataset.openSpeaker));
    });
  }

  function openSpeaker(id) {
    const speaker = data.speakers.find(item => item.id === id);
    const modal = $('#speaker-modal');
    if (!speaker || !modal) return;
    $('#speaker-modal-category').textContent = speaker.categoryLabel;
    $('#speaker-modal-name').textContent = speaker.name;
    $('#speaker-modal-role').textContent = localText(speaker, 'role');
    $('#speaker-modal-affiliation').textContent = localText(speaker, 'affiliation');
    $('#speaker-modal-lecture').textContent = localText(speaker, 'lecture');
    $('#speaker-modal-bio').textContent = localText(speaker, 'bio');
    const poster = $('#speaker-modal-poster');
    poster.src = speaker.poster;
    poster.alt = `${speaker.name} workshop poster`;
    $('#speaker-modal-poster-link').href = speaker.poster;
    const email = $('#speaker-modal-email');
    email.textContent = speaker.email;
    email.href = speaker.email ? `mailto:${speaker.email}` : '';
    showDialog(modal);
  }

  function openLightbox(index) {
    currentGalleryIndex = (index + data.gallery.length) % data.gallery.length;
    const item = data.gallery[currentGalleryIndex];
    const lightbox = $('#lightbox');
    $('#lightbox-image').src = item.src;
    $('#lightbox-image').alt = item.title;
    $('#lightbox-caption').textContent = item.title;
    showDialog(lightbox);
  }

  function showDialog(dialog) {
    if (!dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    }
    document.body.classList.add('modal-open');
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    document.body.classList.remove('modal-open');
  }

  function bindDialogs() {
    const speakerModal = $('#speaker-modal');
    const lightbox = $('#lightbox');
    $('.modal-close', speakerModal)?.addEventListener('click', () => closeDialog(speakerModal));
    $('.lightbox-close', lightbox)?.addEventListener('click', () => closeDialog(lightbox));
    $('.lightbox-prev')?.addEventListener('click', () => openLightbox(currentGalleryIndex - 1));
    $('.lightbox-next')?.addEventListener('click', () => openLightbox(currentGalleryIndex + 1));

    [speakerModal, lightbox].forEach(dialog => {
      dialog?.addEventListener('click', event => {
        const rect = dialog.getBoundingClientRect();
        const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
        if (outside) closeDialog(dialog);
      });
      dialog?.addEventListener('close', () => document.body.classList.remove('modal-open'));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        if (speakerModal?.open) closeDialog(speakerModal);
        if (lightbox?.open) closeDialog(lightbox);
      }
      if (lightbox?.open && event.key === 'ArrowLeft') openLightbox(currentGalleryIndex - 1);
      if (lightbox?.open && event.key === 'ArrowRight') openLightbox(currentGalleryIndex + 1);
    });
  }

  function bindFilters() {
    $$('.filter-button').forEach(button => {
      button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        $$('.filter-button').forEach(item => item.classList.toggle('is-active', item === button));
        $$('.speaker-card').forEach(card => {
          const shouldShow = currentFilter === 'all' || card.dataset.category === currentFilter;
          card.hidden = !shouldShow;
          if (shouldShow) card.classList.add('is-visible');
        });
      });
    });
  }

  function bindLinks() {
    $$('.js-register-link').forEach(link => {
      link.href = data.registrationUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
    $$('.js-map-link').forEach(link => {
      link.href = data.mapUrl;
    });
  }

  function bindNavigation() {
    const menuToggle = $('.menu-toggle');
    const navLinks = $('#nav-links');
    menuToggle?.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      navLinks.classList.toggle('is-open', !open);
    });
    $$('.nav-links a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }));

    const nav = $('.main-nav');
    const floating = $('.floating-register');
    const hero = $('.hero');
    window.addEventListener('scroll', () => {
      nav?.classList.toggle('is-scrolled', window.scrollY > 20);
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight * .72 : 600;
      floating?.classList.toggle('is-visible', window.scrollY > heroBottom);
    }, { passive: true });

    const sections = $$('main section[id]');
    const navMap = new Map($$('.nav-links a').map(link => [link.getAttribute('href').slice(1), link]));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navMap.forEach(link => link.classList.remove('is-active'));
      navMap.get(visible.target.id)?.classList.add('is-active');
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, .2, .5] });
    sections.forEach(section => observer.observe(section));
  }

  function observeReveals(root = document) {
    const elements = $$('.reveal:not([data-reveal-bound])', root);
    if (!elements.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    elements.forEach(element => {
      element.dataset.revealBound = 'true';
      observer.observe(element);
    });
  }

  function initMoleculeCanvas() {
    const canvas = $('.molecule-canvas');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(72, Math.max(32, Math.floor(width / 22)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .22,
        vy: (Math.random() - .5) * .22,
        r: index % 7 === 0 ? 2.4 : 1.3 + Math.random() * 1.1,
        gold: index % 9 === 0
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 112) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(178, 212, 255, ${(.16 * (1 - distance / 112)).toFixed(3)})`;
            ctx.lineWidth = .7;
            ctx.stroke();
          }
        }
      }
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold ? 'rgba(239,208,138,.75)' : 'rgba(212,232,255,.65)';
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  }

  function init() {
    bindLinks();
    bindNavigation();
    bindFilters();
    bindDialogs();
    $('.language-toggle')?.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      safeStorage.set('cbw-language', currentLanguage);
      applyLanguage();
    });
    applyLanguage();
    observeReveals();
    initMoleculeCanvas();
    $('#year').textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
