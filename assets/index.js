
const user = 'Mendizale'
const password = 123
let userInput = document.getElementById('user')
let passInput = document.getElementById('password')
let submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    if(user == userInput.value && password == passInput.value){
        let congrat = document.createElement('p')

        congrat.innerHTML += "You are logged "

        let parent = document.querySelector('.logg')
        let form = document.getElementById('loggin')
        
        form.style.display = "none"

        parent.appendChild(congrat)
    }
    else{

        userInput.style.border = "1px solid red"
        passInput.style.border = "1px solid red"
        console.log('error')
    }
    
});

const closeDialog = document.getElementById('x')
const registry = document.getElementById('registry')

closeDialog.addEventListener('click', function(){
    registry.close();
})

newLogg.addEventListener('click', ()=>{
    let newUser = document.getElementById('newUser')
    let newPass = document.getElementById('newPass')
    let doublePass = document.getElementById('doublePass')


if (!newUser.value || !/^[a-zA-Z]+$/.test(newUser.value) &&
    !newPass.value || !/^[a-zA-Z]+$/.test(newPass.value)){
    newUser.style.border = "1px solid red"
    newPass.style.border = "1px solid red"
} else{
    newLogg.addEventListener('click', function(){
    registry.close();
    })
}
if (newPass !== doublePass){
    newPass.style.border = "1px solid red"
    doublePass.style.border = "1px solid red"
}
else{
    newPass.style.border = ""
    doublePass.style.border = ""
}
})

let eyeBan = document.getElementById('eyeBan')

eyeBan.addEventListener('click', ()=>{
if (passInput.type == 'password') {
    passInput.type = 'text';
} else {
    passInput.type = 'password';
}
})