import{square, where, turn, changeTurn}from"./index.js"
import{queenDebuger2}from"./wqueen.js"
let nums = 0
let nums2 = 0
function  queen2Debuger2() {
    let x = 0
    while(x < 64){
        square[x].removeEventListener("click", move)
        square[x].classList.remove("avail")
        square[x].classList.remove("selected")
        x++
    }
}
function queenw3(num){
    let i = 0
    let j = 0
    let count = 0
    let count2 = 0
    let checker = 1
    let checker2 = 1
    nums = num
    //*moving right
    while(i < 8){
        if(nums + checker > 63){
            Adder(count)
            break;
        }
        if(nums + checker == 8||nums + checker == 16|| nums + checker ==24 || nums + checker ==32 || nums + checker ==40 || nums + checker ==48 || nums + checker == 56||nums+checker == 64){
            if(square[nums + checker].classList.contains("wpawn")
            ||square[nums + checker].classList.contains("wrook")
            ||square[nums + checker].classList.contains("wbishop")){
                i = 8
                Adder(count)
                break;
            }
            else{
                Adder(count)
                break;
            }
        }
        if(square[nums + checker].classList.contains("wpawn")
        ||square[nums + checker].classList.contains("wrook")
        ||square[nums + checker].classList.contains("wbishop")){
            i = 8
            Adder(count)
            break;
        }
        if(square[nums + checker].classList.contains("bpawn")
        ||square[nums + checker].classList.contains("brook")
        ||square[nums + checker].classList.contains("bbishop")){
            count++
            i = 8
            Adder(count)
            break;
        }
        else{
            i++
            checker++
            count++
        }
    }
    //*moving left
    while(j < 8){
        if(nums - checker2 < 0){
            Adder2(count2)
            break;
        }
        if(nums - checker2 == 7||nums - checker2 == 15|| nums - checker2 ==23|| nums - checker2 ==31|| nums - checker2 ==39|| nums - checker2 ==47|| nums - checker2 == 55){
            if(square[nums - checker2].classList.contains("wpawn")
            ||square[nums - checker2].classList.contains("wrook")
            ||square[nums - checker2].classList.contains("wbishop")){
                j = 8
                Adder2(count2)
                break;
            }
            else{
                Adder2(count2)
                break;
            }
        }
        if(square[nums - checker2].classList.contains("wpawn")
        ||square[nums - checker2].classList.contains("wrook")
        ||square[nums - checker2].classList.contains("wbishop")){
            j = 8
            Adder2(count2)
            break;
        }
        if(square[nums - checker2].classList.contains("bpawn")
        ||square[nums - checker2].classList.contains("brook")
        ||square[nums - checker2].classList.contains("bbishop")){
            count2++
            j = 8
            Adder2(count2)
            break;
        }
        else{
            j++
            checker2++
            count2++
        }
    }
}

function queenw4(num){
    let i = 0
    let j = 0
    let count = 0
    let count2 = 0
    let checker = 8
    let checker2 = 8
    nums2 = num
    //*moving down
    while(i < 8){
        if(nums2 + checker > 63){
            Adder3(count)
            break;
        }
        
        if(square[nums2 + checker].classList.contains("wpawn")
        ||square[nums2 + checker].classList.contains("wrook")
        ||square[nums2 + checker].classList.contains("wbishop")){
           
            i = 8
            Adder3(count)
            break;
        }
        if(square[nums2 + checker].classList.contains("bpawn")
        ||square[nums2 + checker].classList.contains("brook")
        ||square[nums2 + checker].classList.contains("bbishop")){
            count++
            i = 8
            Adder3(count)
            break;
        }
        else{
            i++
            checker+=8
            count++
        }
    }
    //*moving up
    while(j < 8){
        if(nums2 - checker2 < 0){
            Adder4(count2)
            break;
        }
        if(square[nums2 - checker2].classList.contains("wpawn")
        ||square[nums2 - checker2].classList.contains("wrook")
        ||square[nums2 - checker2].classList.contains("wbishop")){
            j = 8
            Adder4(count2)
            break;
        }
        if(square[nums2 - checker2].classList.contains("bpawn")
        ||square[nums2 - checker2].classList.contains("brook")
        ||square[nums2 - checker2].classList.contains("bbishop")){
            count2++
            j = 8
            Adder4(count2)
            break;
        }
        else{
            j++
            checker2+=8
            count2++
        }
    }
}
function Adder(num){
    let e = 1
    while(num > 0){
        square[nums + e].addEventListener("click", move)
        square[nums+e].classList.add("avail")
        e+=1
        num--
    }
}
function Adder2(num){
    let e = 1
    while(num > 0){
        square[nums - e].addEventListener("click", move)
        square[nums-e].classList.add("avail")
        e+=1
        num--
    }
}

function Adder3(num){
    let e = 8
    while(num > 0){
        square[nums2 + e].addEventListener("click", move)
        square[nums2+e].classList.add("avail")
        e+=8
        num--
    }
}
function Adder4(num){
    let e = 8
    while(num > 0){
        square[nums2 - e].addEventListener("click", move)
        square[nums2-e].classList.add("avail")
        e+=8
        num--
    }
}
function move() {
    square[nums].classList.remove("wqueen")
    square[where].classList.add("wqueen")
    square[where].classList.remove("bqueen")
    square[where].classList.remove("brook")
    square[where].classList.remove("bbishop")
    square[where].classList.remove("bpawn")
    changeTurn("black")
     queen2Debuger2()
     queenDebuger2()
}
export{queenw3,queenw4, queen2Debuger2}