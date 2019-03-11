/*
var myArray = [
  ['Bill', 1000, '3/1/2019'],
  ['Jill', 900, '3/2/2019'],
  ['Phill', 800, '3/3/2019'],
  ['Mill', 700, '3/4/2019'],
  ['Krill', 600, '3/5/2019'],
  ['Bob', 500, '3/6/2019'],
  ['Rob', 400, '3/7/2019'],
  ['Job', 300, '3/8/2019'],
  ['Lob', 200, '3/9/2019'],
  ['Sob', 100, '3/10/2019']
];
*/
createTable([['Bill', 800, '3/1/2019'],
['Jill', 200, '3/2/2019'],
['Phill', 1000, '3/3/2019'],
['Mill', 700, '3/4/2019'],
['Krill', 600, '3/5/2019'],
['Bob', 300, '3/6/2019'],
['Rob', 400, '3/7/2019'],
['Job', 500, '3/8/2019'],
['Lob', 900, '3/9/2019'],
['Sob', 100, '3/10/2019']
]);

function createTable(tableData) {
      var table = document.createElement('table');
      var row = {};
      var cell = {};

      tableData.forEach(function(rowData) {
        row = table.insertRow(-1);
        rowData.forEach(function(cellData) {
          cell = row.insertCell();
    			cell.textContent = cellData;
        });
      });
      document.body.appendChild(table);
    }

/*
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
*/
//----------------------------------------------------------------------------//
/*
function myFunction() {
  document.getElementById("demo").innerHTML = 5 + 6;
}

function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
x
  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
*/
/*
function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
*/
