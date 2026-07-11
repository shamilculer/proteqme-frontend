export function hasProteqHero(hero) {
  return Boolean(hero?.type && hero.type !== 'none')
}
