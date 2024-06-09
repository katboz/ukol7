const formular = document.querySelector('form')
const input = document.querySelector('input')

const odebirat = (event) => {
	event.preventDefault()
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

formular.addEventListener('submit', odebirat)


// overujem email 

const emailCheck = () =>{
    const email = input.value;
    if (email ==='' || !email.includes('@')){
        input.classList.add('red-border')
    }
    else{
        input.classList.remove('red-border')
    }
}

input.addEventListener('input', emailCheck)
emailCheck()