
//Steps for calculator
//1) Set display to 0
//2) enter number (first_num)
//3) Display number in display (as a string)
//3) enter an operator
//4) enter another number (second_num)
//5) Display number in display (as string)
//5) enter equals, then perform calculation
//6) display output

//Event listeners needed:
//1) Digits 0-9
//2) Operators: +,-,*,/, AC(clear out first_num, second_num), % (divide by 100), +/- (change sign of number).
//3) Equals 

//event listener steps
//1) identify item listening on
//2) identify trigger event
//3) identify function that results  


$(document).ready(function(){

//variables to hold values

	var number = "";
    var newNumber = "";
    var operator = "";
    var total = $(".output-area");
    total.text("0");

//event listener for numbers
$(".number").click(function(){
		number += $(this).text();
		total.text(number);
    });
});




