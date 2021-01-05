


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
	animateOnScroll(e, handler,"#contactButton", "flipInY")
});

function animateOnScroll(e, handler, elementName, animationName){
    var element = document.querySelector(`${elementName}`);
	var position = element.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
        animateCSS(`${elementName}`,`${animationName}`);
        e.currentTarget.removeEventListener(e.type, handler);
        
    }
}