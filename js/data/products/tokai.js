// مسیر فایل: js/data/products/tokai.js

const tokaiBrandData = {
  id: "tokai",
  name: {
    fa: "TOKAI",
    en: "TOKAI"
  },
  logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 160' width='100%' height='100%'><g fill='%23008A3C' stroke='%23008A3C'><!-- آیکون دایره‌ای نماد انسان و TMP --><circle cx='80' cy='80' r='62' fill='none' stroke-width='6'/><circle cx='80' cy='38' r='7.5' fill='none' stroke-width='4'/><path d='M23 54 L137 54 C137 54 98 56 94 88 L94 139 L83 139 L83 96 C83 96 83 91 80 91 C77 91 77 96 77 96 L77 139 L66 139 L66 88 C62 56 23 54 23 54 Z' stroke-width='2'/><!-- حروف m و P در پایین نشان --><path d='M30 114 C30 100 37 99 43 108 C49 99 56 100 56 114 L56 134 L49 134 L49 115 C49 108 45 107 43 113 L43 134 L36 134 L36 115 C36 108 33 107 30 113 Z' stroke-width='1.5'/><path d='M104 102 L121 102 C131 102 135 107 135 116 C135 125 129 130 120 130 L112 130 L112 138 L104 138 Z M112 110 L112 122 L119 122 C124 122 127 120 127 116 C127 112 124 110 119 110 Z' stroke-width='1'/></g><!-- متن TOKAI --><g fill='%23008A3C' font-family='Times New Roman, Georgia, serif'><text x='162' y='92' font-size='76' font-weight='400' letter-spacing='1'>TOKAI</text></g><!-- متن MEDICAL PRODUCTS. --><g fill='%23008A3C' font-family='Arial, Helvetica, sans-serif' font-weight='700' font-size='21' letter-spacing='1.5'><text x='165' y='125'>MEDICAL PRODUCTS.</text></g></svg>",
  description: {
    fa: "تولیدکننده پیشرو ژاپنی در زمینه میکروکاتترهای فوق‌پیشرفته و تجهیزات آمبولیزاسیون محیطی (MADE IN JAPAN).",
    en: "Leading Japanese manufacturer of advanced microcatheters & peripheral embolization devices (MADE IN JAPAN)."
  },
  products: [
    {
      id: "tokai-carnelian-microcatheter",
      badge: "MADE IN JAPAN",
      title: {
        fa: "Tokai Microcatheter Carnelian",
        en: "Tokai Microcatheter Carnelian"
      },
      tagline: {
        fa: "پاسخگوی تمامی نیازهای آمبولیزاسیون محیطی — انتخاب اول در تمام پرونده‌های آمبولیزاسیون",
        en: "FOR ALL PERIPHERAL EMBOLIZATION NEEDS — First Choice for Any Peripheral Embolization Case"
      },
      image: "assets/images/tokai-carnelian.png",
      featuresOverview: {
        title: {
          fa: "ویژگی‌های ساختاری و نوآوری‌های مهندسی Tokai Carnelian",
          en: "Tokai Carnelian Structural Features & Engineering Highlights"
        },
        points: {
          fa: [
            "شفت چندمرحله‌ای با تعادل بهینه (Multistep Shaft with Optimal Balance): طراحی اختصاصی شفت کاتتریزاسیون انتخابی و تعقیب روان در آناتومی‌های پیچیده و پرپیچ‌وخم را تسهیل می‌کند.",
            "لومن داخلی مخروطی یا مستقیم (Tapered or Straight Inner Lumen): لومن مخروطی دبی جریان بالاتری ایجاد می‌کند، در حالی که لومن مستقیم بهترین عملکرد را برای کویل آمبولیزاسیون فراهم می‌سازد.",
            "بافت تنگستن یکپارچه (Tungsten Braid): علاوه بر مقاومت فوق‌العاده در برابر تاخوردگی (Kink Resistance)، دید بهینه‌ای را تحت فلوروسکوپی ایجاد می‌کند.",
            "مارکربند رادیواپک پلاتینیوم (Platinum Marker Band): مجهز به یک یا دو مارکربند جهت موقعیت‌یابی و ثبت مکان فوق‌العاده دقیق و سریع.",
            "لایه داخلی PTFE (تفلون): سطح داخلی کاملاً صاف امکان حرکت نرم روی گایدوایر و تزریق روان انواع مواد آمبولیزان را تضمین می‌کند.",
            "پوشش هایدروفیلیک پیشرفته (Hydrophilic Coating): فناوری روکش‌دهی توکای رهگیری روان و بدون اصطکاک را رقم می‌زند.",
            "سازگاری با انواع مواد آمبولیزاسیون: سازگار کامل با حلال DMSO، انواع کویل‌ها و ذرات میکروسفر."
          ],
          en: [
            "Multistep Shaft with Optimal Balance: Unique shaft design facilitates selective catheterization and smooth tracking into tortuous anatomy.",
            "Tapered or Straight Inner Lumen: The tapered inner lumen provides higher flow rate while the straight inner is best for coil embolization.",
            "Tungsten Braid: The built-in tungsten provides not only excellent kink resistance but also optimal visibility.",
            "Platinum Marker Band: One or two radiopaque marker bands facilitate rapid and precise positioning.",
            "PTFE Inner Layer: The smooth surface provides smooth tracking to guidewire and easy delivery of embolic agent.",
            "Hydrophilic Coating: Tokai coating technology facilitates easy and smooth tracking.",
            "Embolic Material Compatibility: Compatible with DMSO, coils and particles."
          ]
        }
      },
      flowRateComparison: {
        headline: {
          fa: "نمودار مقایسه دبی جریان (Flow Rate Comparison Chart)",
          en: "Flow Rate Comparison Chart"
        },
        testConditions: {
          fa: "شرایط آزمون: مایع Iopamiron 360، دمای ۳۷ درجه سانتی‌گراد، فشار تزریق ۶۰۰ psi",
          en: "Iopamiron 360, Temperature 37°C, Infusion rate 600 psi"
        },
        items: [
          { name: "Carnelian 2.2Fr", flow: "1.75 mL/s", isCurrent: true, color: "bg-amber-600" },
          { name: "Carnelian 1.8Fr", flow: "0.85 mL/s", isCurrent: true, color: "bg-blue-600" },
          { name: "Brand A (2.7Fr)", flow: "1.05 mL/s", isCurrent: false, color: "bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200" },
          { name: "Brand B (2.4Fr)", flow: "0.72 mL/s", isCurrent: false, color: "bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200" },
          { name: "Brand C (2.2Fr)", flow: "0.35 mL/s", isCurrent: false, color: "bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200" }
        ]
      },
      tipShapes: {
        title: {
          fa: "انواع طراحی نوک کاتتر (Preshaped Variations)",
          en: "Preshaped Variations"
        },
        options: [
          { name: "Straight", fa: "مستقیم (Straight)" },
          { name: "45 degrees", fa: "زاویه ۴۵ درجه (45°)" },
          { name: "Cobra angled", fa: "زاویه‌دار کبرا (Cobra Angled)" },
          { name: "W angled", fa: "زاویه‌دار دوگانه (W Angled)" }
        ]
      },
      microcatheterTable: {
        title: {
          fa: "جدول مشخصات جامع مدل‌های میکروکاتتر Tokai Carnelian",
          en: "Microcatheter Product Specification Table"
        },
        columns: {
          fa: [
            "نام مدل",
            "نوع کاربرد",
            "سایز پروگزیمال (Fr)",
            "سایز دیستال (Fr)",
            "طول (cm)",
            "قطر داخلی (پروگزیمال/دیستال)",
            "فرم تیپ",
            "روکش هایدروفیلیک (cm)",
            "گایدوایر (inch)",
            "میکروسفر (μm)",
            "گاید کاتتر (inch)"
          ],
          en: [
            "Product",
            "Type",
            "Proximal (Fr)",
            "Distal (Fr)",
            "Length (cm)",
            "ID Prox / Dist (inch)",
            "Tip",
            "Hydrophilic (cm)",
            "Guidewire (inch)",
            "Microsphere (μm)",
            "Guide Cath (inch)"
          ]
        },
        rows: [
          { product: "carnelian SI 1.9Fr", type: "Coil Embolization", prox: "2.8", dist: "1.9", len: "135", id: "0.021 / 0.021", tip: "Straight", hydro: "60", gw: "0.018\"", micro: "100 - 500", gc: "0.041\"" },
          { product: "carnelian SI 1.9Fr", type: "Coil Embolization", prox: "2.8", dist: "1.9", len: "135", id: "0.021 / 0.021", tip: "45°", hydro: "60", gw: "0.018\"", micro: "100 - 500", gc: "0.041\"" },
          { product: "carnelian SI 1.9Fr", type: "Coil Embolization", prox: "2.8", dist: "1.9", len: "135", id: "0.021 / 0.021", tip: "W Angled", hydro: "60", gw: "0.018\"", micro: "100 - 500", gc: "0.041\"" },
          { product: "carnelian 2.7 Fr", type: "High Flow", prox: "2.9", dist: "2.7", len: "125", id: "0.027 / 0.027", tip: "Straight", hydro: "60", gw: "0.025\"", micro: "100 - 700", gc: "0.041\"" },
          { product: "carnelian 2.2 Fr", type: "Selective", prox: "2.9", dist: "2.2", len: "135", id: "0.027 / 0.021", tip: "45°", hydro: "60", gw: "0.018\"", micro: "100 - 500", gc: "0.041\"" },
          { product: "carnelian 2.2 Fr", type: "Selective", prox: "2.9", dist: "2.2", len: "135", id: "0.027 / 0.021", tip: "Straight", hydro: "60", gw: "0.018\"", micro: "100 - 500", gc: "0.041\"" },
          { product: "carnelian 1.9 Fr", type: "Microsphere Embolization", prox: "2.8", dist: "1.9", len: "135", id: "0.026 / 0.020", tip: "Straight", hydro: "60", gw: "0.018\"", micro: "100 - 500", gc: "0.041\"" },
          { product: "carnelian 1.8 Fr", type: "Super Selective", prox: "2.7", dist: "1.8", len: "135", id: "0.023 / 0.017", tip: "Cobra Angled", hydro: "80", gw: "0.016\"", micro: "100 - 300", gc: "0.038\"" },
          { product: "carnelian 1.8 Fr", type: "Super Selective", prox: "2.7", dist: "1.8", len: "150", id: "0.023 / 0.017", tip: "Straight", hydro: "110", gw: "0.016\"", micro: "100 - 300", gc: "0.038\"" },
          { product: "carnelian 1.8 Fr", type: "Super Selective", prox: "2.7", dist: "1.8", len: "150", id: "0.023 / 0.017", tip: "45°", hydro: "110", gw: "0.016\"", micro: "100 - 300", gc: "0.038\"" },
          { product: "carnelian 1.7 Fr", type: "Ultra Selective", prox: "2.8", dist: "1.7", len: "135", id: "0.023 / 0.017", tip: "Straight", hydro: "60", gw: "0.016\"", micro: "100 - 300", gc: "0.038\"" }
        ]
      }
    },
    // محصول دوم: Carnelian Support
    {
      id: "tokai-carnelian-support",
      badge: "SUPPORT CATHETER",
      title: {
        fa: "Tokai Carnelian Support",
        en: "Tokai Carnelian Support"
      },
      tagline: {
        fa: "کیفیت و عملکرد اثبات‌شده در ژاپن — برای تمامی موارد مداخلات محیطی",
        en: "The Proven Quality and Performance in Japan — FOR ANY CASE PERIPHERAL INTERVENTION"
      },
      image: "assets/images/tokai-carnelian-support.png",

      // ویژگی‌های کلیدی ساختاری کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های فنی و بالینی Tokai Carnelian Support",
          en: "Tokai Carnelian Support Technical & Clinical Highlights"
        },
        points: {
          fa: [
            "شفت چندمرحله‌ای با تعادل بهینه (Multistep Shaft): استحکام، قابلیت هدایت (Pushability) و عبوردهی (Crossability) مضاعف را فراهم می‌سازد.",
            "بافت تنگستن و مارکربند پلاتینیوم: وضوح تصویر فوق‌العاده زیر اشعه ایکس جهت دستیابی به موقعیت‌یابی دقیق و ایمن.",
            "پوشش هایدروفیلیک پیشرفته: تسهیل حرکت نرم و تعقیب آسان در عروق پرپیچ‌وخم.",
            "تنوع گسترده مدل‌ها (Extensive Selection): گزینه‌های تخصصی برای تمامی پرونده‌ها و مداخلات عروق محیطی.",
            "کیفیت اثبات‌شده در ژاپن: مورد اعتمادترین و پرکاربردترین کاتتر ساپورت در مراکز درمانی ژاپن."
          ],
          en: [
            "Multistep Shaft with Optimal Balance: provides additional strength, pushability and crossability.",
            "Tungsten Braid and Platinum Marker Band: provide excellent visibility enabling precise positioning.",
            "Hydrophilic Coating: facilitates easy and smooth tracking.",
            "Extensive Selection: available for any case in peripheral intervention.",
            "The Proven Quality and Performance: the most accepted support catheter in Japan."
          ]
        }
      },

      // مدل‌های پنج‌گانه اختصاصی
      supportVariants: {
        title: {
          fa: "مدل‌های تخصصی خانواده Carnelian Support",
          en: "Carnelian Support Specialized Variants"
        },
        items: [
          {
            name: "Support 14 (Workhorse)",
            size: "1.8Fr / 2.6Fr (90, 135, 150 cm)",
            desc: {
              fa: "کاتتر ساپورت با تعادل فوق‌العاده و چندمنظوره برای کاربری عمومی مداخله‌ای.",
              en: "Well-balanced and multi-purposed support catheter."
            }
          },
          {
            name: "Support HD (Hard Shaft)",
            size: "1.8Fr / 2.6Fr (90, 135, 150 cm)",
            desc: {
              fa: "شفت سخت و تقویت‌شده جهت ایجاد نیروی بک‌آپ و پشتیبانی مضاعف در ضایعات سخت.",
              en: "Hard shaft provides additional back-up force."
            }
          },
          {
            name: "Support DP (Direct Puncture)",
            size: "1.8Fr / 2.6Fr (60 cm)",
            desc: {
              fa: "طراحی ویژه برای اپروچ مستقیم با تیپ مخروطی کوتاه جهت ورود آسان و جلوگیری از نشت خون در محل پانکچر.",
              en: "Specially designed for direct approach; short tapered tip provides easy insertion and prevents blood leakage."
            }
          },
          {
            name: "Support BTA (Below The Ankle)",
            size: "1.6Fr / 2.6Fr (150 cm)",
            desc: {
              fa: "طراحی شفت فلت ۳۰۰ میلی‌متری با سایز 1.6Fr جهت رهگیری در مسیرهای طولانی، مارپیچ و کلاترال زیر مچ پا.",
              en: "300mm of 1.6Fr flat shaft allows tracking through long and tortuous anatomy such as trans-collateral approach."
            }
          },
          {
            name: "Support 18 (0.018\" Compatible)",
            size: "1.8Fr / 2.6Fr (70, 90, 135, 150 cm)",
            desc: {
              fa: "تیپ مخروطی باریک با استحکام شفت بالا برای عبور آسان از ضایعات چالش‌برانگیز با گایدوایر ۰.۰۱۸ اینچ.",
              en: "Low profile tapered tip with additional strength of shaft facilitates easy crossing of challenging lesion."
            }
          }
        ]
      },

      // ماتریس اندیکاسیون‌ها و سختی شفت
      indicationMatrix: {
        title: {
          fa: "ماتریس کاربردهای بالینی پیشنهادی و میزان سختی شفت (Recommended Indications & Stiffness Matrix)",
          en: "Recommended Indications & Stiffness Matrix"
        },
        columns: ["Support 14", "Support HD", "Support DP", "Support BTA", "Support 18"],
        rows: [
          { approach: { fa: "رویکرد آنتروگراد (Antegrade approach)", en: "Antegrade approach" }, values: [true, true, false, false, true] },
          { approach: { fa: "رویکرد رتروگراد (Retrograde approach)", en: "Retrograde approach" }, values: [true, true, false, false, false] },
          { approach: { fa: "رویکرد ترنس-کلاترال (Trans-collateral approach)", en: "Trans-collateral approach" }, values: [false, false, false, true, false] },
          { approach: { fa: "ضایعات انسدادی مزمن شریان فمورال (SFA-CTO)", en: "SFA-CTO" }, values: [false, true, false, false, false] },
          { approach: { fa: "عروق زیر زانو (Below the Knee)", en: "Below the Knee" }, values: [true, false, false, true, false] },
          { approach: { fa: "رویکرد مستقیم (Direct approach)", en: "Direct approach" }, values: [false, false, true, false, false] },
          { 
            isStiffnessRow: true,
            approach: { fa: "میزان سختی شفت (Stiffness)", en: "Stiffness" }, 
            values: [
              { fa: "نرم (Soft)", en: "Soft" },
              { fa: "سخت (Hard)", en: "Hard" },
              { fa: "مستقیم (Direct)", en: "Direct" },
              { fa: "نرم (Soft)", en: "Soft" },
              { fa: "استاندارد (Standard)", en: "Standard" }
            ] 
          }
        ]
      },

      // جدول مشخصات فنی مدل‌های ساپورت کاتتر
      supportTable: {
        title: {
          fa: "جدول مشخصات ابعادی کاتترهای ساپورت (Microcatheter Support)",
          en: "Microcatheter Support Specification Table"
        },
        columns: {
          fa: [
            "نام مدل",
            "سایز پروگزیمال (Fr)",
            "سایز دیستال (Fr)",
            "طول کاتتر (cm)",
            "قطر داخلی پروگزیمال / دیستال (inch)",
            "فرم تیپ",
            "پوشش هایدروفیلیک (cm)",
            "گایدوایر پیشنهادی (inch)",
            "گاید کاتتر پیشنهادی (inch)"
          ],
          en: [
            "Product",
            "Proximal (Fr)",
            "Distal (Fr)",
            "Length (cm)",
            "ID Prox / Dist (inch)",
            "Tip",
            "Hydrophilic Coating (cm)",
            "Guidewire (inch)",
            "Guide Catheter (inch)"
          ]
        },
        rows: [
          { product: "carnelian Support 14", prox: "2.6", dist: "1.8", len: "135", id: "0.021 / 0.017", tip: "Straight", hydro: "100", gw: "0.014\"", gc: "0.035\"" },
          { product: "carnelian Support 14", prox: "2.6", dist: "1.8", len: "150", id: "0.021 / 0.017", tip: "Straight", hydro: "120", gw: "0.014\"", gc: "0.035\"" },
          { product: "carnelian Support HD", prox: "2.6", dist: "1.8", len: "135", id: "0.0205 / 0.017", tip: "Straight", hydro: "100", gw: "0.014\"", gc: "0.035\"" },
          { product: "carnelian support DP", prox: "2.6", dist: "1.8", len: "60", id: "0.0205 / 0.017", tip: "Straight", hydro: "40", gw: "0.014\"", gc: "0.035\"" },
          { product: "carnelian support BTA", prox: "2.6", dist: "1.6", len: "150", id: "0.021 / 0.0155", tip: "Straight", hydro: "120", gw: "0.014\"", gc: "0.035\"" },
          { product: "carnelian support 18", prox: "2.6", dist: "1.8", len: "90", id: "0.021 / 0.0195", tip: "Straight", hydro: "60", gw: "0.018\"", gc: "0.035\"" },
          { product: "carnelian support 18", prox: "2.6", dist: "1.8", len: "150", id: "0.021 / 0.0195", tip: "Straight", hydro: "120", gw: "0.018\"", gc: "0.035\"" }
        ]
      }
    }
  ]
};