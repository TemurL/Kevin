let PL = []

if (localStorage.test) {
    PL = JSON.parse(localStorage.test);
} else {
    PL = [];
}

const delOne = document.querySelectorAll('button.delete-one');

// console.log(delOne)

delOne.forEach((delOneBtn) => {
    delOneBtn.onclick = () => {
        let songUrl = delOneBtn.parentElement.parentElement.childNodes[1].getAttribute('src');
        PL.forEach((song) => {
            if (song.url === songUrl) {
                let delIndex = PL.findIndex(i => i === song);
                PL.splice(delIndex, 1);
                localStorage.test = JSON.stringify(PL)
                location.reload()
            }
        })
    }
})