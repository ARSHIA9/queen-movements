var queen = {
  direction: "S",
  position: {
    xCo: 4,
    yCo: 0,
  },
  whereabouts: [],
};
function input() 
{
  var input = document.getElementById("dir").value;
  if (input.length === 2)
  {
    var direction = input.slice(0, 1);
    var steps = Number(input.slice(1));
  } else if (input.length === 3)
  {
    var direction = input.slice(0, 2);
    var steps = Number(input.slice(2));
  }
  changeDirection(direction, steps); //reading the variables
  input();
}
function changeDirection(newDirection, steps) {
  switch (newDirection) {
    case "E":
      newDirection = "E";
      queen.direction = newDirection;
      break;
    case "W":
      newDirection = "W";
      queen.direction = newDirection;
      break;
    case "S":
      newDirection = "S";
      queen.direction = newDirection;
      break;
    case "N":
      newDirection = "N";
      queen.direction = newDirection;
      break;
    case "NW":
      newDirection = "NW";
      queen.direction = newDirection;
      break;
    case "NE":
      newDirection = "NE";
      queen.direction = newDirection;
      break;
    case "SE":
      newDirection = "SE";
      queen.direction = newDirection;
      break;
    case "SW":
      newDirection = "SW";
      queen.direction = newDirection;
      break;

    default:
      //   console.log("Invalid");
      document.getElementById("demo").innerHTML = "Invalid";
      input();
  }
  moveForward(queen.direction, steps);
}
function moveForward(direction, count) {
  if (direction === "S") {
    queen.position.yCo += count;
  } else if (direction === "N") {
    queen.position.yCo -= count;
  } else if (direction === "E") {
    queen.position.xCo += count;
  } else if (direction === "W") {
    queen.position.xCo -= count;
  } else if (direction === "SE") {
    queen.position.xCo += count;
    queen.position.yCo += count;
  } else if (direction === "SW") {
    queen.position.xCo -= count;
    queen.position.yCo += count;
  } else if (direction === "NE") {
    queen.position.xCo += count;
    queen.position.yCo -= count;
  } else if (direction === "NW") {
    queen.position.xCo -= count;
    queen.position.yCo -= count;
  }

  outOfBoard(queen.position.xCo, queen.position.yCo, count);
}

function updatePosition(xCo, yCo) {
  var char = String.fromCharCode(97 + xCo); 
  queen.whereabouts.push(char + yCo);
  console.log(queen.whereabouts);
  document.getElementById("demo").innerHTML =
    "Queen's new position: " + queen.whereabouts;
}
function outOfBoard(xCo, yCo, count) 
{
  if (xCo > 7)
   { 
    document.getElementById("demo").innerHTML =
      "OUT OF THE BOARD!";
    queen.position.xCo -= count;
    input();
  } else if (xCo < 0) 
  { 
    document.getElementById("demo").innerHTML =
      "OUT THE BOARD!";
    queen.position.xCo += count;
    input();
  } else if (yCo < 0) 
  {
    document.getElementById("demo").innerHTML =
      "OUT OF THE BOARD!";
    queen.position.yCo += count;
    input();
  } else if (yCo > 7)
  { 
    document.getElementById("demo").innerHTML =
      "OUT OF THE BOARD?!";
    queen.position.yCo -= count;
    input();
  }
  updatePosition(queen.position.xCo, queen.position.yCo);
}