import { projects } from './projects'
import { miniProjects } from './miniProjects'

const projectBySlug = new Map([...projects, ...miniProjects].map((project) => [project.slug, project]))
const projectExperience = (slug, description) => {
  const project = projectBySlug.get(slug)
  return { title: project.title, period: project.period, maintenancePeriod: project.maintenancePeriod, description }
}

export const careerItems = [
  {
    organization: '(주)제타럭스시스템',
    role: '백엔드 개발 · 배포·운영 업무 병행',
    period: '2025.10 — 재직 중',
    summary: '공공·공간정보 서비스의 배포·운영, Kubernetes 이전과 테스트 VM 생성 자동화를 담당했습니다. 백엔드 개발 경험을 바탕으로 API 연동과 저장 공간 문제에도 대응했습니다.',
    experiences: [
      projectExperience('subway-data-open', '온프레미스 폐쇄망의 애플리케이션 재배치·NiFi 분리 재구축과 공개 API·플로우 관리자 페이지 구현을 맡았습니다. 현재 실시간 데이터 적재, MariaDB → PostgreSQL 이관 및 WebtoB·JEUS 배포·시스템 연계 테스트를 진행하고 있습니다.'),
      projectExperience('hyper-v-iac', 'Packer·Terraform·Ansible로 테스트 VM 준비를 자동화했습니다. 사내 적용 버전은 Terraform·PowerShell 방식이며, 3개 프로젝트의 테스트 환경에 적용해 총 8개 VM을 생성·관리 중입니다.'),
      projectExperience('national-park-databank', '파일 생성·조회 흐름을 분석하고 NFS 공간 확보와 과거 파일 압축·분리를 진행했습니다. 기존 조회 기능을 확인한 뒤 저장 디렉터리 사용률이 약 98%에서 20%로 낮아진 것을 확인했습니다.'),
      projectExperience('gis-3d-building', '클라우드 이전 업무에서 Compose 설정 분석, Kubernetes 리소스·Helm 차트 작성과 KT Cloud 배포를 담당했습니다. NestJS 백엔드 유지보수와 외부 데이터 연동도 맡았습니다.'),
      projectExperience('public-data-open-api', '온프레미스 배포·운영, Nginx API 중계와 데이터 처리·화면 유지보수를 맡았습니다. 하자보수에서는 조회 조건에 맞춰 인덱스와 테이블 파티션 구조를 재설계했습니다.'),
    ],
  },
]
