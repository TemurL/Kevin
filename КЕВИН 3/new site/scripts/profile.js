const playList = document.querySelector('.play-list');
if (localStorage.test) {
    PL = JSON.parse(localStorage.test);
} else {
    PL = [];
}

PL.forEach((song) => {
    const li = document.createElement('li');
    const audio = document.createElement('audio')
    audio.setAttribute('controls','constrols')
    audio.setAttribute('src', song.url)
    li.textContent = `${song.name} - ${song.artist}`;

    
    li.appendChild(audio);
    playList.appendChild(li)

});

