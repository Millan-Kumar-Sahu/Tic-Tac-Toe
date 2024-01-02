let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgBox = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let tunrO = true;

const winParterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
]

const resetGame = () => {
    tunrO = true;
    
    msgBox.classList.add("hide");
    enableBoxes();

};

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(tunrO === true){
            box.innerHTML= "O";
            tunrO = false;
        }
        else{
            box.innerHTML= "X";
            tunrO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}



const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disabledBoxes();
};
const checkWinner =()=>{
    for(let pattern of winParterns){
    
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }

    }
};

resetBtn.addEventListener("click" , resetGame);
newGame.addEventListener("click" , resetGame);
