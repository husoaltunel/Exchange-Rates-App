var amount = document.getElementById('amount');
var select = document.getElementById('firstCurrency');
var select2 = document.getElementById('secondCurrency');
var outputTitleFirst = document.getElementById('outputFirst');
var outputTitleSecond = document.getElementById('outputSecond');

const ui = new UI();

eventListeners();

function eventListeners() {

    amount.addEventListener('input',exc);
    select.onchange = exc;
    select2.onchange =exc;
   

}

function exc(e) {
    const exchangeObj = new Exchange(amount.value,select,select2);
    ui.changeOutputTitles(exchangeObj,outputTitleFirst,outputTitleSecond);
    ui.exchange(exchangeObj);
    e.preventDefault();
}