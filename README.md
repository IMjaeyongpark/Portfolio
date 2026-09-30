# Developer Portfolio

**배포 사이트:** [jaeyong-portfolio.vercel.app](https://jaeyong-portfolio.vercel.app/)

백엔드 개발과 DevOps 경험을 중심으로 구성한 박재용의 개발자 포트폴리오입니다. 메인 화면은 원 페이지 형식이며, 주요 프로젝트와 미니 프로젝트의 상세 내용은 별도 경로에서 확인할 수 있습니다. 콘텐츠는 `src/data` 파일에서 관리하고, 별도 서버 없이 Vercel에 정적 사이트로 배포합니다.

## 기술 스택

- React 19
- Vite 7
- Tailwind CSS 4
- JavaScript
- Pretendard Variable (로컬 제공) · Lucide React
- Vercel

## 주요 기능

- Intro, Skills, Projects, Mini Projects, Career, AI Workspace 순서의 원 페이지 구성
- AI Workspace: Codex ECC 템플릿 소개, 구성 목록, 작업 규모별 실행 절차 선택
- 밝은 배경의 반응형 디자인과 좌측 소개·우측 작업 분야로 구성한 Intro
- 카테고리별 기술 아이콘과 색상 배지
- Projects와 Mini Projects에 공통 카드·상세 페이지 적용
- 카드에 경험 구분(실무·사내 테스트·개인 프로젝트·대학 프로젝트), 결과와 진행 상태 표시
- 주요·미니 프로젝트는 종료일 기준 최신순으로 노출하며, 종료일이 같으면 시작일이 최근인 프로젝트가 먼저 표시됨
- 상세 페이지에 구현 흐름과 공개 코드·설정 자료 링크 표시
- 상세 목차 이동·아키텍처 원본 보기, 본문 바로가기와 키보드 포커스 지원
- 섹션·기술 카테고리·프로젝트·경력 항목이 처음 보일 때만 실행되는 300ms 등장 효과와 메뉴 인터랙션 (키보드 탐색·모션 감소 설정에서는 이동 효과 생략)
- 해시가 포함된 `/assets/` 파일의 장기 캐시 (HTML에는 적용하지 않음)
- 아키텍처, 파이프라인, 스크린샷 갤러리 지원 (WebP·썸네일 최적화와 PNG 원본 유지)
- GitHub, 프론트엔드, 백엔드, 블로그, Figma, 데모 등 복수 링크 지원
- 스크롤 위치에 따라 현재 영역을 표시하는 고정 내비게이션
- 프로젝트 상세 페이지에서 메뉴를 선택하면 홈의 해당 영역으로 이동하는 해시 내비게이션
- 데이터 파일에 객체를 추가하면 카드가 자동 생성되는 구조

## 실행 방법

Node.js 20.19 이상 또는 22.12 이상을 권장합니다.

```bash
npm install
npm run dev
```

기본 개발 서버 주소는 `http://localhost:5173`입니다.

## 검증과 빌드

```bash
npm run lint
npm run build
npm run preview
```

프로덕션 빌드 결과는 `dist/`에 생성됩니다.

## 프로젝트 구조

```text
src/
├── assets/projects/       # 아키텍처·파이프라인·스크린샷
├── components/
│   ├── Header.jsx
│   ├── Intro.jsx
│   ├── Skills.jsx
│   ├── SkillBadge.jsx
│   ├── Projects.jsx
│   ├── MiniProjects.jsx
│   ├── Career.jsx
│   ├── AIEnvironment.jsx
│   ├── ProjectCard.jsx    # 공통 카드 템플릿
│   ├── ProjectDetail.jsx  # 주요·미니 프로젝트 공통 상세 페이지
│   ├── ProjectImage.jsx   # 최적화 이미지·원본 대체 로딩
│   ├── Reveal.jsx
│   ├── Icon.jsx
│   └── Footer.jsx
├── data/
│   ├── portfolio.js       # 브랜드·Intro·외부 링크
│   ├── skills.js          # 기술 카테고리와 기술 목록
│   ├── projects.js        # 주요 프로젝트
│   ├── miniProjects.js    # 미니 프로젝트
│   ├── aiEnvironment.js   # AI 작업 환경 소개·구성·실행 절차
│   └── career.js          # 경력
├── App.jsx
├── index.css
└── main.jsx
```

## 콘텐츠 수정

| 수정 내용 | 파일 |
| --- | --- |
| 상단 브랜드, Intro, 블로그·GitHub | `src/data/portfolio.js` |
| 기술 카테고리와 기술 | `src/data/skills.js` |
| 주요 프로젝트 | `src/data/projects.js` |
| 미니 프로젝트 | `src/data/miniProjects.js` |
| 경력 | `src/data/career.js` |
| AI 작업 환경·템플릿 GitHub·작업 절차 | `src/data/aiEnvironment.js` |
| 아키텍처·파이프라인·스크린샷 | `src/assets/projects/` |

색상·타이포그래피·여백·모션 기준은 `DESIGN.md`에 정리되어 있으며, 공통 스타일은 `src/index.css`에서 관리합니다. 이미지에는 `architectureWidth` / `architectureHeight` 또는 갤러리의 `width` / `height`를 함께 지정하면 로딩 중 레이아웃 이동을 줄일 수 있습니다.

상단 메뉴는 `Home · Skills · Projects · Career · AI Workspace`로 구성됩니다. `Projects` 메뉴는 주요 프로젝트와 미니 프로젝트를 함께 가리키며, 각 카드 전체를 선택하면 상세 페이지로 이동합니다.

## 프로젝트 추가

`projects.js` 또는 `miniProjects.js`의 배열에 다음 객체를 추가합니다. 두 영역은 동일한 데이터 구조와 UI 템플릿을 사용합니다.

```js
import architectureImage from '../assets/projects/architecture.png'
import pipelineImage from '../assets/projects/pipeline.png'

{
  slug: 'project-name',
  experience: '개인 프로젝트',
  status: '개인 환경 구축',
  outcome: '구현 결과 또는 현재 사용 테스트 상태',
  tone: 'lime',
  title: 'Project Name',
  description: '한 줄 설명',
  period: '2026.01 — 2026.06',
  skills: ['Spring Boot', 'Docker'],
  purpose: '프로젝트 목적',
  role: ['담당 역할'],
  details: ['주요 구현 내용'],
  workflow: ['입력', '처리', '결과'],
  challenges: [
    {
      problem: '구축 과정에서 해결해야 할 요구사항',
      solution: '과제를 해결하기 위한 접근 방법',
      result: '구현 결과 또는 현재 검증 상태',
    },
  ],
  troubleshooting: [
    {
      problem: '발생한 문제',
      solution: '해결 방법',
      result: '개선 결과',
    },
  ],
  improvements: ['향후 확장 방향'],
  evidenceNote: '공개 자료로 확인할 수 있는 범위와 실제 실행 결과의 구분',
  evidence: [
    { label: '배포 설정', url: 'https://github.com/user/backend/blob/main/Jenkinsfile', description: '자료에서 확인할 수 있는 구현 내용' },
  ],
  achievements: ['프로젝트 성과'],
  links: [
    { label: 'Backend', url: 'https://github.com/user/backend' },
    { label: 'Frontend', url: 'https://github.com/user/frontend' },
    { label: 'Figma', url: 'https://figma.com/...' },
  ],
  architecture: architectureImage,
  architectureAlt: '시스템 아키텍처 설명',
  images: [
    {
      src: pipelineImage,
      alt: 'CI/CD 파이프라인 설명',
      caption: 'CI/CD 파이프라인',
    },
  ],
  video: {
    youtubeId: 'YouTube 영상 ID',
    title: '영상 접근성 설명',
  },
}
```

### 필수 값과 선택 값

- `slug`: 상세 페이지 주소에 사용하는 고유한 영문 식별자입니다.
- `period`: `2026.01 — 2026.06` 또는 `2026.01.01 — 2026.06.30` 형식의 기간입니다. 주요·미니 프로젝트 모두 종료일 기준 최신순으로 자동 정렬하며, 종료일이 같으면 시작일을 비교합니다. `진행중` 또는 `현재`인 프로젝트는 먼저 표시됩니다.
- `experience`: 실무·사내 테스트·개인 프로젝트·대학 프로젝트 등 경험의 성격입니다. 카드와 상세 페이지에 표시합니다.
- `status`, `outcome`: 담당 범위·진행 상태와 결과 요약입니다. 수치가 있다면 해당 조회·디렉터리 등 측정 대상을 함께 적습니다. 생략하면 해당 영역이 숨겨집니다.
- `workflow`: 주요 구현 앞에 순서대로 표시할 짧은 단계 이름입니다. 생략하면 기존 구현 목록만 표시합니다.
- `tone`: `lime`, `blue`, `violet`, `orange`, `cyan` 중 하나를 사용합니다.
- `github`: 링크가 하나인 경우 저장소 URL을 문자열로 지정할 수 있습니다.
- `links`: 링크가 여러 개인 경우 `{ label, url }` 객체를 배열로 추가합니다. 카드와 상세 페이지에 함께 표시됩니다.
- `challenges`: 반복 작업 자동화나 설계 요구사항을 `{ problem, solution, result }` 형식으로 작성합니다. 상세 페이지의 ‘해결 과제’에 표시됩니다.
- `troubleshooting`: 실제 발생한 오류·성능 저하·운영 문제와 해결 사례를 같은 형식으로 작성합니다. ‘트러블슈팅’에 표시됩니다.
- 두 항목은 함께 사용할 수 있으며, 생략하거나 `[]`로 지정하면 해당 영역이 숨겨집니다. 표시되는 영역에 따라 번호가 자동으로 이어집니다.
- `improvements`: 확장 방향이 없으면 생략하거나 `[]`로 지정합니다.
- `evidenceNote`, `evidence`: ‘코드·설정 자료’에 표시할 설명과 `{ label, url, description }` 링크 목록입니다. 공개 코드·설정·README와 실제 테스트 결과의 범위를 구분합니다. 회사의 비공개 주소·설정·로그는 추가하지 않습니다.
- `achievements`: 논문·수상 등 구현 내용과 구분할 성과를 문자열 배열로 작성합니다. 생략하거나 `[]`로 지정하면 ‘성과’ 영역이 숨겨집니다.
- `architecture`: 없으면 `''`로 지정합니다.
- `cover`: 아키텍처 이미지가 없는 카드의 대체 커버입니다. `{ icon: 'database', title: '프로젝트 주제', subtitle: '관련 기술·기능' }` 형식으로 작성합니다. `icon`은 `Icon.jsx`의 아이콘 이름을 사용하며, 생략하면 기본 코드 아이콘·프로젝트명·기술 목록이 표시됩니다. 상세 페이지의 아키텍처 이미지로 사용되지는 않습니다.
- `images`: 없으면 `[]`로 지정합니다. 여러 장을 넣으면 반응형 갤러리로 표시됩니다.
- `video`: YouTube 영상을 상세 페이지에서 바로 재생하려면 `youtubeId`와 `title`을 지정합니다. 영상이 없으면 생략합니다.

이미지는 외부 URL에 직접 연결하기보다 `src/assets/projects/`에 저장한 뒤 import하는 방식을 권장합니다. 현재 아키텍처·파이프라인 이미지도 해당 디렉터리에서 import합니다.

## Git 주의사항

`.gitignore`에서 다음 항목을 제외합니다.

- `node_modules/`, `dist/`, `.vite/`, `coverage/`
- `.env`, `.env.*` (`.env.example`은 제외하지 않음)
- `.vercel/`, 로그, IDE, OS 생성 파일
- 개인 정보가 포함된 `*이력서*.pdf`

## Vercel 배포

1. GitHub 저장소에 프로젝트를 push합니다.
2. Vercel 대시보드에서 **Add New → Project**를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. Framework Preset을 `Vite`로 선택합니다.
5. Build Command는 `npm run build`, Output Directory는 `dist`로 설정합니다.
6. **Deploy**를 선택합니다.

`vercel.json`에 동일한 설정이 포함되어 있으며, 이후 GitHub의 연결된 브랜치에 push하면 Vercel이 자동으로 빌드·배포합니다.

```text
로컬 수정 → Git Commit → GitHub Push → Vercel 빌드·배포
```
