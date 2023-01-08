const addBtnsArr = document.querySelectorAll('button')
class Song {
    constructor(name, url, artist) {
        this.name = name;
        this.url = url;
        this.artist = artist
    }
}
let PL = []

if (localStorage.test) {
    PL = JSON.parse(localStorage.test);
} else {
    PL = [];
}

function findBtn(list, name) {
    for (let i = 0; i < list.length; i+=1) {
        if (list[i].name === name) {
            return true
        }
    }
    return false
}


addBtnsArr.forEach((addBtn) => {

    if (findBtn(PL, addBtn.id)) {
        addBtn.setAttribute('disabled','disabled');
    } else {
        addBtn.onclick = () => {
            let url = addBtn.parentElement.parentElement.childNodes[5].getAttribute('src');
            let artist =  addBtn.parentElement.childNodes[1].childNodes[3].textContent;
            const song = new Song(addBtn.id, url, artist);

            PL.push(song)

            localStorage.test = JSON.stringify(PL)

            addBtn.setAttribute('disabled','disabled');

        }
    }
})


