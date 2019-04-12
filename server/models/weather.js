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

exports.getRandomWeather = function() {
    var num = Math.floor(Math.random() * 100) + 1;
    var probTotal = 0;
    var i = 0;
    var pick = false;
    while(!pick) {
      probTotal += allWeathers[i].prob;
      if(num <= probTotal) {
        pick = true;
      }
      else {
        i++;
      }
    }
    return allWeathers[i];
}

exports.getAllWeathers = function() {
    return allWeathers;
}
