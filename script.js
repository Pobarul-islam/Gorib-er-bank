 // Deposit
let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');
 // Withdraw
let withdrawValue = document.getElementById('withdraw-value');
let withdrawoutput = document.getElementById('withdraw-output');
// Balance
let balanceOutput = document.getElementById('balance-output');


function addMoney(currentAmount, newAmount) {
  return Number(currentAmount) + Number( newAmount);
}

function deposit(){
//  depositOutput.innerText =  Number(depositOutput.innerText) + Number(depositValue.value) ;
  
  const totalBalance = addMoney(depositOutput.innerText, depositValue.value);
  
  depositOutput.innerText = totalBalance;

  balanceOutput.innerText = totalBalance
    ;

//  balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value) ;


 depositValue.value = '';
 
};


function withdraw(){
// withdrawoutput.innerText = Number(withdrawoutput.innerText) + Number(withdrawValue.value);
  
  const totalWithdraw = addMoney(withdrawoutput.innerText, withdrawValue.value);
  
  withdrawoutput.innerText = totalWithdraw;
balanceOutput.innerText = Number(balanceOutput.innerText) -  Number(withdrawValue.value);
  
  
withdrawValue.value = ''
 
}
