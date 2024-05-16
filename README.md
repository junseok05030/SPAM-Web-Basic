# SPAM-Web-Basic

웹페이지 글, 그림넣기 HTML
디자인 넣고싶으면 css
기능 넣고싶으면 자바
Library 남들이 만들어놓은 코딩편하게하라고만든거
js 라이브러리관리 npm
nodejs -> 자바스크립트 실행 엔진
build 작업=js파일 하나로 합치기
typescript -> 타입기능 업글된 자바스크립트 번들링 툴로 변환해야함

# Markdown 기본 문법

## h2

### h3

#### h4

##### h5

###### h6

P 태그

- 1번
- 2번
- 3번

```javascript
console.log("Hello world");
```

# Javascript 공부

## 실행하는 방법

### (node.js가 필요하다.)

```javascript
console.log("Hello world!");
```

이 문장을 HTML body밑에서 script를 만들고 그 사이에 넣는다.
그 후 HTML 라이브 서버를 연 후 F12를 누르고 콘솔을 보면 Hello world가 출력이 된걸 볼 수 있다.

4월 9일 spam

HTML에 css를 적용하는 법을 배움

<div id="hellWorld">o ^ㅁ^ o</div>
hellWorld가 중요
에 선언한 단어를 css파일에

```javascript
#hellWorld{
    background-color: aqua;
}
```

쓰면 된다
(모든 태그의 속성 부분에 class=”내용” 형식으로 작성 가능하며 .클래스이름 으로 빠르게 입력할 수 있다.)

----------------------------------

# Javascript 변수와 자료형

1.camel표기법, 숫자, $, _만 가능(-, *은 불가능)
2.첫 글자는 숫자 불가
3.예약어 불가
4.변수는 보통 고정값을 넣음

## var
재선언 가능, 재할당 가능, 호이스팅, 전역변수
## 호이스팅
밑에서 선언한 변수를 위에서도 씀

## let
재선언 불가능, 재할당 가능, 블록범위 변수

## const
재선언 불가능, 재할당 불가능, 상수

# 자바스트립트의 자료형

## 1. 숫자 
정수 및 부동 소수점

## 2. 문자열 
텍스트

## 3. 불리언 
true/false

## 4. null 
값이 존재하지 않음

## 5. undefined 
변수가 초기화되지 않았거나 값이 할당되지 않았음

## 6. 심벌 
고유하고 변경 불가능한 데이터 유형(안씀)

# 변수 집어넣기
변수를 한개 선언한다.  
```javascript
    let name = "준석";

```
그 후 변수를 넣고싶은 문장의 부분에
```javascript
{
    console.log
("제 이름은 " + name + "이다.)
}
```
라고 쓰면 "+ name + " 부분에 넣어놓은 변수의 단어가 뜬다.

### javascript

#### if문에는 뒤에 세미콜론을 붙히지 않는다.
if문은 변수값에 따라 출력하는 값이 바뀐다
예시
```javascript
const age = 5;


if (age > 19) console.log('adult');
else if (age > 13 ) console.log('애새끼');
else console.log('더 애새끼');

console.log(`너는 ${age}살입니다 `);
```
변수값 age가 19 보다 많거나 13보다 많을경우 애새끼 또는 adult가 출력된다.

(복습)

num + 1;

num - 1;

num * 1;

num / 1;

num % 1;

(이건 몰랐음;)

num ** : 제곱

---------
switch문은 선언한 변수의 값이 알맞은 경우의 수를 출력한다.

예시
``` javascript
    const age = 8

switch  (age){
    default:
        console.log("볼펜");
        break;
    case  5 :
        console.log("선물");
        break;
    case  8:
        console.log("선물");
        break;
    }
```
변수값 age가 5일경우에도 선물을 받지만 8 또는 5가 아닐경우 볼펜을 받게된다.

# (JS)while, for문

## while
while문은 조건이 만족할때 특정한 코드를 반복하는 반복문이다.
```javascript
//예시
let i = 1
while (1) {
    
    console.log(1);
    i++;
    if(i>10){
        break;
    }
}
```
위 코드를 입력하면 1이 계속 출력된다.

## for
while문이랑 그리 크게 다르지 않은 반복문이다.
for문은 괄호안에 변수 선언을 할수있다.
```javascript
//예시
for (let i = 2; 2 <= 9; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
    
}
```
이러면 2단을 계속 출력할수있다.



