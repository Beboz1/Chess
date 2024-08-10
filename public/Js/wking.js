import{square,where, changeTurn, turn}from"./index.js"
let nums
function kingDebuger2(){
    let x = 0
    while(x<64){
        square[x].removeEventListener("click",move)
        square[x].classList.remove("avail")
        square[x].classList.remove("selected")
        x++
    }
}
function kingw(num){
    nums = num
    let column = 0
    let row = 0
    if(num == 7 || num == 15 || num == 23 || num == 31 || num == 39 || num == 47 || num== 55 || num == 63){
        column = 8
    }
    if(num == 7 +1|| num == 15+1 || num == 23+1 || num == 31+1 || num == 39+1 || num == 47+1 || num== 55 +1|| num == 0){
        column = 1
    }
    if(num == 0 || num == 1 || num == 2  || num == 3  || num == 4 || num == 5 || num==6  || num == 7){
        row = 1
    }
    if(num == 56 || num == 57 || num == 58 || num == 59 || num ==60 || num == 61 || num==  62 || num == 63){
        row = 8
    }
    
    if(column != 1){
        if(row != 1){
            available(nums - 1)
            available(nums - 8)
            available(nums - 9)
        }
        if(row != 8){
            available(nums - 1)
            available(nums + 8)
            available(nums + 7)
        }
    }
    //*split
    if(column != 8){
        if(row != 1){
            available(nums + 1)
            available(nums - 8)
            available(nums - 7)

        }
        if(row != 8){
            available(nums + 1)
            available(nums + 8)
            available(nums + 9)
        }
    }

}

function available(num){
        if(square[num].classList.contains("wpawn")
        ||square[num].classList.contains("wrook")
        ||square[num].classList.contains("wbishop")
        ||square[num].classList.contains("wqueen")
        ||square[num].classList.contains("wknight")
        ||square[num].classList.contains("wking")){
        }
        else{
            square[num].classList.add("avail")
            square[num].addEventListener("click", move)
        }
    }

function move(){
    square[nums].classList.remove("wking")
    square[where].classList.add("wking")
    square[where].classList.remove("bqueen")
    square[where].classList.remove("bking")
    square[where].classList.remove("brook")
    square[where].classList.remove("bbishop")
    square[where].classList.remove("bpawn")
    changeTurn("black")
    kingDebuger2()
}
export{
    kingw, kingDebuger2
}