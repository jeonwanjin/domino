function name(){}
let name1 = function(){} //익명함수
let name2 = ()=>{} //화살표함수

function hello(){
    return '안녕';
}

console.log(hello());

let hello1 = function(){
    return '안녕1';
}

console.log(hello1());

let hello2 = ()=> '안녕2';
// 리턴 값만 간단히 출력할때는 { return } 이 생략가능하다. }

console.log(hello2());

let plus1 = (a, b)=> a + b;

console.log(plus1(1,2));

let square = c => c*c;
console.log(square(3))

let hi = ()=>console.log(24);
hi()

let say = ()=> // alert(20);
say();

let sum = (a,b,c) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c);
    let sum = a+b+c;
    console.log(sum);
}

sum(1,2,3);
sum(1,2);



let car = {
    name : 'sm3',
    color : 'silver',
    age : '2023',
    plus : function(){
        return 2023 - Number(this.age);
    }
};
console.log(car.name);
car.door = '4';
delete car.door;
console.log(car);
car.age ='2013';
console.log(car);

let mycar = car;
console.log(mycar);
mycar.name = 'sm5';
console.log(car);
let mineCar = {};

//let car = mineCar;
//console.log(mineCar);
//복제 car에 있는 객체를 mineCar로 복제하기
for(let key in car){
    mineCar[key] = car[key];
}
console.log(mineCar);
mineCar.name='sonata';
console.log('mineCar');
console.log(mineCar);
console.log('car');
console.log(car);
car.age = 2013;
console.log(car.plus());

let myClass = {
    room : '301',
    subject : '프론트엔드',
    teacher : '박순옥',
    startTime : '9시 20분',
    endTime : '6시 00분',
} 


let editClass = {};

for(let key in myClass){
    editClass[key] = myClass[key];
}

editClass.room = '303';
editClass.subject = '편집';
editClass.teacher = '편집쌤';

console.log(editClass);
let list = document.querySelector('.list');
let room = document.querySelector('.room');
let subject = document.querySelector('.subject');
let teacher = document.querySelector('.teacher');

list.innerHTML = 
    `<li>${editClass.startTime}</li>
     <li>${editClass.startTime}</li>
     `;
room.innerHTML = 
    `<span>${editClass.room}</span>`;
subject.innerHTML = 
    `<span>${editClass.subject}</span>`;
teacher.innerHTML = 
    `<span>${editClass.teacher}</span>`;





function fruits(apple,orange,banana){
    this.apple = apple; 
    this.orange = orange; 
    this.banana = banana; 
}
let priceFruits = new fruits(10000,8000,4000);
let primiumPriceFruits = new fruits(20000,10000,8000);

const nomal = document.querySelector('.price_nomal');
const primium = document.querySelector('.price_primium');

const grades = (a,b)=>{
   
  //  for(key of Object.keys(b)) key값 출력
  //  for(value of Object.values(b)) value값을 출력    
  //   for([key, value] of Object.entries(b)) 둘 다 출력     
        for([key, value] of Object.entries(b)){
        let val = value.toLocaleString(); //천단위 쉼표 찍기 
        a.innerHTML += `
        <li>${key} : ${val} 원</li>
        `
    }
    /*
    a.innerHTML = `
    <li>${b.apple}</li>
    <li>${b.orange}</li>
    <li>${b.banana}</li>
    `;
    */
}
grades(nomal,priceFruits);
grades(primium,primiumPriceFruits);




function dominoMenu(img, title, Lprice , Mprice , hashTag){
    this.img = img;
    this.title = title;
    this.Lprice = Lprice;
    this.Mprice = Mprice;
    this.hashTag = hashTag;
}

let firstMenu = new dominoMenu('./img/img.png' , '포테이토피자' , 32000 , 25000 , '해시태그')