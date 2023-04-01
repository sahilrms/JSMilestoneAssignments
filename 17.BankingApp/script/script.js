let account = {
    "account_holder": "Sahil Hussain",
    "account_number": "sb-10015",
    "balance": 10000.00,
    "currency": "Rupees",
}

document.getElementById('user-welcome').innerHTML =
    '<h2>Hi!' + account.account_holder + '</h2>';
document.getElementById('balance').innerHTML =
    '<h2>Hi! ' + account.account_holder + ', your balance is ' + account.balance + '' + account.currency + ' </h2>';

function withdrawMoney(e) {
    e.preventDefault();
    let amount = Number(document.getElementById('withdrawAmount').value);
    if (amount > account.balance) {
        document.getElementById('balance').innerHTML = `<h3>Insufficient Balance</h3>`;
    }
    else {
        let bal = account.balance - amount;
        document.getElementById('balance').innerHTML = `<h3>${amount} withdrawn now balance is ${bal}}</h3>`;
        account.balance = bal;
        document.getElementById('balance').innerHTML =
           `<h3>hi ${account.account_holder} your last transaction of Rupees ${amount} is sucess now your balance is ${account.balance}</h3>`;

    }
}

function depositMoney(e){
    e.preventDefault();
    let amount = Number(document.getElementById('depositAmount').value);
    let bal=account.balance+amount;
    account.balance=bal;
    document.getElementById('balance').innerHTML =
    '<h3>Hi! ' + account.account_holder + ', your balance is ' + account.balance + '' + account.currency + ' </h3>';
}
let withdraw_btn = document.getElementById('withdraw-btn');
withdraw_btn.addEventListener('click',(e)=>withdrawMoney(e));

let deposit_btn = document.getElementById('deposit-btn');
deposit_btn.addEventListener('click',(e)=>depositMoney(e));