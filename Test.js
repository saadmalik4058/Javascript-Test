// Javascript Test

//Qno 1

function Palindrom(data) {
  let isPalindrom = data.split("").reverse().join("");
  if (isPalindrom == data) {
    console.log(`Data is palindrome`);
  }
}
Palindrom("saas");

// qno 2

let input = [
  1,
  2,
  "hello",
  "world",
  { name: "Alice", age: 30 },
  { name: "Alice", age: 30 },
  [1, 2, 3],
  [1, 2, 3],
  "hello",
  3,
  [4, 5, { nested: "object" }],
  [4, 5, { nested: "object" }],
  { nested: [1, 2, 3] },
  { nested: [1, 2, 3] },
];

function removeDuplicate(input) {
  let inp = new Set();
  for (const element of input) {
    let b = JSON.stringify(element);
    if (!inp.has(b)) {
      inp.add(b);
    }
  }
  console.log(inp);
}
removeDuplicate(input);

// Qno 4

let divToBeChange = document.querySelector(".bgc");
divToBeChange.addEventListener("mouseenter", () => {
  divToBeChange.style.color = "yellow";
});
divToBeChange.addEventListener("mouseleave", () => {
  divToBeChange.style.color = "black";
});
