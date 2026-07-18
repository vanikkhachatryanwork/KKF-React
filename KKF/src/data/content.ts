import type { Media, PageData, Service, SiteData, Work } from "../types";

const media = (url: string, alt = ""): Media => ({ url, alt });
const sequence = (folder: string, prefix: string, start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) =>
    media(`/assets/works/${folder}/${prefix}${start + index}.webp`),
  );

const definitions = [
  {
    id: 1,
    slug: "xohanoc",
    titles: ["Խոհանոց", "Kitchens", "Кухни", "آشپزخانه‌ها"],
    gallery: sequence("xohanoc", "khonaoc-new", 2, 66),
  },
  {
    id: 2,
    slug: "hyurasenyak",
    titles: ["Հյուրասենյակ", "Living rooms", "Гостиные", "اتاق نشیمن"],
    gallery: sequence("hyurasenyak", "hyurasenyak-new", 2, 28),
  },
  {
    id: 3,
    slug: "ofisayin",
    titles: ["Օֆիսային", "Office furniture", "Офисная мебель", "مبلمان اداری"],
    gallery: sequence("ofisayin", "ofisayin-new", 1, 15),
  },
  {
    id: 4,
    slug: "nnjasenyak",
    titles: ["Ննջասենյակ", "Bedrooms", "Спальни", "اتاق خواب"],
    gallery: sequence("nnjasenyak", "nnjaran-", 1, 43),
  },
  {
    id: 5,
    slug: "sanhanguyc",
    titles: ["Սանհանգույց", "Bathrooms", "Ванные комнаты", "حمام"],
    gallery: sequence("sanhanguyc", "Sanhanguyc-new-", 2, 17),
  },
  {
    id: 6,
    slug: "mankakan",
    titles: ["Մանկական", "Children’s rooms", "Детские комнаты", "اتاق کودک"],
    gallery: sequence("mankakan", "mankakan-new", 1, 6),
  },
  {
    id: 7,
    slug: "pati",
    titles: ["Պատի կահույք", "Wall units", "Стенки", "کمد دیواری"],
    gallery: sequence("pati", "pati-new-", 13, 27),
  },
] as const;

export const works: Work[] = definitions.map(
  ({ id, slug, titles, gallery }) => ({
    id,
    slug,
    title: { am: titles[0], en: titles[1], ru: titles[2], ir: titles[3] },
    content: {},
    featuredImage: gallery[0],
    gallery,
  }),
);

export const site: SiteData = {
  name: "KK Furniture",
  description: "Custom furniture",
  logo: "/assets/brand/logo-new.webp",
  heroVideo: "/assets/brand/hero.mp4",
  phone: "+37494000305",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100009769080688",
    viber: "viber://chat?number=%2B37494000305",
    instagram: "#",
  },
};

