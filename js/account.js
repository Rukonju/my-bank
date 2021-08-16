function getInputValue(inputId){
    const input=document.getElementById(inputId);
    const value=input.value;
    const amount=parseFloat (value);
    input.value='';
    return amount;  
}
function updateTranxiction(fieldId, depositAmount){
    const tranxiction=document.getElementById(fieldId);
    const tranxictionAmount=parseFloat(tranxiction.innerText);
    tranxiction.innerText=tranxictionAmount+depositAmount;
}
function currentBalance(){
    const  initialBalance=document.getElementById("total");
    const  initialBalanceValue=parseFloat(initialBalance.innerText);
    return initialBalanceValue;
}
function totalbalance(depositAmount,isAdd){
    const  initialBalance=document.getElementById("total");
    // const  initialBalanceValue=parseFloat(initialBalance.innerText);
    const  initialBalanceValue=currentBalance();
    if(isAdd==true){
        initialBalance.innerText=initialBalanceValue + depositAmount;
    }
    else{
        initialBalance.innerText=initialBalanceValue - depositAmount;
    }
    
}
document.getElementById("deposit-btn").addEventListener('click',function() {
    const depositAmount=getInputValue("deposit");
    if (depositAmount>0){
        updateTranxiction("total-deposit",depositAmount); 
        totalbalance(depositAmount,true);
    }
    
});
//withdraw
document.getElementById("withdraw-btn").addEventListener('click',function() {
    const withdrawAmount=getInputValue("withdraw");
    const balance=currentBalance();
    if (withdrawAmount>0 && withdrawAmount<balance){
        updateTranxiction('total-withdraw',withdrawAmount);
        totalbalance(withdrawAmount,false);
    }
    else{
        alert("insufficient balance");
       
    }
    
});