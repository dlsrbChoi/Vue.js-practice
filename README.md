# Vue.js-practice 시작하기 06.27
# Vue.js 중급 강좌 07.04

https://www.inflearn.com/course/Age-of-Vuejs

https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89

**Copyright © 2021 Captain Pangyo**

설치목록
- Node.js
- Vue.js Devtools
- Vetur
- Night Owl
- Material Icon Theme
- Live Server
- ESLint
- Prettier
- Auto Close Tag
- Atom Keymap

Vue.js
- Reactivity
  - 핵심기능
  - 데이터에 대한 변화를 뷰에서 감지해서 화면에 반영
  - 화면 조작에 대한 API 속성 제공
  - 웹의 동작들을 라이브러리에서 가져가고, 관리해줌
- 인스턴스
  - 내용을 추가함으로써 화면을 조작할 수 있음
- 컴포넌트
  - 화면의 영역을 구분해서 개발하는 방식
  - 재사용성, 코드의 반복을 줄임
- 컴포넌트 통신
  - 데이터의 규칙을 제한함으로써 데이터에 대한 흐름을 예측
  - props
    - 상위에서 하위로 데이터를 내리는 것
  - event emit
    - 하위에서 상위로 이벤트를 올리는 것
- HTTP 통신 라이브러리 (axios)
- 템플릿 문법
  - 화면을 조작하기 위한 뷰의 문법
  - 데이터 바인딩
    - 데이터의 변화에 따라서 화면에 반영, 데이터를 화면에서 활용
  - 뷰 디렉티브
    - 화면을 조작하기 위해 뷰가 추가적으로 제공하는 문법(v-)
- Vue CLI
- 싱글파일 컴포넌트
- 최종 프로젝트(사용자 입력 폼 만들기)_vue-form

추가 문서
- Vue.js 공식 문서 : https://v2.vuejs.org/
- Vue.js 스타일 가이드 : https://v2.vuejs.org/v2/style-guide/
- vue.js Cookbook : https://v2.vuejs.org/v2/cookbook/
- vuex 공식 문서 : https://v3.vuex.vuejs.org/

중급 강의
1. 뷰 CLI를 이용한 프로젝트 구성 방법
2. 컴포넌트 기반 설계 방법
3. 컴포넌트 구조화 및 컴포넌트 통신 방법
4. ES6를 이용한 효율적이고 간결한 뷰 코딩 방법
5. Vuex를 이용한 상태 관리의 이해 및 적용 방법

const & let - 새로운 변수 선언 방식
- 블록 단위 { }로 변수의 범위가 제한되었음
- const: 한번 선언한 값에 대해서 변경할 수 없음(상수 개념)
- let: 한번 선언한 값에 대해서 다시 선언할 수 없음

Vuex
- 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
컨셉
- State: 컴포넌트 간에 공유하는 데이터 data()
- View: 데이터를 표시하는 화면 template
- Action: 사용자의 입력에 따라 데이터를 변경하는 methods
구조
- 컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태
기술 요소
- state: 여러 컴포넌트에 공유되는 데이터 data
- getters: 연산된 state 값을 접근하는 속성 computed() 처럼 미리 연산된 값을 접근하는 속성
- mutations: state 값을 변경하는 이벤트 로직 메서드 methods
- actions: 비동기 처리 로직을 선언하는 메서드 aysnc methods