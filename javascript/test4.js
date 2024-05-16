/* [Data Types]

여섯개의 Primitive Type과
한 개의 오브젝트 타입이있다.

1) Number (숫자)
2) string (문자열)
3) Boolean (불리언)
4) undefined (언디파인드)
5) null (널)
6) Symbol (심볼) 
7) Object (옵젝) */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-----------');
const infinity = Infinity;
const nInfinity = -Infinity;
console.log('------------');

/* string 타입*/

const handSomeseok = '"잘"생긴석';
console.log(handSomeseok);
console.log(typeof handSomeseok);

const uglyseok = "'못'생긴석";
console.log(uglyseok);

/* Template Literal

    Escaping Character
1) newline - \n
2) tab - \t
3) 백슬래시를 스트링으로 표현하고싶다? 두번 입력 ㄱㄱ.*/

const crazyugly = '미친\n못생긴';
console.log(crazyugly);
const crazyuglyseok = '미친\t못생긴\t석';
console.log(crazyuglyseok);
const backSlash = '잘생긴\\준석';
console.log(backSlash);
const smaller = '잘생긴\준석';
console.log(smaller);

const crazyuglyseok2 = `미친\못생긴석ㅋㅋ`;
console.log(crazyuglyseok2);
console.log(typeof crazyuglyseok2);

const groupName = '리준석';
console.log(groupName + '미친 \못생긴석ㅋㅋ');
console.log(` ${groupName} 미친\못생긴석ㅋㅋ`);

// Boolean 타입

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

//undefined

let undefineding;
console.log(undefineding);

//null

let init = null;
console.log(init);
console.log(typeof init);

//symbol 타입

const test1 = '1';
const test2 = '2';

console.log(test1 === test2);
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

//object type
//키; 밸류의 쌍으로 이루어진다 key;value
const dictionary = {
    red: '빨간색',
    yellow: '노란색',
    orange: '주황색'
};

console.log(dictionary);
console.log(dictionary['yellow']);

//Array

const ivemembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];
console.log(ivemembersArray);
/* static typing > 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를한다.
dynamic typing > 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 "추론"한다
JS > dynamic typing*/

