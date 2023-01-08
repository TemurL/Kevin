const delBtn = document.createElement('button');
delBtn.id = 'clean';
delBtn.textContent = 'Delete All'
const sList = document.querySelector('.play-list');
const main = document.querySelector('main');
const emptyList = document.createElement('h1');
emptyList.textContent = 'There are no songs yet. You can add some frome the Home Page!  :)';
emptyList.style.color = '#848484';

delBtn.onclick = () => {
    localStorage.clear();
    location.reload();
    console.log('done')
}


if (sList.textContent) {
    main.appendChild(delBtn)
} else {
    main.appendChild(emptyList)
}