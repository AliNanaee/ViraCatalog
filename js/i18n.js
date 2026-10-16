const i18n = {
  currentLang: 'fa',
  translations: {
    fa: {
      appTitle: "کاتالوگ آنلاین",
      brandsHeading: "برندها",
      brandsDesc: "برای مشاهده کاتالوگ و مشخصات کامل، برند مورد نظر را انتخاب کنید.",
      backBtn: "← بازگشت به لیست برندها",
      sidebarTitle: "فهرست برندها و محصولات",
      productsCount: "محصول"
    },
    en: {
      appTitle: "Online Catalog",
      brandsHeading: "Brands",
      brandsDesc: "Select a brand to view full technical catalog and products.",
      backBtn: "← Back to Brands",
      sidebarTitle: "Brands & Products",
      productsCount: "Products"
    }
  },
  
  t(key) {
    return this.translations[this.currentLang][key] || key;
  },

  setLang(lang) {
    this.currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';
    document.getElementById('lang-switch-btn').textContent = (lang === 'fa') ? 'EN' : 'فا';
  }
};