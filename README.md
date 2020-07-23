# Calories Calculator

<br><br>

## Project description

---

<p> 
The benefit for the user of using this site is to get suggestions of what workout to do depending on how many calories
are desired to burn and the amount of time desired to spend on the workout. 
The idea is also to suggest places where outdoor workouts and running can be done, this to relate to the situation of covid19.
The calories calculator simplifies the search for workouts depending on the level of effort user wants to put it.
</p>
<br><br>

## User Stories

---

<p>
1. As a user I want to be able to get suggestions on workouts that take amount of calories to burn and time to spend into consideration.<br>
2. As a user I want to be able to see in the local area good areas for running and outdoor training.
</p>
<br><br>

## Features

---

### Header

<p> 
On top of page with logo to the left and then links to two pages – Calories Calculator and Outdoor Training. 
</p>
<br>

### Footer

<p> 
On bottom of page containing Contact details, Social icons and Opening times. 
</p>
<br>

### Calories Calculator

<p> 
Takes value of duration and amount of calories to burn along with weight, height and BMR
to give suggestions for workouts.
</p>
<br>

### Outdoor Training

<p> 
Shows a map with places in the local area suitable for Running and Outdoor Training.
</p>
<br><br>

## Wireframes

---
### Desktop
![Home Page](/wireframes/desktop/Home_page.png)

![Amount of Calories](/wireframes/desktop/Amount_of_Calories.png)

![Amount of Time(unchanged)](/wireframes/desktop/Amount_of_Time_[unchanged].png)

![Amount of Time](/wireframes/desktop/Amount_of_Time.png)

![Suggestions](/wireframes/desktop/Suggestions.png)

![Suggestions (contintue)](/wireframes/desktop/Suggestions_[continue].png)

![Outdoor_training](/wireframes/desktop/Outdoor_training.png)

![Header & Footer](/wireframes/desktop/Header&Footer.png)
<br><br>
### Mobile
![Home Page - Mobile](/wireframes/mobile/Home_page[mobile].png)

![Amount of Calories - Mobile](/wireframes/mobile/Amount_of_Calories[mobile].png)

![Amount of Time - Mobile](/wireframes/mobile/Amount_of_Time[mobile].png)

![Suggestions - Mobile](/wireframes/mobile/Suggestions[mobile].png)

![Suggestions - [continue] - Mobile](/wireframes/mobile/Suggestions_[continue][mobile].png)

![Outdoor Training](/wireframes/mobile/Outdoor_Training[mobile].png)


<br>

## Technologies

---

<ul>
    <li><b>Google maps</b> - It has helped the project display the places for running and outdoor training on the Outdoor Training page.</li><br>
    <li><b>Bootstrap</b> - This has been helpful for building the page regarding layout.</li><br>
    <li><b>GitPod</b> - This is where I've built the project.</li><br>
    <li><b>jQuery</b> - Thanks to this some of the functions has been easier to write.</li><br>
</ul>
<br><br>

## Deployment Details

---

<p>
    I am running it through GitHub and sharing a link to the page.
</p>
<br><br>

## Typography / Colors

---

<ul>
<li>Used typography is <b>Mulish</b> form Google Fonts. It has a clean design and I feel it works with the project.</li><br>
<li>Used color is a similar orange as Club Active's. I made the orange a bit brighter as Club Active's orange became a little to dark
when used as a background for the sections.</li><br>
<li>The other colors I keep dark towards darkgray as I find them on the website for Club Active. 
</ul>
</p>
<br><br>

## Testing

---

<p>
I have tested the site on Google Chrome on my Macbook Pro 13inch. 
I've looked through the different screen sizes to see how the site responds.
</p>
<br><br>

### <b>Known issues</b>

<p>
    1. The classes of <b>suggestions</b> doesn't replace eachother but stays on screen even after you alter value for inputs of time and calories
    so they become double. The change is then that suggestions that are not accurate to current values from time and calories and displaying.<br><br>
    2. The values from "personal-details" inputs like "weight", "height" and "BMR" are at this point not taken into account. This is due to my own lack of time.
</p>

<br><br>

### <b>Execution</b>

<p> 
I have run my code through WC3 Markup Validation aswell as JSLint.
</p>
<br><br>

### <b>Pending features</b>

<p>

1. <b>Personal information</b> will be taken into account for showing how many calories user is approximately burning.

2. <b>"BMR" input</b> will be exchanged to "Age" and also a "Gender" input will be applied, this is as I have learnt that
   BMR can be calculated from the other values.

3. <b>The calculation</b> will be more accurate and also show how many calories each suggested workout approximately burns.
   Also it will include for how long BMR is increased from each workout.
   There will be more suggestions and also I will try to make them more dynamic – in contrast to the concrete suggestions that
   are now pre-written.

4. When a button is clicked and a new section is displayed I want the view-window to scroll down automatically so the new section so it gets in the middle of view.

</p>
<br><br>

## Test cases

---
<p>
I have not let anybody else look at the project.
</p>
<br><br>

### <b>Browsers</b>

<p>
I have tested my site on Google Chrome.
</p>
<br><br>

### <b>Faced and fixed issues</b>

<ul>
<li> The markers where not showing on the map on page "Outdoor Training". First of there was a billing issue with my Google Cloud Platform account. After that there was a faulty script that, according to the tutor at Code Institute support should be working. We found another one and then it was fixed. </li><br>
<li> The "Calculate"-button at section 3 was able to be pressed even if user had not input any values. This was fixed by setting it to "disabled" mode with an accompanying function that was triggered by moving the "time"-slider.</li><br>
<li> Values at inputs for "personal-details" could be written with values below the minimum. This was fixed by writing a a document.ready funciton that said "if value changes to below (value), then set the value back to minimum" </li>
</ul>

<br><br>

## Credits

---

Rohit - My mentor <br>
Code Institute Support <br>
StackOverflow <br>
Slack - Code Institute students<br>

### Media

The photo in the background is taken by myself.
