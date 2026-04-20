
let a = true ;//show , если 1 = то включено если 0 то нет

const gg = document.getElementsByClassName("closeshow")[0];
const gg1 = document.querySelector('.shower');
function ggz(){
    if (a){
        gg.style.display = "none";
        gg1.value = '>';
        console.log(a);
    }
    else{
        gg.style.display = "inline-block";
        gg1.value = '<';
        console.log(a);
    } 
    a =!a; 

}


