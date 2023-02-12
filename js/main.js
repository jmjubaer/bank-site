document.getElementById('submit_btn').addEventListener('click',function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    // console.log(email,password);
    if((email == 'jmjubaer3927@gmail.com' &&( password == 'jubaer' || password == 'jubaer12islam')) || (email == 'mdjubaerm16247@gmail.com' && ( password == 'jubaer' || password == 'jubaer12islam'))){
        window.location.href = 'bank/index.html';
    }else{
        alert('Enter Valid User name and password')
    }
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
})