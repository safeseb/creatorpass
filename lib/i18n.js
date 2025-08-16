
import { createContext, useContext, useEffect, useState } from 'react';
const dict = {
  en: {
    home_iTitle: "Get access to exclusive offers from top establishments and brands.",
    home_iSub: "Join the largest invite-only community. Create content and earn in exchange for products and services.",
    home_iCta: "I’m an Influencer",
    home_bTitle: "Promote your business with leading influencers fast and easy.",
    home_bSub: "Join 100+ restaurants, fitness, wellness, health & beauty brands that grow with CreatorPass. Get authentic content & measurable exposure.",
    home_bCta: "I’m a Business",

    inf_title: "Get access to exclusive offers from top establishments and brands.",
    inf_sub: "Join the largest invite-only community. Create content and earn in exchange for products and services.",
    inf_trusted: "Trusted by Exclusive Brands",
    inf_benefits: "Benefits",
    inf_how: "How it works",
    inf_s1t: "Reserve", inf_s1d: "Book the offer you like.",
    inf_s2t: "Enjoy",   inf_s2d: "Dine, relax, experience it. Take a pic/vid you’d post anyway.",
    inf_s3t: "Post",    inf_s3d: "Share your story following the requirements.",
    inf_inv: "Invite only. Access after verification via invite code.",
    inf_follow: "Follow us",
    inf_faq: "Frequently Asked Questions",

    biz_title: "Promote your business with leading influencers fast and easy.",
    biz_sub: "Join 100+ restaurants, fitness, wellness, health & beauty brands that grow their business with CreatorPass. Get authentic content & measurable exposure.",
    biz_feat: "Accessible plans packed with the best features.",
    biz_apply: "Apply Now — Free to Start",
    biz_apply2: "Apply Now — Free to Start",
    biz_benefits: "Benefits for Businesses",
    biz_how: "How it works",
    biz_s1t: "Post the offer",  biz_s1d: "Create an offer in minutes.",
    biz_s2t: "Receive promotion", biz_s2d: "Creators visit & post.",
    biz_s3t: "Measure results", biz_s3d: "Track reach, engagement & ROI.",
    biz_pricing: "Pricing",
    biz_scarce: "We only accept a limited number of businesses each month to ensure maximum visibility.",
    biz_faq: "Frequently Asked Questions"
  },
  cs: {
    home_iTitle: "Získejte přístup k exkluzivním nabídkám od top podniků a značek.",
    home_iSub: "Přidejte se do největší komunity na pozvánku. Tvořte obsah a získejte odměnu za produkty a služby.",
    home_iCta: "Jsem influencer",
    home_bTitle: "Propagujte svůj podnik s předními influencery rychle a snadno.",
    home_bSub: "Přidejte se k 100+ restauracím, fitness, wellness a beauty značkám, které rostou s CreatorPass. Získejte autentický obsah a měřitelný zásah.",
    home_bCta: "Jsem firma",

    inf_title: "Získejte přístup k exkluzivním nabídkám od top podniků a značek.",
    inf_sub: "Přidejte se do největší komunity na pozvánku. Tvořte obsah a získejte odměnu za produkty a služby.",
    inf_trusted: "Důvěřují nám exkluzivní značky",
    inf_benefits: "Výhody",
    inf_how: "Jak to funguje",
    inf_s1t: "Rezervace", inf_s1d: "Vyberte si nabídku.",
    inf_s2t: "Užijte si", inf_s2d: "Dejte si jídlo, relax, zážitek. Natočte to, co byste stejně sdíleli.",
    inf_s3t: "Sdílejte", inf_s3d: "Dodržte požadavky a zveřejněte.",
    inf_inv: "Pouze na pozvánku. Přístup po ověření a zadání kódu.",
    inf_follow: "Sledujte nás",
    inf_faq: "Často kladené dotazy",

    biz_title: "Propagujte svůj podnik s předními influencery rychle a snadno.",
    biz_sub: "Přidejte se k 100+ restauracím, fitness, wellness a beauty značkám, které s CreatorPass rostou. Získejte autentický obsah a měřitelný zásah.",
    biz_feat: "Dostupné tarify s nejlepšími funkcemi.",
    biz_apply: "Zažádat — zdarma",
    biz_apply2: "Zažádat — zdarma",
    biz_benefits: "Přínosy pro firmy",
    biz_how: "Jak to funguje",
    biz_s1t: "Zveřejněte nabídku", biz_s1d: "Vytvořte ji během pár minut.",
    biz_s2t: "Získejte propagaci", biz_s2d: "Tvůrci přijdou a zveřejní.",
    biz_s3t: "Měřte výsledky", biz_s3d: "Sledujte dosah, engagement a ROI.",
    biz_pricing: "Ceník",
    biz_scarce: "Abychom zajistili maximální viditelnost, přijímáme jen omezený počet firem každý měsíc.",
    biz_faq: "Často kladené dotazy"
  }
};
const I18nCtx = createContext({ t:(k)=>k, lang:'en', setLang:()=>{} });
export function I18nProvider({ children }){
  const [lang,setLang] = useState('en');
  useEffect(()=>{ const s = typeof window!=='undefined' && localStorage.getItem('cp_lang'); if(s) setLang(s); },[]);
  useEffect(()=>{ if(typeof window!=='undefined') localStorage.setItem('cp_lang',lang); },[lang]);
  const t = (k)=> (dict[lang] && dict[lang][k]) || dict.en[k] || k;
  return <I18nCtx.Provider value={{t,lang,setLang}}>{children}</I18nCtx.Provider>;
}
export const useI18n = ()=> useContext(I18nCtx);
