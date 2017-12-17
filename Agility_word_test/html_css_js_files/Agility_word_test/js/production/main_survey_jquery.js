
		$(function(){
			var arrleft = ["-35%","35%"];
				
		   $(".switching").on("click", function(){
			   var currentId = $(this).attr("data-info");
			   var punchId = $(this).attr("data-target");
					$("#"+punchId).click();
			 $(".nob-btn").animate({"margin-left":arrleft[currentId-1]});

		   })
		  // Bind the swipeHandler callback function to the swipe event on div.box
		  $( ".nob-btn" ).on( "swiperight", swipeHandlerRight );
			$( ".nob-btn" ).on( "swipeleft", swipeHandlerLeft );

		  // Callback function references the event target and adds the 'swipe' class to it
		  function swipeHandlerRight( event ){
			$( this ).addClass( "swipeRight" ).animate({"margin-left":arrleft[1]});
		  }
			function swipeHandlerLeft( event ){
			$( this ).addClass( "swipeLeft" ).animate({"margin-left":arrleft[0]});;
		  }
		   $(".practice-txt-instruc-hidden").click(function(){
			    $(".practice-txt-instruc-hidden").hide();
			   });
		 
		});