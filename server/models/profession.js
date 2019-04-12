function profession(name, money) {
  this.name = name;
  this.money = money;
}

var allProfessions = []
allProfessions.push(new profession("Banker", 900));
allProfessions.push(new profession("Carpernter", 600));
allProfessions.push(new profession("Farmer", 300));

exports.getAllProfessions = function() {
  return allProfessions;
}
