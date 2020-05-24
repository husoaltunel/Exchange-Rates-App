class UI{

     get (exchangeObj) {

        return new Promise(function(resolve,reject){
            fetch(exchangeObj.url).then(response =>{
                resolve(response.json());
            }).catch(err => {
                reject('Bir Hata Oluştu.');
            });
            

        })

    }
     exchange (exchangeObj) {
        ui.get(exchangeObj).then(response =>{
            document.getElementById('outputResult').value = exchangeObj.amount*response.rates[exchangeObj.secondCurrency];
           
        }).catch(err => {
            document.getElementById('outputResult').value = err;
        })
        
    }

    changeOutputTitles (exchangeObj,outputTitleFirst,outputTitleSecond) {

        outputTitleFirst.textContent = exchangeObj.base;
        outputTitleSecond.textContent = exchangeObj.secondCurrency

    }
}
