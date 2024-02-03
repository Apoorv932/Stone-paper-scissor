let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let computer = document.querySelector("#computer");
let user = document.querySelector("#user");
let msg = document.querySelector("#msg"); 
let i = 0, j = 0; 
const resetBorders = () => {
    rock.style.border = "";
    paper.style.border = "";
    scissor.style.border = "";
    
  };
  

const getComp = () => {
  let rand = Math.round((Math.random() * 10) + 1);
  if (rand < 4) return "rock";
  else if (rand >= 4 && rand < 7) return "paper";
  else return "scissor";
};


rock.addEventListener("click", () => {
    
  let comp = getComp();
  if (comp === "rock") {
    setTimeout(()=>{
        resetBorders();},500)
    rock.style.border="2px solid blue";
    msg.innerText = "It's a tie";
  } else if (comp === "paper") {
    setTimeout(()=>{
        resetBorders();},700)
    paper.style.border="2px solid blue";
    msg.innerText = "You Lose";
    j++;
    computer.innerText = j;
  } else {
    setTimeout(()=>{
        resetBorders();},700)
    scissor.style.border="2px solid blue";
    msg.innerText = "You Win";
    i++;
    user.innerText = i;
  }
});

paper.addEventListener("click", () => {
    
    
  let comp = getComp();
  if (comp === "rock") {
    rock.style.border="2px solid blue";
    setTimeout(()=>{
        resetBorders();},700)
    msg.innerText = "You Won";
    i++;
    user.innerText = i;
  } else if (comp === "paper") {
    setTimeout(()=>{
        resetBorders();},700)
    paper.style.border="2px solid blue";
    msg.innerText = "It's a tie";
  } else {
    setTimeout(()=>{
        resetBorders();},700)
    scissor.style.border="2px solid blue";
    msg.innerText = "You Lose";
    j++;
    computer.innerText = j;
  }
});

scissor.addEventListener("click", () => {
    
  let comp = getComp();
  if (comp === "rock") {
    setTimeout(()=>{
        resetBorders();},700)
    rock.style.border="2px solid blue";
    msg.innerText = "You Lose";
    j++;
    computer.innerText = j;
  } else if (comp === "paper") {
    setTimeout(()=>{
        resetBorders();},700)
    paper.style.border="2px solid blue";
    msg.innerText = "You Win";
    i++;
    user.innerText = i;
  } else {
    setTimeout(()=>{
        resetBorders();},700)
    scissor.style.border="2px solid blue";
    msg.innerText = "It's a tie";
  }
}
)
;