export const services: Service[] = [
  {
    title: "Խորհրդատվություն",
    title_en: "Consultation",
    title_ru: "Консультация",
    title_ir: "مشاوره",
    description:
      "Գործում է անվճար խորհրդատվություն։ Մեր հմուտ մասնագետները կօգնեն ճիշտ կողմնորոշվել ձեր ընտրության մեջ։",
    description_en:
      "We provide a free consultation. Our experienced specialists will help you make the right choice for your space.",
    description_ru:
      "Мы предоставляем бесплатную консультацию. Наши специалисты помогут подобрать правильное решение для вашего пространства.",
    description_ir:
      "مشاوره رایگان ارائه می‌دهیم. متخصصان ما به شما کمک می‌کنند بهترین انتخاب را برای فضای خود داشته باشید.",
    image: media("/assets/services/xorhrdatvutyun.webp"),
  },
  {
    title: "Չափագրում",
    title_en: "Measurement",
    title_ru: "Замер",
    title_ir: "اندازه‌گیری",
    description:
      "Մասնագետների կողմից մանրակրկիտ չափագրումը թույլ է տալիս կահույքը հարմարեցնել ձեր տարածքին։",
    description_en:
      "Accurate on-site measurement ensures the furniture is tailored precisely to your room.",
    description_ru:
      "Точный выездной замер позволяет идеально адаптировать мебель к помещению.",
    description_ir:
      "اندازه‌گیری دقیق در محل باعث می‌شود مبلمان کاملاً متناسب با فضای شما ساخته شود.",
    image: media("/assets/services/chapagrum.webp"),
  },
  {
    title: "3D մոդելավորում",
    title_en: "3D modelling",
    title_ru: "3D-моделирование",
    title_ir: "مدل‌سازی سه‌بعدی",
    description:
      "Նախագծի 3D տարբերակը հնարավորություն է տալիս նախապես տեսնել կահույքի վերջնական տեսքը։",
    description_en:
      "A detailed 3D design lets you preview the final furniture before production begins.",
    description_ru:
      "Детальная 3D-модель позволяет увидеть будущий результат до начала производства.",
    description_ir:
      "طراحی سه‌بعدی به شما امکان می‌دهد نتیجه نهایی را پیش از تولید مشاهده کنید.",
    image: media("/assets/services/3D-modelavorum.webp"),
  },
  {
    title: "Առաքում",
    title_en: "Delivery",
    title_ru: "Доставка",
    title_ir: "تحویل",
    description: "Կահույքի անվտանգ և ժամանակին առաքում։",
    description_en: "Safe and timely delivery of your furniture.",
    description_ru: "Безопасная и своевременная доставка мебели.",
    description_ir: "تحویل ایمن و به‌موقع مبلمان.",
    image: media("/assets/services/araqum.webp"),
  },
  {
    title: "Տեղադրում",
    title_en: "Installation",
    title_ru: "Установка",
    title_ir: "نصب",
    description: "Պրոֆեսիոնալ տեղադրում՝ ճշգրիտ և մաքուր աշխատանքով։",
    description_en:
      "Professional installation with precise and clean workmanship.",
    description_ru: "Профессиональная установка с точной и аккуратной работой.",
    description_ir: "نصب حرفه‌ای با اجرای دقیق و تمیز.",
    image: media("/assets/services/texadrum.webp"),
  },
];

export const pages: Record<string, PageData> = {
  home: {
    id: 17,
    slug: "home",
    title: { am: "Գլխավոր", en: "Home", ru: "Главная", ir: "خانه" },
    content: {},
    featuredImage: media("/assets/works/hyurasenyak/hyurasenyak-new10.webp"),
    gallery: works.map((item) => item.featuredImage!).filter(Boolean),
    about: {
      title: { am: "Մեր մասին", en: "About us", ru: "О нас", ir: "درباره ما" },
      description: {
        am: "KKF-ը ստեղծում է անհատական կահույք՝ համադրելով ֆունկցիոնալությունը, որակը և ժամանակակից դիզայնը։ Յուրաքանչյուր նախագիծ սկսվում է ձեր տարածքից և ավարտվում մանրակրկիտ պատրաստված լուծմամբ։",
        en: "KKF creates custom furniture that combines functionality, quality and contemporary design. Every project begins with your space and ends with a carefully crafted solution.",
        ru: "KKF создаёт мебель на заказ, сочетая функциональность, качество и современный дизайн. Каждый проект начинается с вашего пространства и завершается тщательно продуманным решением.",
        ir: "KKF مبلمان سفارشی را با ترکیب کارایی، کیفیت و طراحی معاصر تولید می‌کند. هر پروژه از فضای شما آغاز می‌شود و با راهکاری دقیق و حرفه‌ای به پایان می‌رسد.",
      },
      image: media("/assets/works/hyurasenyak/hyurasenyak-new10.webp"),
    },
  },
  services: {
    id: 19,
    slug: "services",
    title: { am: "Ծառայություններ", en: "Services", ru: "Услуги", ir: "خدمات" },
    content: {},
    services,
  },
};
