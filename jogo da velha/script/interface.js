//resetar


 


 function reset() {
  let squares = document.querySelectorAll(".square");
  
  squares.forEach((square) => {
    let position = square.id;
    let symbols = board[position];

    if (symbols != "" || symbols == "") {
      square.innerHTML='';
      playerTime = 0;
      board[position]= 0;

     
    }
  });
  
}





document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
})

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handMove(position)) {
     setTimeout(()=>{
      alert("o jogo acabou - o vencedor foi " + symbols[playerTime]);
    },10);
    
  }
  updateSquares(position);
  
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  
  squares.forEach((square) => {
    let position = square.id;
    let symbols = board[position];

    if (symbols != "" ) {
      console.log("1");
      square.innerHTML = `<div class ='${symbols}'></div>`;

     
    }
  });
}
