import {
  ArrowRight, ExternalLink, GitFork, X, Menu, Mail, CodeXml, Database,
  GitBranch, Box, Server, Cloud, User, Calendar, MapPin, BriefcaseBusiness,
  GraduationCap, BadgeCheck,
} from 'lucide-react'

const icons = {
  arrow: ArrowRight, external: ExternalLink, github: GitFork, close: X, menu: Menu,
  mail: Mail, backend: CodeXml, database: Database, devops: GitBranch, iac: Box,
  server: Server, cloud: Cloud, user: User, calendar: Calendar, location: MapPin,
  briefcase: BriefcaseBusiness, education: GraduationCap, certificate: BadgeCheck,
}

export default function Icon({ name, size = 18, className = '' }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component aria-hidden="true" size={size} strokeWidth={1.75} className={className} />
}
