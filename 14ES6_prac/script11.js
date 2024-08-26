/*
모듈은 ES6에서 미리 작성한 클래스파일이고
변수, 함수, 클래스 등이 포함

모듈을 외부로 내보낼 때는 
named export 방식 : 여러 값을 내보낼 때 가져올 때는 동일한 이름 사용
default export방식 : 하나 씩 내보낼 때 가져올 때 원하는 이름으로 사용가능
*/

//named export 방식
export const name = "홍길동";
export const age = 20;

export let info = () => {
    console.log(name, age);
    
 }