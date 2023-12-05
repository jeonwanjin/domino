
/*
let arr = [];
const btn = document.querySelector('#btn1');
let todoList = document.querySelector('.todoList');
let tag = document.createElement('h2');
let text = document.createTextNode('h2 삽입');


btn.addEventListener('click',function(e){
    let val = document.querySelector('#todo').value;
    arr.push(val);
   // todoList.innerHTML += `<li></div><span>✔</span>${val}</li>`;
    showList();
    e.preventDefault();

    todo.value ='';
    todo.focus();
})


function showList(){
    let olTag = document.createElement('ol');
    let liTag = document.createElement('li');
    let spanTag = document.createElement('span');
    let checkTxt = document.createTextNode('&check;')

    for(item of arr){
        let listText = document.createTextNode(item);
        spanTag.appendChild(checkTxt);
        liTag.appendChild(spanTag);
        liTag.appendChild(listText);
        olTag.appendChild(litag);
    }
    todoList.appendChild(tag);
    tag.appendChild(text);

    // let lists = '<ol>
    // for(item of arr){
 
    //     lists+=`<li></div><span>✔</span>${item}</li>`;
    
    // }
    // lists += '</ol>'
    // todoList.innerHTML = lists;
    let check = document.querySelectorAll('li');
    for(ck of check){
        ck.onclick = checkList;
    }
}
function checkList(){
    this.style.color = '#ddd';
    this.parentNode.classList.add = 'active';
    this.style.textDecoration = "line-through";
}


check.forEach(function(ck){
    console.log(ck);
    ck.addEventListener('click',function(e){
        let ta = e.currentTarget;
        console.log(ta);

        if(ta == e.currentTarget){
            ck.classList.add('active');
        }
    })
});


let count = document.querySelector('#count');
let btn2 = document.querySelector('#btn2');
let content = document.querySelector('.content');
let Txt = document.createTextNode('완성');


btn2.addEventListener('click',()=>{
  //  let val = count.value;
 //   console.log(val);
    let tableWrap = document.querySelector('.tableWrap'); 
    let tableTag = document.createElement('table')
 //   for(i=0; i < val; i++){
    tableWrap.appendChild(tableTag);
    let trTag = document.createElement('tr');
    tableTag.appendChild(trTag);
    let tdTag = document.createElement('td');
    trTag.appendChild(tdTag);
    let text = document.createTextNode('완성');
      //  let textNum = document.createTextNode(i);
    tdTag.appendChild(text);
 //   }
})
*/
let count = document.querySelector('#count');
let count2 = document.querySelector('#count2');
let btn2 = document.querySelector('#btn2');
let Txt = document.createTextNode('완성');

btn2.addEventListener('click',()=>{
    let val1 = document.querySelector('#count').value;
    let val2 = document.querySelector('#count2').value;
    let tableWrap = document.querySelector('.tableWrap');
    let tableTag = document.createElement('table');

    for(s=0; s < val1; s++){
        tableWrap.appendChild(tableTag);
        let trTag = document.createElement('tr');
        tableTag.appendChild(trTag);
    
        for(i=0; i < val2; i++){
            let tdTag = document.createElement('td');
            let text2 = document.createTextNode(`${s},${i}`);
            trTag.appendChild(tdTag);
            tdTag.appendChild(text2);  
        }
    }
})


