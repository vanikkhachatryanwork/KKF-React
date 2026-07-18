import type { Locale, Localized } from "../types";

export const locales: Locale[] = ["am", "en", "ir", "ru"];
export const isLocale = (value?: string): value is Locale =>
  !!value && locales.includes(value as Locale);
export const direction = (locale: Locale) => (locale === "ir" ? "rtl" : "ltr");
export const localize = (value: Localized | undefined, locale: Locale) =>
  value?.[locale] || value?.am || "";
export const copy = {
  am: {
    home: "Գլխավոր",
    services: "Ծառայություններ",
    works: "Աշխատանքներ",
    allWorks: "Բոլոր աշխատանքները",
    ourWorks: "Մեր աշխատանքները",
    heroTitle: "Կահույք՝ ստեղծված ձեր տան համար",
    heroText: "Անհատական դիզայն, որակյալ նյութեր և վարպետ կատարում։",
    explore: "Դիտել աշխատանքները",
    featured: "Ընտրված նախագծեր",
    featuredText:
      "Բացահայտեք տարբեր տարածքների համար ստեղծված մեր լուծումները։",
    custom: "Անհատական",
    customText:
      "Յուրաքանչյուր չափ, նյութ և դետալ ընտրվում է ձեր տարածքի համար։",
    quality: "Որակ",
    qualityText: "Հուսալի նյութեր և մանրակրկիտ աշխատանք՝ երկար տարիների համար։",
    fullCycle: "Ամբողջական ընթացք",
    fullCycleText: "Չափագրումից և 3D նախագծից մինչև առաքում ու տեղադրում։",
    viewCollection: "Բացել հավաքածուն",
    loading: "Բեռնվում է…",
    error: "Տվյալները հասանելի չեն",
    call: "Զանգահարել պատվիրելու համար",
    tagline: "Որակյալ կահույք մատչելի գներով",
    empty: "Բովանդակություն դեռ չկա",
    notFound: "Էջը չի գտնվել",
    back: "Վերադառնալ գլխավոր էջ",
  },
  en: {
    home: "Home",
    services: "Services",
    works: "Works",
    allWorks: "All works",
    ourWorks: "Our work",
    heroTitle: "Furniture shaped around your home",
    heroText:
      "Tailored design, quality materials and meticulous craftsmanship.",
    explore: "Explore our work",
    featured: "Featured spaces",
    featuredText:
      "Discover considered furniture solutions made for every part of the home.",
    custom: "Made for you",
    customText:
      "Every dimension, material and detail is selected around your space.",
    quality: "Built to last",
    qualityText:
      "Trusted materials and meticulous workmanship for years of use.",
    fullCycle: "From idea to install",
    fullCycleText:
      "Measurement and 3D design through delivery and final installation.",
    viewCollection: "View collection",
    loading: "Loading…",
    error: "Content is currently unavailable",
    call: "Call to order",
    tagline: "Quality furniture at affordable prices",
    empty: "No content yet",
    notFound: "Page not found",
    back: "Return home",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    works: "Работы",
    allWorks: "Все работы",
    ourWorks: "Наши работы",
    heroTitle: "Мебель, созданная для вашего дома",
    heroText:
      "Индивидуальный дизайн, качественные материалы и точное исполнение.",
    explore: "Смотреть работы",
    featured: "Избранные проекты",
    featuredText:
      "Продуманные мебельные решения для разных пространств вашего дома.",
    custom: "Индивидуально",
    customText:
      "Каждый размер, материал и деталь подбираются для вашего пространства.",
    quality: "Надёжное качество",
    qualityText: "Проверенные материалы и точная работа на долгие годы.",
    fullCycle: "Полный цикл",
    fullCycleText:
      "От замера и 3D-проекта до доставки и окончательной установки.",
    viewCollection: "Открыть коллекцию",
    loading: "Загрузка…",
    error: "Контент временно недоступен",
    call: "Позвонить для заказа",
    tagline: "Качественная мебель по доступным ценам",
    empty: "Контента пока нет",
    notFound: "Страница не найдена",
    back: "На главную",
  },
  ir: {
    home: "خانه",
    services: "خدمات",
    works: "پروژه‌ها",
    allWorks: "تمام پروژه‌ها",
    ourWorks: "پروژه‌های ما",
    heroTitle: "مبلمانی متناسب با خانه شما",
    heroText: "طراحی سفارشی، مواد باکیفیت و اجرای دقیق.",
    explore: "مشاهده پروژه‌ها",
    featured: "فضاهای منتخب",
    featuredText: "راهکارهای دقیق مبلمان را برای بخش‌های مختلف خانه کشف کنید.",
    custom: "ساخته‌شده برای شما",
    customText: "هر اندازه، متریال و جزئیات متناسب با فضای شما انتخاب می‌شود.",
    quality: "کیفیت ماندگار",
    qualityText: "مواد قابل اعتماد و اجرای دقیق برای سال‌ها استفاده.",
    fullCycle: "از ایده تا نصب",
    fullCycleText: "از اندازه‌گیری و طراحی سه‌بعدی تا تحویل و نصب نهایی.",
    viewCollection: "مشاهده مجموعه",
    loading: "در حال بارگذاری…",
    error: "محتوا در دسترس نیست",
    call: "برای سفارش تماس بگیرید",
    tagline: "مبلمان با کیفیت با قیمت مناسب",
    empty: "هنوز محتوایی وجود ندارد",
    notFound: "صفحه پیدا نشد",
    back: "بازگشت به خانه",
  },
} as const;
