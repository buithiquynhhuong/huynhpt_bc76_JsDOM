const MSG0 = "Please enter a positive number!";
const MSG1 = "Please enter a number greater than 0.";
const MSG99 = "Please enter a number with a maximum of two digits.";
const rate = 23500;

function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// BÀI 1
function calSalary(workingDays = 0) {
  const salaryPerDay = 100000;
  if (workingDays < 0) {
    return MSG0;
  }
  return workingDays * salaryPerDay;
}

document.getElementById("calSalary").onclick = function () {
  const workingDays = document.getElementById("workingDays").value * 1;
  let formatCalSalary = calSalary(workingDays);
  let result;
  if (typeof formatCalSalary === "string") {
    result = MSG0;
  } else {
    result = `Working Days: ${workingDays} - Your Salary: ${formatCurrency(formatCalSalary)}`;
  }

  document.getElementById("result1").innerHTML = result;
};

// bài 2
function calAvg(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
  return (num1 + num2 + num3 + num4 + num5) / 5;
}

document.getElementById("calAverage").onclick = function () {
  const num1 = document.getElementById("num1").value * 1;
  const num2 = document.getElementById("num2").value * 1;
  const num3 = document.getElementById("num3").value * 1;
  const num4 = document.getElementById("num4").value * 1;
  const num5 = document.getElementById("num5").value * 1;
  let result = `Average of 5 numbers is: ${calAvg(num1, num2, num3, num4, num5).toFixed(1)}`;
  document.getElementById("result2").innerHTML = result;
};

// bài 3
function exchangeMoney(money = 0) {
  if (money < 0) {
    return MSG0;
  }
  return money * rate;
}

document.getElementById("exchangeMoney").onclick = function () {
  const money = document.getElementById("money").value * 1;
  let FormatMoney = exchangeMoney(money);
  let result;
  if (typeof FormatMoney === "string") {
    result = MSG1;
  } else {
    result = `Exchange money(<p style="font-weight: bold; display: inline-block">${rate} VND</p>): <br>
    with ${money} USD equal to
    ${formatCurrency(FormatMoney)} 
    `;
  }
  document.getElementById("result3").innerHTML = result;
};

// bài 4
function areaRectangle(width = 0, length = 0) {
  if (width <= 0 || length <= 0) {
    return MSG1;
  }
  return width * length;
}

function perimeterRectangle(width = 0, length = 0) {
  if (width <= 0 || length <= 0) {
    return MSG1;
  }
  return (width + length) * 2;
}

document.getElementById("calRectangle").onclick = function () {
  const width = document.getElementById("width").value * 1;
  const length = document.getElementById("length").value * 1;
  let result;
  let checkTypeOfPerimeter = perimeterRectangle(width, length);
  let checkTypeOfArea = areaRectangle(width, length);
  if (
    typeof checkTypeOfPerimeter === "string" ||
    typeof checkTypeOfArea === "string"
  ) {
    result = MSG0;
  } else {
    result = `Area and perimeter of a rectangle is: <br>
    Area: ${checkTypeOfArea} - Perimeter ${checkTypeOfPerimeter}`;
  }
  document.getElementById("result4").innerHTML = result;
};

// bài 5
function sum(number = 0) {
  if (-99 > number || number > 99) return MSG99;
  return (number - (number % 10)) / 10 + (number % 10);
}

document.getElementById("calSum").onclick = function () {
  const number = document.getElementById("numSum").value * 1;
  let result;
  let checkTypeOfNum = sum(number);
  if (typeof checkTypeOfNum === "string") {
    result = checkTypeOfNum;
  } else {
    result = `Sum of ${number} is: ${checkTypeOfNum} `;
  }
  document.getElementById("result5").innerHTML = result;
};
