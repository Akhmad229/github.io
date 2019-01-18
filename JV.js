$(document).ready(function() {
	$('#na-bar').addClass('nav-bar');
	$('.lightbox-img').addClass('thumbnail');
});
$(document).ready(function() {
	$('#nav a').hover(function() {
	$(this).toggleClass('hover');
	});
});

$(function() {
    $galleryItems = [
        {"url": "AhmadMaatouk.jpg"},
        {"url": "LoryRomanelli2.jpg"},
        {"url": "eva.jpeg"},
        {"url": "AhmadMaatouk1.jpg"},
        {"url": "eva2.jpg"},
        {"url": "LoryRomanelli.jpg"},
        {"url": "AhmadMaatouk2.jpg"},
        {"url": "LoryRomanelli1.jpg"},
        {"url": "YogiSeitia1s.jpg"}
    ];
    $gallery = $(".lightbox");
    $.each($galleryItems, function(id) {
        $gallery.append('<img class="thumbnail lightbox-img" src="' + $galleryItems[id].url + '">');
    });
    
    $(".lightbox-img").click(function() {
        console.log("here  ");
        showSplashContainer($(this).index()); 
    });
    
    $(".splash-container").click(function() {
        if($("body").hasClass("splash-opened")) {
            closeSplashContainer();
        } 
    });
    
    $(document).keyup(function(e) {
      if (e.keyCode === 27 && $("body").hasClass("splash-opened")) {
        closeSplashContainer();
      }
    });

    function showSplashContainer(id) {
        $("body").addClass("splash-opened");
        $(".splash-container").css("display", "block");
        $(".splash-img").attr("src", $galleryItems[id].url);
    }
    
    function closeSplashContainer() {
        $("body").removeClass("splash-opened");
        $(".splash-container").css("display", "none");  
    }
});   
    
    



//$.getJSON('galleryItems.json', function(data) {
//		"use strict";
//        var content = data.items;
//        $('.photo').click(function () {
//            var c = content.find(o => o.id == this.id);
//            if (c) {
//                $('.output-box').html("<img src='" + c.url + "'>");
//            }
//        });     
//});

