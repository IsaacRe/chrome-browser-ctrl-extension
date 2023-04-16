function myAlert(event){
    let text = event.target.innerText;
    alert(text);
    console.log(text);
}

document.getElementsByTagName('html')[0].addEventListener('click', myAlert);
