
//Steps for calculator
//1) Set display to 0
//2) enter number (first_num)
//3) Display number in display (as a string)
//3) enter an operator
//4) Set display to 0
//4) enter another number (second_num)
//5) Display number in display (as string)
//5) enter equals, then perform calculation
//6) display output

//Event listeners needed:
//1) Digits 0-9
//2) Operators: +,-,*,/
//3) AC(clear out first_num, second_num), % (divide by 100), +/- (change sign of number).
//4) Equals 

//event listener steps
//1) identify item listening on
//2) identify trigger event
//3) identify function that results  


$(document).ready(function(){

//function to check that number is not longer than 9 charcters

var testNumLength = function(number) {
        if (number.length > 9) {
            number = "";
            total.text("Err");
        };
    };


//variables to hold values

	var number = "";
    var newNumber = "";
    var operator = "";
    var total = $(".result");
    total.text("0");

//event listener for numbers
	$(".number").click(function(){
			number += $(this).text();
			total.text(number);
			testNumLength(number);
	    });

//event listener for operators
	$(".operator").click(function(){
		if (operator.text = "+") {
			console.log("+");
			newNumber = number;
			number = "";
		};
		
	   });

//event listener for AC
	$(".allClear").click(function(){
		var number = "";
   		var newNumber = "";
   	 	var operator = "";
    	total.text("0");
    });

//event listener for equals
	$(".equals").click(function(){
		if (operator === "+"){
	    	number = (parseInt(newNumber, 10) + parseInt(number, 10)).toString(10);
	    	
		} else if (operator ==="-") {
			number = (parseInt(newNumber, 10) - parseInt(number, 10)).toString(10);


		} else if (operator ==="x") {
			number = (parseInt(newNumber, 10) * parseInt(number, 10)).toString(10);

		} else if (operator ==="/") {
			number = (parseInt(newNumber, 10) / parseInt(number, 10)).toString(10);

		}

		total.text(number); 

		//clear out the number and newNumber;
		number = "";
    	newnumber = "";

	});




});


