function getInputValue(inputId){
    const input=document.getElementById(inputId);
    const value=input.value;
    const amount=parseFloat (value);
    input.value='';
    return amount;  
}
function updateTranxiction(fieldId, depositAmount){
    debugger;
    const tranxiction=document.getElementById(fieldId);
    const tranxictionAmount=parseFloat(tranxiction.innerText);
    tranxiction.innerText=tranxictionAmount+depositAmount;
}
document.getElementById("deposit-btn").addEventListener('click',function() {
    const depositAmount=getInputValue("deposit");
    updateTranxiction("total-deposit",depositAmount);
    const  initialBalance=document.getElementById("total");
    const  initialBalanceValue=parseFloat(initialBalance.innerText);
    initialBalance.innerText=depositAmount+initialBalanceValue;  
});
//withdraw
document.getElementById("withdraw-btn").addEventListener('click',function() {
    const withdrawAmount=getInputValue("withdraw");
    updateTranxiction('total-withdraw',withdrawAmount);
    const initialBalance=document.getElementById("total");
    const initialBalanceValue=parseFloat(initialBalance.innerText);
    initialBalance.innerText=initialBalanceValue-withdrawAmount;
});