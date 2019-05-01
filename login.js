let userName = prompt('Who is there?');
if (userName == 'Admin'){
    let pass = prompt('Password?');
    if (pass == 'TheMaster'){
        alert('Welcome!');
    } else if (!pass){
        alert('Canceled.');
    } else{
        alert('Wrong Password!');
    }
} else if (!userName) {
    alert('Canceled');
}else{
    alert("I don't know you")
}
