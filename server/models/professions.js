function profession(name, money) {
  this.name = name;
  this.money = money;
}

var allProfessions = []
allProfessions.push(new profession("Banker", 2000));
allProfessions.push(new profession("Carpenter", 1800));
allProfessions.push(new profession("Farmer", 1500));

exports.getAllProfessions = function() {
  return allProfessions;
}
