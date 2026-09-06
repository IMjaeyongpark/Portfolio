import gitopsArchitecture from '../assets/projects/gitops-architecture.png'
import gisBuildingArchitecture from '../assets/projects/gis-3d-building-kt-cloud-architecture.png'
import gitopsPipeline from '../assets/projects/gitops-pipeline.png'
import streamingPartnerArchitecture from '../assets/projects/streaming-partner-architecture.png'

const getPeriodDates = (period) => {
  const dates = period.match(/\d{4}\.\d{2}/g) ?? []
  return dates.map((date) => Number(date.replace('.', '')))
}

const projectItems = [
  {
    slug: 'hyper-v-iac',
    tone: 'blue',
    title: 'Hyper-V 기반 사내 테스트 환경 IaC 구축',
    description: 'Rocky Linux 기반 WEB·WAS·DB VM의 생성부터 설정·운영까지 자동화한 Hyper-V IaC 환경',
    period: '2026.08 — 진행 중',
    skills: ['Hyper-V', 'Rocky Linux', 'Terraform', 'Ansible', 'Packer', 'PowerShell', 'IaC', 'AI Agent'],
    purpose: '사내 신규 프로젝트마다 Hyper-V에 WEB·WAS·DB VM을 반복적으로 생성·설정하던 작업을 자동화했습니다. servers.yml만 수정해 프로젝트별 서버 사양과 네트워크를 정의하고, 동일한 절차로 재생성·관리할 수 있는 IaC 환경을 구축했습니다.',
    role: [
      'Packer·Kickstart 기반 Rocky Linux 9.7 Base VHDX 생성 자동화',
      'Terraform·servers.yml 기반 프로젝트별 WEB·WAS·DB VM 3대 프로비저닝',
      'Ansible 기반 OS·네트워크·보안·Docker 설정 자동화',
      'PowerShell 기반 검증·생성·전원 관리·삭제 워크플로 구축',
      'AI Agent를 활용한 IaC 코드·스크립트·검증 로직 작성 및 보완',
    ],
    details: [
      'Rocky Linux ISO와 Kickstart로 Generation 2·Secure Boot 기반 무인 설치를 구성하고, Packer로 복제 가능한 Base VHDX를 생성했습니다.',
      'servers.yml을 단일 설정 지점으로 구성해 프로젝트별 VM 이름·CPU·메모리·디스크·IP를 선언하고, Terraform으로 VHDX 복제·확장과 VM 수명주기를 관리했습니다.',
      '관리용 DHCP NIC와 사내망 고정 IP NIC를 분리하고, Ansible로 네트워크·Docker·LVM/XFS 확장·SSH 9822·firewalld·SELinux 설정과 Kubernetes 구성을 위한 swap 비활성화를 적용했습니다.',
      'PowerShell 스크립트로 Packer 빌드, Terraform 적용, Hyper-V KVP 기반 관리 IP 탐색, Ansible 실행, VM 전원 관리와 Terraform 삭제를 하나의 워크플로로 연결했습니다.',
      '프로젝트별 Terraform 상태 파일을 분리하고 VM 이름·고정 IP·상태 파일 경로의 중복과 서브넷·리소스 설정을 사전에 검증하도록 구성했습니다.',
      'AI Agent로 자동화 코드·스크립트·문서의 초안을 작성하고, 실행 대상과 변경 내용을 직접 검토하며 안전장치와 검증 로직을 보완했습니다. 현재 시험 VM과 IP를 사용해 전체 워크플로를 검증 중입니다.',
    ],
    troubleshooting: [
      {
        problem: '신규 프로젝트를 수행할 때마다 WEB·WAS·DB 서버용 Hyper-V VM을 수동으로 반복 생성·설정해야 했습니다.',
        solution: 'Packer·Terraform·Ansible을 연결하고, 프로젝트별 서버 사양과 IP만 servers.yml에 선언하면 PowerShell 스크립트로 이미지 생성, VM 프로비저닝과 OS 설정을 수행할 수 있도록 구성했습니다.',
        result: '프로젝트당 WEB·WAS·DB VM 3대의 반복 생성·설정 작업을 코드로 전환해 동일한 테스트 환경을 재현하고, 프로젝트별 상태와 인프라 설정을 분리해 관리할 수 있는 기반을 마련했습니다.',
      },
    ],
    github: '',
    architecture: '',
    architectureAlt: '',
    images: [],
  },
  {
    slug: 'gitops-devops',
    tone: 'lime',
    title: 'GitOps 기반 DevOps 환경 구축',
    description: 'Jenkins·Nexus·Argo CD를 연결한 Kubernetes GitOps 배포 환경',
    period: '2026.06 — 2026.08',
    skills: ['GCP', 'Kubernetes', 'Jenkins', 'Nexus', 'Argo CD', 'Helm', 'Prometheus', 'Grafana', 'GitHub App'],
    purpose: '애플리케이션 변경사항을 Jenkins에서 빌드하고 Nexus에 저장한 뒤, Argo CD가 Kubernetes에 자동 배포하는 GitOps 환경을 구축했습니다.',
    role: [
      'GCP VM 기반 Kubernetes 클러스터 구성',
      'Jenkins 기반 백엔드·프론트엔드 빌드 파이프라인 구성',
      'Docker 이미지 빌드 및 Nexus Registry 연동',
      'Helm·Argo CD 기반 Kubernetes 자동 배포 구성',
      'Prometheus·Grafana 기반 모니터링 구성',
    ],
    details: [
      '애플리케이션 소스와 Kubernetes 배포 설정을 별도 GitHub 저장소로 분리했습니다.',
      'Jenkins에서 Spring Boot 백엔드를 빌드·테스트하고 React 프론트엔드를 빌드한 뒤, 각각 Docker 이미지로 생성해 Nexus에 저장했습니다.',
      'Git 커밋 ID를 이미지 태그로 사용하고 Jenkins가 Helm values.yaml의 이미지 태그를 변경하도록 구성했습니다.',
      'Argo CD가 매니페스트 변경을 감지해 Kubernetes에 자동 배포하도록 연결했습니다.',
      'Helm으로 프론트엔드·백엔드 복제본, Service, Ingress와 상태 확인 설정을 관리했습니다.',
      'Prometheus와 Grafana로 Kubernetes 클러스터와 애플리케이션 상태를 확인할 수 있게 구성했습니다.',
    ],
    troubleshooting: [
      {
        problem: 'Jenkins에서 Nexus와 GitHub 저장소에 접근하기 위한 인증 정보를 안전하게 관리해야 했습니다.',
        solution: 'Nexus 계정은 Jenkins Credentials로 관리하고, GitHub 연결에는 빌드 시 발급되는 GitHub App Token을 사용했습니다.',
        result: '비밀번호와 토큰을 Jenkinsfile에 직접 저장하지 않고 파이프라인에 주입하도록 구성했습니다.',
      },
    ],
    improvements: [
      '이 프로젝트는 애플리케이션 빌드부터 매니페스트 갱신과 Kubernetes 배포까지 이어지는 GitOps 전체 흐름을 검증하는 것이 목적이어서 백엔드와 프론트엔드를 하나의 Jenkins 파이프라인으로 구성했습니다. 실제 서비스 규모가 커지고 각 영역의 배포 주기가 달라질 경우 백엔드·프론트엔드별 파이프라인으로 분리할 수 있도록 디렉터리와 Docker 이미지는 구분해 관리했습니다.',
    ],
    github: '',
    links: [
      { label: 'Application', url: 'https://github.com/IMjaeyongpark/deploy-history-app' },
      { label: 'Manifest', url: 'https://github.com/IMjaeyongpark/deploy-history-manifest' },
      { label: 'Project Article', url: 'https://undergrounddev.tistory.com/19' },
      { label: 'Figma', url: 'https://www.figma.com/design/5l6SJI7bQfSXs783Fsslby/Untitled?node-id=0-1&t=HSZxkm7IFNteKsCM-1' },
    ],
    architecture: gitopsArchitecture,
    architectureAlt: 'GCP Kubernetes, Jenkins, Nexus, Argo CD, Prometheus, Grafana로 구성한 GitOps CI/CD Architecture',
    images: [
      {
        src: gitopsPipeline,
        alt: 'Code Push부터 Jenkins CI, Nexus Image Push, Argo CD Sync, Kubernetes 배포, Monitoring으로 이어지는 Pipeline',
        caption: 'GitOps CI/CD Pipeline',
      },
    ],
  },
  {
    slug: 'gis-3d-building',
    tone: 'blue',
    title: 'GIS·3D 건물정보 서비스 유지보수',
    description: '온프레미스 MSA를 KT Cloud Kubernetes로 이전하고 배포 구조를 개선한 서비스',
    period: '2026.03 — 2026.05',
    skills: ['NestJS', 'VWorld API', 'Docker', 'Kubernetes', 'Helm', 'KT Cloud', 'Nginx'],
    purpose: '온프레미스 서버에서 Docker Compose로 운영되던 MSA 기반 GIS·3D 건물정보 서비스를 KT Cloud Kubernetes 환경으로 이전하고 안정적인 배포·운영 구조를 마련했습니다.',
    role: [
      'NestJS 백엔드 분석 및 유지보수',
      'VWorld WFS 데이터 3종 프록시 연동',
      '기존 Docker Compose 기반 MSA 구조 분석',
      'KT Cloud Kubernetes·Helm 배포 환경 구성',
    ],
    details: [
      'VWorld API로 건축물대장 정보 관련 WFS 데이터 3종을 프록시 방식으로 연동했습니다.',
      '온프레미스의 Docker Compose 설정과 MSA 서비스 구조를 분석해 Kubernetes 리소스로 전환했습니다.',
      'Helm 차트로 서비스별 배포 설정을 관리하고 KT Cloud Kubernetes 환경에 MSA를 배포했습니다.',
      'AI 개발 도구로 낯선 NestJS 코드베이스를 빠르게 파악하고 필요한 기능을 구현했습니다.',
    ],
    troubleshooting: [],
    github: '',
    architecture: gisBuildingArchitecture,
    architectureAlt: 'KT Cloud Kubernetes 기반 GIS·3D 건물정보 서비스 아키텍처',
    images: [],
  },
  {
    slug: 'public-data-open-api',
    tone: 'violet',
    title: '공공데이터 Open API 시스템',
    description: '공공데이터 수집·가공·개방을 위한 ETL과 API 운영 시스템',
    period: '2025.10 — 2026.05',
    skills: ['Spring Boot', 'Spring Batch', 'PostgreSQL', 'Docker', 'Rocky Linux', 'React', 'Nginx'],
    purpose: '공공 데이터를 수집·가공하고, 공공데이터포털을 통해 Open API로 제공하는 시스템을 구축했습니다.',
    role: [
      'Spring Batch 기반 대용량 ETL 스케줄링 구성',
      '온프레미스 Rocky Linux 서버 기반 서비스 배포·운영',
      'React 기반 API 데이터 관리 화면 개발',
      'Nginx 프록시와 API 라우팅 운영',
    ],
    details: [
      'Spring Batch로 대용량 데이터의 수집·정제·적재 작업을 정기적으로 실행하도록 구성했습니다.',
      'React로 API 데이터를 조회하고 관리할 수 있는 운영 화면을 개발했습니다.',
      '애플리케이션을 Docker 이미지로 구성해 온프레미스 Rocky Linux 서버에 배포하고 운영했습니다.',
      'DMZ·내부망 분리 환경에서 Nginx 리버스 프록시로 트래픽을 중계하고, 네트워크·포트·방화벽 설정을 확인하며 연동 이슈에 대응했습니다.',
      '개방된 API의 운영 이슈에 대응하고 기능을 개선하며 서비스 안정성을 유지했습니다.',
    ],
    troubleshooting: [
      {
        problem: '40억 건 이상의 데이터가 저장된 테이블 조회에 1분 이상이 소요되어 HTTP 504 Gateway Timeout이 발생했습니다.',
        solution: '주요 조회 조건과 사용 패턴을 기준으로 필요한 컬럼에 인덱스를 적용해 대용량 테이블의 조회 성능을 개선했습니다.',
        result: '1분 이상 걸리던 조회 시간을 3초 이하로 단축하고 API 타임아웃을 해소했습니다.',
      },
    ],
    github: '',
    architecture: '',
    architectureAlt: '',
    images: [],
  },
  {
    slug: 'national-park-databank',
    tone: 'orange',
    title: '국립공원 데이터뱅크 플랫폼 하자보수',
    description: '대용량 공원 데이터의 정기 추출·다운로드 기능 개선과 저장 공간 안정화',
    period: '2026.02 — 2026.08',
    skills: ['Spring', 'JSP', 'PostgreSQL', 'Spring Batch', 'NFS'],
    purpose: 'PostgreSQL 테이블에 적재된 국립공원 데이터를 주기적으로 파일로 생성하고, 사용자가 웹에서 다운로드할 수 있는 데이터뱅크 시스템을 하자보수했습니다.',
    role: [
      'Spring·JSP 기반 기존 시스템 구조 분석 및 하자보수',
      'Spring Batch 기반 정기 데이터 추출 기능 개선',
      '대용량 CSV 분할·ZIP 다운로드 구조 구성',
      'NFS 기반 파일 저장 공간 확장 및 관리',
    ],
    details: [
      'Spring Batch가 PostgreSQL 테이블의 데이터를 주기적으로 추출해 CSV 파일을 생성하도록 구성했습니다.',
      'JSP 기반 웹 화면에서 사용자가 생성된 데이터 파일을 조회하고 다운로드할 수 있도록 기존 기능을 분석·개선했습니다.',
      '파일 생성·조회 흐름과 관련 데이터베이스 테이블 구조를 파악해 대용량 파일 처리 방식을 개선했습니다.',
    ],
    troubleshooting: [
      {
        problem: '약 300만 건의 데이터를 하나의 CSV 파일로 생성해 Excel에서 열 경우, Excel의 최대 행 제한을 초과해 전체 데이터를 확인할 수 없었습니다.',
        solution: '데이터를 50만 건 단위의 여러 CSV 파일로 분할 생성하고, 생성된 파일을 하나의 ZIP 파일로 압축해 다운로드하도록 구조를 변경했습니다.',
        result: 'Excel에서 각 파일을 정상적으로 열어 전체 데이터를 확인할 수 있게 했고, 대용량 데이터의 다운로드 편의성을 개선했습니다.',
      },
      {
        problem: '용량 500GB의 파일 저장 디렉터리 사용률이 약 98%에 도달해 정기 파일 생성과 서비스 운영에 영향을 줄 위험이 있었습니다.',
        solution: '다른 서버의 저장 공간을 NFS로 연결해 용량을 확보한 뒤, 파일 생성·조회 구조와 관련 테이블을 분석했습니다. 서비스에서는 최신 파일만 사용하는 것을 확인하고 과거 파일을 압축해 별도 백업 디렉터리에 관리했습니다.',
        result: '기존 파일 조회 기능을 유지하면서 저장 디렉터리 사용률을 약 98%에서 20% 수준으로 낮춰 안정적인 파일 생성 공간을 확보했습니다.',
      },
    ],
    github: '',
    architecture: '',
    architectureAlt: '',
    images: [],
  },
  {
    slug: 'streaming-partner',
    tone: 'cyan',
    title: '나의 방송파트너',
    description: '3개 방송 플랫폼 채팅 통합과 AI 감정 분석 서비스',
    period: '2023.03 — 2024.06',
    skills: ['Spring Boot', 'Flask', 'Python', 'SSE', 'JWT', 'PostgreSQL', 'MongoDB Atlas', 'AWS EC2', 'GitHub Actions'],
    purpose: '유튜브·치지직·숲의 실시간 채팅을 하나로 통합하고, AI 감정 분석으로 방송 분위기와 하이라이트를 파악할 수 있는 플랫폼을 개발했습니다.',
    role: [
      'Spring Boot 기반 백엔드 시스템 구축',
      'Flask·SSE 기반 실시간 채팅 통합 API 설계·구현',
      'JWT 인증과 데이터베이스 설계·구축',
      'AWS EC2·GitHub Actions CI/CD 구축',
    ],
    details: [
      '유튜브·치지직·숲 채팅을 동시 처리하는 통합 API를 직접 설계·구현했습니다.',
      'SSE로 실시간 채팅과 AI 감정 분석 데이터를 클라이언트에 단방향으로 전송했습니다.',
      'MongoDB Atlas, PostgreSQL, AWS RDS를 활용해 데이터 성격에 맞는 저장 구조를 설계했습니다.',
      '결과물을 바탕으로 논문 3편을 작성했고, 교내외 공모전에서 대상을 포함해 총 10회 수상했습니다.',
    ],
    troubleshooting: [
      {
        problem: '서로 다른 방식으로 제공되는 3개 방송 플랫폼의 채팅을 하나의 화면에 실시간으로 전달해야 했습니다.',
        solution: '플랫폼별 채팅 수집 로직을 Flask API에서 통합하고, 공통 형식으로 변환한 데이터를 SSE로 클라이언트에 전송하도록 구성했습니다.',
        result: '유튜브·치지직·숲 채팅을 동시에 확인하고 AI 감정 분석과 연계할 수 있는 실시간 채팅 시스템을 구축했습니다.',
      },
    ],
    github: '',
    links: [
      { label: 'Spring Backend', url: 'https://github.com/IMjaeyongpark/MyBroadcastPartner-Spring' },
      { label: 'Flask Chat API', url: 'https://github.com/IMjaeyongpark/MyBroadcastPartner-Flask' },
      { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=g4iZemAs8WM' },
    ],
    video: {
      youtubeId: 'g4iZemAs8WM',
      title: '라이브 채팅 감정 분석 기술 프로젝트 소개 영상',
    },
    architecture: streamingPartnerArchitecture,
    architectureAlt: 'AWS 기반 나의 방송파트너 서비스 아키텍처',
    images: [],
  },
]

export const projects = projectItems.sort((a, b) => {
  const aDates = getPeriodDates(a.period)
  const bDates = getPeriodDates(b.period)
  const endDateDifference = (bDates.at(-1) ?? 0) - (aDates.at(-1) ?? 0)

  if (endDateDifference !== 0) return endDateDifference

  return (bDates[0] ?? 0) - (aDates[0] ?? 0)
})
