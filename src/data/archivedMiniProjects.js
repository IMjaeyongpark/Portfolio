// 미노출 프로젝트 보관용 데이터입니다. 현재 목록·상세 라우트에서는 불러오지 않습니다.
// 복구하려면 miniProjects.js에서 archivedMiniProjects를 import하고
// miniProjectItems 배열에 ...archivedMiniProjects를 추가하세요.
export const archivedMiniProjects = [
  {
    slug: 'dlmo-api',
    cover: { icon: 'database', title: '생체리듬 예측 API', subtitle: 'Node.js · PostgreSQL' },
    experience: '연구·학습',
    icon: '🌙',
    tone: 'violet',
    title: 'DLMO 예측 코드의 Node.js API 전환',
    description: 'CSV를 직접 입력하던 예측 계산을 사용자별 데이터 조회와 API 호출로 실행하도록 전환했습니다.',
    period: '2024.07.01 — 2024.08.31',
    skills: ['Node.js', 'PostgreSQL', 'Express', 'JavaScript', 'CSV'],
    purpose: '브라우저에서 CSV를 읽어 실행하던 생체리듬 예측 코드를 서버 API로 전환했습니다. 기존 오픈소스 계산 로직을 활용하고, PostgreSQL의 사용자별 활동량·빛·수면 데이터를 조회해 DLMO 예측값을 반환하도록 구성했습니다.',
    role: [
      '오픈소스 계산 로직 분석 및 Express API 구성',
      'CSV 데이터의 PostgreSQL 적재·조회 연동',
      '사용자 ID·기간 조건별 예측 요청 처리',
    ],
    details: [
      '브라우저 파일 입력 대신 PostgreSQL 조회 결과를 기존 계산 함수에 전달하도록 연결했습니다.',
      '사용자 ID 또는 ID와 기간을 조건으로 측정 데이터를 시간순으로 조회하는 API를 구현했습니다.',
      '활동량·빛·수면 데이터를 전처리하고 1분 간격으로 보간한 뒤, 기존 생체리듬 모델의 계산 결과를 반환하도록 구성했습니다.',
    ],
    challenges: [
      {
        problem: 'CSV를 브라우저에서 직접 읽는 구조여서 사용자별·기간별 데이터를 API로 요청하기 어려웠습니다.',
        solution: 'CSV 데이터를 PostgreSQL에 적재하고, 조회 결과를 기존 전처리·계산 함수에 전달하는 Express API를 구성했습니다.',
        result: '브라우저에서 파일을 직접 선택하는 대신 사용자 ID와 기간을 지정해 예측값을 요청할 수 있게 했습니다.',
      },
    ],
    troubleshooting: [],
    architecture: '',
    architectureAlt: '',
    images: [],
    links: [{ label: 'GitHub', url: 'https://github.com/IMjaeyongpark/nodelab' }],
    evidence: [
      { label: '데이터 조회·예측 API', url: 'https://github.com/IMjaeyongpark/nodelab/blob/main/app.js', description: '사용자·기간 조건으로 PostgreSQL 데이터를 조회하고 계산 함수에 전달하는 코드' },
    ],
  },
  {
    slug: 'subway-route',
    cover: { icon: 'backend', title: '최단 경로 탐색', subtitle: 'JavaFX · Dijkstra' },
    experience: '대학 프로젝트',
    icon: '🚇',
    tone: 'orange',
    title: '지하철 최단 경로 탐색기',
    description: '역 간 이동 시간을 수집하고, 출발역과 도착역 사이의 최소 소요 시간 경로를 안내하도록 구현했습니다.',
    period: '2022.10.01 — 2022.12.20',
    skills: ['Java', 'JavaFX', 'Dijkstra', 'Crawling'],
    purpose: '출발역과 도착역을 선택하면 이동 경로와 소요 시간을 확인할 수 있는 JavaFX 애플리케이션을 개발했습니다. 역 간 이동 시간 수집부터 경로 계산, 화면 표시까지 연결했습니다.',
    role: [
      '역 간 이동 시간 수집 및 그래프 구성',
      '다익스트라 알고리즘 기반 최소 시간 경로 탐색',
      'JavaFX 경로·소요 시간·도착 정보 화면 구현',
    ],
    details: [
      'Jsoup으로 역 간 이동 시간을 수집해 역을 연결하는 그래프의 가중치로 사용했습니다.',
      '우선순위 큐와 다익스트라 알고리즘으로 출발역에서 도착역까지 최소 소요 시간 경로를 계산했습니다.',
      'JavaFX 화면에 경로와 구간별 소요 시간, 출발역의 도착 정보를 표시했습니다.',
    ],
    troubleshooting: [],
    architecture: '',
    architectureAlt: '',
    images: [],
    links: [{ label: 'GitHub', url: 'https://github.com/IMjaeyongpark/2022/tree/main/2-2/Basic%20Project2/project/subway' }],
  },
]
