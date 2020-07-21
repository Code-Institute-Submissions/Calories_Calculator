

function show1() {
    document.getElementById('section1').style.display = "block";
}
console.log(show1);

function show2() {
    document.getElementById('section2').style.display = "block";
}
console.log(show2);

function show3() {
    document.getElementById('section3').style.display = "block";
    document.getElementById('section4').style.display = "block";
    document.getElementById('section5').style.display = "block";
}
console.log(show3);

/*     --- slider 1 --- */
var slider = document.getElementById("calories");
var output = document.getElementById("caloriesAmount");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

/*     --- slider 2 --- */

var slider1 = document.getElementById("time");
var output1 = document.getElementById("timeAmount");
output.innerHTML = slider.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

/*     --- resultCalories --- */

function showCalories() { 
        var calories = 
            document.getElementById("calories").value;
        var showit = "Burning &nbsp;" + calories + "&nbsp; calories";
        document.getElementById('resultCalories').innerHTML = showit;
        }
/*     --- resultTime --- */

function showTime() { 
        var time = 
            document.getElementById("time").value; 
        var showit = "during &nbsp;" + time + "&nbsp; minutes";
        document.getElementById('resultTime').innerHTML = showit;
        }


/*     --- suggestion --- */
function suggestion() {
        let x = [];
            if (parseInt(document.getElementById('time').value) < 20 && (parseInt(document.getElementById('calories').value) < 200))  {
                x = document.getElementsByClassName('one');
                console.log("ONE");
            } else if (parseInt(document.getElementById('time').value) >= 25 && (parseInt(document.getElementById('calories').value) > 200)) {
                x = document.getElementsByClassName('two');
                console.log("TWO"); 
            } else { 
                x = document.getElementsByClassName('no-suggestion');
                console.log("NO-SUGGESTION");}
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = 'block';}
            };

function suggestion() {
        let x = [];
            if (parseInt(document.getElementByClassName('one').style.display = "block" || (parseInt(document.getElementsByClassName('two').style.display = "block"))))  {
                x = document.getElementsByClassName('no-suggestion');
                console.log("NO-SUGGESTION");}
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = 'block';}
            };