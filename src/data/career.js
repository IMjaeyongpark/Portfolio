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
        description: 'CSV를 50만 건 단위로 분할해 ZIP으로 제공하고, NFS 연결과 과거 파일 정리로 저장 공간 부족에 대응했습니다.',
      },
      {
        title: 'GIS·3D 건물정보 서비스 유지보수',
        period: '2026.03 — 2026.05',
        description: '온프레미스 MSA의 Docker Compose 설정을 Kubernetes 리소스와 Helm 차트로 전환하고 KT Cloud Kubernetes에 배포했습니다.',
      },
      {
        title: '공공데이터 Open API 배포·운영 및 성능 개선',
        period: '2025.10 — 2026.05',
        description: '온프레미스 Docker 배포와 Nginx API 중계를 운영하고, PostgreSQL 인덱스 적용으로 1분 이상 걸리던 조회를 3초 이하로 줄였습니다.',
      },
    ],
  },
]
