var input stats = {
  'ht'       : null,
  'wt'       : null,
  'age'      : null,
  'birthday' : null,
  'class'    : null,
  'exercise' : null,
  'books'    : null,
  'bookType' : null,
  'vGames'   : null,
  'gameType' : null,
  'diet'     : {

  }
  'charisma' : {

  }
}

var BMI = function(wt,ht) {
  return wt*703/(ht*ht);
}

var toYears = function(millis) {
  return millis/1000/60/60/24/365.25;
}

var getAge = function(month, day, year) {
  var birthTime = (new date(year,month,day)).getTime();
  var currentTime = (new date()).getTime();
  return toYears(currentTime-birthTime);
}

var bell = function(x,mu,sig) {
  var coeff= 1/Math.pow((2*siq*siq*Math.PI),.5);
  var top = -(x-mu)*(x-mu);
  var bottom = 2*sig*sig;
  return coeff*Math.exp(top/bottom);
}

var getStrength= function() {
  var bmiVal = bell(BMI,(18.5+25)/2, BMI_SIG);
  var age = getAge(/*yadda ya*/);
  var ageVal = bell(age ,HEALTHY_AGE, AGE_SIG);

  var score = bmiVal*ageVal*exercise_level;
  return score;
}

var get_exercise_level = function() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "range");
  document.body.appendChild(x);
}

$(document).ready(function(){
  outputStats = {
    'Strength':null,
    'Dexterity':null,
    'Level':null,
    'Defense':null,
    'Charisma':null,
    'Wisdom':null,
    'Luck':null,

  }
  $(/*get stats button*/).click(function(ev,er){
    outputStats['Strength']=getStrength();
  })
})

<select>
  <option value="0   - 30 minutes">level1</option>
  <option value="31  - 60 minutes">level2</option>
  <option value="61  - 90 minutes">level3</option>
  <option value="91  - 120 minutes">level4</option>
  <option value="121 - 150 minutes">level5</option>
  <option value="151+ minutes">level6</option>
</select>
