export const careerItems = [
  {
    organization: '(주)제타럭스시스템',
    role: 'Backend & DevOps Engineer',
    period: '2025.10 — 재직 중',
    summary: '공공·공간정보 서비스의 배포·운영, Kubernetes 이전과 테스트 VM 생성 자동화를 담당했습니다. 백엔드 개발 경험을 바탕으로 API 연동·조회 성능·저장 공간 문제에도 대응했습니다.',
    experiences: [
      {
        title: 'Hyper-V 테스트 VM 생성·설정 자동화',
        period: '2026.08 — 2026.09',
        description: '프로젝트마다 반복하던 VM 생성과 초기 설정을 Packer·Terraform·Ansible로 자동화했습니다. 현재 사내 테스트 서버에 도입해 사용 테스트 중입니다.',
      },
      {
        title: '국립공원 데이터뱅크 플랫폼 하자보수',
        period: '2026.02 — 2026.08',
        description: '파일 생성·조회 흐름을 분석하고, NFS 연결과 과거 파일 압축·분리 후 기존 조회 기능을 확인했습니다. 해당 저장 디렉터리 사용률은 약 98%에서 20%로 낮췄습니다.',
      },
      {
        title: 'GIS·3D 건물정보 서비스 유지보수',
        period: '2026.03 — 2026.05',
        description: '온프레미스 MSA의 클라우드 이전 업무에서 Docker Compose 설정 분석, Kubernetes 리소스·Helm 차트 작성과 KT Cloud 배포를 담당했습니다.',
      },
      {
        title: '공공데이터 Open API 배포·운영 및 성능 개선',
        period: '2025.10 — 2026.05',
        description: '온프레미스 배포와 API 중계를 담당하고, PostgreSQL 인덱스 적용으로 504 타임아웃이 발생하던 특정 조회를 1분 이상에서 3초 이하로 줄였습니다.',
      },
    ],
  },
]
