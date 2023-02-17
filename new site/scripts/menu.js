const menuIcon = document.querySelector('.menu-icon')
const noteMenu = document.querySelector('.note-menu')
const mobileMenuHTML = `
    <div class="mobile-menu" style="top: -145px; position: fixed;">
        <ul>
            <a href="./index.html">
                <li>HOME</li>
            </a>
            <a href="./profile.html">
                <li>PROFILE</li>
            </a>
            <a href="./about.html">
                <li>ABOUT US</li>
            </a>
        </ul>
    </div>
`

menuIcon.onclick = () => {
    
    if (!document.querySelector('.mobile-menu')) {noteMenu.insertAdjacentHTML('afterend', mobileMenuHTML)

        const mobileMenuDiv = document.querySelector('.mobile-menu')
        console.log(mobileMenuDiv.style)

        setTimeout(() => {
            mobileMenuDiv.style.top = '80px'
        }, 100)
    } else {
        const body = document.querySelector('body')
        const mobileMenuDiv = document.querySelector('.mobile-menu')
        mobileMenuDiv.style.top = '-145px'
        setTimeout(() => {
            body.removeChild(mobileMenuDiv)
        }, 600)

        
    }
}
