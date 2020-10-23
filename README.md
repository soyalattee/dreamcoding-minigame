# Minigame shoppingmall 

vanillaJS, html, css 연습을 위한 데이터를 가져오고 필터링 하는 미니게임 프로젝트 입니다. 

**Dreamcoding 의 쇼핑몰 미니게임** 강의 기반 프로젝트  
레퍼런스를 보고 클론코딩 후 강의를 보며 코드를 수정한다.  
강의 사이트 : https://academy.dream-coding.com/  
ref : 링크  
## 스택 ( 기술 )
HTML, CSS, JavaScript(VanillaJS)  
## 기간
#### 2020.10.21~10.23 
21~22 : 코딩 23 : 강의를 보며 리뷰, 수정 

## 주요 기능 
### 1.  json 데이터를 동적으로 가져와  보여준다.
(스크롤 하는 gif 와 data.json )  
#### fetch 
fetch 를 사용하여 가져왔다.  
#### array.map , array.join
 받아온 데이터를 map과 Join 을 이용하여  HTML string으로 바꿔 추가해 줬다.  

### 2. 버튼을 이용하여 항목 필터링
(버튼 click 하여 필터링하는 gif)   
#### classList
classList의 add와 remove 를 이용해여 항목의 클래스를 관리해 display 상태를 바꿔줌   

#### event delegation 
이벤트 버블링을 이용하여, 상단 태그에 이벤트리스너를 달아주어 각 버튼들의 이벤트를 관리함   



## 아키텍쳐 

data / main.js / index.html / style.css 

## 배운 점 (강의를  통한 변경 사항들)

classlist 를 이용한 태그의 class 변경 
flex  활용 편-안 (짤)  
createElement 해주고 appendChild 로 추가 해줬는데, => innerHTML로 통으로 붙여버림 (코드 깔끔)  
dataset : id로 필터링 목록을 구분해줬는데 dataset 을이용하니 깔끔하고 보기쉬워짐 


