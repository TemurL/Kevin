const form = document.querySelector('form')
const header = document.querySelector('header')
const newDiv = document.createElement('div')
newDiv.classList = 'name-sign'



form.onclick = () => {
    let namePromt = prompt('Простите, но пока эта форма не работает :( , но Вы можете написать свое имя сюда, и мы покажем его вам тут внизу!')
    
    if (namePromt) {
        newDiv.innerHTML = `
            <h2>Привет, ${namePromt}!</h2>
            <p>Теперь вы с Кевином друзья! А когда сайт будет работать лучше, ты сможеь прийти и погостить в наш лес!</p>
        `
    } else {
        newDiv.innerHTML = `
            <h2>Привет!</h2>
            <p>Теперь вы с Кевином друзья! А когда сайт будет работать лучше, ты сможеь прийти и погостить в наш лес!</p>
        `
    }
    
    header.insertAdjacentElement("afterend", newDiv)

}

