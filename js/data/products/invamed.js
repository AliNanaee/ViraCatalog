// مسیر فایل: js/data/products/invamed.js

const invamedBrandData = {
  id: "invamed",
  name: {
    fa: "INVAMED",
    en: "INVAMED"
  },
  logo: "data:image/png;base64,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",
  description: {
    fa: "تولیدکننده پیشرفته تجهیزات مداخلات عروقی، رادیولوژی مداخله‌ای و کاتترهای تخصصی عبور از ضایعات عروقی.",
    en: "Advanced manufacturer of vascular intervention, interventional radiology, and specialized crossing catheters."
  },
  products: [
    {
      id: "invamed-dolphin-pro",
      badge: "Vascular / ARTERIAL",
      title: {
        fa: "Dolphin PRO® / ZEBRA",
        en: "Dolphin PRO® / ZEBRA"
      },
      tagline: {
        fa: "طراحی‌شده برای چالش‌ها، ساخته‌شده برای موفقیت — کنترل، انعطاف‌پذیری و عبور در آناتومی‌های پیچیده و CTO",
        en: "Designed for the Challenges, Built for Success — Low Profile Crossing Support Catheter"
      },
      image: "assets/images/invamed-dolphin-pro.png",

      // بخش ۱: ویژگی‌های صفحه اول کاتالوگ (Dolphin PRO)
      featuresOverview: {
        title: {
          fa: "ویژگی‌ها و قابلیت‌های عملکردی کاتتر Dolphin PRO®",
          en: "Dolphin PRO® Performance Highlights & Capabilities"
        },
        points: {
          fa: [
            "قدرت‌بخشی به فرآیند درمانی (Empowering Your Procedure): کاتتر Dolphin PRO نهایت کنترل و انعطاف‌پذیری را در حین پروسه ارائه می‌دهد.",
            "ساختار کبالت کروم (Cobalt Chrome Construction): طراحی بهینه‌سازی‌شده برای انطباق بی‌نقص و روان با آناتومی سیستم عروقی.",
            "کنترل گشتاور بی‌رقیب (Unmatched Torque Control): فراهم‌سازی ثبات و دقت بالا در سرتاسر مراحل مداخله عروقی.",
            "تعادل دقیق انعطاف‌پذیری و استحکام (Balanced Flexibility and Rigidity): تضمین عملکرد بهینه و مطمئن در سناریوهای درمانی گوناگون.",
            "ناوبری با دقت حداکثری (Navigate with Precision): نهایت اطمینان و اعتماد به ساپورت بی‌بدیل Dolphin PRO در عبور از ضایعات چالش‌برانگیز.",
            "پروفایل ورود فوق‌العاده باریک (Ultra-Low Entry Profile): تسهیل دسترسی، ورود روان به ضایعه و به حداقل رساندن تروما و آسیب جدار رگ.",
            "عبور تخصصی از انسدادهای مزمن (CTO Navigation): طراحی ویژه برای تسلط و عبور موفقیت‌آمیز از ضایعات مزمن با انسداد کامل (Chronic Total Occlusions).",
            "ابزار همه‌کاره و مطمئن: فراهم‌کننده پشتیبانی و کنترل مورد نیاز پزشکان برای دستیابی به موفقیت بالینی در آناتومی‌های بسیار پیچیده."
          ],
          en: [
            "Empowering Your Procedure: Dolphin PRO Delivers Control and Flexibility throughout the intervention.",
            "Cobalt Chrome Construction: Tailored to adapt seamlessly to complex vascular anatomy.",
            "Unmatched Torque Control: Provides outstanding stability and precision throughout the procedure.",
            "Balanced Flexibility and Rigidity: Ensures optimal performance in diverse clinical scenarios.",
            "Navigate with Precision: Trust in Dolphin PRO for unrivaled crossing support.",
            "Ultra-Low Entry Profile: Facilitates easy access and minimizes vascular trauma.",
            "CTO Navigation: Specifically designed to conquer Chronic Total Occlusions.",
            "Versatile and Reliable: Provides clinicians with the exact support and control needed to navigate complex anatomies and achieve success."
          ]
        }
      },

      // بخش ۲: مشخصات اختصاصی صفحه دوم کاتالوگ (Dolphin ZEBRA)
      zebraDetails: {
        title: {
          fa: "مشخصات فنی و نوآوری‌های طراحی کاتتر Dolphin ZEBRA",
          en: "Dolphin ZEBRA Catheter Technical Advancements & Features"
        },
        overview: {
          fa: "کاتتر Dolphin ZEBRA نشان‌دهنده پیشرفتی چشمگیر در حوزه رادیولوژی مداخله‌ای و کاردیولوژی است. این کاتتر هایدروفیلیک برای ارائه قابلیت ناوبری فوق‌العاده و دقت استثنایی مهندسی شده است تا پزشکان بتوانند با اطمینان کامل به ساختارهای عروقی دسترسی یافته و آن‌ها را درمان نمایند. ساختار ساخته‌شده از متریال مرغوب با به حداقل رساندن اصطکاک و خطر ترومای عروقی، لغزش روان کاتتر در رگ‌ها را ممکن می‌سازد. طراحی کاملاً رادیواپک به همراه مارکرهای متوالی (Sequential markings)، دید فلوروسکوپی بی‌نظیری را جهت جایگذاری و اندازه‌گیری دقیق در طول پروسه مهیا می‌کند.",
          en: "The Dolphin ZEBRA Catheter represents a significant advancement in interventional radiology and cardiology. This hydrophilic catheter is engineered for exceptional navigability and precision, ensuring that clinicians can confidently access and treat vascular structures. Constructed from premium materials, it glides smoothly through vessels, minimizing friction and reducing the risk of vascular trauma. The fully radiopaque design, enhanced with sequential markings, provides clinicians with unparalleled visibility, ensuring accurate placement and measurement during procedures."
        },
        specsList: [
          { label: { fa: "متریال (Material)", en: "Material" }, desc: { fa: "ساخته‌شده از مواد هایدروفیلیک با کیفیت عالی جهت پیمایش روان در عروق.", en: "Crafted from high-quality, hydrophilic materials ensuring smooth navigation through vessels." } },
          { label: { fa: "دید اشعه ایکس (Radiopacity)", en: "Radiopacity" }, desc: { fa: "کاملاً رادیواپک با نشانه‌گذاری‌های متوالی جهت موقعیت‌یابی و اندازه‌گیری دقیق.", en: "Fully radiopaque with sequential markings for precise localization and accurate measurement." } },
          { label: { fa: "طول کاتتر (Catheter Length)", en: "Catheter Length" }, desc: { fa: "عرضه‌شده در طول‌های متنوع متناسب با نیازهای مختلف پروسیجر.", en: "Available in various lengths to suit diverse procedural needs." } },
          { label: { fa: "قطر کاتتر (Diameter)", en: "Diameter" }, desc: { fa: "در چندین سایز مختلف جهت تطابق با ابعاد گوناگون عروق.", en: "Comes in multiple sizes to accommodate different vascular dimensions." } },
          { label: { fa: "انعطاف‌پذیری (Flexibility)", en: "Flexibility" }, desc: { fa: "طراحی‌شده جهت مانورپذیری و چرخش ایده‌آل در ساختار عروقی.", en: "Designed for optimal maneuverability within the vascular system." } },
          { label: { fa: "طراحی نوک (Tip Design)", en: "Tip Design" }, desc: { fa: "دارای تیپ آتروماتیک جهت ناوبری ایمن و کاهش ریسک آسیب به بافت رگ.", en: "Features an atraumatic tip for safe navigation and reduced risk of vessel damage." } },
          { label: { fa: "سازگاری (Compatibility)", en: "Compatibility" }, desc: { fa: "سازگار با انواع گایدوایرهای استاندارد و تجهیزات مداخله‌ای.", en: "Compatible with standard guide wires and interventional devices." } }
        ]
      },

      // بخش ۳: دیاگرام رویکردهای کراسینگ (Crossing Techniques Scheme)
      crossingTechniques: {
        title: {
          fa: "دیاگرام رویکردها و تکنیک‌های کراسینگ (Crossing Techniques Scheme)",
          en: "Approaches & Crossing Techniques Diagram"
        },
        steps: [
          {
            title: { fa: "رویکرد ابزار / گایدوایر", en: "Guidewire / Crossing Device Approach" },
            detail: { fa: "ورود از طریق گایدوایر یا تجهیزات کراسینگ اختصاصی جهت آغاز پروسه.", en: "Initial navigation using guidewire or dedicated crossing device approach." }
          },
          {
            title: { fa: "تکنیک عبور آنتروگراد / رتروگراد", en: "Ante/Retro Crossing Technique" },
            detail: { fa: "سازگاری منعطف با تکنیک‌های تهاجمی موافق جهت جریان یا معکوس (Retrograde).", en: "Flexible compatibility with antegrade and retrograde crossing strategies." }
          },
          {
            title: { fa: "عبور از فضای ساب‌اینتیمال در برابر لومن حقیقی", en: "Sub-intimal vs True Lumen Crossing" },
            detail: { fa: "پشتیبانی قدرتمند از رهگیری درون مجرای زیرین جدار (Sub-intimal) و ورود مجدد دقیق به لومن اصلی رگ (True Lumen).", en: "Firm trackability for sub-intimal crossing and accurate true lumen re-entry." }
          },
          {
            title: { fa: "ورود رتروگراد در بخش دیستال", en: "Retrograde Entry Distal" },
            detail: { fa: "دسترسی از انتهای دیستال و امکان مانور ایمن با تیپ کم‌پروفایل در انتهای تنگی.", en: "Distal retrograde access enabling safe traversal through distal occlusion limits." }
          }
        ]
      },

      // بخش ۴: جدول ماتریس مشخصات فنی
      dolphinTable: {
        title: {
          fa: "جدول مشخصات فنی کاتتر Dolphin ZEBRA (Specification Matrix)",
          en: "Dolphin ZEBRA Catheter Technical Specification Table"
        },
        columns: {
          fa: ["مشخصه فنی (Parameter)", "مدل 4F", "مدل 5F", "مدل 6F"],
          en: ["Specification Parameter", "4F Model", "5F Model", "6F Model"]
        },
        rows: [
          { param: { fa: "قطر کاتتر (Catheter Diameter)", en: "Catheter Diameter" }, c4: "4F", c5: "5F", c6: "6F" },
          { param: { fa: "طول‌های کاتتر (Catheter Length)", en: "Catheter Length" }, c4: "90 cm, 135 cm, 150 cm", c5: "90 cm, 135 cm, 150 cm", c6: "90 cm, 135 cm, 150 cm" },
          { param: { fa: "گایدوایرهای سازگار (Compatible Guidewire)", en: "Compatible Guidewire" }, c4: "0.014\", 0.018\", 0.035\"", c5: "0.014\", 0.018\", 0.035\"", c6: "0.014\", 0.018\", 0.035\"" },
          { param: { fa: "ساختار بدنه (Catheter Structure)", en: "Catheter Structure" }, c4: "Zebra Crossing Design", c5: "Zebra Crossing Design", c6: "Zebra Crossing Design" },
          { param: { fa: "جنس بدنه کاتتر (Catheter Material)", en: "Catheter Material" }, c4: "PEBAX / PA", c5: "PEBAX / PA", c6: "PEBAX / PA" },
          { param: { fa: "نوع مارکر رادیواپک (Radiopacity)", en: "Radiopacity" }, c4: "Pt-Ir Marker", c5: "Pt-Ir Marker", c6: "Pt-Ir Marker" },
          { param: { fa: "پوشش هایدروفیلیک (Hydrophilic Coating)", en: "Hydrophilic Coating" }, c4: "40 cm Distal to tip", c5: "40 cm Distal to tip", c6: "40 cm Distal to tip" },
          { param: { fa: "پروفایل عبور نوک تیپ (Tip Crossing Profile)", en: "Tip Crossing Profile" }, c4: "2.7F", c5: "2.7F", c6: "2.7F" }
        ]
      }
    },
    // محصول دوم اینوامد: Dovi Thrombus Ultra Aspiration Catheter
    {
      id: "invamed-dovi-thrombus",
      badge: "Vascular / VENOUS",
      title: {
        fa: "Dovi®",
        en: "Dovi®"
      },
      tagline: {
        fa: "ارتقای سطح آسپراسیون و تضمین ایمنی بیمار — برداشت سریع، ایمن و پرقدرت ترومبوز و آمبولی",
        en: "Elevate Your Aspiration, Ensure Patient Safety — Powerful & Precise Thrombus Removal"
      },
      image: "assets/images/invamed-dovi.png",

      // بخش اول: معرفی جامع و قابلیت‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های کاتتر آسپراسیون Dovi®",
          en: "Dovi® Thrombus Ultra Features & Highlights"
        },
        points: {
          fa: [
            "دستگاه و کاتتر Dovi Thrombus Ultra راهکاری پیشرفته و نوآورانه برای خروج ایمن و کارآمد ترومبوز و آمبولی از عروق است.",
            "ترکیب قدرت مکش و دقت ناوبری به پزشک امکان می‌دهد تا پیچیده‌ترین موارد درمانی را با اطمینان مدیریت کند.",
            "مکانیسم مکش پرقدرت (Powerful Suction) خروج موثر لخته را تضمین کرده و طراحی مهندسی آن دسترسی بی‌نظیر به لومن رگ را فراهم می‌سازد.",
            "ساخته‌شده از متریال زیست‌سازگار (Biocompatible) باکیفیت و دوام بالا به عنوان ابزاری مطمئن و ماندگار در فرآیند ترومبکتومی.",
            "طراحی دقیق برای ناوبری آسان در مسیرهای عروقی جهت دستیابی و تخلیه ترومبوز با بالاترین میزان دقت.",
            "سازگاری با سیستم Over-the-wire با گایدوایر 0.035 اینچ جهت هدایت پایدار.",
            "دارای پنجره آسپراسیون با لومن بزرگ (Large Lumen Aspiration Window) جهت تخلیه پیوسته و بدون انسداد لخته‌ها.",
            "تنوع گسترده در قطرها و طول‌های مختلف کاتتر جهت تطابق کامل با آناتومی‌های گوناگون وریدی بیماران."
          ],
          en: [
            "The Dovi Thrombus Ultra Aspiration Device and Catheter is a cutting-edge solution designed for efficient and safe removal of thrombi and emboli.",
            "Combines power and precision, ensuring practitioners are equipped to handle even the most challenging cases.",
            "Powerful suction mechanism ensures efficient thrombus removal, while precise design allows for unparalleled navigation and access.",
            "Constructed from high-quality, biocompatible materials for proven durability and reliability.",
            "Meticulously designed for easy navigation, ensuring practitioners reach and remove thrombi with unparalleled precision.",
            "Over-the-wire design compatible with 0.035\" guidewire.",
            "Large Lumen Aspiration Catheter with specialized Aspiration Window.",
            "Available in various diameters and lengths, adaptable to a wide range of patient needs and venous anatomies."
          ]
        }
      },

      // بخش دوم: ویژگی‌های ساختاری صفحه دوم کاتالوگ
      structuralDetails: {
        title: {
          fa: "ویژگی‌های ساختاری و مهندسی کاتتر Dovi",
          en: "Dovi Technical & Structural Features"
        },
        items: [
          {
            title: { fa: "کاتتر هایدروفیلیک (Hydrophilic Catheter)", en: "Hydrophilic Catheter" },
            desc: {
              fa: "مقاومت عالی در برابر خمش و قابلیت پوش‌پذیری بالا (Pushability)؛ ارتقای انتقال نیرو، تورک و مقاومت در برابر کینک؛ عبور روان از آناتومی‌های منحنی و مارپیچ.",
              en: "Excellent bending resistance and pushability; improved power, torque, and bending resistance; easy navigation through curved anatomies."
            }
          },
          {
            title: { fa: "طراحی ویژه تیپ با مارکر رادیواپک (Special Tip Design)", en: "Special Tip Design with Radiopaque Marker" },
            desc: {
              fa: "قابلیت کراسینگ عالی همگام با مکش آتروماتیک و بسیار مؤثر؛ ارائه وضوح و دید مطمئن تحت فلوروسکوپی.",
              en: "Excellent crossability while providing atraumatic and effective aspiration; reliable fluoroscopic visibility."
            }
          },
          {
            title: { fa: "محیط استخراج وسیع (Large Extraction Area)", en: "Large Extraction Area" },
            desc: {
              fa: "مکش پیوسته و عملکرد فوق‌العاده در تمام طول پروسه مداخله عروقی.",
              en: "Continuous, high-performance suction throughout the entire procedure."
            }
          },
          {
            title: { fa: "تنوع سایز کاتتر و گاید کاتتر (Catheter Size Selection)", en: "Catheter Size Selection" },
            desc: {
              fa: "انتخاب از میان سایزهای گوناگون با سازگاری با گاید کاتترهای 3.4F، 5F، 6F و 8F برای انواع کاربردهای کرونری و پریفرال.",
              en: "Selection of different catheter sizes (3.4F, 5F, 6F, and 8F guide catheter compatibility) for various coronary and peripheral applications."
            }
          }
        ]
      },

      // بخش سوم: مطالعات و نتایج بالینی (Clinical Success)
      clinicalStudies: {
        title: {
          fa: "موفقیت‌های بالینی و مطالعات ثبت‌شده (Clinical Success)",
          en: "Clinical Success & Scientific Evidence"
        },
        headline: {
          fa: "دستیابی به ۹۵٪ نتیجه موفق در درمان ترومبوز سیاهرگی عمقی (DVT) اندام تحتانی در وریدهای ایلیاک، ایلیاک خارجی، فمورال مشترک، فمورال و پوپلیتئال؛ دستیابی به موفقیت آناتومیک در ۹۵.۲٪ از ۲۳۰ بیمار تحت درمان PMCDT از ژانویه ۲۰۱۷ تا دسامبر ۲۰۱۸.",
          en: "95% successful results obtained in the treatment of lower extremity DVT of the iliac, external iliac, common femoral, femoral, and popliteal veins. Anatomical success achieved in 95.2% of 230 patients who underwent PMCDT from January 2017 to December 2018."
        },
        reports: [
          {
            source: "JVS (Journal of Vascular Surgery)",
            title: {
              fa: "منحنی یادگیری ترومبکتومی از راه پوست در درمان DVT حاد اندام تحتانی",
              en: "Learning curve for percutaneous thrombectomy in the treatment of acute lower extremity deep vein thrombosis"
            },
            result: {
              fa: "میزان عوارض در میان هر چهار گروه مشابه بود (P=.899). با این حال، میزان موفقیت پس از ۲۰ مورد اول به طور معناداری افزایش یافت و سه گروه بعدی موفقیت بسیار بالاتری نسبت به گروه اول داشتند (۷۰٪ گروه یک، ۹۰٪ گروه دو، ۹۵٪ گروه سه و ۱۰۰٪ گروه چهار؛ P=.024). موفقیت در انجام PT پس از ۲۰ پرونده به سطحی کاملاً رضایت‌بخش می‌رسد.",
              en: "Complication rate was similar between four groups (P=.899). Success was significantly increased after first 20 cases, and remaining three groups had significantly higher success rate compared with group 1 (70% for group 1, 90% for group 2, 95% for group 3, 100% for group 4; P=.024). PT performance reaches satisfactory levels after 20 cases."
            }
          },
          {
            source: "TJVS (Turkish Journal of Vascular Surgery)",
            title: {
              fa: "نتایج اولیه سیستم ترومبکتومی فارماکومکانیکال Mantis همراه با ترومبولیز کاتتر-محور در درمان DVT حاد ایلیوفمورال",
              en: "Early outcomes of mantis pharmacomechanical thrombectomy system combined with catheter-directed thrombolysis for acute iliofemoral DVT"
            },
            result: {
              fa: "میزان موفقیت تکنیکی پروسیجر ۱۰۰٪ بود. تمامی موارد بهبود بالینی زودهنگام نشان دادند و هیچ‌گونه عارضه ناشی از دستگاه مشاهده نشد. انسداد مجدد در ۱۵٪ بیماران ثبت گردید. میانه نمره درد قبل از عمل ۷ بود که در پیگیری ۱۲ ماهه پس از ترومبکتومی به ۱ کاهش یافت (P<.001).",
              en: "Procedural success rate was 100%. All cases presented early clinical improvement. No device-related complications encountered. Reocclusion observed in 15%. Pre-procedural median pain score dropped from 7 to 1 at 12-months follow-up (P<.001)."
            }
          },
          {
            source: "AVLS (American Vein & Lymphatic Society)",
            title: {
              fa: "تجربه اولیه با دستگاه جدید ترومبکتومی فارماکومکانیکال در DVT (گزارش ۹۱ بیمار)",
              en: "Initial experience with a new pharmacomechanical thrombectomy device for deep venous thrombosis (Report of 91 cases)"
            },
            result: {
              fa: "موفقیت تکنیکی در ۸۲ بیمار (۹۰.۱٪) در ماه سوم، در ۷۷ بیمار (۸۴.۶٪) در ماه ششم و در ۷۴ بیمار (۸۱.۳٪) در پیگیری ۱۲ ماهه به ثبت رسید.",
              en: "Technical success observed in 82 patients (90.1%) at 3 months, in 77 patients (84.6%) at 6 months, and in 74 patients (81.3%) at 12 months."
            }
          }
        ]
      },

      // بخش چهارم: جدول مشخصات فنی کامل (کاتتر، کنسول و پمپ خلاء)
      techSpecs: [
        { label: { fa: "طول‌های کاتتر (Catheter Length)", en: "Catheter Length" }, value: "90 cm, 95 cm, 100 cm, 110 cm, 120 cm, 125 cm, 132 cm, 135 cm, 150 cm" },
        { label: { fa: "قطرهای کاتتر (Catheter Diameter)", en: "Catheter Diameter" }, value: "3.4F, 5.0F, 6.0F, 8.0F" },
        { label: { fa: "جنس کاتتر (Catheter Material)", en: "Catheter Material" }, value: "PEBAX" },
        { label: { fa: "خروجی پورت تغذیه (Port Output)", en: "Port Output" }, value: "5-20 VDC, 3.0 A" },
        { label: { fa: "مشخصات موتور و پمپ (Motor & Pump)", en: "Motor and Pump Description" }, value: { fa: "پمپ دیافراگمی بدون روغن (Oil-free diaphragm pump)", en: "Oil-free diaphragm pump" } },
        { label: { fa: "محدوده خلاء و ساکشن (Vacuum Range)", en: "Vacuum Range" }, value: "80 - 550 mmHg" },
        { label: { fa: "توان دبی خروجی (Output Power)", en: "Output Power" }, value: "0 - 27 L/min" },
        { label: { fa: "ابعاد فیزیکی دستگاه (Dimensions)", en: "Dimensions" }, value: "18 × 23 × 20 cm" }
      ]
    }
    ,
    // محصول سوم اینوامد: Extender Drug Eluting PTA Balloon Catheter
    {
      id: "invamed-extender-deb",
      badge: "Vascular / ARTERIAL",
      title: {
        fa: "Extender®",
        en: "Extender®"
      },
      tagline: {
        fa: "ارتقای آنژیوپلاستی با دقت و کارایی بالا — انتقال هدفمند داروی پاکلی‌تاکسل جهت ممانعت از تنگی مجدد عروق",
        en: "Elevating Angioplasty with Precision and Efficacy — Paclitaxel Drug Delivery for SFA & BTK"
      },
      image: "assets/images/invamed-extender.png",

      // بخش اول: معرفی و فناوری دلیوری داروی صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های عملکردی و فناوری دلیوری دارو Extender®",
          en: "Extender® Key Features & Drug Delivery Technology"
        },
        points: {
          fa: [
            "متریال بادوام و منعطف بالن (Balloon Material): ساخته‌شده از متریال با انطباق‌پذیری بالا (Highly Compliant) جهت پیمایش روان، باز شدن دقیق و تماس بهینه با دیواره رگ.",
            "سازگاری گسترده (Compatibility): قابل استفاده با سیستم‌های کاتتر استاندارد در آنژیوپلاستی عروق محیطی.",
            "دامنه سایزبندی متنوع: عرضه در سایزها و قطرهای گوناگون جهت انطباق با ابعاد مختلف عروق خونی.",
            "باز و جمع شدن سریع (Deployment): باد شدن و تخلیه سریع و تحت کنترل بالن جهت کاهش زمان ایسکمی.",
            "داروی ضدتکثیر پاکلی‌تاکسل (Paclitaxel): مجهز به پوشش دارویی ضدتکثیر سلولی جهت جلوگیری پایدار از تنگی مجدد (Restenosis).",
            "پوشش دارویی یکنواخت (Homogeneous Coating): توزیع همگن دارو در سرتاسر سطح بالون جهت انتقال متوازن و یکپارچه به بافت هدف.",
            "رسیدن به پنجره درمانی در ۳۰ ثانیه: دستیابی به پنجره اثر درمانی (Therapeutic Window) تنها پس از ۳۰ ثانیه باز ماندن بالون.",
            "کینتیک رهایش و جذب سریع: آزادسازی و جذب سریع دارو در دیواره رگ با ماندگاری اثر طولانی‌مدت برای پزشکان معالج.",
            "پلتفرم‌های OTW و RX: ارائه‌شده در پلتفرم‌های Over-The-Wire و Rapid Exchange برای گایدوایرهای 0.014، 0.018 و 0.035 اینچ برای شریان‌های SFA و عروق زیر زانو (BTK)."
          ],
          en: [
            "Balloon Material: Durable and highly compliant material ensures optimal contact with vessel wall for effective drug delivery.",
            "Compatibility: Usable with standard interventional catheter systems.",
            "Size Range: Available in various sizes to accommodate different vascular diameters.",
            "Deployment: Rapid and controlled balloon inflation and deflation.",
            "Drug Type: Incorporates anti-proliferative Paclitaxel to prevent restenosis.",
            "Drug Coating: Homogeneous drug distribution for consistent and effective delivery.",
            "Therapeutic Window: Achieved rapidly after only 30 seconds of inflation time.",
            "Rapid Drug Release & Absorption: Rapid kinetics ensure targeted therapeutic effects with sustained clinical results.",
            "OTW & RX Design: 0.014\", 0.018\", and 0.035\" platforms engineered for SFA & BTK (Below The Knee) interventions."
          ]
        }
      },

      // بخش دوم: ویژگی‌های طراحی پنج‌گانه مهندسی کاتالوگ
      structuralDetails: {
        title: {
          fa: "پنج ستون طراحی مهندسی بالون دارویی Extender®",
          en: "Extender® 5-Pillar Engineering Highlights"
        },
        items: [
          {
            title: { fa: "پروفایل پایین (Low Profile)", en: "Low Profile Design" },
            desc: {
              fa: "طراحی ویژه جهت ورود آسان و عبور بی‌دردسر از ضایعات عروقی پیچیده و شدید (Difficult Lesion Crossing).",
              en: "Engineered to enter and cross challenging vascular lesions smoothly."
            }
          },
          {
            title: { fa: "بالن فشار بالا (High Pressure RBP)", en: "High Pressure (RBP) Balloon" },
            desc: {
              fa: "ساخته‌شده از متریال کامپلایِنت درجه‌یک با فشار گسست نامی بالا جهت دیلاتاسیون یکنواخت.",
              en: "Constructed from high-grade compliant material with high rated burst pressure."
            }
          },
          {
            title: { fa: "پوشش ضدتکثیر پاکلی‌تاکسل", en: "Paclitaxel Anti-Proliferative" },
            desc: {
              fa: "پوشش یکنواخت دارو با فرمولاسیون اختصاصی جهت تحویل اثربخش دارو به دیواره شریان و مهار هایپرپلازی نئواینتیما.",
              en: "Homogeneous drug coating ensuring consistent drug delivery to inhibit neointimal proliferation."
            }
          },
          {
            title: { fa: "مارکر پلیمری منعطف (Flexible Polymer Marker)", en: "Flexible Polymer Marker" },
            desc: {
              fa: "مارکرهای رادیواپک منعطف جهت رهگیری روان و بدون مقاومت کاتتر در آناتومی‌های مارپیچ و خمیده.",
              en: "Radiopaque markers allowing smooth tracking through tortuous and curved anatomy."
            }
          },
          {
            title: { fa: "طراحی OTW و RX برای SFA و BTK", en: "OTW & RX Platform" },
            desc: {
              fa: "پوشش کامل سازگاری با گایدوایرهای 0.014 و 0.018 و 0.035 اینچ برای ضایعات شریان رانی سطحی و زیر زانو.",
              en: "Complete compatibility with 0.014\", 0.018\", and 0.035\" guidewires for SFA and Below-The-Knee applications."
            }
          }
        ]
      },

      // بخش سوم: شواهد و گزارش‌های کارآزمایی‌های بالینی ژورنال‌ها (صفحه ۲)
      clinicalStudies: {
        title: {
          fa: "نتایج مطالعات بالینی و کارآزمایی‌های تصادفی (Clinical Trials & Evidence)",
          en: "Clinical Trials, Efficacy & Journal Evidence"
        },
        headline: {
          fa: "میزان کارایی بالینی اثبات‌شده تا ۹۷.۰٪ (Clinically Proven Success Rate up to 97.0%) — حفظ پتنسی اولیه در حدود ۹۷٪ در پیگیری ۱۲ ماهه کارآزمایی‌های تصادفی‌شده بالینی (RCTs).",
          en: "Clinically proven success rate of up to 97.0% with approximately 97% primary patency at 12 months in Randomized Controlled Trials."
        },
        reports: [
          {
            source: "JVS (Journal of Vascular Surgery)",
            title: {
              fa: "ایمنی و اثربخشی استفاده همزمان از آترکتومی نوآورانه TemREN همراه با بالن دارویی Extender در شریان‌های اندام تحتانی",
              en: "Safety and Effectiveness of Novel TemREN Atherectomy System Combined with Extender Drug-Eluting Balloon in Lower Extremity Arteries"
            },
            result: {
              fa: "در آنالیز اولیه، نرخ موفقیت تکنیکی ضایعه ۹۷.۰٪ بود که فراتر از تارگت تعیین‌شده (۸۶٪) قرار گرفت. پس از درمان کمکی با بالن، تنگی باقیمانده برای ۱۰۰٪ ضایعات کمتر از ۳۰٪ بود و میانگین تنگی نهایی به ۱۰.۹٪ رسید.",
              en: "Primary analysis technical success rate was 97.0% (target: 86%). Residual stenosis was <30% for 100% of lesions, yielding a final diameter stenosis of 10.9%."
            }
          },
          {
            source: "European Review for Medical and Pharmacological Sciences",
            title: {
              fa: "نتایج اولیه و میان‌مدت رویکرد رتروگراد ترنس‌پوپلیتئال به‌عنوان خط اول درمان انسداد کامل شریان‌های ایلیوفمورال",
              en: "Early and midterm results of retrograde transpopliteal approach as first-line treatment for total occlusions of iliofemoral arteries"
            },
            result: {
              fa: "موفقیت تکنیکی (تعریف‌شده به عنوان پتنسی مجدد با تنگی کمتر از ۳۰٪) در ۹۲.۹٪ بیماران حاصل گردید. تنگی حاد استنت در یک بیمار با مصرف سنگین دخانیات نیز با موفقیت با آنژیوپلاستی بالون درمان شد.",
              en: "Technical success (restored patency with stenosis <30%) was achieved in 92.9% of patients. Recurrent claudication due to stent stenosis was safely managed with balloon angioplasty."
            }
          },
          {
            source: "RCTs & Clinical Performance",
            title: {
              fa: "نتایج استثنایی و انتقال هدفمند دارو در پیگیری ۱۲ ماهه",
              en: "Exceptional Long-Term Results & Targeted Drug Transfer"
            },
            result: {
              fa: "بالن Extender پتنسی حدود ۹۷٪ در ۱۲ ماه نشان داده است. فرمولاسیون ویژه پوشش با کمترین دوز سیستمیک، انتقال بیش از ۹۰٪ دارو به بافت هدف و حداقل ذرات به سمت جریان خون دیستال را تضمین می‌کند.",
              en: "Extender demonstrated ~97% patency at 12 months in RCTs. Low-dose DCB with specially formulated coating delivers ~90% of drug to target with minimal downstream embolization."
            }
          }
        ]
      },

      // بخش چهارم: مشخصات فنی و فرمولاسیون دارویی بالن
      techSpecs: [
        { label: { fa: "دوز فرمولاسیون دارو (Drug Dosage)", en: "Drug Dosage" }, value: "3.0 - 3.5 µg/mm²" },
        { label: { fa: "نوع داروی ضدتکثیر", en: "Active Pharmaceutical Ingredient" }, value: { fa: "پاکلی‌تاکسل (Paclitaxel)", en: "Paclitaxel" } },
        { label: { fa: "ماده حامل دارو (Drug Carrier)", en: "Drug Carrier" }, value: { fa: "ماده حاجب (Contrast media as drug carrier)", en: "Contrast media" } },
        { label: { fa: "اندازه ذرات دارویی (Particle Size)", en: "Particle Size" }, value: "< 2 mm particles" },
        { label: { fa: "راندمان انتقال دارو به بافت هدف", en: "Drug Transfer to Target Lesion" }, value: "< 90% drug transfer" },
        { label: { fa: "زمان بازماندن تا پنجره درمانی", en: "Therapeutic Window Inflation Time" }, value: "30 Seconds" },
        { label: { fa: "آزادسازی دارو در حین مسیر (Delivery)", en: "Drug Loss during Delivery" }, value: { fa: "حداقل رهایش در طول مسیر ناوبری", en: "Minimum drug release during delivery" } },
        { label: { fa: "سرعت تخلیه بالون (Deflation Time)", en: "Deflation Speed" }, value: { fa: "زمان تخلیه سریع (Quick deflation time)", en: "Quick deflation time" } },
        { label: { fa: "نسخه غیرمنطبق (Non-Compliant)", en: "Non-Compliant Version" }, value: { fa: "موجود در نسخه NC (Available in NC version)", en: "Available in Non-Compliant version" } },
        { label: { fa: "پلتفرم‌های سیم راهنما (Guidewire Compatibility)", en: "Guidewire Compatibility" }, value: "0.014\", 0.018\", 0.035\" (OTW & RX)" }
      ]
    },
    // محصول چهارم اینوامد: Filler Liquid Adhesive Embolization Agent
    {
      id: "invamed-filler-embolization",
      badge: "LIQUID EMBOLIC AGENT",
      title: {
        fa: "Filler®",
        en: "Filler®"
      },
      tagline: {
        fa: "آمبولیزاسیون سریع و قابل اعتماد برای لحظات بحرانی — انسداد ایمن با پلیمریزاسیون فوری و کنترل‌شده",
        en: "Rapid and Reliable Embolization for Critical Moments — Cyanoacrylate-Based Liquid Embolic Agent"
      },
      image: "assets/images/invamed-filler.png",

      // بخش اول: معرفی و قابلیت‌های عملکردی صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی ماده آمبولیزاسیون Filler®",
          en: "Filler® Performance Highlights & Clinical Capabilities"
        },
        points: {
          fa: [
            "آمبولیزاسیون سریع و مطمئن در لحظات بحرانی (Rapid & Reliable): شاخصه بارز Filler پلیمریزاسیون فوق‌العاده سریع و تزریق هدفمند جهت انسداد فوری و قابل اعتماد عروق است.",
            "مکانیسم انسداد وریدی: عملکرد از طریق ایجاد یک واکنش التهابی بر روی اندوتلیوم ورید هدف پس از تزریق پلیمر همزمان با اعمال فشار فیزیکی.",
            "انسداد ایمن با نتایج برتر (Secure Occlusion): فرمولاسیون با ویسکوزیته بالا (High-Viscosity) و سازگاری با کاتترهای استاندارد، کنترل حین تزریق را افزایش داده و ریسک آمبولیزاسیون در عروق غیرهدف (Non-target embolization) را به حداقل می‌رساند.",
            "کاربردهای گسترده پریفرال و نوروواسکولار: توسعه‌یافته جهت درمان ناهنجاری‌های شریانی-وریدی (AVM) و تومورهای پرعروق (Hypervascular Tumors) از طریق یک متدولوژی پلیمریزاسیون ساده.",
            "انسداد کامل با حداقل حجم: تزریق مقادیر اندک پلیمر به‌صورت درون‌وریدی و اعمال فشار موضعی تا ۲ الی ۳ دقیقه برای دستیابی به بسته شدن کامل مجرا (Total Closure).",
            "طراحی زیست‌سازگار (Biocompatible): فرمولاسیون ویژه جهت به حداقل رساندن پاسخ‌های التهابی پس از آمبولیزاسیون، ارتقای ایمنی بیمار و تسریع فرآیند ریکاوری."
          ],
          en: [
            "Rapid and Reliable Embolization for Critical Moments: Distinguished by rapid polymerization and targeted application, ensuring immediate and reliable vessel occlusion.",
            "Venous Occlusion Mechanism: Works by causing an inflammatory reaction over the endothelium of target vein upon polymer injection and simultaneous pressure application.",
            "Secure Occlusion, Superior Outcomes: High-viscosity formulation and compatibility with standard catheters enhance control, minimizing risk of non-target embolization.",
            "Peripheral & Neurovascular Treatment: Developed for treating peripheral and neurovascular conditions, including arteriovenous malformations (AVMs) and hypervascular tumors.",
            "Total Closure: Small amounts of polymer delivered endovenously with simultaneous pressure application of 2-3 minutes for total closure.",
            "Biocompatibility & Safety: Minimizes inflammatory responses post-embolization, promoting patient safety, rapid recovery, and setting new standards in vascular care."
          ]
        }
      },

      // بخش دوم: مشخصات تفکیکی ۶‌گانه کاتالوگ (صفحه ۲)
      structuralDetails: {
        title: {
          fa: "مشخصات بنیادین و خصوصیات عملکردی ماده آمبولیزاسیون Filler®",
          en: "Filler® Core Specifications & Action Profile"
        },
        items: [
          {
            title: { fa: "نوع ماده (Agent Type)", en: "Agent Type" },
            desc: {
              fa: "ماده آمبولیزاسیون مایع چسبنده بر پایه سیانوآکریلات (Cyanoacrylate-based embolization agent).",
              en: "Cyanoacrylate-based liquid adhesive embolization agent."
            }
          },
          {
            title: { fa: "ترکیب ساختاری (Composition)", en: "Composition" },
            desc: {
              fa: "ماده آمبولیزان مایع با ویسکوزیته بالا شامل سیانوآکریلات، مهندسی‌شده جهت آمبولیزاسیون کنترل‌شده و کاملاً هدفمند.",
              en: "A high-viscosity liquid embolic agent consisting of cyanoacrylate, designed for controlled and targeted embolization."
            }
          },
          {
            title: { fa: "مکانیسم عملکرد (Mechanism of Action)", en: "Mechanism of Action" },
            desc: {
              fa: "پلیمریزاسیون فوق‌العاده سریع به محض تماس با مواد یونی نظیر خون، که منجر به انسداد آنی، محکم و پایدار رگ می‌گردد.",
              en: "Rapid polymerization upon contact with ionic substances such as blood, leading to instant and durable vessel occlusion."
            }
          },
          {
            title: { fa: "اندیکاسیون‌های بالینی (Indications)", en: "Clinical Indications" },
            desc: {
              fa: "مناسب برای ناهنجاری‌های شریانی-وریدی (AVM)، خونریزی‌های دستگاه گوارش (GI Bleeding)، و آمبولیزاسیون پیش از اعمال جراحی تومورها.",
              en: "Suitable for arteriovenous malformations, gastrointestinal bleeding, and pre-surgical embolization."
            }
          },
          {
            title: { fa: "روش تجویز و تزریق (Application)", en: "Application & Delivery" },
            desc: {
              fa: "تزریق از طریق میکروکاتترها و کاتترهای استاندارد؛ فراهم‌سازی کاربرد بسیار دقیق و کاهش حداکثری خطر آمبولیزاسیون ناخواسته.",
              en: "Delivered through standard catheters, allowing for precise application and minimization of non-target embolization."
            }
          },
          {
            title: { fa: "زیست‌سازگاری (Biocompatibility)", en: "Biocompatibility" },
            desc: {
              fa: "توسعه‌یافته بر پایه استانداردهای زیست‌سازگاری بالا جهت کاهش پاسخ‌های التهابی نامطلوب پس از اتمام فرآیند آمبولیزاسیون.",
              en: "Designed to be biocompatible and minimize undesirable inflammatory responses post-embolization."
            }
          }
        ]
      },

      // بخش سوم: پروتکل تزریق و گزارش مورد بالینی (صفحه ۲)
      clinicalStudies: {
        title: {
          fa: "پروتکل تجویز بالینی و کیس ریپورت درمان اندولیک (Clinical Protocols & Imaging)",
          en: "Clinical Protocols & Case Documentation"
        },
        headline: {
          fa: "فرآیند سریع، اثربخش و آسان (Fast, Effective & Easy) — تشکیل لایه پوسته خارجی (Skin) و جامد شدن همزمان از خارج به داخل حین پیشروی در لومن رگ.",
          en: "Fast, Effective & Easy — Filler immediately forms a skin as the polymeric embolus solidifies from outside to inside while traveling distally."
        },
        reports: [
          {
            source: "Procedural Technique",
            title: {
              fa: "نحوه آماده‌سازی و رادیواپک‌سازی با لیپیودول",
              en: "Delivery Protocol & Lipiodol Mixing"
            },
            result: {
              fa: "جهت دستیابی به وضوح فلوروسکوپی (Radiopacity)، ترکیب نسبت 1:1 با Lipiodol انجام می‌پذیرد. تزریق از طریق میکروکاتتر تحت هدایت فلوروسکوپی مستقیم به درون نیدوس ضایعه AVM هدایت می‌شود. زمان کلی انجام پروسیجر بسیار کوتاه است.",
              en: "Mix with Lipiodol (1:1 ratio) for radiopacity. Filler is delivered through a microcatheter into the AVM under fluoroscopic control. Solidifies rapidly with very short procedural time."
            }
          },
          {
            source: "CT-Guided Intervention (Figure A)",
            title: {
              fa: "اندولیک نوع ۲ از شریان‌های لومبار — تصویر قبل از درمان (A)",
              en: "Type 2 Endoleak from Lumbar Arteries — Baseline CT (A)"
            },
            result: {
              fa: "تصویر سی‌تی‌اسکن در وضعیت خوابیده به شکم (Procubitus) نشان‌دهنده کدورت و جریان خون مجدد در خلف ساک آنوریسمال مجاور پروتز (Nidus) ناشی از شریان‌های کمری است.",
              en: "Computed tomography (CT) scan in procubitus position shows posterior opacification of the periprosthetic aneurysmal sac (nidus)."
            }
          },
          {
            source: "Embolization Result (Figure B)",
            title: {
              fa: "انسداد کامل مرکز اندولیک با میکروکاتتر — تصویر پس از درمان (B)",
              en: "Complete Endoleak Center Embolization — Post-Treatment CT (B)"
            },
            result: {
              fa: "آمبولیزاسیون مستقیم مرکز اندولیک با هدایت میکروکاتتر تحت گاید سی‌تی‌اسکن تا زمان پر شدن و انسداد کامل و پایدار نیدوس با ماده Filler.",
              en: "Embolization of the endoleak center with a microcatheter under CT guidance until complete nidus opacification and durable sealing."
            }
          }
        ]
      },

      // بخش چهارم: مشخصات فنی کاتالوگ (Technical Information)
      techSpecs: [
        { label: { fa: "نوع فرمولاسیون پایه", en: "Base Formulation" }, value: { fa: "بر پایه سیانوآکریلات (Cyanoacrylate-Based)", en: "Cyanoacrylate-Based" } },
        { label: { fa: "حالت فیزیکی ماده", en: "Physical State" }, value: { fa: "مایع چسبنده با ویسکوزیته بالا (High-Viscosity Liquid)", en: "High-Viscosity Liquid" } },
        { label: { fa: "نحوه استفاده با ماده حاجب", en: "Contrast Media Mixture" }, value: "Lipiodol (1:1 Ratio)" },
        { label: { fa: "میزان چسبندگی (Adhesivity)", en: "Adhesivity" }, value: { fa: "چسبنده فعال (Adhesive)", en: "Adhesive" } },
        { label: { fa: "درجه ویسکوزیته (Viscosity)", en: "Viscosity Profile" }, value: { fa: "ویسکوزیته بالا (High Viscosity)", en: "High Viscosity" } },
        { label: { fa: "زمان پلیمریزاسیون و انسداد", en: "Polymerization Time" }, value: { fa: "آنی در تماس با خون (۲ الی ۳ دقیقه اعمال فشار)", en: "Instant on blood contact (2-3 min compression)" } },
        { label: { fa: "روش دلیوری و تجویز", en: "Delivery System" }, value: { fa: "میکروکاتترها و کاتترهای استاندارد", en: "Standard Microcatheters & Catheters" } },
        { label: { fa: "اندیکاسیون‌های اصلی", en: "Primary Indications" }, value: "AVMs, Neuro Aneurysms, Abdominal Endoleaks, GI Bleeding" }
      ]
    },
    // محصول پنجم اینوامد: Inca Thrombolysis Catheter with Protection Filter
    {
      id: "invamed-inca-thrombolysis",
      badge: "Vascular / VENOUS",
      title: {
        fa: "Inca®",
        en: "Inca®"
      },
      tagline: {
        fa: "فیلتراسیون برای ایمنی حداکثری و پاکسازی کامل لخته — تزریق متمرکز ترومبولیتیک همراه با به دام انداختن دبری‌ها",
        en: "Filtering for Safety, Clearing Clots — Thrombolysis Catheter with Integrated Protection Filter"
      },
      image: "assets/images/invamed-inca.png",

      // بخش اول: معرفی و نقش فیلتر محافظتی (صفحه اول کاتالوگ)
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و نقش فیلتر محافظتی کاتتر Inca®",
          en: "Inca® Protection Filter Highlights & Safety Role"
        },
        points: {
          fa: [
            "تجهیز به فیلتر محافظتی نوآورانه (Innovative Protective Filter): طراحی‌شده جهت به دام انداختن دبری‌ها و تکه‌های شناور لخته و به حداقل رساندن خطر آمبولیزاسیون در طول فرآیند حل کردن لخته (Clot Dissolution).",
            "طراحی متمرکز بر ایمنی بیمار: فیلتر تعبیه‌شده در کاتتر سدی محافظ در برابر ذراتی ایجاد می‌کند که ممکن است حین تزریق داروی ترومبولیتیک از لخته جدا شوند.",
            "تزریق هدفمند همگام با پیشگیری از آمبولی دیستال: داروی درمانی دقیقاً در محل ترومبوز پخش می‌شود و همزمان از حرکت قطعات خردشده لخته به سمت عروق پایین‌دست ممانعت می‌گردد.",
            "کاهش چشمگیر عوارض مداخله‌ای: ادغام فیلتر محافظتی گامی بنیادین در جهت کاهش عوارض ناشی از خرد شدن لخته در طول پروسه‌های اندوواسکولار به شمار می‌رود.",
            "لایه ایمنی مضاعف در عروق ظریف: محافظت مطمئن از عروق دیستال و مویرگ‌های کوچک‌تر در برابر انسداد ثانویه پس از ترومبولیز.",
            "کاربرد در شرایط بحرانی: طراحی با جاگذاری آسان، مناسب برای آمبولی حاد ریه (Acute PE)، ترومبوآمبولی وریدی (VTE)، بیماران بخش مراقبت‌های ویژه (ICU) و ترومبوزهای حجیم شریانی و وریدی."
          ],
          en: [
            "Innovative Protective Filter: Helps trap debris and minimizes risk of embolization during clot dissolution procedures.",
            "Designed for Patient Safety: Built-in filter safeguards against particles dislodged during thrombolytic therapy administration.",
            "Targeted Delivery & Embolization Prevention: Ensures therapeutic agents are delivered precisely to target site while preventing downstream travel of fragmented clots.",
            "Significant Complication Reduction: Filter integration marks a major advancement in reducing complications associated with clot breakdown.",
            "Extra Layer of Vessel Protection: Captures fragments that could cause blockages in smaller vessels post-thrombolysis.",
            "Broad Clinical Indications: Suitable for acute pulmonary embolism (PE), VTE, ICU patients, thrombectomy, and massive arterial/venous CDT procedures."
          ]
        }
      },

      // بخش دوم: مکانیزم دریچه سیلیکونی پتنت‌شده و ویژگی‌های مهندسی (صفحه دوم کاتالوگ)
      structuralDetails: {
        title: {
          fa: "مکانیزم دریچه‌ای پتنت‌شده و نوآوری‌های کاتتر Inca®",
          en: "Patented Valve Mechanism & Engineering Innovations"
        },
        items: [
          {
            title: { fa: "مکانیزم دریچه سیلیکونی پتنت‌شده (Patented Silicon Valve)", en: "Patented Valve Mechanism" },
            desc: {
              fa: "اجازه عبور روان به گایدوایر و همزمان جلوگیری کامل از بازگشت داروی ترومبولیتیک (Backflow)؛ تضمین ماندگاری موضعی و غلظت بالای دارو در بستر لخته.",
              en: "Allows for guidewire passage while preventing backflow of thrombolytic agents, thereby preserving localized drug delivery."
            }
          },
          {
            title: { fa: "پخش دارویی فوق‌العاده دقیق (Precision Drug Dispersion)", en: "Precision Drug Dispersion" },
            desc: {
              fa: "کنترل فرآیند آزادسازی دارو از پورت‌های تزریق دیستال، ارتقای حداکثری اثربخشی درمانی و کاهش عوارض ناخواسته سیستمیک.",
              en: "Controls drug administration process, enhancing therapeutic efficacy while minimizing potential adverse effects."
            }
          },
          {
            title: { fa: "سازگاری دارویی گسترده (High Compatibility)", en: "High Drug Compatibility" },
            desc: {
              fa: "سازگاری کامل با انواع ترکیبات و داروهای ترومبولیتیک رایج، تسهیل‌کننده کاربرد آن در انواع سناریوهای پیچیده بالینی.",
              en: "Compatible with a variety of thrombolytic agents, facilitating use in diverse clinical scenarios."
            }
          },
          {
            title: { fa: "ناوبری پیشرفته و مارکرهای پلاتینیوم (Advanced Navigation & Platinum Marker)", en: "Advanced Navigation & Markers" },
            desc: {
              fa: "طراحی منعطف کاتتر برای انطباق با تغییرات آناتومیک و عبور روان از ساختارهای عروقی باریک و دشوار به همراه دید عالی زیر فلوروسکوپی.",
              en: "Flexible design adapts to anatomical variations and navigates narrow vessels with ease, enhanced by radiopaque platinum markers."
            }
          },
          {
            title: { fa: "متریال بادوام و پایدار (Durable Material)", en: "Durable Material" },
            desc: {
              fa: "تولیدشده از موادی با استحکام بالا جهت حفظ عملکرد و کارایی بهینه در کاربردهای طولانی‌مدت و استقرار مکرر فیلتر.",
              en: "Manufactured to maintain performance over extended periods of use, even under conditions of repeated deployment."
            }
          }
        ]
      },

      // بخش سوم: اندیکاسیون‌های درمانی CDT و ترومبوآمبولی حجیم
      clinicalBenefits: {
        title: {
          fa: "دامنه کاربرد بالینی و اندیکاسیون‌های سیستم Inca®",
          en: "Clinical Scope & Indications of Inca® System"
        },
        items: [
          {
            title: { fa: "آمبولی حاد ریه و ترومبوز وریدی (Acute PE & VTE)", en: "Acute PE & VTE Indications" },
            desc: {
              fa: "سامانه با ورود آسان و استقرار سریع، بسیار ایده‌آل برای مداخلات اورژانسی آمبولی ریوی حاد و بیماران بحرانی بستری در ICU.",
              en: "Easy insertion system perfectly suitable for acute pulmonary embolism (PE), VTE, ICU, and prophylactic interventions."
            }
          },
          {
            title: { fa: "ترومبولیز هدایت‌شده با کاتتر (Catheter-Directed Thrombolysis)", en: "Catheter-Directed Thrombolysis (CDT)" },
            desc: {
              fa: "توسعه‌یافته به‌طور اختصاصی برای پروسه‌های CDT در ترومبوزهای حجیم (Massive Thrombolysis) شریانی و وریدی.",
              en: "Specialized for catheter-guided thrombolysis (CDT) in patients affected by massive arterial and venous thromboembolic conditions."
            }
          },
          {
            title: { fa: "سیستم فارماکومکانیکال مجهز به فیلتر اتساع‌پذیر", en: "Pharmacomechanical Expandable Filter Combination" },
            desc: {
              fa: "ترکیب منحصربه‌فرد درمان فارماکومکانیکال همراه با فیلتر محافظتی بازشونده برای مهار کامل و همزمان ترومبوزهای ماژور.",
              en: "Unique combination of pharmacomechanical therapy with expandable protective filters for highly effective thromboembolic management."
            }
          }
        ]
      },

      // بخش چهارم: جدول کامل ابعادی کاتتر و فیلتر محافظتی (Shapes & Sizes)
      sizingTable: {
        title: {
          fa: "جدول مشخصات و ابعاد کاتتر ترومبولیز و فیلتر Inca® (Shapes & Sizes)",
          en: "Shapes & Sizes of Inca® Thrombolysis Catheter & Protection Filter"
        },
        columns: {
          fa: ["قطر کاتتر (Catheter Diameter)", "ناحیه تزریق (Infusion Zone)", "قطر فیلتر (Filter Diameter)", "طول فیلتر (Filter Length)"],
          en: ["Catheter Diameter", "Infusion Zone", "Filter Diameter", "Filter Length"]
        },
        rows: [
          { diameter: "8F", lengths: "50 cm", sheath: "30 mm", pressure: "58 mm" },
          { diameter: "8F", lengths: "40 cm", sheath: "30 mm", pressure: "58 mm" },
          { diameter: "8F", lengths: "30 cm", sheath: "30 mm", pressure: "58 mm" },
          { diameter: "9F", lengths: "50 cm", sheath: "30 mm", pressure: "63 mm" },
          { diameter: "9F", lengths: "40 cm", sheath: "30 mm", pressure: "63 mm" },
          { diameter: "9F", lengths: "30 cm", sheath: "30 mm", pressure: "63 mm" },
          { diameter: "10F", lengths: "50 cm", sheath: "30 mm", pressure: "63 mm" },
          { diameter: "10F", lengths: "40 cm", sheath: "30 mm", pressure: "63 mm" },
          { diameter: "10F", lengths: "30 cm", sheath: "30 mm", pressure: "63 mm" }
        ]
      }
    },
    // محصول ششم اینوامد: Keeper Endovascular Snare
    {
      id: "invamed-keeper-snare",
      badge: "Vascular / ARTERIAL",
      title: {
        fa: "Keeper® Endovascular Snare",
        en: "Keeper® Endovascular Snare"
      },
      tagline: {
        fa: "کنترل دقیق، طراحی نوآورانه لوپ و بازیابی مطمئن اجسام عروقی در هر پروسیجر",
        en: "Precise Control & Innovative Loop Design — The Keeper Snare Ensures Successful Retrieval Every Time"
      },
      image: "assets/images/invamed-keeper.png",

      // ویژگی‌های بالینی و شرح کاتالوگ اسنر Keeper
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های اسنر اندوواسکولار Keeper®",
          en: "Keeper® Endovascular Snare Key Features & Capabilities"
        },
        points: {
          fa: [
            "آلیاژ با حافظه شکلی (Shape Memory Alloy): ساخته‌شده از آلیاژ نیکل-تیتانیوم (Nitinol) با حافظه شکلی فوق‌العاده جهت باز شدن کامل و بازیابی شکل اولیه لوپ درون رگ.",
            "طراحی لوپ نوآورانه (Innovative Loop Design): ایجاد گریپ و گیرش فوق‌العاده محکم جهت به دام انداختن و بازیابی موفقیت‌آمیز انواع اجسام خارجی.",
            "کنترل و هدایت دقیق (Precise Control): فراهم‌سازی مانورپذیری پایدار و هدایت آسان در تمام مراحل فرآیند خروج جسم خارجی.",
            "ساختار مستحکم و بادوام (Durable Construction): مهندسی‌شده جهت ارائه حداکثر استحکام کششی و پایداری مکانیکی در انواع پروسه‌های مداخله‌ای.",
            "انعطاف‌پذیری انطباق‌پذیر (Adaptable Flexibility): حرکت روان و بدون مانع در بستر آناتومی‌های پیچیده و مارپیچ عروقی.",
            "تنوع ابعادی گسترده (Variety of Sizes): آماده پاسخگویی به نیازهای درمانی و تشریحی گوناگون در عروق مختلف.",
            "سازگاری فراگیر (Broad Compatibility): هماهنگی کامل و بدون نقص با انواع کاتترها و ابزارهای استاندارد مداخله‌ای.",
            "تجهیز به مارکر رادیواپک (Radiopaque Marker): ایجاد وضوح تصویر عالی زیر فلوروسکوپی جهت موقعیت‌یابی دقیق حلقه اسنر.",
            "اطمینان در هر بار بازیابی (Embrace Reliability): طراحی‌شده برای استقرار و بازیابی سریع و ساده با هدف به حداقل رساندن زمان پروسه و ارتقای نتایج درمانی بیمار."
          ],
          en: [
            "Shape Memory Alloy: Advanced shape memory alloy construction ensures reliable loop expansion and shape retention.",
            "Innovative Loop Design: Ensures a secure grip and successful retrieval of foreign bodies.",
            "Precise Control: Provides stability and high precision throughout the entire retrieval procedure.",
            "Durable Construction: Built for stability, tensile strength, and durability in challenging vascular scenarios.",
            "Adaptable Flexibility: Glides through complex and tortuous vasculature with ease.",
            "Variety of Sizes: Ready to meet the diverse anatomical needs of different endovascular procedures.",
            "Broad Compatibility: Integrates seamlessly with a variety of standard interventional guide catheters and tools.",
            "Radiopaque Marker: Features clear radiopaque marker bands for optimal visualization under fluoroscopy.",
            "Reliable Retrieval: Designed for straightforward deployment and retrieval, minimizing procedure time and maximizing procedural success."
          ]
        }
      },

      // مشخصات مهندسی و ساختاری اسنر
      structuralDetails: {
        title: {
          fa: "مشخصات ساختاری و مزایای طراحی Keeper® Snare",
          en: "Keeper® Snare Design & Structural Advantages"
        },
        items: [
          {
            title: { fa: "آلیاژ حافظه‌دار نایتینول", en: "Shape Memory Alloy" },
            desc: {
              fa: "مقاومت بالا در برابر تغییر شکل دائمی و باز شدن تضمینی حلقه اسنر بلافاصله پس از خروج از غلاف.",
              en: "High resistance to permanent deformation and guaranteed loop expansion upon sheath exit."
            }
          },
          {
            title: { fa: "حلقه گیرش نوآورانه", en: "Innovative Loop Grip" },
            desc: {
              fa: "طراحی زاویه‌دار و جهت‌گیری بهینه لوپ جهت احاطه کامل کویل‌ها، استنت‌های جابه‌جاشده یا قطعات کاتتر.",
              en: "Optimized loop orientation for securely capturing migrated coils, dislodged stents, or catheter fragments."
            }
          },
          {
            title: { fa: "مارکر رادیواپک دید بالا", en: "Radiopaque Marker Band" },
            desc: {
              fa: "نشانه‌گذاری دقیق با طلا/پلاتین در انتهای دیستال جهت رویت بی‌نقص محل قرارگیری لوپ حین مداخله.",
              en: "Gold/Platinum distal radiopaque marking for flawless fluoroscopic visualization during capture."
            }
          },
          {
            title: { fa: "مانورپذیری و سازگاری کاتتر", en: "Maneuverability & Compatibility" },
            desc: {
              fa: "انتقال گشتاور (Torque) ۱ به ۱ جهت چرخش آسان کاتتر شیت و قفل شدن مطمئن روی تارگت هدف.",
              en: "1:1 torque transmission for smooth snare rotation and reliable lock onto targeted intravascular targets."
            }
          }
        ]
      },

      // مشخصات فنی عمومی کاتالوگ
      techSpecs: [
        { label: { fa: "دسته‌بندی محصول", en: "Device Category" }, value: "Endovascular Snare / Foreign Body Retrieval" },
        { label: { fa: "بستر عروقی هدف", en: "Vascular Bed" }, value: "Vascular / Arterial & Venous Systems" },
        { label: { fa: "نوع آلیاژ لوپ", en: "Loop Material" }, value: { fa: "آلیاژ دارای حافظه شکلی (Nitinol)", en: "Shape Memory Alloy (Nitinol)" } },
        { label: { fa: "نوع مارکر دید فلوروسکوپی", en: "Radiopacity Marker" }, value: { fa: "مارکربند رادیواپک", en: "Radiopaque Marker Band" } },
        { label: { fa: "طراحی لوپ (Loop Design)", en: "Loop Design" }, value: { fa: "طراحی پیشرفته با گریپ محکم", en: "Innovative Secure Grip Design" } },
        { label: { fa: "سازگاری با تجهیزات", en: "Device Compatibility" }, value: { fa: "سازگار با انواع کاتترهای اینترونشنال", en: "Compatible with standard interventional catheters" } }
      ]
    },

    // محصول هفتم اینوامد: Angioten Vascular Closure System
    {
      id: "invamed-angioten-vcs",
      badge: "VASCULAR CLOSURE",
      title: {
        fa: "Angioten®",
        en: "Angioten®"
      },
      tagline: {
        fa: "هموستاز فوق‌العاده سریع، مطمئن و بدون زحمت — اجزای ۱۰۰٪ قابل جذب جهت راه افتادن زودهنگام بیمار",
        en: "Fast, Effective & Effortless Use — Fully Bioabsorbable System for Rapid Hemostasis & Early Ambulation"
      },
      image: "assets/images/invamed-angioten.png",

      // ویژگی‌های بالینی و شرح عملکرد کاتالوگ Angioten
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و مزایای عملکردی Angioten® VCS",
          en: "Angioten® Vascular Closure System Highlights & Advantages"
        },
        points: {
          fa: [
            "کاربری سریع، اثربخش و آسان (Fast, Effective & Effortless Use): هموستاز سریع با سیستم استقرار بسیار کاربرپسند و دقیق.",
            "اجزای ۱۰۰٪ زیست‌تخریب‌پذیر و قابل جذب (Fully Bioabsorbable): تمامی قطعات سیستم بستن عروق Angioten کاملاً قابل جذب بیولوژیکی بوده که امکان بازگشت سریع بیمار به حرکت (Early Ambulation) را فراهم می‌آورد.",
            "مسدودسازی ایمن شریان فمورال: سیل و آب‌بندی مطمئن محل پانکچر شریان فمورال پس از انجام آنژیوگرافی و پروسیجرهای مداخله‌ای با نرخ عوارض عروقی بسیار پایین.",
            "کاهش چشمگیر زمان هموستاز: کاهش زمان لازم برای بند آمدن خونریزی در محل سوراخ‌شدگی شریان فمورال.",
            "معیار قطر شریان هدف: اندیکاسیون مصرف در بیمارانی با حداقل قطر قابل استفاده شریان فمورال ۴ میلی‌متر (Minimal artery diameter of 4 mm).",
            "کاربرد در پروسه‌های تشخیصی و درمانی: توسعه‌یافته برای ایجاد هموستاز سریع، مطمئن و پایدار پس از آنژیوگرافی‌های تشخیصی یا اینترونشن‌های درمانی عروق محیطی و کرونری."
          ],
          en: [
            "Fast, Effective & Effortless Use: Rapid hemostasis achieved through an easy-to-use deployment delivery system.",
            "Fully Bioabsorbable Components: All components are completely bioabsorbable, facilitating early patient ambulation without leaving permanent intravascular implants.",
            "Femoral Artery Puncture Sealing: Safely seals puncture sites following catheterization procedures, promoting fast recovery with low vascular complication rates.",
            "Reduced Hemostasis Time: Proven to significantly reduce time to achieve complete hemostasis at femoral access site.",
            "Anatomical Indication Requirement: Indicated for patients with a usable minimal femoral arterial diameter of 4 mm.",
            "Diagnostic & Interventional Scope: Developed for rapid, reliable, and safe closure following diagnostic angiography or interventional procedures."
          ]
        }
      },

      // جنبه‌های بالینی و اندیکاسیون‌های Angioten
      clinicalBenefits: {
        title: {
          fa: "اندیکاسیون‌ها و مزایای بالینی سیستم بستن عروقی Angioten®",
          en: "Clinical Indications & Hemostasis Benefits of Angioten®"
        },
        items: [
          {
            title: { fa: "هموستاز فعال و فوری (Rapid Hemostasis)", en: "Rapid Hemostasis" },
            desc: {
              fa: "دستیابی به بند آمدن کامل خونریزی در کوتاه‌ترین زمان ممکن در مقایسه با روش‌های دستی یا فشاری مکانیکی.",
              en: "Provides immediate and reliable arterial sealing compared to standard manual or mechanical compression."
            }
          },
          {
            title: { fa: "حرکت و ترخیص سریع‌تر بیمار (Early Ambulation)", en: "Early Patient Ambulation" },
            desc: {
              fa: "کاهش چشمگیر زمان استراحت مطلق در تخت پس از پروسه، افزایش رضایتمندی بیمار و کاهش طول دوره بستری.",
              en: "Significantly reduces mandatory post-procedural bed rest, expediting ambulation and discharge."
            }
          },
          {
            title: { fa: "حداقل قطر شریانی ۴ میلی‌متر (≥ 4 mm Artery)", en: "Minimal Artery Diameter" },
            desc: {
              fa: "مناسب برای بستن شریان‌های فمورال دارای لومن موثر با قطر حداقل ۴ میلی‌متر جهت جلوگیری از تنگی ثانویه رگ.",
              en: "Specifically indicated for use in puncture sites where the minimal arterial diameter is 4 mm or greater."
            }
          }
        ]
      },

      // مشخصات فنی کاتالوگ Angioten
      techSpecs: [
        { label: { fa: "دسته‌بندی محصول", en: "Device Category" }, value: "Vascular Closure System (VCS)" },
        { label: { fa: "محل آناتومیک مصرف", en: "Anatomical Access Site" }, value: "Femoral Artery Puncture" },
        { label: { fa: "حداقل قطر شریان مورد نیاز", en: "Minimal Artery Diameter" }, value: "≥ 4 mm" },
        { label: { fa: "ماهیت اجزای سیستم", en: "Component Absorption" }, value: { fa: "۱۰۰٪ زیست‌جذب‌پذیر (Fully Bioabsorbable)", en: "Fully Bioabsorbable" } },
        { label: { fa: "نوع هموستاز", en: "Hemostasis Profile" }, value: { fa: "هموستاز فعال و سریع (Rapid Hemostasis)", en: "Rapid & Reliable Hemostasis" } },
        { label: { fa: "نوع پروسیجرها", en: "Procedure Suitability" }, value: { fa: "آنژیوگرافی‌های تشخیصی و مداخلات اینترونشنال", en: "Diagnostic & Interventional Procedures" } }
      ]
    },
    // محصول هشتم اینوامد: Libro Liquid Non-Adhesive Embolization Agent
    {
      id: "invamed-libro-embolization",
      badge: "NON-ADHESIVE EMBOLIC",
      title: {
        fa: "Libro®",
        en: "Libro®"
      },
      tagline: {
        fa: "فرمولاسیون پیشرفته و کنترل دقیق جریان — انسداد عروقی پایدار، منسجم و غیرچسبنده در مداخلات نوروواسکولار",
        en: "Advanced Formula and Precision in Flow Control — EVOH, DMSO, and Tantalum Non-Adhesive Embolization"
      },
      image: "assets/images/invamed-libro.png",

      // بخش اول: معرفی و قابلیت‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی ماده آمبولیزاسیون Libro®",
          en: "Libro® Performance Highlights & Capabilities"
        },
        points: {
          fa: [
            "فرمولاسیون پیشرفته و کنترل دقیق جریان: ترکیب منحصربه‌فرد کوپلیمر اتیلن وینیل الکل (EVOH)، حلال دی‌متیل سولفوکسید (DMSO) و پودر رادیواپک تانتالوم (Tantalum).",
            "فرمولاسیون غیرچسبنده (Non-Adhesive Formula): تضمین آمبولیزاسیون هدفمند، کنترل‌شده و کاهش چشمگیر خطر آمبولیزاسیون در عروق ناخواسته یا گیر کردن کاتتر.",
            "دید رادیواپسیتی فوق‌العاده بالا: پودر تانتالوم شفافیت دید عالی تحت تصویربرداری فلوروسکوپی فراهم کرده و موقعیت‌یابی و استقرار کاملاً دقیق را میسر می‌سازد.",
            "نتایج بهینه با ۳ فرمولاسیون متنوع: ویژگی غیرچسبنده محصول تشکیل یک آمبولوس پایدار، منسجم (Cohesive) و یکپارچه را بدون آسیب به دیواره رگ تضمین می‌کند.",
            "زیست‌سازگاری کامل (Biocompatible): مواد اولیه به‌کاررفته در Libro کاملاً ایمن بوده و تحمل‌پذیری بیولوژیکی بسیار بالایی در بدن دارند.",
            "کاربرد همه‌جانبه نوروواسکولار: مناسب برای طیف وسیعی از ضایعات پیچیده عصبی-عروقی از جمله مالفورماسیون‌های شریانی-وریدی (AVM) و آنوریسم‌ها.",
            "عملکرد پایدار و یکنواخت: ارائه عملکرد مطمئن و پیش‌بینی‌پذیر در تمامی مراحل فرآیند تزریق درون عروقی.",
            "حلالیت کامل در DMSO: امکان تزریق بسیار روان و کنترل‌شده از طریق میکروکاتترهای عروقی سازگار با DMSO."
          ],
          en: [
            "Advanced Formula and Flow Control: Unique blend of EVOH (Ethylene Vinyl Alcohol Copolymer), DMSO (Dimethyl Sulfoxide), and Tantalum powder.",
            "Non-Adhesive Formula: Ensures controlled and precise embolization, eliminating catheter gluing risk and reducing non-target embolization.",
            "High Radiopacity: Micronized Tantalum powder provides exceptional fluoroscopic visualization for real-time monitoring and exact placement.",
            "Optimal Outcomes for 3 Formulas: Non-adhesive nature ensures stable and cohesive embolus formation without compromising vessel wall integrity.",
            "High Biocompatibility: Materials used are safe, highly biocompatible, and well-tolerated by the human vascular system.",
            "Versatile Neurovascular Use: Perfectly suited for complex arteriovenous malformations (AVMs), aneurysms, and hypervascular targets.",
            "Stable and Consistent: Reliable, reproducible delivery performance throughout every endovascular procedure.",
            "DMSO Solubility: Facilitates targeted delivery through standard DMSO-compatible microcatheters."
          ]
        }
      },

      // بخش دوم: مشخصات تفکیکی ۶‌گانه کاتالوگ (صفحه ۲)
      structuralDetails: {
        title: {
          fa: "مشخصات بنیادین و خصوصیات عملکردی ماده آمبولیزاسیون Libro®",
          en: "Libro® Core Action Profile & Technical Specifications"
        },
        items: [
          {
            title: { fa: "نوع ماده (Agent Type)", en: "Agent Type" },
            desc: {
              fa: "ماده آمبولیزاسیون مایع غیرچسبنده (Non-adhesive liquid embolic agent).",
              en: "Non-adhesive embolization liquid agent."
            }
          },
          {
            title: { fa: "ترکیب شیمیایی (Composition)", en: "Composition" },
            desc: {
              fa: "کوپلیمر اتیلن وینیل الکل (EVOH) حل‌شده در دی‌متیل سولفوکسید (DMSO) همراه با پودر میکرونیزه معلق تانتالوم برای ایجاد کنتراست رادیواپک.",
              en: "Ethylene Vinyl Alcohol Copolymer (EVOH) dissolved in DMSO and mixed with suspended micronized Tantalum powder."
            }
          },
          {
            title: { fa: "مکانیسم عملکرد (Mechanism of Action)", en: "Mechanism of Action" },
            desc: {
              fa: "انتقال دقیق و اتساع کنترل‌شده در تماس با خون؛ تشکیل آمبولوس منسجم و یکنواخت بدون چسبیدن به دیواره عروق یا کاتتر.",
              en: "Precise delivery and controlled solidification upon contact with blood, forming a stable and cohesive embolus without adhering to vessel walls."
            }
          },
          {
            title: { fa: "اندیکاسیون‌های بالینی (Indications)", en: "Clinical Indications" },
            desc: {
              fa: "ایده‌آل برای ناهنجاری‌های شریانی-وریدی مغزی (AVMs)، آنوریسم‌های عروقی، و آمبولیزاسیون پیش از جراحی ضایعات پرخون.",
              en: "Ideal for arteriovenous malformations, aneurysms, hypervascular lesions, and pre-surgical embolization."
            }
          },
          {
            title: { fa: "روش تزریق و تجویز (Application)", en: "Application & Delivery" },
            desc: {
              fa: "تزریق از طریق میکروکاتترها با هدایت حلالیت در DMSO، تضمین‌کننده توزیع دقیق و به حداقل رساندن خطر آمبولیزاسیون ناخواسته.",
              en: "Delivered through DMSO-compatible microcatheters, ensuring targeted delivery and minimal risk of non-target embolization."
            }
          },
          {
            title: { fa: "دید فلوروسکوپی (Visibility)", en: "Fluoroscopic Visibility" },
            desc: {
              fa: "پودر تانتالوم با ایجاد سایه رادیواپک قوی، مانیتورینگ لحظه‌ای (Real-time) و استقرار ایمن را در تمام طول فرآیند امکان‌پذیر می‌سازد.",
              en: "Tantalum powder enhances radiopacity, allowing for real-time fluoroscopic monitoring and precise placement."
            }
          }
        ]
      },

      // بخش سوم: ارکان سه‌گانه عملکردی کاتالوگ (Assurance, Efficacy, Effortlessness)
      clinicalBenefits: {
        title: {
          fa: "ارکان سه‌گانه بالینی کاتالوگ Libro® (Assurance, Efficacy, Effortlessness)",
          en: "Libro® 3-Pillar Clinical Advantages"
        },
        items: [
          {
            title: { fa: "اطمینان بالینی (Assurance)", en: "Clinical Assurance" },
            desc: {
              fa: "تعالی بر پایه شواهد بالینی رو‌به‌رشد و نتایج درمانی اثبات‌شده در آنژیوپلاستی و نورواینترونشن.",
              en: "Excellence driven by building clinical evidence and proven therapeutic procedural results."
            }
          },
          {
            title: { fa: "کارایی و کنترل حین عمل (Efficacy)", en: "Procedural Efficacy" },
            desc: {
              fa: "ویژگی‌های کنترل جراحی عالی؛ قابلیت بررسی آنژیوگرافی کنترل در حین تزریق ماده آمبولیک، ته‌نشینی منسجم (Cohesive Deposition) و استقرار یکدست.",
              en: "Excellent surgical handling characteristics, control angiography during embolic injection, and cohesive deposition."
            }
          },
          {
            title: { fa: "سهولت در تزریق و هدایت (Effortlessness)", en: "Effortless Injection Control" },
            desc: {
              fa: "متدولوژی تزریق آهسته و کاملاً تحت کنترل؛ با قابلیت منحصربه‌فرد توقف و شروع مجدد تزریق (Stop and Start Injection) بدون خطر چسبیدن کاتتر.",
              en: "Slow, controlled injection method with the unique ability to stop and restart injection without catheter entrapment."
            }
          }
        ]
      },

      // بخش چهارم: مشخصات فنی کاتالوگ (Technical Information)
      techSpecs: [
        { label: { fa: "نوع ماهیت امبولیک", en: "Embolic Agent Type" }, value: { fa: "مایع غیرچسبنده (Liquid Non-Adhesive)", en: "Liquid Non-Adhesive" } },
        { label: { fa: "ماده پایه پلیمری", en: "Base Polymer" }, value: "EVOH (Ethylene Vinyl Alcohol Copolymer)" },
        { label: { fa: "حلال حامل", en: "Carrier Solvent" }, value: "DMSO (Dimethyl Sulfoxide)" },
        { label: { fa: "عامل حاجب رادیواپک", en: "Contrast Agent" }, value: { fa: "پودر میکرونیزه تانتالوم (Micronized Tantalum)", en: "Micronized Tantalum Powder" } },
        { label: { fa: "تنوع فرمولاسیون", en: "Formulations Available" }, value: { fa: "۳ فرمولاسیون ویسکوزیته مختلف", en: "3 Different Formulations" } },
        { label: { fa: "تکنیک تزریق", en: "Injection Technique" }, value: { fa: "تزریق کنترل‌شده با امکان توقف و شروع (Stop & Start)", en: "Slow controlled injection with stop-and-start capability" } },
        { label: { fa: "میکروکاتتر سازگار", en: "Compatible Microcatheter" }, value: { fa: "میکروکاتترهای سازگار با DMSO", en: "DMSO-compatible microcatheters" } },
        { label: { fa: "اندیکاسیون‌های اصلی", en: "Target Indications" }, value: "Brain AVMs, Hypervascular Tumors, Peripheral & Neuro Aneurysms" }
      ]
    },
    // محصول نهم اینوامد: Mantis CURVE Rotational Pharmacomechanical Thrombectomy System
    {
      id: "invamed-mantis-curve",
      badge: "Vascular / VENOUS",
      title: {
        fa: "Mantis CURVE®",
        en: "Mantis CURVE®"
      },
      tagline: {
        fa: "پیشرفت بنیادین در تخلیه لخته خون — ترکیب ترومبکتومی چرخشی و تزریق متمرکز ترومبولیتیک با تیپ منحنی آتروماتیک",
        en: "Groundbreaking Advancement in Blood Clot Removal — Rotational OTW Pharmacomechanical Thrombectomy"
      },
      image: "assets/images/invamed-mantis-curve.png",

      // بخش اول: معرفی و قابلیت‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی Mantis CURVE®",
          en: "Mantis CURVE® Performance Highlights & Capabilities"
        },
        points: {
          fa: [
            "پیشرفت بنیادین در حذف لخته‌های خونی (Groundbreaking Advancement): دارای مجموعه‌ای از ویژگی‌های برتر مهندسی جهت ارتقای تجربه ترومبکتومی برای پزشک و بیمار.",
            "تیپ منحنی منحصربه‌فرد با طراحی Over-the-Wire: هدایت فوق‌العاده پایدار و مانورپذیری استثنایی حتی در چالش‌برانگیزترین آناتومی‌های عروقی.",
            "ترومبکتومی چرخشی با تماس تک‌دیواره (Single-Wall Contact): دارای اندیکاسیون رسمی جهت خرد کردن مکانیکی لخته همزمان با تزریق داروی ترومبولیتیک در بستر عروق محیطی.",
            "کاربرد در عروق محیطی و فیستول/گرافت دیالیز: اندیکاسیون اثبات‌شده در درمان ترومبوز عروق پریفرال و فیستول‌ها و گرافت‌های دیالیز شریانی-وریدی (AV Dialysis Fistulas/Grafts).",
            "طراحی نوک آتروماتیک (Atraumatic Tip Design): تضمین حداکثر ایمنی بافت و محافظت از دیواره رگ در طول چرخش با دور بالا.",
            "از مسیرهای منحنی پیچیده تا مسیرهای مستقیم: Mantis CURVE انواع پیچیدگی‌های تشریحی را با حفظ پایداری کامل پوشش می‌دهد.",
            "اولویت بنیادین ایمنی بیمار: مجهز به مکانیزم‌های متعدد ایمنی جهت پایش لحظه‌ای عملکرد دستگاه و حفاظت کامل از بیمار در طول پروسه."
          ],
          en: [
            "Groundbreaking Advancement in Blood Clot Removal: Enhances the thrombectomy experience for both practitioner and patient.",
            "Unique Curved Catheter Tip & OTW Design: Ensures exceptional navigation and stability even in the most challenging anatomical scenarios.",
            "Single-Wall Contact Rotational System: Indicated for mechanical clot removal and simultaneous infusion of thrombolytics in peripheral vasculature.",
            "Dual Indication: Indicated for use in both peripheral vessels and AV dialysis access fistulas/grafts.",
            "Atraumatic Tip Design: Minimizes vessel trauma while navigating sharp curves and bends.",
            "Handles Complex Curves to Straight Paths: Delivers unparalleled trackability and clot access regardless of target location.",
            "Paramount Patient Safety: Incorporates multiple safety mechanisms to monitor device performance throughout the procedure."
          ]
        }
      },

      // بخش دوم: ویژگی‌های طراحی ارگونومیک و ۷‌گانه مهندسی کاتالوگ (صفحه ۲)
      structuralDetails: {
        title: {
          fa: "طراحی ارگونومیک یکپارچه و خصوصیات ۷‌گانه مهندسی کاتالوگ",
          en: "Ergonomic & One-Piece Design — 7 Core Engineering Features"
        },
        items: [
          {
            title: { fa: "نوع دستگاه (Device Type)", en: "Device Type" },
            desc: {
              fa: "سامانه ترومبکتومی چرخشی فارماکومکانیکال پیشرفته با هدایت روی وایر (Advanced OTW Rotational System).",
              en: "Advanced over-the-wire (OTW) pharmacomechanical rotational thrombectomy system."
            }
          },
          {
            title: { fa: "مکانیسم عملکرد (Mechanism of Action)", en: "Mechanism of Action" },
            desc: {
              fa: "تلفیق چرخش مکانیکی پرقدرت با تزریق هدفمند داروی ترومبولیتیک جهت خردسازی سریع و مؤثر لخته و کاهش دوز مصرفی دارو.",
              en: "Integrates mechanical rotation with pharmacological agent delivery for effective and efficient clot breakdown."
            }
          },
          {
            title: { fa: "طراحی Over-the-Wire (OTW)", en: "OTW Stability" },
            desc: {
              fa: "ایجاد ثبات و کنترل مضاعف در حین ناوبری؛ مزیتی حیاتی هنگام عبور از آناتومی‌های پیچیده و پرپیچ‌وخم وریدی.",
              en: "Provides additional stability and control during navigation, especially crucial in tortuous vasculature."
            }
          },
          {
            title: { fa: "تیپ کاتتر منحنی (Curved Catheter Tip)", en: "Curved Catheter Tip" },
            desc: {
              fa: "قابلیت عبور از انحناها و خمیدگی‌های چالش‌برانگیز عروق جهت دسترسی به ترومبوز در نقاط دشوار و دور از دسترس.",
              en: "Adeptly navigates bends and curves in vessels, ensuring access to clots in hard-to-reach areas."
            }
          },
          {
            title: { fa: "راندمان چرخشی (Rotational Efficiency)", en: "Rotational Efficiency" },
            desc: {
              fa: "طراحی با گشتاور بالا (High-Torque) جهت تضمین نیروی چرخشی پایدار و قدرتمند در شکستن مکانیکی ترومبوزهای سخت.",
              en: "High-torque design ensures consistent and powerful rotational force, aiding in effective clot breakdown."
            }
          },
          {
            title: { fa: "سیستم دلیوری دارو (Drug Delivery System)", en: "Drug Delivery System" },
            desc: {
              fa: "تزریق مستقیم ترومبولیتیک دقیقاً در کانون لخته، ارتقای حداکثری اثربخشی دارو و به حداقل رساندن مواجهه سیستمیک بیمار.",
              en: "Precision-engineered to optimize thrombolytic delivery directly at clot site, minimizing systemic exposure."
            }
          },
          {
            title: { fa: "سیستم‌های حفاظتی ایمنی (Safety Features)", en: "Safety Features" },
            desc: {
              fa: "تعبیه مکانیزم‌های حفاظتی چندگانه برای نظارت بر عملکرد موتور، کنترل مقاومت بافتی و پیشگیری از آسیب اندوتلیوم.",
              en: "Includes multiple safety mechanisms to monitor device performance and ensure patient safety throughout the procedure."
            }
          }
        ]
      },

      // بخش سوم: دو پاراگراف تحلیلی بالای جدول مشخصات (صفحه ۲ کاتالوگ)
      performanceNarrative: {
        title: {
          fa: "شرح عملکرد بالینی، ناوبری عروقی و سیستم تزریق دارو (متن کامل کاتالوگ)",
          en: "Clinical Performance, Vascular Navigation & Drug Delivery System"
        },
        paragraphs: {
          fa: [
            "سامانه ترومبکتومی روی وایر Mantis CURVE (OTW) یک پیشرفت بنیادین در حذف لخته‌های خونی به شمار می‌رود که قابلیت‌های فارماکومکانیکال را با طراحی ویژه تیپ کاتتر منحنی تلفیق کرده است. این سامانه نوآورانه به‌طور اختصاصی برای ناوبری و عبور از پیچیدگی‌های ظریف سیستم عروقی مهندسی شده است تا دسترسی بی‌رقیب به لخته‌ها را صرف‌نظر از موقعیت آناتومیک آن‌ها تضمین نماید.",
            "سامانه Mantis CURVE صرفاً هدایت نمی‌شود، بلکه بالاترین سطح عملکرد را ارائه می‌دهد. طراحی با گشتاور بالا (High-Torque) نیروی چرخشی پیوسته و قدرتمندی را فراهم می‌آورد که خردسازی سریع و کارآمد لخته‌های خون را تسهیل می‌کند. همچنین سیستم مهندسی‌شده دقیق دلیوری دارو، اثربخشی عوامل ترومبولیتیک را از طریق درمان هدفمند در موضع لخته ارتقا داده و مواجهه سیستمیک کل بدن با دارو را به حداقل می‌رساند."
          ],
          en: [
            "The Mantis CURVE Over-the-Wire (OTW) Thrombectomy System is a groundbreaking advancement in blood clot removal, bringing together pharmacomechanical capabilities with a specialized curved catheter tip design. This innovative system is crafted to navigate the intricacies of the vascular system, ensuring unparalleled access to clots, regardless of their location.",
            "Mantis CURVE doesn't just navigate; it performs. The high-torque design ensures a consistent and powerful rotational force, aiding in the efficient breakdown of blood clots. The precision-engineered drug delivery system enhances the efficacy of thrombolytic agents, ensuring targeted treatment and minimizing systemic exposure."
          ]
        }
      },

      // بخش چهارم: جدول مشخصات فنی (Technical Specifications)
      dolphinTable: {
        title: {
          fa: "جدول مشخصات فنی کاتتر Mantis CURVE® (Technical Specifications)",
          en: "Mantis CURVE® Technical Specifications Matrix"
        },
        columns: {
          fa: ["مشخصه فنی (Parameter)", "مدل 6F", "مدل 7F", "مدل 8F"],
          en: ["Specification Parameter", "6F Model", "7F Model", "8F Model"]
        },
        rows: [
          { param: { fa: "قطر خارجی کاتتر (Catheter Diameter)", en: "Catheter Diameter" }, c4: "6F", c5: "7F", c6: "8F" },
          { param: { fa: "طول‌های کاتتر (Catheter Length)", en: "Catheter Length" }, c4: "90 cm, 135 cm", c5: "90 cm, 135 cm", c6: "90 cm, 135 cm" },
          { param: { fa: "سیم راهنمای سازگار (Compatible Guidewire)", en: "Compatible Guidewire" }, c4: "0.035\"", c5: "0.035\"", c6: "0.035\"" },
          { param: { fa: "ساختار کاتتر (Catheter Structure)", en: "Catheter Structure" }, c4: "2 Power Cell Design", c5: "2 Power Cell Design", c6: "2 Power Cell Design" },
          { param: { fa: "جنس بدنه کاتتر (Catheter Material)", en: "Catheter Material" }, c4: "PEBAX", c5: "PEBAX", c6: "PEBAX" },
          { param: { fa: "سرعت چرخش دورانی (RPM)", en: "Rotational Speed (RPM)" }, c4: "Adjustable (0 - 5000)", c5: "Adjustable (0 - 5000)", c6: "Adjustable (0 - 5000)" }
        ]
      }
    },
    // محصول دهم اینوامد: Mantis LEAF Leaf Tip Rotational Thrombectomy & Ultra Aspiration
    {
      id: "invamed-mantis-leaf",
      badge: "Vascular / VENOUS",
      title: {
        fa: "Mantis LEAF®",
        en: "Mantis LEAF®"
      },
      tagline: {
        fa: "تیپ برگی چرخان منحصربه‌فرد با درگیرسازی و خردسازی برتر لخته — دقت در اجرا، قدرت در عمل",
        en: "Unique Rotating Leaf Tip Provides Superior Clot Engagement & Breakdown — Exactness in Execution, Potency in Practice"
      },
      image: "assets/images/invamed-mantis-leaf.png",

      // بخش اول: معرفی و قابلیت‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های ترومبکتومی Mantis LEAF®",
          en: "Mantis LEAF® Performance Highlights & Capabilities"
        },
        points: {
          fa: [
            "جهش کوانتومی در فناوری ترومبکتومی: معرفی طراحی پیشگامانه نوک برگی دوار (Rotating Leaf Tip) تلفیق‌شده با توانمندی‌های پیشرفته فارماکومکانیکال.",
            "دقت، راندمان و ایمنی بی‌رقیب: مهندسی‌شده در بالاترین سطح جهت پاکسازی ایمن و کارآمد لخته‌های خونی از بستر وریدی.",
            "درگیرسازی و خردسازی برتر لخته (Superior Clot Engagement & Breakdown): تیپ برگی چرخان همراه با قابلیت‌های فارماکومکانیکال دقیق، Mantis LEAF را به گزینه‌ای پیشرو در حذف لخته تبدیل کرده است.",
            "ناوبری آسان در ساختارهای پیچیده عروقی: کاتتر منعطف و پاسخگو دسترسی حتی به چالش‌برانگیزترین لخته‌ها را تضمین می‌کند.",
            "کنترل دورانی با دقت بالا: امکان انطباق سرعت و رفتار دستگاه با قوام و محل‌های گوناگون لخته جهت ارائه درمانی کاملاً شخصی‌سازی‌شده.",
            "کاربری آسان با یک دست (Easy One Handed Operation): ارگونومی بی‌نظیر برای کنترل راحت توسط پزشک در طول پروسه.",
            "پورت همزمان تزریق و آسپراسیون (Infusion and Aspiration Port): امکان تحویل داروی لیتیک و مکش دبری‌ها از طریق یک کانال مجزا.",
            "کاتتر بافته‌شده انعطاف‌پذیر ۷ فرنچ (Flawless Flexible Braided 7F Catheter): حفظ پایداری لومن و ردگیری روان در مسیرهای پرپیچ‌وخم.",
            "تیپ برگی با پوشش PTFE (Leaf Tip with PTFE Coating): روکش تفلون جهت کاهش اصطکاک با بافت و تضمین گردش روان و آتروماتیک نوک کاتتر.",
            "پروتکل‌های مانیتورینگ و ایمنی یکپارچه: پایش پیوسته رفتار دستگاه و حفظ کامل ایمنی بیمار در تمام طول عمل ترومبکتومی."
          ],
          en: [
            "Quantum Leap in Thrombectomy: Revolutionary rotating leaf tip design paired with advanced pharmacomechanical capabilities.",
            "Unparalleled Precision, Efficiency & Safety: Engineered to set new standards in the removal of blood clots.",
            "Superior Clot Engagement & Breakdown: Rotating leaf tip ensures optimal contact, engagement, and disintegration of thrombus.",
            "Effortless Navigation: Flexible and responsive catheter design ensures even the most challenging clots are accessible.",
            "Precision Rotational Control: Allows practitioners to adapt the device to various clot consistencies and anatomical locations.",
            "Easy One Handed Operation: Ergonomic single-hand handling for optimal procedural convenience.",
            "Integrated Infusion and Aspiration Port: Dedicated ports for simultaneous lytic infusion and continuous aspiration.",
            "Flawless Flexible Braided 7F Catheter: Braided catheter body delivers superior torque control and trackability.",
            "Leaf Tip with PTFE Coating: PTFE coating minimizes tissue friction and ensures smooth, atraumatic rotation.",
            "Integrated Safety Protocols: Continuously monitors device performance and ensures patient safety throughout the procedure."
          ]
        }
      },

      // بخش دوم: مشخصات ۶‌گانه تشریحی صفحه دوم کاتالوگ
      structuralDetails: {
        title: {
          fa: "مشخصات فنی و نوآوری‌های طراحی کاتتر Mantis LEAF®",
          en: "Mantis LEAF® Core Engineering & Design Features"
        },
        items: [
          {
            title: { fa: "نوع دستگاه (Device Type)", en: "Device Type" },
            desc: {
              fa: "سامانه پیشرفته ترومبکتومی فارماکومکانیکال مجهز به نوک برگی دوار (Rotating Leaf Tip).",
              en: "Cutting-edge pharmacomechanical thrombectomy system with a rotating leaf tip."
            }
          },
          {
            title: { fa: "مکانیسم عملکرد (Mechanism of Action)", en: "Mechanism of Action" },
            desc: {
              fa: "به‌کارگیری چرخش مکانیکی و هندسه ویژه نوک برگی جهت درگیر کردن و خردسازی موثر لخته همگام با تزریق داروی ترومبولیتیک در موضع.",
              en: "Utilizes mechanical rotation and specialized leaf tip geometry to effectively engage and break down blood clots with directed pharmacological delivery."
            }
          },
          {
            title: { fa: "سیستم تزریق دارو (Drug Delivery)", en: "Drug Delivery" },
            desc: {
              fa: "هدایت مستقیم داروی ترومبولیتیک به کانون ترومبوز؛ بهینه‌سازی اثربخشی درمانی دارو و به حداقل رساندن مواجهه سیستمیک کل بدن.",
              en: "Directs thrombolytic agents precisely to the clot site, optimizing drug efficacy and minimizing systemic exposure."
            }
          },
          {
            title: { fa: "طراحی کاتتر (Catheter Design)", en: "Catheter Design" },
            desc: {
              fa: "کاتتر منعطف و پاسخگو که امکان ناوبری آسان در مسیرهای عروقی پیچیده و با پیچ‌وخم شدید را تضمین می‌نماید.",
              en: "Flexible and responsive catheter ensures easy navigation through intricate and tortuous vascular pathways."
            }
          },
          {
            title: { fa: "کنترل دورانی دقیق (Rotational Control)", en: "Rotational Control" },
            desc: {
              fa: "کنترل چرخشی دقیق جهت انطباق و ظرافت بالا حین پروسه و پاسخگویی به درجات مختلف سختی و حجم لخته.",
              en: "Precise rotational control allows for adaptability and finesse during procedures, catering to various clot consistencies."
            }
          },
          {
            title: { fa: "ویژگی‌های ایمنی (Safety Features)", en: "Safety Features" },
            desc: {
              fa: "پروتکل‌های ایمنی یکپارچه جهت پایش مداوم عملکرد موتور و کاتتر و تضمین محافظت کامل از دیواره رگ.",
              en: "Integrated safety protocols monitor device performance, ensuring patient safety throughout the thrombectomy process."
            }
          }
        ]
      },

      // بخش سوم: شواهد و گزارش‌های کارآزمایی‌های بالینی (صفحه ۲ کاتالوگ)
      clinicalStudies: {
        title: {
          fa: "شواهد بالینی و اثربخشی اثبات‌شده (Clinically Proven Success Rate: 97.6%)",
          en: "Clinical Evidence & Proven Success Rate (Up to 97.6%)"
        },
        headline: {
          fa: "میزان موفقیت بالینی اثبات‌شده تا ۹۷.۶٪ (Clinically Proven Success Rate of up to 97.6%) در درمان ترومبوز ورید عمقی ایلیاک و فمورال (IFDVT).",
          en: "Clinically proven success rate of up to 97.6% in the treatment of acute iliofemoral deep vein thrombosis."
        },
        reports: [
          {
            source: "TJVS (Turkish Journal of Vascular Surgery)",
            title: {
              fa: "نتایج اولیه سامانه ترومبکتومی فارماکومکانیکال Mantis همراه با کاتتر ترومبولیز در DVT حاد ایلیوفمورال",
              en: "Early outcomes of mantis PMT system combined with CDT for acute iliofemoral DVT"
            },
            result: {
              fa: "بررسی ۱۶ مطالعه گذشته‌نگر توسط Karthikesalingam و همکاران روی ۴۸۱ بیمار نشان داد نرخ موفقیت پروسیجر بین ۸۲٪ تا ۱۰۰٪ بدون عوارض ماژور بوده است. همچنین در مطالعه Köksoy و همکاران موفقیت تکنیکی ۹۷.۶٪ گزارش شد. در مطالعه Kuetting و همکاران پتنسی اولیه یکساله پس از PMT برابر با ۹۴٪ بود و در مطالعه حاضر موفقیت در ۱۰۰٪ بیماران حاصل گردید.",
              en: "Karthikesalingam et al. reported success rate of 82-100% across 16 studies (481 cases) without major complications. Köksoy et al. reported 97.6% technical success. Kuetting et al. revealed 1-year primary patency of 94% after PMT. In present study, procedural success was achieved in all patients."
            }
          },
          {
            source: "Medicine Journal",
            title: {
              fa: "تاثیرات ترومبکتومی فارماکومکانیکال بر پارامترهای آزمایشگاهی خونی در DVT (مطالعه گذشته‌نگر)",
              en: "The effects of pharmacomechanical thrombectomy on novel complete blood count parameters in DVT"
            },
            result: {
              fa: "هدف اولیه این پروسیجر کاهش بار لخته و ایجاد تخلیه وریدی مناسب همراه با بازگشایی رگ (Recanalization) است. این روش مانع از بروز آمبولی ریه (PE) و سندرم پس از ترومبوز (PTS) می‌شود. مزیت بزرگ PMT این است که با افزودن عامل لیتیک، حجم لخته بین ۲۶٪ تا ۸۶٪ حذف و تخلیه می‌گردد.",
              en: "Primary goal is reducing thrombus load and providing venous drainage with recanalization, preventing PE and post-thrombotic syndrome. PMT advantage is that thrombus is cleared from 26% to 86% with the addition of a lytic agent."
            }
          }
        ]
      },

      // بخش چهارم: جدول مشخصات فنی کامل (Technical Specifications)
      techSpecs: [
        { label: { fa: "قطر خارجی کاتتر (Catheter Diameter)", en: "Catheter Diameter" }, value: "7F" },
        { label: { fa: "طول‌های کاتتر (Catheter Length)", en: "Catheter Length" }, value: "90 cm, 135 cm" },
        { label: { fa: "طراحی نوک (Tip Design)", en: "Tip Design" }, value: { fa: "نوک برگی با روکش PTFE (Leaf Tip with PTFE Coating)", en: "Leaf Tip with PTFE Coating" } },
        { label: { fa: "ناحیه فعال قابل تنظیم (Active Zone)", en: "Active Zone" }, value: "Adjustable 5 mm - 60 mm" },
        { label: { fa: "جنس بدنه کاتتر (Catheter Material)", en: "Catheter Material" }, value: "PEBAX" },
        { label: { fa: "سرعت دورانی موتور (RPM)", en: "Rotational Speed (RPM)" }, value: "5.000 rpm" }
      ]
    },
    // محصول یازدهم اینوامد: Mantis XP Directional Pharmacomechanical Thrombectomy System
    {
      id: "invamed-mantis-xp",
      badge: "Vascular / VENOUS",
      title: {
        fa: "Mantis XP®",
        en: "Mantis XP®"
      },
      tagline: {
        fa: "تلفیق پیشرفته ترومبکتومی چرخشی و جهت‌دار — جاروب ۳۶۰ درجه عروق و خروج بیشترین حجم لخته در کمترین زمان",
        en: "Directional Pharmacomechanical Thrombectomy — Helical 360° Sweeps for Maximum Single-Session Success"
      },
      image: "assets/images/invamed-mantis-xp.png",

      // بخش اول: معرفی و قابلیت‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی سامانه Mantis XP®",
          en: "Mantis XP® Key Highlights & Clinical Performance"
        },
        points: {
          fa: [
            "تلفیق نوآورانه ترومبکتومی چرخشی و جهت‌دار (Rotational & Directional): ارائه راه‌حلی جامع و پیشرفته جهت خردسازی و پاکسازی سریع و مؤثر لخته‌های خون.",
            "سازگاری گسترده دارویی: سازگار با انواع داروهای ترومبولیتیک جهت شخصی‌سازی درمان متناسب با شرایط بالینی هر بیمار.",
            "ناوبری آسان در مسیرهای دشوار: طراحی کاتتر عبور روان از پیچ‌وخم‌های عروقی و دسترسی به لخته‌ها در موقعیت‌های آناتومیک چالش‌برانگیز را تسهیل می‌کند.",
            "دقت، قدرت و پیشرفت مداوم: ترکیب منحصربه‌فرد اثر مکانیکی و دارویی، کنترل با دقت بالا و طراحی پیشرو، Mantis XP را به انتخابی مطمئن در ترومبکتومی تبدیل کرده است.",
            "مکانیسم عملکرد دوگانه: ترکیب ارتعاشات مکانیکی با تزریق مستقیم و هدفمند داروی ترومبولیتیک جهت شکستن مؤثر ساختار لخته و تخلیه آن.",
            "کنترل جهت‌دار مهندسی‌شده (Directional Control): متمرکز ساختن درمان بر کانون لخته و به حداقل رساندن آسیب احتمالی به بافت‌های سالم اطراف دیواره رگ.",
            "ایمنی پایدار و عملکرد پرقدرت: ایجاد مسیری ایمن جهت برقراری مجدد جریان خون و بهبود کیفیت زندگی بیماران."
          ],
          en: [
            "Advanced Rotational & Directional Pharmacomechanical System: Redefines what is possible in blood clot removal with superior engineering.",
            "Broad Drug Compatibility: Compatible with a variety of thrombolytic agents, tailoring treatment to unique patient needs.",
            "Effortless Navigation: Innovative catheter design facilitates smooth tracking to reach clots in challenging anatomical locations.",
            "Precision, Power & Progress: Unique combination of mechanical and pharmacological action provides unrivaled thrombectomy capabilities.",
            "Mechanism of Action: Combines mechanical vibration with directed pharmacological agent delivery to efficiently break down and remove clots.",
            "Directional Control: Precision-engineered for optimal directional control, ensuring targeted treatment and minimizing tissue trauma.",
            "Safe and Powerful Performance: A trusted endovascular solution that clears vascular paths and improves clinical outcomes."
          ]
        }
      },

      // بخش دوم: فهرست کامل عروق دارای اندیکاسیون مصرف رسمی (صفحه ۱ کاتالوگ)
      indicatedVessels: {
        title: {
          fa: "عروق هدف و اندیکاسیون‌های بالینی مصرف (Indicated Vessels)",
          en: "Target Vessels & Clinical Indications"
        },
        items: [
          { name: { fa: "وریدهای محیطی (Peripheral Veins)", en: "Peripheral Veins" }, desc: { fa: "درمان انواع ترومبوزهای وریدی محیطی اندام‌ها.", en: "Treatment of peripheral venous thrombosis." } },
          { name: { fa: "شریان ریوی (Pulmonary Artery)", en: "Pulmonary Artery" }, desc: { fa: "مداخلات اورژانسی خردسازی لخته در آمبولی حاد ریه (PE).", en: "Targeted clot dissolution in pulmonary embolism." } },
          { name: { fa: "ورید اجوف تحتانی (Inferior Vena Cava - IVC)", en: "Inferior Vena Cava (IVC)" }, desc: { fa: "پاکسازی ترومبوزهای ماژور و وسیع در ورید اجوف تحتانی.", en: "Clearance of extensive caval thrombus burdens." } },
          { name: { fa: "ورید ساب‌کلاوین (Subclavian Vein)", en: "Subclavian Vein" }, desc: { fa: "درمان ترومبوز وریدهای اندام فوقانی و سندرم توراسیک اوتلت.", en: "Upper extremity deep venous thrombosis clearance." } },
          { name: { fa: "ورید کبدی (Hepatic Vein)", en: "Hepatic Vein" }, desc: { fa: "بازگشایی و تخلیه لخته در عروق وریدی سیستم کبدی.", en: "Recanalization of hepatic venous circulation." } },
          { name: { fa: "فیستول‌های دیالیز شریانی-وریدی (AV Fistulas)", en: "AV Fistulas / Grafts" }, desc: { fa: "نجات و پاکسازی سریع ترومبوز در فیستول‌ها و اکسس‌های دیالیز.", en: "Rapid salvage and declotting of hemodialysis vascular access." } }
        ]
      },

      // بخش سوم: ویژگی‌های هندسی و ارکان بالینی دستگاه (صفحه ۲ کاتالوگ)
      structuralDetails: {
        title: {
          fa: "نوآوری هندسه هلیکال و ویژگی‌های بالینی Mantis XP®",
          en: "Helical Geometry & Clinical Differentiators"
        },
        items: [
          {
            title: { fa: "نوک هلیکال سه‌بعدی (Unique Helical Shape)", en: "Unique Helical Shape" },
            desc: {
              fa: "فرم هلیکال منحصربه‌فرد، نوک کاتتر را از مسیر خطی و مستقیم سنتی وایر خارج کرده و گسترش می‌دهد تا سخت‌ترین و مقاوم‌ترین ترومبوزها را حذف کند.",
              en: "Expands the distal tip beyond the traditional straight wire trajectory to eliminate tougher and organized thrombi."
            }
          },
          {
            title: { fa: "جاروب کامل ۳۶۰ درجه عروقی (360° Vessel Sweeps)", en: "360° Vessel Sweeps" },
            desc: {
              fa: "امکان گردش و پوشش کامل ۳۶۰ درجه درون لومن رگ جهت درگیر ساختن تمامی جوانب لخته چسبیده به جدار عروق.",
              en: "Allows for 360-degree sweeps within the vessel to actively attack and clear circumferential thrombus."
            }
          },
          {
            title: { fa: "موفقیت حداکثری در تک‌جلسه (Single-Session Success)", en: "Single-Session Success" },
            desc: {
              fa: "ایجاد پوشش عروقی وسیع‌تر و تخلیه حجم چشمگیر بار لخته در یک نشست درمانی بدون نیاز به مداخلات تکراری.",
              en: "Provides enhanced vascular coverage and superior elimination of thrombus burden in a single session."
            }
          },
          {
            title: { fa: "کنترل کامل تک‌دستی توسط پزشک (Single-Handed Control)", en: "Single-Handed Physician-Controlled Device" },
            desc: {
              fa: "دستگاهی با ارگونومی عالی که امکان خروج بیشترین حجم لخته در کوتاه‌ترین زمان را با هدایت آسان یک دست فراهم می‌سازد.",
              en: "A single-handed physician-controlled device designed to get more clot out in significantly less procedural time."
            }
          },
          {
            title: { fa: "سازگاری دارویی پیشرفته (Drug Compatibility)", en: "Advanced Drug Compatibility" },
            desc: {
              fa: "سازگار با انواع عوامل لیتیک، امکان انتخاب رژیم درمانی اختصاصی بر اساس دوز و شرایط بالینی بیمار.",
              en: "Compatible with various thrombolytic agents, allowing for tailored dosing based on individual needs."
            }
          },
          {
            title: { fa: "طراحی کاتتر و کنترل زاویه (Catheter & Directional Control)", en: "Catheter & Directional Control" },
            desc: {
              fa: "طراحی کاتتر نوآورانه جهت عبور روان از عروق و کنترل زاویه‌دار و دقیق جهت تمرکز درمان و کاهش تروما به بافت سالم.",
              en: "Ensures easy navigation while precision-engineered directional control minimizes impact on surrounding healthy tissues."
            }
          }
        ]
      },

      // بخش چهارم: متن تشریحی مقدماتی و نوآوری کاتالوگ (صفحه ۲)
      performanceNarrative: {
        title: {
          fa: "شرح نوآوری مهندسی سامانه Mantis XP (متن کامل کاتالوگ)",
          en: "Mantis XP Engineering Innovation Narrative"
        },
        paragraphs: {
          fa: [
            "معرفی سامانه ترومبکتومی Mantis XP: نقطه اوج نوآوری در عرصه حذف و پاکسازی لخته‌های خونی. این سامانه پیشرفته به‌گونه‌ای هوشمندانه ترومبکتومی چرخشی و جهت‌دار فارماکومکانیکال را ترکیب کرده و راه‌حلی جامع برای خردسازی و حذف مؤثر لخته‌های خون ارائه می‌دهد.",
            "سامانه ترومبکتومی Mantis به‌گونه‌ای دقیق مهندسی شده است تا درمانی متمرکز و با دقت بالا را رقم بزند و کمترین اثر سوء را بر بافت‌های اطراف به جای بگذارد. کنترل جهت‌دار سیستم دقت هر پروسه را دوچندان کرده و تضمین می‌کند که ترومبوزها با نهایت کارایی مدیریت شوند."
          ],
          en: [
            "Introducing the Mantis Thrombectomy System: a pinnacle of innovation in the realm of blood clot removal. This advanced system ingeniously combines rotational and directional pharmacomechanical thrombectomy, offering a comprehensive solution for the effective breakdown and removal of blood clots.",
            "Mantis Thrombectomy System is meticulously designed to ensure precise and targeted treatment, minimizing the impact on surrounding tissues. The system's precision-engineered directional control enhances the accuracy of each procedure, ensuring that clots are efficiently addressed."
          ]
        }
      },

      // بخش پنجم: جدول مشخصات فنی کامل (Technical Specifications)
      techSpecs: [
        { label: { fa: "طراحی ساختار کاتتر (Catheter Design)", en: "Catheter Design" }, value: { fa: "ساختار میکروپور (Micropore Structure)", en: "Micropore Structure" } },
        { label: { fa: "ناحیه تزریق ترومبولیتیک (Infusion Zone)", en: "Infusion Zone" }, value: { fa: "۱۰ سانتی‌متر از نوک دیستال", en: "10 cm from distal tip" } },
        { label: { fa: "طول‌های کاتتر (Catheter Length)", en: "Catheter Length" }, value: "30 cm, 45 cm, 90 cm, 110 cm, 135 cm" },
        { label: { fa: "پروفایل‌های کاتتر (Catheter Profile)", en: "Catheter Profile" }, value: "4.0F, 5.0F, 6.0F, 7.0F" },
        { label: { fa: "دید فلوروسکوپی (Radiopacity)", en: "Radiopacity" }, value: { fa: "کاتتر بافته‌شده از نوک دیستال تا شفت پروگزیمال کاملاً قابل رویت است", en: "Braided Catheter is visible from the distal tip to proximal shaft" } },
        { label: { fa: "ساختار متریال کاتتر (Structure of the Catheter)", en: "Structure of the Catheter" }, value: { fa: "فرم نایتینول با روکش PEBAX", en: "Nitinol shape PEBAX" } }
      ]
    },
    // محصول دوازدهم اینوامد: TemREN Peripheral Rotational Atherectomy System
    {
      id: "invamed-temren-atherectomy",
      badge: "Vascular / ARTERIAL",
      title: {
        fa: "TemREN®",
        en: "TemREN®"
      },
      tagline: {
        fa: "تحول در درمان عروقی با دقت و کنترل هوشمند — تراش و خردسازی ایمن پلاک‌های کلسیفیه همراه با آسپراسیون قدرتمند",
        en: "Revolutionizing Vascular Treatment: TemREN Atherectomy for Precision, Control & Smart AI Operation"
      },
      image: "assets/images/invamed-temren.png",

      // بخش اول: معرفی و ویژگی‌های نوآورانه صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های هوشمند سامانه آترکتومی TemREN®",
          en: "TemREN® Key Features & Smart System Highlights"
        },
        points: {
          fa: [
            "دستگاه آترکتومی چرخشی پیشرفته (Rotational Atherectomy Device): تحول در درمان اندوواسکولار با ایجاد بالاترین سطح دقت، کارایی و کنترل موضعی.",
            "سرعت چرخش دورانی قابل تنظیم (Adjustable Speed): قابلیت تنظیم دقیق سرعت گردش تیغه‌ها از ۵۰۰ تا ۸,۰۰۰ دور در دقیقه جهت درمان سفارشی متناسب با ضایعه.",
            "سازگاری با سونوگرافی داخل عروقی (IVUS Compatibility): هماهنگی کامل با پروب‌های IVUS جهت ارزیابی ابعادی دقیق و مشاهده لحظه‌ای ساختار عروقی.",
            "اتصال بی‌سیم بلوتوث (Bluetooth Connectivity): مجهز به ریموت کنترل از راه دور از طریق اپلیکیشن‌های اختصاصی در سیستم‌عامل‌های Android و iOS.",
            "هوش مصنوعی تعبیه‌شده (Artificial Intelligence): مجهز به سیستم AI داخلی جهت عملیات داده‌محور و هوشمند که دقت و اطمینان پروسه را دوچندان می‌کند.",
            "تیغه‌های برشی مخرب پلاک (Cutter Blades): عملکرد سایشی و تخریبی بسیار مؤثر در ضایعات به شدت کلسیفیه بدون ایجاد آسیب به دیواره سالم رگ.",
            "شفت محرک اختصاصی (Drive Shaft): مهندسی‌شده با ساختار هلیکال استنلس استیل جهت انتقال حداکثری و یکنواخت توان و گشتاور موتور.",
            "پورت و قابلیت آسپراسیون قدرتمند (High-Powered Aspiration): تخلیه و خروج فوری و مؤثر دبری‌ها و ذرات خردشده پلاک جهت جلوگیری از آمبولی دیستال.",
            "سازگاری گسترده با گایدوایر: قابل استفاده و هدایت بر روی هر دو سایز استاندارد گایدوایر 0.014 اینچ و 0.035 اینچ.",
            "نتایج بالینی برتر و حداقل ترومای اندوتلیال: دستیابی به حداکثر اتساع لومن رگ همزمان با به حداقل رساندن تروما و پارگی لایه داخلی عروق."
          ],
          en: [
            "Rotational Atherectomy Device: Revolutionizing vascular treatment with unmatched precision, efficacy, and operator control.",
            "Adjustable Rotational Speed: Customizable speed settings from 500 up to 8,000 RPM tailored to lesion calcification severity.",
            "IVUS Compatibility: Fully compatible with Intravascular Ultrasound for enhanced pre- and post-procedural visualization.",
            "Smart Bluetooth Control: Integrated Bluetooth connectivity allowing remote control via Android and iOS devices.",
            "Embedded Artificial Intelligence: Smart, data-driven AI operation enhancing procedural accuracy, safety, and reliability.",
            "Destructive Cutter Blades: Proven destructive performance in heavily calcified lesions without damaging vessel wall architecture.",
            "Stainless Steel Drive Shaft: Designed with helical engineering to effectively transmit rotational power and torque.",
            "High-Powered Aspiration Port: Enables quick, continuous aspiration for efficient debris evacuation and distal protection.",
            "Dual Guidewire Compatibility: Fully operable with both 0.014\" and 0.035\" standard guide wires.",
            "Better Clinical Outcomes: Maximizes true lumen gain while minimizing endothelial trauma and vessel dissection risks."
          ]
        }
      },

      // بخش دوم: آنالیز دقیق تصویربرداری و کاهش کلسیم با IVUS (صفحه ۲ کاتالوگ)
      clinicalBenefits: {
        title: {
          fa: "متدولوژی آنالیز کاهش کلسیم و افزایش لومن با IVUS (IVUS Calcium Reduction Analysis)",
          en: "IVUS Methodology of Calcium Reduction & Lumen Gain Analysis"
        },
        items: [
          {
            title: { fa: "ارزیابی تصویر قبل از درمان (تصویر A)", en: "Pre-Treatment IVUS (Image A)" },
            desc: {
              fa: "سونوگرافی داخل عروقی پایه (Baseline IVUS) که تنگی شدید لومن و ضخامت رسوبات کلسیمی قوس‌دار را پیش از شروع آترکتومی نشان می‌دهد.",
              en: "Pre-treatment IVUS displaying severe circumferential calcified plaque and significant luminal restriction."
            }
          },
          {
            title: { fa: "ارزیابی تصویر پس از آترکتومی (تصویر B)", en: "Post-Atherectomy IVUS (Image B)" },
            desc: {
              fa: "تصویربرداری مقطعی مربوطه پس از اتمام مداخله آترکتومی که تراشیده شدن کامل پلاک کلسیفیه و بازگشایی گسترده مجرا را نشان می‌دهد.",
              en: "Corresponding post-atherectomy IVUS demonstrating successful plaque debulking and substantial lumen enlargement."
            }
          },
          {
            title: { fa: "توالی آنالیز و هم‌پوشانی مقاطع (تصویر C)", en: "Analysis Sequence & Contouring (Image C)" },
            desc: {
              fa: "انطباق و تعیین مرز لومن قبل از درمان (حلقه آبی: مساحت لومن ۵.۰ میلی‌متر مربع) و پس از آترکتومی (حلقه سبز: مساحت لومن ۱۹.۵ میلی‌متر مربع)؛ محاسبه خودکار افزایش لومن معادل ۱۴.۵ میلی‌متر مربع (Lumen Gain: 14.5 mm²).",
              en: "Matching slices contoured pre-treatment (blue circle: 5.0 mm²) and post-atherectomy (green circle: 19.5 mm²), automatically establishing a true lumen gain of 14.5 mm²."
            }
          }
        ]
      },

      // بخش سوم: گزارش شواهد بالینی ژورنال SAGE و مزایای ست دستگاه (صفحه ۲ کاتالوگ)
      clinicalStudies: {
        title: {
          fa: "شواهد بالینی ژورنال‌های SAGE و اثربخشی درمانی (Clinically Proven Success: 90%)",
          en: "SAGE Journals Clinical Outcomes & Practical Procedural Advantages"
        },
        headline: {
          fa: "میزان موفقیت بالینی اثبات‌شده تا ۹۰٪ (Success Rate of up to 90%) در درمان ضایعات فموروپوپلیتئال اندام تحتانی همراه با بالن دارویی (DCB).",
          en: "Clinically proven success rate of up to 90% in femoropopliteal lesions treated with TemREN RA combined with DCB."
        },
        reports: [
          {
            source: "SAGE Journals Clinical Report",
            title: {
              fa: "نتایج زودهنگام دستگاه آترکتومی نوین Temren همراه با آنژیوپلاستی بالن دارویی در ضایعات فموروپوپلیتئال",
              en: "Early outcomes of novel Temren atherectomy device combined with drug-coated balloon angioplasty for femoropopliteal lesions"
            },
            result: {
              fa: "برآورد کاپلان-مایر نرخ عدم نیاز به ریواسکولاریزاسیون مجدد ضایعه هدف (Freedom from TLR) را ۹۲.۳٪ تخمین زد. استفاده ترکیبی از آترکتومی چرخشی Temren با درمان کمکی بالن دارویی، روشی ایمن و کارآمد با پتنسی اولیه بالا، عدم نیاز به TLR و نرخ عوارض بسیار پایین است.",
              en: "Kaplan-Meier analysis estimated freedom from target lesion revascularization (TLR) at 92.3%. Combined use of Temren RA with DCB is safe and effective with high primary patency and low complications."
            }
          },
          {
            source: "Practical Application Features",
            title: {
              fa: "مزایای کاربردی در ست آماده‌مصرف و ایمنی جراح",
              en: "Ready-to-Use Set Content & Operator Safety"
            },
            result: {
              fa: "محتویات ست آماده به مصرف، گزینه‌ای کاربردی و سریع را فراهم می‌سازد. هیچ‌گونه تجهیزات نصب و راه‌اندازی اضافی قبل از پروسه مورد نیاز نیست. سرعت چرخش به‌راحتی قابل تنظیم بوده و فضای ایمنی را برای جراح و بیمار تضمین می‌کند.",
              en: "Ready-to-use set content provides practical application with no extra setup equipment required. Rotation speed is easily adjustable, creating a safe operational environment."
            }
          }
        ]
      },

      // بخش چهارم: جدول مشخصات فنی کامل (Technical Specifications Table)
      techSpecs: [
        { label: { fa: "قطر کاتتر (Catheter Diameter)", en: "Catheter Diameter" }, value: "5F, 6F, 7F" },
        { label: { fa: "طول‌های کاتتر (Catheter Length)", en: "Catheter Length" }, value: "90 cm, 135 cm, 150 cm" },
        { label: { fa: "جنس بدنه کاتتر (Catheter Material)", en: "Catheter Material" }, value: "PEBAX" },
        { label: { fa: "طراحی نوک برش (Tip Design)", en: "Tip Design" }, value: { fa: "۵ الی ۶ تیغه برشی (5-6 Blades)", en: "5-6 Blades" } },
        { label: { fa: "پروفایل کراسینگ (Crossing Profile)", en: "Crossing Profile" }, value: "1.9 mm, 2.4 mm" },
        { label: { fa: "شفت انتقال نیرو (Drive Shaft)", en: "Drive Shaft" }, value: { fa: "طراحی هلیکال استنلس استیل (Stainless Steel Helical Design)", en: "Stainless Steel Helical Design" } },
        { label: { fa: "ابعاد پنجره آسپراسیون (Aspiration Window)", en: "Aspiration Window" }, value: "2 x 1.5 mm" },
        { label: { fa: "سرعت چرخش دورانی (Rotation)", en: "Rotation Speed" }, value: "500 - 8.000 RPM (Adjustable)" },
        { label: { fa: "سازگاری با گایدوایر (Guidewire Compatibility)", en: "Guidewire Compatibility" }, value: "0.014\" - 0.035\"" },
        { label: { fa: "سازگاری با شیت اینترودیوسر", en: "Introducer Sheath Compatibility" }, value: "5F, 6F, 7F" },
        { label: { fa: "سازگاری با کاتتر ساپورت", en: "Support Catheter Compatibility" }, value: "8F" }
      ]
    },
    // محصول سیزدهم اینوامد: Vein OFF Varicose Vein Treatment Agent
    {
      id: "invamed-vein-off",
      badge: "VARICOSE EMBOLIC AGENT",
      title: {
        fa: "Vein OFF®",
        en: "Vein OFF®"
      },
      tagline: {
        fa: "تحول در درمان وریدها و بازگشت شادابی پوست — انسداد غیرحرارتی (Non-Thermal) با سیانوآکریلات اصلاح‌شده",
        en: "Transform Your Veins, Transform Your Life — Non-Thermal Embolization Agent for Varicose & Spider Veins"
      },
      image: "assets/images/invamed-vein-off.png",

      // بخش اول: معرفی و ویژگی‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی Vein OFF®",
          en: "Vein OFF® Performance Highlights & Capabilities"
        },
        points: {
          fa: [
            "فرمولاسیون ایمن با سیانوآکریلات اصلاح‌شده (Modified Cyanoacrylate): فرمول تست‌شده از نظر درماتولوژی جهت اطمینان از سازگاری کامل با انواع پوست و گسترش دامنه بیماران تحت درمان.",
            "تنوع در سایز و حجم بسته‌بندی: ارائه در حجم‌های گوناگون جهت ایجاد انعطاف‌پذیری و امکان برنامه‌ریزی اختصاصی متناسب با طول و وسعت ورید هدف.",
            "پیشگام در درمان موضعی و درون‌رگی وریدهای واریسی و عنکبوتی: تلفیقی از دانش نوین پزشکی و مواد مؤثر جهت ارائه راهکاری دگرگون‌کننده در سلامت عروق.",
            "کاربرد آسان و جذب سریع: قرارگیری در خط مقدم درمان‌های کم‌تهاجمی وریدهای واریسی و اسپایدر با نتایج اثبات‌شده بالینی.",
            "روش انسداد غیرحرارتی (Non-Thermal): عدم نیاز به اعمال انرژی حرارتی و حذف خطرات سوختگی پوست یا آسیب به اعصاب حسی مجاور رگ.",
            "بازگشت شادابی و سلامت به عروق: تسکین فوری علائم سنگینی و درد پا همراه با ارتقای زیبایی ظاهری اندام."
          ],
          en: [
            "Dermatologically Tested Modified Cyanoacrylate: Ensures suitability for a wide range of skin types, broadening applicability and patient safety.",
            "Flexible Sizing Options: Available in various sizes offering flexibility and customization in treatment planning.",
            "Leader in Varicose & Spider Vein Care: Blends science and advanced polymer technology to offer a revolutionary endovascular and topical solution.",
            "Easy Application & Quick Absorption: Places Vein OFF at the forefront of non-invasive varicose and spider vein therapies with proven outcomes.",
            "Non-Thermal Closure Mechanism: Eliminates thermal tumescent anesthesia and protects adjacent nerve branches from heat damage.",
            "Restores Vein Vitality: Alleviates clinical symptoms while significantly improving aesthetic and cosmetic results."
          ]
        }
      },

      // بخش دوم: مشخصات تفکیکی ۶‌گانه کاتالوگ (صفحه ۲)
      structuralDetails: {
        title: {
          fa: "مشخصات ۶‌گانه ساختاری و عملکردی کاتالوگ Vein OFF®",
          en: "Vein OFF® Core Specifications & Action Profile"
        },
        items: [
          {
            title: { fa: "نوع محصول (Product Type)", en: "Product Type" },
            desc: {
              fa: "ماده موضعی و انسدادی اختصاصی طراحی‌شده جهت درمان وریدهای واریسی و رگ‌های عنکبوتی (Spider Veins).",
              en: "Topical and endovascular agent designed for the treatment of varicose veins and spider veins."
            }
          },
          {
            title: { fa: "ترکیبات ساختاری (Ingredients)", en: "Ingredients" },
            desc: {
              fa: "فرمولاسیون با کاربرد آسان که با عملکرد بهینه در لومن رگ به محو شدن سریع عروق واریسی و عنکبوتی کمک می‌کند.",
              en: "Easy-to-apply formula that absorbs quickly and works to reduce the appearance of varicose and spider veins."
            }
          },
          {
            title: { fa: "روش تجویز و تزریق (Application)", en: "Application" },
            desc: {
              fa: "درمان از طریق کاتتر باریک (Fine Catheter) تحت گاید سونوگرافی تزریق می‌شود که دقت حداکثری و حداقل درد و ناراحتی بیمار را رقم می‌زند.",
              en: "The treatment is administered through a fine catheter, ensuring precision and minimizing patient discomfort."
            }
          },
          {
            title: { fa: "اثربخشی بالینی (Efficacy)", en: "Efficacy" },
            desc: {
              fa: "فرمول تست‌شده بالینی که نتایج عینی و ملموس در انسداد رگ و تسکین علائم آزاردهنده ناشی از واریس را نشان داده است.",
              en: "Clinically tested formula shown to provide visible results and relief from symptoms associated with varicose and spider veins."
            }
          },
          {
            title: { fa: "ایمنی و سازگاری پوستی (Safety)", en: "Safety" },
            desc: {
              fa: "آزمایش‌شده از نظر درماتولوژی و سازگار با انواع پوست‌ها، تضمین‌کننده استفاده ایمن در جمعیت گسترده‌ای از بیماران.",
              en: "Dermatologically tested and suitable for all skin types, ensuring safe application for a wide range of patients."
            }
          },
          {
            title: { fa: "بسته‌بندی و حجم‌ها (Packaging)", en: "Packaging" },
            desc: {
              fa: "عرضه‌شده در ابعاد و بسته‌بندی‌های متنوع متناسب با نیازهای گوناگون پروتکل درمانی و مدت زمان پروسه.",
              en: "Available in various sizes to suit different treatment needs and durations."
            }
          }
        ]
      },

      // بخش سوم: دیاگرام مرحله‌ای انسداد غیرحرارتی (Non-Thermal Scheme)
      crossingTechniques: {
        title: {
          fa: "مراحل تکنیک انسداد غیرحرارتی رگ (Non-Thermal Closure Scheme)",
          en: "Non-Thermal Vein Closure Procedural Stages"
        },
        steps: [
          {
            title: { fa: "مرحله ۱: دسترسی با کاتتر باریک", en: "Phase 1: Fine Catheter Access" },
            detail: { fa: "ورود دقیق کاتتر باریک به داخل مجرای ورید هدف تحت هدایت سونوگرافی سونوگاید بدون نیاز به بی‌حسی تومسنت.", en: "Ultrasound-guided introduction of fine catheter into target vein without tumescent anesthesia." }
          },
          {
            title: { fa: "مرحله ۲: تزریق کنترل‌شده پلیمر", en: "Phase 2: Polymer Delivery" },
            detail: { fa: "آزادسازی پلیمر سیانوآکریلات اصلاح‌شده در لومن ورید و شروع واکنش انسدادی در تماس با خون.", en: "Controlled release of modified cyanoacrylate in the vessel lumen triggering targeted polymerization." }
          },
          {
            title: { fa: "مرحله ۳: انسداد کامل و فیبروز ورید", en: "Phase 3: Total Vein Sealing" },
            detail: { fa: "اعمال فشار ملایم خارجی و چسبیدن کامل دیواره‌های ورید به یکدیگر و هدایت جریان خون به وریدهای عمقی سالم.", en: "Simultaneous compression sealing the vein walls permanently, redirecting flow to healthy deep veins." }
          }
        ]
      },

      // بخش چهارم: متن تشریحی کامل کاتالوگ (صفحه ۲)
      performanceNarrative: {
        title: {
          fa: "شرح بالینی تحول در مراقبت‌های عروقی (متن کامل کاتالوگ)",
          en: "Vein OFF Transformative Care Narrative"
        },
        paragraphs: {
          fa: [
            "محصول Vein OFF راهکاری دگرگون‌کننده در عرصه درمان وریدها ارائه می‌دهد؛ محصولی با کاربرد آسان که به‌طور هدفمند برای کاهش و محو کردن ظاهر وریدهای واریسی و عنکبوتی طراحی شده است. Vein OFF با بهره‌گیری از فرمولاسیون ویژه و ترکیبات اثبات‌شده بالینی، رویکردی ایمن و کارآمد را در مراقبت و درمان عروقی رقم می‌زند.",
            "فرمولاسیون Vein OFF برای سهولت مصرف مهندسی شده و به‌سرعت اثر کرده تا وضوح رگ‌های واریسی و عنکبوتی را به حداقل رسانده و علائم بالینی ناشی از آن‌ها را برطرف سازد. اثربخشی این فرآورده با آزمون‌های بالینی مورد تایید قرار گرفته و قابلیت آن در ارائه نتایج ملموس و بهبود چشمگیر ظاهر پوست به اثبات رسیده است.",
            "با انجام تست‌های درماتولوژیک و تایید سازگاری کامل با تمامی انواع پوست، Vein OFF سطح بالایی از ایمنی را فراهم آورده و به گزینه‌ای چندمنظوره برای جمعیت‌های مختلف بیماران تبدیل شده است. این محصول در اندازه‌های گوناگون متناسب با نیازهای فردی و طول دوره‌های درمانی هر بیمار در دسترس می‌باشد."
          ],
          en: [
            "Vein OFF offers a transformative solution in the realm of vein treatment, presenting an easy-to-use agent designed to target and diminish the appearance of varicose and spider veins. Harnessing the power of clinically-proven compounds, VeinOFF provides a safe and effective approach to vein care.",
            "The Vein OFF formula is crafted for ease of use, absorbing quickly to reduce varicose and spider vein visibility and relieve associated symptoms. Its efficacy is backed by clinical tests, showcasing the product's ability to deliver tangible results and enhance skin appearance.",
            "Dermatologically tested and deemed suitable for all skin types, Vein OFF ensures a high level of safety, making it a versatile option for a diverse patient population. VeinOFF is available in various package sizes tailored to meet individual needs and treatment durations."
          ]
        }
      },

      // بخش پنجم: جدول مشخصات فنی
      techSpecs: [
        { label: { fa: "دسته‌بندی محصول", en: "Product Classification" }, value: "Varicose & Spider Vein Embolization Agent" },
        { label: { fa: "نوع فرمولاسیون فعال", en: "Active Composition" }, value: { fa: "سیانوآکریلات اصلاح‌شده (Modified Cyanoacrylate)", en: "Modified Cyanoacrylate" } },
        { label: { fa: "مکانیسم انسداد عروق", en: "Closure Modality" }, value: { fa: "غیرحرارتی و بدون تومسنت (Non-Thermal / Non-Tumescent)", en: "Non-Thermal / Non-Tumescent" } },
        { label: { fa: "روش انتقال و تزریق", en: "Administration Method" }, value: { fa: "تزریق از طریق کاتتر باریک تحت گاید سونوگرافی", en: "Fine Catheter Delivery under Ultrasound Guidance" } },
        { label: { fa: "تست‌های پوستی و ایمنی", en: "Dermatological Profile" }, value: { fa: "تست‌شده از نظر درماتولوژی و سازگار با انواع پوست", en: "Dermatologically Tested / All Skin Types" } },
        { label: { fa: "نوع بسته‌بندی", en: "Packaging Formats" }, value: { fa: "ویال‌های با اندازه‌های متنوع", en: "Multiple Vials / Custom Sizing Formats" } }
      ]
    },
    // محصول چهاردهم اینوامد: VenaBLOCK Non-Thermal Treatment (Turkish Glue Procedure)
    {
      id: "invamed-venablock-glue",
      badge: "TURKISH GLUE PROCEDURE",
      title: {
        fa: "VenaBLOCK®",
        en: "VenaBLOCK®"
      },
      tagline: {
        fa: "رویکرد دگرگون‌کننده درمان نارسایی وریدی و واریس در چند دقیقه — ابلیشن چسب NBCA بدون حرارت و بدون تامسنت با موفقیت ۹۸.۷٪",
        en: "Turkish Glue Procedure — Non-Thermal, Non-Tumescent Varicose Vein Closure Performed in Minutes"
      },
      image: "assets/images/invamed-venablock.png",

      // بخش اول: معرفی و ویژگی‌های صفحه اول کاتالوگ
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی سامانه VenaBLOCK®",
          en: "VenaBLOCK® Key Features & Performance Highlights"
        },
        points: {
          fa: [
            "تحول در درمان وریدهای واریسی: ارائه راهکاری کم‌تهاجمی و بسیار کارآمد جهت تسکین و درمان قطعی بیماری‌های وریدی.",
            "ماده چسبنده زیست‌سازگار (Biocompatible Adhesive): تزریق هدفمند و بسیار دقیق چسب بافتی به درون ورید آسیب‌دیده با نتایج سریع و پایدار.",
            "پروسیجر سریع و بدون درد: تجربه درمانی راحت و بدون نیاز به بی‌حسی تامسنت دردناک به لطف کاتتر ظریف تزریق موضعی.",
            "اطمینان و آرامش خاطر: ثبت نرخ موفقیت خیره‌کننده ۹۸.۷٪ که VenaBLOCK را به انتخابی معتمد برای پزشکان و بیماران تبدیل کرده است.",
            "حداقل دوره نقاهت (Minimal Downtime): امکان بازگشت فوری اغلب بیماران به فعالیت‌های روزمره بلافاصله پس از اتمام تزریق.",
            "تفنگ ارگونومیک تزریق (Dispenser Gun): هندل تفنگی ارگونومیک با بارل و ماشه یکپارچه؛ هر بار فشردن و نگه داشتن ماشه دقیقاً حجم 0.3 سی‌سی را ظرف مدت ۵ ثانیه به‌طور پیوسته تزریق می‌کند.",
            "نور راهنمای لیزری ۶۳۵ نانومتر (635 nm Laser Light): هدایت بصری زیرپوستی از طریق آداپتور نور لیزر تعبیه‌شده در انتهای دیستال.",
            "میکروکاتتر تمام PTFE با نشانه‌گذاری ترتیبی: ساخت کامل کاتتر از جنس PTFE جهت عدم واکنش با چسب NBCA، دارای خطوط نشانه‌گذاری هر ۲ سانتی‌متر برای هدایت دقیق پول‌بک (Pull Back)."
          ],
          en: [
            "Revolutionizing Varicose Vein Treatment: Minimally invasive, highly effective option providing rapid relief for venous insufficiency.",
            "Biocompatible Adhesive Agent: Precisely delivered to affected veins, ensuring rapid, permanent, and reliable closure results.",
            "Swift and Comfortable Procedure: Fine catheter administration ensures localized treatment, minimizing discomfort and eliminating tumescent anesthesia.",
            "Impressive Proven Success Rate: Clinically proven success rate of up to 98.7%, establishing VenaBLOCK as a gold standard in vein care.",
            "Minimal Downtime: Patients benefit from immediate ambulation and return to normal daily routines shortly after treatment.",
            "Ergonomic Dispenser Gun: Pistol-type handle with integrated barrel and trigger; each depression and hold delivers 0.3 cc continuously over 5 seconds.",
            "635 nm Laser Guidelight: Integrated distal laser guide light adapter provides transcutaneous optical tracking.",
            "100% PTFE Microcatheter: Crafted entirely from PTFE to avoid reaction with NBCA, marked every 2 cm to facilitate controlled pull-back."
          ]
        }
      },

      // بخش دوم: تجهیزات مهندسی و سخت‌افزاری سیستم VenaBLOCK (صفحه اول کاتالوگ)
      structuralDetails: {
        title: {
          fa: "اجزای سخت‌افزاری و نوآوری‌های مهندسی کیت VenaBLOCK®",
          en: "VenaBLOCK® Integrated Hardware Components & Innovations"
        },
        items: [
          {
            title: { fa: "گان تزریق تفنگی (Dispenser Gun)", en: "Dispenser Gun" },
            desc: {
              fa: "دستگیره پیستولی ارگونومیک؛ سیستم تزریق کالیبره‌شده که با هر بار فشردن ماشه دقیقاً مقدار 0.3cc چسب را در ۵ ثانیه تزریق می‌نماید.",
              en: "Pistol-type ergonomic handle; calibrated delivery mechanism releasing 0.3 cc per 5 seconds on each trigger depression."
            }
          },
          {
            title: { fa: "نور راهنمای لیزر ۶۳۵ نانومتر (635nm Laser Light)", en: "635 nm Laser Guidance" },
            desc: {
              fa: "آداپتور نوری با پرتو لیزر قرمز ۶۳۵ نانومتر در انتهای دیستال جهت ره‌گیری موضعی محل نوک کاتتر از روی سطح پوست.",
              en: "Distal optical adapter featuring 635 nm red laser guidance for precise transillumination and tip localization."
            }
          },
          {
            title: { fa: "میکروکاتتر تفلونی اختصاصی (PTFE Catheter)", en: "PTFE Non-Reactive Catheter" },
            desc: {
              fa: "ساخته‌شده به‌طور ۱۰۰٪ از جنس پلی‌تترافلوئورواتیلن (PTFE) جهت ممانعت مطلق از چسبیدن چسب NBCA به دیواره داخلی لومن کاتتر.",
              en: "Catheter fully constructed of PTFE to completely prevent polymerization reactions with n-butyl cyanoacrylate (NBCA)."
            }
          },
          {
            title: { fa: "نشانه‌گذاری‌های ۲ سانتی‌متری پول‌بک (Pull Back Markers)", en: "2 cm Pull-Back Markers" },
            desc: {
              fa: "درجه‌بندی‌های منظم هر ۲ سانتی‌متر روی شفت کاتتر جهت اجرای گام‌به‌گام و استاندارد تکنیک خروج کاتتر همزمان با تزریق چسب.",
              en: "Sequential 2 cm graduated markings along catheter shaft for standardized stepwise pull-back maneuver."
            }
          }
        ]
      },

      // بخش سوم: شواهد بالینی ۵ ساله ژورنال JVS و تصاویر سونوگرافی (صفحه ۲ کاتالوگ)
      clinicalStudies: {
        title: {
          fa: "شواهد بالینی ۵ ساله ژورنال JVS و ارزیابی سونوگرافی (Clinically Proven Success: 98.7%)",
          en: "5-Year JVS Clinical Evidence & Ultrasonographic Evaluation"
        },
        headline: {
          fa: "داده‌های ۵ ساله، ابلیشن غیرحرارتی VenaBLOCK را به عنوان «درمان ایده‌آل» نارسایی وریدی معرفی می‌کنند — موفقیت بالینی اثبات‌شده تا ۹۸.۷٪ در مطالعه مقایسه‌ای.",
          en: "Five-year data identifies INVAMED's VenaBLOCK Non-Thermal Ablation as the 'ideal treatment' for venous insufficiency with 98.7% success rate."
        },
        reports: [
          {
            source: "JVS (Journal of Vascular Surgery)",
            title: {
              fa: "آنالیز مقایسه‌ای نتایج ابلیشن سیانوآکریلات (CAA) و رادیوفرکوئنسی (RFA) در درمان نارسایی وریدی",
              en: "A Comparative Analysis of Results of Cyanoacrylate Ablation and Radiofrequency Ablation in Venous Insufficiency"
            },
            result: {
              fa: "بر اساس این مطالعه مقایسه‌ای ۵ ساله، VenaBLOCK موفقیت ۹۸.۷٪ را نشان داد. اگرچه در روز پنجم انسداد رگ‌ها در هر دو گروه مشاهده شد، اما در مقایسه نرخ انسداد ماه اول، روش درمانی CAA با موفقیت ۹۸.۷٪ برتری چشمگیری نسبت به روش RFA به دست آورد.",
              en: "According to a comparative 5-year study, VenaBLOCK demonstrated a 98.7% success rate. At 1-month follow-up, cyanoacrylate ablation (CAA) provided a significant advantage over radiofrequency ablation (RFA)."
            }
          },
          {
            source: "Ultrasonographic Evaluation (Figure 1 & 2)",
            title: {
              fa: "ارزیابی سونوگرافی و داپلر رنگی اتصال صافنوفمورال (SFJ) و ورید صافن بزرگ (GSV)",
              en: "Ultrasonographic & Color Doppler Assessment of Incompetent GSV and SFJ"
            },
            result: {
              fa: "شکل ۱: تصاویر سونوگرافی ورید پیش از عمل (A) و انسداد کامل پس از عمل (B). شکل ۲: ورید صافن بزرگ نارسا (A) در محل SFJ؛ تزریق چسب آمبولیزان NBCA با کاتتر (B)؛ و سونوگرافی داپلر رنگی پس از درمان (C) که عدم وجود جریان برگشتی و انسداد فیبروتیک پایدار را تایید می‌کند.",
              en: "Fig 1: Pre-op (A) and post-op (B) ultrasound. Fig 2: Incompetent GSV ultrasound at SFJ (A), catheter delivery of NBCA embolic agent (B), and post-treatment Color Doppler showing complete occlusion without reflux (C)."
            }
          }
        ]
      },

      // بخش چهارم: جدول مشخصات فنی کامل کاتالوگ (Technical Specifications)
      techSpecs: [
        { label: { fa: "قطر کاتتر (Catheter Diameter)", en: "Catheter Diameter" }, value: "6F" },
        { label: { fa: "طول کاتتر (Catheter Length)", en: "Catheter Length" }, value: "100 cm" },
        { label: { fa: "جنس کاتتر (Catheter Material)", en: "Catheter Material" }, value: "PTFE (Polytetrafluoroethylene)" },
        { label: { fa: "ساختار بدنه کاتتر (Catheter Structure)", en: "Catheter Structure" }, value: { fa: "بافته‌شده با استنلس استیل (SS Braiding)", en: "SS Braiding (Stainless Steel)" } },
        { label: { fa: "سیستم نور راهنما (Guidelight)", en: "Guidelight" }, value: { fa: "لیزر ۶۳۵ نانومتر (635 nm Laser)", en: "635 nm Laser" } },
        { label: { fa: "مارکرهای روی کاتتر (Marker)", en: "Marker Spacing" }, value: { fa: "هر ۲ سانتی‌متر جهت هدایت پول‌بک", en: "2 cm for Pull Back" } },
        { label: { fa: "ماده آمبولیزاسیون (Embolization Agent)", en: "Embolization Agent" }, value: { fa: "چسب چسبنده ان-بوتیل سیانوآکریلات (Adhesive NBCA)", en: "Adhesive NBCA" } }
      ]
    },
    // محصول اینوامد: ViperULTRA Thrombolysis Catheter
    {
      id: "invamed-viper-ultra",
      badge: "Vascular / VENOUS",
      title: {
        fa: "ViperULTRA®",
        en: "ViperULTRA®"
      },
      tagline: {
        fa: "پیشرفت نوین در مداخلات کم‌تهاجمی — سیستم دریچه‌ای پتنت‌شده با ۳۰ میکروپور جهت تزریق موضعی و پرقدرت tPA در ورید و شریان ریوی",
        en: "ViperULTRA Thrombolysis Catheter — Advanced Valve Mechanism & 30 Distal Micropores for Vein & Pulmonary Artery Intervention"
      },
      image: "assets/images/invamed-viper-ultra.png",

      // بخش اول: معرفی و فناوری میکروپورها (صفحه اول کاتالوگ)
      featuresOverview: {
        title: {
          fa: "ویژگی‌های برجسته و قابلیت‌های عملکردی کاتتر ViperULTRA®",
          en: "ViperULTRA® Key Features & Performance Highlights"
        },
        points: {
          fa: [
            "پیشرفت پیشگامانه در مداخلات کم‌تهاجمی: کاتتر ترومبولیز Viper Ultra با مهندسی دقیق و سیستم دریچه‌ای نوآورانه، آزادسازی دقیق و بسیار مؤثر عوامل ترومبولیتیک در موضع هدف را تسهیل می‌کند.",
            "حرکت آزادانه گایدوایر: این مکانیزم ویژه به‌طور همزمان امکان جابه‌جایی نامحدود و روان سیم راهنما در لومن کاتتر را بدون تداخل با فرآیند تزریق فراهم می‌سازد.",
            "کاربرد در وریدها و شریان ریوی (Vein / Pulmonary Artery): دارای کاربری اثبات‌شده در پاکسازی ترومبوزهای سیستم وریدی و مداخلات شریان پولمونری در آمبولی ریه.",
            "درمان فارماکومکانیکال حین تزریق tPA: پروسه درمان ترومبولیتیک همزمان با تزریق فعال داروی فعال‌کننده پلاسمینوژن بافتی (tPA) از طریق میکروپورهای بدنه کاتتر با بالاترین بازدهی صورت می‌پذیرد.",
            "تجهیز به ۳۰ میکروپور ۱۰ میکرونی: تعبیه مجموعاً ۳۰ سوراخ ریز میکرونی (۱۰ میکرون) در هر دو طرف نوک دیستال در امتداد طول ۲۰ سانتی‌متر جهت پاشش یکنواخت دارو.",
            "مجهز به دریچه‌های سیلیکونی کاتتر (Catheter Silicon Valves): ایجاد سد مکانیکی مطمئن در نوک کاتتر جهت حفظ فشار و غلظت داروی تزریقی در محل لخته."
          ],
          en: [
            "Cutting-Edge Minimally Invasive Tool: Meticulously engineered with an innovative valve system facilitating precise and efficacious delivery of thrombolytic agents.",
            "Unimpeded Guidewire Movement: Uniquely permits free movement of the guidewire within the catheter lumen, optimizing procedural efficiency.",
            "Indicated for Veins & Pulmonary Artery: Successfully utilized in deep venous interventions and pulmonary arterial thrombolysis.",
            "Pharmacomechanical Therapy during tPA Application: Enables targeted pharmacomechanical therapy through specialized micropores during tPA infusion.",
            "30 Distal Micropores (10 Micron): Features a total of 30 micropores (10 micron) on both sides along the distal 20 cm tip for optimal dispersion.",
            "Catheter Silicon Valves: Ensures robust distal fluid dynamics, preserving localized agent concentration without systemic wash."
          ]
        }
      },

      // بخش دوم: مکانیزم پتنت‌شده دریچه و مشخصات ساختاری (صفحه دوم کاتالوگ)
      structuralDetails: {
        title: {
          fa: "مکانیزم دریچه پتنت‌شده و مشخصات ساختاری کاتتر ViperULTRA®",
          en: "Patented Valve Mechanism & Structural Characteristics"
        },
        items: [
          {
            title: { fa: "مکانیزم دریچه‌ای پتنت‌شده (Patented Valve Mechanism)", en: "Patented Valve Mechanism" },
            desc: {
              fa: "امکان عبور روان گایدوایر و همزمان جلوگیری کامل از بازگشت (Backflow) داروی ترومبولیتیک، که موجب حفظ غلظت و ماندگاری موضعی دارو می‌گردد.",
              en: "Allows for guidewire passage while preventing the backflow of thrombolytic agents, thereby preserving the localized delivery of the medication."
            }
          },
          {
            title: { fa: "پخش دارویی با دقت بالا (Precision Drug Dispersion)", en: "Precision Drug Dispersion" },
            desc: {
              fa: "کنترل بهینه فرآیند تزریق دارو از طریق پورت‌ها، ارتقای حداکثری اثربخشی درمانی و کاهش عوارض جانبی ناخواسته.",
              en: "Controls the drug administration process, enhancing therapeutic efficacy while minimizing potential adverse effects."
            }
          },
          {
            title: { fa: "سازگاری دارویی گسترده (High Compatibility)", en: "High Compatibility" },
            desc: {
              fa: "طراحی‌شده جهت سازگاری با انواع مختلف عوامل ترومبولیتیک و لیتیک، تسهیل‌کننده کاربرد آن در سناریوهای متنوع بالینی.",
              en: "Designed to be compatible with a variety of thrombolytic agents, facilitating its use in diverse clinical scenarios."
            }
          },
          {
            title: { fa: "ناوبری پیشرفته و تیپ آتروماتیک (Advanced Navigation & Atraumatic Tip)", en: "Advanced Navigation & Tip" },
            desc: {
              fa: "انعطاف‌پذیری بالای کاتتر امکان انطباق با تغییرات آناتومیک و پیمایش آسان مسیرهای باریک یا چالش‌برانگیز عروقی را همراه با نوک ایمن فراهم می‌سازد.",
              en: "Flexible design enables adaptation to anatomical variations and smooth navigation through narrow or challenging vessels with an atraumatic tip."
            }
          },
          {
            title: { fa: "متریال بادوام (Durable Material)", en: "Durable Material" },
            desc: {
              fa: "ساخته‌شده با متریال باکیفیت جهت حفظ عملکرد و پایداری در استفاده‌های طولانی‌مدت و فرآیندهای استقرار مکرر.",
              en: "Manufactured to maintain performance over extended periods of use, even under conditions of repeated deployment."
            }
          },
          {
            title: { fa: "مارکر پلاتینیوم (Platinum Marker)", en: "Platinum Radiopaque Marker" },
            desc: {
              fa: "حلقه مارکر پلاتینیومی با دید رادیواپک عالی زیر فلوروسکوپی جهت موقعیت‌یابی دقیق نوک کاتتر و پورت‌های تزریق.",
              en: "Features a platinum radiopaque marker band providing clear visualization for precise catheter localization under fluoroscopy."
            }
          }
        ]
      },

      // بخش سوم: جدول ابعاد و مشخصات فنی (Shapes & Sizes / Technical Specifications)
      // جدول مشخصات فنی و ابعادی کاتتر ViperULTRA (مطابق دقیق جدول کاتالوگ)
      sizingTable: {
        title: {
          fa: "جدول مشخصات ابعادی کاتتر ترومبولیز ViperULTRA® (Technical Specifications)",
          en: "ViperULTRA® Technical Specifications Matrix"
        },
        columns: {
          fa: ["مشخصه فنی (Parameter)", "مدل قطر 5F", "مدل قطر 6F"],
          en: ["Specification Parameter", "5F Diameter Model", "6F Diameter Model"]
        },
        rows: [
          { diameter: " (Design)", lengths: "OTW", sheath: "OTW" },
          { diameter: "  (Catheter Diameter)", lengths: "5F", sheath: "6F" },
          { diameter: "  (Catheter Length)", lengths: "135 cm, 150 cm", sheath: "135 cm, 150 cm" },
          { diameter: "  (Infusion Port)", lengths: "20 cm, 50 cm", sheath: "30 cm, 40 cm" },
          { diameter: "  (Radiopacity)", lengths: "RO Marker", sheath: "RO Marker" },
          { diameter: "  (Guidewire Compatibility)", lengths: "0.035\"", sheath: "0.035\"" }
        ]
      },

      // بخش چهارم: مشخصات فنی عمومی کاتالوگ
      techSpecs: [
        { label: { fa: "دسته‌بندی محصول", en: "Product Category" }, value: "Thrombolysis Catheter / Peripheral & Pulmonary Intervention" },
        { label: { fa: "طراحی کاتتر", en: "Catheter Design" }, value: "Over-The-Wire (OTW)" },
        { label: { fa: "قطرهای کاتتر", en: "Catheter Diameters" }, value: "5F, 6F" },
        { label: { fa: "طول‌های کاتتر", en: "Available Lengths" }, value: "135 cm, 150 cm" },
        { label: { fa: "طول ناحیه پورت‌های تزریق", en: "Infusion Port Lengths" }, value: "20 cm, 30 cm, 40 cm, 50 cm" },
        { label: { fa: "تعداد و مشخصات میکروپورها", en: "Micropores Specification" }, value: { fa: "۳۰ عدد میکروپور (۱۰ میکرون) در طول ۲۰ سانتی‌متر دیستال", en: "30 micropores (10 micron) on both sides at distal 20 cm" } },
        { label: { fa: "نوع مارکر رادیواپک", en: "Radiopacity Marker" }, value: { fa: "مارکر پلاتینیوم (RO Platinum Marker)", en: "Platinum RO Marker" } },
        { label: { fa: "طراحی نوک کاتتر", en: "Tip Design" }, value: { fa: "تیپ آتروماتیک (Atraumatic Tip)", en: "Atraumatic Tip" } },
        { label: { fa: "سیم راهنمای سازگار", en: "Guidewire Compatibility" }, value: "0.035\"" }
      ]
    }

  ]
};