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


document.getElementById('transaction-area').style.display = 'block';
document.getElementById('login-area').style.display = 'none';


// Login Button Event handler 
document.getElementById('login-button').addEventListener('click',function(event){
    this.parentElement.parentElement.style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
})



document.getElementById('currentBalance').innerText = localStorage.getItem('currentBalance');
document.getElementById('currentDeposit').innerText = sessionStorage.getItem('depositS');
document.getElementById('currentWithdraw').innerText = sessionStorage.getItem('withdrawS');

function totalDefault (){
    if(localStorage.getItem('currentBalance')){
        document.getElementById('default').style.display = 'none';
    }
}
totalDefault ();

function totalDefaultD (){
    if(sessionStorage.getItem('depositS')){
        document.getElementById('defaultD').style.display = 'none';
    }
}
totalDefaultD ();

function totalDefaultW (){
    if(sessionStorage.getItem('withdrawS')){
        document.getElementById('defaultW').style.display = 'none';
    }
}
totalDefaultW();

document.getElementById('addDeposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const deposit = parseFloat(depositAmount);

    currentBalance = localStorage.getItem('currentBalance');
    let total= parseFloat(currentBalance);

    if(deposit>0){

        if(currentBalance){
            total+=deposit;
        }else{
            total=deposit;
        }

        localStorage.setItem('currentBalance', total);
        document.getElementById('currentBalance').innerText = localStorage.getItem('currentBalance');


        currentDepositN = sessionStorage.getItem('depositS');
        let currentDepositNum= parseFloat(currentDepositN);

        if(currentDepositNum){
            currentDepositNum+=deposit;
        }else{
            currentDepositNum = deposit;
        }

        sessionStorage.setItem('depositS',currentDepositNum);
        document.getElementById('currentDeposit').innerText =  sessionStorage.getItem('depositS');

  
        document.getElementById('depositAmount').value ='';
    }else if(deposit<0){
        alert("Deposit amount can't be negative!");
    }
    totalDefault ();
    totalDefaultD ();


})


document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdraw = parseFloat(withdrawAmount);

    currentBalance = localStorage.getItem('currentBalance');
    let total= parseFloat(currentBalance);
    if(withdraw>0 && total>withdraw){

        if(currentBalance){
            total-=withdraw;
        }else{
            total=withdraw;
        }

        localStorage.setItem('currentBalance', total);
        document.getElementById('currentBalance').innerText = localStorage.getItem('currentBalance');


        currentWithdrawN = sessionStorage.getItem('withdrawS');
        let currentWithdrawNum= parseFloat(currentWithdrawN);

        if(currentWithdrawNum){
            currentWithdrawNum+=withdraw;
        }else{
            currentWithdrawNum = withdraw;
        }

        sessionStorage.setItem('withdrawS',currentWithdrawNum);
        document.getElementById('currentWithdraw').innerText =  sessionStorage.getItem('withdrawS');

  
        document.getElementById('withdrawAmount').value ='';
    }else if(withdraw<0){
        alert("Amount can't be negative!");
    }else if(total< withdraw){
        alert("You don't have enough amount!");
    }
    totalDefault ();
    totalDefaultW ();


})

