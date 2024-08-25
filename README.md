### Vite+Electron 탬플릿(프론트프레임워크X)

## Electron + Vite + TypeScript + NodeMon

-   npm init -y
-   npm install electron electron-is-dev --save-dev
-   npm install typescript @types/node @types/electron --save-dev
-   npm install vite --save-dev
-   npm i electron-builder concurrently cross-env copyfiles wait-on rimraf nodemon --save-dev

```
root\
├── dist/ # 빌드된 파일들이 위치하는 폴더 (빌드 후 생성)
├── node_modules/ # 설치된 npm 패키지들이 위치하는 폴더 (npm install 후 생성)
├── src/ # UI 관련 코드가 위치하는 폴더
│ ├── assets
│ │ ├──css # css파일 모음 폴더
│ │ ├──img # img파일 모음 폴더
│ │ ├──ts # TS(JS)파일 모음 폴더
│ ├── index.html # 애플리케이션의 HTML 파일
├── src-electron/ # Electron 관련 코드가 위치하는 폴더
│ ├── main.ts # Electron 메인 프로세스 코드
│ └── preload.ts # Electron Preload 스크립트
├── .gitignore # Git에서 제외할 파일 및 폴더 목록
├── package.json # 프로젝트 메타데이터와 스크립트 정의
├── tsconfig.json # TypeScript src -> 폴더 컴파일러 설정
├── tsconfig.electron.json # TypeScript -> electron 폴더 컴파일러 설정
├── vite.config.ts # Vite 설정 파일
├── nodemon.json # nodemon json 설정 파일
└── README.md # 프로젝트에 대한 설명 파일 (옵션)
```

---

-   vite.config.ts
-   tsconfig.json
-   tsconfig.electron.json
-   nodemon.json

---
