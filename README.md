# 프로젝ㅌ 생성(React + typescript)
- npx create-react-app my-books --template typescript
  1. Could not find a declaration file for module 'react'. 오류 발생 시
    npm i --save @types/react @types/react-dom 설치하면됨
- tsconfig.json 파일에서 "jsx": "react-jsx" 오류가 발생 한다면 아래와 같이 해결 가능
  1. Go to the command palette CTRL+Shift+P (Or ⌘+Shift+P on Mac).
  2. Choose "TypeScript: Select a TypeScript Version...".
  3. Choose "Use workspace Version".

# 라우터 설치 및 설정
- npm i react-router-dom
- npm i --save-dev @types/react-router-dom

# 런타임 에러 발생시 에러 페이지로 이동(componentDidCatch를 이용하여 에러가 발생하게 되면 Error페이지로 fallback 처리)
- npm i react-error-boundary

# 로그인 비동기 처리를 위한 리덕스 설치
- npm i redux react-redux redux-saga redux-devtools-extension redux-actions
- npm i @types/react-redux @types/redux-actions -D