/*
function name0(){console.log('name0')}
let names = name0();
console.log(names);

let name1 = function(){return 'name1'}
console.log(name1);
let named = name1();
console.log(named);

let box = document.querySelector('.box');
box.addEventListener('mouseenter',function(){
    //alert('box mouseEnter');
    console.log('box mouseEnter');
});

box.addEventListener('mouseleave',function(){
    console.log('box mouseLeave');
    //alert('box mouseLeave');
})


let gnb = document.querySelector('.menu');
let lnb = document.querySelector('.sub_menu_list')

gnb.addEventListener('mouseenter',function(){
    lnb.classList.add('displayB');
    lnb.classList.remove('displayN');
})
gnb.addEventListener('mouseleave',function(){
    lnb.classList.add('displayN');
    lnb.classList.remove('displayB');
})
*/

let gnb = document.querySelectorAll('.menu');
let lnb = document.querySelectorAll('.sub_menu_list');

gnb.forEach(function( menu , i){
   
    menu.addEventListener('mouseenter',function(){
        let lns = menu.children; //a,ul
        for(a in lnb){
            lnb[a].classList.add('displayN');
                           if(lns[1] === lnb[i]){
                     lnb[i].classList.remove('displayN');
                }
        }
    })
})
