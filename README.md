## 1. npx create-react-app shop

## 2. react bootstrap 설치

npm install react-bootstrap bootstrap
이후 tailwindcss 설치하면서 bootstrap 삭제함

## 3. react-ruter-dom 설치

npm install react-router-dom@6

## 4. Routes Router Route , Link ,Nested Routes 개념 사용

용도는 페이지 이동을 위한 라우터 컴포넌트 입니다.

Routes : 라우터를 설정하는 컴포넌트
Router : 라우터를 설정하는 컴포넌트
Route : 라우터 경로를 설정하는 컴포넌트
Link : 라우터 경로를 설정하는 컴포넌트
Nested Routes : 중첩된 라우터 경로를 설정하는 컴포넌트
Nested Routes는 Route 컴포넌트 안에 Route 컴포넌트를 중첩하여 사용하는 것을 의미합니다. 서브경로
사용할때는 <Outlet /> 컴포넌트를 사용하여 중첩된 라우터를 렌더링합니다.
Route 에 '\*' 를 사용하면 404 페이지를 설정할 수 있습니다. 예: <Route path="\*" element={<div>잘못된 페이지입니다.</div>} />

## 5. npm install styled-components

용도 : 컴포넌트 스타일링을 위한 라이브러리 입니다.
직접 만든 컴포넌트에 스타일을 적용할 때 사용합니다.
예시 : const Button = styled.button`background: black; color: white;`;
