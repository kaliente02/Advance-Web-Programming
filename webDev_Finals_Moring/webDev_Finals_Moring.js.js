function allAbout(){
    const allAbout = document.querySelector('.allAbout');
    const nav =document.querySelector('.nav');
    allAbout.classList.all('active')
    nav.classList.all('active')
}

//---------------------------------------------------AUTOMATED SCROLL-----------------------------------------------------//
window.addEventListener('scroll',function(){
    var read = document.querySelectorAll('.readX')

    for(var c = 0; c < read.length; c++){
        var windowheight = window.innerHeight;
        var readtop = read[c].getBoundingClientRect().top; 
        var readpoint = 150;

        if(readtop < windowheight - readpoint){
            read[c].classList.add('active');
        }
        else{
           read[c].classList.remove('active');
        }
    }
})

//-----------------------------------------------------------COMPLETED------------------------------------------------------------//

let list = document.querySelectorAll('.list')
let card = document.querySelectorAll('.card')

for(let i=0; i < list.length; i++){
    list[i].addEventListener('click',function(){
        for(let a=0; a < list.length; a++){
            list [a].classList.remove('active');
        } 
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let b=0; b < card.length; b++)
        {
            card[b].classList.remove('active');
            card[b].classList.add('hide');

            if(card[b].getAttribute('data-item') == dataFilter || dataFilter =='all'){
                card[b].classList.remove('hide');
                card[b].classList.add('active');
            }

        }
    })
}
