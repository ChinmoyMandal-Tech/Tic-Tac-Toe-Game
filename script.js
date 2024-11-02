let mas = document.querySelector(".mas");
let NewGame =document.querySelector(".New");
let boxes = document.querySelectorAll(".box");
let ResetGame = document.querySelector(".reset");
let hide = document.querySelector(".hide");

let turn = true;
let count = 0;
 
const winPath=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
 
const reset=()=>{
    count=0;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        }
        hide.classList.add("hide");
        mas.innerText="";
        turn = true;
    };

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        count++;
        console.log(count);
        if(turn === true){
            turn =false;
            box.innerText = "X";
        }else{
            turn = true;
            box.innerText = "O";
        }
        box.disabled=true;
        checkWine();
    });
});

const checkWine = () =>{
 for(let path of winPath){
    let a = boxes[path[0]].innerText;
    let b = boxes[path[1]].innerText;
    let c = boxes[path[2]].innerText;
    if(a!="" && b!= "" && c!=""){
        if(a===b && b===c){
            showWiner(a);
            disabal();
            break;
        }else if(count===9){
            draw();
        }
    }
 }
};

const showWiner=(winner)=>{
    hide.classList.remove("hide");
    mas.innerText=`Congratulations, winner is ${winner}`; 
};
 
const draw=()=>{
    hide.classList.remove("hide");
    mas.innerText=`Game Draw`; 
};
 
const disabal=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

NewGame.addEventListener("click",reset);
ResetGame.addEventListener("click",reset);