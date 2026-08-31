# Developer Portfolio

백엔드 개발과 DevOps 경험을 중심으로 구성한 박재용의 원 페이지 포트폴리오입니다. 모든 콘텐츠를 `src/data` 파일에서 관리하며, 별도 서버 없이 Vercel에 정적 사이트로 배포합니다.

## 기술 스택

- React 19
- Vite 7
- Tailwind CSS 4
- JavaScript
- Vercel

## 주요 기능

- Intro, Skills, Projects, Mini Projects 순서의 원 페이지 구성
- 어두운 Charcoal 기반의 Responsive Design
- 카테고리별 Skill Icon과 Color Badge
- 공통 Card·Detail Modal을 사용하는 Projects와 Mini Projects
- Architecture, Pipeline, Screenshot Gallery 지원
- GitHub, Frontend, Backend, Blog, Figma, Demo 등 복수 링크 지원
- ESC·배경 Click으로 닫히는 Accessible Modal
- Data File에 Object를 추가하면 Card가 자동 생성되는 구조

## 실행 방법

Node.js 20.19 이상 또는 22.12 이상을 권장합니다.

```bash
npm install
npm run dev
```

기본 개발 서버 주소는 `http://localhost:5173`입니다.

## 검증과 Build

```bash
npm run lint
npm run build
npm run preview
```

Production Build 결과는 `dist/`에 생성됩니다.

## 프로젝트 구조

```text
src/
├── assets/projects/       # Architecture·Pipeline·Screenshot
├── components/
│   ├── Header.jsx
│   ├── Intro.jsx
│   ├── Skills.jsx
│   ├── SkillBadge.jsx
│   ├── Projects.jsx
│   ├── MiniProjects.jsx
│   ├── ProjectCard.jsx    # 공통 Card Template
│   ├── ProjectDetail.jsx  # 공통 Detail Modal
│   ├── Icon.jsx
│   └── Footer.jsx
├── data/
│   ├── portfolio.js       # Brand·Intro·외부 링크
│   ├── skills.js          # Skill Category와 기술 목록
│   ├── projects.js        # 주요 Project
│   └── miniProjects.js    # Mini Project
├── App.jsx
├── index.css
└── main.jsx
```

## 콘텐츠 수정

| 수정 내용 | 파일 |
| --- | --- |
| 상단 Brand, Intro, Blog·GitHub | `src/data/portfolio.js` |
| Skill Category와 기술 | `src/data/skills.js` |
| 주요 Project | `src/data/projects.js` |
| Mini Project | `src/data/miniProjects.js` |
| Architecture·Pipeline·Screenshot | `src/assets/projects/` |

## Project 추가

`projects.js` 또는 `miniProjects.js`의 배열에 다음 Object를 추가합니다. 두 섹션은 동일한 Data Schema와 UI Template을 사용합니다.

```js
import architectureImage from '../assets/projects/architecture.png'
import pipelineImage from '../assets/projects/pipeline.png'

{
  tone: 'lime',
  title: 'Project Name',
  description: '한 줄 설명',
  period: '2026.01 — 2026.06',
  skills: ['Spring Boot', 'Docker'],
  purpose: '프로젝트 목적',
  role: ['담당 역할'],
  details: ['주요 구현 내용'],
  troubleshooting: [
    {
      problem: '발생한 문제',
      solution: '해결 방법',
      result: '개선 결과',
    },
  ],
  links: [
    { label: 'Backend', url: 'https://github.com/user/backend' },
    { label: 'Frontend', url: 'https://github.com/user/frontend' },
    { label: 'Figma', url: 'https://figma.com/...' },
  ],
  architecture: architectureImage,
  architectureAlt: 'System Architecture 설명',
  images: [
    {
      src: pipelineImage,
      alt: 'CI/CD Pipeline 설명',
      caption: 'CI/CD Pipeline',
    },
  ],
  video: {
    youtubeId: 'YouTube 영상 ID',
    title: '영상 접근성 설명',
  },
}
```

### 선택 값

- `tone`: `lime`, `blue`, `violet`, `orange`, `cyan` 중 하나를 사용합니다.
- `github`: Link가 하나인 경우 Repository URL을 문자열로 지정할 수 있습니다.
- `links`: Link가 여러 개인 경우 `{ label, url }` Object를 배열로 추가합니다. Card와 Detail Modal에 동시에 표시됩니다.
- `troubleshooting`: 내용이 없으면 `[]`로 두며 Section이 자동으로 숨겨집니다.
- `architecture`: 없으면 `''`로 지정합니다.
- `images`: 없으면 `[]`로 지정합니다. 여러 장을 넣으면 Responsive Gallery로 표시됩니다.
- `video`: YouTube 영상을 상세창에서 바로 재생하려면 `youtubeId`와 `title`을 지정합니다. 영상이 없으면 생략합니다.

Image는 외부 URL에 직접 연결하기보다 `src/assets/projects/`에 저장한 뒤 import하는 방식을 권장합니다.

## Git 주의사항

`.gitignore`에서 다음 항목을 제외합니다.

- `node_modules/`, `dist/`, `.vite/`, `coverage/`
- `.env`, `.env.*` (`.env.example`은 제외하지 않음)
- `.vercel/`, Log, IDE, OS 생성 파일
- 개인 정보가 포함된 `*이력서*.pdf`

## Vercel 배포

1. GitHub Repository에 Project를 push합니다.
2. Vercel Dashboard에서 **Add New → Project**를 선택합니다.
3. GitHub Repository를 연결합니다.
4. Framework Preset을 `Vite`로 선택합니다.
5. Build Command는 `npm run build`, Output Directory는 `dist`를 사용합니다.
6. **Deploy**를 선택합니다.

`vercel.json`에 동일한 설정이 포함되어 있으며, 이후 GitHub의 연결된 Branch에 push하면 Vercel이 자동으로 Build·Deploy합니다.

```text
로컬 수정 → Git Commit → GitHub Push → Vercel Build / Deploy
```
