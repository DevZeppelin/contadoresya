import Hero from "./Hero";
import InfoCards from "./InfoCards";
import BulletsSection from "./BulletsSection";
import ContactForm from "./ContactForm";
import TestimonialsWithMap from "./TestimonialsWithMap";
import SeoTextSection from "./SeoTextSection";
import CTASection from "./CTASection";

export default function PageBuilder({ page }) {
  return (
    <>
      <Hero title={page.hero.title} subtitle={page.hero.subtitle} bullets={page.hero.bullets} primary={page.hero.primary} secondary={page.hero.secondary} />
      {page.sections?.map((section) =>
        section.type === "bullets"
          ? <BulletsSection key={section.title} {...section} />
          : <InfoCards key={section.title} {...section} />
      )}
      <ContactForm title={page.formTitle} button={page.formButton} />
      <TestimonialsWithMap title={page.testimonialsTitle} />
      <SeoTextSection title={page.seoTitle}>{page.seoText}</SeoTextSection>
      <CTASection title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}
