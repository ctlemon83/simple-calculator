// Key Variables
	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');
	var num3 = document.getElementById('num3');
	var num4 = document.getElementById('num4');
	var num5 = document.getElementById('num5');
	var num6 = document.getElementById('num6');
	var num7 = document.getElementById('num7');
	var num8 = document.getElementById('num8');
	var num9 = document.getElementById('num9');
	var num0 = document.getElementById('num0');
	var plus = document.getElementById('plus');
	var minus = document.getElementById('minus');
	var multiply = document.getElementById('multiply');
	var divide = document.getElementById('divide');
	var equals = document.getElementById('equals');
	var display = document.getElementById('displayValue');

// Expression Storing Variables
	var expression = {
		firstVariable: '',
		operator: '',
		secondVariable: '',
		result: ''
	};

	var var1 = expression.firstVariable;
	var var2 = expression.secondVariable;
	var operator = expression.operator;
	var result = expression.result;

// Digit Event Listeners
	num1.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 1;
		} else {
			var2 = 1;
		}
		display.innerHTML = 1;
	});

	num2.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 2;
		} else {
			var2 = 2;
		}
		display.innerHTML = 2;
	});

	num3.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 3;
		} else {
			var2 = 3;
		}
		display.innerHTML = 3;
	});

	num4.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 4;
		} else {
			var2 = 4;
		}
		display.innerHTML = 4;
	});

	num5.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 5;
		} else {
			var2 = 5;
		}
		display.innerHTML = 5;
	});

	num6.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 6;
		} else {
			var2 = 6;
		}
		display.innerHTML = 6;
	});

	num7.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 7;
		} else {
			var2 = 7;
		}
		display.innerHTML = 7;
	});

	num8.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 8;
		} else {
			var2 = 8;
		}
		display.innerHTML = 8;
	});

	num9.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 9;
		} else {
			var2 = 9;
		}
		display.innerHTML = 9;
	});

	num0.addEventListener('click', function() {
		if(var1 === '') {
			var1 = 0;
		} else {
			var2 = 0;
		}
		display.innerHTML = 0;
	});

// Operator Event Listeners
	plus.addEventListener('click', function() {
		if(operator === '') {
			operator = 'plus';
		}
		display.innerHTML = '+';
	});

	minus.addEventListener('click', function() {
		if(operator === '') {
			operator = 'minus';
		}
		display.innerHTML = '-';
	});

	multiply.addEventListener('click', function() {
		if(operator === '') {
			operator = 'multiply';
		}
		display.innerHTML = 'x';
	});

	divide.addEventListener('click', function() {
		if(operator === '') {
			operator = 'divide';
		}
		display.innerHTML = '/';
	});

	equals.addEventListener('click', function() {
		if(var1 !== '' && var2 !== '' && operator === 'plus') {
			result = var1 + var2;
		} else if(var1 !== '' && var2 !== '' && operator === 'minus') {
			result = var1 - var2;
		} else if(var1 !== '' && var2 !== '' && operator === 'multiply') {
			result = var1 * var2;
		} else if(var1 !== '' && var2 !== '' && operator === 'divide') {
			result = var1 / var2;
		} else {
			result = 0;
		}
		display.innerHTML = result;
		var1 = '';
		var2 = '';
		operator = '';
	});
