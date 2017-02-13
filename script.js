var input stats = {
  'ht':null,
  'wt':null,
  'age':null,
  'birthday':null,
  'class': null,
  'exercise': null,
  'books': null,
  'bookType': null,
  'vGames':null,
  'gameType':null,
  'diet':{

  }
  'charisma':{

  }
}

var BMI = function(wt,ht){
  return wt*703/(ht*ht);
}

var toYears = function(millis){
  return millis/1000/60/60/24/365.25;
}

var getAge = function(month, day, year){
  var birthTime = (new date(year,month,day)).getTime();
  var currentTime = (new date()).getTime();
  return toYears(currentTime-birthTime);
}

var bell = function(x,mu,sig){
  var coeff= 1/Math.pow((2*siq*siq*Math.PI),.5);
  var top = -(x-mu)*(x-mu);
  var bottom = 2*sig*sig;
  return coeff*Math.exp(top/bottom);
}

var getStrength= function(){
  var bmiVal = bell(BMI,(18+25)/2, BMI_SIG);
  var age = getAge(/*yadda ya*/);
  var ageVal = bell( ,HEALTHY_AGE, AGE_SIG);

  var score = bmiVal*ageVal;
  return (score);
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
