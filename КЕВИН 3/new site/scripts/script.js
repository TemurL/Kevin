const songCardsArr = document.querySelectorAll('section');

songCardsArr.forEach((song) => {
    const addBtn = document.createElement('button');
    let songT = song.childNodes[1].textContent;

    addBtn.textContent = 'add to PL'
    addBtn.id = songT;

    song.childNodes[3].appendChild(addBtn)
})

