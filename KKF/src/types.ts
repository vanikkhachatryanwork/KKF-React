export type Locale = "am" | "en" | "ru" | "ir";
export type Localized = Partial<Record<Locale, string>>;
export interface Media {
  id?: number;
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  srcSet?: string;
}
export interface Work {
  id: number;
  slug: string;
  title: Localized;
  content: Localized;
  featuredImage?: Media | null;
  gallery?: Media[];
}
export interface Service {
  title?: string;
  title_en?: string;
  title_ru?: string;
  title_ir?: string;
  description?: string;
  description_en?: string;
  description_ru?: string;
  description_ir?: string;
  image?: Media | string | number;
}
export interface AboutData {
  title: Localized;
  description: Localized;
  image: Media;
}
export interface PageData extends Work {
  about?: AboutData;
  services?: Service[];
}
export interface SiteData {
  name: string;
  description: string;
  logo: string;
  heroVideo: string;
  phone: string;
  socials: Record<string, string>;
}
