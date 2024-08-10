import{pawnw, pawnb, pawnDebuger}from"./pawn.js"
import{rookbh, rookbv, rookDebuger}from"./rook.js"
import{rookwh, rookwv, wrookDebuger}from"./wrook.js"
import{queenw, queenw2, queenDebuger2}from"./wqueen.js"
import{queenw3, queenw4, queen2Debuger2}from"./wqueen2.js"
import{queenb, queenb2, queenDebuger}from"./bqueen.js"
import{queenb3, queenb4, queen2Debuger}from"./bqueen2.js"
import{bishopb, bishopb2, bishopDebuger}from"./bishop.js"
import{bishopw, bishopw2, bishopDebuger2}from"./wbishop.js"
import{kingb, kingDebuger}from"./bking.js"
import{kingw, kingDebuger2}from"./wking.js"
import{knightb, knightDebuger}from"./bknight.js"
import{knightw, knightDebuger2}from"./wknight.js"
let turn = "white"
let board = document.querySelector(".chess-board")
let square = document.querySelectorAll('#square')
let info = document.querySelector("#info")
let v = 1
let where                        
square[0].addEventListener("click", ()=>{clicked(0)})
square[1].addEventListener("click", ()=>{clicked(1)})
square[2].addEventListener("click", ()=>{clicked(2)})
square[3].addEventListener("click", ()=>{clicked(3)})
square[4].addEventListener("click", ()=>{clicked(4)})
square[5].addEventListener("click", ()=>{clicked(5)})
square[6].addEventListener("click", ()=>{clicked(6)})
square[7].addEventListener("click", ()=>{clicked(7)})
square[8].addEventListener("click", ()=>{clicked(8)})
square[9].addEventListener("click", ()=>{clicked(9)})
square[10].addEventListener("click", ()=>{clicked(10)})
square[11].addEventListener("click", ()=>{clicked(11)})
square[12].addEventListener("click", ()=>{clicked(12)})
square[13].addEventListener("click", ()=>{clicked(13)})
square[14].addEventListener("click", ()=>{clicked(14)})
square[15].addEventListener("click", ()=>{clicked(15)})
square[16].addEventListener("click", ()=>{clicked(16)})
square[17].addEventListener("click", ()=>{clicked(17)})
square[18].addEventListener("click", ()=>{clicked(18)})
square[19].addEventListener("click", ()=>{clicked(19)})
square[21].addEventListener("click", ()=>{clicked(21)})
square[22].addEventListener("click", ()=>{clicked(22)})
square[23].addEventListener("click", ()=>{clicked(23)})
square[24].addEventListener("click", ()=>{clicked(24)})
square[25].addEventListener("click", ()=>{clicked(25)})
square[26].addEventListener("click", ()=>{clicked(26)})
square[27].addEventListener("click", ()=>{clicked(27)})
square[28].addEventListener("click", ()=>{clicked(28)})
square[29].addEventListener("click", ()=>{clicked(29)})
square[31].addEventListener("click", ()=>{clicked(31)})
square[32].addEventListener("click", ()=>{clicked(32)})
square[33].addEventListener("click", ()=>{clicked(33)})
square[34].addEventListener("click", ()=>{clicked(34)})
square[35].addEventListener("click", ()=>{clicked(35)})
square[36].addEventListener("click", ()=>{clicked(36)})
square[37].addEventListener("click", ()=>{clicked(37)})
square[38].addEventListener("click", ()=>{clicked(38)})
square[39].addEventListener("click", ()=>{clicked(39)})
square[41].addEventListener("click", ()=>{clicked(41)})
square[42].addEventListener("click", ()=>{clicked(42)})
square[43].addEventListener("click", ()=>{clicked(43)})
square[44].addEventListener("click", ()=>{clicked(44)})
square[45].addEventListener("click", ()=>{clicked(45)})
square[46].addEventListener("click", ()=>{clicked(46)})
square[47].addEventListener("click", ()=>{clicked(47)})
square[48].addEventListener("click", ()=>{clicked(48)})
square[49].addEventListener("click", ()=>{clicked(49)})
square[51].addEventListener("click", ()=>{clicked(51)})
square[52].addEventListener("click", ()=>{clicked(52)})
square[53].addEventListener("click", ()=>{clicked(53)})
square[54].addEventListener("click", ()=>{clicked(54)})
square[55].addEventListener("click", ()=>{clicked(55)})
square[56].addEventListener("click", ()=>{clicked(56)})
square[57].addEventListener("click", ()=>{clicked(57)})
square[58].addEventListener("click", ()=>{clicked(58)})
square[59].addEventListener("click", ()=>{clicked(59)})
square[61].addEventListener("click", ()=>{clicked(61)})
square[62].addEventListener("click", ()=>{clicked(62)})
square[63].addEventListener("click", ()=>{clicked(63)})
square[20].addEventListener("click", ()=>{clicked(20)})
square[30].addEventListener("click", ()=>{clicked(30)})
square[40].addEventListener("click", ()=>{clicked(40)})
square[50].addEventListener("click", ()=>{clicked(50)})
square[60].addEventListener("click", ()=>{clicked(60)})



