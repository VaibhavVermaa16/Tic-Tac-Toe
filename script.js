var counter = 0;
var pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function play(a) {
  if (counter % 2 == 0) {
    var elem = document.getElementById(a);
    elem.innerText = "X";
    document.getElementsByClassName(a)[0].disabled = true;
    counter = 1;
  } else {
    var elem = document.getElementById(a);
    elem.innerText = "O";
    document.getElementsByClassName(a)[0].disabled = true;
    counter = 0;
  }
  check_winner();
}

var boxes = document.querySelectorAll(".box");

const disablebox = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

function reset() {
  counter = 0;
  var elem = document.getElementsByClassName("b");
  var box = document.getElementsByClassName("box");
  for (var i = 0; i < elem.length; i++) {
    box[i].disabled = false;
    elem[i].innerHTML = " ";
  }
  var text = document.getElementById("winner");
  text.classList.remove("show");
  text.classList.add("hide");
}

check_winner = () => {
  var box = document.getElementsByClassName("box");
  pattern.forEach((element) => {
    let pos1val = box[element[0]].innerText;
    let pos2val = box[element[1]].innerText;
    let pos3val = box[element[2]].innerText;
    if (pos1val == pos2val && pos2val == pos3val && pos1val == "X") {
      console.log("Player 1 is winner !!!");
      showWinner(pos1val);
      disablebox();
    } else if (pos1val == pos2val && pos2val == pos3val && pos1val == "O") {
      console.log("Player 2 is winner !!!");
      showWinner(pos1val);
      disablebox();
    } else if (
      pos1val != pos2val &&
      pos2val != pos3val &&
      pos3val != pos1val &&
      pos1val != "" &&
      pos2val != "" &&
      pos3val != ""
    ) {
      const showWinner = () => {
        var text = document.getElementById("winner");
        text.innerText = `It's a Tie !`;
        text.classList.remove("hide");
        text.classList.add("show");
        text.style.color = "white";
      };
      disablebox();
    }
  });
};

showWinner = (winner) => {
  var text = document.getElementById("winner");
  text.innerText = `${winner} won the game`;
  text.classList.remove("hide");
  text.classList.add("show");
  text.style.color = "white";
};
