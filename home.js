
setTimeout(function(){
        window.onscroll = function(ev) {
            var bottomSection = document.getElementById("bigContactBtn").getBoundingClientRect().top;
            if(bottomSection<=40){
                document.getElementById('menuTogglerWrapper').style.mixBlendMode="normal";
            }
            else {
                document.getElementById('menuTogglerWrapper').style.mixBlendMode="difference";
            }
        };

        $(document).ready(function() {
            $('a[href*=\\#]').on('click', function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop : $(this.hash).offset().top
                }, 500);
            });
        });

      
},500)


const animateCSS = (element, animation, prefix = 'animate__') =>
        
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });


function closeMainNavigation(){
    document.getElementById('mainNavigationWrapper').style.display="none";
}

function openMainNavigation(){
    document.getElementById('mainNavigationWrapper').style.display="block";
    animateCSS('#mainNavigationWrapper', 'bounceInDown');
}




window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#bigContactBtnText", "rotateIn")
});

window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#portfolioTitle", "flipInX")
});

window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#f3ePortfolioText", "flipInX")
});

window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#brePortfolioText", "flipInY")
});

function animateOnScroll(e, handler, elementName, animationName){
    var element = document.querySelector(`${elementName}`);
	var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
        animateCSS(`${elementName}`,`${animationName}`);
        e.currentTarget.removeEventListener(e.type, handler);
        
    }
}