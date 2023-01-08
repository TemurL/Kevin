const darkBtn = document.querySelector('.darkSwitch')
const page = document.querySelector('html')


darkBtn.onclick = () => {
 
    if (page.style.backgroundColor === '' || page.style.backgroundColor === 'rgb(221, 224, 229)' ) {
        page.style.transitionDuration = '1s'
        darkBtn.style.transitionDuration = '1s';
        page.style.backgroundColor = 'rgb(212 146 210 / 42%)';
        darkBtn.style.rotate = '90deg';
        darkBtn.style.position = 'relative';
        darkBtn.style.transitionDuration = '1s';


        setTimeout(() => {
            darkBtn.style.left = '-80px';
        }, 1000)


        setTimeout (() => {
            darkBtn.style.rotate = '0deg';
            darkBtn.style.left = '0px';
        },5000)
        
    } else {
        page.style.backgroundColor = 'rgb(221, 224, 229)';
        darkBtn.style.rotate = '0deg';

        setTimeout(() => page.style.transitionDuration = '', 1000)
    }

}