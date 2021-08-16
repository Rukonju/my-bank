function getInputValue(inputId){
    const input=document.getElementById(inputId);
    const value=input.value;
    const amount=parseFloat (value);
    input.value='';
    return amount;  
}
/* function totalBalance(){

} */
document.getElementById("deposit-btn").addEventListener('click',function() {
    const depositAmount=getInputValue("deposit");
    const inialDeposit=document.getElementById("total-deposit");
    const initialDepositAmount=parseFloat(inialDeposit.innerText);
    inialDeposit.innerText=initialDepositAmount+depositAmount;
    const  initialBalance=document.getElementById("total");
    const  initialBalanceValue=parseFloat(initialBalance.innerText);
    initialBalance.innerText=depositAmount+initialBalanceValue;  
});
//withdraw
document.getElementById("withdraw-btn").addEventListener('click',function() {
    const withdrawAmount=getInputValue("withdraw");
    const initialWithdraw=document.getElementById('total-withdraw');
    const initialWithdrawValue=parseFloat(initialWithdraw.innerText);
    initialWithdraw.innerText= initialWithdrawValue+withdrawAmount;
    const initialBalance=document.getElementById("total");
    const initialBalanceValue=parseFloat(initialBalance.innerText);
    initialBalance.innerText=initialBalanceValue-withdrawAmount;
});