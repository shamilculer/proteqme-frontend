import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const targets = [
  path.join(root, 'src', 'components'),
  path.join(root, 'src', 'heros'),
]

function walk(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    if (/\.(jsx|tsx)$/.test(entry.name)) return [full]
    return []
  })
}

const replacements = [
  [/\{stats\.map\(\(stat\) =>/g, '{stats.map((stat, index) =>'],
  [/\{inlineStats\.map\(\(stat\) =>/g, '{inlineStats.map((stat, index) =>'],
  [/\{overlayStats\.map\(\(stat\) =>/g, '{overlayStats.map((stat, index) =>'],
  [/\{metrics\.map\(\(metric\) =>/g, '{metrics.map((metric, index) =>'],
  [/\{steps\.map\(\(step\) =>/g, '{steps.map((step, index) =>'],
  [/\{items\.map\(\(point\) =>/g, '{items.map((point, index) =>'],
  [/\{items\.map\(\(capability\) =>/g, '{items.map((capability, index) =>'],
  [/\{items\.map\(\(link\) =>/g, '{items.map((link, index) =>'],
  [/\{links\.map\(\(link\) =>/g, '{links.map((link, index) =>'],
  [/\{reasons\.map\(\(reason\) =>/g, '{reasons.map((reason, index) =>'],
  [/\{highlights\.map\(\((item|detail|bullet|highlight)\) =>/g, '{highlights.map(($1, index) =>'],
  [/\{item\.highlights\.map\(\(detail\) =>/g, '{item.highlights.map((detail, index) =>'],
  [/\{solution\.highlights\.map\(\(bullet\) =>/g, '{solution.highlights.map((bullet, index) =>'],
  [/\{module\.details\.slice\(0, 3\)\.map\(\(detail\) =>/g, '{module.details.slice(0, 3).map((detail, index) =>'],
  [/\{paragraphs\.map\(\(text\) =>/g, '{paragraphs.map((text, index) =>'],
  [/\{pills\.map\(\(label\)/g, '{pills.map((label, index)'],
  [/\{formats\.map\(\(label\)/g, '{formats.map((label, index)'],
  [/\{focusAreas\.map\(\(\{ label \}\)/g, '{focusAreas.map(({ label }, index)'],
  [/\{focusAreas\.map\(\((area|item)\) =>/g, '{focusAreas.map(($1, index) =>'],
  [/\{programs\.map\(\(programme\)/g, '{programs.map((programme, index)'],
  [/\{items\.map\(\(programme, i\) =>/g, '{items.map((programme, index) =>'],
  [/\{upcomingCourses\.map\(\(course\) =>/g, '{upcomingCourses.map((course, index) =>'],
  [/\{solutions\.map\(\(solution\) =>/g, '{solutions.map((solution, index) =>'],
  [/\{pillars\.map\(\(pillar\) =>/g, '{pillars.map((pillar, index) =>'],
  [/\{services\.map\(\(service\) =>/g, '{services.map((service, index) =>'],
  [/\{features\.map\(\(item\) =>/g, '{features.map((item, index) =>'],
  [/\{features\.map\(\(feature\) =>/g, '{features.map((feature, index) =>'],
  [/\{platforms\.map\(\(platform\) =>/g, '{platforms.map((platform, index) =>'],
  [/\{cards\.map\(\(card\) =>/g, '{cards.map((card, index) =>'],
  [/\{compliancePoints\.map\(\(point\) =>/g, '{compliancePoints.map((point, index) =>'],
  [/\{tradingBots\.map\(\(bot\) =>/g, '{tradingBots.map((bot, index) =>'],
  [/\{goldBenefits\.map\(\(item\) =>/g, '{goldBenefits.map((item, index) =>'],
  [/\{neobankFeatures\.map\(\(item\) =>/g, '{neobankFeatures.map((item, index) =>'],
  [/\{protections\.map\(\(item\) =>/g, '{protections.map((item, index) =>'],
  [/\{partners\.map\(\(partner\) =>/g, '{partners.map((partner, index) =>'],
  [/\{ecosystemPillars\.map\(\(card\) =>/g, '{ecosystemPillars.map((card, index) =>'],
  [/\{sideCardParagraphs\.map\(\(text, index\) =>/g, '{sideCardParagraphs.map((text, index) =>'],
  [/\{mappedButtons\.map\(\(button\) =>/g, '{mappedButtons.map((button, index) =>'],
  [/\{buttons\.map\(\(button\) =>/g, '{buttons.map((button, index) =>'],
  [/\{highlights\.map\(\(highlight\) =>/g, '{highlights.map((highlight, index) =>'],
  [/\{normalizedSteps\.map\(\(item\) =>/g, '{normalizedSteps.map((item, index) =>'],

  [/key=\{stat\.label\}/g, 'key={itemKey(stat, index)}'],
  [/key=\{metric\.label\}/g, 'key={itemKey(metric, index)}'],
  [/key=\{step\.title\}/g, 'key={itemKey(step, index)}'],
  [/key=\{point\.title\}/g, 'key={itemKey(point, index)}'],
  [/key=\{capability\.title\}/g, 'key={itemKey(capability, index)}'],
  [/key=\{link\.title\}/g, 'key={itemKey(link, index)}'],
  [/key=\{reason\.text\}/g, 'key={itemKey(reason, index)}'],
  [/key=\{detail\}/g, 'key={listKey(detail, index)}'],
  [/key=\{bullet\}/g, 'key={listKey(bullet, index)}'],
  [/key=\{highlight\}/g, 'key={listKey(highlight, index)}'],
  [/key=\{item\}/g, 'key={listKey(item, index)}'],
  [/key=\{label\}/g, 'key={listKey(label, index)}'],
  [/key=\{button\.label\}/g, 'key={listKey(button.label ?? button.href, index, "button")}'],
  [/key=\{programme\.title\}/g, 'key={itemKey(programme, index)}'],
  [/key=\{course\.title\}/g, 'key={itemKey(course, index)}'],
  [/key=\{solution\.title\}/g, 'key={itemKey(solution, index)}'],
  [/key=\{pillar\.title\}/g, 'key={itemKey(pillar, index)}'],
  [/key=\{pillar\.href\}/g, 'key={itemKey(pillar, index, ["href", "title"])}'],
  [/key=\{service\.title\}/g, 'key={itemKey(service, index)}'],
  [/key=\{item\.title\}/g, 'key={itemKey(item, index)}'],
  [/key=\{feature\.eyebrow\}/g, 'key={itemKey(feature, index, ["eyebrow", "title"])}'],
  [/key=\{platform\.title\}/g, 'key={itemKey(platform, index)}'],
  [/key=\{card\.title\}/g, 'key={itemKey(card, index)}'],
  [/key=\{bot\.name\}/g, 'key={itemKey(bot, index, ["name", "title"])}'],
  [/key=\{partner\.name\}/g, 'key={itemKey(partner, index, ["name", "title"])}'],
  [/key=\{bar\.label\}/g, 'key={itemKey(bar, index)}'],
  [/key=\{block\.title\}/g, 'key={itemKey(block, index)}'],
  [/key=\{faq\.question\}/g, 'key={itemKey(faq, index, ["question", "title"])}'],
  [/key=\{text\.slice\(0, 40\)\}/g, 'key={listKey(text, index, "paragraph")}'],
  [/key=\{text\.slice\(0, 48\)\}/g, 'key={listKey(text, index, "paragraph")}'],
  [/key=\{item\.step\}/g, 'key={itemKey(item, index, ["step", "title"])}'],
  [/key=\{social\.url\}/g, 'key={listKey(social.url, index, "social")}'],
  [/key=\{`$\{link\.href\}-\$\{link\.label\}`\}/g, 'key={listKey(`${link.href}-${link.label}`, index, "link")}'],
]

function addImport(content) {
  if (!content.includes('itemKey(') && !content.includes('listKey(')) return content
  if (content.includes('@/lib/listKey')) return content

  const importLine = 'import { itemKey, listKey } from "@/lib/listKey";\n'

  if (content.startsWith('"use client"') || content.startsWith("'use client'")) {
    return content.replace(/^(['"])use client\1;\r?\n\r?\n?/, (match) => `${match}${importLine}`)
  }

  return `${importLine}${content}`
}

let fileCount = 0

for (const file of targets.flatMap(walk)) {
  let content = fs.readFileSync(file, 'utf8')
  const original = content

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement)
  }

  if (content !== original) {
    content = addImport(content)
    fs.writeFileSync(file, content)
    fileCount += 1
    console.log(path.relative(root, file))
  }
}

console.log(`Updated ${fileCount} files.`)
