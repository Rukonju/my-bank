document.getElementById("login-btn").addEventListener('click',function(){
    const emailInput=document.getElementById("user-email");
    const useremail=emailInput.value;
    const passwordInput=document.getElementById("user-password");
    const userpassword=passwordInput.value;
    if (useremail=="a@b.com" && userpassword==1234){
        window.location.href="index.html";
    }
});