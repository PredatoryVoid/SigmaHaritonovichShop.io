// let number = 4;
// let string = 'omg';

// console.log(string);
const priceTag = document.querySelector(".product__title");
const btn = document.querySelector('.product__btn');
let btnFlag = false;
let nameFlag = false;
function changeColor(){
    if(nameFlag == false){
        priceTag.classList.add('red');
        nameFlag = true
    }
    else{
        priceTag.classList.remove('red');
        nameFlag = false
    }
}
//
//}

function addProduct(){
    if(btnFlag==false){
        btn.innerText = 'В корзине';
        btn.style.backgroundColor = '#74ee84';
        btnFlag=true;
    }
    else{
        btn.innerText = 'Купить';
        btn.style.backgroundColor = '#2e87c2';
        btnFlag=false;
    }
   
}