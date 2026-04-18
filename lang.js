/* ═══════════════════════════════════════════════════════════════════
   ForecastIQ — lang.js
   Bilingual (English / Arabic) i18n engine with RTL support
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Translation dictionary ───────────────────────────────────── */
  const translations = {

    /* ════════════ INDEX.HTML ════════════ */

    /* nav */
    'nav.features':     { en: 'Features',        ar: 'المميزات' },
    'nav.howItWorks':   { en: 'How It Works',     ar: 'كيف يعمل' },
    'nav.soundFamiliar':{ en: 'Sound Familiar?',  ar: 'هل تعاني من هذا؟' },
    'nav.liveDemo':     { en: 'Live Demo',         ar: 'عرض حي' },
    'nav.freeTrial':    { en: 'Free Trial',        ar: 'تجربة مجانية' },
    'nav.getStarted':   { en: 'Get Started',       ar: 'ابدأ الآن' },

    /* hero */
    'hero.badge':       { en: 'AI-Powered · Store-Specific · Self-Improving', ar: 'مدعوم بالذكاء الاصطناعي · خاص بمتجرك · يتحسن تلقائياً' },
    'hero.headline1':   { en: 'Stop Guessing.',   ar: 'توقف عن التخمين.' },
    'hero.headline2':   { en: 'Start Forecasting.', ar: 'ابدأ التنبؤ.' },
    'hero.sub':         { en: 'An AI model trained <em>exclusively on your store\'s data</em> — delivering accurate sales predictions, inventory clarity, and monthly insights so you always know what\'s coming.', ar: 'نموذج ذكاء اصطناعي مدرَّب <em>حصرياً على بيانات متجرك</em> — يقدم تنبؤات مبيعات دقيقة، ووضوحاً في المخزون، ورؤى شهرية حتى تعرف دائماً ما هو قادم.' },
    'hero.cta1':        { en: 'Get Your Store Forecasted', ar: 'احصل على توقعات لمتجرك' },
    'hero.cta2':        { en: 'See How It Works',          ar: 'شاهد كيف يعمل' },
    'hero.stat1.label': { en: 'Your Data Only',            ar: 'بياناتك فقط' },
    'hero.stat2.label': { en: 'Auto-Retraining Cycle',     ar: 'دورة إعادة تدريب تلقائية' },
    'hero.stat3.label': { en: 'Person to Contact',         ar: 'شخص للتواصل' },

    /* features section */
    'features.eyebrow':  { en: 'What The System Does',         ar: 'ماذا يفعل النظام' },
    'features.title1':   { en: 'Every Insight You Need,',      ar: 'كل رؤية تحتاجها،' },
    'features.title2':   { en: 'Delivered Automatically',      ar: 'تُسلَّم تلقائياً' },
    'features.sub':      { en: 'No dashboards to learn. No complex tools. Just clear outputs from an AI model that understands your products, your seasons, and your customers.', ar: 'لا لوحات تحكم معقدة تحتاج للتعلم. لا أدوات صعبة. فقط مخرجات واضحة من نموذج ذكاء اصطناعي يفهم منتجاتك ومواسمك وعملاءك.' },

    'feat1.title': { en: 'Sales Forecasting',            ar: 'توقعات المبيعات' },
    'feat1.desc':  { en: 'Accurate predictions of future sales volumes by product, category, and time period — so you always know what\'s coming before it arrives.', ar: 'تنبؤات دقيقة بحجم المبيعات المستقبلية حسب المنتج والفئة والفترة الزمنية — حتى تعرف دائماً ما هو قادم قبل أن يصل.' },

    'feat2.title': { en: 'Top & Bottom 5 Products',      ar: 'أفضل وأضعف 5 منتجات' },
    'feat2.desc':  { en: 'Know exactly which products are your revenue drivers and which are dead weight — every single month, ranked and explained.', ar: 'اعرف بالضبط أي المنتجات تحرك إيراداتك وأيها يثقل كاهلك — كل شهر، مرتبة ومشروحة.' },

    'feat3.title': { en: 'Quantity Recommendations',     ar: 'توصيات الكميات' },
    'feat3.desc':  { en: 'Know exactly how much of each product to order and when. Never overstock slow movers or run out of your best sellers again.', ar: 'اعرف بالضبط كم تطلب من كل منتج ومتى. لا مخزون زائد لمنتجات بطيئة، ولا نفاد لأفضل منتجاتك أبداً.' },

    'feat4.title': { en: 'Monthly Insight Reports',      ar: 'تقارير رؤى شهرية' },
    'feat4.desc':  { en: 'A detailed, human-readable report delivered every month — covering performance, forecasts, and actionable recommendations tailored to your store.', ar: 'تقرير مفصل وسهل الفهم يُسلَّم كل شهر — يغطي الأداء والتوقعات وتوصيات قابلة للتطبيق مخصصة لمتجرك.' },

    'feat5.title': { en: 'Automatic Monthly Retraining', ar: 'إعادة تدريب شهرية تلقائية' },
    'feat5.desc':  { en: 'The model learns from new data every month — improving its accuracy over time without any intervention from you. It gets smarter as your business evolves.', ar: 'يتعلم النموذج من البيانات الجديدة كل شهر — محسِّناً دقته مع الوقت دون أي تدخل منك. يصبح أذكى مع تطور عملك.' },

    'feat6.title': { en: 'Seasonal Intelligence',        ar: 'الذكاء الموسمي' },
    'feat6.desc':  { en: 'Detect hidden seasonal patterns across your product catalog. Plan for peaks before they hit and avoid over-purchasing during slow periods.', ar: 'اكتشف الأنماط الموسمية الخفية في كتالوج منتجاتك. خطط لفترات الذروة قبل وقوعها وتجنب الشراء الزائد في الفترات الهادئة.' },

    'feat7.title': { en: 'Demand Forecasting',           ar: 'التنبؤ بالطلب' },
    'feat7.desc':  { en: 'Anticipate customer demand before it happens. Stock what will sell, reduce waste, and always have the right products at the right time.', ar: 'استبق طلب العملاء قبل حدوثه. خزِّن ما سيُباع وقلّل الهدر واحتفظ دائماً بالمنتجات الصحيحة في الوقت المناسب.' },

    'feat8.title': { en: 'Store-Specific Model',         ar: 'نموذج خاص بمتجرك' },
    'feat8.desc':  { en: 'Unlike generic tools, your model is trained exclusively on YOUR historical data — making it far more accurate for your unique product mix and customer base.', ar: 'على خلاف الأدوات العامة، يُدرَّب نموذجك حصرياً على بياناتك التاريخية — مما يجعله أكثر دقة لخليط منتجاتك الفريد وقاعدة عملاءك.' },

    /* how it works */
    'how.eyebrow':  { en: 'Simple Process',          ar: 'عملية بسيطة' },
    'how.title1':   { en: 'From Raw Data to',         ar: 'من البيانات الخام إلى' },
    'how.title2':   { en: 'Real Clarity',             ar: 'وضوح حقيقي' },
    'how.sub':      { en: 'No technical knowledge required. You send data, I handle everything — and you receive actionable insights every month.', ar: 'لا تحتاج لمعرفة تقنية. أنت ترسل البيانات وأنا أتولى كل شيء — وتتلقى رؤى قابلة للتطبيق كل شهر.' },

    'step1.title': { en: 'You Send Your Sales Data',        ar: 'أنت ترسل بيانات مبيعاتك' },
    'step1.desc':  { en: 'Export your historical sales data from Shopify, WooCommerce, or any platform. A simple spreadsheet is all we need — I take it from there.', ar: 'صدِّر بيانات مبيعاتك التاريخية من Shopify أو WooCommerce أو أي منصة. جدول بيانات بسيط هو كل ما نحتاجه — وأنا أكمل الباقي.' },

    'step2.title': { en: 'Your AI Model Gets Trained',      ar: 'يتدرب نموذج الذكاء الاصطناعي الخاص بك' },
    'step2.desc':  { en: 'A machine learning model is built from scratch, trained exclusively on your store\'s data. No shared models, no generic patterns — just your store, your numbers.', ar: 'يُبنى نموذج تعلم آلي من الصفر، مُدرَّب حصرياً على بيانات متجرك. لا نماذج مشتركة، لا أنماط عامة — فقط متجرك وأرقامك.' },

    'step3.title': { en: 'You Receive Your Forecast Report',   ar: 'تستلم تقرير التوقعات' },
    'step3.desc':  { en: 'A detailed monthly report lands in your inbox — covering sales forecasts, top products, quantity recommendations, and clear decisions you should make this month.', ar: 'تقرير شهري مفصل يصل إلى بريدك الإلكتروني — يغطي توقعات المبيعات وأفضل المنتجات وتوصيات الكميات والقرارات الواضحة التي يجب اتخاذها هذا الشهر.' },

    'step4.title': { en: 'The Model Improves Every Month',    ar: 'يتحسن النموذج كل شهر' },
    'step4.desc':  { en: 'As new sales data flows in, the model automatically retrains — becoming more accurate every cycle. Your forecasts improve as your business grows.', ar: 'مع تدفق بيانات المبيعات الجديدة، يُعيد النموذج تدريبه تلقائياً — محققاً دقة أعلى كل دورة. تتحسن توقعاتك مع نمو عملك.' },

    /* decisions */
    'decisions.eyebrow': { en: 'Business Impact',       ar: 'الأثر على الأعمال' },
    'decisions.title1':  { en: 'Decisions You\'ll Make', ar: 'قرارات ستتخذها' },
    'decisions.title2':  { en: 'With Confidence',        ar: 'بثقة تامة' },
    'decisions.sub':     { en: 'Every output is designed to drive a real business decision — not just interesting data for a dashboard no one checks.', ar: 'كل مخرج مصمم لدفع قرار تجاري حقيقي — وليس مجرد بيانات مثيرة لوحة تحكم لا يطلع عليها أحد.' },

    'dec1.title': { en: 'Inventory & Purchasing', ar: 'المخزون والمشتريات' },
    'dec1.desc':  { en: 'Order the exact right quantities — nothing more, nothing less. Eliminate overstock and stockouts at the same time.', ar: 'اطلب الكميات الصحيحة تماماً — لا زيادة ولا نقصان. تخلص من الفائض ونفاد المخزون في آنٍ واحد.' },

    'dec2.title': { en: 'Pricing & Promotions', ar: 'التسعير والعروض الترويجية' },
    'dec2.desc':  { en: 'Time your discounts and promotions perfectly — promote what\'s predicted to slow and capitalize on incoming demand peaks.', ar: 'وقِّت خصوماتك وعروضك الترويجية بدقة — روِّج لما يُتوقع أن يتباطأ واستفد من ذرى الطلب القادمة.' },

    'dec3.title': { en: 'Seasonal Planning', ar: 'التخطيط الموسمي' },
    'dec3.desc':  { en: 'Enter every season fully prepared — know which products will spike and how much buffer stock to carry before the rush hits.', ar: 'أدخل كل موسم مستعداً تماماً — اعرف أي المنتجات ستقفز وكم من المخزون الاحتياطي تحتاج قبل موجة الطلب.' },

    'dec4.title': { en: 'Supplier Negotiations', ar: 'التفاوض مع الموردين' },
    'dec4.desc':  { en: 'Approach suppliers with data-backed volume projections. Lock in better pricing and lead times when you know exactly what you\'ll need months ahead.', ar: 'تعامل مع الموردين بتوقعات حجم مدعومة بالبيانات. احصل على أسعار وأوقات تسليم أفضل عندما تعرف بالضبط ما تحتاجه للأشهر القادمة.' },

    'dec5.title': { en: 'Cash Flow & Financing', ar: 'التدفق النقدي والتمويل' },
    'dec5.desc':  { en: 'Plan your capital and credit needs before the month starts. Know when revenue will be high and when to hold back on spending.', ar: 'خطط لاحتياجات رأس المال والائتمان قبل بداية الشهر. اعرف متى ستكون الإيرادات مرتفعة ومتى تتحفظ في الإنفاق.' },

    'dec6.title': { en: 'Marketing Budget', ar: 'ميزانية التسويق' },
    'dec6.desc':  { en: 'Spend your ad budget where data says demand is coming — amplify growth for rising products and cut waste on slow movers before it costs you.', ar: 'أنفق ميزانيتك الإعلانية حيث تشير البيانات بقدوم الطلب — عزز النمو للمنتجات الصاعدة وقلل الهدر على البطيئة قبل أن تكلفك.' },

    /* why different */
    'why.eyebrow':  { en: 'Why This Is Different', ar: 'لماذا هذا مختلف' },
    'why.title1':   { en: 'Not Another',            ar: 'ليس مجرد' },
    'why.title2':   { en: 'Generic Tool',           ar: 'أداة عامة' },
    'why.sub':      { en: 'The market is flooded with one-size-fits-all analytics platforms. This is not that. This is a purpose-built system for your store, and your store alone.', ar: 'السوق مليء بمنصات تحليلات تناسب الجميع. هذه ليست كذلك. هذا نظام مبني خصيصاً لمتجرك، ولمتجرك وحده.' },
    'why.cta':      { en: 'Work Directly With Me', ar: 'تعامل معي مباشرة' },

    'diff1.title': { en: 'Your model trains only on YOUR data',          ar: 'نموذجك يتدرب فقط على بياناتك' },
    'diff1.desc':  { en: 'No industry averages. No shared training sets. No competitors\' patterns polluting your forecasts. Pure signal from your own store.', ar: 'لا متوسطات قطاعية. لا مجموعات تدريب مشتركة. لا أنماط منافسين تلوث توقعاتك. إشارة صافية من متجرك وحده.' },

    'diff2.title': { en: 'One person to contact — direct line, always', ar: 'شخص واحد للتواصل — خط مباشر دائماً' },
    'diff2.desc':  { en: 'No support tickets. No chatbot. No escalation queue. You talk directly to the person who built your system and understands it completely.', ar: 'لا تذاكر دعم. لا روبوت محادثة. لا قائمة انتظار. تتحدث مباشرة مع الشخص الذي بنى نظامك ويفهمه تماماً.' },

    'diff3.title': { en: 'Built from scratch for your store',            ar: 'مبني من الصفر لمتجرك' },
    'diff3.desc':  { en: 'Every model is custom-built — not a template applied to your data. Your product catalog, seasonality, and customer behavior drive every decision in the architecture.', ar: 'كل نموذج مخصص البناء — ليس قالباً يُطبَّق على بياناتك. كتالوج منتجاتك وموسميتك وسلوك عملائك تقود كل قرار في البنية.' },

    'diff4.title': { en: 'A long-term relationship, not a one-time delivery', ar: 'علاقة طويلة الأمد، وليست تسليماً واحداً' },
    'diff4.desc':  { en: 'The model retrains automatically each month. I\'m not handing you a file and walking away — I\'m a continuous partner invested in your store\'s growth.', ar: 'يُعيد النموذج تدريبه تلقائياً كل شهر. لا أسلمك ملفاً وأمشي — أنا شريك مستمر مستثمر في نمو متجرك.' },

    /* free trial */
    'trial.badge':   { en: 'Zero Risk',          ar: 'بلا مخاطرة' },
    'trial.title1':  { en: 'First Month is a',   ar: 'الشهر الأول' },
    'trial.title2':  { en: 'Free Trial',          ar: 'تجربة مجانية' },
    'trial.title3':  { en: 'on Your Real Data',   ar: 'على بياناتك الحقيقية' },
    'trial.desc':    { en: 'I don\'t believe in selling promises. That\'s why the first month is completely free — your model trains, your report is generated, and you see real results from your actual store data. <strong>Only then do you decide if you want to continue.</strong>', ar: 'لا أؤمن ببيع الوعود. لذلك الشهر الأول مجاني تماماً — يتدرب نموذجك وتُولَّد تقاريرك وترى نتائج حقيقية من بيانات متجرك الفعلية. <strong>عندئذٍ فقط تقرر إذا أردت الاستمرار.</strong>' },
    'trial.point1':  { en: 'Real AI model trained on your actual sales history', ar: 'نموذج ذكاء اصطناعي حقيقي مدرَّب على تاريخ مبيعاتك الفعلي' },
    'trial.point2':  { en: 'Full forecast report — not a demo or sample output',  ar: 'تقرير توقعات كامل — وليس عرضاً توضيحياً أو مخرجاً نموذجياً' },
    'trial.point3':  { en: 'Zero commitment required to see your first results',  ar: 'لا التزام مطلوب لرؤية نتائجك الأولى' },
    'trial.cta':     { en: 'Start My Free Trial Month', ar: 'ابدأ شهري التجريبي المجاني' },

    /* dashboard teaser */
    'teaser.eyebrow': { en: 'See It In Action',                   ar: 'شاهده في العمل' },
    'teaser.title1':  { en: 'See Exactly What',                   ar: 'شاهد بالضبط ماذا' },
    'teaser.title2':  { en: 'You\'ll Receive Each Month',         ar: 'ستتلقى كل شهر' },
    'teaser.sub':     { en: 'Not a mockup. Not a screenshot. A live, interactive preview of the exact insights dashboard your store would get — with real sample data.', ar: 'ليس نموذجاً تصميمياً. ليس لقطة شاشة. معاينة حية وتفاعلية للوحة الرؤى التي سيحصل عليها متجرك — بعينات بيانات حقيقية.' },
    'teaser.cta':     { en: 'Explore the Full Dashboard Preview',  ar: 'استكشف معاينة لوحة التحكم الكاملة' },

    /* faq */
    'faq.eyebrow': { en: 'Got Questions',                              ar: 'لديك أسئلة' },
    'faq.title1':  { en: 'Everything You ',                            ar: 'كل ما تريد ' },
    'faq.title2':  { en: 'Actually Want to Know',                      ar: 'معرفته فعلاً' },
    'faq.sub':     { en: 'Real answers to the real questions store owners ask before getting started.', ar: 'إجابات حقيقية على الأسئلة الحقيقية التي يطرحها أصحاب المتاجر قبل البدء.' },

    'faq1.q': { en: 'What format does my data need to be in?', ar: 'ما الصيغة التي تحتاجها بياناتي؟' },
    'faq1.a': { en: 'A simple Excel (.xlsx) or CSV file exported from your platform is all I need. Shopify and WooCommerce both let you export sales data in one click. If your data is messy or incomplete, that\'s completely fine — data cleaning is part of the process, not your problem.', ar: 'ملف Excel بسيط (.xlsx) أو CSV مُصدَّر من منصتك هو كل ما أحتاجه. تتيح كل من Shopify وWooCommerce تصدير بيانات المبيعات بنقرة واحدة. إذا كانت بياناتك غير منظمة أو غير مكتملة، فلا بأس — تنظيف البيانات جزء من العملية وليس مشكلتك.' },

    'faq2.q': { en: 'How long until I see my first results?', ar: 'كم من الوقت حتى أرى نتائجي الأولى؟' },
    'faq2.a': { en: 'Typically 3–5 business days from when I receive your sales data. You\'ll get your full first report — forecasts, product rankings, quantity recommendations, and seasonal insights — not a preview or partial output.', ar: 'عادةً 3-5 أيام عمل من استلام بيانات مبيعاتك. ستحصل على تقريرك الأول الكامل — التوقعات وتصنيفات المنتجات وتوصيات الكميات والرؤى الموسمية — وليس معاينة أو مخرجاً جزئياً.' },

    'faq3.q': { en: 'Is my sales data kept private and secure?', ar: 'هل بيانات مبيعاتي محفوظة وآمنة؟' },
    'faq3.a': { en: 'Completely. Your data is used exclusively to train your model and generate your reports. It is never shared, sold, aggregated with other stores\' data, or accessed by any third parties. Your store\'s data is your competitive advantage — and it stays that way.', ar: 'تماماً. تُستخدم بياناتك حصرياً لتدريب نموذجك وإنشاء تقاريرك. لا تُشارَك ولا تُباع ولا تُدمج مع بيانات متاجر أخرى ولا يصل إليها أي طرف ثالث. بيانات متجرك هي ميزتك التنافسية — وستبقى كذلك.' },

    'faq4.q': { en: 'What exactly is included in the free first month?', ar: 'ماذا يتضمن الشهر الأول المجاني بالضبط؟' },
    'faq4.a': { en: 'Everything. A fully trained AI model on your actual sales history, a complete monthly forecast report, top and bottom product rankings, exact quantity recommendations per product, and seasonal trend insights. This is not a demo — it\'s the real full output, on your real data. Zero cost, zero commitment required to see it.', ar: 'كل شيء. نموذج ذكاء اصطناعي مدرَّب بالكامل على تاريخ مبيعاتك الفعلي، وتقرير توقعات شهري كامل، وتصنيفات المنتجات الأعلى والأدنى، وتوصيات كميات دقيقة لكل منتج، ورؤى الاتجاهات الموسمية. هذه ليست تجريبية — إنها المخرجات الكاملة الحقيقية على بياناتك الفعلية. تكلفة صفر، التزام صفر لرؤيتها.' },

    'faq5.q': { en: 'How many products can the system handle?', ar: 'كم منتجاً يستطيع النظام التعامل معه؟' },
    'faq5.a': { en: 'The system comfortably handles anywhere from 10 to 500+ product SKUs. The model architecture scales with your catalog size. Whether you carry 20 products or 300, it will produce per-product forecasts and recommendations.', ar: 'يتعامل النظام بسهولة مع ما بين 10 حتى أكثر من 500 وحدة تخزين للمنتجات. تتوسع بنية النموذج مع حجم كتالوجك. سواء حملت 20 منتجاً أو 300، سيُنتج توقعات وتوصيات لكل منتج على حدة.' },

    'faq6.q': { en: 'What if my historical data only goes back a few months?', ar: 'ماذا لو امتدت بياناتي التاريخية لأشهر قليلة فقط؟' },
    'faq6.a': { en: 'Even 3–6 months of data is enough to start seeing meaningful patterns and building a useful model. The forecasts will naturally improve over time as more months of data are collected and the model retrains. Starting now with limited data is better than waiting.', ar: 'حتى 3-6 أشهر من البيانات كافية لبدء رؤية أنماط ذات معنى وبناء نموذج مفيد. ستتحسن التوقعات بشكل طبيعي مع جمع بيانات أشهر أكثر وإعادة تدريب النموذج. البدء الآن ببيانات محدودة أفضل من الانتظار.' },

    'faq7.q': { en: 'What does it cost after the free trial month?', ar: 'ما التكلفة بعد شهر التجربة المجانية؟' },
    'faq7.a': { en: 'Pricing is tailored to your store — based on catalog size, reporting frequency, and how much ongoing support and retraining you need. We\'ll agree on pricing together after you\'ve seen the trial results, so you make the decision with full information. No surprise invoices.', ar: 'التسعير مخصص لمتجرك — بناءً على حجم الكتالوج وتكرار التقارير ومقدار الدعم المستمر وإعادة التدريب التي تحتاجه. سنتفق على التسعير معاً بعد رؤية نتائج التجربة، حتى تتخذ القرار بمعلومات كاملة. لا فواتير مفاجئة.' },

    'faq8.q': { en: 'Can I stop at any time after the trial?', ar: 'هل يمكنني التوقف في أي وقت بعد التجربة؟' },
    'faq8.a': { en: 'Absolutely. If the trial results don\'t impress you, there\'s no obligation to continue — and no awkward conversation to have. The whole point of the free trial is to make the decision easy and risk-free. You should only continue if the results clearly justify it.', ar: 'بالتأكيد. إذا لم تُعجبك نتائج التجربة، فلا التزام بالاستمرار — ولا محادثة محرجة تجريها. الهدف الكامل من التجربة المجانية هو جعل القرار سهلاً وخالياً من المخاطر. يجب أن تستمر فقط إذا كانت النتائج تبرره بوضوح.' },

    /* contact */
    'contact.eyebrow':     { en: 'Let\'s Talk',                   ar: 'لنتحدث' },
    'contact.title1':      { en: 'Ready to Stop',                 ar: 'مستعد للتوقف عن' },
    'contact.title2':      { en: 'Guessing?',                     ar: 'التخمين؟' },
    'contact.sub':         { en: 'If you are interested in building your own System, send an Email to this email:', ar: 'إذا كنت مهتمًا ببناء نظامك الخاص، فأرسل بريدًا إلكترونيًا إلى هذا الحساب:' },
    'contact.response':    { en: 'Typical response time: within 24 hours', ar: 'وقت الاستجابة المعتاد: في غضون 24 ساعة' },
    'contact.nameLabel':   { en: 'Your Name',           ar: 'اسمك' },
    'contact.namePH':      { en: 'e.g. Sarah Johnson',  ar: 'مثال: سارة جونسون' },
    'contact.emailLabel':  { en: 'Your Email',          ar: 'بريدك الإلكتروني' },
    'contact.emailPH':     { en: 'you@yourstore.com',   ar: 'you@yourstore.com' },
    'contact.storeLabel':  { en: 'Your Store Platform', ar: 'منصة متجرك' },
    'contact.storePH':     { en: 'Select your platform', ar: 'اختر منصتك' },
    'contact.msgLabel':    { en: 'Tell Me About Your Store & Challenge', ar: 'أخبرني عن متجرك وتحديك' },
    'contact.msgPH':       { en: 'e.g. I run a Shopify store with ~200 products. My biggest problem is knowing how much stock to carry going into each season...', ar: 'مثال: أدير متجر Shopify بحوالي 200 منتج. مشكلتي الكبرى هي معرفة كم من المخزون يجب أن أحمله مع دخول كل موسم...' },
    'contact.submit':      { en: 'Send My Message', ar: 'أرسل رسالتي' },
    'contact.successTitle':{ en: 'Message sent successfully!', ar: 'تم إرسال الرسالة بنجاح!' },
    'contact.successSub':  { en: 'Ahmed will get back to you within 24 hours.', ar: 'سيرد أحمد عليك في غضون 24 ساعة.' },

    /* footer */
    'footer.tagline': { en: 'AI-Powered Sales Forecasting · Built for Your Store', ar: 'توقعات مبيعات بالذكاء الاصطناعي · مبني لمتجرك' },
    'footer.copy':    { en: '© 2025 ForecastIQ by Ahmed Mohamed. All rights reserved.', ar: '© 2025 ForecastIQ بواسطة أحمد محمد. جميع الحقوق محفوظة.' },

    /* scroll hint */
    'hero.scroll':    { en: 'Scroll', ar: 'تمرير' },

    /* ════════════ PAIN.HTML ════════════ */
    'pain.nav.back':    { en: '← Back to Main', ar: '← العودة للرئيسية' },
    'pain.nav.demo':    { en: 'Live Demo',       ar: 'عرض حي' },
    'pain.nav.start':   { en: 'Get Started',     ar: 'ابدأ الآن' },

    'pain.hero.eyebrow': { en: 'For Retail & E-Commerce Store Owners', ar: 'لأصحاب متاجر التجزئة والتجارة الإلكترونية' },
    'pain.hero.h1a':     { en: 'Does This Sound',                       ar: 'هل يبدو هذا' },
    'pain.hero.h1b':     { en: 'Familiar?',                             ar: 'مألوفاً؟' },
    'pain.hero.sub':     { en: 'Before you decide if ForecastIQ is right for you —<br />see if any of these problems describe your store right now.', ar: 'قبل أن تقرر إذا كان ForecastIQ مناسباً لك —<br />انظر إذا كانت أي من هذه المشاكل تصف متجرك الآن.' },

    'pain1.title': { en: 'You\'re ordering by gut feeling — and it\'s wrong', ar: 'تطلب بناءً على الحدس — وهذا خطأ' },
    'pain1.body':  { en: 'Every restock is a guess. You look at last month\'s numbers, maybe check what\'s low, and place an order hoping you got it right. Sometimes you do. Often you don\'t. And the mistakes cost you — either in tied-up cash or lost sales.', ar: 'كل إعادة تخزين هي تخمين. تنظر إلى أرقام الشهر الماضي، تتحقق مما نفد، وتضع طلباً آملاً أنك أصبت. أحياناً تصيب. كثيراً ما لا تصيب. والأخطاء تكلفك — إما نقداً محبوساً أو مبيعات ضائعة.' },
    'pain1.sting': { en: '↳ Inventory decisions made with no forward-looking data', ar: '↳ قرارات مخزون بلا بيانات استشرافية' },

    'pain2.title': { en: 'Your best sellers run out right when demand peaks', ar: 'أفضل منتجاتك تنفد تماماً حين يبلغ الطلب ذروته' },
    'pain2.body':  { en: 'It\'s your busiest week of the month. Customers are buying, ads are running, traffic is high — and your top 3 products are out of stock. Revenue you\'ll never recover. The demand was predictable. You just didn\'t have the data to see it coming.', ar: 'إنه أنشط أسبوع في الشهر. العملاء يشترون والإعلانات تعمل وحجم الزيارات مرتفع — وأفضل 3 منتجاتك غير متوفرة. إيرادات لن تسترجعها أبداً. كان الطلب متوقعاً. لم يكن لديك فقط البيانات لرؤيته يقترب.' },
    'pain2.sting': { en: '↳ Stockouts during peak demand = permanent lost revenue', ar: '↳ نفاد المخزون في ذروة الطلب = إيراد ضائع للأبد' },

    'pain3.title': { en: 'Dead inventory is quietly destroying your cash flow', ar: 'المخزون الراكد يدمر تدفقك النقدي بصمت' },
    'pain3.body':  { en: 'You ordered 200 units of something that barely moved. Now it\'s sitting in your warehouse, tying up capital you could have used to stock what actually sells. Markdowns. Waste. Storage costs. All because the order was wrong.', ar: 'طلبت 200 وحدة من شيء بالكاد تحرك. الآن يجلس في مستودعك، محبساً رأس مال كان يمكنك استخدامه لتخزين ما يُباع فعلاً. خفض أسعار. هدر. تكاليف تخزين. كل ذلك لأن الطلب كان خاطئاً.' },
    'pain3.sting': { en: '↳ Overstock locks your cash in products customers don\'t want', ar: '↳ المخزون الزائد يحبس نقودك في منتجات لا يريدها العملاء' },

    'pain4.title': { en: 'Every season is a high-stakes guessing game', ar: 'كل موسم لعبة تخمين عالية المخاطر' },
    'pain4.body':  { en: 'Summer? Winter? Back to school? You know roughly when things shift — but you don\'t know by how much, for which products, or how early to prepare. So you either over-prepare (too much stock) or under-prepare (stockouts) every single time.', ar: 'الصيف؟ الشتاء؟ العودة للمدرسة؟ تعرف تقريباً متى تتغير الأمور — لكنك لا تعرف بكم، لأي منتجات، أو مدى التبكير في الاستعداد. فإما تستعد أكثر من اللازم (مخزون زائد) أو أقل من اللازم (نفاد مخزون) في كل مرة.' },
    'pain4.sting': { en: '↳ Seasonal planning without data is expensive trial and error', ar: '↳ التخطيط الموسمي بلا بيانات تجربة وخطأ باهظة الثمن' },

    'pain5.title': { en: 'You\'re spending ad budget on products that won\'t sell', ar: 'تنفق ميزانية إعلانية على منتجات لن تُباع' },
    'pain5.body':  { en: 'You run promotions. You boost ads. But without knowing which products are about to peak in demand and which are about to slow, you spread the budget evenly — or worse, push products that the data would have told you to stop promoting.', ar: 'تُشغِّل عروضاً ترويجية. تُعزز الإعلانات. لكن دون معرفة أي المنتجات على وشك بلوغ ذروة الطلب وأيها على وشك التباطؤ، تُوزع الميزانية بالتساوي — أو الأسوأ، تروِّج لمنتجات كانت البيانات ستخبرك بوقف ترويجها.' },
    'pain5.sting': { en: '↳ Marketing spend without demand clarity = wasted budget', ar: '↳ الإنفاق التسويقي بلا وضوح الطلب = ميزانية ضائعة' },

    'pain6.title': { en: 'You negotiate with suppliers without any data leverage', ar: 'تتفاوض مع الموردين دون أي رافعة بيانات' },
    'pain6.body':  { en: 'You walk into a supplier conversation not knowing how much you\'ll actually need next quarter. So you either under-commit and miss volume discounts, or over-commit and sit on inventory you didn\'t need. Both cost you money.', ar: 'تدخل محادثة مورد دون معرفة كم ستحتاج فعلاً في الربع القادم. فإما تلتزم بأقل وتفوتك خصومات الحجم، أو تلتزم بأكثر وتجلس على مخزون لم تحتجه. كلاهما يكلفك مالاً.' },
    'pain6.sting': { en: '↳ Buying blind means paying full price for wrong quantities', ar: '↳ الشراء الأعمى يعني دفع السعر الكامل لكميات خاطئة' },

    /* compare */
    'compare.eyebrow': { en: 'The Difference', ar: 'الفرق' },
    'compare.title1':  { en: 'Without vs.',    ar: 'بدون مقابل' },
    'compare.title2':  { en: 'With Forecasting Data', ar: 'مع بيانات التوقعات' },
    'compare.before.label': { en: '❌ Without ForecastIQ', ar: '❌ بدون ForecastIQ' },
    'compare.after.label':  { en: '✓ With ForecastIQ',     ar: '✓ مع ForecastIQ' },

    'before1': { en: 'Inventory decisions based on gut feeling',    ar: 'قرارات مخزون مبنية على الحدس' },
    'before2': { en: 'Stockouts on your bestsellers every few months', ar: 'نفاد مخزون أفضل منتجاتك كل بضعة أشهر' },
    'before3': { en: 'Cash locked up in slow-moving products',       ar: 'نقود محبوسة في منتجات بطيئة الحركة' },
    'before4': { en: 'Seasons catch you by surprise every time',    ar: 'المواسم تفاجئك في كل مرة' },
    'before5': { en: 'Marketing budget spread with no signal',       ar: 'ميزانية تسويقية موزعة بلا إشارة' },
    'before6': { en: 'Supplier orders always slightly wrong',        ar: 'طلبات الموردين دائماً خاطئة بعض الشيء' },

    'after1': { en: 'Exact quantity recommendations per product per month', ar: 'توصيات كميات دقيقة لكل منتج كل شهر' },
    'after2': { en: 'Know what\'s about to peak before it happens',         ar: 'اعرف ما سيبلغ ذروته قبل حدوثه' },
    'after3': { en: 'Free up cash by ordering only what you\'ll sell',      ar: 'حرر نقودك بطلب ما ستبيعه فقط' },
    'after4': { en: 'Enter every season fully stocked on the right products', ar: 'أدخل كل موسم مكتمل التخزين للمنتجات الصحيحة' },
    'after5': { en: 'Allocate ad spend where demand is rising',             ar: 'خصص الإنفاق الإعلاني حيث يرتفع الطلب' },
    'after6': { en: 'Go to suppliers with data-backed volume forecasts',    ar: 'اذهب للموردين بتوقعات حجم مدعومة بالبيانات' },

    /* bridge */
    'bridge.eyebrow': { en: 'You\'ve Seen The Problem', ar: 'رأيت المشكلة' },
    'bridge.title1':  { en: 'Now see what your store looks like', ar: 'الآن شاهد كيف يبدو متجرك' },
    'bridge.title2':  { en: 'when the AI has your data.',          ar: 'عندما يملك الذكاء الاصطناعي بياناتك.' },
    'bridge.body':    { en: 'The first month is free. I train a model on your actual sales history and deliver a full forecast report — top products, quantity recommendations, monthly insights. You see real results before you commit to anything.', ar: 'الشهر الأول مجاني. أدرِّب نموذجاً على تاريخ مبيعاتك الفعلي وأسلِّم تقرير توقعات كاملاً — أفضل المنتجات وتوصيات الكميات والرؤى الشهرية. ترى نتائج حقيقية قبل الالتزام بأي شيء.' },
    'bridge.cta1':    { en: 'See a Live Dashboard Preview', ar: 'شاهد معاينة لوحة التحكم الحية' },
    'bridge.cta2':    { en: 'Start My Free Trial',          ar: 'ابدأ تجربتي المجانية' },

    /* ════════════ DASHBOARD-PREVIEW.HTML ════════════ */
    'db.banner':       { en: '📊 Live Dashboard Preview — This is a sample of what your monthly insights report looks like. <a href="index.html#contact">Get yours built → start the free trial</a>', ar: '📊 معاينة لوحة التحكم الحية — هذا نموذج لما يبدو عليه تقرير رؤاك الشهري. <a href="index.html#contact">احصل على نسختك ← ابدأ التجربة المجانية</a>' },
    'db.logoText':     { en: 'Sales Insights',         ar: 'رؤى المبيعات' },
    'db.backBtn':      { en: '← Back to Main Page',   ar: '← العودة للصفحة الرئيسية' },
    'db.kpi1.label':   { en: 'Overall Change',         ar: 'التغيير الإجمالي' },
    'db.kpi1.sub':     { en: 'across all products',    ar: 'عبر جميع المنتجات' },
    'db.kpi2.label':   { en: 'Historical Units',       ar: 'الوحدات التاريخية' },
    'db.kpi2.sub':     { en: 'last 3 months',          ar: 'آخر 3 أشهر' },
    'db.kpi3.label':   { en: 'Forecast Units',         ar: 'وحدات التوقعات' },
    'db.kpi3.sub':     { en: 'next 3 months',          ar: 'الأشهر الـ3 القادمة' },
    'db.kpi4.label':   { en: 'Products',               ar: 'المنتجات' },
    'db.kpi4.up':      { en: '▲2 up',                  ar: '▲2 ارتفاع' },
    'db.kpi4.down':    { en: '▼3 down',                ar: '▼3 انخفاض' },

    'db.chart.title':  { en: 'Historical vs Forecast — Avg Monthly Units', ar: 'التاريخي مقابل التوقعات — متوسط الوحدات الشهرية' },
    'db.legend.hist':  { en: 'Historical Avg (last 3mo)',   ar: 'المتوسط التاريخي (آخر 3 أشهر)' },
    'db.legend.fcst':  { en: 'Forecast Avg (next 3mo)',     ar: 'متوسط التوقعات (الأشهر الـ3 القادمة)' },
    'db.legend.drop':  { en: 'Forecast (drops)',            ar: 'التوقعات (انخفاضات)' },
    'db.ann.gainers':  { en: 'Top 5 Gainers',              ar: 'أفضل 5 رابحين' },
    'db.ann.drops':    { en: 'Top 5 Drops',                ar: 'أعلى 5 انخفاضات' },

    'db.topbot.title':   { en: 'Top & Bottom Products', ar: 'أفضل وأدنى المنتجات' },
    'db.topbot.gainers': { en: 'Biggest Gainers',       ar: 'الأعلى ارتفاعاً' },
    'db.topbot.drops':   { en: 'Biggest Drops',         ar: 'الأعلى انخفاضاً' },

    'db.recs.title':   { en: 'Purchase Recommendations', ar: 'توصيات الشراء' },
    'db.rec1.desc':    { en: 'Buy more — demand is expected to increase. Order <strong>+1 additional unit/month</strong> above your usual quantity.', ar: 'اشترِ أكثر — من المتوقع ارتفاع الطلب. اطلب <strong>+1 وحدة إضافية/شهر</strong> فوق كميتك المعتادة.' },
    'db.rec2.desc':    { en: 'Buy more — demand is expected to increase. Order <strong>+0.3 additional units/month</strong> above your usual quantity.', ar: 'اشترِ أكثر — من المتوقع ارتفاع الطلب. اطلب <strong>+0.3 وحدة إضافية/شهر</strong> فوق كميتك المعتادة.' },
    'db.rec3.desc':    { en: 'Buy less — demand is expected to drop. Reduce orders by <strong>~1.3 units/month</strong> to avoid overstock.', ar: 'اشترِ أقل — من المتوقع انخفاض الطلب. قلل الطلبات بمقدار <strong>~1.3 وحدة/شهر</strong> لتجنب المخزون الزائد.' },
    'db.rec4.desc':    { en: 'Buy less — demand is expected to drop. Reduce orders by <strong>~1.3 units/month</strong> to avoid overstock.', ar: 'اشترِ أقل — من المتوقع انخفاض الطلب. قلل الطلبات بمقدار <strong>~1.3 وحدة/شهر</strong> لتجنب المخزون الزائد.' },
    'db.rec5.desc':    { en: 'Buy less — demand is expected to drop. Reduce orders by <strong>~1.4 units/month</strong> to avoid overstock.', ar: 'اشترِ أقل — من المتوقع انخفاض الطلب. قلل الطلبات بمقدار <strong>~1.4 وحدة/شهر</strong> لتجنب المخزون الزائد.' },

    'db.table.title':  { en: 'All Products Breakdown', ar: 'تفصيل جميع المنتجات' },
    'db.th.product':   { en: 'Product ID',        ar: 'رقم المنتج' },
    'db.th.histTotal': { en: 'Hist. Total',        ar: 'المجموع التاريخي' },
    'db.th.histAvg':   { en: 'Hist. Avg/mo',       ar: 'المتوسط التاريخي/شهر' },
    'db.th.fcstTotal': { en: 'Forecast Total',     ar: 'مجموع التوقعات' },
    'db.th.fcstAvg':   { en: 'Forecast Avg/mo',    ar: 'متوسط التوقعات/شهر' },
    'db.th.change':    { en: 'Change',              ar: 'التغيير' },
    'db.th.trend':     { en: 'Trend',              ar: 'الاتجاه' },
    'db.trend.up':     { en: '▲ Increase',         ar: '▲ ارتفاع' },
    'db.trend.down':   { en: '▼ Decrease',         ar: '▼ انخفاض' },

    'db.cta.h3':  { en: 'This is what your store\'s data would look like.', ar: 'هكذا ستبدو بيانات متجرك.' },
    'db.cta.p':   { en: 'The first month is free — no commitment, no risk. Get your real report built on your actual sales data.', ar: 'الشهر الأول مجاني — لا التزام، لا مخاطرة. احصل على تقريرك الحقيقي المبني على بيانات مبيعاتك الفعلية.' },
    'db.cta.btn': { en: 'Start My Free Trial →',  ar: 'ابدأ تجربتي المجانية ←' },
  };

  /* ── Core i18n helpers ────────────────────────────────────────── */
  const STORAGE_KEY = 'forecastiq_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function t(key, lang) {
    const entry = translations[key];
    if (!entry) return '';
    return entry[lang] || entry['en'] || '';
  }

  /* ── Apply translations to DOM ────────────────────────────────── */
  function applyTranslations(lang) {
    /* 1. html[lang] and dir */
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

    /* 2. Elements with data-i18n (text content) */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = t(key, lang);
      if (text) el.innerHTML = text;
    });

    /* 3. Elements with data-i18n-ph (placeholder) */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      const text = t(key, lang);
      if (text) el.placeholder = text;
    });

    /* 4. Elements with data-i18n-aria (aria-label) */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      const text = t(key, lang);
      if (text) el.setAttribute('aria-label', text);
    });

    /* 5. Update active button state */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('lang-btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    /* 6. RTL-specific font tweak for Arabic */
    if (lang === 'ar') {
      document.body.style.fontFamily = "'Cairo', 'Space Grotesk', -apple-system, sans-serif";
    } else {
      document.body.style.fontFamily = '';
    }

    /* 7. Dashboard banner special handling */
    const bannerStrong = document.getElementById('demoBannerStrong');
    const bannerText   = document.getElementById('demoBannerText');
    const bannerLink   = document.getElementById('demoBannerLink');
    if (bannerStrong) bannerStrong.textContent = (lang === 'ar') ? 'معاينة لوحة التحكم الحية' : 'Live Dashboard Preview';
    if (bannerText)   bannerText.textContent   = (lang === 'ar') ? 'هذا نموذج لما يبدو عليه تقرير رؤاك الشهري.' : 'This is a sample of what your monthly insights report looks like.';
    if (bannerLink)   bannerLink.textContent   = (lang === 'ar') ? 'احصل على نسختك ← ابدأ التجربة المجانية' : 'Get yours built → start the free trial';
  }

  /* ── Build language switcher buttons ──────────────────────────── */
  function buildLangSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language selector');

    ['en', 'ar'].forEach(lang => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.dataset.lang = lang;
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = lang === 'en'
        ? '<span class="lang-flag">🇬🇧</span><span>EN</span>'
        : '<span class="lang-flag">🇪🇬</span><span>عربي</span>';
      btn.addEventListener('click', () => {
        setLang(lang);
        applyTranslations(lang);
      });
      switcher.appendChild(btn);
    });

    return switcher;
  }

  /* ── Inject CSS ───────────────────────────────────────────────── */
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* ── Arabic font import ────────────────────────── */
      @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');

      /* ── Language switcher ──────────────────────────── */
      .lang-switcher {
        display: flex;
        align-items: center;
        gap: 4px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        padding: 3px;
        flex-shrink: 0;
      }

      .lang-btn {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 12px;
        border: 1px solid transparent;
        border-radius: 7px;
        background: transparent;
        color: var(--text-2, #8892A4);
        font-family: var(--font-head, 'Space Grotesk'), sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
        line-height: 1;
      }

      .lang-btn:hover {
        color: var(--teal, #00D4FF);
        background: rgba(0,212,255,0.08);
        border-color: rgba(0,212,255,0.15);
      }

      .lang-btn--active {
        color: var(--text-0, #fff) !important;
        background: linear-gradient(135deg, rgba(0,212,255,0.15), rgba(64,112,255,0.15)) !important;
        border-color: rgba(0,212,255,0.35) !important;
        box-shadow: 0 0 12px rgba(0,212,255,0.1);
      }

      .lang-flag {
        font-size: 1rem;
        line-height: 1;
      }

      /* Dashboard page variant (different header colors) */
      .db-header .lang-switcher {
        background: rgba(255,255,255,0.04);
        border-color: rgba(100,80,220,0.2);
      }

      .db-header .lang-btn {
        color: var(--db-text2, #7A85A0);
        font-family: 'Rajdhani', 'Space Grotesk', sans-serif;
        font-size: 0.8rem;
        letter-spacing: 0.06em;
      }

      .db-header .lang-btn--active {
        color: var(--db-cyan, #00D4FF) !important;
        background: rgba(0,212,255,0.1) !important;
        border-color: rgba(0,212,255,0.3) !important;
      }

      /* RTL adjustments */
      [dir="rtl"] .nav-inner { flex-direction: row-reverse; }
      [dir="rtl"] .nav-links { flex-direction: row-reverse; }
      [dir="rtl"] .hero-content { text-align: right; }
      [dir="rtl"] .hero-actions { flex-direction: row-reverse; justify-content: flex-start; }
      [dir="rtl"] .hero-stats { flex-direction: row-reverse; }
      [dir="rtl"] .section-eyebrow { text-align: right; }
      [dir="rtl"] .section-title { text-align: right; }
      [dir="rtl"] .section-sub { text-align: right; }
      [dir="rtl"] .diff-item { flex-direction: row-reverse; text-align: right; }
      [dir="rtl"] .diff-text { text-align: right; }
      [dir="rtl"] .step-item { flex-direction: row-reverse; }
      [dir="rtl"] .step-content { text-align: right; }
      [dir="rtl"] .trial-points { text-align: right; }
      [dir="rtl"] .trial-point { flex-direction: row-reverse; }
      [dir="rtl"] .contact-left { text-align: right; }
      [dir="rtl"] .contact-email { flex-direction: row-reverse; justify-content: flex-start; }
      [dir="rtl"] .contact-response { flex-direction: row-reverse; }
      [dir="rtl"] .form-label { text-align: right; }
      [dir="rtl"] .footer-inner { text-align: center; }
      [dir="rtl"] .why-inner { flex-direction: row-reverse; }
      [dir="rtl"] .why-left { text-align: right; }
      [dir="rtl"] .compare-item { flex-direction: row-reverse; text-align: right; }
      [dir="rtl"] .bridge-card { text-align: right; }
      [dir="rtl"] .bridge-actions { flex-direction: row-reverse; justify-content: center; }
      [dir="rtl"] .pain-hero { text-align: right; }
      [dir="rtl"] .pain-card { text-align: right; }
      [dir="rtl"] .pain-card-icon { align-self: flex-start; }
      [dir="rtl"] .db-header-right { flex-direction: row-reverse; }
      [dir="rtl"] .db-cta-strip { flex-direction: row-reverse; }
      [dir="rtl"] .db-cta-text { text-align: right; }
      [dir="rtl"] .topbot-row { flex-direction: row-reverse; }
      [dir="rtl"] .rec-card { flex-direction: row-reverse; }
      [dir="rtl"] .rec-content { text-align: right; }
      [dir="rtl"] .rec-tags { justify-content: flex-start; }
      [dir="rtl"] .db-table th,
      [dir="rtl"] .db-table td { text-align: right; }
      [dir="rtl"] .db-panel-header { flex-direction: row-reverse; }
      [dir="rtl"] .hero-scroll-hint { left: auto; right: 50%; transform: translateX(50%); }

      /* Arabic font override classes */
      [dir="rtl"] .logo-text,
      [dir="rtl"] .db-logo-text { font-family: 'Cairo', 'Space Grotesk', sans-serif !important; }

      @media (max-width: 768px) {
        .lang-btn span:last-child { display: none; }
        .lang-btn { padding: 5px 8px; }
        .lang-flag { font-size: 1.1rem; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ── Inject switcher into navbar ──────────────────────────────── */
  function mountSwitcher() {
    // Works for both the main nav (.nav-inner) and dashboard header (.db-header-right)
    const navInner    = document.querySelector('.nav-inner');
    const dbHeaderRight = document.querySelector('.db-header-right');

    const switcher = buildLangSwitcher();

    if (navInner) {
      // Insert before the nav-toggle hamburger button (or at end)
      const toggle = navInner.querySelector('.nav-toggle');
      if (toggle) {
        navInner.insertBefore(switcher, toggle);
      } else {
        navInner.appendChild(switcher);
      }
    } else if (dbHeaderRight) {
      dbHeaderRight.prepend(switcher);
    }
  }

  /* ── Init ─────────────────────────────────────────────────────── */
  function init() {
    injectStyles();
    mountSwitcher();
    const lang = getLang();
    applyTranslations(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
