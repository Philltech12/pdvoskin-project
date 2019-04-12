var topTen = [
  ['Bill', 7276, '1/1/2019'],
  ['Jill', 2656, '3/3/2019'],
  ['Phill', 99999, '1/22/2019'],
  ['Sarah', 6335, '2/27/2019'],
  ['Jake', 8541, '3/1/2019'],
  ['Bob', 7352, '3/5/2019'],
  ['Samantha', 6787, '3/7/2019'],
  ['Brian', 6154, '3/8/2019'],
  ['Dale', 8975, '1/12/2019'],
  ['Jennifer', 5322, '2/27/2019']
]

topTen.sort(function(a, b){
    var x = a[1];
    var y = b[1];
    return y - x;
});

var topTenTable = document.getElementById('topTenTable');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

for (i = 0; i < 10; i++){
    var vals = topTen[i];
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = i + 1;
    row.appendChild(cell);
    for (var b = 0; b < vals.length; b++){
        var cell = document.createElement('td');
        cell.textContent = vals[b];
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}
table.appendChild(tbody);
topTenTable.appendChild(table);
