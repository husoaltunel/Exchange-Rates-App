class Exchange{
    constructor (amount,base,secondCurrency){
        this.amount = amount;
        this.base = base.options[base.selectedIndex].textContent;
        this.secondCurrency = secondCurrency.options[secondCurrency.selectedIndex].textContent;
        this.url = `https://api.exchangeratesapi.io/latest?base=${this.base}`;
    }
    
}



