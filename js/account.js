function getInputValue(){
    const depositInput=document.getElementById("deposit");
    const depositValue=depositInput.value;
    const depositAmount=parseFloat (depositValue);
    depositInput.value='';
    return depositAmount;
    
}
document.getElementById("deposit-btn").addEventListener('click',function() {
    const depositAmount=getInputValue();
    const inialDeposit=document.getElementById("total-deposit");
    const initialDepositAmount=parseFloat(inialDeposit.innerText);
    inialDeposit.innerText=initialDepositAmount+depositAmount;
    const  initialBalance=document.getElementById("total");
    const  initialBalanceValue=parseFloat(initialBalance.innerText);
    initialBalance.innerText=depositAmount+initialBalanceValue;

    
});
//withdraw
document.getElementById("withdraw-btn").addEventListener('click',function() {
    const withdrawInput=document.getElementById("withdraw");
    const withdrawValue=withdrawInput.value;
    const withdrawAmount=document.getElementById('total-withdraw');
    let totalWithdraw=withdrawAmount.innerText;
    totalWithdraw=parseFloat (withdrawValue) + parseFloat (totalWithdraw);
    withdrawAmount.innerText=totalWithdraw;
    withdrawInput.value='';
    const balance=document.getElementById("total");
    let totalBalance=balance.innerText;
    totalBalance=parseFloat(totalBalance)- parseFloat(totalWithdraw);
    balance.innerText=totalBalance;
});