

//library for input/output box names


HEIGHT_INPUT = '#height';
WEIGHT_INPUT = '#weight';
YEAR_INPUT = '#year';
MONTH_INPUT = '#month';
DAY_INPUT = '#day';
EXERCISE_INPUT ='#excercise';
VGAMES_INPUT = '#vgames';
READ_INPUT = '#read';
GAMETYPE_INPUT = '#gameType';
MUSIC_INPUT='#music'
CHARISMA_INPUT='#charisma'

GET_STATS_BUTTON = '#getStats';

OUTPUT_DIV = '#output';

BMI_SIG = 10;
HEALTHY_AGE = 25;
WISE_AGE = 50;
AGE_SIG = 15;


//this function takes music preference and the stat and
//is an add or subtract
var music_contrib = function(stat){
  music=$(MUSIC_INPUT).val()
  var num;
  switch (stat){
    case 'Strength':
      switch(music){
        case 'pop':
          num=3;
        break;
        case 'alt':
          num=0;
        break;
        case 'punk':
          num=8;
        break;
        case 'country':
          num=4;
        break;
        case 'hiphop':
          num=6;
        break;
        case 'jazz':
          num=-2;
        break;
        case 'classical':
          num=-5;
        break;
        case 'edm':
          num=2;
        break;
      }
    break;
    case 'Dexterity':
    switch(music){
      case 'pop':
        num=-5;
      break;
      case 'alt':
        num=4;
      break;
      case 'punk':
        num=0;
      break;
      case 'country':
        num=-1;
      break;
      case 'hiphop':
        num=3;
      break;
      case 'jazz':
        num=6;
      break;
      case 'classical':
        num=2;
      break;
      case 'edm':
        num=-2;
      break;
    }
    break;
    case 'Defense':
    switch(music){
      case 'pop':
        num=-3;
      break;
      case 'alt':
        num=-4;
      break;
      case 'punk':
        num=5;
      break;
      case 'country':
        num=2;
      break;
      case 'hiphop':
        num=7;
      break;
      case 'jazz':
        num=0;
      break;
      case 'classical':
        num=1;
      break;
      case 'edm':
        num=-2
      break;
    }
    break;
    case 'Wisdom':
    switch(music){
      case 'pop':
        num=-5;
      break;
      case 'alt':
        num=3;
      break;
      case 'punk':
        num=-4;
      break;
      case 'country':
        num=-6;
      break;
      case 'hiphop':
        num=2;
      break;
      case 'jazz':
        num=4;
      break;
      case 'classical':
        num=7;
      break;
      case 'edm':
        num=-1;
      break;
    }
    break;
    case 'Charisma':
    switch(music){
      case 'pop':
        num=8;
      break;
      case 'alt':
        num=2
      break;
      case 'punk':
        num=0;
      break;
      case 'country':
        num=1;
      break;
      case 'hiphop':
        num=4;
      break;
      case 'jazz':
        num=-1;
      break;
      case 'classical':
        num=-5;
      break;
      case 'edm':
        num=3;
      break;
    }
    break;
    default:
    num=0;
    break;
  }
  return num
}
