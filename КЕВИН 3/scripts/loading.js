const html = `<div class="animationLoader">

<div class="animationLoader__image"></div>

</div>`;


document.body.insertAdjacentHTML("afterbegin", html)

window.onload = function () {
    document.body.classList.add('animation_hiding');

    window.setTimeout(function () {
        document.body.classList.add('animation');
        document.body.classList.remove('animation_hiding');      
    }, 600);

}




