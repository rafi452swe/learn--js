// Rock-paper-scissors logic

// Rock-paper-scissors logic

function rps(user, computer) {

  if (user === computer) return "draw";

  if (user === "rock" && computer === "scissor") return "user";

  if (user === "scissor" && computer === "paper") return "user";

  if (user === "paper" && computer === "rock") return "user";

  return "computer";
}

console.log(rps("rock", "paper"));
console.log(rps("rock", "scissor"));
console.log(rps("paper", "rock"));
console.log(rps("scissor", "paper"));
console.log(rps("rock", "rock"));