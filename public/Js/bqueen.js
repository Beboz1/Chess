import{square, where, changeTurn, turn}from"./index.js"
import{queen2Debuger}from"./bqueen2.js"
let nums = 0
function queenDebuger() {
    let x = 0
    while(x < 64){
        square[x].removeEventListener("click", move)
        square[x].classList.remove("avail")
        square[x].classList.remove("selected")
        x++
    }
}
function queenb(num){
   let i = 0
    let j = 0
    let count = 0
    let count2 = 0
    let checker = 9
    let checker2 = 9
    nums = num
    //*check availability of square bottom right
    while(i < 8){
        if(nums == 8 - 1||nums == 16 - 1||nums == 24 - 1||nums == 32 - 1||nums == 40 - 1||nums == 48 - 1||nums == 56 - 1 || nums == 63){
            break;
        }
        if(nums + checker > 63){
            Adder(count)
            break;
        }
        if(nums + checker == 7|| nums + checker == 8+ 7||nums + checker == 16+7|| nums + checker ==24 +7|| nums + checker ==32 +7|| nums + checker ==40 +7|| nums + checker ==48 +7|| nums + checker == 56+7){
            if(square[nums + checker].classList.contains("bpawn")
        ||square[nums + checker].classList.contains("brook")
        ||square[nums + checker].classList.contains("bbishop")
        ||square[nums + checker].classList.contains("bqueen")
        ||square[nums + checker].classList.contains("bknight")
        ||square[nums + checker].classList.contains("bking")){
                i = 8
                Adder(count)
                break;
            }
            else{
                count++
                Adder(count)
                break;
            }
        }
        if(square[nums + checker].classList.contains("bpawn")
        ||square[nums + checker].classList.contains("brook")
        ||square[nums + checker].classList.contains("bbishop")
        ||square[nums + checker].classList.contains("bqueen")
        ||square[nums + checker].classList.contains("bknight")
        ||square[nums + checker].classList.contains("bking")){
            i = 8
            Adder(count)
            break;
        }
        if(square[nums + checker].classList.contains("wpawn")
        ||square[nums + checker].classList.contains("wrook")
        ||square[nums + checker].classList.contains("wbishop")
        ||square[nums + checker].classList.contains("wqueen")
        ||square[nums + checker].classList.contains("wknight")
        ||square[nums + checker].classList.contains("wking")){
            count++
            i = 8
            Adder(count)
            break;
        }
        else{
            i++
            checker+=9
            count++
        }
    }
    //*top left
    while(j < 8){
        if(nums == 0||nums == 8||nums == 16||nums == 24||nums == 32||nums == 40||nums == 48||nums == 56){
            break;
        }
        if(nums - checker2 < 0){
            Adder2(count2)
            break;
        }
        if(nums - checker2 == 0|| nums - checker2 == 8||nums - checker2 == 16|| nums - checker2 ==24|| nums - checker2 ==32|| nums - checker2 ==40|| nums - checker2 ==48|| nums - checker2 == 56){
            if(square[nums - checker2].classList.contains("bpawn")
        ||square[nums - checker2].classList.contains("brook")
        ||square[nums - checker2].classList.contains("bbishop")
        ||square[nums - checker2].classList.contains("bqueen")
        ||square[nums - checker2].classList.contains("bknight")
        ||square[nums - checker2].classList.contains("bking")){
                j = 8
                Adder2(count2)
                break;
            }
            else{
                count2++
                Adder2(count2)
                break;
            }
        }
        if(square[nums - checker2].classList.contains("bpawn")
        ||square[nums - checker2].classList.contains("brook")
        ||square[nums - checker2].classList.contains("bbishop")
        ||square[nums - checker2].classList.contains("bqueen")
        ||square[nums - checker2].classList.contains("bknight")
        ||square[nums - checker2].classList.contains("bking")){
            j = 8
            Adder2(count2)
            break;
        }
        if(square[nums - checker2].classList.contains("wpawn")
        ||square[nums - checker2].classList.contains("wrook")
        ||square[nums - checker2].classList.contains("wbishop")
        ||square[nums - checker2].classList.contains("wqueen")
        ||square[nums - checker2].classList.contains("wknight")
        ||square[nums - checker2].classList.contains("wking")){
            count2++
            j = 8
            Adder2(count2)
            break;
        }
        else{
            j++
            checker2+=9
            count2++
        }
}
}
function queenb2(num){
     let i = 0
    let j = 0
    let count = 0
    let count2 = 0
    let checker = 7
    let checker2 = 7
    nums = num
    //*check availability of square botom left
    while(i < 8){
        if(nums == 0||nums == 8||nums == 16||nums == 24||nums == 32||nums == 40||nums == 48||nums == 56){
            break;
        }
        if(nums + checker > 63){
            Adder3(count)
            break;
        }
        if(nums + checker == 0|| nums + checker == 8||nums + checker == 16|| nums + checker ==24|| nums + checker ==32|| nums + checker ==40|| nums + checker ==48|| nums + checker == 56){
            if(square[nums + checker].classList.contains("bpawn")
            ||square[nums + checker].classList.contains("brook")
            ||square[nums + checker].classList.contains("bbishop")
            ||square[nums + checker].classList.contains("bqueen")
            ||square[nums + checker].classList.contains("bknight")
            ||square[nums + checker].classList.contains("bking")){
                i = 8
                Adder3(count)
                break;
            }
            else{
                count++
                Adder3(count)
                break;
            }
        }
        if(square[nums + checker].classList.contains("bpawn")
        ||square[nums + checker].classList.contains("brook")
        ||square[nums + checker].classList.contains("bbishop")
        ||square[nums + checker].classList.contains("bqueen")
        ||square[nums + checker].classList.contains("bknight")
        ||square[nums + checker].classList.contains("bking")){
           
            i = 8
            Adder3(count)
            break;
        }
        if(square[nums + checker].classList.contains("wpawn")
        ||square[nums + checker].classList.contains("wrook")
        ||square[nums + checker].classList.contains("wbishop")
        ||square[nums + checker].classList.contains("wqueen")
        ||square[nums + checker].classList.contains("wknight")
        ||square[nums + checker].classList.contains("wking")){
            count++
            i = 8
            Adder3(count)
            break;
        }
        else{
            i++
            checker+=7
            count++
        }
    }
    //*top right
    while(j < 8){
        if(nums == 8 - 1||nums == 16 - 1||nums == 24 - 1||nums == 32 - 1||nums == 40 - 1||nums == 48 - 1||nums == 56 - 1 || nums == 63){
            break;
        }
        if(nums - checker2 < 0){
            Adder4(count2)
            break;
        }
        if(nums - checker2 == 7|| nums - checker2 == 8+ 7||nums - checker2 == 16+7|| nums - checker2 ==24 +7|| nums - checker2 ==32 +7|| nums - checker2 ==40 +7|| nums - checker2 ==48 +7|| nums - checker2 == 56+7){
            if(square[nums - checker2].classList.contains("bpawn")
            ||square[nums - checker2].classList.contains("brook")
            ||square[nums - checker2].classList.contains("bbishop")
            ||square[nums - checker2].classList.contains("bqueen")
            ||square[nums - checker2].classList.contains("bknight")
            ||square[nums - checker2].classList.contains("bking")){
                j = 8
                Adder4(count2)
                break;
            }
            else{
                count2++
                Adder4(count2)
                break;
            }
        }
        if(square[nums - checker2].classList.contains("bpawn")
            ||square[nums - checker2].classList.contains("brook")
            ||square[nums - checker2].classList.contains("bbishop")
            ||square[nums - checker2].classList.contains("bqueen")
            ||square[nums - checker2].classList.contains("bknight")
            ||square[nums - checker2].classList.contains("bking")){
            j = 8
            Adder4(count2)
            break;
        }
        if(square[nums - checker2].classList.contains("wpawn")
        ||square[nums - checker2].classList.contains("wrook")
        ||square[nums - checker2].classList.contains("wbishop")
        ||square[nums - checker2].classList.contains("wqueen")
        ||square[nums - checker2].classList.contains("wknight")
        ||square[nums - checker2].classList.contains("wking")){
            count2++
            j = 8
            Adder4(count2)
            break;
        }
        else{
            j++
            checker2+=7
            count2++
        }
    }
}
function Adder(num){
    let e = 9
    while(num > 0){
        square[nums + e].addEventListener("click", move)
        square[nums+e].classList.add("avail")
        e+=9
        num--
    }
}
function Adder2(num){
    let e = 9
    while(num > 0){
        square[nums - e].addEventListener("click", move)
        square[nums-e].classList.add("avail")
        e+=9
        num--
    }
}

function Adder3(num){
    let e = 7
    while(num > 0){
        square[nums + e].addEventListener("click", move)
        square[nums+e].classList.add("avail")
        e+=7
        num--
    }
}
function Adder4(num){
    let e = 7
    while(num > 0){
        square[nums - e].addEventListener("click", move)
        square[nums-e].classList.add("avail")
        e+=7
        num--
    }
}
function move() {
    square[nums].classList.remove("bqueen")
    square[where].classList.add("bqueen")
    square[where].classList.remove("wqueen")
    square[where].classList.remove("wrook")
    square[where].classList.remove("wbishop")
    square[where].classList.remove("wpawn")
    square[where].classList.remove("wking")
    square[where].classList.remove("wknight")
    changeTurn("white")
    queenDebuger()
    queen2Debuger()
}

export{queenb, queenb2, queenDebuger}