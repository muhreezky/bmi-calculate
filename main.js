function compareBmi(value) {
  console.log('bmi',value);
  // console.log(value >= 30, 25 <= value <= 29.9, 18.5 <= value <= 24.9, value < 18.5);
  if (value >= 30) return "Obesitas";
  if (value >= 25 && value <= 29.9) return "Gemuk";
  if (value >= 18.5 && value <= 24.9) return "Normal";
  if (value < 18.5) return "Kurus";
}

function countBmi(height, weight) {
  height = Number(height) / 100;
  weight = Number(weight);
  return (weight / Math.pow(height, 2)).toFixed(2);
}

function startCount() {
  // e.preventDefault();
  const result = document.getElementById("result");
  const resultCard = document.getElementById("resultcard");
  const predicate = document.getElementById("predicate");
  const bmi = countBmi(mainform.height.value, mainform.weight.value);
  const status = compareBmi(Number(bmi));
  result.innerHTML = bmi;
  predicate.innerHTML = "".concat("(", status, ")");
  resultCard.classList.remove("hidden");
}