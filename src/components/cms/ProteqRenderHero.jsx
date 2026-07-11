"use client";

import MediumHero from "@/components/global/MediumHero";
import PageTitle from "@/components/global/PageTitle";
import Hero from "@/components/home/Hero";
import { mapButtons, mapHighlights, mapSlides, resolveImageSrc } from "@/components/cms/mapBlockData";
import { hasProteqHero } from "@/utilities/hasProteqHero";

export default function ProteqRenderHero({ hero }) {
  if (!hasProteqHero(hero)) return null;

  if (hero.type === "carousel") {
    return <Hero slides={mapSlides(hero.slides)} />;
  }

  if (hero.type === "medium") {
    return (
      <MediumHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        description={hero.description}
        bgImage={resolveImageSrc(hero) || "/systems.webp"}
        imageAlt={hero.imageAlt}
        buttons={mapButtons(hero.buttons)}
        highlights={mapHighlights(hero.highlights)}
        enableParticles={hero.enableParticles}
        particleId={hero.particleId}
      />
    );
  }

  if (hero.type === "pageTitle") {
    const imageBlock = {
      image: hero.pageTitleImage,
      imagePath: hero.pageTitleImagePath,
    };

    return (
      <PageTitle
        title={hero.title}
        bgImage={resolveImageSrc(imageBlock) || "/consulting-bg.webp"}
        particleId={hero.particleId}
      />
    );
  }

  return null;
}
