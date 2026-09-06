# Developer Portfolio

**배포 사이트:** [portfolio-seven-weld-x1la11m2lm.vercel.app](https://portfolio-seven-weld-x1la11m2lm.vercel.app/)

백엔드 개발과 DevOps 경험을 중심으로 구성한 박재용의 개발자 포트폴리오입니다. 메인 화면은 원 페이지 형식이며, 각 프로젝트의 상세 내용은 별도 경로에서 확인할 수 있습니다. 모든 콘텐츠를 `src/data` 파일에서 관리하고, 별도 서버 없이 Vercel에 정적 사이트로 배포합니다.

## 기술 스택

- React 19
- Vite 7
- Tailwind CSS 4
- JavaScript
- Vercel

## 주요 기능

- Intro, Skills, Projects, Mini Projects, Career 순서의 원 페이지 구성
- 밝은 배경과 어두운 Intro 영역을 조합한 반응형 디자인
- 카테고리별 기술 아이콘과 색상 배지
- Projects와 Mini Projects에 공통 카드·상세 페이지 적용
- 아키텍처, 파이프라인, 스크린샷 갤러리 지원
- GitHub, 프론트엔드, 백엔드, 블로그, Figma, 데모 등 복수 링크 지원
- 스크롤 위치에 따라 현재 영역을 표시하는 고정 내비게이션
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
│   ├── ProjectCard.jsx    # 공통 카드 템플릿
│   ├── ProjectDetail.jsx  # 공통 상세 페이지
│   ├── Reveal.jsx
│   ├── Icon.jsx
│   └── Footer.jsx
├── data/
│   ├── portfolio.js       # 브랜드·Intro·외부 링크
│   ├── skills.js          # 기술 카테고리와 기술 목록
│   ├── projects.js        # 주요 프로젝트
│   ├── miniProjects.js    # 미니 프로젝트
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
| 아키텍처·파이프라인·스크린샷 | `src/assets/projects/` |

## 프로젝트 추가

`projects.js` 또는 `miniProjects.js`의 배열에 다음 객체를 추가합니다. 두 영역은 동일한 데이터 구조와 UI 템플릿을 사용합니다.

```js
import architectureImage from '../assets/projects/architecture.png'
import pipelineImage from '../assets/projects/pipeline.png'

{
  slug: 'project-name',
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
  improvements: ['향후 확장 방향'],
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
- `tone`: `lime`, `blue`, `violet`, `orange`, `cyan` 중 하나를 사용합니다.
- `github`: 링크가 하나인 경우 저장소 URL을 문자열로 지정할 수 있습니다.
- `links`: 링크가 여러 개인 경우 `{ label, url }` 객체를 배열로 추가합니다. 카드와 상세 페이지에 함께 표시됩니다.
- `troubleshooting`: 내용이 없으면 `[]`로 두며 해당 영역이 자동으로 숨겨집니다.
- `improvements`: 확장 방향이 없으면 생략하거나 `[]`로 지정합니다.
- `architecture`: 없으면 `''`로 지정합니다.
- `images`: 없으면 `[]`로 지정합니다. 여러 장을 넣으면 반응형 갤러리로 표시됩니다.
- `video`: YouTube 영상을 상세 페이지에서 바로 재생하려면 `youtubeId`와 `title`을 지정합니다. 영상이 없으면 생략합니다.

이미지는 외부 URL에 직접 연결하기보다 `src/assets/projects/`에 저장한 뒤 import하는 방식을 권장합니다.

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
