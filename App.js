let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbutton=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playero,playerx;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame= () =>
{
   turnO =true;
   enableboxes();
   msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
box.addEventListener("click", () => {
//console.log("box was clicked");
if(turnO){
    box.innerText="O";
    turnO=false;
}
else{
box.innerText="X";
turnO=true;
}
box.disabled=true;
checkWinner();
});
});
const disableboxes=() => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableboxes = () => {
for(let box of boxes)
{
    box.disabled=false;
    box.innerText ="";
}
};
const showWinner = (winner) => {
    msg.innerText='Congratulations, Winner is ${winner}';
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for(pattern of winPatterns)
    {
        //console.log(pattern[0],pattern[1],pattern[2]);
        ///console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
          let pos3val=boxes[pattern[2]].innerText;

          if(pos1Val!="" && pos2val!="" && pos3val!="")
          {
            if(pos1Val===pos2val && pos2val===pos3val)
            {
              
              showWinner(pos1Val);
            }
          }
    }

};


newbutton.addEventListener("click",resetGame);

resetbtn.addEventListener("click",resetGame);