document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.getElementById('sidebar-drawer');
  const backdrop = document.getElementById('sidebar-backdrop');
  const openBtn = document.getElementById('menu-toggle-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const drawerNav = document.getElementById('drawer-nav');
  const logoHomeBtn = document.getElementById('logo-home-btn');
  const backToHomeBtn = document.getElementById('back-to-home-btn');
  const brandsView = document.getElementById('brands-view');
  const brandDetailView = document.getElementById('brand-detail-view');
  const brandsGrid = document.getElementById('brands-grid');
  const brandHeaderArea = document.getElementById('brand-header-area');
  const brandProductsList = document.getElementById('brand-products-list');
  const currentBrandBreadcrumb = document.getElementById('current-brand-breadcrumb');
  const brandsCountBadge = document.getElementById('brands-count-badge');
  const langBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  const themeBtn = document.getElementById('theme-toggle-btn');

  let currentLang = 'fa';
  let activeBrandId = null;

  // ۱. توابع هوشمند باز و بسته کردن سایدبار (کاملاً هماهنگ با RTL و LTR)
  function isRTL() {
    return document.documentElement.dir === 'rtl';
  }

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('drawer-open');
    if (isRTL()) {
      drawer.style.right = '0';
      drawer.style.left = 'auto';
    } else {
      drawer.style.left = '0';
      drawer.style.right = 'auto';
    }
    drawer.style.transform = 'translateX(0)';
    if (backdrop) {
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('drawer-open');
    if (isRTL()) {
      drawer.style.right = '0';
      drawer.style.left = 'auto';
      drawer.style.transform = 'translateX(100%)'; // خروج از سمت راست در فارسی
    } else {
      drawer.style.left = '0';
      drawer.style.right = 'auto';
      drawer.style.transform = 'translateX(-100%)'; // خروج از سمت چپ در انگلیسی
    }
    if (backdrop) {
      backdrop.classList.remove('opacity-100', 'pointer-events-auto');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.style.overflow = '';
  }

  // آماده‌سازی اولیه وضعیت بسته در زمان لود صفحه
  if (drawer) {
    drawer.style.transition = 'transform 0.3s ease-in-out';
    closeDrawer();
  }

  if (openBtn) openBtn.onclick = openDrawer;
  if (closeBtn) closeBtn.onclick = closeDrawer;
  if (backdrop) backdrop.onclick = closeDrawer;

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      const btn = e.target.closest('.drawer-product-btn');
      if (btn) closeDrawer();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ۲. مدیریت نماها (صفحه اصلی و صفحه برند)
  function showBrandsOverview() {
    activeBrandId = null;
    const oldWrapper = document.getElementById('invamed-nav-wrapper');
    if (oldWrapper) oldWrapper.remove();
    if (window.__invamedScrollCleanup) {
      window.__invamedScrollCleanup();
    }
    if (brandDetailView) brandDetailView.classList.add('hidden');
    if (brandsView) brandsView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // موتور استخراج شاخص‌های کلیدی (KPIs)
  function getProductKPIs(prod) {
    if (prod.kpis && prod.kpis.length) return prod.kpis;

    const autoKpis = [];
    const colorThemes = [
      { gradient: 'from-cyan-500 via-teal-400 to-blue-500', textGradient: 'from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400' },
      { gradient: 'from-rose-500 to-red-600', textGradient: 'from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400' },
      { gradient: 'from-amber-500 to-orange-600', textGradient: 'from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400' },
      { gradient: 'from-emerald-500 to-teal-600', textGradient: 'from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400' }
    ];

    const priorityTerms = [
      { keys: ['tip entry', 'entry profile', 'پروفایل ورودی'], label: { fa: 'پروفایل نوک (Tip)', en: 'Tip Entry' } },
      { keys: ['guiding catheter', 'گایدینگ'], label: { fa: 'گایدینگ کاتتر', en: 'Guiding Catheter' } },
      { keys: ['deflation', 'تخلیه'], label: { fa: 'زمان تخلیه', en: 'Deflation Time' } },
      { keys: ['guide wire', 'سیم راهنما'], label: { fa: 'سیم راهنما (GW)', en: 'Guide Wire' } },
      { keys: ['usable', 'طول مفید', 'طول قابل استفاده'], label: { fa: 'طول کاتتر', en: 'Usable Length' } },
      { keys: ['characteristic', 'اتساع‌پذیری'], label: { fa: 'نوع اتساع', en: 'Compliance' } }
    ];

    if (prod.techSpecs && prod.techSpecs.length) {
      priorityTerms.forEach(term => {
        if (autoKpis.length >= 4) return;
        const item = prod.techSpecs.find(s => {
          const lEn = (typeof s.label === 'object' ? s.label.en : s.label) || '';
          const lFa = (typeof s.label === 'object' ? s.label.fa : '') || '';
          const txt = (lEn + ' ' + lFa).toLowerCase();
          return term.keys.some(k => txt.includes(k));
        });

        if (item && !autoKpis.some(k => k.ref === item)) {
          let val = (typeof item.value === 'object' && item.value !== null) ? (item.value[currentLang] || item.value.en) : item.value;
          if (typeof val === 'string' && val.length > 16) val = val.split('/')[0].split('(')[0].trim();
          
          const t = colorThemes[autoKpis.length % colorThemes.length];
          autoKpis.push({
            value: val || '-',
            label: term.label,
            gradient: t.gradient,
            textGradient: t.textGradient,
            ref: item
          });
        }
      });

      for (const s of prod.techSpecs) {
        if (autoKpis.length >= 4) break;
        if (autoKpis.some(k => k.ref === s)) continue;
        const sLabel = (typeof s.label === 'object') ? (s.label[currentLang] || s.label.en) : s.label;
        let val = (typeof s.value === 'object' && s.value !== null) ? (s.value[currentLang] || s.value.en) : s.value;
        if (typeof val === 'string' && val.length > 16) val = val.split('/')[0].split('(')[0].trim();

        const t = colorThemes[autoKpis.length % colorThemes.length];
        autoKpis.push({
          value: val || '-',
          label: sLabel,
          gradient: t.gradient,
          textGradient: t.textGradient,
          ref: s
        });
      }
    }

    return autoKpis;
  }

  function showBrandCatalog(brandId, targetProductId = null) {
    if (typeof brandsData === 'undefined' || !brandsData.length) return;
    activeBrandId = brandId;
    const brand = brandsData.find(b => b.id === brandId);
    if (!brand) return;

    const oldWrapper = document.getElementById('invamed-nav-wrapper');
    if (oldWrapper) oldWrapper.remove();
    if (window.__invamedScrollCleanup) {
      window.__invamedScrollCleanup();
    }

    if (brandsView) brandsView.classList.add('hidden');
    if (brandDetailView) brandDetailView.classList.remove('hidden');

    if (currentBrandBreadcrumb) {
      currentBrandBreadcrumb.textContent = brand.name[currentLang] || brand.name.en;
    }

    if (brandHeaderArea) {
      brandHeaderArea.innerHTML = `
        <div class="inline-block relative">
          <h2 class="text-3xl sm:text-6xl md:text-7xl font-black tracking-tight break-words bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 bg-clip-text text-transparent py-2">
            ${brand.name.en.split(' ')[0]}
          </h2>
          <div class="h-2 w-3/4 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold mt-2">
          ${brand.description[currentLang] || brand.description.en}
        </p>
      `;
    }

    if (brandProductsList) {
      brandProductsList.innerHTML = '';
      
      brand.products.forEach((prod, index) => {
        const prodArticle = document.createElement('article');
        prodArticle.id = `product-${prod.id || index}`;
        prodArticle.className = "scroll-mt-28 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm overflow-hidden flex flex-col";

        const titleText = (prod.title && prod.title[currentLang]) ? prod.title[currentLang] : (prod.title ? prod.title.en : '');
        const taglineText = (prod.tagline && prod.tagline[currentLang]) ? prod.tagline[currentLang] : (prod.tagline ? prod.tagline.en : '');
        
        const currentKpis = getProductKPIs(prod);
        let kpisHtml = '';
        if (currentKpis && currentKpis.length) {
          kpisHtml = `
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-4">
              ${currentKpis.map(k => `
                <div class="group/kpi flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200">
                  <span class="text-[11px] font-medium text-slate-400 dark:text-slate-400 leading-tight line-clamp-1">
                    ${k.label}
                  </span>
                  <div class="mt-1.5 flex items-baseline gap-1">
                    <span class="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight tabular-nums group-hover/kpi:text-brand-600 dark:group-hover/kpi:text-brand-400 transition-colors">
                      ${k.value}
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }

        let headerHtml = `
          <div class="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/40 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300">MEDICAL DEVICE</span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300">${prod.badge || ''}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">${titleText}</h3>
              <p class="text-xs text-brand-600 dark:text-brand-400 font-semibold mt-0.5">${taglineText}</p>
            </div>
          </div>
        `;

        let overviewHtml = '';
        if (prod.featuresOverview) {
          const oTitle = prod.featuresOverview.title[currentLang] || prod.featuresOverview.title.en;
          const oPoints = prod.featuresOverview.points[currentLang] || prod.featuresOverview.points.en || [];
          overviewHtml = `
            <div class="p-4 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                <span>${oTitle}</span>
              </h4>
              <ul class="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                ${oPoints.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>
          `;
        }

        let featuresHtml = '';
        if (prod.keyFeatures && prod.keyFeatures.length) {
          featuresHtml = `
            <div class="space-y-4">
              <h4 class="text-sm font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>${currentLang === 'fa' ? '۷ ویژگی برجسته مهندسی (متن کامل کاتالوگ)' : '7 Key Engineering Highlights'}</span>
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${prod.keyFeatures.map(f => {
                  const fTitle = f.title[currentLang] || f.title.en;
                  const fPoints = f.points[currentLang] || f.points.en || [];
                  return `
                    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-1.5">
                      <div class="text-brand-600 dark:text-brand-400 font-bold text-xs">${f.num}.${f.title.en}</div>
                      <div class="font-bold text-slate-800 dark:text-slate-100 text-sm">${fTitle}</div>
                      <ul class="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        ${fPoints.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }

        let pushabilityHtml = '';
        if (prod.pushabilityComparison) {
          pushabilityHtml = `
            <div class="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-800/60 dark:to-slate-800/40 border border-sky-200 dark:border-slate-700">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  ${prod.pushabilityComparison.headline[currentLang] || prod.pushabilityComparison.headline.en}
                </h4>
                <span class="text-[10px] px-2 py-0.5 rounded bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-200 font-bold">Higher is Better</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">
                ${prod.pushabilityComparison.subtext[currentLang] || prod.pushabilityComparison.subtext.en}
              </p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center items-end">
                ${prod.pushabilityComparison.brands.map(b => `
                  <div class="p-2.5 rounded-xl ${b.isCurrent ? 'bg-sky-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}">
                    <div class="text-[11px] ${b.isCurrent ? 'font-bold' : 'font-medium'}">${b.name}</div>
                    <div class="text-base font-black mt-1">${b.value}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let flowRateHtml = '';
        if (prod.flowRateComparison) {
          flowRateHtml = `
            <div class="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800/60 dark:to-slate-800/40 border border-emerald-200 dark:border-slate-700 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span>${prod.flowRateComparison.headline[currentLang]}</span>
                </h4>
                <span class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">${prod.flowRateComparison.testConditions[currentLang]}</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center pt-2">
                ${prod.flowRateComparison.items.map(item => `
                  <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
                    <span class="text-xs ${item.isCurrent ? 'font-bold text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}">${item.name}</span>
                    <span class="text-lg font-black my-1 text-slate-900 dark:text-white">${item.flow}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded text-white font-mono ${item.color}">${item.isCurrent ? 'Superior' : 'Standard'}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let tipShapesHtml = '';
        if (prod.tipShapes) {
          tipShapesHtml = `
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span class="font-bold text-slate-700 dark:text-slate-300">${prod.tipShapes.title[currentLang]}:</span>
              <div class="flex flex-wrap gap-2">
                ${prod.tipShapes.options.map(opt => `
                  <span class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300">
                    ${currentLang === 'fa' ? opt.fa : opt.name}
                  </span>
                `).join('')}
              </div>
            </div>
          `;
        }

        let tipHtml = '';
        if (prod.tipProfileComparison) {
          tipHtml = `
            <div class="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-100 via-sky-50 to-slate-100 dark:from-slate-800/40 dark:via-slate-800 dark:to-slate-800/40 border border-slate-200 dark:border-slate-700">
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center justify-between">
                <span>${prod.tipProfileComparison.headline[currentLang] || prod.tipProfileComparison.headline.en}</span>
                <span class="text-xs text-brand-600 dark:text-brand-400 font-mono">Balloon: ${prod.tipProfileComparison.balloonSize || '3.0 mm'}</span>
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-2">
                ${prod.tipProfileComparison.brands.map(b => `
                  <div class="p-3 rounded-xl ${b.isCurrent ? 'bg-white dark:bg-slate-900 border-2 border-brand-500 shadow-sm' : 'bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 opacity-80'}">
                    <div class="text-xs ${b.isCurrent ? 'font-bold text-brand-600' : 'font-semibold text-slate-500'}">${b.name}</div>
                    <div class="text-lg font-black text-slate-900 dark:text-white mt-1">${b.inch}</div>
                    <div class="text-xs text-slate-500">${b.mm}</div>
                    <div class="text-[11px] text-slate-400 mt-1">${b.balloonSize}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let clinicalHtml = '';
        if (prod.clinicalOverview) {
          clinicalHtml = `
            <div class="space-y-4">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <span>${prod.clinicalOverview.title[currentLang]}</span>
              </h4>
              <div class="grid grid-cols-1 gap-4">
                ${prod.clinicalOverview.sections.map(sec => `
                  <div class="p-4 sm:p-5 rounded-2xl bg-orange-50/40 dark:bg-slate-800/40 border border-orange-200/60 dark:border-slate-800 space-y-2">
                    <h5 class="text-xs sm:text-sm font-bold text-orange-900 dark:text-orange-300">${sec.heading[currentLang]}</h5>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${sec.text[currentLang]}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let featuresAdvHtml = '';
        if (prod.featuresAndAdvantages) {
          const f = prod.featuresAndAdvantages.features;
          const a = prod.featuresAndAdvantages.advantages;
          featuresAdvHtml = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2.5">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span>${f.title[currentLang]}</span>
                </h5>
                <ul class="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  ${f.items[currentLang].map(it => `<li>${it}</li>`).join('')}
                </ul>
              </div>
              <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2.5">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>${a.title[currentLang]}</span>
                </h5>
                <ul class="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  ${a.items[currentLang].map(it => `<li>${it}</li>`).join('')}
                </ul>
              </div>
            </div>
          `;
        }

        let orderingHtml = '';
        if (prod.orderingInfo) {
          orderingHtml = `
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2 text-xs sm:text-sm">
              <div class="flex flex-wrap justify-between items-center gap-2">
                <span class="font-bold text-slate-800 dark:text-slate-200">${prod.orderingInfo.title[currentLang]}</span>
                <span class="bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 font-mono font-bold px-2.5 py-0.5 rounded-lg">Code: ${prod.orderingInfo.code}</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${prod.orderingInfo.content[currentLang]}</p>
            </div>
          `;
        }

        let refHtml = '';
        if (prod.clinicalReferences) {
          refHtml = `
            <div class="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 space-y-1.5 font-mono">
              <div class="font-bold text-slate-700 dark:text-slate-300 mb-1">${prod.clinicalReferences.title[currentLang]}</div>
              ${prod.clinicalReferences.items.map(r => `<p>${r}</p>`).join('')}
            </div>
          `;
        }

        let clinicalBenefitsHtml = '';
        if (prod.clinicalBenefits) {
          clinicalBenefitsHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                <span>${prod.clinicalBenefits.title[currentLang]}</span>
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${prod.clinicalBenefits.items.map(b => `
                  <div class="p-4 rounded-xl border border-teal-200/60 dark:border-slate-800 bg-teal-50/40 dark:bg-slate-800/40 space-y-1.5">
                    <div class="font-bold text-xs sm:text-sm text-teal-800 dark:text-teal-300">${b.title[currentLang]}</div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${b.desc[currentLang]}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let valveDimHtml = '';
        if (prod.valveDimensionTable) {
          const vCols = prod.valveDimensionTable.columns[currentLang];
          valveDimHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                <span>${prod.valveDimensionTable.title[currentLang]}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-teal-50/80 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>${vCols.map(col => `<th class="px-3 py-2.5 whitespace-nowrap">${col}</th>`).join('')}</tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.valveDimensionTable.rows.map(r => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td class="font-bold text-teal-600 dark:text-teal-400 py-2 px-3">${r.model}</td>
                        <td class="py-2 px-2 font-semibold">${r.spec}</td>
                        <td class="py-2 px-2">${r.a}</td>
                        <td class="py-2 px-2 font-bold">${r.b}</td>
                        <td class="py-2 px-2">${r.c}</td>
                        <td class="py-2 px-2 font-semibold text-teal-700 dark:text-teal-300">${r.d}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let deliverySysHtml = '';
        if (prod.deliverySystemTable) {
          const dCols = prod.deliverySystemTable.columns[currentLang];
          deliverySysHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>${prod.deliverySystemTable.title[currentLang]}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-teal-50/80 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>${dCols.map(col => `<th class="px-3 py-2.5 whitespace-nowrap">${col}</th>`).join('')}</tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.deliverySystemTable.rows.map(r => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td class="font-bold text-teal-600 dark:text-teal-400 py-2 px-3">${r.model}</td>
                        <td class="py-2 px-2 font-semibold">${r.spec}</td>
                        <td class="py-2 px-2">${r.capsuleOd}</td>
                        <td class="py-2 px-2 font-bold">${r.loadingLen}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let zebraHtml = '';
        if (prod.zebraDetails) {
          zebraHtml = `
            <div class="space-y-4 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40">
              <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                <span>${prod.zebraDetails.title[currentLang]}</span>
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                ${prod.zebraDetails.overview[currentLang]}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                ${prod.zebraDetails.specsList.map(item => `
                  <div class="p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-sm">
                    <span class="font-bold text-xs text-teal-700 dark:text-teal-400 block mb-1">${item.label[currentLang]}</span>
                    <span class="text-xs text-slate-600 dark:text-slate-300 leading-normal">${item.desc[currentLang]}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let crossingHtml = '';
        if (prod.crossingTechniques) {
          crossingHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                <span>${prod.crossingTechniques.title[currentLang]}</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                ${prod.crossingTechniques.steps.map((st, idx) => `
                  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">Phase 0${idx + 1}</span>
                      <h5 class="text-xs font-bold text-slate-800 dark:text-slate-100 mt-2 mb-1">${st.title[currentLang]}</h5>
                      <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">${st.detail[currentLang]}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let vesselsHtml = '';
        if (prod.indicatedVessels) {
          vesselsHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>${prod.indicatedVessels.title[currentLang]}</span>
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                ${prod.indicatedVessels.items.map(v => `
                  <div class="p-3 rounded-xl border border-rose-200/70 dark:border-slate-800 bg-rose-50/40 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
                    <span class="text-xs font-bold text-rose-800 dark:text-rose-300">${v.name[currentLang]}</span>
                    <span class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">${v.desc[currentLang]}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let narrativeHtml = '';
        if (prod.performanceNarrative) {
          narrativeHtml = `
            <div class="space-y-3 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
              <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
                <span>${prod.performanceNarrative.title[currentLang]}</span>
              </h4>
              <div class="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                ${prod.performanceNarrative.paragraphs[currentLang].map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          `;
        }

        let dolphinTableHtml = '';
        if (prod.dolphinTable) {
          const dCols = prod.dolphinTable.columns[currentLang];
          dolphinTableHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>${prod.dolphinTable.title[currentLang]}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-teal-50/80 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th class="px-3 py-2.5 text-start font-sans">${dCols[0]}</th>
                      <th class="px-3 py-2.5">${dCols[1]}</th>
                      <th class="px-3 py-2.5">${dCols[2]}</th>
                      <th class="px-3 py-2.5">${dCols[3]}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.dolphinTable.rows.map(r => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td class="font-bold text-slate-800 dark:text-slate-200 py-2.5 px-3 text-start font-sans">${r.param[currentLang]}</td>
                        <td class="py-2.5 px-2 text-teal-700 dark:text-teal-400 font-bold">${r.c4}</td>
                        <td class="py-2.5 px-2 text-teal-700 dark:text-teal-400 font-bold">${r.c5}</td>
                        <td class="py-2.5 px-2 text-teal-700 dark:text-teal-400 font-bold">${r.c6}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let structuralHtml = '';
        if (prod.structuralDetails) {
          structuralHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>${prod.structuralDetails.title[currentLang]}</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${prod.structuralDetails.items.map(st => `
                  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                    <span class="font-bold text-xs text-blue-600 dark:text-blue-400 block">${st.title[currentLang]}</span>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${st.desc[currentLang]}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let clinicalStudiesHtml = '';
        if (prod.clinicalStudies) {
          clinicalStudiesHtml = `
            <div class="space-y-4 rounded-2xl p-5 border border-blue-200 dark:border-slate-800 bg-blue-50/40 dark:bg-slate-800/40">
              <div class="space-y-1">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>${prod.clinicalStudies.title[currentLang]}</span>
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                  ${prod.clinicalStudies.headline[currentLang]}
                </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                ${prod.clinicalStudies.reports.map(rep => `
                  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between space-y-2">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 inline-block mb-1.5">${rep.source}</span>
                      <h5 class="text-xs font-bold text-slate-800 dark:text-slate-100 leading-snug">${rep.title[currentLang]}</h5>
                    </div>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">${rep.result[currentLang]}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let specsHtml = '';
        if (prod.techSpecs && prod.techSpecs.length) {
          specsHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-medblue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                <span>${currentLang === 'fa' ? 'جدول مشخصات فنی' : 'Technical Specifications'}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table class="min-w-full w-full text-xs sm:text-sm text-start">
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.techSpecs.map(s => {
                      const label = (typeof s.label === 'object') ? (s.label[currentLang] || s.label.en) : s.label;
                      const val = (typeof s.value === 'object' && s.value !== null) ? (s.value[currentLang] || s.value.en) : s.value;
                      return `
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td class="px-4 py-2.5 font-medium text-slate-500 w-1/2">${label}</td>
                          <td class="px-4 py-2.5 font-bold">${val}</td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let sizingHtml = '';
        if (prod.sizingTable) {
          const sTitle = prod.sizingTable.title[currentLang] || prod.sizingTable.title.en;
          const sCols = prod.sizingTable.columns[currentLang] || prod.sizingTable.columns.en;
          sizingHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>${sTitle}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <thead class="bg-blue-50/80 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>${sCols.map(col => `<th class="px-4 py-3">${col}</th>`).join('')}</tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.sizingTable.rows.map(r => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td class="font-bold text-blue-600 dark:text-blue-400 py-2.5 px-3">${r.diameter}</td>
                        <td class="py-2.5 px-3">${r.lengths}</td>
                        <td class="py-2.5 px-3">${r.sheath}</td>${r.innerDiameter ? `<td class="py-2.5 px-3 font-semibold text-indigo-600 dark:text-indigo-400">${r.innerDiameter}</td>` : ''}
                        <td class="py-2.5 px-3 font-semibold">${r.pressure}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let microTableHtml = '';
        if (prod.microcatheterTable) {
          const mCols = prod.microcatheterTable.columns[currentLang];
          microTableHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span>${prod.microcatheterTable.title[currentLang]}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-emerald-50/80 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>${mCols.map(col => `<th class="px-3 py-2.5 whitespace-nowrap">${col}</th>`).join('')}</tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.microcatheterTable.rows.map(r => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td class="font-bold text-emerald-600 dark:text-emerald-400 py-2 px-3 text-start whitespace-nowrap">${r.product}</td>
                        <td class="py-2 px-2 whitespace-nowrap font-sans text-slate-600 dark:text-slate-400">${r.type}</td>
                        <td class="py-2 px-2">${r.prox}</td>
                        <td class="py-2 px-2 font-bold">${r.dist}</td>
                        <td class="py-2 px-2">${r.len}</td>
                        <td class="py-2 px-2 whitespace-nowrap">${r.id}</td>
                        <td class="py-2 px-2 font-sans font-medium text-amber-600 dark:text-amber-400">${r.tip}</td>
                        <td class="py-2 px-2">${r.hydro}</td>
                        <td class="py-2 px-2">${r.gw}</td>
                        <td class="py-2 px-2 whitespace-nowrap">${r.micro}</td>
                        <td class="py-2 px-2">${r.gc}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let supportVariantsHtml = '';
        if (prod.supportVariants) {
          supportVariantsHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>${prod.supportVariants.title[currentLang]}</span>
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                ${prod.supportVariants.items.map(v => `
                  <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
                    <div>
                      <div class="font-bold text-xs sm:text-sm text-emerald-700 dark:text-emerald-400">${v.name}</div>
                      <div class="text-[11px] font-mono text-slate-400 mt-0.5">${v.size}</div>
                      <p class="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">${v.desc[currentLang]}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        let matrixHtml = '';
        if (prod.indicationMatrix) {
          matrixHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                <span>${prod.indicationMatrix.title[currentLang]}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-emerald-50/70 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>
                      <th class="px-4 py-2.5 text-start font-sans">${currentLang === 'fa' ? 'رویکرد درمانی / اندیکاسیون' : 'Clinical Approach'}</th>
                      ${prod.indicationMatrix.columns.map(c => `<th class="px-3 py-2.5 whitespace-nowrap font-sans">${c}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900 font-sans">
                    ${prod.indicationMatrix.rows.map(r => {
                      if (r.isStiffnessRow) {
                        return `
                          <tr class="bg-slate-50 dark:bg-slate-800/50 font-bold">
                            <td class="px-4 py-2 text-start text-slate-800 dark:text-slate-100">${r.approach[currentLang]}</td>${r.values.map(val => `<td class="px-3 py-2 text-emerald-700 dark:text-emerald-400">${val[currentLang]}</td>`).join('')}
                          </tr>
                        `;
                      }
                      return `
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td class="px-4 py-2 text-start text-slate-600 dark:text-slate-300">${r.approach[currentLang]}</td>${r.values.map(val => `<td class="px-3 py-2 text-base font-bold">${val ? '<span class="text-emerald-600">✓</span>' : '<span class="text-slate-300 dark:text-slate-700">-</span>'}</td>`).join('')}
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let supportTableHtml = '';
        if (prod.supportTable) {
          const sCols = prod.supportTable.columns[currentLang];
          supportTableHtml = `
            <div class="space-y-3">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <span>${prod.supportTable.title[currentLang]}</span>
              </h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-emerald-50/80 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                    <tr>${sCols.map(col => `<th class="px-3 py-2.5 whitespace-nowrap">${col}</th>`).join('')}</tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.supportTable.rows.map(r => `
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td class="font-bold text-emerald-600 dark:text-emerald-400 py-2 px-3 text-start whitespace-nowrap">${r.product}</td>
                        <td class="py-2 px-2">${r.prox}</td>
                        <td class="py-2 px-2 font-bold">${r.dist}</td>
                        <td class="py-2 px-2">${r.len}</td>
                        <td class="py-2 px-2 whitespace-nowrap">${r.id}</td>
                        <td class="py-2 px-2 font-sans font-medium text-amber-600 dark:text-amber-400">${r.tip}</td>
                        <td class="py-2 px-2">${r.hydro}</td>
                        <td class="py-2 px-2">${r.gw}</td>
                        <td class="py-2 px-2">${r.gc}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        let foreshorteningHtml = '';
        if (prod.foreshorteningTables && prod.foreshorteningTables.length) {
          foreshorteningHtml = `
            <div class="space-y-6">
              <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span>${currentLang === 'fa' ? 'جداول کوتاه‌شدگی استنت نسبت به قطر لومن (Foreshortening Tables)' : 'Foreshortening Tables'}</span>
              </h4>
              ${prod.foreshorteningTables.map(tbl => `
                <div class="space-y-2 border border-slate-200 dark:border-slate-800 rounded-xl p-3 bg-white dark:bg-slate-900 shadow-sm">
                  <div class="flex flex-wrap justify-between items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span class="text-xs font-bold text-purple-700 dark:text-purple-400">${tbl.title[currentLang]}</span>
                    <span class="text-[11px] text-slate-500 font-mono">${tbl.balloonNote[currentLang]}</span>
                  </div>
                  <div class="overflow-x-auto text-xs sm:text-sm">
                    <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                      <thead class="bg-purple-50/70 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                        <tr>
                          <th class="px-3 py-2 text-start">${currentLang === 'fa' ? 'کد کالا' : 'Product Code'}</th>
                          <th class="px-3 py-2">${currentLang === 'fa' ? 'طول استنت (mm)' : 'Stent Length'}</th>
                          ${tbl.diameters.map(d => `<th class="px-2 py-2">${d}</th>`).join('')}
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                        ${tbl.rows.map(r => `
                          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                            <td class="font-bold text-purple-600 dark:text-purple-400 py-2 px-3 text-start">${r.code}</td>
                            <td class="py-2 px-3">${r.length}</td>
                            ${r.values.map(v => `<td class="py-2 px-2">${v}</td>`).join('')}
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }

        let complianceHtml = '';
        if (prod.complianceChart) {
          complianceHtml = `
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200">
                  <span>${currentLang === 'fa' ? 'جدول انطباق‌پذیری بالن (Balloon Compliance Chart - mm)' : 'Balloon Compliance Chart (mm)'}</span>
                </h4>
                <div class="flex items-center gap-2 text-xs">
                  <span class="px-2 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 font-semibold">NP: Nominal Pressure</span>
                  <span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-semibold">RBP: Rated Burst Pressure</span>
                </div>
              </div>
              <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                <table class="min-w-full w-full text-center divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                  <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                    <tr>
                      <th class="px-2.5 py-2">bar</th>
                      ${prod.complianceChart.diameters.map(d => `<th class="px-2 py-2">${d}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    ${prod.complianceChart.rows.map(r => {
                      let rowCls = '';
                      if (r.isRowNp || r.type === 'nominal') {
                        rowCls = 'bg-sky-50 dark:bg-sky-950/60 font-bold text-sky-800 dark:text-sky-300';
                      } else if (r.type === 'rbp') {
                        rowCls = 'bg-rose-50 dark:bg-rose-950/60 font-bold text-rose-800 dark:text-rose-300';
                      }
                      const rowItems = r.cells || r.values || [];
                      return `
                        <tr class="${rowCls}">
                          <td class="py-1.5 font-bold">${r.pressure}${r.label ? `(${r.label})` : ''}</td>
                          ${rowItems.map(c => {
                            const isObj = (typeof c === 'object' && c !== null);
                            const val = isObj ? c.val : c;
                            let cellCls = '';
                            if (isObj && c.isRbp) {
                              cellCls = 'bg-rose-100 dark:bg-rose-950/80 font-bold text-rose-800 dark:text-rose-300';
                            } else if (isObj && c.isNp) {
                              cellCls = 'bg-sky-100 dark:bg-sky-950/80 font-bold text-sky-800 dark:text-sky-300';
                            }
                            return `<td class="${cellCls}">${val}</td>`;
                          }).join('')}
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }

        prodArticle.innerHTML = headerHtml + `
          <div class="p-4 sm:p-8 space-y-6 sm:space-y-8 flex-1">
            <div class="leading-relaxed text-slate-700 dark:text-slate-300 space-y-3">
              <p class="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                ${titleText} — ${taglineText}
              </p>
            </div>
            ${kpisHtml}
            ${overviewHtml}
            ${featuresHtml}
            ${pushabilityHtml}
            ${flowRateHtml}
            ${tipShapesHtml}
            ${tipHtml}
            ${specsHtml}
            ${sizingHtml}
            ${microTableHtml}
            ${foreshorteningHtml}
            ${complianceHtml}
            ${supportVariantsHtml}
            ${matrixHtml}
            ${supportTableHtml}
            ${clinicalHtml}
            ${featuresAdvHtml}
            ${orderingHtml}
            ${refHtml}
            ${clinicalBenefitsHtml}
            ${valveDimHtml}
            ${deliverySysHtml}
            ${zebraHtml}
            ${crossingHtml}
            ${dolphinTableHtml}
            ${structuralHtml}
            ${clinicalStudiesHtml}
            ${narrativeHtml}
            ${vesselsHtml}
          </div>
        `;

        brandProductsList.appendChild(prodArticle);
      });

      // نوار فریز شده محصولات INVAMED
      if (brand.id === 'invamed' && brand.products && brand.products.length > 0) {
        const firstProduct = document.getElementById(`product-${brand.products[0].id || 0}`);

        if (firstProduct && firstProduct.parentElement) {
          const navWrapper = document.createElement('div');
          navWrapper.id = 'invamed-nav-wrapper';
          navWrapper.className = 'w-full mb-8 relative';

          const navContainer = document.createElement('div');
          navContainer.id = 'invamed-sticky-nav';
          navContainer.className = 'w-full py-2.5 px-3 sm:px-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex items-center gap-2 overflow-x-auto no-scrollbar transition-[box-shadow,border-radius] duration-200';

          navContainer.innerHTML = brand.products.map((p, idx) => {
            const title = (typeof p.title === 'object') ? (p.title[currentLang] || p.title.en) : p.title;
            const targetId = `product-${p.id || idx}`;
            return `
              <button 
                type="button" 
                data-target="${targetId}"
                class="invamed-nav-btn shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${idx === 0 ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'}">
                ${title}
              </button>
            `;
          }).join('');

          navWrapper.appendChild(navContainer);
          firstProduct.parentElement.before(navWrapper);

          const navBtns = navContainer.querySelectorAll('.invamed-nav-btn');

          const getHeaderOffset = () => {
            const headerEl = document.querySelector('header');
            return headerEl ? headerEl.getBoundingClientRect().bottom : 0;
          };

          const handleScroll = () => {
            const topOffset = getHeaderOffset();
            const wrapperRect = navWrapper.getBoundingClientRect();
            const lastProduct = document.getElementById(`product-${brand.products[brand.products.length - 1].id || (brand.products.length - 1)}`);
            const lastRect = lastProduct ? lastProduct.getBoundingClientRect() : null;

            if (wrapperRect.top <= topOffset) {
              if (lastRect && lastRect.bottom < topOffset + 60) {
                navContainer.style.position = 'static';
                navContainer.style.top = '';
                navContainer.style.left = '';
                navContainer.style.width = '100%';
                navWrapper.style.height = 'auto';
                navContainer.classList.remove('shadow-lg');
                return;
              }

              navWrapper.style.height = `${navContainer.offsetHeight}px`;
              navContainer.style.position = 'fixed';
              navContainer.style.top = `${topOffset}px`;
              navContainer.style.left = `${navWrapper.getBoundingClientRect().left}px`;
              navContainer.style.width = `${navWrapper.clientWidth}px`;
              navContainer.style.zIndex = '35';
              navContainer.classList.add('shadow-lg');
            } else {
              navContainer.style.position = 'static';
              navContainer.style.top = '';
              navContainer.style.left = '';
              navContainer.style.width = '100%';
              navWrapper.style.height = 'auto';
              navContainer.classList.remove('shadow-lg');
            }
          };

          window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
          window.addEventListener('resize', handleScroll, { passive: true });
          window.__invamedScrollCleanup = () => {
            window.removeEventListener('scroll', handleScroll, { capture: true });
            window.removeEventListener('resize', handleScroll);
          };

          navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.preventDefault();
              const target = document.getElementById(btn.getAttribute('data-target'));
              if (target) {
                const topGap = getHeaderOffset() + (navContainer.offsetHeight || 50) + 16;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - topGap;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            });
          });

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navBtns.forEach(b => {
                  const isMatch = b.getAttribute('data-target') === currentId;
                  if (isMatch) {
                    b.className = 'invamed-nav-btn shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-600 text-white shadow-md shadow-cyan-600/25 transition-all duration-200';
                    const offset = b.offsetLeft - (navContainer.clientWidth / 2) + (b.clientWidth / 2);
                    navContainer.scrollTo({ left: offset, behavior: 'smooth' });
                  } else {
                    b.className = 'invamed-nav-btn shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200';
                  }
                });
              }
            });
          }, { rootMargin: '-25% 0px -65% 0px' });

          brand.products.forEach((p, idx) => {
            const el = document.getElementById(`product-${p.id || idx}`);
            if (el) observer.observe(el);
          });
        }
      }
    }

    if (targetProductId) {
      setTimeout(() => {
        const targetEl = document.getElementById(`product-${targetProductId}`);
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ۳. رندر صفحه نخست و منوی دراپ‌داون سایدبار
  function renderApp() {
    if (typeof brandsData === 'undefined' || !brandsData.length) return;

    if (drawerNav) drawerNav.innerHTML = '';
    if (brandsGrid) brandsGrid.innerHTML = '';
    if (brandsCountBadge) {
      brandsCountBadge.textContent = `${brandsData.length} ${currentLang === 'fa' ? 'برند' : 'Brand(s)'}`;
    }

    const brandThemes = {
      invamed: {
        borderHover: 'hover:border-cyan-500/60',
        shadowHover: 'hover:shadow-cyan-500/25',
        glowBg: 'from-cyan-500/20 via-teal-500/10 to-transparent',
        accentText: 'text-cyan-600 dark:text-cyan-400',
        badge: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200/50 dark:border-cyan-800/40'
      },
      ams: {
        borderHover: 'hover:border-red-500/60',
        shadowHover: 'hover:shadow-red-500/25',
        glowBg: 'from-red-500/20 via-rose-500/10 to-transparent',
        accentText: 'text-red-600 dark:text-red-400',
        badge: 'bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200/50 dark:border-red-800/40'
      },
      andratec: {
        borderHover: 'hover:border-purple-500/60',
        shadowHover: 'hover:shadow-purple-500/25',
        glowBg: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
        accentText: 'text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/40'
      },
      tokai: {
        borderHover: 'hover:border-emerald-500/60',
        shadowHover: 'hover:shadow-emerald-500/25',
        glowBg: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        accentText: 'text-emerald-600 dark:text-emerald-400',
        badge: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40'
      },
      pulsecath: {
        borderHover: 'hover:border-rose-500/60',
        shadowHover: 'hover:shadow-rose-600/25',
        glowBg: 'from-rose-500/20 via-red-500/10 to-transparent',
        accentText: 'text-rose-600 dark:text-rose-400',
        badge: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200/50 dark:border-rose-800/40'
      },
      'venus-medtech': {
        borderHover: 'hover:border-indigo-500/60',
        shadowHover: 'hover:shadow-indigo-500/25',
        glowBg: 'from-indigo-500/20 via-amber-500/10 to-transparent',
        accentText: 'text-indigo-600 dark:text-indigo-400',
        badge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40'
      },
      venus: {
        borderHover: 'hover:border-indigo-500/60',
        shadowHover: 'hover:shadow-indigo-500/25',
        glowBg: 'from-indigo-500/20 via-amber-500/10 to-transparent',
        accentText: 'text-indigo-600 dark:text-indigo-400',
        badge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40'
      }
    };

    const defaultTheme = {
      borderHover: 'hover:border-brand-500/60',
      shadowHover: 'hover:shadow-brand-500/25',
      glowBg: 'from-brand-500/20 to-transparent',
      accentText: 'text-brand-600 dark:text-brand-400',
      badge: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'
    };

    brandsData.forEach(brand => {
      const theme = brandThemes[brand.id] || defaultTheme;

      if (brandsGrid) {
        const brandCard = document.createElement('div');
        brandCard.className = `group relative overflow-hidden p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm hover:shadow-2xl ${theme.borderHover} ${theme.shadowHover} transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between`;
        
        brandCard.innerHTML = `
          <div class="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${theme.glowBg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div class="relative z-10 space-y-4">
            ${brand.logo ? `
              <div class="h-20 sm:h-24 flex items-center justify-center -mt-1 mb-2">
                <img src="${brand.logo}" alt="${brand.name[currentLang]}" class="max-h-full max-w-[220px] sm:max-w-[240px] object-contain transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <h3 class="text-2xl font-black text-slate-800 dark:text-white hidden">${brand.name[currentLang]}</h3>
              </div>
            ` : `
              <h3 class="text-2xl font-black text-slate-800 dark:text-white mb-2 pt-1">
                ${brand.name[currentLang]}
              </h3>
            `}
            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
              ${brand.description[currentLang] || brand.description.en}
            </p>
          </div>

          <div class="relative z-10 mt-6 pt-4 border-t border-slate-100/80 dark:border-slate-800/80 flex items-center justify-between">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${theme.badge}">
              ${brand.products.length} ${currentLang === 'fa' ? 'محصول' : 'Product(s)'}
            </span>
            <span class="text-xs font-bold ${theme.accentText} group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300 inline-flex items-center gap-1.5">
              ${currentLang === 'fa' ? 'مشاهده کاتالوگ ←' : 'View Catalog →'}
            </span>
          </div>
        `;
        brandCard.onclick = () => showBrandCatalog(brand.id);
        brandsGrid.appendChild(brandCard);
      }

      if (drawerNav) {
        const navItem = document.createElement('div');
        navItem.className = 'border border-cyan-200 dark:border-cyan-900/60 rounded-xl overflow-hidden bg-cyan-50/50 dark:bg-cyan-950/20';

        const productsNavList = brand.products.map(p => {
          const pTitle = (p.title && p.title[currentLang]) ? p.title[currentLang] : (p.title ? p.title.en : '');
          return `
            <button type="button" data-brand-id="${brand.id}" data-product-id="${p.id}" class="drawer-product-btn w-full text-start px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-cyan-100/60 hover:text-cyan-700 transition-colors flex justify-between items-center text-xs sm:text-sm">
              <span class="truncate">${pTitle}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-cyan-200 text-cyan-800 font-mono flex-shrink-0">${p.badge ? p.badge.substring(0, 4) : 'PROD'}</span>
            </button>
          `;
        }).join('');

        navItem.innerHTML = `
          <button type="button" class="accordion-header w-full px-4 py-3 flex items-center justify-between text-start font-bold text-cyan-950 dark:text-cyan-200 hover:bg-cyan-100/40 transition-all cursor-pointer">
            <span class="flex items-center gap-2 truncate">
              <span class="w-2.5 h-2.5 rounded-full bg-brand-500 flex-shrink-0"></span>
              <span class="truncate">${brand.name[currentLang] || brand.name.en}</span>
            </span>
            <svg class="chevron-icon w-4 h-4 text-cyan-600 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="accordion-content" style="display: none;">
            <div class="p-2 space-y-1 bg-white/90 dark:bg-slate-900/80 border-t border-cyan-200 dark:border-cyan-900/40">
              ${productsNavList}
            </div>
          </div>
        `;
        drawerNav.appendChild(navItem);
      }
    });

    setupAccordionAndListeners();
  }

  function setupAccordionAndListeners() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.onclick = () => {
        const content = header.nextElementSibling;
        const chevron = header.querySelector('.chevron-icon');
        const isCurrentlyOpen = content.classList.contains('accordion-open') || content.style.display === 'block';

        document.querySelectorAll('.accordion-content').forEach(c => {
          c.classList.remove('accordion-open');
          c.style.display = 'none';
        });
        document.querySelectorAll('.chevron-icon').forEach(ch => ch.style.transform = 'rotate(0deg)');

        if (!isCurrentlyOpen) {
          content.classList.add('accordion-open');
          content.style.display = 'block';
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        }
      };
    });

    const productBtns = document.querySelectorAll('.drawer-product-btn');
    productBtns.forEach(btn => {
      btn.onclick = () => {
        const bId = btn.getAttribute('data-brand-id');
        const pId = btn.getAttribute('data-product-id');
        closeDrawer();
        showBrandCatalog(bId, pId);
      };
    });
  }

  if (backToHomeBtn) backToHomeBtn.onclick = showBrandsOverview;
  if (logoHomeBtn) logoHomeBtn.onclick = showBrandsOverview;

  // ۴. مدیریت تم دارک و لایت
  function updateThemeUI(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (themeBtn) themeBtn.textContent = '☀️';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (themeBtn) themeBtn.textContent = '🌙';
    }
  }

  const currentSavedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDark = (currentSavedTheme === 'dark') || (!currentSavedTheme && prefersDark);
  updateThemeUI(initialDark);

  if (themeBtn) {
    themeBtn.onclick = () => {
      const isDark = document.documentElement.classList.contains('dark');
      updateThemeUI(!isDark);
    };
  }

  // ۵. مدیریت زبان (همراه با تراز مجدد خودکار کشو)
  if (langBtn) {
    langBtn.onclick = () => {
      currentLang = (currentLang === 'fa') ? 'en' : 'fa';
      document.documentElement.lang = currentLang;
      document.documentElement.dir = (currentLang === 'fa') ? 'rtl' : 'ltr';
      if (langLabel) langLabel.textContent = (currentLang === 'fa') ? 'English' : 'فارسی';
      
      closeDrawer(); // بستن و تراز فوری سایدبار در جهت جدید زبان
      renderApp();
      if (activeBrandId) showBrandCatalog(activeBrandId);
    };
  }

  // اجرای اولیه
  renderApp();
});