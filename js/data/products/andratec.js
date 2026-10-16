// مسیر فایل: js/data/products/andratec.js

const andratecBrandData = {
  id: "andratec",
  name: {
    fa: "Andratec",
    en: "Andratec"
  },
  logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 180' width='100%' height='100%'><g stroke='%23382347' stroke-linecap='round'><line x1='12' y1='108' x2='505' y2='32' stroke-width='3'/><line x1='12' y1='136' x2='505' y2='136' stroke-width='3'/></g><g fill='%23382347' font-family='Century Gothic, Arial, sans-serif'><text x='16' y='124' font-size='96' font-weight='400' letter-spacing='-1'>Andratec</text><g transform='translate(425, 52)'><circle cx='40' cy='40' r='36' fill='none' stroke='%23382347' stroke-width='3'/><path d='M22 25 C28 20 40 24 45 28 C50 32 46 40 38 42 C30 44 26 52 35 55 C42 57 48 50 56 50 C62 50 68 55 64 62 C60 68 50 66 42 63 C36 60 25 68 28 55 C30 46 18 35 22 25 Z' fill='%23382347'/><path d='M44 58 C52 56 58 63 60 70 C56 75 48 76 44 72 Z' fill='%23382347'/></g><text x='20' y='164' font-size='23' font-weight='500' letter-spacing='0.5'>Advanced Interventional Technologies</text></g></svg>",
  description: {
    fa: "فناوری‌های مداخله‌ای پیشرفته عروقی (Advanced Interventional Technologies).",
    en: "Advanced Interventional Technologies."
  },
  products: [
    // محصول ۱: AltoSa-XL PTA
    {
      id: "altosa-xl-pta",
      badge: "NON COMPLIANT",
      title: {
        fa: "AltoSa®-XL PTA",
        en: "AltoSa®-XL PTA"
      },
      tagline: {
        fa: "ابعاد بزرگ، پروفایل باریک، شانه با شیب صفر (large in size, small in profile, zero in shoulder)",
        en: "large in size, small in profile, zero in shoulder"
      },
      image: "assets/images/altosa-xl-pta.png",
      featuresOverview: {
        title: {
          fa: "ویژگی‌های بالینی و شرح کاتالوگ AltoSa®-XL",
          en: "AltoSa®-XL PTA Clinical & Technical Highlights"
        },
        points: {
          fa: [
            "بالن ALTOSA-XL PTA به صورت ویژه و اختصاصی برای اتساع لومن‌های بزرگ طراحی شده است. فناوری جدید بدون شانه (No-Shoulder Technology) ایمنی مضاعف را در حین پروسه تضمین می‌نماید.",
            "عملکرد فشار بالا (High-Pressure) در ترکیب با پروفایل باریک، بالن ALTOSA-XL PTA را به انتخابی بی‌نظیر برای درمان ضایعات دشوار بزرگ عروقی و غیرعروقی تبدیل کرده است.",
            "استفاده از متریال پلیمری پیشرفته Advanced PET Material (APM) جهت ایجاد مقاومت بسیار بالا در برابر سوراخ‌شدگی و پارگی، همراه با اتساع‌های مکرر و مطمئن با زمان باد شدن و تخلیه بسیار سریع.",
            "وضوح و دید افزایش‌یافته نوک کاتتر (Increased Tip Visibility) که موجب موقعیت‌یابی و جایگذاری بسیار دقیق‌تر در لومن عروق می‌گردد."
          ],
          en: [
            "The ALTOSA-XL PTA Balloon is especially designed for large lumen dilatation. The new No-Shoulder Technology provides extra safety.",
            "The high-pressure performance combined with low profile makes the ALTOSA-XL PTA Balloon an excellent choice to treat difficult large vascular and non-vascular lesions.",
            "Advanced PET Material (APM) for high puncture resistance and reliable multiple dilatations with fast inflation & deflation time.",
            "Increased Tip Visibility leading to more accurate positioning."
          ]
        }
      },
      techSpecs: [
        { label: { fa: "جنس متریال بالن", en: "Balloon Material" }, value: "Material (NPM) - 4 to 6 Folds" },
        { label: { fa: "انطباق‌پذیری بالن", en: "Balloon Compliance" }, value: { fa: "غیرمنطبق (Non-compliant)", en: "Non-compliant" } },
        { label: { fa: "قطر شفت کاتتر", en: "Shaft Diameter" }, value: "6.5F (12 & 14) / 7F (16) / 8F (18 to 24) / 9F (26 & 30)" },
        { label: { fa: "فناوری پروفایل", en: "Profile" }, value: { fa: "فناوری جمع‌شدگی مجدد (Refolding Technology)", en: "Refolding Technology" } },
        { label: { fa: "فشار اسمی (Nominal Pressure)", en: "Nominal Pressure" }, value: "8 / 6 / 4 / 3 bar" },
        { label: { fa: "فشار شکست اسمی (Rated Burst Pressure)", en: "Rated Burst Pressure" }, value: "12 / 10 / 8 / 6 / 5 / 4 bar" },
        { label: { fa: "طول شفت کاتتر", en: "Shaft Length" }, value: "110 cm" },
        { label: { fa: "سیم راهنمای توصیه‌شده (Guide Wire)", en: "Recommended Guide Wire" }, value: "0.035\" (0.89 mm)" },
        { label: { fa: "شیت اینترودیوسر توصیه‌شده", en: "Recommended Sheath Introducer" }, value: "Ranging 7F - 12F" }
      ],
      sizingTable: {
        title: {
          fa: "جدول اطلاعات و مشخصات ابعادی بالن (Information Table Of PTA Balloon)",
          en: "Information Table Of PTA Balloon"
        },
        columns: {
          fa: ["قطر (mm)", "طول بالن (mm)", "سازگاری شیت (F)", "فشار اسمی و ترکیدگی (bar/atm)"],
          en: ["Diameter (mm)", "Length (mm)", "Sheath Compatibility (F)", "Nominal & RBP (bar/atm)"]
        },
        rows: [
          { diameter: "12", lengths: "20 / 30 / 40 / 50 / 60", sheath: "7", pressure: "8 // 12" },
          { diameter: "14", lengths: "20 / 30 / 40 / 50 / 60", sheath: "7", pressure: "8 // 10" },
          { diameter: "16", lengths: "20 / 30 / 40 / 50 / 60", sheath: "8", pressure: "6 // 10" },
          { diameter: "18", lengths: "20 / 30 / 40 / 50 / 60", sheath: "8", pressure: "4 // 8" },
          { diameter: "20", lengths: "20 / 30 / 40 / 50 / 60", sheath: "8", pressure: "4 // 8" },
          { diameter: "22", lengths: "20 / 30 / 40 / 50 / 60", sheath: "9", pressure: "4 // 6" },
          { diameter: "24", lengths: "20 / 30 / 40 / 50 / 60", sheath: "10", pressure: "4 // 5" },
          { diameter: "26", lengths: "20 / 30 / 40 / 50 / 60", sheath: "10", pressure: "3 // 5" },
          { diameter: "28", lengths: "20 / 30 / 40 / 50 / 60", sheath: "11", pressure: "3 // 4" },
          { diameter: "30", lengths: "20 / 30 / 40 / 50 / 60", sheath: "11", pressure: "3 // 4" }
        ]
      }
    },

    // محصول ۲: AltoSa-XL Gemini
    {
      id: "altosa-xl-gemini",
      badge: "DOUBLE BALLOON (BIB)",
      title: {
        fa: "AltoSa®-XL Gemini",
        en: "AltoSa®-XL Gemini"
      },
      tagline: {
        fa: "طول کاری منحصربه‌فرد در طراحی بالن دوگانه (unique working length in double balloon design)",
        en: "unique working length in double balloon design"
      },
      image: "assets/images/altosa-xl-gemini.png",
      featuresOverview: {
        title: {
          fa: "ویژگی‌های بالینی و شرح کاتالوگ AltoSa®-XL Gemini",
          en: "AltoSa®-XL Gemini Clinical & Technical Highlights"
        },
        points: {
          fa: [
            "کاتتر بالن AltoSa-XL-Gemini به طور ویژه برای اتساع دوگانه (Double Dilatation) در عروق بزرگ طراحی شده است. فناوری شیب صفر شانه (Zero-Shoulder Technology) ایمنی مضاعف را در طول پروسه مداخله‌ای تضمین می‌نماید.",
            "ترکیب عملکرد فشار بالا (High-Pressure) با پروفایل عبوری باریک، این محصول را به انتخابی بی‌نظیر برای درمان عروق بزرگ دشوار و ضایعات غیرعروقی تبدیل کرده است.",
            "به‌کارگیری متریال نایلونی پیشرفته New Nylon Material (NNM) برای مقاومت بالا در برابر پارگی و سوراخ‌شدگی، امکان اتساع‌های مطمئن و چندباره همراه با سرعت تخلیه و باد شدن بسیار سریع در عروق با ویژگی‌های غیرمنطبق.",
            "تثبیت و نگه‌داری بهینه استنت (Optimal Stent Retention) برای استنت‌هایی با طراحی سلول باز (Open)، سلول بسته (Closed) و هیبریدی (Hybrid).",
            "نکته بسیار مهم: بالن داخلی کاملاً با سایزهای موردنیاز بالن خارجی هماهنگ شده است؛ طول آن دقیقاً برابر با طول بالن خارجی بوده و فشار شکست اسمی (RBP) معادل ۶ اتمسفر (6 atm) ارائه می‌دهد."
          ],
          en: [
            "The AltoSa-XL-Gemini Balloon Catheter is especially designed for double dilatation in large vessels. Zero-Shoulder Technology provides extra safety during the procedure.",
            "The high-pressure performance combined with low profile makes the AltoSa-XL-Gemini Balloon Catheter an excellent choice to treat difficult large vessels and non-vascular lesions.",
            "New Nylon Material (NNM) for high puncture resistance and reliable multiple dilatations with fast inflation & deflation time and non compliant vessel application.",
            "Optimal stent retention for Open / Closed and Hybrid cell designed stents.",
            "Please note: The inner balloon is adapted to the required sizes of the outer Balloon. It has the same length as the outer balloon and offers a RBP of 6 atm."
          ]
        }
      },
      techSpecs: [
        { label: { fa: "جنس متریال بالن", en: "Balloon Material" }, value: "Material (NPM) - 4 to 6 Folds" },
        { label: { fa: "انطباق‌پذیری بالن", en: "Balloon Compliance" }, value: { fa: "غیرمنطبق (Non-compliant)", en: "Non-compliant" } },
        { label: { fa: "قطر شفت کاتتر", en: "Shaft Diameter" }, value: "8F" },
        { label: { fa: "فناوری پروفایل", en: "Profile" }, value: { fa: "فناوری جمع‌شدگی مجدد (Refolding Technology)", en: "Refolding Technology" } },
        { label: { fa: "فشار اسمی (Nominal Pressure)", en: "Nominal Pressure" }, value: "8 / 6 / 4 / 3 bar" },
        { label: { fa: "فشار شکست اسمی (Rated Burst Pressure)", en: "Rated Burst Pressure" }, value: "12 / 10 / 8 / 6 / 5 / 4 bar" },
        { label: { fa: "طول شفت کاتتر", en: "Shaft Length" }, value: "110 cm" },
        { label: { fa: "سیم راهنمای توصیه‌شده (Guide Wire)", en: "Recommended Guide Wire" }, value: "0.035\" (0.89 mm)" },
        { label: { fa: "شیت اینترودیوسر توصیه‌شده", en: "Recommended Sheath Introducer" }, value: "Ranging 8F - 12F" }
      ],
      sizingTable: {
        title: {
          fa: "جدول اطلاعات و ابعاد بالن جیمینی (Information Table Of Gemini Balloon - BIB)",
          en: "Information Table Of Gemini Balloon (BIB)"
        },
        columns: {
          fa: ["قطر بالن خارجی (mm)", "طول (mm)", "سازگاری شیت (F)", "قطر بالن داخلی (mm)", "فشار اسمی و ترکیدگی (bar/atm)"],
          en: ["Diameter (mm)", "Length (mm)", "Sheath compatibility (F)", "Inner balloon diameter (mm)", "Nominal & RBP (bar/atm)"]
        },
        rows: [
          { diameter: "14", lengths: "30 / 40 / 50 / 60", sheath: "8", innerDiameter: "8", pressure: "8 // 10" },
          { diameter: "16", lengths: "30 / 40 / 50 / 60", sheath: "8", innerDiameter: "10", pressure: "6 // 9" },
          { diameter: "18", lengths: "30 / 40 / 50 / 60", sheath: "9", innerDiameter: "12", pressure: "4 // 8" },
          { diameter: "20", lengths: "30 / 40 / 50 / 60", sheath: "9", innerDiameter: "12", pressure: "4 // 8" },
          { diameter: "22", lengths: "30 / 40 / 50 / 60", sheath: "10", innerDiameter: "14", pressure: "4 // 6" },
          { diameter: "24", lengths: "30 / 40 / 50 / 60", sheath: "10", innerDiameter: "14", pressure: "4 // 5" },
          { diameter: "26", lengths: "30 / 40 / 50 / 60", sheath: "10", innerDiameter: "14", pressure: "3 // 5" },
          { diameter: "28", lengths: "30 / 40 / 50 / 60", sheath: "12", innerDiameter: "14", pressure: "3 // 4" },
          { diameter: "30", lengths: "30 / 40 / 50 / 60", sheath: "12", innerDiameter: "14", pressure: "3 // 4" }
        ]
      }
    },
    // محصول سوم: Optimus® CoCr Stent
    {
      id: "optimus-cocr-stent",
      badge: "BARE STENT",
      title: {
        fa: "Optimus® CoCr",
        en: "Optimus® CoCr"
      },
      tagline: {
        fa: "طراحی استنت سلول هیبریدی با کانکتور اختصاصی Omega-flex®",
        en: "Omega-flex® connector hybrid-cell stent design"
      },
      image: "assets/images/optimus-cocr.png",
      
      // ویژگی‌ها و نکات بالینی کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های ساختاری و بالینی Optimus® CoCr",
          en: "Optimus® CoCr Clinical & Engineering Highlights"
        },
        points: {
          fa: [
            "استنت Optimus® CoCr به طور ویژه برای پشتیبانی از عروق بزرگ و ایجاد ایمنی مضاعف در پروسه‌های معمول و دشوار طراحی شده است.",
            "ارتقای طراحی سلول هیبریدی نسبت به مدل‌های پیشین XL CoCr در فاکتورهای دامنه انبساط (Expansion Range)، حداقل کوتاه شدن طولی (Foreshortening)، نیروی رادیال (Radial Force) و کیفیت ساخت.",
            "به‌کارگیری متریال پیشرفته HD CoCr و طراحی ساختاری هیبریدی برای دستیابی به بالاترین نیروی شعاعی (Highest Radial Force) و انعطاف‌پذیری فوق‌العاده همراه با حداقل کوتاه‌شدگی حین اتساع.",
            "اندیکاسیون اختصاصی جهت استفاده در مداخلات پیچیده عروقی که نیازمند ویژگی‌های تقویتی و ثبات ساختاری بالا هستند."
          ],
          en: [
            "The Optimus® CoCr Stent is especially designed for large vessel support, extra safety in everyday and difficult procedures.",
            "Taking the good design of previous hybrid cell designed XL CoCr stent and making it better in terms of Expansion Range, Foreshortening, Radial Force and production Quality.",
            "The HD CoCr material and the hybrid-cell design allow highest radial force and superior flexibility with minimal foreshortening.",
            "The Optimus® CoCr Stent is intended for use in complex interventional procedures where incremental features and structural consistence is requested."
          ]
        }
      },

      // جداول سه‌گانه کوتاه‌شدگی طولی استنت (Foreshortening Tables)
      foreshorteningTables: [
        {
          sizeLabel: "L",
          title: {
            fa: "جدول کوتاه‌شدگی استنت سایز L (پروفایل بالن 8F | شیت اینترودیوسر 10F)",
            en: "Optimus Bare & Covered Stent L (PTA Balloon 8F Profile | 10F Sheath)"
          },
          balloonNote: {
            fa: "بالن PTA پیشنهادی: پروفایل 8F | شیت پیشنهادی: 10F",
            en: "Recommended PTA Balloon: 8F Profile | Recommended Introducer Sheath: 10F"
          },
          diameters: ["Ø8", "Ø10", "Ø12", "Ø14", "Ø16", "Ø18"],
          rows: [
            { code: "ATCV-18L", length: "18.6", values: ["8-17", "10-16", "12-15", "14-15", "16-15", "18-10"] },
            { code: "ATCV-23L", length: "23.4", values: ["8-22", "10-21", "12-20", "14-20", "16-15", "18-15"] },
            { code: "ATCV-28L", length: "28.2", values: ["8-27", "10-26", "12-25", "14-25", "16-20", "18-20"] },
            { code: "ATCV-33L", length: "33.0", values: ["8-32", "10-31", "12-25", "14-25", "16-25", "18-20"] },
            { code: "ATCV-38L", length: "37.8", values: ["8-37", "10-36", "12-35", "14-30", "16-30", "18-25"] },
            { code: "ATCV-43L", length: "42.6", values: ["8-42", "10-40", "12-35", "14-35", "16-30", "18-30"] },
            { code: "ATCV-48L", length: "47.0", values: ["8-47", "10-45", "12-40", "14-40", "16-35", "18-35"] },
            { code: "ATCV-57L", length: "57.0", values: ["8-55", "10-53", "12-50", "14-50", "16-45", "18-40"] }
          ]
        },
        {
          sizeLabel: "XL",
          title: {
            fa: "جدول کوتاه‌شدگی استنت سایز XL (پروفایل بالن 10F | شیت اینترودیوسر 12F)",
            en: "Optimus Bare & Covered Stent XL (PTA Balloon 10F Profile | 12F Sheath)"
          },
          balloonNote: {
            fa: "بالن PTA پیشنهادی: پروفایل 10F | شیت پیشنهادی: 12F",
            en: "Recommended PTA Balloon: 10F Profile | Recommended Introducer Sheath: 12F"
          },
          diameters: ["Ø18", "Ø20", "Ø22", "Ø24"],
          rows: [
            { code: "ATCV-18XL", length: "18.6", values: ["18-15", "20-15", "22-15", "24-15"] },
            { code: "ATCV-23XL", length: "23.4", values: ["18-20", "20-20", "22-15", "24-15"] },
            { code: "ATCV-28XL", length: "28.2", values: ["18-25", "20-25", "22-20", "24-20"] },
            { code: "ATCV-33XL", length: "33.0", values: ["18-25", "20-25", "22-25", "24-25"] },
            { code: "ATCV-38XL", length: "37.8", values: ["18-30", "20-30", "22-30", "24-30"] },
            { code: "ATCV-43XL", length: "42.6", values: ["18-35", "20-35", "22-30", "24-30"] },
            { code: "ATCV-48XL", length: "47.0", values: ["18-40", "20-40", "22-40", "24-35"] },
            { code: "ATCV-57XL", length: "57.0", values: ["18-50", "20-50", "22-45", "24-45"] }
          ]
        },
        {
          sizeLabel: "XXL",
          title: {
            fa: "جدول کوتاه‌شدگی استنت سایز XXL (پروفایل بالن 11F | شیت اینترودیوسر 13F)",
            en: "Optimus Bare & Covered Stent XXL (PTA Balloon 11F Profile | 13F Sheath)"
          },
          balloonNote: {
            fa: "بالن PTA پیشنهادی: پروفایل 11F | شیت پیشنهادی: 13F",
            en: "Recommended PTA Balloon: 11F Profile | Recommended Introducer Sheath: 13F"
          },
          diameters: ["Ø22", "Ø24", "Ø26", "Ø28"],
          rows: [
            { code: "ATCV-23XXL", length: "23.4", values: ["22-20", "24-15", "26-15", "28-15"] },
            { code: "ATCV-28XXL", length: "28.2", values: ["22-25", "24-25", "26-20", "28-20"] },
            { code: "ATCV-33XXL", length: "33.0", values: ["22-25", "24-25", "26-25", "28-25"] },
            { code: "ATCV-38XXL", length: "37.8", values: ["22-30", "24-30", "26-30", "28-30"] },
            { code: "ATCV-43XXL", length: "42.6", values: ["22-35", "24-35", "26-30", "28-30"] },
            { code: "ATCV-48XXL", length: "47.4", values: ["22-40", "24-40", "26-35", "28-35"] },
            { code: "ATCV-57XXL", length: "57.0", values: ["22-50", "24-45", "26-45", "28-45"] }
          ]
        }
      ]
    },
    // محصول چهارم: Optimus® CVS PTFE Covered Stent
    {
      id: "optimus-cvs-stent",
      badge: "PTFE COVERED",
      title: {
        fa: "Optimus® CVS PTFE",
        en: "Optimus® CVS PTFE"
      },
      tagline: {
        fa: "طراحی منحصربه‌فرد استنت با اتصال ساندویچی PTFE (unique PTFE sandwich bonded stent design)",
        en: "unique PTFE sandwich bonded stent design"
      },
      image: "assets/images/optimus-cvs.png",

      // ویژگی‌ها و نکات بالینی کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های بالینی و شرح کاتالوگ Optimus® CVS",
          en: "Optimus® CVS Clinical & Engineering Highlights"
        },
        points: {
          fa: [
            "استنت بالنی اتساع‌پذیر کبالت-کروم با پوشش اختصاصی PTFE مدل Optimus-CVS® جهت ایجاد نهایت ایمنی در پروسه‌های معمول روزمره و پیچیده طراحی شده است.",
            "طراحی برتر (Superior Design) استنت Optimus-CVS® نیروی شعاعی (Radial Strength) بالا، حداقل کوتاه‌شدگی طولی عالی (Foreshortening) و انعطاف‌پذیری فوق‌العاده‌ای را ارائه می‌دهد.",
            "پوشش ویژه ساندویچی PTFE با کارایی بالا در ترکیب با آلیاژ کبالت-کروم (CoCr)، در ضایعاتی که استحکام مضاعف نیاز است، به نتایج درمانی کم‌نظیری منتهی می‌گردد.",
            "این استنت پوشش‌دار جهت مداخلات پیچیده‌ای اندیکاسیون دارد که در آن‌ها نیاز به نیروی رادیال بالا همگام با ایمنی تکمیلی یک پوشش محافظ PTFE وجود دارد.",
            "توصیه آندراتک: جهت کسب نتایج ایده‌آل و بهینه، استفاده همزمان از کاتتر بالن AltoSa®-XL-Gemini همراه با خانواده استنت‌های Optimus پیشنهاد می‌شود."
          ],
          en: [
            "The unique Optimus-CVS® PTFE-Covered Balloon-Expandable CoCr stent is designed for extra safety in everyday and difficult procedures.",
            "The Superior Design of the Optimus-CVS® Stent gives the product high radial strength, excellent foreshortening and increased flexibility.",
            "The unique high performance sandwich PTFE coating combined with the material Cobalt-Chromium leads to excellent results where extra strength is needed.",
            "The Optimus-CVS® PTFE-Covered Balloon-Expandable Stent is intended to use for complex interventional procedures where increased radial force and extra safety of a PTFE covering is needed.",
            "AndraTec recommends the AltoSa®-XL-Gemini Balloon to use with the Optimus Stent family."
          ]
        }
      },

      // جداول سه‌گانه کوتاه‌شدگی طولی استنت پوشش‌دار (Foreshortening Tables)
      foreshorteningTables: [
        {
          sizeLabel: "L",
          title: {
            fa: "جدول کوتاه‌شدگی استنت کاورد سایز L (پروفایل بالن 8F | شیت اینترودیوسر 10F)",
            en: "Optimus Bare & Covered Stent L (PTA Balloon 8F Profile | 10F Sheath)"
          },
          balloonNote: {
            fa: "بالن PTA پیشنهادی: پروفایل 8F | شیت پیشنهادی: 10F",
            en: "Recommended PTA Balloon: 8F Profile | Recommended Introducer Sheath: 10F"
          },
          diameters: ["Ø8", "Ø10", "Ø12", "Ø14", "Ø16", "Ø18"],
          rows: [
            { code: "ATCV-18L", length: "18.6", values: ["8-17", "10-16", "12-15", "14-15", "16-15", "18-10"] },
            { code: "ATCV-23L", length: "23.4", values: ["8-22", "10-21", "12-20", "14-20", "16-15", "18-15"] },
            { code: "ATCV-28L", length: "28.2", values: ["8-27", "10-26", "12-25", "14-23", "12-20", "18-20"] },
            { code: "ATCV-33L", length: "33.0", values: ["8-32", "10-31", "12-25", "14-25", "16-25", "18-20"] },
            { code: "ATCV-38L", length: "37.8", values: ["8-37", "10-36", "12-35", "14-30", "16-30", "18-25"] },
            { code: "ATCV-43L", length: "42.6", values: ["8-42", "10-40", "12-35", "14-35", "16-30", "18-30"] },
            { code: "ATCV-48L", length: "47.0", values: ["8-47", "10-45", "12-40", "14-40", "16-35", "18-33"] },
            { code: "ATCV-57L", length: "57.0", values: ["8-55", "10-53", "12-50", "14-50", "16-45", "18-40"] }
          ]
        },
        {
          sizeLabel: "XL",
          title: {
            fa: "جدول کوتاه‌شدگی استنت کاورد سایز XL (پروفایل بالن 10F | شیت اینترودیوسر 12F)",
            en: "Optimus Bare & Covered Stent XL (PTA Balloon 10F Profile | 12F Sheath)"
          },
          balloonNote: {
            fa: "بالن PTA پیشنهادی: پروفایل 10F | شیت پیشنهادی: 12F",
            en: "Recommended PTA Balloon: 10F Profile | Recommended Introducer Sheath: 12F"
          },
          diameters: ["Ø18", "Ø20", "Ø22", "Ø24"],
          rows: [
            { code: "ATCV-18XL", length: "18.6", values: ["18-15", "20-15", "22-15", "24-15"] },
            { code: "ATCV-23XL", length: "23.4", values: ["18-20", "20-20", "22-15", "24-15"] },
            { code: "ATCV-28XL", length: "28.2", values: ["18-25", "20-25", "22-20", "24-20"] },
            { code: "ATCV-33XL", length: "33.0", values: ["18-25", "20-25", "22-25", "24-25"] },
            { code: "ATCV-38XL", length: "37.8", values: ["18-30", "20-30", "22-30", "24-30"] },
            { code: "ATCV-43XL", length: "42.6", values: ["18-35", "20-35", "22-30", "24-30"] },
            { code: "ATCV-48XL", length: "47.0", values: ["18-40", "20-40", "22-40", "24-35"] },
            { code: "ATCV-57XL", length: "57.0", values: ["18-50", "20-50", "22-45", "24-45"] }
          ]
        },
        {
          sizeLabel: "XXL",
          title: {
            fa: "جدول کوتاه‌شدگی استنت کاورد سایز XXL (پروفایل بالن 11F | شیت اینترودیوسر 13F)",
            en: "Optimus Bare & Covered Stent XXL (PTA Balloon 11F Profile | 13F Sheath)"
          },
          balloonNote: {
            fa: "بالن PTA پیشنهادی: پروفایل 11F | شیت پیشنهادی: 13F",
            en: "Recommended PTA Balloon: 11F Profile | Recommended Introducer Sheath: 13F"
          },
          diameters: ["Ø22", "Ø24", "Ø26", "Ø28"],
          rows: [
            { code: "ATCV-23XXL", length: "23.4", values: ["22-20", "24-15", "26-15", "28-15"] },
            { code: "ATCV-28XXL", length: "28.2", values: ["22-25", "24-25", "26-20", "28-20"] },
            { code: "ATCV-33XXL", length: "33.0", values: ["22-25", "24-25", "26-25", "28-25"] },
            { code: "ATCV-38XXL", length: "37.8", values: ["22-30", "24-30", "26-30", "28-30"] },
            { code: "ATCV-43XXL", length: "42.0", values: ["22-35", "24-35", "26-30", "28-30"] },
            { code: "ATCV-48XXL", length: "47.4", values: ["22-40", "24-40", "26-35", "28-35"] },
            { code: "ATCV-57XXL", length: "57.0", values: ["22-50", "24-45", "26-45", "28-45"] }
          ]
        }
      ]
    }
  ]
};