
const spice = document.querySelectorAll('form div')


spice.forEach(element => {
    element.addEventListener('click', ()=>{
        let inputVal = element.querySelector('input')
        inputVal.checked = !inputVal.checked;

        if (element.querySelector('input').checked) {
            let tick = document.createElement('img')
            tick.setAttribute('src', '../assets/tick.png')
            tick.style.position = 'absolute'
            tick.style.opacity = '0.8'
            tick.style.height = '5rem'
            tick.style.width = '5rem'
            element.appendChild(tick)

            element.style.opacity = '1'
        } else {
            tick.style.backgroundImage = 'none';
        }
        
    })
});

