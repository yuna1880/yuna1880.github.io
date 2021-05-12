'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//Navbar 투명하게 만들기.
//애로우함수 -> 아무런 인자 받지 않고 실행
document.addEventListener('scroll', () => {
    //console.log(window.scrollY); // 스크롤 값 표시
    //console.log('navbar height : ' + navbarHeight); //네비바 높이 표시
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//navbar의 메뉴 선택시, Scrolling되어 화면 이동.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    //console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//navbar 토클버튼 내려오도록!
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

//contact 버튼 선택시, Scrolling되어 화면 이동.
const contactBtn = document.querySelector('.home_contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

// Scrolling 할때마다 상단 home transparent 하게 만들기.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // 스크롤 내릴때마다 1 -> 0.5 -> 0 -> -1 ...
    // console.log(1 - window.scrollY / homeHeight); 
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow-up Button -> 스크롤시 나오도록!
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});


arrowUp.addEventListener('click', (event) => {
    scrollIntoView('#home');
});

//Projects
const workBtncontainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtncontainer.addEventListener('click', (e) => {
    //e.target.dataset.filter 값이 없으면 그 부모의 filter값을 가져온다!
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    //active 상태 변경 -> 클릭된 버튼으로 셀렉션 변경해주기.
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    // 버튼일때는 e.target을 지정. 버튼이 아닐때는 (span일 경우) parentNode를 지정.
    const target = e.target.nodeName === 'BUTTON' ? e.target :
                     e.target.parentNode;                
    e.target.classList.add('selected');
    

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        //console.log(filter); 
    projects.forEach((project) => {
        console.log(project.dataset.type);
        // 전부다 or 클릭한 필터와 데이터 타입이 매칭하면 보여주고 아니면 안보여준다.
        if(filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
    });
        projectContainer.classList.remove('anim-out');
    }, 300);



    /* forEach 랑 같은 다른 반복문들 
    console.log(`--------`);
    for(let project of projects){
        console.log(project);
    }
    console.log(`--------`);
    let project;
    for(let i = 0; i < projects.length; i++){
        project = projects[i];
        console.log(project);
    } */

});



//스크롤 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}

function goResume() {
    location.href='https://www.notion.so/yunakwon/Yuna-Kwon-48da6316e26d4e15a80dce844655f9d0';
}