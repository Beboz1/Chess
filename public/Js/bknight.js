import{square, where, turn, changeTurn}from"./index.js"
function knightDebuger(){
	let x = 0
	while(x < 64){
		square[x].removeEventListener("click", move)
		square[x].classList.remove("avail")
		square[x].classList.remove("selected")
		x++;
	}
}
let nums
function knightb(num){

        	nums = num
	let column = 5
	let row = 0
	if(num == 7 || num == 15 || num == 23 || num == 31 || num == 39 || num == 47 || num== 55 || num == 63){
        column = 8
    }
    if(num == 7 -1|| num == 15-1 || num == 23-1 || num == 31-1 || num == 39-1 || num == 47-1 || num== 55-1 || num == 63-1){
        column = 7
    }
    if(num == 7 +1|| num == 15+1 || num == 23+1 || num == 31+1 || num == 39+1 || num == 47+1 || num== 55 +1|| num == 0){
        column = 1
    }

    if(num == 7 +2|| num == 15+2 || num == 23+2 || num == 31+2 || num == 39+2 || num == 47+2 || num== 55 +2 || num == 1){
        column = 2
    }
    if(num == 0 || num == 1 || num == 2  || num == 3  || num == 4 || num == 5 || num==6  || num == 7){
        row = 1
    }
    if(num == 0 + 8 || num == 1 + 8 || num == 2 + 8  || num == 3 + 8  || num == 4 + 8 || num == 5 + 8 || num==6  + 8 || num == 7 + 8){
        row = 2
    }
    if(num == 56 - 8 || num == 57 - 8 || num == 58 - 8 || num == 59 - 8 || num ==60  - 8|| num == 61 - 8 || num==  6 - 82 || num == 63 - 8){
        row = 7
    }
    if(num == 56 || num == 57 || num == 58 || num == 59 || num ==60 || num == 61 || num==  62 || num == 63){
        row = 8
    }
    if(num > 15 && num < 48){
        row = 5
    }
    if(row > 1 && row < 9){
    	if(column > 2){
    		available(num - 10)
    	}
    	if(column < 7){
    		available(num - 6)
    	}
    }
    if(row > 0 && row < 8){
    	if(column > 2){
    		available(num +6)
    	}
    	if(column < 7){    		
    		available(num + 10)
    	}
    }
    if(row > 2){
    	if(column != 1){
    		available(num - 17)
    	}
    	if(column != 8){
    		available(num - 15)    	
    	}
    }
    if(row < 7){
    	if(column != 1){
    		available(num + 15)    
    	}
    	if(column != 8){   
    		available(num + 17) 
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
}
function move(){

    square[nums].classList.remove("bknight")
    square[where].classList.add("bknight")
    square[where].classList.remove("wqueen")
    square[where].classList.remove("wking")
    square[where].classList.remove("wrook")
    square[where].classList.remove("wbishop")
    square[where].classList.remove("wpawn")
    square[where].classList.remove("wknight")
    changeTurn("white")
    knightDebuger()
}
export{knightb, knightDebuger}