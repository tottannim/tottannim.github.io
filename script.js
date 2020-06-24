// 변수 지정
var container = document.getElementById('container');
var slideWrapper = document.getElementsByClassName('container');
var slideContainer = document.getElementsByClassName('slider-container');
var slides = document.getElementsByClassName('slide');
var slideCount = slides.length;
var currentIndex = 0; // 슬라이드가 움직이면 이게 올라감
var slideTopHeight = 0;
var slidePrev = document.getElementById('prev');
var slideNext = document.getElementById('next');

/* SLIDE */
    //슬라이드의 높이 확인하여 부모의 높이로 지정하기
    function caculatorTallest(){
        for (var i=0; i<slideCount; i++){
            if(slides[i].offsetHeight > slideTopHeight) {
                slideTopHeight = slides[i].offsetHeight;
            }  
        }
        slideWrapper[0].style.height    = slideTopHeight + 'px';
        slideContainer[0].style.height  = slideTopHeight + 'px';
    }
    
    caculatorTallest();
    // 슬라이드가 있으면 가로로 배열하기
    for(var i=0; i < slideCount; i++){
        slides[i].style.left = (i * 100) + '%';
    }
    
    // 슬라이드[뷰] 이동 함수  [이거를 이해해야 함]
    function goToSlide(idx){
        slideContainer[0].style.left = (idx * -100) + '%';
        slideContainer[0].classList.add('animated');
        currentIndex = idx;
    }
    
    // 버튼을 클릭하면 슬라이드 이동시키기
    slidePrev.addEventListener('click', function(e){
        e.preventDefault();
        
        if(currentIndex > 0){
            goToSlide(currentIndex-1);
        } else {
            goToSlide(slideCount-1);
        }
    });
    
    slideNext.addEventListener('click', function(e){
        e.preventDefault();
        
        if(currentIndex < slideCount - 1){
            goToSlide(currentIndex + 1)
        } else {
            goToSlide(0)
        }
    });
    
    // 마우스 휠로 움직이기
    function mouseWheelPageUpDown(){
        container.addEventListener('mousewheel', function(delta){
            if(delta.wheelDelta >= 0){
                if(currentIndex > 0){
                    goToSlide(currentIndex-1);
                } else {
                    goToSlide(slideCount-1);
                }
            } else {
                if(currentIndex < slideCount - 1){
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(0);
                } 
            }
        });
    }
    
    mouseWheelPageUpDown();
    
    
    // 첫번째 슬라이드 먼저 보이도록 하기
    goToSlide(0);


/* OTHER */