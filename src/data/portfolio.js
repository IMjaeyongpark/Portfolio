export const portfolio = {
  name: '박재용',
  brand: 'PORTFOLIO',
  role: 'DevOps Engineer · Backend Experience',
  intro: '백엔드와 운영 경험을 바탕으로\n배포 환경과 반복 작업을 개선합니다',
  supportingText: '실서비스의 Kubernetes 이전과 운영 문제 개선을 담당했습니다. 사내 테스트 서버에는 VM 생성 자동화를 도입해 사용 테스트 중이며, 개인 환경에서는 GitOps 배포 흐름을 구축했습니다.',
  projectLinkLabel: '프로젝트 살펴보기',
  homeCaption: 'Development · Deployment · Operations',
  focusTitle: 'Experience in practice',
  focusAreas: [
    { title: '실무 · 배포 환경 이전', description: 'Docker Compose 서비스를 KT Cloud Kubernetes·Helm으로 이전' },
    { title: '사내 테스트 · VM 자동화', description: 'Packer·Terraform·Ansible로 서버 준비를 코드화하고 사용 테스트 중' },
    { title: '개인 프로젝트 · GitOps', description: 'Jenkins 빌드와 Nexus 이미지 저장을 Argo CD 배포로 연결' },
    { title: '실무 · 운영 문제 개선', description: '대용량 조회 타임아웃과 파일 저장 공간 부족 문제 대응' },
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
  { label: 'Career', href: '#career' },
  { label: 'AI Workspace', href: '#ai-environment' },
]
