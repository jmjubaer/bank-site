document.getElementById('deposit_btn').addEventListener('click',function (){
    let depoAmount = parseFloat(document.getElementById('depo_field').value);

    //clear input field
    document.getElementById('depo_field').value = '';
    
    // validation....
    //if(isNaN(wdtAmount)){ // if we use input type text or anything but i use input type number
    if(depoAmount < 0){
        alert('Enter Valid Amount');wdtAmountString
        return;
    };

    let totalDepo = parseFloat(document.getElementById('depo').innerText) + depoAmount;

    document.getElementById('depo').innerText = totalDepo;

    //balance.....
    let currentBalance = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('balance').innerText = currentBalance + depoAmount;
});
document.getElementById('Withdraw_btn').addEventListener('click',function (){
    let wdtAmount =  parseFloat(document.getElementById('wtd_filed').value);

    //clear input filed
    document.getElementById('wtd_filed').value = '';
    
    // validation....
    //if(isNaN(wdtAmount)){ // if we use input type text or anything but i use input type number
    if(wdtAmount < 0){
        alert('Enter Valid Amount');wdtAmountString
        return;
    };

    let totalWdt = parseFloat(document.getElementById('wdt').innerText) + wdtAmount;

    //balance....
    let currentBalance = parseFloat(document.getElementById('balance').innerText);
    //insufficient found
    if(wdtAmount > currentBalance){
        alert("Insufficient Balance")
        return;
    }

    document.getElementById('balance').innerText = currentBalance - wdtAmount;
    //total withdraw function in down because insufficient
    document.getElementById('wdt').innerText = totalWdt;
});