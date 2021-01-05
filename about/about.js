setTimeout(function(){

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


$( document ).ready(function() {
    //globe start

for(let i=0; i<=4; i++){
    $('#Gwrapper').append('<div class="l"></div><div class="h"></h>');
    $('.l:eq('+i+')').css('transform','rotateY('+i*36+'deg)');
    $('.h:eq('+i+')').css('transform','rotateX('+i*36+'deg)');
  }
  
  
  $('.l:eq(0)').html('')
  
  
  let borColor = ['#0033FF','#0941FF','#134FFF','#1C5DFF','#256BFF','#2E79FF','#3886FF', '#4194FF','#4AA2FF','#53B0FF','#5DBEFF','#66CCFF'];
  
  $('.l:eq(0)').css('border','1px dashed #0033FF');
  $('.l:eq(1)').css('border','1px dashed #134FFF');
  $('.l:eq(2)').css('border','1px dashed #256BFF');
  $('.l:eq(3)').css('border','1px dashed #3886FF');
  $('.l:eq(4)').css('border','1px dashed #4AA2FF');
  
  var x,y;
  $("#superWrap").mousemove(function(event) {
      var offset = $(this).offset();
      x = event.pageX- offset.left;
      y = event.pageY- offset.top;
      let width=$("#superWrap").width();
      let height=$("#superWrap").height();
      let xPerc=(x-(width/2))*.5;
      let yPerc=(y-(height/2))*.5;
    
    
      
      $('#Gwrapper').css('transform','rotateX('+yPerc+'deg) rotateY('+(-1*xPerc)+'deg)')
    
  });
  


//globe end
});



window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#title1", "jackInTheBox")
});

window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#title2", "zoomInDown")
});

window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#title3", "rollIn")
});

window.addEventListener('scroll', function handler(e) {
	animateOnScroll(e, handler,"#callToActionBtn", "flipInY")
});

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