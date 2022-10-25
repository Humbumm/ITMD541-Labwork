const sliders = document.querySelectorAll("input[type='range']");
const billInput = document.getElementById("cost");

sliders.forEach(function(slider){
  slider.addEventListener("input",calcu);
});

billInput.addEventListener("change",calcu);

function calcu() {
        let bill = document.forms["calculator"]["cost"].value;

        let tipPerc = document.forms["calculator"]["tip"].value;
        document.getElementById("tipPercent").value = tipPerc;
        let tipAmount = (bill / 100) * tipPerc;
        document.getElementById("tipDollar").value = tipAmount.toFixed(2);
        let total = +bill + tipAmount;
        document.getElementById("totalTip").value = total.toFixed(2);
      }
