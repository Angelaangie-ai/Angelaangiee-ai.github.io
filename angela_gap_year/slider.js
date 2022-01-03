


$(document).ready(function(){
	var slide1 = $("<div class=\"slide slide-1 hidden\"></div>").attr("id", "1");
	var slide2 = $("<div class=\"slide slide-2 hidden\"></div>").attr("id", "2");
    var slide3 = $("<div class=\"slide slide-3 hidden\"></div>").attr("id", "3");
    var slide4 = $("<div class=\"slide slide-4 hidden\"></div>").attr("id", "4");
    var slide5 = $("<div class=\"slide slide-5 hidden\"></div>").attr("id", "5");
    var slide6 = $("<div class=\"slide slide-6 hidden\"></div>").attr("id", "6");
    var slide7 = $("<div class=\"slide slide-7 hidden\"></div>").attr("id", "7");
    var slide8 = $("<div class=\"slide slide-8 hidden\"></div>").attr("id", "8");
    var slide9 = $("<div class=\"slide slide-9 hidden\"></div>").attr("id", "9");
    var slide10 = $("<div class=\"slide slide-10 hidden\"></div>").attr("id", "10");
    var slide11 = $("<div class=\"slide slide-11 hidden\"></div>").attr("id", "11");
    var slide12 = $("<div class=\"slide slide-12 hidden\"></div>").attr("id", "12");
    var slide13 = $("<div class=\"slide slide-13 hidden\"></div>").attr("id", "13");
    var slide14 = $("<div class=\"slide slide-14 hidden\"></div>").attr("id", "14");
    var slide15 = $("<div class=\"slide slide-15 hidden\"></div>").attr("id", "15");
    var slide16 = $("<div class=\"slide slide-16 hidden\"></div>").attr("id", "16");

    var dotSlideMap = {
        "dot1": "1",
        "dot2": "2",
        "dot3": "3",
        "dot4": "4",
        "dot5": "5",
        "dot6": "6",
        "dot7": "7",
        "dot8": "8",
        "dot8": "8",
        "dot9": "9",
        "dot10": "10",
        "dot11": "11",
        "dot12": "12",
        "dot13": "13",
        "dot14": "14",
        "dot15": "15",
        "dot16": "16",
    }  
    var currentSlide = slide1;
    var currentSlideId = Number(currentSlide.attr("id"));
    var currentDot = $(".dot"+currentSlideId);
    var timer;

    $(".slider").append(slide1, slide2, slide3, slide4,slide5,slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13,slide14,slide15,slide16);
    currentSlide.show();
    currentDot.addClass("dot-full");

    var findPrevious = function(){
        if(currentSlideId == 1){
        	currentSlideId = 16;
        }
        else {currentSlideId--;}
    };

    var findNext = function(){
        if(currentSlideId == 16){
        	currentSlideId = 1;
        }
        else{ currentSlideId++;}
    };

    var hideSlide = function(){
        $("#"+currentSlideId).hide();
        $(".dot"+currentSlideId).removeClass("dot-full");
    };

    var showSlide = function(){
        $("#"+currentSlideId).fadeIn("slow");  
        $(".dot"+currentSlideId).addClass("dot-full");
    };

    function slideLoop(){
        hideSlide();
        findNext();
        showSlide();
        timer = setTimeout(slideLoop, 3000);       
    };
	
    slideLoop();
    $(".previous").click(function(){
        clearTimeout(timer);
        hideSlide();
        findPrevious();
        showSlide();
        timer = setTimeout(slideLoop, 3000);
    });

    $(".next").click(function(){
        clearTimeout(timer);
        hideSlide();
        findNext();
        showSlide();
        timer = setTimeout(slideLoop, 3000);
    });

    $(".nav-dots").click(function(event){
        clearTimeout(timer);
        var dot = $(event.target).attr("class");
        var slideId = dotSlideMap[dot];
        if (slideId && slideId != currentSlideId){
            hideSlide();
            currentSlideId = slideId;
            showSlide();
        };
        timer = setTimeout(slideLoop, 3000);
    });    
})
