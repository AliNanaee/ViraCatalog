// مسیر فایل: js/data/products/ams.js

const amsBrandData = {
  id: "ams",
  name: {
    fa: "AMS",
    en: "AMS"
  },
  logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 150' width='100%' height='100%'><g fill='%23D61827'><path d='M35 78 C65 38 128 15 152 15 C164 15 170 22 170 33 C170 49 150 72 132 90 C127 95 120 100 114 105 C125 83 132 62 123 51 C114 41 95 51 76 68 C58 83 42 98 35 78 Z'/><path d='M35 78 C44 101 64 116 92 116 C126 116 158 98 162 78 C136 102 96 111 80 100 C70 93 75 80 89 66 C103 52 117 42 111 37 C100 37 66 58 35 78 Z'/></g><g fill='%2318428C' font-family='Arial, sans-serif' font-weight='900' font-size='92'><text x='180' y='105'>AMS</text></g><g fill='%2318428C' font-family='Arial, sans-serif' font-weight='700' font-size='22'><text x='25' y='142'>Advanced MedTech Solutions</text></g></svg>",
  description: {
    fa: "ارائه‌دهنده راهکارهای نوین و پیشرفته مداخله‌ای عروقی و قلبی.",
    en: "Advancing the Science of Flow Restoration with advanced vascular intervention solutions."
  },
  products: [
    // محصول اول: NC ADVA GLIDE
    {
      id: "nc-adva-glide",
      badge: "NON COMPLIANT",
      title: {
        fa: "NC ADVA GLIDE",
        en: "NC ADVA GLIDE"
      },
      tagline: {
        fa: "پیشگام در دانش بازیابی جریان خون عروقی",
        en: "Advancing the Science of Flow Restoration"
      },
      image: "assets/images/nc-adva-glide.png",
      kpis: [
        { 
          value: "0.016\"", 
          label: { fa: "پروفایل ورودی نوک (Tip)", en: "Tip Entry Profile" }, 
          desc: { fa: "دسترسی عالی به CTO", en: "Ideal for CTO Access" },
          gradient: "from-rose-500 to-red-600",
          textGradient: "from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400"
        },
        { 
          value: "20 atm", 
          label: { fa: "فشار شکست اسمی (RBP)", en: "Rated Burst Pressure" }, 
          desc: { fa: "اتساع دقیق و پرفشار", en: "High-Pressure Dilatation" },
          gradient: "from-amber-500 to-orange-600",
          textGradient: "from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400"
        },
        { 
          value: "5 Fr", 
          label: { fa: "سازگاری گایدینگ کاتتر", en: "Guiding Catheter" }, 
          desc: { fa: "سازگار با Kissing Balloon", en: "Kissing Technique Ready" },
          gradient: "from-emerald-500 to-teal-600",
          textGradient: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400"
        },
        { 
          value: "< 10s", 
          label: { fa: "حداکثر زمان تخلیه بالن", en: "Max Deflation Time" }, 
          desc: { fa: "بازیابی سریع جریان خون", en: "Rapid Flow Restoration" },
          gradient: "from-cyan-500 to-blue-600",
          textGradient: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400"
        }
      ],
      keyFeatures: [
        {
          num: 1,
          title: {
            fa: "بسته‌بندی و جمع‌شوندگی فوق‌العاده بالن (Tri-Fold Wrap & Re-wrapping)",
            en: "EXCELLENT BALLOON WRAP"
          },
          points: {
            fa: [
              "پیچش سه‌لایه فشرده بالن برای دستیابی به پروفایل ورودی بسیار باریک",
              "قابلیت عبوردهی عالی در ضایعات سخت و مقاوم عروقی",
              "قابلیت جمع‌شدگی مجدد (Re-folding) جهت خروج آسان و ایمن کاتتر"
            ],
            en: [
              "Tight wrapping of tri-fold balloon for low profile",
              "Excellent crossability in difficult lesions",
              "Re-wrapping (refolding) ensures easy withdrawal"
            ]
          }
        },
        {
          num: 2,
          title: {
            fa: "قابلیت هدایت و انتقال نیروی ارتقایافته (Enhanced Deliverability)",
            en: "ENHANCED DELIVERABILITY"
          },
          points: {
            fa: [
              "طراحی اختصاصی برای دسترسی به ضایعات سخت و مقاوم عروقی",
              "انتقال بی‌نقص نیرو از کانکتور (Hub) انتهایی تا نوک کاتتر (Tip)",
              "سازگار با کاتتر هدایت‌کننده (Guiding Catheter) با سایز ۵ فرنچ (5 Fr)",
              "پوشش هیدروفیلی (آب‌دوست) پیشرفته جهت روان‌سازی و تسهیل حرکت در رگ"
            ],
            en: [
              "Engineered for Tough Lesion access",
              "Excellent force transmission from Hub to Tip",
              "5 Fr. guiding catheter compatible system",
              "Hydrophilic coating enhances deliverability"
            ]
          }
        },
        {
          num: 3,
          title: {
            fa: "کاهش آسیب به دیواره رگ با طراحی شیب‌دار شانه (Steep Shoulder Design)",
            en: "MINIMIZE VESSEL TRAUMA"
          },
          points: {
            fa: [
              "طراحی شیب‌دار و مخروطی کوتاه بالن برای به حداقل رساندن خطر پارگی لبه‌ها (Edge Dissection)",
              "اتساع متمرکز، دقیق و یکنواخت در ضایعات دشوار",
              "کاهش چشمگیر آسیب عروقی با زاویه ۴۲ درجه شانه بالن"
            ],
            en: [
              "Short tapered balloon for less risk for edge dissection",
              "Precise focal and uniform dilatation in difficult lesions",
              "Minimizes vessel injury with 42° angled shoulder"
            ]
          }
        },
        {
          num: 4,
          title: {
            fa: "طراحی شده برای ناوبری و عبور منعطف (Engineered for Navigation)",
            en: "ENGINEERED FOR NAVIGATION"
          },
          points: {
            fa: [
              "تیپ نرم و بدون تروما مخصوص ساختارهای پیچیده و مارپیچ عروقی",
              "طراحی نرم و غیرتهاجمی نوک برای ورود به ضایعات چالش‌برانگیز",
              "پروفایل ورودی به ضایعه بسیار باریک معادل ۰.۰۱۶ اینچ (0.016\")",
              "ایجاد اطمینان خاطر در عبور از ضایعات پیچیده و مسدود"
            ],
            en: [
              "Soft Atraumatic Tip for Tortuous anatomy",
              "Smooth and atraumatic tip design for challenging lesion access",
              "Low Lesion entry profile of 0.016\"",
              "Assured confidence in crossing tortuous lesion"
            ]
          }
        },
        {
          num: 5,
          title: {
            fa: "طراحی شفت اختصاصی و منحصربه‌فرد (Proprietary Shaft Design)",
            en: "PROPRIETARY SHAFT DESIGN"
          },
          points: {
            fa: [
              "شفت فوق‌العاده منعطف و به شدت مقاوم در برابر تاخوردگی و خمش (Kink Resistant)",
              "عملکرد کاملاً متعادل در پیش‌روندگی (Push) و ردیابی مسیر رگ (Track)",
              "سرش و لغزش روان روی سیم هدایت‌گر (Guide Wire) برای افزایش قدرت عبور"
            ],
            en: [
              "Highly kink resistant and flexible shaft",
              "Balanced Push and Track performance",
              "Smooth glide over GW, enhancing crossability"
            ]
          }
        },
        {
          num: 6,
          title: {
            fa: "پلیمر ساختاری برتر بالن (Superior Balloon Material)",
            en: "SUPERIOR BALLOON MATERIAL"
          },
          points: {
            fa: [
              "ماده پلیمری پیشرفته با انعطاف و برگشت‌پذیری ساختاری بالا (High Resilience)",
              "بهترین بالن در رده خود با نازک‌ترین دیواره به ضخامت ۰.۰۰۸ میلی‌متر",
              "زمان پر و خالی شدن بسیار سریع با فشار شکست اسمی (RBP) تا ۲۰ بار/اتمسفر",
              "اتساع کنترل‌شده برای اطمینان در مرحله اتساع مجدد پس از استنت (Post Dilatation)"
            ],
            en: [
              "High resilience polymeric material",
              "Best in class balloon with thinnest wall of 0.008 mm",
              "Fast inflation/deflation time, RBP of 20 atm/bar",
              "Controlled balloon compliance for post dilatation"
            ]
          }
        },
        {
          num: 7,
          title: {
            fa: "موقعیت‌یابی فوق‌العاده دقیق بالن (Precise Balloon Positioning)",
            en: "PRECISE BALLOON POSITIONING"
          },
          points: {
            fa: [
              "مارکرهای باریک رادیواپک با دید عالی تحت اشعه ایکس ساخته‌شده از پلاتین-ایریدیوم (Pt/Ir)",
              "تضمین تثبیت مکان دقیق بالن جهت کسب بالاترین دقت در نتایج درمانی",
              "کمک به رهگیری بهتر در ضایعات عروقی که عبور از آن‌ها سخت است"
            ],
            en: [
              "Low Profile Marker Band",
              "Highly visible Pt/Ir radiopaque marker bands",
              "Assures excellent positioning for accurate results",
              "Supports better navigation in difficult to cross lesions"
            ]
          }
        }
      ],
      tipProfileComparison: {
        headline: {
          fa: "پروفایل ورودی تیپ بی‌رقیب، ایده‌آل برای دسترسی به ضایعات سخت و تنگ عروقی (شامل CTO)",
          en: "Unsurpassed tip entry profile - Ideal for accessing complex tight lesions (including CTO)"
        },
        balloonSize: "3.0 mm",
        brands: [
          { name: "NC ADVA GLIDE", inch: "0.016\"", mm: "0.40 mm", isCurrent: true, balloonSize: "3.0 mm" },
          { name: "BRAND A", inch: "0.016\"", mm: "0.43 mm", isCurrent: false, balloonSize: "3.0 mm" },
          { name: "BRAND B", inch: "0.017\"", mm: "0.44 mm", isCurrent: false, balloonSize: "3.0 mm" },
          { name: "BRAND C", inch: "0.018\"", mm: "0.49 mm", isCurrent: false, balloonSize: "3.0 mm" }
        ]
      },
      techSpecs: [
        { label: { fa: "قطر شفت پروگزیمال", en: "Proximal Shaft Diameter" }, value: "1.9 Fr. (0.63 mm)" },
        { label: { fa: "قطر شفت دیستال", en: "Distal Shaft Diameter" }, value: "2.4 Fr. (0.82 mm)" },
        { label: { fa: "طول قابل استفاده کاتتر", en: "Usable Catheter Length" }, value: "140 ± 2 cm" },
        { label: { fa: "مارکرهای شفت (از تیپ تا مارکر پروگزیمال و دیستال)", en: "Shaft Marker (Tip to Proximal & Distal marker)" }, value: "94 ± 2 & 104 ± 2 cm" },
        { label: { fa: "طول تبادل سریع (Rapid Exchange Length)", en: "Rapid Exchange Length" }, value: "22 to 23 cm" },
        { label: { fa: "مارکرهای اشعه ایکس", en: "X-Ray Markers" }, value: { fa: "۲ مارکر پلاتین-ایریدیوم", en: "2 Platinum Iridium Markers" } },
        { label: { fa: "کاتتر هدایت‌کننده توصیه‌شده (Guiding Catheter)", en: "Recommended Guiding Catheter" }, value: { fa: "5 Fr. / برای تکنیک بالن دوبل (Kissing balloon): 6 Fr.", en: "5 Fr. / \"Kissing balloon\": 6 Fr." } },
        { label: { fa: "سیم راهنمای توصیه‌شده (Guide Wire)", en: "Recommended Guide Wire" }, value: "0.014\" (0.356 mm)" },
        { label: { fa: "مشخصه اتساع‌پذیری بالن", en: "Balloon Characteristic" }, value: { fa: "غیرمنطبق (Non-Compliant)", en: "Non-Compliant" } },
        { label: { fa: "پروفایل ورودی نوک (Tip Entry Profile)", en: "Tip Entry Profile" }, value: "0.016\" (0.40 mm)" },
        { label: { fa: "پروفایل عبوردهی / پروفایل بالن", en: "Crossing Profile / Balloon Profile" }, value: "0.70 mm - 1.0 mm" },
        { label: { fa: "جنس بدنه بالن", en: "Balloon Material" }, value: { fa: "پلی‌آمید (Polyamide)", en: "Polyamide" } },
        { label: { fa: "حداکثر زمان تخلیه (Deflation)", en: "Maximum Deflation Time" }, value: "< 10 sec." }
      ],
      complianceChart: {
        diameters: ["1.50", "2.00", "2.25", "2.50", "2.75", "3.00", "3.25", "3.50", "3.75", "4.00", "4.50", "5.00"],
        rows: [
          { pressure: 4, type: "normal", values: ["1.48", "1.98", "2.21", "2.44", "2.66", "2.94", "3.21", "3.46", "3.71", "3.93", "4.40", "4.95"] },
          { pressure: 6, type: "normal", values: ["1.49", "1.99", "2.23", "2.47", "2.72", "2.98", "3.23", "3.49", "3.74", "3.98", "4.48", "4.98"] },
          { pressure: 8, type: "nominal", label: "NP", values: ["1.51", "2.01", "2.25", "2.50", "2.75", "3.00", "3.25", "3.51", "3.76", "4.01", "4.51", "5.02"] },
          { pressure: 10, type: "normal", values: ["1.52", "2.02", "2.27", "2.52", "2.77", "3.02", "3.28", "3.53", "3.78", "4.05", "4.55", "5.05"] },
          { pressure: 12, type: "normal", values: ["1.54", "2.04", "2.28", "2.55", "2.79", "3.04", "3.31", "3.56", "3.80", "4.09", "4.58", "5.09"] },
          { pressure: 14, type: "normal", values: ["1.55", "2.05", "2.30", "2.57", "2.81", "3.07", "3.35", "3.58", "3.81", "4.11", "4.61", "5.13"] },
          { pressure: 16, type: "normal", values: ["1.57", "2.07", "2.31", "2.59", "2.83", "3.09", "3.37", "3.60", "3.83", "4.13", "4.64", "5.18"] },
          { pressure: 18, type: "normal", values: ["1.59", "2.09", "2.33", "2.61", "2.85", "3.11", "3.40", "3.63", "3.85", "4.15", "4.66", "5.22"] },
          { pressure: 20, type: "rbp", label: "RBP", values: ["1.60", "2.10", "2.36", "2.63", "2.88", "3.14", "3.44", "3.65", "3.87", "4.18", "4.68", "5.28"] }
        ]
      }
    },

    // محصول دوم: ADVA GLIDE (Semi-Compliant)
    {
      id: "sc-adva-glide",
      badge: "SEMI COMPLIANT",
      title: {
        fa: "SC ADVA GLIDE",
        en: "SC ADVA GLIDE"
      },
      tagline: {
        fa: "پیشگام در دانش بازیابی جریان خون عروقی",
        en: "Advancing the Science of Flow Restoration"
      },
      image: "assets/images/sc-adva-glide.png",
      kpis: [
        { 
          value: "0.19 N", 
          label: { fa: "قابلیت هدایت و انتقال نیرو", en: "Pushability Force" }, 
          desc: { fa: "برترین در کلاس جهانی", en: "Best in Class" },
          gradient: "from-blue-500 to-indigo-600",
          textGradient: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
        },
        { 
          value: "0.016\"", 
          label: { fa: "پروفایل ورودی تیپ", en: "Tip Entry Profile" }, 
          desc: { fa: "نوک نرم آتروماتیک", en: "Soft Atraumatic Tip" },
          gradient: "from-rose-500 to-red-600",
          textGradient: "from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400"
        },
        { 
          value: "0.008 mm", 
          label: { fa: "ضخامت دیواره بالن", en: "Balloon Wall Material" }, 
          desc: { fa: "پلیمر نازک و فوق‌انعطاف‌پذیر", en: "High Resilience Polymer" },
          gradient: "from-teal-500 to-emerald-600",
          textGradient: "from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400"
        },
        { 
          value: "3-10 sec", 
          label: { fa: "میانگین زمان تخلیه", en: "Avg Deflation Time" }, 
          desc: { fa: "واکنش سریع کاتتر", en: "Fast Deflation Response" },
          gradient: "from-cyan-500 to-teal-600",
          textGradient: "from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400"
        }
      ],
      keyFeatures: [
        {
          num: 1,
          title: {
            fa: "تاشدگی سه‌لایه فشرده و جمع‌شدن مجدد (Tri-fold wrap and re-wrapping)",
            en: "EXCELLENT BALLOON WRAP"
          },
          points: {
            fa: [
              "بسته‌بندی فشرده تاشدگی سه‌لایه بالن برای دستیابی به کمترین پروفایل ورودی",
              "قابلیت عبوردهی فوق‌العاده از ضایعات عروقی",
              "جمع‌شدن مجدد آسان بالن که خروج بی‌دردسر و ایمن را تضمین می‌کند"
            ],
            en: [
              "Tight wrapping of tri-fold balloon for low profile",
              "Excellent crossability in lesions",
              "Re-wrapping ensures easy withdrawal"
            ]
          }
        },
        {
          num: 2,
          title: {
            fa: "قابلیت هدایت و تحویل‌پذیری ارتقایافته (Enhanced Deliverability)",
            en: "ENHANCED DELIVERABILITY"
          },
          points: {
            fa: [
              "مهندسی‌شده جهت دسترسی آسان به ضایعات سخت و مقاوم عروقی",
              "انتقال فوق‌العاده نیرو از کانکتور (Hub) تا نوک کاتتر (Tip)",
              "سیستم کاملاً سازگار با گایدینگ کاتتر ۵ فرنچ (5 Fr)",
              "پوشش هایدروفیلیک (آبدوست) که قدرت عبوردهی را به‌مراتب افزایش می‌دهد"
            ],
            en: [
              "Engineered for Tough Lesion access",
              "Excellent force transmission from Hub to Tip",
              "5 Fr. guiding catheter compatible system",
              "Hydrophilic coating enhances crossability"
            ]
          }
        },
        {
          num: 3,
          title: {
            fa: "کاهش ترومای عروقی با طراحی شانه با شیب تند (Steep Shoulder Design)",
            en: "MINIMIZE VESSEL TRAUMA"
          },
          points: {
            fa: [
              "طراحی بالن مخروطی کوتاه (Short tapered balloon)",
              "اتساع متمرکز و بسیار دقیق در محل ضایعه (Precise focal dilatation)",
              "کاهش چشمگیر ریسک دایسکشن و پارگی لبه‌های رگ (Reduces edge dissections)"
            ],
            en: [
              "Short tapered balloon",
              "Precise focal dilatation",
              "Reduces edge dissections"
            ]
          }
        },
        {
          num: 4,
          title: {
            fa: "طراحی شفت اختصاصی و عملکرد متوازن (Proprietary Shaft Design)",
            en: "PROPRIETARY SHAFT DESIGN"
          },
          points: {
            fa: [
              "ناوبری برتر و عملکرد متعادل (Superior Navigability & Balanced Performance)",
              "شفت بسیار منعطف و دارای مقاومت فوق‌العاده در برابر تاخوردگی (Highly kink resistant)",
              "عملکرد کاملاً متوازن در پیش‌روندگی (Push) و ردیابی مسیر رگ (Track)",
              "سرش و لغزش نرم و روان روی سیم راهنما (GW) تا سقف فشار RBP"
            ],
            en: [
              "Superior Navigability & Balanced Performance",
              "Highly kink resistant and flexible shaft",
              "Balanced Push and Track performance",
              "Smooth glide over GW upto RBP"
            ]
          }
        },
        {
          num: 5,
          title: {
            fa: "طراحی‌شده برای ناوبری و عبور منعطف (Engineered for Navigation)",
            en: "ENGINEERED FOR NAVIGATION"
          },
          points: {
            fa: [
              "نوک نرم آتروماتیک (غیرتهاجمی) مخصوص آناتومی‌ها و مسیرهای پرپیچ‌وخم",
              "طراحی نرم و مخروطی برای دسترسی به چالش‌برانگیزترین ضایعات عروقی",
              "پروفایل ورودی به ضایعه بسیار باریک معادل ۰.۰۱۶ اینچ (0.016\")",
              "ایجاد اطمینان خاطر تضمین‌شده در عبور از عروق پیچ‌خورده"
            ],
            en: [
              "Soft Atraumatic Tip for Tortuous anatomy",
              "Smooth and Tapered design for challenging lesion access",
              "Low Lesion entry profile of 0.016\"",
              "Assured confidence in crossing tortuous lesion"
            ]
          }
        },
        {
          num: 6,
          title: {
            fa: "موقعیت‌یابی فوق‌العاده دقیق بالن (Precise Balloon Positioning)",
            en: "PRECISE BALLOON POSITIONING"
          },
          points: {
            fa: [
              "مارکربند با پروفایل باریک و کم‌حجم (Low Profile Marker Band)",
              "مارکربندهای رادیواپک پلاتین/ایریدیوم (Pt/Ir) با وضوح تصویر عالی زیر اشعه ایکس",
              "تضمین موقعیت‌یابی عالی برای به دست آوردن نتایج کاملاً دقیق",
              "پشتیبانی از ناوبری بهتر در ضایعاتی که عبور از آن‌ها دشوار است"
            ],
            en: [
              "Low Profile Marker Band",
              "Highly visible Pt/Ir radiopaque marker bands",
              "Assures excellent positioning for accurate results",
              "Supports better navigation in difficult to cross lesions"
            ]
          }
        },
        {
          num: 7,
          title: {
            fa: "پلیمر ساختاری برتر بالن (Superior Balloon Material)",
            en: "SUPERIOR BALLOON MATERIAL"
          },
          points: {
            fa: [
              "متریال پلیمری پیشرفته با انعطاف و استحکام بالا (High resilience polymeric material)",
              "بهترین بالن در کلاس خود با نازک‌ترین دیواره به ضخامت ۰.۰۰۸ میلی‌متر",
              "زمان پر و خالی شدن بسیار سریع (Fast inflation/deflation time)",
              "دامنه عملیاتی و کاری گسترده بالن (Wide balloon working range)"
            ],
            en: [
              "High resilience polymeric material",
              "Best in class balloon with thinnest wall of 0.008 mm",
              "Fast inflation/deflation time",
              "Wide balloon working range"
            ]
          }
        }
      ],
      // نمودار اختصاصی Pushability بالن Semi-Compliant
      pushabilityComparison: {
        headline: {
          fa: "برترین قابلیت انتقال نیرو (Pushability) در کلاس خود برای پیچیده‌ترین آناتومی‌ها",
          en: "Best in class Pushability for the most complex anatomies"
        },
        subtext: {
          fa: "انتقال نیروی نیوتن (N) برای راندن بالن کاتتر از انتهای پروگزیمال به انتهای دیستال (انتقال نیروی بالاتر = قابلیت Pushability بهتر).",
          en: "(N) Force transmission to push the balloon catheter (proximal end to distal end). Higher force transmission = Better Pushability."
        },
        brands: [
          { name: "ADVA GLIDE", value: "0.19 N", isCurrent: true },
          { name: "BRAND A", value: "0.17 N", isCurrent: false },
          { name: "BRAND B", value: "0.18 N", isCurrent: false },
          { name: "BRAND C", value: "0.18 N", isCurrent: false }
        ]
      },
      // مقایسه Tip Entry Profile برای بالن 2.0 mm
      tipProfileComparison: {
        headline: {
          fa: "پروفایل ورودی تیپ بی‌نظیر، ایده‌آل برای ورود به ضایعات تنگ و پیچیده عروقی",
          en: "Unsurpassed tip entry profile - Ideal for accessing complex tight lesions"
        },
        balloonSize: "2.0 mm",
        brands: [
          { name: "ADVA GLIDE", inch: "0.016\"", mm: "0.40 mm", isCurrent: true, balloonSize: "2.0 mm" },
          { name: "BRAND A", inch: "0.016\"", mm: "0.40 mm", isCurrent: false, balloonSize: "2.0 mm" },
          { name: "BRAND B", inch: "0.017\"", mm: "0.42 mm", isCurrent: false, balloonSize: "2.0 mm" },
          { name: "BRAND C", inch: "0.018\"", mm: "0.45 mm", isCurrent: false, balloonSize: "2.0 mm" }
        ]
      },
      techSpecs: [
        { label: { fa: "قطر شفت پروگزیمال", en: "Proximal Shaft Diameter" }, value: "1.9 Fr. (0.63 mm)" },
        { label: { fa: "قطر شفت دیستال", en: "Distal Shaft Diameter" }, value: "2.4 Fr. (0.82 mm)" },
        { label: { fa: "طول مفید و قابل استفاده کاتتر", en: "Usable Catheter Length" }, value: "140 ± 2 cm" },
        { label: { fa: "مارکرهای شفت (از تیپ تا مارکر پروگزیمال و دیستال)", en: "Shaft Marker (Tip to Proximal & Distal marker)" }, value: "94 ± 2 & 104 ± 2 cm" },
        { label: { fa: "طول تبادل سریع (Rapid Exchange Length)", en: "Rapid Exchange Length" }, value: "22 to 23 cm" },
        { label: { fa: "مارکرهای اشعه ایکس", en: "X-Ray Markers" }, value: { fa: "۲ مارکر پلاتین-ایریدیوم", en: "2 Platinum Iridium Markers" } },
        { label: { fa: "کاتتر هدایت‌کننده توصیه‌شده (Guiding Catheter)", en: "Recommended Guiding Catheter" }, value: { fa: "5 Fr. / برای تکنیک بالن دوبل (Kissing balloon): 6 Fr.", en: "5 Fr. / \"Kissing balloon\": 6 Fr." } },
        { label: { fa: "سیم راهنمای توصیه‌شده (Guide Wire)", en: "Recommended Guide Wire" }, value: "0.014\" (0.356 mm)" },
        { label: { fa: "مشخصه اتساع‌پذیری بالن", en: "Balloon Characteristic" }, value: { fa: "نیمه‌منطبق (Semi-Compliant)", en: "Semi-Compliant" } },
        { label: { fa: "پروفایل ورودی نوک (Tip Entry Profile)", en: "Tip Entry Profile" }, value: "0.016\" (0.40 mm)" },
        { label: { fa: "پروفایل عبوردهی / پروفایل بالن", en: "Crossing Profile / Balloon Profile" }, value: "0.65 mm - 0.85 mm" },
        { label: { fa: "جنس بدنه بالن", en: "Balloon Material" }, value: { fa: "پلی‌آمید (Polyamide)", en: "Polyamide" } },
        { label: { fa: "میانگین زمان تخلیه (Deflation)", en: "Average Deflation Time" }, value: "3 - 10 sec" }
      ],
      complianceChart: {
        diameters: ["1.25", "1.50", "2.00", "2.25", "2.50", "2.75", "3.00", "3.25", "3.50", "4.00", "4.50"],
        rows: [
          { pressure: 4, cells: ["1.15", "1.48", "1.92", "2.20", "2.46", "2.68", "2.92", "3.17", "3.47", "3.92", "4.38"] },
          // ردیف 6 بار: تمام ستون‌ها رنگی (NP)
          { pressure: 6, label: "NP", isRowNp: true, cells: ["1.24", "1.52", "2.05", "2.28", "2.54", "2.76", "3.04", "3.27", "3.54", "4.04", "4.50"] },
          { pressure: 8, cells: ["1.26", "1.58", "2.11", "2.31", "2.59", "2.82", "3.09", "3.34", "3.66", "4.14", "4.61"] },
          { pressure: 10, cells: ["1.27", "1.64", "2.14", "2.37", "2.66", "2.88", "3.15", "3.40", "3.71", "4.22", "4.69"] },
          { pressure: 12, cells: ["1.28", "1.74", "2.18", "2.41", "2.74", "2.94", "3.21", "3.45", "3.78", "4.29", "4.75"] },
          // ردیف 14 بار: فقط دو ستون آخر (4.00 و 4.50) رنگی هستند (RBP برای این دو سایز)
          { 
            pressure: 14, 
            cells: [
              "1.30", "1.78", "2.22", "2.45", "2.82", "2.99", "3.25", "3.49", "3.88", 
              { val: "4.36", isRbp: true }, 
              { val: "4.80", isRbp: true }
            ] 
          },
          { pressure: 16, cells: ["1.31", "1.85", "2.26", "2.49", "2.86", "3.03", "3.29", "3.53", "3.97", "4.44", "4.86"] },
          // ردیف 18 بار: بجز دو ستون آخر، بقیه ستون‌ها رنگی هستند (RBP)
          { 
            pressure: 18, 
            label: "RBP",
            cells: [
              { val: "1.33", isRbp: true }, { val: "2.00", isRbp: true }, { val: "2.30", isRbp: true },
              { val: "2.53", isRbp: true }, { val: "2.90", isRbp: true }, { val: "3.07", isRbp: true },
              { val: "3.34", isRbp: true }, { val: "3.57", isRbp: true }, { val: "4.04", isRbp: true },
              "4.54", "4.93"
            ] 
          },
          { pressure: 20, cells: ["1.34", "2.10", "2.38", "2.58", "2.98", "3.12", "3.40", "3.62", "4.15", "4.65", "-"] }
        ]
      }
    }
  ]
};