/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var tOneForCount = function(rows, columns, total) {
    this.rows = rows;
    this.columns = columns;
    this.number = total;
    this.getCelloCount =  getCellCount;
}

function getCellCount(){
    return this.rows + this.columns + this.number; 
}

var t = new tOneForCount(5,10, 115);
var count = t.getCelloCount(); 

// output 
document.write("</br>" + "This is a first output " + count);








document.writeln("<h2>Thinking of Objects as Associative Arrays</h2>")

