import{square,where, turn, changeTurn}from"./index.js"
import{rookMoves}from"./rook.js"
let nums
let moves = 0
function kingDebuger(){
    square[6].removeEventListener("click", castleShort)
    square[2].removeEventListener("click", castleLong)
    let x = 0
    while(x<64){
        square[x].removeEventListener("click",move)
        square[x].classList.remove("avail")
        square[x].classList.remove("selected")
        x++
    }
}
function kingb(num){
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
    if(moves == 0 && rookMoves == 0){
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
            square[6].addEventListener("click", castleShort)
            square[6].classList.add("avail")
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
            square[2].addEventListener("click", castleLong)
            square[2].classList.add("avail")
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
        if(square[num].classList.contains("bpawn")
        ||square[num].classList.contains("brook")
        ||square[num].classList.contains("bbishop")
        ||square[num].classList.contains("bqueen")
        ||square[num].classList.contains("bknight")
        ||square[num].classList.contains("bking")){
        }
        else{
            square[num].classList.add("avail")
            square[num].addEventListener("click", move)
        }
    }

function move(){
    square[nums].classList.remove("bking")
    square[where].classList.add("bking")
    square[where].classList.remove("wqueen")
    square[where].classList.remove("wking")
    square[where].classList.remove("wrook")
    square[where].classList.remove("wbishop")
    square[where].classList.remove("wpawn")
    square[where].classList.remove("wknight")
    changeTurn("white")
    kingDebuger()
    moves++
}
function castleShort(){
    square[4].classList.remove("bking")
    square[7].classList.remove("brook")
    square[6].classList.add("bking")
    square[5].classList.add("brook")
    kingDebuger()
    changeTurn("white")
    moves++
}
function castleLong(){
    square[4].classList.remove("bking")
    square[0].classList.remove("brook")
    square[2].classList.add("bking")
    square[3].classList.add("brook")
    kingDebuger()
    changeTurn("white")
    moves++
}
export{
    kingb, kingDebuger
}