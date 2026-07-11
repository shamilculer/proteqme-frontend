import {
  Activity,
  BadgeCheck,
  BadgeDollarSign,
  Banknote,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  Gem,
  Globe2,
  GraduationCap,
  HandHeart,
  Landmark,
  Layers,
  LineChart,
  Lock,
  MonitorPlay,
  Scale,
  SearchCheck,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
  Workflow,
  Globe,
  Coins,
  Brain,
} from 'lucide-react'
import * as LucideIcons from 'lucide-react'

/** Map CMS icon string keys to Lucide components */
export const iconMap = {
  shield: Shield,
  shieldCheck: ShieldCheck,
  graduation: GraduationCap,
  globe: Globe,
  building: Building2,
  checkCircle: CheckCircle2,
  searchCheck: SearchCheck,
  userCheck: UserCheck,
  clipboardCheck: ClipboardCheck,
  fileCheck: FileCheck2,
  target: Target,
  users: Users,
  monitorPlay: MonitorPlay,
  landmark: Landmark,
  badgeDollar: BadgeDollarSign,
  walletCards: WalletCards,
  banknote: Banknote,
  gem: Gem,
  handHeart: HandHeart,
  bot: Bot,
  trendUp: TrendingUp,
  sparkles: Sparkles,
  layers: Layers,
  lineChart: LineChart,
  coins: Coins,
  brain: Brain,
  lock: Lock,
  activity: Activity,
  workflow: Workflow,
  scale: Scale,
  cpu: Cpu,
  globe2: Globe2,
  briefcase: BriefcaseBusiness,
  badgeCheck: BadgeCheck,
}

export const iconSelectOptions = [
  { label: 'Shield', value: 'shield' },
  { label: 'Shield check', value: 'shieldCheck' },
  { label: 'Graduation', value: 'graduation' },
  { label: 'Globe', value: 'globe' },
  { label: 'Building', value: 'building' },
  { label: 'Check circle', value: 'checkCircle' },
  { label: 'Search check', value: 'searchCheck' },
  { label: 'User check', value: 'userCheck' },
  { label: 'Clipboard', value: 'clipboardCheck' },
  { label: 'File check', value: 'fileCheck' },
  { label: 'Target', value: 'target' },
  { label: 'Users', value: 'users' },
  { label: 'Monitor', value: 'monitorPlay' },
  { label: 'Landmark', value: 'landmark' },
  { label: 'Badge dollar', value: 'badgeDollar' },
  { label: 'Wallet cards', value: 'walletCards' },
  { label: 'Banknote', value: 'banknote' },
  { label: 'Gem', value: 'gem' },
  { label: 'Hand heart', value: 'handHeart' },
  { label: 'Bot', value: 'bot' },
  { label: 'Trend up', value: 'trendUp' },
  { label: 'Sparkles', value: 'sparkles' },
  { label: 'Layers', value: 'layers' },
  { label: 'Line chart', value: 'lineChart' },
  { label: 'Coins', value: 'coins' },
  { label: 'Brain', value: 'brain' },
  { label: 'Lock', value: 'lock' },
  { label: 'Activity', value: 'activity' },
  { label: 'Workflow', value: 'workflow' },
  { label: 'Scale', value: 'scale' },
  { label: 'CPU', value: 'cpu' },
  { label: 'Globe 2', value: 'globe2' },
  { label: 'Briefcase', value: 'briefcase' },
  { label: 'Badge check', value: 'badgeCheck' },
]

function toLucideExportName(key) {
  if (!key || typeof key !== 'string') return null
  return key.charAt(0).toUpperCase() + key.slice(1)
}

export function resolveIcon(key, fallback = CheckCircle2) {
  if (!key) return fallback
  if (iconMap[key]) return iconMap[key]

  const exportName = toLucideExportName(key)
  if (exportName && LucideIcons[exportName]) {
    return LucideIcons[exportName]
  }

  return fallback
}
