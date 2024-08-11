import{square,where, changeTurn, turn}from"./index.js"
import{wrookMoves}from"./wrook.js"
let moves = 0
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
    if(moves == 0 && wrookMoves == 0){
        if(square[num + 1].classList.contains("wpawn")
        ||square[num + 1].classList.contains("wrook")
        ||square[num + 1].classList.contains("wbishop")
        ||square[num + 1].classList.contains("wqueen")
        ||square[num + 1].classList.contains("wknight")
        ||square[num + 1].classList.contains("wking") ||
        square[num + 2].classList.contains("wpawn")
        ||square[num + 2].classList.contains("wrook")
        ||square[num + 2].classList.contains("wbishop")
        ||square[num + 2].classList.contains("wqueen")
        ||square[num + 2].classList.contains("wknight")
        ||square[num + 2].classList.contains("wking")||
        square[num + 1].classList.contains("bpawn")
        ||square[num + 1].classList.contains("brook")
        ||square[num + 1].classList.contains("bbishop")
        ||square[num + 1].classList.contains("bqueen")
        ||square[num + 1].classList.contains("bknight")
        ||square[num + 1].classList.contains("bking") ||
        square[num + 2].classList.contains("bpawn")
        ||square[num + 2].classList.contains("brook")
        ||square[num + 2].classList.contains("bbishop")
        ||square[num + 2].classList.contains("bqueen")
        ||square[num + 2].classList.contains("bknight")
        ||square[num + 2].classList.contains("bking")){

        }
        else{
            square[62].addEventListener("click", castleShort)
            square[62].classList.add("avail")
        }
        if(square[num - 1].classList.contains("bpawn")
        ||square[num - 1].classList.contains("brook")
        ||square[num - 1].classList.contains("bbishop")
        ||square[num - 1].classList.contains("bqueen")
        ||square[num - 1].classList.contains("bknight")
        ||square[num - 1].classList.contains("bking") ||
        square[num - 2].classList.contains("bpawn")
        ||square[num - 2].classList.contains("brook")
        ||square[num - 2].classList.contains("bbishop")
        ||square[num - 2].classList.contains("bqueen")
        ||square[num - 2].classList.contains("bknight")
        ||square[num - 2].classList.contains("bking")||
        square[num - 3].classList.contains("bpawn")
        ||square[num - 3].classList.contains("brook")
        ||square[num - 3].classList.contains("bbishop")
        ||square[num - 3].classList.contains("bqueen")
        ||square[num - 3].classList.contains("bknight")
        ||square[num - 3].classList.contains("bking")||
        square[num - 1].classList.contains("wpawn")
        ||square[num - 1].classList.contains("wrook")
        ||square[num - 1].classList.contains("wbishop")
        ||square[num - 1].classList.contains("wqueen")
        ||square[num - 1].classList.contains("wknight")
        ||square[num - 1].classList.contains("wking") ||
        square[num - 2].classList.contains("wpawn")
        ||square[num - 2].classList.contains("wrook")
        ||square[num - 2].classList.contains("wbishop")
        ||square[num - 2].classList.contains("wqueen")
        ||square[num - 2].classList.contains("wknight")
        ||square[num - 2].classList.contains("wking")||
        square[num - 3].classList.contains("wpawn")
        ||square[num - 3].classList.contains("wrook")
        ||square[num - 3].classList.contains("wbishop")
        ||square[num - 3].classList.contains("wqueen")
        ||square[num - 3].classList.contains("wknight")
        ||square[num - 3].classList.contains("wking")){

        }
        else{
            square[58].addEventListener("click", castleLong)
            square[58].classList.add("avail")
        }
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
    moves++
    changeTurn("black")
    kingDebuger2()
}

function castleShort(){
    square[60].classList.remove("wking")
    square[63].classList.remove("wrook")
    square[62].classList.add("wking")
    square[61].classList.add("wrook")
    kingDebuger2()
    changeTurn("black")
    moves++
}
function castleLong(){
    square[60].classList.remove("wking")
    square[56].classList.remove("wrook")
    square[58].classList.add("wking")
    square[59].classList.add("wrook")
    kingDebuger()
    changeTurn2("black")
    moves++
}
export{
    kingw, kingDebuger2
}