function chessBoard(){
    square[1].classList.add("bknight")
    square[6].classList.add("bknight")
    square[62].classList.add("wknight")
    square[57].classList.add("wknight")
    square[3].classList.add("bqueen")
    square[4].classList.add("bking")
    square[59].classList.add("wqueen")
    square[60].classList.add("wking")
    square[0].classList.add("brook")
    square[2].classList.add("bbishop")
    square[5].classList.add("bbishop")
    square[58].classList.add("wbishop")
    square[61].classList.add("wbishop")
    square[7].classList.add("brook")
    square[63].classList.add('wrook')
    square[56].classList.add('wrook')
    square[48].classList.add("one")
    square[49].classList.add("one")
    square[50].classList.add("one")
    square[51].classList.add("one")
    square[52].classList.add("one")
    square[53].classList.add("one")
    square[54].classList.add("one")
    square[55].classList.add("one")
    square[48].classList.add("wpawn")
    square[49].classList.add("wpawn")
    square[50].classList.add("wpawn")
    square[51].classList.add("wpawn")
    square[52].classList.add("wpawn")
    square[53].classList.add("wpawn")
    square[54].classList.add("wpawn")
    square[55].classList.add("wpawn")
    square[8].classList.add("one")
    square[9].classList.add("one")
    square[10].classList.add("one")
    square[11].classList.add("one")
    square[12].classList.add("one")
    square[13].classList.add("one")
    square[14].classList.add("one")
    square[15].classList.add("one")
    square[8].classList.add("bpawn")
    square[9].classList.add("bpawn")
    square[10].classList.add("bpawn")
    square[11].classList.add("bpawn")
    square[12].classList.add("bpawn")
    square[13].classList.add("bpawn")
    square[14].classList.add("bpawn")
    square[15].classList.add("bpawn")
}
let btn = document.querySelector("#unselect")
let rotater = document.querySelector("#flip")

btn.addEventListener("click",Debuger)
rotater.addEventListener("click", flips2)
chessBoard()
function flips2(){
    if(v == 1){
        let y = 0
        while(y < 64){
            square[y].classList.add("simple")
            y++
    }
       board.classList.add("flip")
       v = 2
    }
    else if(v == 2){
        let y = 0
        while(y < 64){
            square[y].classList.remove("simple")
            y++
    }
       board.classList.remove("flip")
       v = 1
    }
}
function flips(){
    if(turn == "black"){
        let y = 0
        while(y < 64){
            square[y].classList.add("simple")
            y++
    }
       board.classList.add("flip")
    }
    else if(turn == "white"){
        let y = 0
        while(y < 64){
            square[y].classList.remove("simple")
            y++
    }
       board.classList.remove("flip")
    }
}
function Debuger(){
    btn.classList.add("selecting")
    setTimeout(()=>{
        btn.classList.remove("selecting")
    }, 1000)
    rotater.classList.add("selecting")
    setTimeout(()=>{
        rotater.classList.remove("selecting")
    }, 1000)
    wrookDebuger()
    rookDebuger()
    pawnDebuger()
    bishopDebuger()
    bishopDebuger2()
    queenDebuger()
    queen2Debuger()
    queenDebuger2()
    queen2Debuger2()
    kingDebuger()
    kingDebuger2()
    knightDebuger()
    knightDebuger2()
}
export{square, where, turn, changeTurn}
function changeTurn(val){
    turn = val
    flips()
    Debuger()
}
function clicked(num){

    console.log("clicked "+num)
    where = num
    if(turn == "white"){
    

    if(square[num].classList.contains("wpawn")){
        Debuger()
        square[num].classList.add("selected")
        pawnw(num)
        
    }
    else if(square[num].classList.contains("wrook")){
        Debuger()
        square[num].classList.add("selected")
        rookwv(num)
        rookwh(num)
        
    }
    else if(square[num].classList.contains("wbishop")){
        Debuger()
        square[num].classList.add("selected")
        bishopw(num)
       bishopw2(num)
       
    }
    else if(square[num].classList.contains("wqueen")){
        Debuger()
        square[num].classList.add("selected")
        queenw(num)
       queenw2(num)
       queenw3(num)
       queenw4(num)
       
    }
    else if(square[num].classList.contains("wking")){
        Debuger()
        square[num].classList.add("selected")
        kingw(num)
        
    }
    else if(square[num].classList.contains("wknight")){
        Debuger()
        square[num].classList.add("selected")
        knightw(num)
        
    }

}
if(turn == "black"){
    if( square[num].classList.contains("bpawn"))
    {
        Debuger()
        square[num].classList.add("selected")
        pawnb(num)
        
    }
    else if(square[num].classList.contains("brook")){
        Debuger()
        square[num].classList.add("selected")
        rookbv(num)
        rookbh(num)
        
    }
    
    
    else if(square[num].classList.contains("bbishop")){
        Debuger()
        square[num].classList.add("selected")
        bishopb(num)
       bishopb2(num)
       
    }
    
    else if(square[num].classList.contains("bqueen")){
        Debuger()
        square[num].classList.add("selected")
        queenb(num)
       queenb2(num)
       queenb3(num)
       queenb4(num)
       
    }
    
    else if(square[num].classList.contains("bking")){
        Debuger()
        square[num].classList.add("selected")
        kingb(num)
        
    }
    else if(square[num].classList.contains("bknight")){
        Debuger()
        square[num].classList.add("selected")
        knightb(num)
        
    }
}
}