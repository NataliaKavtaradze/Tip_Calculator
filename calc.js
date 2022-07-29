let numOfPeople = document.getElementById("numb-of-people");
let bill = document.getElementById("bill-input");

let buttonValue;

let func = function (event) {
  let seleqtTip = document.getElementById("custom-box").value;

  let custom = document.getElementById("custom-box").value;

  if (event.type == "click") {
    buttonValue = event.target.value;
  }
  console.log(buttonValue);
  if (
    bill.value !== "" &&
    numOfPeople.value !== "" &&
    (seleqtTip !== "" || buttonValue)
  ) {
    let result = (bill.value * event.target.value) / 100 / numOfPeople.value;

    let tippAmount = document.getElementById("payment");
    tippAmount.innerHTML = "$" + Number(result).toFixed(2);

    let totalAmount = document.getElementById("payment-total");
    totalAmount.innerHTML =
      "$" +
      (bill.value / Number(numOfPeople.value) + Number(result)).toFixed(2);
  }
};

numOfPeople.addEventListener("input", func);
bill.addEventListener("input", func);

// reset

let reset = document.getElementById("reset");
let tippAmount = document.getElementById("payment");
let totalAmount = document.getElementById("payment-total");

let func2 = function (event) {
  document.getElementById("bill-input").value = "";
  document.getElementById("numb-of-people").value = "";
  document.getElementById("custom-box").value = "";
  tippAmount.innerHTML = 0;
  totalAmount.innerHTML = 0;
};
reset.addEventListener("click", func2);

let procentOfFive = document.getElementById("five");
procentOfFive.addEventListener("click", func);

let procentOfTen = document.getElementById("ten");
procentOfTen.addEventListener("click", func);

let procentOfFifteen = document.getElementById("fivteen");
procentOfFifteen.addEventListener("click", func);

let procentOfTventyFive = document.getElementById("tventy-five");
procentOfTventyFive.addEventListener("click", func);

let procentOfFifty = document.getElementById("fivty");
procentOfFifty.addEventListener("click", func);

let procentOfcustom = document.getElementById("custom-box");
procentOfcustom.addEventListener("input", func);
