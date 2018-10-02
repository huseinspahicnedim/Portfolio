
$('a[href*="#"]')
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });


  whatAnimation("fadescroll");
  whatAnimation("moveleft");

   $(window).scroll(function(){
   	  whatAnimation("fadescroll");
   	  whatAnimation("moveleft");
   });

   function whatAnimation(name) {
   		$("." + name).each(function(){
   		  switch (name) {
   		  	case "fadescroll": AddClass(this, "fade");
   		  	break;
   		  	case "moveleft": AddClass(this, "left");
   		  	break;
   		  
   		  }	
   		});
   };

   function AddClass (object, name) {
   	if(IsVisible(object)) {
   		$(object).addClass(name);
   	} else {
   	$(object).removeClass(name);
   	}
   }

   function IsVisible(object) {
   	var viewport = $(window).scrollTop() + $(window).height();
   	var rand = $(object).offset();
   	rand.bottom = rand.top + $(object).outerHeight();
   	return(!(viewport < (rand.top + 500) || $(window).scrollTop() > (rand.bottom - 250)));
   }