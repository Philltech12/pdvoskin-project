function weather(id, type, health, miles, prob) {
  this.id = id;
  this.type = type;
  this.health = health;
  this.miles = miles;
  this.prob = prob;
}

var allWeathers = []
allWeathers.push(new weather(0, "Very Hot", -8, .7, 10));
allWeathers.push(new weather(1, "Hot", -3, .9, 10));
allWeathers.push(new weather(2, "Warm", 1, 1, 20));
allWeathers.push(new weather(3, "Cool", 1, .95, 10));
allWeathers.push(new weather(4, "Cold", -5, .8, 10));
allWeathers.push(new weather(5, "Very Cold", -12, .7, 10));
allWeathers.push(new weather(6, "Rain", -4, .6, 10));
allWeathers.push(new weather(7, "Heavy Rain", -8, .4, 5));
allWeathers.push(new weather(8, "Snow", -15, .3, 5));
allWeathers.push(new weather(9, "Blizzard", -30, .1, 5));
allWeathers.push(new weather(10, "Heavy Fog", -3, .5, 5));
/*
exports.getRandomWeather = function() {
    var num = Math.floor(Math.random() * 100) + 1;
    var probTotal = 0;
    var i = 0;
    var chosen = false;
    while(!chosen) {
      probTotal += allWeathers[i].prob;
      if(num <= probTotal) {
        chosen = true;
      }
      else {
        i++;
      }
    }
    return allWeathers[i];
}
*/
exports.getRandomWeather = function() {
    var rNum = Math.floor(Math.random() * 100) + 1;
    if(rNum <= 10) {
      return allWeathers[0];//very hot
    }
    else if (rNum > 10 && rNum <= 20) {
      return allWeathers[1];//hot
    }
    else if (rNum > 20 && rNum <= 40) {
      return allWeathers[2];//warm
    }
    else if (rNum > 40 && rNum <= 50) {
      return allWeathers[3];//cool
    }
    else if (rNum > 50 && rNum <= 60) {
      return allWeathers[4];//cold
    }
    else if (rNum > 60 && rNum <= 70) {
      return allWeathers[5];//very cold
    }
    else if (rNum > 70 && rNum <= 80) {
      return allWeathers[6];//rain
    }
    else if (rNum > 80 && rNum <= 85) {
      return allWeathers[7];//heavy rain
    }
    else if (rNum > 85 && rNum <= 90) {
      return allWeathers[8];//snow
    }
    else if (rNum > 90 && rNum <= 95) {
      return allWeathers[9];//blizzard
    }
    else if (rNum > 95 && rNum <= 100) {
      return allWeathers[10];//heavy fog
    }

}

exports.getAllWeathers = function() {
    return allWeathers;
}
