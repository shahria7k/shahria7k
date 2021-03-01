let theme = localStorage.getItem('theme');
if (theme == null){
    setTheme('light')
} else{ setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot');
for(i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode)
    })
} 
function setTheme(mode){
    if(mode=='light'){
        document.getElementById('theme-style').href= 'light.css'
    }
    if(mode=='blue'){
        document.getElementById('theme-style').href= 'blue.css';
    }
    if(mode=='green'){
        document.getElementById('theme-style').href= 'green.css';
    }
    if(mode=='purple'){
        document.getElementById('theme-style').href= 'purple.css';
    }
    localStorage.setItem('theme', mode);
}

// let mouseCursor = document.querySelector('.cursor');
// let navLinks = document.querySelectorAll('ul li');
// window.addEventListener('mousemove', cursor);
// function cursor(e){
//     mouseCursor.style.top = e.pageY + 'px';
//     mouseCursor.style.left = e.pageX + 'px';
// }
var wc= document.querySelector('#wc')
var wcData= wc.innerHTML;
var data = {
    wc: 'হাই, আমি শাহরিয়ার',
}
wc.addEventListener('click' , function(){
    if (wc.innerHTML === wcData) {
        wc.innerHTML = data.wc;
    } else if(wc.innerHTML === data.wc){
        wc.innerHTML = wcData;
    }
  })