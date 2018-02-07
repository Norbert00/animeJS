
let shareButto = document.querySelector(".share");
console.log(shareButto);

shareButto.addEventListener("click", function(){
    let playAnime = anime({
        targets: 'div.boxes',
        translateY: [
            {
                value: 100,
                duration: 700,
            }, {
                value: 0,
                duration: 800,
            }
        ],
        rotate: {
            value: "1turn",
            easing: "easeInOutSine"
        },
        delay: function (e, i, t) {
            return i * 1000
        },
        autoplay: false,
        loop: false,
    });
    playAnime.play();
    
    let ico = document.querySelectorAll(".boxes");
    console.log(ico);
    
    for (let i = 0; i < ico.length; i++) {
        ico[i].classList.add("see");        
    }

})