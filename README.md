# 프로젝트 생성(React + typescript)
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

# 에러처리
- 런타임 에러 발생시 에러 페이지로 이동(componentDidCatch를 이용하여 에러가 발생하게 되면
  Error페이지로 fallback 처리)
- npm i react-error-boundary

# 로그인 비동기 처리를 위한 리덕스 설치(redux-saga)
- npm i redux react-redux redux-saga redux-devtools-extension redux-actions
- npm i @types/react-redux @types/redux-actions -D
- redux-saga를 사용하는 이유는 여러가지 제공하는 effect를 사용 하여 비동기 로직이나 사이드 이펙트가 생기는 로직들을 자유자재로 컨트롤 할 수 있음
  (대표적으로 사용 예시는 api를 연속적으로 여러번 호출 하였는데 가장 마지막 응답만 사용하겠다 또는 첫번째 응답만 사용하겠다 등 이런식으로 여러 가지 사이드 이펙트를 자유자재로 컨트롤 할 수 있는 기능을 많이 제공하고 있음)
- redux-actions는 리덕스의 대표 개발 패턴인 Duck Pattern을 쉽게 구현할 수 있도록 제공해줌 

# 디자인 Antd 사용
- npm i antd
- npm i @ant-design/icons

# api 통신
- npm i axios

# 리액트 라우터와 리덕스를 강력하게 연결하여 사용(history 사용하기 위함) 
- npm i connected-react-router

# 날짜 표현
- npm i moment