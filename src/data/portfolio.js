export const portfolio = {
  name: '박재용',
  brand: 'PORTFOLIO',
  role: 'Backend & DevOps Developer',
  intro: '개발과 운영을 연결해\n안정적인 배포 환경을 만듭니다',
  supportingText: '배포와 인프라 운영을 자동화하는 DevOps 엔지니어입니다.',
  projectLinkLabel: '프로젝트 살펴보기',
  homeCaption: 'Development · Deployment · Operations',
  focusTitle: 'What I work on',
  focusAreas: [
    { title: 'Backend', description: 'Spring 기반 서비스 개발과 운영 문제 해결' },
    { title: 'Delivery', description: 'Kubernetes 배포 환경과 GitOps 파이프라인 구축' },
    { title: 'Infrastructure', description: 'Terraform·Ansible·Packer로 반복 작업 자동화' },
  ],
  github: 'https://github.com/IMjaeyongpark',
  links: [
    { label: 'Tech Blog', url: 'https://undergrounddev.tistory.com/' },
  ],
}

export const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects', paths: ['/projects/', '/mini-projects/'] },
  { label: 'AI Workspace', href: '#ai-environment' },
  { label: 'Career', href: '#career' },
]
