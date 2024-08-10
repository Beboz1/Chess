import{square, where, changeTurn, turn}from"./index.js";
let num
let nom
function pawnDebuger() {
    let x = 0
    while (x < 63) {
        square[x].removeEventListener("click", fun2)
        square[x].removeEventListener("click", fun5)
        square[x].removeEventListener("click", fun8)
        square[x].removeEventListener("click", fun11)
        square[x].classList.remove("avail")
        square[x].classList.remove("selected")
        x++;
    }
}
function debuger(){
    let x = 0
    while (x < 63) {
        square[x].removeEventListener("click", fun2)
        square[x].removeEventListener("click", fun5)
        square[x].removeEventListener("click", fun8)
        square[x].removeEventListener("click", fun11)
        square[x].classList.remove("avail")
        square[x].classList.remove("selected")
        x++;
    }
}
async function pawnb(nums){
    num = nums
    //check if there is a piece infront of it
    
    //check if it is the first time
    if(square[num].classList.contains("one")){
        if(square[num + 16].classList.contains("bpawn")
            ||square[num + 16].classList.contains("brook")
            ||square[num + 16].classList.contains("bbishop")
            ||square[num + 16].classList.contains("bqueen")
            ||square[num + 16].classList.contains("bknight")
            ||square[num + 16].classList.contains("bking")
            ||square[num + 16].classList.contains("wpawn")
            ||square[num + 16].classList.contains("wrook")
            ||square[num + 16].classList.contains("wbishop")
            ||square[num + 16].classList.contains("wqueen")
            ||square[num + 16].classList.contains("wknight")
            ||square[num + 16].classList.contains("wking")){
            console.log("i sadly cant move twice")
        }
        else{
            square[num + 16].classList.add("avail")
            square[num + 16].addEventListener("click", fun5)
        }
    }
        //if it was on a white square
        if(square[num].classList.contains("bpawn")){
            num = nums
            if(square[num + 7].classList.contains("wpawn")
            ||square[num + 7].classList.contains("wrook")
            ||square[num + 7].classList.contains("wbishop")
            ||square[num + 7].classList.contains("wqueen")
            ||square[num + 7].classList.contains("wknight")
            ||square[num + 7].classList.contains("wking")){
                num = nums
                square[num + 7].addEventListener("click", fun2)
                square[num+7].classList.add("avail")
            }
            if(square[num + 9].classList.contains("wpawn")
            ||square[num + 9].classList.contains("wrook")
            ||square[num + 9].classList.contains("wbishop")
            ||square[num + 9].classList.contains("wqueen")
            ||square[num + 9].classList.contains("wknight")
            ||square[num + 9].classList.contains("wking")){
                num = nums
                square[num + 9].addEventListener("click", fun2)
                square[num+9].classList.add("avail")
            }
            if(square[num + 8].classList.contains("bpawn")
            ||square[num + 8].classList.contains("wpawn")
            ||square[num + 8].classList.contains("wrook")
            ||square[num + 8].classList.contains("wbishop")
            ||square[num + 8].classList.contains("wqueen")
            ||square[num + 8].classList.contains("wknight")
            ||square[num + 8].classList.contains("wking")){
            num = nums
        }
        else{
            num = nums
            square[num + 8].addEventListener("click", fun5)
            square[num+8].classList.add("avail")
        }
        
    } 
}
function fun2(){
    square[num].classList.remove("one")
    square[num].classList.remove("bpawn")
    square[where].classList.add("bpawn")
    square[where].classList.remove("wqueen")
    square[where].classList.remove("wking")
    square[where].classList.remove("wrook")
    square[where].classList.remove("wbishop")
    square[where].classList.remove("wpawn")
    square[where].classList.remove("wknight")
    changeTurn("white")
    remover(num)

}
function fun5(){
    square[num].classList.remove("one")
    square[num].classList.remove("bpawn")
    square[where].classList.add("bpawn")
    changeTurn("white")
    remover(num)
}
function remover(num){
    debuger()
    square[num + 7].removeEventListener("click", fun2)
    square[num + 9].removeEventListener("click", fun2)
    square[num + 8].removeEventListener("click", fun5)
}
async function pawnw(noms){
    nom = noms
    //check if it is the first time
    if(square[nom].classList.contains("one")){
        console.log("first")
        if(square[nom - 16].classList.contains("bpawn")
            ||square[nom - 16].classList.contains("brook")
            ||square[nom - 16].classList.contains("bbishop")
            ||square[nom - 16].classList.contains("bqueen")
            ||square[nom - 16].classList.contains("bknight")
            ||square[nom - 16].classList.contains("bking")
            ||square[nom - 16].classList.contains("wpawn")
            ||square[nom - 16].classList.contains("wrook")
            ||square[nom - 16].classList.contains("wbishop")
            ||square[nom - 16].classList.contains("wqueen")
            ||square[nom - 16].classList.contains("wknight")
            ||square[nom - 16].classList.contains("wking")){
            console.log("i sadly cant move twice")
        }
        else{
            square[nom - 16].classList.add("avail")
            square[nom - 16].addEventListener("click", fun11)
        }
    }
    
    
        //if it was on a white square
        if(square[nom].classList.contains("wpawn")){
            nom = noms
            if(square[nom - 7].classList.contains("bpawn")
            ||square[nom - 7].classList.contains("brook")
            ||square[nom - 7].classList.contains("bbishop")
            ||square[nom - 7].classList.contains("bqueen")
            ||square[nom - 7].classList.contains("bknight")
            ||square[nom - 7].classList.contains("bking")){
                nom = noms
                square[nom - 7].addEventListener("click", fun8)
                square[nom-7].classList.add("avail")
                
            }
            if(square[nom - 9].classList.contains("bpawn")
            ||square[nom - 9].classList.contains("brook")
            ||square[nom - 9].classList.contains("bbishop")
            ||square[nom - 9].classList.contains("bqueen")
            ||square[nom - 9].classList.contains("bknight")
            ||square[nom - 9].classList.contains("bking")){
                nom = noms
                square[nom - 9].addEventListener("click", fun8)
                square[nom-9].classList.add("avail")
            }
            if(square[nom - 8].classList.contains("bpawn")
            ||square[nom - 8].classList.contains("wpawn")
            ||square[nom - 8].classList.contains("wrook")
            ||square[nom - 8].classList.contains("wbishop")
            ||square[nom - 8].classList.contains("wqueen")
            ||square[nom - 8].classList.contains("wknight")
            ||square[nom - 8].classList.contains("wking")){
            nom = noms
        }
        else{
            nom = noms
            square[nom - 8].addEventListener("click", fun11)
            square[nom-8].classList.add("avail")
        }
        
    }
}
function fun8(){
    square[nom].classList.remove("one")
    square[nom].classList.remove("wpawn")
    square[where].classList.add("wpawn")
    square[where].classList.remove("bqueen")
    square[where].classList.remove("bking")
    square[where].classList.remove("brook")
    square[where].classList.remove("bbishop")
    square[where].classList.remove("bpawn")
    square[where].classList.remove("bknight")
    remover2(nom)
    changeTurn("black")

}
function fun11(){
    square[nom].classList.remove("one")
    square[nom].classList.remove("wpawn")
    square[where].classList.add("wpawn")
    changeTurn("black")
    remover2(nom)
}
function remover2(nom){
    debuger()
    square[nom - 7].removeEventListener("click", fun8)
    square[nom - 9].removeEventListener("click", fun8)
    square[nom - 8].removeEventListener("click", fun11)
}
export{
    pawnb,
    pawnw,
    pawnDebuger
}