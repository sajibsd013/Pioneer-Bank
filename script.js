var card = document.getElementsByClassName('card');

for (let i = 0; i < card.length; i++) {
    const element = card[i];

    element.style.borderRadius ='10px';
    switch (i) {
        case 0:
            element.style.backgroundImage = 'linear-gradient( 45deg, #5E4FC4 , #5E4EC6)';
            break;
        case 1:
            element.style.backgroundImage = 'linear-gradient( 45deg, #F0966F , #F3966E)';
            break;
        case 2:
            element.style.backgroundImage = 'linear-gradient( 45deg, #EF9B02 , #EF9B01)';
            break;

        default:
            break;
    }
}

var boxShadow = document.getElementsByClassName('box-shadow');

for (let i = 0; i < boxShadow.length; i++) {
    const element = boxShadow[i];
    element.style.boxShadow =' 5px 5px 10px gray';
}


document.getElementById('transaction-area').style.display = 'none';

// Login Button Event handler 
document.getElementById('login-button').addEventListener('click',function(event){
    this.parentElement.parentElement.style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
})





document.getElementById('addDeposit').addEventListener('click',function(event){

    const depositAmount = document.getElementById('depositAmount').value;
 
    const depositNumber = parseFloat(depositAmount);

    if (depositNumber>0){

        const currentDeposit = document.getElementById('currentDeposit').innerText;
        const currentDepositNumber = parseFloat(currentDeposit);
    
        const totalDeposit = depositNumber+currentDepositNumber;
        document.getElementById('currentDeposit').innerText = totalDeposit;
    
        const currentBalance = document.getElementById('currentBalance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        
        const totalCurrentBalance = currentBalanceNumber+depositNumber;
        document.getElementById('currentBalance').innerText = totalCurrentBalance;
    
        document.getElementById('depositAmount').value= '';
    }

})

document.getElementById('addWithdraw').addEventListener('click',function(event){

    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw= document.getElementById('currentWithdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);


    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if(currentBalanceNumber< withdrawNumber){
        alert("You don't have enough amount!")
        document.getElementById('withdrawAmount').value = '';

    }
    else if(withdrawNumber>0 ){

        const totalWithdraw = currentWithdrawNumber+withdrawNumber;
        document.getElementById('currentWithdraw').innerText = totalWithdraw;

        const totalCurrentBalance = currentBalanceNumber-withdrawNumber;
        document.getElementById('currentBalance').innerText = totalCurrentBalance;

        document.getElementById('withdrawAmount').value = '';

    }

    
})