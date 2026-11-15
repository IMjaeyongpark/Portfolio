import gisBuildingArchitecture from '../assets/projects/gis-3d-building-kt-cloud-architecture.png'
import gisOptimized from '../assets/projects/gis-3d-building-kt-cloud-architecture.webp'
import { sortProjects } from './sortProjects'

const miniProjectItems = [
  {
    slug: 'gis-3d-building',
    experience: '실무',
    status: '이전·유지보수 담당 업무 완료',
    outcome: '담당 서비스의 Helm 차트 작성 및 KT Cloud Kubernetes 배포',
    tone: 'blue',
    title: 'GIS·3D 건물정보 서비스 유지보수',
    description: '온프레미스 Docker Compose 서비스를 KT Cloud Kubernetes로 이전하는 업무에서 배포 설정 전환과 백엔드 유지보수를 맡았습니다.',
    period: '2026.03 — 2026.05',
    skills: ['Kubernetes', 'Helm', 'KT Cloud', 'Docker', 'Nginx', 'NestJS', 'VWorld API'],
    purpose: '온프레미스 MSA 서비스를 KT Cloud Kubernetes 환경으로 이전하는 실무 프로젝트입니다.',
    role: [
      '배포 환경 전환 — Compose 구성 분석, Kubernetes 리소스·Helm 차트 작성 및 KT Cloud 배포',
      '백엔드 유지보수 — NestJS 기능 수정 및 VWorld WFS 데이터 3종 프록시 연동',
    ],
    workflow: ['Compose 서비스 구성 분석', 'Kubernetes 리소스 전환', '서비스별 Helm 차트 작성', 'KT Cloud 배포'],
    details: [
      'Compose와 MSA 구조에서 서비스별 실행·연결 구성을 확인한 뒤 Kubernetes 리소스로 전환했습니다. 전환한 설정은 서비스별 Helm 차트로 묶어 배포 단위를 관리했습니다.',
      '기존 NestJS 구조를 분석해 필요한 기능을 수정하고, 건축물대장 관련 VWorld WFS 데이터 3종을 백엔드 프록시로 연동했습니다.',
    ],
    troubleshooting: [],
    github: '',
    architecture: gisBuildingArchitecture,
    architectureOptimized: gisOptimized,
    architectureWidth: 977,
    architectureHeight: 619,
    architectureAlt: 'KT Cloud Kubernetes 기반 GIS·3D 건물정보 서비스 아키텍처',
    images: [],
  },
  {
    slug: 'national-park-databank',
    cover: { icon: 'server', title: '데이터 파일 제공', subtitle: 'CSV 분할 · 저장 공간 관리' },
    experience: '실무',
    status: '하자보수 담당 업무 완료',
    outcome: 'NFS 공간 확보·과거 파일 압축·분리 후 저장 디렉터리 사용률 약 98% → 20%',
    tone: 'orange',
    title: '국립공원 데이터뱅크 플랫폼 하자보수',
    description: '대용량 CSV의 Excel 열람 문제와 정기 파일 생성에 필요한 저장 공간 부족에 대응했습니다.',
    period: '2026.02 — 2026.08',
    skills: ['Spring Batch', 'NFS', 'PostgreSQL', 'Spring', 'JSP'],
    purpose: 'PostgreSQL 데이터를 Spring Batch로 정기 추출하고 사용자가 파일을 내려받는 플랫폼입니다.',
    role: [
      '배치·웹 유지보수 — CSV 분할·ZIP 생성 및 Spring·JSP 조회·다운로드 기능 개선',
      '서버 저장 공간 관리 — NFS 연결 및 과거 파일 정리',
    ],
    troubleshooting: [
      {
        problem: '수백만 건의 데이터를 하나의 CSV 파일로 제공해 Excel의 행 제한을 초과하면서 전체 데이터를 확인할 수 없었습니다.',
        solution: 'Spring Batch의 추출·파일 생성 흐름과 JSP 다운로드 경로를 분석했습니다. 데이터를 50만 건 단위의 CSV로 분할하고 하나의 ZIP으로 내려받도록 연결 부분을 수정했습니다.',
        result: '사용자가 ZIP 파일을 한 번 내려받은 뒤 각 CSV를 Excel에서 열어 데이터를 나누어 확인할 수 있게 했습니다.',
      },
      {
        problem: '파일 저장 디렉터리 사용률이 약 98%에 도달해 정기 파일 생성에 필요한 공간이 부족해질 위험이 있었습니다.',
        solution: '파일 생성·조회 흐름과 관련 테이블에서 최신 파일의 참조 방식을 확인했습니다. NFS로 공간을 확보하고 과거 파일을 압축·분리했습니다.',
        result: '공간 확보와 파일 정리 후 기존 조회 기능을 확인했으며, 해당 디렉터리 사용률이 약 98%에서 20%로 낮아졌습니다.',
      },
    ],
    github: '',
    architecture: '',
    architectureAlt: '',
    images: [],
  },
  {
    slug: 'career-coach-chatbot',
    cover: { icon: 'backend', title: '면접 질문·학습 로드맵', subtitle: 'Spring Boot · Gemini API' },
    experience: '개인 프로젝트',
    icon: '🤖',
    tone: 'lime',
    title: '커리어 코치 챗봇 API 개발',
    description: '이력서를 바탕으로 면접 질문과 학습 로드맵을 제공하는 API를 구현했습니다.',
    period: '2025.08.09 — 2025.08.24',
    skills: ['Spring Boot', 'Java', 'JSP', 'Gemini API', 'WebClient'],
    status: '개인 개발 완료',
    role: [
      '백엔드·API 연동 — Spring Boot API·서비스 및 WebClient 기반 Gemini 호출·예외 처리',
      '웹 화면 개발 — JSP 입력·결과 화면 및 프롬프트 템플릿 구현',
    ],
    details: [
      '이력서·목표 직무·기술 스택을 프롬프트 템플릿에 반영하고 WebClient로 Gemini API를 호출했습니다. 템플릿으로 요청 내용과 응답 형식을 관리했습니다.',
      'JSP·JavaScript 화면에서 사용자 정보를 입력하고 생성된 결과와 Q&A를 확인하도록 연결했습니다.',
    ],
    troubleshooting: [],
    architecture: '',
    architectureAlt: '',
    images: [],
    links: [{ label: 'GitHub', url: 'https://github.com/IMjaeyongpark/AIChallenge' }],
    versionInfo: [
      { title: '공개 소스 설정 버전', description: 'Spring Boot 3.5.4 · Java 17 toolchain · Gradle Wrapper 8.14.3' },
    ],
    evidence: [
      { label: '챗봇 API · 프레임워크·Java 설정', url: 'https://github.com/IMjaeyongpark/AIChallenge/blob/ab2aaac9a36837ada1746a667bfcfad8eb8ce821/build.gradle', description: 'Spring Boot 3.5.4 · Java 17 toolchain 지정' },
      { supplemental: true, label: '챗봇 API · Gradle Wrapper 버전', url: 'https://github.com/IMjaeyongpark/AIChallenge/blob/ab2aaac9a36837ada1746a667bfcfad8eb8ce821/gradle/wrapper/gradle-wrapper.properties', description: 'Gradle 8.14.3 배포본 지정' },
      { label: '챗봇 API README', url: 'https://github.com/IMjaeyongpark/AIChallenge/blob/main/README.md', description: 'Gemini 연동 구조, API 요청·응답과 실행 방법' },
    ],
  },
]

export const miniProjects = sortProjects(miniProjectItems)
