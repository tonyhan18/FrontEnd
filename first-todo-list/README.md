# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Redux Toolkit 설치하기
```bash
npm i @reduxjs/toolkit react-redux
```
# Redux Thunk 사용하기

- 준비물
```bash
npm install -D json-server
# 간단한 테스트용 서버

npm install axios
# 서버에 REST API 쏘는 용도
```

- 서버 실행시
```bash
npx json-server server/db.json
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Git 팁
## 특정 커밋으로 완전히 돌아가기(원격지 포함)
```git
# 1. 돌아가고 싶은 커밋 해시 확인
git log --oneline

# 2. 해당 커밋으로 로컬 브랜치를 강제로 되돌리기
git reset --hard <commit-hash>

# 3. GitHub 원격 저장소에도 강제로 덮어쓰기
git push origin HEAD --force
```