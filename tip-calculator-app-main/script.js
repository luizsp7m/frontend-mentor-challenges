const inputBill = document.querySelector('#inputBill');
const inputNumberPeople = document.querySelector('#inputNumberPeople');
const inputCustomTip = document.querySelector('#inputCustomTip');

const errorBill = document.querySelector('#errorBill');
const errorTip = document.querySelector('#errorTip');
const errorNumberPeople = document.querySelector('#errorNumberPeople');

const resultTipAmount = document.querySelector('#resultTipAmount');
const resultTotal = document.querySelector('#resultTotal');

var valuePercentTip = undefined;
var lastElementSelected = undefined;

var tip = 0;
var total = 0;

function selectTip(percent, element) {
	valuePercentTip = percent;

	element.style.backgroundColor = '#26C2AD';

	if (lastElementSelected && lastElementSelected !== element) {
		lastElementSelected.style.backgroundColor = '#014749';
	}

	console.log(`Tip value: ${valuePercentTip}`);

	lastElementSelected = element;
}

function selectCustomTip() {
	if (lastElementSelected) {
		lastElementSelected.style.backgroundColor = '#014749'
	}

	valuePercentTip = inputCustomTip.value;
	console.log(`Tip value: ${valuePercentTip} / Custom`);
}

function calculate() {
	if(inputBill.value.trim() === '') {
		errorBill.innerHTML = 'Error';
		return;
	} else {
		errorBill.innerHTML = '';
	}

	if(valuePercentTip === undefined) {
		errorTip.innerHTML = 'Error';
		return;
	} else {
		errorTip.innerHTML = '';
	}

	if(inputNumberPeople.value.trim() === '') {
		errorNumberPeople.innerHTML = 'Error';
		return;
	} else if(inputNumberPeople.value === '0') {
		errorNumberPeople.innerHTML = "Can't be zero";
		return;
	} else {
		errorNumberPeople.innerHTML = '';
	}

	tip = (inputBill.value * (valuePercentTip / 100)) / inputNumberPeople.value;
	total = tip + (inputBill.value / inputNumberPeople.value);

	resultTipAmount.innerHTML = `$${tip.toFixed(2)}`;
	resultTotal.innerHTML = `$${total.toFixed(2)}`;
}