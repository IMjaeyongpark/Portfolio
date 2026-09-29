import gitopsArchitecture from '../assets/projects/gitops-architecture.png'
import gisBuildingArchitecture from '../assets/projects/gis-3d-building-kt-cloud-architecture.png'
import gitopsPipeline from '../assets/projects/gitops-pipeline.png'
import streamingPartnerArchitecture from '../assets/projects/streaming-partner-architecture.png'
import hypervIacArchitecture from '../assets/projects/hyperv-iac-architecture.png'

const getPeriodDates = (period) => {
  const dates = period.match(/\d{4}\.\d{2}/g) ?? []
  return dates.map((date) => Number(date.replace('.', '')))
}

const projectItems = [
  {
    slug: 'hyper-v-iac',
    tone: 'blue',
    title: 'Hyper-V 테스트 VM 생성·설정 자동화',
    description: '프로젝트마다 반복하던 WEB·WAS·DB 서버 준비를 IaC로 전환',
    period: '2026.08 — 2026.09',
    skills: ['Hyper-V', 'Rocky Linux', 'Terraform', 'Ansible', 'Packer', 'PowerShell', 'IaC'],
    purpose: '신규 프로젝트마다 수동으로 준비하던 WEB·WAS·DB 테스트 VM의 생성과 초기 설정을 자동화했습니다. 서버 사양과 설정을 코드로 재사용할 수 있도록 구성했으며, 현재 사내 테스트 서버에 도입해 사용 테스트 중입니다.',
    role: [
      'Terraform·PowerShell 기반 VM 생성·변경·삭제 자동화',
      'Packer 기본 이미지와 Ansible 초기 설정 구성',
      '프로젝트별 서버 설정·Terraform 상태 분리',
      '설정 중복·기존 VM 충돌을 확인하는 검증 로직 작성',
    ],
    details: [
      '반복 설치에 사용할 Rocky Linux 기본 이미지를 Packer·Kickstart로 만들고, VM별 사양과 IP는 servers.yml에서 관리하도록 구성했습니다.',
      'Terraform에서 로컬 PowerShell을 실행해 기본 디스크를 복제하고 Hyper-V VM을 생성하도록 연결했습니다.',
      'Ansible 제어 VM에서 고정 IP·Docker·디스크 확장·SSH·방화벽 설정을 적용하도록 구성했습니다.',
      '프로젝트별 Terraform 상태를 분리하고, 중복된 VM 이름·IP와 관리 대상이 아닌 VM·디스크의 충돌을 적용 전에 확인하도록 했습니다.',
      'VM 설정 재적용 시 기존 VM이 삭제되지 않도록 생성·삭제 관리와 설정 적용을 분리하고, 관련 모의 테스트를 작성했습니다.',
    ],
    challenges: [
      {
        problem: '프로젝트마다 VM 생성과 OS 초기 설정을 반복해야 했고, 서버별 사양과 설정을 한곳에서 관리할 필요가 있었습니다.',
        solution: '공통 OS 설정은 기본 이미지로 준비하고, 프로젝트별 사양과 IP는 servers.yml에 선언해 VM 생성과 Ansible 설정으로 이어지도록 구성했습니다.',
        result: '서버 준비 과정을 코드로 재사용할 수 있게 했습니다. 현재 사내 테스트 서버에서 VM 생성·설정·삭제 흐름을 사용 테스트 중입니다.',
      },
    ],
    github: 'https://github.com/IMjaeyongpark/rocky-hyperv-template',
    architecture: hypervIacArchitecture,
    architectureAlt: 'Packer로 Rocky Linux 기본 이미지를 만들고 Terraform과 Ansible로 Hyper-V 가상 머신을 구성하는 IaC 흐름',
    images: [],
  },
  {
    slug: 'gitops-devops',
    tone: 'lime',
    title: 'Kubernetes GitOps 배포 파이프라인 구축',
    description: '코드 변경부터 이미지 빌드·배포 설정 갱신·클러스터 반영까지 자동화',
    period: '2026.06 — 2026.08',
    skills: ['GCP', 'Kubernetes', 'Jenkins', 'Nexus', 'Argo CD', 'Helm', 'Prometheus', 'Grafana', 'GitHub App'],
    purpose: 'Git의 배포 설정을 기준으로 애플리케이션 변경이 Kubernetes까지 반영되는 과정을 직접 구성했습니다. Jenkins는 빌드와 이미지 저장, 배포 설정 갱신을 맡고 Argo CD는 클러스터 반영을 맡도록 역할을 나눴습니다.',
    role: [
      'Jenkins·Nexus 기반 빌드·이미지 저장 파이프라인 구성',
      'Helm·Argo CD 기반 GitOps 배포 자동화',
      'GCP VM 기반 Kubernetes 클러스터 구성',
      'Prometheus·Grafana 기반 모니터링 구성',
    ],
    details: [
      '애플리케이션 소스와 배포 설정을 별도 저장소로 나누고, 배포할 이미지 버전을 Git에서 관리하도록 구성했습니다.',
      'Jenkins에서 Spring Boot 백엔드를 빌드·테스트하고 React 프론트엔드를 빌드한 뒤, 각각 Docker 이미지로 만들어 Nexus에 저장했습니다.',
      '코드 버전과 배포 이미지를 연결할 수 있도록 Git 커밋 ID를 이미지 태그로 사용하고, Jenkins가 Helm values.yaml을 갱신하도록 했습니다.',
      'Argo CD가 배포 저장소의 변경을 감지해 Kubernetes에 반영하도록 연결하고, Helm으로 Service·Ingress·상태 확인 설정을 관리했습니다.',
      'Prometheus·Grafana를 연결해 Kubernetes 클러스터와 애플리케이션 상태를 확인할 수 있도록 구성했습니다.',
    ],
    challenges: [
      {
        problem: '이미지 저장과 배포 설정 갱신에 필요한 Nexus·GitHub 인증 정보를 파이프라인 코드와 분리해야 했습니다.',
        solution: 'Nexus 계정은 Jenkins Credentials에 등록하고, GitHub 접근에는 빌드 시 발급하는 GitHub App Token을 사용했습니다.',
        result: 'Jenkinsfile에 비밀번호와 토큰을 직접 작성하지 않고, 실행 시 주입해 이미지 저장과 배포 설정 갱신에 사용했습니다.',
      },
    ],
    improvements: [
      'GitOps 전체 흐름을 구성하는 데 집중해 백엔드와 프론트엔드를 하나의 Jenkins 파이프라인에서 빌드했습니다. 소스 디렉터리와 Docker 이미지는 분리해 두었으며, 배포 주기가 달라지면 파이프라인도 각각 구성하는 방향을 고려하고 있습니다.',
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
    description: '온프레미스 Docker Compose 기반 MSA를 KT Cloud Kubernetes로 이전',
    period: '2026.03 — 2026.05',
    skills: ['Kubernetes', 'Helm', 'KT Cloud', 'Docker', 'Nginx', 'NestJS', 'VWorld API'],
    purpose: '온프레미스에서 Docker Compose로 운영하던 GIS·3D 건물정보 서비스의 KT Cloud Kubernetes 이전을 담당했습니다. 기존 MSA 구조를 분석해 배포 설정을 전환하고, NestJS 백엔드 유지보수와 외부 공간정보 API 연동을 함께 수행했습니다.',
    role: [
      'Docker Compose 배포 설정의 Kubernetes 전환',
      '서비스별 Helm 차트 작성 및 KT Cloud 배포',
      '기존 MSA 서비스 구조와 배포 설정 분석',
      'NestJS 백엔드 유지보수 및 VWorld WFS 데이터 3종 프록시 연동',
    ],
    details: [
      '기존 Docker Compose 파일과 MSA 구조를 분석해 서비스별 배포 구성을 파악했습니다.',
      'Compose 기반 배포 설정을 Kubernetes 리소스로 옮기고, 서비스별 Helm 차트로 관리하도록 구성했습니다.',
      '작성한 Helm 차트를 사용해 KT Cloud Kubernetes 환경에 MSA 서비스를 배포했습니다.',
      'VWorld API의 건축물대장 정보 관련 WFS 데이터 3종을 백엔드에서 프록시 방식으로 연동했습니다.',
      '기존 NestJS 코드 구조를 분석하고 서비스 유지보수에 필요한 백엔드 기능을 구현했습니다.',
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
    title: '공공데이터 Open API 배포·운영 및 성능 개선',
    description: '온프레미스 배포와 망 분리 환경의 API 중계, 대용량 조회 타임아웃 개선',
    period: '2025.10 — 2026.05',
    skills: ['Docker', 'Rocky Linux', 'Nginx', 'PostgreSQL', 'Spring Boot', 'Spring Batch', 'React'],
    purpose: '공공데이터를 수집·가공해 Open API로 제공하는 시스템의 개발과 온프레미스 배포·운영을 담당했습니다. DMZ·내부망 사이의 API 연동을 구성하고, 대용량 조회에서 발생한 타임아웃을 개선했습니다.',
    role: [
      'Docker·Rocky Linux 기반 온프레미스 배포·운영',
      'Nginx API 중계 및 망 분리 환경의 연동 문제 대응',
      'PostgreSQL 인덱스 적용을 통한 조회 성능 개선',
      'Spring Batch 기반 데이터 수집·정제·적재 자동화',
      'React 기반 API 데이터 관리 화면 개발',
    ],
    details: [
      '애플리케이션을 Docker 이미지로 구성해 온프레미스 Rocky Linux 서버에 배포하고 운영했습니다.',
      'DMZ·내부망 사이에서 Nginx로 API 요청을 중계하고, 연동 문제가 발생하면 포트·방화벽 설정을 점검했습니다.',
      '주요 조회 조건에 맞춰 PostgreSQL 인덱스를 적용해 1분 이상 걸리던 대용량 테이블 조회를 3초 이하로 줄였습니다.',
      'Spring Batch로 데이터 수집·정제·적재를 정기 실행하고, React로 운영자가 데이터를 조회·관리하는 화면을 개발했습니다.',
    ],
    troubleshooting: [
      {
        problem: '40억 건 이상의 데이터가 저장된 테이블 조회에 1분 이상이 소요되어 HTTP 504 Gateway Timeout이 발생했습니다.',
        solution: '해당 요청의 조회 조건과 사용 패턴을 확인하고, 조건에 사용되는 컬럼에 PostgreSQL 인덱스를 적용했습니다.',
        result: '해당 조회 시간을 1분 이상에서 3초 이하로 줄이고, 이 조회에서 발생하던 API 타임아웃을 해소했습니다.',
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
    description: '대용량 CSV 다운로드 문제와 파일 저장 공간 부족 대응',
    period: '2026.02 — 2026.08',
    skills: ['Spring Batch', 'NFS', 'PostgreSQL', 'Spring', 'JSP'],
    purpose: '국립공원 데이터를 정기적으로 추출해 웹에서 제공하는 데이터뱅크 플랫폼의 하자보수를 담당했습니다. 대용량 CSV를 Excel에서 확인하지 못하는 문제와 파일 저장 공간 부족에 대응했습니다.',
    role: [
      'CSV 50만 건 단위 분할·ZIP 다운로드 개선',
      'NFS 연결과 과거 파일 정리를 통한 저장 공간 확보',
      'Spring Batch 정기 추출·파일 관리 구조 분석 및 개선',
      'Spring·JSP 기반 조회·다운로드 기능 유지보수',
    ],
    details: [
      '기존 Spring Batch의 PostgreSQL 데이터 추출과 파일 생성 흐름을 분석해 CSV 분할 처리를 적용했습니다.',
      '한 번에 생성하던 CSV를 50만 건 단위로 나누고, 하나의 ZIP 파일로 내려받도록 변경했습니다.',
      'JSP 조회·다운로드 화면을 변경한 파일 제공 구조에 맞춰 개선했습니다.',
      'NFS로 다른 서버의 저장 공간을 연결한 뒤, 서비스가 최신 파일을 참조하는 구조를 확인하고 과거 파일은 압축해 별도 백업 디렉터리로 분리했습니다.',
    ],
    troubleshooting: [
      {
        problem: '수백만 건의 데이터를 하나의 CSV 파일로 제공해 Excel의 행 제한을 초과하면서 전체 데이터를 확인할 수 없었습니다.',
        solution: '데이터를 50만 건 단위의 여러 CSV 파일로 분할 생성하고, 생성된 파일을 하나의 ZIP 파일로 압축해 다운로드하도록 구조를 변경했습니다.',
        result: '사용자가 ZIP 파일을 한 번 내려받은 뒤 각 CSV를 Excel에서 열어 데이터를 나누어 확인할 수 있게 했습니다.',
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
    description: '3개 플랫폼의 실시간 채팅 API 통합과 Spring 백엔드 배포 자동화',
    period: '2023.03 — 2024.06',
    skills: ['AWS EC2', 'GitHub Actions', 'AWS CodeDeploy', 'AWS S3', 'Spring Boot', 'Flask', 'Python', 'SSE', 'JWT', 'PostgreSQL', 'MongoDB Atlas'],
    purpose: '유튜브·치지직·숲 채팅을 한 화면에서 확인하는 서비스의 백엔드와 배포 환경을 담당했습니다. Flask 채팅 API와 Spring Boot API를 구성하고, 외부 감정 분석 API 연동과 EC2 배포 자동화를 구현했습니다.',
    role: [
      'GitHub Actions·S3·CodeDeploy 기반 EC2 배포 자동화',
      'Flask·SSE 기반 플랫폼별 실시간 채팅 API 구현',
      'Spring Boot 기반 인증·방송 데이터 관리 API 구현',
      'MongoDB·PostgreSQL 저장 구조 및 외부 분석 API 연동',
    ],
    details: [
      'GitHub Actions에서 Spring 애플리케이션을 빌드하고, 결과물을 S3에 저장한 뒤 CodeDeploy로 EC2에 배포하도록 연결했습니다.',
      '환경 설정은 GitHub Actions Secrets에서 주입하고, 설치·시작 절차는 CodeDeploy의 배포 단계별 스크립트로 관리했습니다.',
      '플랫폼별 채팅 수집 API를 Flask로 구성하고, 수집한 채팅을 SSE로 클라이언트에 전달했습니다.',
      '유튜브·치지직 채팅에 외부 감정 분석 API를 연동해 분석 결과를 채팅 데이터와 함께 전달했습니다.',
      'Spring Boot에서 JWT 인증·토큰 재발급·방송 데이터 관리 API를 구현하고, MongoDB와 PostgreSQL에 데이터를 저장하도록 구성했습니다.',
    ],
    achievements: [
      '결과물을 바탕으로 논문 3편을 작성했고, 교내외 공모전에서 대상을 포함해 총 10회 수상했습니다.',
    ],
    challenges: [
      {
        problem: '서로 다른 방식으로 제공되는 3개 방송 플랫폼의 채팅을 하나의 화면에 실시간으로 전달해야 했습니다.',
        solution: '플랫폼별 수집 로직은 각각 구성하고, 클라이언트에는 SSE로 채팅을 전달하도록 연결했습니다. 유튜브·치지직 채팅에는 외부 감정 분석 결과도 함께 전달했습니다.',
        result: '클라이언트가 플랫폼별 API를 통해 실시간 채팅을 받아 한 화면에서 확인할 수 있는 백엔드를 구성했습니다.',
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
