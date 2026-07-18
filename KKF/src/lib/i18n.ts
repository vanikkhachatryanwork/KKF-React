import type { Locale, Localized } from '../types'

export const locales: Locale[] = ['am', 'en', 'ir', 'ru']
export const isLocale = (value?: string): value is Locale => !!value && locales.includes(value as Locale)
export const direction = (locale: Locale) => locale === 'ir' ? 'rtl' : 'ltr'
export const localize = (value: Localized | undefined, locale: Locale) => value?.[locale] || value?.am || ''
export const copy = {
  am: { home: 'Գլխավոր', services: 'Ծառայություններ', works: 'Աշխատանքներ', allWorks: 'Բոլոր աշխատանքները', ourWorks: 'Մեր աշխատանքները', loading: 'Բեռնվում է…', error: 'Տվյալները հասանելի չեն', call: 'Զանգահարել պատվիրելու համար', tagline: 'Որակյալ կահույք մատչելի գներով', empty: 'Բովանդակություն դեռ չկա', notFound: 'Էջը չի գտնվել', back: 'Վերադառնալ գլխավոր էջ' },
  en: { home: 'Home', services: 'Services', works: 'Works', allWorks: 'All works', ourWorks: 'Our works', loading: 'Loading…', error: 'Content is currently unavailable', call: 'Call to order', tagline: 'Quality furniture at affordable prices', empty: 'No content yet', notFound: 'Page not found', back: 'Return home' },
  ru: { home: 'Главная', services: 'Услуги', works: 'Работы', allWorks: 'Все работы', ourWorks: 'Наши работы', loading: 'Загрузка…', error: 'Контент временно недоступен', call: 'Позвонить для заказа', tagline: 'Качественная мебель по доступным ценам', empty: 'Контента пока нет', notFound: 'Страница не найдена', back: 'На главную' },
  ir: { home: 'خانه', services: 'خدمات', works: 'پروژه‌ها', allWorks: 'تمام پروژه‌ها', ourWorks: 'پروژه‌های ما', loading: 'در حال بارگذاری…', error: 'محتوا در دسترس نیست', call: 'برای سفارش تماس بگیرید', tagline: 'مبلمان با کیفیت با قیمت مناسب', empty: 'هنوز محتوایی وجود ندارد', notFound: 'صفحه پیدا نشد', back: 'بازگشت به خانه' },
} as const
