const displayScreen = document.getElementById("display");
const clearBtn = document.getElementById("clearBtn");
function calculating() {

}
function display(number) {
  displayScreen.value += number;
  clearBtn.textContent = "C";
}
function clearScreen() {
  displayScreen.value = "";
  displayScreen.placeholder = "0";
  clearBtn.textContent = "AC";
}
function calculating() {
  try {
    if (displayScreen.value === "") {
      return;
    }
    else {
      displayScreen.value = eval(displayScreen.value);
    }
  }
  catch (error) {
    console.log(error);
    displayScreen.value = "Error";
  }
}