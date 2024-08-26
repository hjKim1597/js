/*
모듈은 ES6에서 미리작성한 클래스 파일이고
변수, 함수, 클래스 등이 포함됩니다

모듈을 외부로 내보낼 때는 
named export방식 : 여러 값을 내보낼 때
default export 방식 : 하나씩 내보낼 때
*/

//named export 방식
export const name = "홍길동";
export const age = 20;

export let info = () => {
    console.log(name, age);
}

/////////////////////////////
let x = 10;
let y = 1;
let add = () => x + y;

export{x, y, add}

