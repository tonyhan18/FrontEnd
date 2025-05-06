# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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

## 잘 못 만든 git branch 삭제하기
1. 로컬 브랜치 삭제
```bash
git branch -d 브랜치이름
```
-d 옵션은 브랜치를 삭제하기 전에 병합 여부를 확인합니다. 병합되지 않은 브랜치는 삭제되지 않습니다.

병합되지 않은 브랜치를 강제로 삭제하려면:
```bash
git branch -D 브랜치이름
```

2. 원격 브랜치 삭제
원격 저장소에서 특정 브랜치를 삭제합니다.

```bash
git push origin --delete 브랜치이름
```

3. 삭제된 브랜치 확인
로컬 브랜치 목록 확인:

```bash
git branch
```

원격 브랜치 목록 확인:

```bash
git branch -r
```