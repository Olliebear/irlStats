var inputStats = { //not all inputs are here. see lib.js for music and
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
}

var BMI = function(wt,ht) {
  return wt*703/(ht*ht);
}

var toYears = function(millis) {
  return millis/1000/60/60/24/365.25;
}

var getAge = function(month, day, year) {
  var birthTime = (new Date(year,month,day)).getTime();
  var currentTime = (new Date()).getTime();
  return toYears(currentTime-birthTime);
}

var bell = function(x,mu,sig) {
  var coeff= 1/Math.pow((2*sig*sig*Math.PI),.5);
  var top = -(x-mu)*(x-mu);
  var bottom = 2*sig*sig;
  return coeff*Math.exp(top/bottom);
}

var getStrength= function(ht,wt,age,exercise) {
  var bmiVal = bell(BMI(wt,ht),(18.5+25)/2, BMI_SIG);
  var ageVal = bell(age,HEALTHY_AGE, AGE_SIG);
  var score = Math.round(10000*bmiVal*ageVal*exercise);
  return score;
}

var getWisdom = function(books, bookType, vgames, gameType, age){
  var ageVal = bell(age, WISE_AGE,AGE_SIG);

  return Math.round((books-vgames+6)*ageVal*2000);
}

var getLuck = function(birthday){
  var list = birthday.split('/');
  return Math.round((list[2]%7+list[0]%9)*(list[1]%3+list[0]%11)*(list[2]%3+list[1]%6)/4);
}

var getLevel = function(){
  var total = 0;
  for (var i in outputStats){
    if (i != 'Level'){
      total+=Number(outputStats[i]);
    }
  }
  return Math.round(total/20);
}

var getDexterity = function(ht, wt, age, exercise, vgames, gameType){
  var ageVal = bell(age, HEALTHY_AGE, AGE_SIG);
  var bmiVal = bell(BMI(ht,wt),(18.5+25)/2, BMI_SIG); //18.5 and 25 are limits of healthy on bmi
  var multi =1;
  switch (gameType) {
    case 'RPG':
    multi=1.5
      break;
    case 'Action':
    multi=2
      break;
    case 'Puzzle':
    multi=1
      break;
    default:
    multi=1;
      break;
  }
  var raw = multi*vgames+bmiVal*ageVal*exercise*10000;
  return Math.round(5*raw);
}

var getDefense =function(ht,wt,age,excercise){
  var ageVal = bell(age, HEALTHY_AGE, AGE_SIG);
  var bmiVal = bell(BMI(ht,wt), 25, BMI_SIG); //25 is upper limit of healthy on bmi
  return Math.round(180000*excercise*bmiVal*ageVal);
}

var getCharisma = function(){
  var val=20;
  selects=$(CHARISMA_INPUT).children('p').children('select');
  console.log(selects)
  for (var i=0; i<selects.length;i++){
    val+=Number($(selects[i]).val())
  }
  return val

}

var add_music_contrib=function(){
  for (var i in outputStats){
    if (i != 'Level'){
      outputStats[i]+=music_contrib(i);
    }
  }
}

var getInputs = function(){
  var month = Number($(MONTH_INPUT).val())+1;
  var day = $(DAY_INPUT).val();
  var year = $(YEAR_INPUT).val();
  inputStats['ht']=$(HEIGHT_INPUT).val();
  inputStats['wt']=$(WEIGHT_INPUT).val();
  inputStats['birthday']=month+'/'+day+'/'+year;
  inputStats['age']=getAge(month,day,year);
  inputStats['exercise']=$(EXERCISE_INPUT).val();
  inputStats['vGames']=$(VGAMES_INPUT).val();
  inputStats['books']=$(READ_INPUT).val();
  inputStats['gameType'] = $(GAMETYPE_INPUT).val();
}

$(document).ready(function(){
  outputStats = {
    'Level':null,
    'Strength':null,
    'Dexterity':null,
    'Defense':null,
    'Charisma':null,
    'Wisdom':null,
    'Luck':null,

  }
  $(GET_STATS_BUTTON).click(function(ev,er){
    $(OUTPUT_DIV).empty();
    getInputs();
    outputStats['Strength']=getStrength(inputStats['ht'], inputStats['wt'],inputStats['age'],inputStats['exercise']);
    outputStats['Wisdom']=getWisdom(inputStats['books'],inputStats['bookType'],inputStats['vGames'],inputStats['gameType'],inputStats['age']);
    outputStats['Luck']=getLuck(inputStats['birthday']);
    outputStats['Dexterity']=getDexterity(inputStats['ht'],inputStats['wt'],inputStats['age'],inputStats['exercise'],inputStats['vGames'],inputStats['gameType']);
    outputStats['Defense']=getDefense(inputStats['ht'],inputStats['wt'],inputStats['age'],inputStats['exercise']);
    outputStats['Charisma']=getCharisma();
    add_music_contrib();
    outputStats['Level'] = getLevel();
    for (var i in outputStats){
      var stat = outputStats[i];
      //for errorHandling
      /*if (!stat){
        $(OUTPUT_DIV).empty();
        $(OUTPUT_DIV).append('Please Fill in all the fields :)');
        return;
      }*/
      var div = document.createElement('div');
      $(div).html(i+': '+stat);
      $(OUTPUT_DIV).append(div);
    }
  })
})
