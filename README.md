## 🍬 single page portfolio project

##### (나만의 포트폴리오 사이트 만들기 프로젝트 / 싱글페이지 웹사이트)
###### 📊 프로젝트 일정 (2020.12.06 - 12.30)
###### [👉🏻 Portfolio Website 👈🏻](https://yuna1880.github.io/index.html)

---

### 💡 프로젝트 목표

---

- HTML태그와 CSS속성값에 대한 이해
- Javascript 문법의 이해와 필요한 기능 정의 및 구현
- 반응형 웹사이트 기획,개발, 배포
- Vanilla Javascript를 이용하여 문제를 해결할 수 있는 스킬 쌓기

### 💡 프로젝트 개발환경 및 협업도구

---

- HTML5, CSS3, Javascript
- Github(형상관리)

### 💡 구현 화면

---

![screencapture-file-Users-yuna-Desktop-mystudy-portfolio-yuna1880-github-io-index-html-2021-05-12-16_19_57](https://user-images.githubusercontent.com/72509037/117934928-2250d880-b33e-11eb-821a-6c0242867eaa.png)

- 싱글페이지에서 모든 정보 조회 가능하도록 구현.
- **`Home`**
    - 버튼을 누르면 스크롤 함수를 이용해서 가장 상단 페이지로 이동하도록 구현.
    - 스무스하게 이동하도록 **`behavior: "smooth"`** 적용.
    - 상단의 Navbar 메뉴 선택시, Scrolling 되어 화면 이동하도록 구현.
- **`AboutMe`**
    - 나를 소개할 수 있는 간략한 문구와 다룰 수 있는 기술스텍을 작성
- **`Project`**
    - e.target.dataset.filter 를 이용해서 등록해놓은 내 프로젝트 조회 가능
    - **`All (전체)`**, **`Front-end`**, **`Back-end`**, **`Learning`**

        각 카테고리 별로 조회 가능하게 구현

    - 전체를 볼때는 filter === '*'  특정 카테고리 조회시 filter === project.dataset.type
- **`Contact`**
    - contact 버튼 선택시, Scrolling 되어 화면 이동하게 구현.

    ### 💡 반응형  (max-width : 768px)

    ---


![screencapture-file-Users-yuna-Desktop-mystudy-portfolio-yuna1880-github-io-index-html-2021-05-12-16_22_52](https://user-images.githubusercontent.com/72509037/117935746-013cb780-b33f-11eb-87d7-7221a64b6c50.png)
- **`미디어쿼리`** → **@media screen and (max-width:768px)** 로 설정.

