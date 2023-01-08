const notes = document.querySelector('#notes')
const body = document.querySelector('html')
let userNotes = document.getElementsByTagName('textarea')


if (localStorage.userNotes) {
    userNotes[0].textContent = localStorage.userNotes
}




body.onclick = () => {
    localStorage.setItem('userNotes', userNotes[0].value)
}
