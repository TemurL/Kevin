const playList = document.querySelector('.play-list');
if (localStorage.test) {
    PL = JSON.parse(localStorage.test);
} else {
    PL = [];
}

PL.forEach((song) => {
    const songSect = document.createElement('section');
    const songInfo = document.createElement('div');
    const delOne = document.createElement('button');
    const songInfoP = document.createElement('p')
    delOne.className = 'delete-one';
    songSect.className = 'song';
    delOne.textContent = 'Delete song';
    const audio = document.createElement('audio')
    audio.setAttribute('controls','constrols')
    audio.setAttribute('src', song.url)
    songInfoP.textContent = `${song.name} - ${song.artist}`;

    songInfo.appendChild(songInfoP);
    songInfo.appendChild(delOne);
    songSect.appendChild(songInfo);
    songSect.appendChild(audio)
    playList.appendChild(songSect);

});

