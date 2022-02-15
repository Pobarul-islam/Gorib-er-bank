function deposit(){
 let depositValue = document.getElementById('deposit-value');
 let depositOutput = document.getElementById('deposit-output');
 let balanceOutput = document.getElementById('balance-output');


 depositOutput.innerText =  Number(depositOutput.innerText) + Number(depositValue.value) ;

 balanceOutput.innerText = Number(balanceOutput.innerText) + Number(depositValue.value) ;

 depositValue.value = '';
 
};


function withdraw(){
  
  let withdrawValue = document.getElementById('withdraw-value');
  let withdrawoutput = document.getElementById('withdraw-output');
  let balanceOutput = document.getElementById('balance-output');
 

  withdrawoutput.innerText = Number(withdrawoutput.innerText) + Number(withdrawValue.value);

  balanceOutput.innerText = Number(balanceOutput.innerText) -  Number(withdrawValue.value);

  withdrawValue.value = ''
 
}
