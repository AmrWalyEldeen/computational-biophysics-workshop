(() => {
  'use strict';

  const model = window.WORKSHOP_PROGRAM;
  if (!model) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const text = value => {
    const language = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[language] || value.en || '';
  };
  const language = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';

  const copy = {
    en: {
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      selectDay: 'Select a workshop date',
      completed: 'Completed', today: 'Today', upcoming: 'Upcoming',
      opening: 'Opening', trainingDay: 'Day', modules: 'Modules', activity: 'Activity', lecturers: 'Lecturers', format: 'Format', time: 'Time',
      viewMaterials: 'View materials for this day', noMaterials: 'Materials will be added here after this session.',
      fullProgram: 'Full program', downloadPdf: 'View program PDF', downloadDocx: 'Download program DOCX',
      allDays: 'All days', allTypes: 'All types', slides: 'Slides', video: 'Video', drive: 'Shared folder', notebook: 'Colab notebook', website: 'Website', file: 'Practical files',
      searchPlaceholder: 'Search materials by title or presenter', clearSearch: 'Clear search',
      open: 'Open', viewPdf: 'View PDF', download: 'Download', watch: 'Watch on YouTube', openFolder: 'Open shared folder', openNotebook: 'Open in Colab', openWebsite: 'Open website', downloadPack: 'Download file pack',
      resourcesFound: count => `${count} resource${count === 1 ? '' : 's'}`,
      noResults: 'No materials match the selected filters.',
      availableNow: 'Available now', comingSoon: 'Coming after the session',
      monthHelp: 'Choose a highlighted date to see the complete agenda.',
      materialHelp: 'Choose a day, then filter or search its learning resources.',
      week: 'Week', session: 'Session'
    },
    ar: {
      weekdays: ['أحد', 'اثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'],
      selectDay: 'اختر تاريخًا من البرنامج',
      completed: 'مكتمل', today: 'اليوم', upcoming: 'قادم',
      opening: 'افتتاح', trainingDay: 'اليوم', modules: 'الوحدات', activity: 'نوع النشاط', lecturers: 'المحاضرون', format: 'النمط', time: 'الوقت',
      viewMaterials: 'عرض مواد هذا اليوم', noMaterials: 'ستُضاف مواد هذا اليوم هنا بعد انتهاء الجلسة.',
      fullProgram: 'البرنامج الكامل', downloadPdf: 'عرض برنامج PDF', downloadDocx: 'تحميل برنامج DOCX',
      allDays: 'كل الأيام', allTypes: 'كل الأنواع', slides: 'شرائح', video: 'فيديو', drive: 'مجلد مشترك', notebook: 'دفتر Colab', website: 'موقع', file: 'ملفات عملية',
      searchPlaceholder: 'ابحث في المواد بالعنوان أو اسم المحاضر', clearSearch: 'مسح البحث',
      open: 'فتح', viewPdf: 'عرض PDF', download: 'تحميل', watch: 'المشاهدة على YouTube', openFolder: 'فتح المجلد المشترك', openNotebook: 'فتح في Colab', openWebsite: 'فتح الموقع', downloadPack: 'تحميل حزمة الملفات',
      resourcesFound: count => `${count} ${count === 1 ? 'مادة' : 'مواد'}`,
      noResults: 'لا توجد مواد مطابقة لعوامل التصفية المحددة.',
      availableNow: 'متاحة الآن', comingSoon: 'ستتاح بعد الجلسة',
      monthHelp: 'اختر تاريخًا مميزًا لعرض تفاصيل البرنامج كاملة.',
      materialHelp: 'اختر يومًا ثم صفِّ المواد أو ابحث داخلها.',
      week: 'الأسبوع', session: 'الجلسة'
    }
  };
  const tr = key => copy[language()][key];

  let selectedProgramDay = 'day-7';
  let selectedMaterialsDay = 'day-7';
  let selectedType = 'all';
  let searchTerm = '';

  function localToday() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function dayStatus(day) {
    const today = localToday();
    if (day.materialsAvailable) return 'completed';
    if (day.date < today) return 'completed';
    if (day.date === today) return 'today';
    return 'upcoming';
  }

  function statusLabel(status) {
    return status === 'completed' ? tr('completed') : status === 'today' ? tr('today') : tr('upcoming');
  }

  function formatDate(dateString, options = {}) {
    const date = new Date(`${dateString}T12:00:00`);
    const locale = language() === 'ar' ? 'ar-EG' : 'en-GB';
    return new Intl.DateTimeFormat(locale, {
      weekday: options.weekday === false ? undefined : 'long',
      day: 'numeric', month: options.short ? 'short' : 'long', year: options.year === false ? undefined : 'numeric'
    }).format(date);
  }

  function compactDayLabel(day) {
    return day.id === 'opening'
      ? tr('opening')
      : `${tr('trainingDay')} ${day.sequence}`;
  }

  function getDay(id) {
    return model.days.find(day => day.id === id) || model.days[0];
  }

  function renderProgramCalendar() {
    const calendar = $('#program-calendar-grid');
    const strip = $('#program-date-strip');
    if (!calendar || !strip) return;

    const events = new Map(model.days.map(day => [Number(day.date.slice(-2)), day]));
    const firstWeekday = new Date(2026, 7, 1).getDay();
    const cells = [];
    tr('weekdays').forEach(day => cells.push(`<div class="program-calendar-weekday">${day}</div>`));
    for (let i = 0; i < firstWeekday; i += 1) cells.push('<div class="program-calendar-cell is-empty" aria-hidden="true"></div>');
    for (let date = 1; date <= 31; date += 1) {
      const day = events.get(date);
      if (!day) {
        cells.push(`<div class="program-calendar-cell"><span class="program-calendar-number">${date}</span></div>`);
        continue;
      }
      const status = dayStatus(day);
      const active = day.id === selectedProgramDay;
      cells.push(`
        <button class="program-calendar-cell has-session status-${status}${active ? ' is-selected' : ''}" type="button"
          data-program-day="${day.id}" aria-pressed="${active}" aria-label="${compactDayLabel(day)} - ${formatDate(day.date)}">
          <span class="program-calendar-number">${date}</span>
          <strong>${compactDayLabel(day)}</strong>
          <small>${statusLabel(status)}</small>
        </button>`);
    }
    calendar.innerHTML = cells.join('');

    strip.innerHTML = model.days.map(day => {
      const status = dayStatus(day);
      const active = day.id === selectedProgramDay;
      return `<button type="button" class="program-date-chip status-${status}${active ? ' is-selected' : ''}" data-program-day="${day.id}" aria-pressed="${active}">
        <span>${formatDate(day.date, { short: true, year: false, weekday: false })}</span>
        <strong>${compactDayLabel(day)}</strong>
      </button>`;
    }).join('');

    $$('[data-program-day]').forEach(button => {
      button.addEventListener('click', () => selectProgramDay(button.dataset.programDay));
    });
  }

  function renderProgramDetails() {
    const panel = $('#program-day-details');
    if (!panel) return;
    const day = getDay(selectedProgramDay);
    const status = dayStatus(day);
    const modules = day.modules.map((module, moduleIndex) => `
      <article class="agenda-module">
        <div class="agenda-module-index">${String(moduleIndex + 1).padStart(2, '0')}</div>
        <div>
          <h4>${text(module.title)}</h4>
          ${module.topics?.length ? `<ul>${module.topics.map(topic => `<li>${text(topic)}</li>`).join('')}</ul>` : ''}
        </div>
      </article>`).join('');
    panel.innerHTML = `
      <div class="agenda-header">
        <div>
          <div class="agenda-kickers">
            <span class="status-badge status-${status}">${statusLabel(status)}</span>
            <span>${text(day.week)}</span>
          </div>
          <p class="agenda-date">${formatDate(day.date)}</p>
          <h3>${text(day.title)}</h3>
        </div>
        <div class="agenda-day-number"><small>${day.id === 'opening' ? tr('session') : tr('trainingDay')}</small><strong>${day.id === 'opening' ? 'O' : day.sequence}</strong></div>
      </div>
      <div class="agenda-facts">
        <div><span>${tr('time')}</span><strong>${text(day.time)}</strong></div>
        <div><span>${tr('format')}</span><strong>${text(day.mode)}</strong></div>
        <div><span>${tr('activity')}</span><strong>${text(day.activity)}</strong></div>
      </div>
      <div class="agenda-modules">
        <div class="agenda-section-title"><span>${tr('modules')}</span><strong>${day.modules.length}</strong></div>
        ${modules}
      </div>
      <div class="agenda-lecturers">
        <span>${tr('lecturers')}</span>
        <div>${day.lecturers.map(item => `<strong>${text(item)}</strong>`).join('')}</div>
      </div>
      <div class="agenda-actions">
        <button class="button button--gold" type="button" id="program-view-materials">${tr('viewMaterials')}</button>
        <a class="button button--outline" href="${model.fullProgram.pdf}" target="_blank" rel="noopener noreferrer">${tr('downloadPdf')}</a>
      </div>`;
    $('#program-view-materials')?.addEventListener('click', () => {
      selectedMaterialsDay = day.id;
      selectedType = 'all';
      searchTerm = '';
      const input = $('#materials-search');
      if (input) input.value = '';
      renderMaterials();
      $('#materials')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function selectProgramDay(id) {
    selectedProgramDay = id;
    renderProgramCalendar();
    renderProgramDetails();
  }

  function materialTypeLabel(type) {
    if (type === 'slides') return tr('slides');
    if (type === 'video') return tr('video');
    if (type === 'drive') return tr('drive');
    if (type === 'notebook') return tr('notebook');
    if (type === 'website') return tr('website');
    return tr('file');
  }

  function materialIcon(type) {
    if (type === 'slides') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>';
    if (type === 'video') return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/></svg>';
    if (type === 'drive') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h7l2 2h9v11H3z"/><path d="M3 10h18"/></svg>';
    if (type === 'notebook') return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="m8 9-2 2 2 2M16 9l2 2-2 2M10 20h4"/></svg>';
    if (type === 'website') return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9M12 3c-3 3-4 6-4 9s1 6 4 9"/></svg>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></svg>';
  }

  function resourceCard(resource) {
    const title = text(resource.title);
    const description = text(resource.description);
    const presenter = text(resource.presenter);
    const meta = text(resource.meta);
    if (resource.type === 'video') {
      return `<article class="material-card material-card--video">
        <div class="material-video-frame"><iframe src="${resource.embed}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        <div class="material-card-body">
          <div class="material-card-top"><span class="material-type">${materialIcon(resource.type)}${materialTypeLabel(resource.type)}</span><span>${meta}</span></div>
          <h3>${title}</h3><p class="material-presenter">${presenter}</p><p>${description}</p>
          <div class="material-actions"><a class="button button--navy" href="${resource.url}" target="_blank" rel="noopener noreferrer">${tr('watch')}</a></div>
        </div>
      </article>`;
    }
    if (resource.type === 'drive') {
      return `<article class="material-card material-card--drive">
        <div class="material-drive-visual">${materialIcon(resource.type)}<span>DRIVE</span></div>
        <div class="material-card-body">
          <div class="material-card-top"><span class="material-type">${materialIcon(resource.type)}${materialTypeLabel(resource.type)}</span><span>${meta}</span></div>
          <h3>${title}</h3><p class="material-presenter">${presenter}</p><p>${description}</p>
          <div class="material-actions"><a class="button button--navy" href="${resource.url}" target="_blank" rel="noopener noreferrer">${tr('openFolder')}</a></div>
        </div>
      </article>`;
    }
    if (resource.type === 'notebook') {
      return `<article class="material-card material-card--drive material-card--notebook">
        <div class="material-drive-visual material-notebook-visual">${materialIcon(resource.type)}<span>COLAB</span></div>
        <div class="material-card-body">
          <div class="material-card-top"><span class="material-type">${materialIcon(resource.type)}${materialTypeLabel(resource.type)}</span><span>${meta}</span></div>
          <h3>${title}</h3><p class="material-presenter">${presenter}</p><p>${description}</p>
          <div class="material-actions"><a class="button button--navy" href="${resource.url}" target="_blank" rel="noopener noreferrer">${tr('openNotebook')}</a></div>
        </div>
      </article>`;
    }
    if (resource.type === 'website') {
      return `<article class="material-card material-card--drive material-card--website">
        <div class="material-drive-visual material-website-visual">${materialIcon(resource.type)}<span>WEB</span></div>
        <div class="material-card-body">
          <div class="material-card-top"><span class="material-type">${materialIcon(resource.type)}${materialTypeLabel(resource.type)}</span><span>${meta}</span></div>
          <h3>${title}</h3><p class="material-presenter">${presenter}</p><p>${description}</p>
          <div class="material-actions"><a class="button button--navy" href="${resource.url}" target="_blank" rel="noopener noreferrer">${tr('openWebsite')}</a></div>
        </div>
      </article>`;
    }
    if (resource.type === 'file') {
      const attachments = Array.isArray(resource.attachments) ? resource.attachments : [];
      return `<article class="material-card material-card--drive material-card--file">
        <div class="material-drive-visual material-file-visual">${materialIcon(resource.type)}<span>FILES</span></div>
        <div class="material-card-body">
          <div class="material-card-top"><span class="material-type">${materialIcon(resource.type)}${materialTypeLabel(resource.type)}</span><span>${meta}</span></div>
          <h3>${title}</h3><p class="material-presenter">${presenter}</p><p>${description}</p>
          ${attachments.length ? `<div class="material-file-list">${attachments.map(item => `<a href="${item.url}" download><span>${text(item.label)}</span><small>↓</small></a>`).join('')}</div>` : ''}
          <div class="material-actions"><a class="button button--navy" href="${resource.url}" download>${tr('downloadPack')}</a></div>
        </div>
      </article>`;
    }
    return `<article class="material-card material-card--slides">
      <a class="material-thumbnail" href="${resource.url}" target="_blank" rel="noopener noreferrer"><img src="${resource.thumbnail}" alt="${title}" width="960" height="600" loading="lazy"></a>
      <div class="material-card-body">
        <div class="material-card-top"><span class="material-type">${materialIcon(resource.type)}${materialTypeLabel(resource.type)}</span><span>${meta}</span></div>
        <h3>${title}</h3><p class="material-presenter">${presenter}</p><p>${description}</p>
        <div class="material-actions"><a class="button button--navy" href="${resource.url}" target="_blank" rel="noopener noreferrer">${tr('viewPdf')}</a><a class="text-link" href="${resource.downloadUrl}" download>${tr('download')} ↓</a></div>
      </div>
    </article>`;
  }

  function renderMaterialsDayTabs() {
    const tabs = $('#materials-day-tabs');
    const select = $('#materials-day-select');
    if (!tabs || !select) return;
    const options = [{ id: 'all', label: tr('allDays') }, ...model.days.map(day => ({ id: day.id, label: `${compactDayLabel(day)} · ${formatDate(day.date, { short: true, year: false, weekday: false })}` }))];
    select.innerHTML = options.map(option => `<option value="${option.id}"${option.id === selectedMaterialsDay ? ' selected' : ''}>${option.label}</option>`).join('');
    tabs.innerHTML = options.map(option => {
      const count = option.id === 'all' ? model.resources.length : model.resources.filter(item => item.dayId === option.id).length;
      return `<button type="button" class="materials-day-tab${option.id === selectedMaterialsDay ? ' is-active' : ''}" data-material-day="${option.id}"><span>${option.label}</span><strong>${count}</strong></button>`;
    }).join('');
    $$('[data-material-day]', tabs).forEach(button => button.addEventListener('click', () => {
      selectedMaterialsDay = button.dataset.materialDay;
      selectedType = 'all';
      searchTerm = '';
      const search = $('#materials-search');
      if (search) search.value = '';
      renderMaterials();
    }));
    select.onchange = () => {
      selectedMaterialsDay = select.value;
      selectedType = 'all';
      searchTerm = '';
      const search = $('#materials-search');
      if (search) search.value = '';
      renderMaterials();
    };
  }

  function renderMaterialFilters() {
    const filters = $('#materials-type-filters');
    if (!filters) return;
    const types = ['all', 'slides', 'video', 'drive', 'notebook', 'website', 'file'];
    filters.innerHTML = types.map(type => `<button type="button" class="material-filter${selectedType === type ? ' is-active' : ''}" data-material-type="${type}">${type === 'all' ? tr('allTypes') : materialTypeLabel(type)}</button>`).join('');
    $$('[data-material-type]', filters).forEach(button => button.addEventListener('click', () => {
      selectedType = button.dataset.materialType;
      renderMaterialFilters();
      renderMaterialCards();
    }));
  }

  function filteredResources() {
    const normalized = searchTerm.trim().toLocaleLowerCase(language() === 'ar' ? 'ar' : 'en');
    return model.resources.filter(resource => {
      const dayMatch = selectedMaterialsDay === 'all' || resource.dayId === selectedMaterialsDay;
      const typeMatch = selectedType === 'all' || resource.type === selectedType;
      const haystack = `${text(resource.title)} ${text(resource.presenter)} ${text(resource.description)}`.toLocaleLowerCase(language() === 'ar' ? 'ar' : 'en');
      return dayMatch && typeMatch && (!normalized || haystack.includes(normalized));
    });
  }

  function renderMaterialCards() {
    const grid = $('#materials-resource-grid');
    const count = $('#materials-result-count');
    if (!grid || !count) return;
    const resources = filteredResources();
    count.textContent = tr('resourcesFound')(resources.length);
    if (!resources.length) {
      const chosen = selectedMaterialsDay === 'all' ? null : getDay(selectedMaterialsDay);
      grid.innerHTML = `<div class="materials-empty"><div class="materials-empty-icon">⌁</div><h3>${tr('noResults')}</h3>${chosen && !model.resources.some(item => item.dayId === chosen.id) ? `<p>${tr('noMaterials')}</p>` : ''}</div>`;
      return;
    }
    grid.innerHTML = resources.map(resourceCard).join('');
  }

  function renderMaterials() {
    renderMaterialsDayTabs();
    renderMaterialFilters();
    renderMaterialCards();
    const input = $('#materials-search');
    if (input) input.placeholder = tr('searchPlaceholder');
    const helper = $('#materials-helper');
    if (helper) helper.textContent = tr('materialHelp');
  }

  function bindMaterialsSearch() {
    const input = $('#materials-search');
    const clear = $('#materials-search-clear');
    if (!input) return;
    input.addEventListener('input', () => {
      searchTerm = input.value;
      renderMaterialCards();
      clear?.classList.toggle('is-visible', Boolean(searchTerm));
    });
    clear?.addEventListener('click', () => {
      input.value = '';
      searchTerm = '';
      clear.classList.remove('is-visible');
      input.focus();
      renderMaterialCards();
    });
  }

  function renderStaticProgramLabels() {
    const help = $('#program-calendar-help');
    if (help) help.textContent = tr('monthHelp');
    const month = $('#program-month-label');
    if (month) month.textContent = text(model.month);
    const pdf = $('#full-program-pdf-link');
    const docx = $('#full-program-docx-link');
    if (pdf) { pdf.href = model.fullProgram.pdf; pdf.textContent = tr('downloadPdf'); }
    if (docx) { docx.href = model.fullProgram.docx; docx.textContent = tr('downloadDocx'); }
  }

  function renderAll() {
    renderStaticProgramLabels();
    renderProgramCalendar();
    renderProgramDetails();
    renderMaterials();
  }

  function init() {
    renderAll();
    bindMaterialsSearch();
    const observer = new MutationObserver(mutations => {
      if (mutations.some(item => item.attributeName === 'lang' || item.attributeName === 'dir')) renderAll();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
