/*
let r = prompt('반지름을 입력하세요');
let h = prompt('높이를 입력하세요');
const pi = 3.1415;

function cylinder(){
    document.write(`<br> 원기둥의 부피는 ${r*r*pi*h}입니다`);
}
cylinder();





let sum = 0;

for(i=0; i<=100; i++){
    
    if(i%3 == 0){
        continue;
    }
    sum = sum + i;
}
document.write(`<br> ${sum}`);



let array = ['함수 공부하기', '이벤트 공부하기', '블렌더 마무리 잘 하기'];
function todo(){
    for(i in array){
        document.write(` <br> ${parseInt(i)+1} . ${array[i]}`)
    }
}
todo();


let tabLink = document.getElementsByClassName('tabLink');

for(i=0; i<tabLink.length; i++){
    console.log(tabLink[i]);
    tabLink[i].style.display = "none"
}
tabLink[0].style.display= "block"

*/

querySelector('id, class , tag');
querySelectorAll('tag, class');
getElementsByClassName('class') 
getElementById('id');
getElementByTagName('tag');
// id일때는 # 클래스일때는 .을 사용한다
function tabOpen(e,a){
    let tabCont = document.getElementsByClassName('tabcont');
    for(i=0; i<tabCont.length; i++){
    //    console.log(tabCont[i]);
        tabCont[i].style.display = "none"
    }
      //  document.getElementById(a).style.display = "block";
      //tabCont[a].style.display = "block"

    let tabLink = document.getElementsByClassName('tabLink');
    for(i=0; i<tabLink.length; i++){
   //     tabLink[i].style.backgroundColor = 'yellow';
   //     tabLink[i].style.color = 'black';
          tabLink[i].classList.add('removeLink');
          tabLink[i].classList.remove('addLink');
    }
    e.currentTarget.classList.add('addLink');
    e.currentTarget.classList.remove('removeLink');
   // tabLink[b].style.backgroundColor = 'red';
  // e.currentTarget.style.backgroundColor = 'red';
 //  e.currentTarget.style.color = 'white';  // 이벤트가 일어난 자기 자신
}


//document.getElementById('def').style.display='block'
document.getElementById('def').click();
