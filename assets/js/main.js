(() => {
  'use strict';

  const data = window.WORKSHOP_DATA;
  if (!data) return;

  const translations = {
    en: {
      announcement: 'Registration is closed. The Opening Day and Training Days 1-4 are complete — Training Day 4 docking materials, photos, and the Colab workflow are now available.',
      registerNow: 'Record attendance', brandWorkshop: 'Workshop', navAbout: 'About', navProgram: 'Program', navMaterials: 'Materials',
      navSpeakers: 'Presenters', navGallery: 'Workshop gallery', navRegistration: 'Attendance', navLocation: 'Location', register: 'Attendance',
      organizedBy: 'Scientific Culture Committee · Biophysics Department', heroComputational: 'Computational', heroBiophysics: 'Biophysics', heroWorkshop: 'Workshop',
      heroLead: 'The Computational Biophysics Workshop is underway. The Opening Day and Training Days 1-4 are complete. Training Day 4 on 12 August covered protein-ligand docking and virtual screening, and its practical materials are now available.',
      secureSeat: 'Record your attendance', exploreProgram: 'Open Day 4 materials', month: 'Events complete', daysWeek: 'Days / week', coreModules: 'Program modules', presenters: 'Presenters',
      tagDocking: 'Molecular docking', tagDynamics: 'Molecular dynamics', tagDFT: 'DFT & quantum chemistry',
      aboutEyebrow: 'A complete learning pathway', aboutTitle: 'From molecular structure to validated scientific insight',
      aboutText: 'The workshop is designed for students and researchers who want a coherent, hands-on route through modern computational biophysics. Sessions combine scientific foundations, guided demonstrations, practical exercises, analysis workflows, and integrated project work.',
      watchVideo: 'Watch the workshop video', meetPresenters: 'Meet the presenters', viewPosters: 'View official posters',
      videoEyebrow: 'Workshop introduction', videoTitle: 'See what the Computational Biophysics Workshop is about',
      videoText: 'Watch this short introduction to the workshop identity, scientific scope, and hands-on learning experience. Training Day 4 is now complete.',
      videoDuration: '30-second introduction', videoResponsive: 'Optimized for mobile and desktop', registerAfterVideo: 'Record Opening Day attendance',
      videoCaption: 'Computational Biophysics Workshop · Faculty of Science, Cairo University',
      dayOneEyebrow: 'Workshop update', dayOneStatus: 'Opening Day + Training Days 1-4 completed', dayOneTitle: 'Five workshop events are now complete',
      dayOneText: 'Training Day 4 on 12 August focused on protein-ligand docking and virtual screening, including docking theory, receptor and ligand preparation, active-site definition, AutoDock Vina workflows, redocking validation, and the MultiTargetDocking Colab workflow.',
      attendanceButton: 'Record your attendance', browseOpeningMaterials: 'Browse Training Day 4 materials', downloadFullProgram: 'Download full workshop program', downloadDayOneProgram: 'Download full workshop program', programPdfPending: 'The full workshop program will appear here when the file is uploaded.',
      dayOneGalleryEyebrow: 'Workshop activity highlights', dayOneGalleryTitle: 'Explore photographs by workshop day',
      dayOneGalleryText: 'Choose the Opening Day or Training Days 1-4. Six photographs are displayed at a time and automatically reshuffle every 10 seconds.',
      shuffleStatus: 'Showing 6 photos · reshuffles every 10 seconds', shuffleNow: 'Shuffle now', galleryOpeningTab: 'Opening Day', galleryTrainingDayOneTab: 'Training Day 1 · 5 Aug', galleryTrainingDayTwoTab: 'Training Day 2 · 8 Aug', galleryTrainingDayThreeTab: 'Training Day 3 · 10 Aug', galleryTrainingDayFourTab: 'Training Day 4 · 12 Aug',
      registrationStatusLabel: 'Registration', registrationClosed: 'Closed', workshopStatusLabel: 'Workshop status', inProgress: 'In progress',
      completedLabel: 'Completed', firstDay: 'Opening Day + Training Days 1-4', attendanceFor: 'Attendance for', dayOne: 'Opening Day', formType: 'Form', presenceRecord: 'Presence record',
      featureHandsOn: 'Hands-on scientific training', featureHandsOnText: 'Practical sessions using current computational tools and open-source software.',
      featureAudience: 'Built for emerging researchers', featureAudienceText: 'Suitable for students and researchers in biology, biophysics, chemistry, physics, biotechnology, and related fields.',
      featureIntegration: 'Integrated computational workflow', featureIntegrationText: 'Move from preparation and modeling to simulation, analysis, visualization, and scientific communication.',
      featureLocation: 'On campus at Cairo University', featureLocationText: 'Hosted at the Biophysics Department, Faculty of Science, Cairo University.',
      patronageEyebrow: 'Institutional leadership', patronageTitle: 'Under the patronage of',
      programEyebrow: 'August 2026 program', programTitle: 'Choose a date to explore the complete agenda.',
      programText: 'Use the interactive calendar to view each training day, its modules, lecturers, activity type, delivery mode, and available learning materials.',
      scheduleEyebrow: 'Schedule at a glance', scheduleTitle: 'Three focused days every week', scheduleText: 'The Opening Day and Training Days 1-4 are complete. The remaining sessions continue through August 2026 on Saturday, Monday, and Wednesday from 10:00 to 15:00.',
      sat: 'Saturday', sun: 'Sunday', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', noSession: 'No session',
      speakersEyebrow: 'Workshop presenters', speakersTitle: 'Experts across the computational-to-experimental spectrum', speakersText: 'Explore each presenter’s lecture, expertise, affiliation, contact details, and official workshop poster.',
      filterAll: 'All presenters', filterComputational: 'Computational', filterPractical: 'Practical sessions', filterInstrumentation: 'Instrumentation', filterExperimental: 'Experimental & medical',
      impactEyebrow: 'What participants will practice', impactTitle: 'Scientific reasoning, not just software operation',
      impactText: 'The workshop emphasizes why each computational decision is made, how results should be checked, and how in silico findings can connect to instrumentation and wet-lab validation.',
      impactOne: 'Prepare reproducible molecular systems and document assumptions.', impactTwo: 'Interpret docking, simulation, and free-energy outputs critically.',
      impactThree: 'Create publication-ready analyses and scientific visualizations.', impactFour: 'Connect computational predictions with experimental strategy.',
      diagramModel: 'Model', diagramSimulate: 'Simulate', diagramAnalyze: 'Analyze', diagramValidate: 'Validate',
      galleryEyebrow: 'Official workshop materials', galleryTitle: 'Official poster gallery', galleryText: 'Open any official poster for a full-resolution view. This gallery includes the workshop overview and presenter posters.',
      registrationEyebrow: 'Attendance', registrationTitle: 'Record your Opening Day attendance', registrationText: 'Workshop registration is now closed. Participants who attended the Opening Day can record their presence using the official attendance form.',
      start: 'Start', august2026: 'August 2026', startsAugust: 'Workshop underway · 5 events completed', duration: 'Duration', oneMonth: 'One month', frequency: 'Frequency', threeDays: 'Three days per week', training: 'Training', lecturesPractical: 'Lectures and practical sessions',
      openForm: 'Open attendance form', contactCoordinator: 'Contact scientific coordinator', scanRegister: 'Scan to record Opening Day attendance',
      venueEyebrow: 'Venue', venueTitle: 'Biophysics Department', venueAddress: 'Faculty of Science, Cairo University, Giza, Egypt', venueText: 'Use the map button or scan the QR code for directions to the workshop venue.', openMaps: 'Open in Google Maps', scanDirections: 'Scan for directions',
      footerOrganizer: 'Scientific Culture Committee, Biophysics Department, Faculty of Science, Cairo University.', quickLinks: 'Quick links', scientificCoordination: 'Scientific coordination', footerVenue: 'Biophysics Department, Faculty of Science, Cairo University.', copyright: 'Computational Biophysics Workshop. All rights reserved.', backTop: 'Back to top ↑',
      calendarEyebrow: 'Interactive program calendar', pathwayEyebrow: 'Learning pathway', pathwayTitle: 'The scientific workflow across the full month',
      fullProgramEyebrow: 'Official program files', fullProgramTitle: 'Keep the full schedule available offline', fullProgramText: 'The interactive calendar is based on the official one-month program. Download the source program in PDF or DOCX format.',
      materialsEyebrow: 'Workshop learning library', materialsTitle: 'Training materials - latest session first', materialsText: 'Training Day 4 is selected by default. Open the Colab notebook, presentation guides, shared Drive folder, and practical docking files here; older sessions remain organized by day.',
      materialsChooseDay: 'Choose a day', materialsFutureReady: 'Day 4 materials are ready', materialsFutureText: 'The latest docking resources are placed first for quick participant access, while all previous workshop materials remain available.',
      lectureTitle: 'Lecture title', openPoster: 'Open full poster', viewDetails: 'View details', poster: 'Poster', email: 'Email'
    },
    ar: {
      announcement: 'أُغلق التسجيل، واكتمل اليوم الافتتاحي والأيام التدريبية من الأول إلى الرابع — وأصبحت مواد اليوم الرابع الخاصة بالالتحام والصور ودفتر Colab متاحة الآن.',
      registerNow: 'تسجيل الحضور', brandWorkshop: 'ورشة عمل', navAbout: 'عن الورشة', navProgram: 'البرنامج', navMaterials: 'المواد',
      navSpeakers: 'المحاضرون', navGallery: 'معرض صور الورشة', navRegistration: 'الحضور', navLocation: 'الموقع', register: 'الحضور',
      organizedBy: 'لجنة الثقافة العلمية · قسم الفيزياء الحيوية', heroComputational: 'الفيزياء الحيوية', heroBiophysics: 'الحاسوبية', heroWorkshop: 'ورشة عمل',
      heroLead: 'تستمر ورشة الفيزياء الحيوية الحاسوبية بعد اكتمال اليوم الافتتاحي والأيام التدريبية من الأول إلى الرابع. ركز اليوم التدريبي الرابع في 12 أغسطس على الالتحام بروتين-ليجند والفحص الافتراضي، وأصبحت مواده العملية متاحة الآن.',
      secureSeat: 'سجّل حضورك', exploreProgram: 'افتح مواد اليوم الرابع', month: 'فعاليات مكتملة', daysWeek: 'أيام أسبوعيًا', coreModules: 'وحدة بالبرنامج', presenters: 'محاضرًا',
      tagDocking: 'الالتحام الجزيئي', tagDynamics: 'الديناميكا الجزيئية', tagDFT: 'الكيمياء الكمية وDFT',
      aboutEyebrow: 'مسار تعليمي متكامل', aboutTitle: 'من البنية الجزيئية إلى استنتاج علمي موثوق',
      aboutText: 'صُممت الورشة للطلاب والباحثين الراغبين في مسار عملي مترابط داخل الفيزياء الحيوية الحاسوبية الحديثة. تجمع الجلسات بين الأسس العلمية والعروض الموجهة والتطبيقات العملية وتحليل النتائج والمشروع المتكامل.',
      watchVideo: 'شاهد فيديو الورشة', meetPresenters: 'تعرّف على المحاضرين', viewPosters: 'شاهد الملصقات الرسمية',
      videoEyebrow: 'فيديو تعريفي بالورشة', videoTitle: 'تعرّف على ورشة الفيزياء الحيوية الحاسوبية',
      videoText: 'شاهد هذا الفيديو التعريفي القصير للتعرف على هوية الورشة ونطاقها العلمي وتجربة التدريب العملي. اكتمل اليوم التدريبي الرابع الآن.',
      videoDuration: 'فيديو تعريفي مدته 30 ثانية', videoResponsive: 'محسّن للهواتف وأجهزة الحاسوب', registerAfterVideo: 'تسجيل حضور اليوم الافتتاحي',
      videoCaption: 'ورشة الفيزياء الحيوية الحاسوبية · كلية العلوم، جامعة القاهرة',
      dayOneEyebrow: 'تحديث الورشة', dayOneStatus: 'اكتمل اليوم الافتتاحي والأيام التدريبية 1-4', dayOneTitle: 'اكتملت خمس فعاليات من الورشة',
      dayOneText: 'ركز اليوم التدريبي الرابع في 12 أغسطس على الالتحام بروتين-ليجند والفحص الافتراضي، بما يشمل نظرية الالتحام وتحضير المستقبل والليجند وتحديد الموقع النشط وسير عمل AutoDock Vina والتحقق بإعادة الالتحام وسير عمل MultiTargetDocking على Colab.',
      attendanceButton: 'تسجيل الحضور', browseOpeningMaterials: 'تصفح مواد اليوم التدريبي الرابع', downloadFullProgram: 'تحميل البرنامج الكامل للورشة', downloadDayOneProgram: 'تحميل البرنامج الكامل للورشة', programPdfPending: 'سيظهر البرنامج الكامل للورشة هنا بعد رفعه.',
      dayOneGalleryEyebrow: 'أبرز لحظات الورشة', dayOneGalleryTitle: 'استعرض الصور حسب يوم الورشة',
      dayOneGalleryText: 'اختر اليوم الافتتاحي أو أحد الأيام التدريبية من الأول إلى الرابع. تُعرض ست صور في كل مرة ويُعاد ترتيبها تلقائيًا كل 10 ثوانٍ.',
      shuffleStatus: 'عرض 6 صور · إعادة ترتيب كل 10 ثوانٍ', shuffleNow: 'إعادة الترتيب الآن', galleryOpeningTab: 'اليوم الافتتاحي', galleryTrainingDayOneTab: 'اليوم التدريبي الأول · 5 أغسطس', galleryTrainingDayTwoTab: 'اليوم التدريبي الثاني · 8 أغسطس', galleryTrainingDayThreeTab: 'اليوم التدريبي الثالث · 10 أغسطس', galleryTrainingDayFourTab: 'اليوم التدريبي الرابع · 12 أغسطس',
      registrationStatusLabel: 'التسجيل', registrationClosed: 'مغلق', workshopStatusLabel: 'حالة الورشة', inProgress: 'مستمرة',
      completedLabel: 'تم الانتهاء من', firstDay: 'اليوم الافتتاحي + الأيام التدريبية 1-4', attendanceFor: 'الحضور', dayOne: 'اليوم الافتتاحي', formType: 'النموذج', presenceRecord: 'تسجيل الحضور',
      featureHandsOn: 'تدريب علمي عملي', featureHandsOnText: 'جلسات تطبيقية باستخدام أدوات حاسوبية حديثة وبرامج مفتوحة المصدر.',
      featureAudience: 'مصممة للباحثين في بداية مسيرتهم', featureAudienceText: 'مناسبة للطلاب والباحثين في الأحياء والفيزياء الحيوية والكيمياء والفيزياء والتكنولوجيا الحيوية والتخصصات المرتبطة.',
      featureIntegration: 'سير عمل حاسوبي متكامل', featureIntegrationText: 'انتقل من التحضير والنمذجة إلى المحاكاة والتحليل والتصور العلمي وعرض النتائج.',
      featureLocation: 'داخل جامعة القاهرة', featureLocationText: 'تُقام الورشة بقسم الفيزياء الحيوية، كلية العلوم، جامعة القاهرة.',
      patronageEyebrow: 'القيادات الأكاديمية', patronageTitle: 'تحت رعاية',
      programEyebrow: 'برنامج أغسطس 2026', programTitle: 'اختر تاريخًا لاستعراض جدول اليوم بالكامل',
      programText: 'استخدم التقويم التفاعلي لاستعراض كل يوم تدريبي ووحداته ومحاضريه ونوع النشاط ونمط الحضور والمواد التعليمية المتاحة.',
      scheduleEyebrow: 'نظرة سريعة على المواعيد', scheduleTitle: 'ثلاثة أيام مكثفة كل أسبوع', scheduleText: 'اكتمل اليوم الافتتاحي والأيام التدريبية 1-4، وتستمر الجلسات المتبقية خلال أغسطس 2026 أيام السبت والاثنين والأربعاء من الساعة 10:00 إلى 15:00.',
      sat: 'السبت', sun: 'الأحد', mon: 'الاثنين', tue: 'الثلاثاء', wed: 'الأربعاء', thu: 'الخميس', fri: 'الجمعة', noSession: 'لا توجد جلسة',
      speakersEyebrow: 'محاضرو الورشة', speakersTitle: 'خبرات تمتد من الحوسبة إلى التجربة', speakersText: 'استعرض محاضرة كل متحدث وخبرته وجهة عمله وبيانات التواصل والملصق الرسمي.',
      filterAll: 'جميع المحاضرين', filterComputational: 'المجال الحاسوبي', filterPractical: 'الجلسات العملية', filterInstrumentation: 'الأجهزة العلمية', filterExperimental: 'المعملي والفيزياء الطبية',
      impactEyebrow: 'ما الذي سيتدرب عليه المشاركون؟', impactTitle: 'تفكير علمي يتجاوز مجرد تشغيل البرامج',
      impactText: 'تركز الورشة على سبب اتخاذ كل قرار حاسوبي، وكيفية فحص جودة النتائج، وكيف يمكن ربط التنبؤات الحاسوبية بالأجهزة العلمية والتحقق المعملي.',
      impactOne: 'إعداد أنظمة جزيئية قابلة لإعادة الإنتاج وتوثيق الافتراضات.', impactTwo: 'تفسير نتائج الالتحام والمحاكاة وطاقة الارتباط بصورة نقدية.',
      impactThree: 'إعداد تحليلات وأشكال علمية صالحة للنشر.', impactFour: 'ربط التنبؤات الحاسوبية باستراتيجية تجريبية مناسبة.',
      diagramModel: 'نمذجة', diagramSimulate: 'محاكاة', diagramAnalyze: 'تحليل', diagramValidate: 'تحقق',
      galleryEyebrow: 'المواد الرسمية للورشة', galleryTitle: 'معرض الملصقات الرسمية', galleryText: 'افتح أي ملصق رسمي لمشاهدته بالحجم الكامل. يتضمن المعرض الملصق العام وملصقات المحاضرين.',
      registrationEyebrow: 'الحضور', registrationTitle: 'سجّل حضورك في اليوم الافتتاحي', registrationText: 'أُغلق التسجيل في الورشة. يمكن للمشاركين الذين حضروا اليوم الافتتاحي تسجيل حضورهم من خلال النموذج الرسمي.',
      start: 'موعد البدء', august2026: 'أغسطس 2026', startsAugust: 'الورشة مستمرة · اكتملت خمس فعاليات', duration: 'المدة', oneMonth: 'شهر واحد', frequency: 'المواعيد', threeDays: 'ثلاثة أيام أسبوعيًا', training: 'نوع التدريب', lecturesPractical: 'محاضرات وجلسات عملية',
      openForm: 'فتح نموذج الحضور', contactCoordinator: 'التواصل مع المنسق العلمي', scanRegister: 'امسح الرمز لتسجيل حضور اليوم الافتتاحي',
      venueEyebrow: 'مكان الانعقاد', venueTitle: 'قسم الفيزياء الحيوية', venueAddress: 'كلية العلوم، جامعة القاهرة، الجيزة، مصر', venueText: 'استخدم زر الخرائط أو امسح رمز QR للوصول إلى مكان انعقاد الورشة.', openMaps: 'فتح الموقع على خرائط Google', scanDirections: 'امسح الرمز للوصول',
      footerOrganizer: 'لجنة الثقافة العلمية، قسم الفيزياء الحيوية، كلية العلوم، جامعة القاهرة.', quickLinks: 'روابط سريعة', scientificCoordination: 'التنسيق العلمي', footerVenue: 'قسم الفيزياء الحيوية، كلية العلوم، جامعة القاهرة.', copyright: 'ورشة الفيزياء الحيوية الحاسوبية. جميع الحقوق محفوظة.', backTop: 'العودة للأعلى ↑',
      calendarEyebrow: 'تقويم البرنامج التفاعلي', pathwayEyebrow: 'مسار التعلم', pathwayTitle: 'سير العمل العلمي على مدار الشهر بالكامل',
      fullProgramEyebrow: 'ملفات البرنامج الرسمية', fullProgramTitle: 'احتفظ بالجدول الكامل للاستخدام دون اتصال', fullProgramText: 'يعتمد التقويم التفاعلي على البرنامج الرسمي الممتد لشهر. يمكنك تحميل البرنامج بصيغتي PDF وDOCX.',
      materialsEyebrow: 'مكتبة مواد الورشة', materialsTitle: 'مواد التدريب - أحدث جلسة أولًا', materialsText: 'يُفتح اليوم التدريبي الرابع افتراضيًا. يمكنك الوصول مباشرة إلى دفتر Colab والعروض ومجلد Drive وملفات تطبيق الالتحام، مع بقاء مواد الأيام السابقة منظمة حسب اليوم.',
      materialsChooseDay: 'اختر يومًا', materialsFutureReady: 'مواد اليوم الرابع جاهزة', materialsFutureText: 'تظهر أحدث موارد الالتحام أولًا لسهولة وصول المشاركين، مع استمرار إتاحة جميع مواد الأيام السابقة.',
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
  let currentLightboxItems = data.gallery;
  let dayOneShuffleTimer = 0;
  let lastDayOneSelection = '';
  let selectedWorkshopGallery = 'day-4';

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
    renderDayOneGallery(false);
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


  function shuffledIndices(length) {
    const indices = Array.from({ length }, (_, index) => index);
    for (let i = indices.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }

  function activeWorkshopGallery() {
    if (selectedWorkshopGallery === 'opening') return Array.isArray(data.dayOneGallery) ? data.dayOneGallery : [];
    if (selectedWorkshopGallery === 'day-1') return Array.isArray(data.trainingDayOneGallery) ? data.trainingDayOneGallery : [];
    if (selectedWorkshopGallery === 'day-2') return Array.isArray(data.trainingDayTwoGallery) ? data.trainingDayTwoGallery : [];
    if (selectedWorkshopGallery === 'day-3') return Array.isArray(data.trainingDayThreeGallery) ? data.trainingDayThreeGallery : [];
    return Array.isArray(data.trainingDayFourGallery) ? data.trainingDayFourGallery : [];
  }

  function renderWorkshopGalleryTabs() {
    const tabs = $('#workshop-gallery-tabs');
    if (!tabs) return;
    const items = [
      { id: 'opening', label: tr('galleryOpeningTab'), count: Array.isArray(data.dayOneGallery) ? data.dayOneGallery.length : 0 },
      { id: 'day-1', label: tr('galleryTrainingDayOneTab'), count: Array.isArray(data.trainingDayOneGallery) ? data.trainingDayOneGallery.length : 0 },
      { id: 'day-2', label: tr('galleryTrainingDayTwoTab'), count: Array.isArray(data.trainingDayTwoGallery) ? data.trainingDayTwoGallery.length : 0 },
      { id: 'day-3', label: tr('galleryTrainingDayThreeTab'), count: Array.isArray(data.trainingDayThreeGallery) ? data.trainingDayThreeGallery.length : 0 },
      { id: 'day-4', label: tr('galleryTrainingDayFourTab'), count: Array.isArray(data.trainingDayFourGallery) ? data.trainingDayFourGallery.length : 0 }
    ];
    tabs.innerHTML = items.map(item => `
      <button type="button" class="workshop-gallery-tab${selectedWorkshopGallery === item.id ? ' is-active' : ''}" data-workshop-gallery="${item.id}" aria-pressed="${selectedWorkshopGallery === item.id}">
        <span>${item.label}</span><strong>${item.count}</strong>
      </button>`).join('');
    $$('[data-workshop-gallery]', tabs).forEach(button => button.addEventListener('click', () => {
      selectedWorkshopGallery = button.dataset.workshopGallery;
      lastDayOneSelection = '';
      renderDayOneGallery(true);
    }));
  }

  function chooseDayOnePhotos(items) {
    const count = Math.min(6, items.length);
    let selection = shuffledIndices(items.length).slice(0, count);
    let signature = `${selectedWorkshopGallery}:${selection.join(',')}`;
    if (signature === lastDayOneSelection && items.length > 1) {
      selection = shuffledIndices(items.length).slice(0, count);
      signature = `${selectedWorkshopGallery}:${selection.join(',')}`;
    }
    lastDayOneSelection = signature;
    return selection;
  }

  function renderDayOneGallery(restartTimer = true) {
    const grid = $('#day-one-gallery-grid');
    const items = activeWorkshopGallery();
    renderWorkshopGalleryTabs();
    if (!grid || !items.length) return;

    const selection = chooseDayOnePhotos(items);
    grid.classList.add('is-changing');

    window.setTimeout(() => {
      grid.innerHTML = selection.map((index, position) => {
        const item = items[index];
        return `
          <button class="day-one-photo reveal is-visible" type="button" data-day-one-index="${index}" aria-label="Open ${localText(item, 'title')}">
            <img src="${item.src}" alt="${localText(item, 'title')}" width="1600" height="900" loading="${position < 3 ? 'eager' : 'lazy'}" decoding="async">
            <span class="day-one-photo-overlay"><strong>${localText(item, 'title')}</strong><small>${position + 1}/${selection.length}</small></span>
          </button>
        `;
      }).join('');

      $$('.day-one-photo', grid).forEach(button => {
        button.addEventListener('click', () => openLightbox(Number(button.dataset.dayOneIndex), items));
      });
      grid.classList.remove('is-changing');
    }, grid.children.length ? 180 : 0);

    if (restartTimer) startDayOneShuffle();
  }

  function startDayOneShuffle() {
    window.clearInterval(dayOneShuffleTimer);
    dayOneShuffleTimer = window.setInterval(() => {
      if (!document.hidden) renderDayOneGallery(false);
    }, 10000);
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
    $$('.gallery-item', grid).forEach(button => button.addEventListener('click', () => openLightbox(Number(button.dataset.galleryIndex), data.gallery)));
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

  function openLightbox(index, items = data.gallery) {
    currentLightboxItems = items;
    currentGalleryIndex = (index + currentLightboxItems.length) % currentLightboxItems.length;
    const item = currentLightboxItems[currentGalleryIndex];
    const lightbox = $('#lightbox');
    $('#lightbox-image').src = item.src;
    $('#lightbox-image').alt = localText(item, 'title');
    $('#lightbox-caption').textContent = localText(item, 'title');
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
    $('.lightbox-prev')?.addEventListener('click', () => openLightbox(currentGalleryIndex - 1, currentLightboxItems));
    $('.lightbox-next')?.addEventListener('click', () => openLightbox(currentGalleryIndex + 1, currentLightboxItems));

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
      if (lightbox?.open && event.key === 'ArrowLeft') openLightbox(currentGalleryIndex - 1, currentLightboxItems);
      if (lightbox?.open && event.key === 'ArrowRight') openLightbox(currentGalleryIndex + 1, currentLightboxItems);
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


  async function initDayOneProgramLink() {
    const link = $('.day-one-program-link');
    const note = $('.program-pdf-note');
    if (!link || !data.dayOneProgramUrl) return;
    link.href = data.dayOneProgramUrl;

    try {
      const response = await fetch(data.dayOneProgramUrl, { method: 'HEAD', cache: 'no-store' });
      if (!response.ok) return;
      link.hidden = false;
      if (note) note.hidden = true;
    } catch (_) {
      // The PDF button remains hidden until the file is uploaded to the expected path.
    }
  }

  function initMoleculeCanvas() {
    const canvas = $('.molecule-canvas');
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;
    let running = false;

    const device = () => document.documentElement.dataset.device || 'desktop';

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, width, height);
    };

    const resize = () => {
      if (device() === 'mobile') {
        canvas.setAttribute('aria-hidden', 'true');
        stop();
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const divisor = device() === 'tablet' ? 34 : 22;
      const maximum = device() === 'tablet' ? 44 : 72;
      const minimum = device() === 'tablet' ? 22 : 32;
      const count = Math.min(maximum, Math.max(minimum, Math.floor(width / divisor)));

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
      if (!running || device() === 'mobile') return;
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

    const start = () => {
      if (device() === 'mobile' || document.hidden) {
        stop();
        return;
      }
      resize();
      if (!running) {
        running = true;
        draw();
      }
    };

    start();
    window.addEventListener('devicechange', start);
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  }

  function init() {
    bindLinks();
    bindNavigation();
    bindFilters();
    bindDialogs();
    $('.shuffle-now-button')?.addEventListener('click', () => renderDayOneGallery(true));
    initDayOneProgramLink();
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) startDayOneShuffle();
      else window.clearInterval(dayOneShuffleTimer);
    });
    $('.language-toggle')?.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      safeStorage.set('cbw-language', currentLanguage);
      applyLanguage();
    });
    applyLanguage();
    startDayOneShuffle();
    observeReveals();
    initMoleculeCanvas();
    $('#year').textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
