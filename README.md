# FE 학습 과정
FE 포기자였던 제가 다시금 FE를 잡고자 부트스트랩부터 학습을 하고 있습니다.

돌고 돌아 생각해보니 부트스트랩만 잘해도 프론트엔드는 거저 먹는 것이라는 생각이 들었습니다.
저는 현재 CSS를 보조하기 위해 부트스트랩이 있고
부트스트랩을 보조하기 위해 리액트가 있고
리액트를 보조하기 위해 웹 컴포넌트가 있다

라고 생각하고 있습니다.

그래서 부트스트랩으로 짤 수 있는 것은 리액트, 웹 컴포넌트도 짤 수 있습니다.

# 학습 기간
25.01.27 ~ 25.02

# 학습 방법
클론 코딩

# FE 철학
[일단 만들어라]

세부적인 셋팅들(ex. 화면 크기, 글자 크기 등)은 무시해라. 각 요소들의 위치만 정확하다면 아무런 문제가 없다.
디자인은 차차 수정해도 늦지 않는다.

[위치 관련 팁]
d-flex를 사용할거면
row-col 조합 있는 곳에서 써라

d-flex로 전체적인 콘텐츠의 위치를 잡아라(너무 세부적으로 위치를 잡으려고 하면 항상 문제가 생긴다)
이때 justify-content와 align-items를 적절히 활용하자(이 둘은 d-flex, row와 함께 있어야만 동작한다)
d-flex만 사용하는 경우 flex-direction은 row 방향이 된다.
justify-content는 flex-start(왼쪽 정렬)이 된다.
align-items는 stretch(컨테이너 높이에 맞춰 늘어남)이 된다.

위치를 맞출때는 세부적으로 움직이기보다는 col-3 과 같이 grid 12칸을 활용하는 것이 더 좋다.
grid로 위치를 도저히 못 맞출때는 position-relative & position-absolute 조합을 사용해서 top-*, start-* 를 사용하는게 좋다.
부모에 position-relative를 사용시 자식에는 position-absolute를 반드시 사용할 것

두 이미지를 겹치기 위해서는 overlay + position-absolute를 사용하는 것이 좋다.

[반응형 웹]
sm, md, lg, xl, xxl 붙은건 모두 화면 크기와 관련이 있음
(ex. navbar-expand-lg)

[색상]
light, dark, danger, warning 등은 모두 색상과 관련이 있음
(ex. navbar-light = 밝은 색 글자 navbar-dark = 어두운 색 글자)

[크기]
가급적 w-*와 h-*를 사용해서 화면에 %로 맞추어지도록 하는 것이 좋다.

[위치 세부조정]
마진과 패딩에 숫자가 붙어 있으면 그냥 위치를 미세하게 조정한 거라고 보면 됨

m 혹은 p 혹은 g를 사용해서 위치를 조절할 수 있음.
가급적 콘텐츠가 중앙에 올 수 있도록 만들어야 함.

✅ 일반적인 레이아웃(그리드 기반)은 gutters가 더 적절함!
✅ 자유로운 배치가 필요한 경우(button 간격 조정, 독립적인 요소 위치 조정)는 margin이 유리함!

gutters를 사용하기 위해서는 가급적 부모클래스에 padding을 사용해야함

margin vs gutters + padding 조합은 그때그때 다름.... 그때 그때 보고 이게 좋은지 나쁜지 따져야함

[이미지 관리]
가급적 백그라운드 이미지는 css 파일에서 관리하는게 좋다.
반복이 된다면 css 속성을 이용해서 처리하는게 좋다.
> #intro .col-6:nth-of-type(1) .intro-first-card

[문자]
태그 : h* 태그, p 태그, label 태그로 글자를 컨트롤 하는 것이 가장 좋다.
글자 색상 : 
- fw와 fst 두 개를 가지고 구분하는게 가장 좋다.
- text-muted(비활성화), text-primary, text-success, text-info, text-warning, text-danger, 
- text-secondary(톤 다운), text-dark(어두운 회색), text-light(밝은 회색), text-white(힁색)
글자 크기 : 
- display-* 로 조절
- lead : 약간의 강조


[기타 팁]
class 명은 주석처럼 사용해라. 의미가 없는 주석이라도 구분을 위해 일단 넣어라

[Header]
0. nav - navbar, navbar-expand-lg
1. container
2. 로고, 토글러, collapse
3. ui-li-a 형태로 내부 콘텐츠 채우기

[모든 콘텐츠]
0. section id : 각 세션에는 id를 주어서 각각의 독립적인 속성을(css) 전체적으로 줄 수 있도록 하는것이 좋다.
 + 보통 nav-item으로 이동하기 위해 id를 주는 역할. 
 + section id에서 사용한 name이 향후 내부 콘텐츠 세부 컨트롤에 사용된다고 보면 된다.(ex. id=services로 했으면 class=services-content 식으로 반복 사용)
1. section-content : 콘텐츠의 전체적인 위치를 결정하고 
경우에 따라서는 section의 배경색과 위치를 결정하기 위해서 사용.
--- [ 진짜 콘텐츠 위치 ] ---
2. 컨테이너
3. row 혹은 그냥 아이템
4. col



.divider
{
width: 10%;
  margin: 2rem auto;
  border-top: 0.5rem solid rgb(255, 112, 3);
}
