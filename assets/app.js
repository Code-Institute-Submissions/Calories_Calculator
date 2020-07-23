/* With this we let the first section containing the amount 
of calories to be displayed when function show1 is called.
It is called when user presses the first button available 
on the page – the "next"-button underneath the personal-details inputs */
function show1() {
  document.getElementById("section1").style.display = "block";
}

/* With this we let the second section containing the amount of 
time to be displayed when function show2 is called.
It is called when user presses the "next"-button 
underneath the calories-slider */
function show2() {
  document.getElementById("section2").style.display = "block";
}

/* Here we simply let the last sections be displayed 
when the function show3 is called.
It is called when user presses the "calculate"-button 
after deciding how much time desired to spend */

function show3() {
  document.getElementById("section3").style.display = "block";
  document.getElementById("section4").style.display = "block";
  document.getElementById("section5").style.display = "block";
}

/* This function sends then value from the slider of calories 
to be live updated above the slider when the slider is changed */
$(document).ready(function () {
  var slider = document.getElementById("calories");
  var output = document.getElementById("caloriesAmount");
  if (output === null) {
    return;
  }
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };

  /* This function sends then value from the slider of time 
  to be live updated above the slider when the slider is changed */
  var slider1 = document.getElementById("time");
  var output1 = document.getElementById("timeAmount");
  output.innerHTML = slider.value;

  slider1.oninput = function () {
    output1.innerHTML = this.value;
  };
});

/* With this funcition we send the value from input of calories to be displayed when called.
It is being displayed at section 3 under "Suggestions for...".
It is being called when user have decided amount calories are desired to burn 
*/

function showCalories() {
  var calories = document.getElementById("calories").value;
  var showit = "Burning &nbsp;" + calories + "&nbsp; calories";
  document.getElementById("resultCalories").innerHTML = showit;
}

/* This funcition is displayed next to the previous one (showCalories()) at section 3.
The function sends the value from input of time to be displayed when called.
*/

function showTime() {
  var time = document.getElementById("time").value;
  var showit = "&nbsp; during &nbsp;" + time + "&nbsp; minutes";
  document.getElementById("resultTime").innerHTML = showit;
}

/*  
With this function user is given suggestions on workouts based 
on the values from input of amountof time and calories.
The suggestions are meant to be more accurate and also include 
the personal-details but for now it is working just to show the idea.

The suggestions are categorised in classes of "one" and "two". 
Dpending on the values from time and calories the classes change 
from not being displayed to being displayed 
*/

function suggestion() {
  var x = [];
  if (
    parseInt(document.getElementById("time").value) <= 30 &&
    parseInt(document.getElementById("calories").value) <= 400
  ) {
    x = document.getElementsByClassName("one");
  } else if (
    parseInt(document.getElementById("time").value) > 30 &&
    parseInt(document.getElementById("calories").value) > 400
  ) {
    x = document.getElementsByClassName("two");
  } else if (
    parseInt(document.getElementById("time").value) <= 30 &&
    parseInt(document.getElementById("calories").value) > 400
  ) {
    x = document.getElementsByClassName("two");
  } else if (
    parseInt(document.getElementById("time").value) > 30 &&
    parseInt(document.getElementById("calories").value) < 400
  ) {
    x = document.getElementsByClassName("one");
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
}

/* Here we force the user to chose how much time to spend doing a workout.
When the slider for amount of time is changed, the button becomes */

function enable() {
  document.getElementById("cBtn").disabled = false;
}

/* This is for the inputs to personal-details. I noticed that
it was possible to type in a value that was outside of the 
inputs min & max.
With this function the values are set back into the "allowed" amount.
 */

/* For Weight input - lower value */
$(document).ready(function () {
  $("#inputWeight").change(function (val) {
    if ($("#inputWeight").val() < 40) {
      $("#inputWeight").val(40);
    }
  });
});

/* For Weight input - higher value */
$(document).ready(function () {
  $("#inputWeight").change(function (val) {
    if ($("#inputWeight").val() > 150) {
      $("#inputWeight").val(150);
    }
  });
});

/* For Height input - lower value */
$(document).ready(function () {
  $("#inputHeight").change(function (val) {
    if ($("#inputHeight").val() < 150) {
      $("#inputHeight").val(150);
    }
  });
});

/* For Height input - higher value */
$(document).ready(function () {
  $("#inputHeight").change(function (val) {
    if ($("#inputHeight").val() > 210) {
      $("#inputHeight").val(210);
    }
  });
});

/* For BMR input - lower value */
$(document).ready(function () {
  $("#inputBMR").change(function (val) {
    if ($("#inputBMR").val() < 1000) {
      $("#inputBMR").val(1000);
    }
  });
});

/* For BMR input - higher value */
$(document).ready(function () {
  $("#inputBMR").change(function (val) {
    if ($("#inputBMR").val() > 4000) {
      $("#inputBMR").val(4000);
    }
  });
});
