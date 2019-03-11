console.log("hello world");

var count = 0;

const element = document.getElementById("counter");

function increase() {
  count++;
  element.innerText = count;
}

function decrease() {
  count--;
  element.innerText = count;
}
function reset() {
  count = 0;
  element.innerHTML = "<mark>" + count + "</mark>";
}

function selectTheme(theme) {
  console.log(document.getElementsByTagName("body"));
  document.getElementsByTagName("body")[0].className = theme;
  console.log(document.getElementsByTagName("main"));
  document.getElementsByTagName("main")[0].className = theme;
  const buttons = document.getElementsByTagName("button");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}
