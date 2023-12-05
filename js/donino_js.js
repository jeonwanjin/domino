const float = document.querySelector('.floating');
const closeBtn = document.querySelector('.btn_close');

closeBtn.addEventListener('click',function(){
    float.classList.add('off');
});


const navMoreBtn = document.querySelector('.btn_more');
const subNav = document.querySelector('.sub_nav');

navMoreBtn.addEventListener('click',function(){
    subNav.classList.toggle('active');
});



const tabMenus = document.querySelectorAll('.tab_menu');
const tabName = document.querySelector('#tab_name');


tabMenus.forEach(function(tabMenu){
    tabMenu.addEventListener('click',function(){
        tabName.innerHTML = tabMenu.dataset.text;
    })
})


const menuNav = document.querySelector('.ul_nav');
const contents = document.querySelectorAll('.menu_section');

menuNav.addEventListener('click',function(e){
    let id = e.target.dataset.id;
    contents.forEach(function(content){
        content.classList.remove('active');
    });
    let secId = document.getElementById(id);
    secId.classList.add('active');
})



tabMenus.forEach(function(tabMenu){
    tabMenu.addEventListener('click',function(e){
        let tar = e.target;
        tabMenus.forEach(function(tabMenu){
            tabMenu.classList.remove('on');   
        })
        if(tar == e.target){
            tabMenu.classList.add('on');
        }
    })
});


const guide = document.querySelector('.guide_area');
const foot =  document.querySelector('.foot');

tabMenus.forEach(function(tabMenu){
    tabMenu.addEventListener('click',function(e){
        let tar = e.target;
        tabMenus.forEach(function(){
            guide.classList.remove('off');
        })
        if(tar == tabMenus[2]){
            guide.classList.add('off');
        }
    })
});

tabMenus.forEach(function(tabMenu){
    tabMenu.addEventListener('click',function(e){
        let tar = e.target;
        tabMenus.forEach(function(){
            foot.classList.remove('off');
        })
        if(tar == tabMenus[2]){
            foot.classList.add('off');
        }
    })
});


const toggleBox = document.querySelector('.toggle_box');
const toppingToggle = document.querySelector('.btn_toggle_close');


toppingToggle.addEventListener('click',function(){
    
    let i=0;
    i++;

        if(i%1 == 0){
            toggleBox.classList.add('active');
        }else if(i%2 == 0){
            toggleBox.classList.remove('active');
        }
    
});



const selects = document.querySelectorAll('.select_type3>select');
const leftPizza = document.querySelector('.pizza_left');
const rightPizza = document.querySelector('.pizza_right');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
const selectPizza = document.querySelectorAll('.select_type3');
const select1Pizza = document.querySelector('.pizza_select1');
const select2Pizza = document.querySelector('.pizza_select2');


let array = ['n1.png','n2.png','n3.png','n4.png']




selects.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;                       
        if(selected == select1Pizza){
            leftPizza.innerHTML = `<img src="./img/${array[num-1]}" alt="">`
        }else if(leftPizza.children.length == 0){
            alert('첫번째 피자부터 선택하세요');
        }else if(selected == select2Pizza){
            rightPizza.innerHTML = `<img src="./img/${array[num-1]}" alt="">`
        }
    })
})



select1Pizza.addEventListener('change',function(){

        let num = select1Pizza.options.selectedIndex;      
        console.log(num);
        
        if(num){
            select2Pizza.options.remove(num);
            console.log(select2Pizza.children.length);
        }     
        
})




const sizeCheck = document.querySelector('.size_box');
const sizeChoices = docufment.querySelectorAll('.size_box>div');

sizeCheck.addEventListener('click',function(e){
    let tar = e.target;
    sizeChoices.forEach(function(sizeChoice){
        sizeChoice.classList.remove('selected');
        if(tar == sizeChoice){
            tar.classList.add('selected');
        }
    })
})



sizeCheck.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target == sizeCheck.firstElementChild){
        sizeCheck.firstElementChild.classList.add('selected');
        sizeCheck.lastElementChild.classList.remove('selected');
    }else if(e.target == sizeCheck.lastElementChild){
        sizeCheck.lastElementChild.classList.add('selected');
        sizeCheck.firstElementChild.classList.remove('selected');
    }
})


const btns = document.querySelectorAll('.quantity_box');
const minusBtns = document.querySelectorAll('.btn_minus');
const plusBtns = document.querySelectorAll('.btn_plus');


btns.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
       console.log(e.target); 
       let t = e.target;
       if(t == minusBtns[i]){
      
            minusFunc(t)
       
        }else if(t == plusBtns[i]){
       
            plusFunc(t)
        }
    })
});

function minusFunc(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
    next.value--;
    }   
}

function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value < 9){
        prev.value++;
    }else if(prev.value == 9){
        alert('피자는 9판만 주문 가능합니다.')
    }
}


const pasueBtn = document.querySelector('.pasue');

pasueBtn.addEventListener('click',function(){
    
})