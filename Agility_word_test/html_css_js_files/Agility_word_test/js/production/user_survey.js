
Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg remove-header">\
				<div class="nav-logo">\
					<div><img :src="headerData.leftTopIntroImg1"  alt="Agility Word Test" title="Agility Word Test"/></div>\
					<div><img :src="headerData.leftTopIntroImg2"  alt="Agility Word Test" title="Agility Word Test"/></div>\
				</div>\
			</header>'
});

Vue.component('user-practice-panel',{
	props:['surveyData'],
	template:'<div class="container-wrapper">\
				<!--header begining-->\<!--header End-->\
				<div class="container-inner">\
			 <!--survey content begining-->\
			 <div class="inner-content">\
				<div class="inner-resize-container">\
				   <!-- image-shocase begining-->\
					<div class="image-shocase  clearfix">\
							<div class="left-imageInner">\
								<div class="layer-image layer-image-slide">\
								   <div class="layer-image-inner">\
									   <div class="images-selection"><img :src="surveyData.surveyDataImg"/></div>\
								   </div>\
								 </div>\
							</div>\
							<div class="right-imageresponse">\
                               <div class="response-block-txt">\
									<div class="imageresponse-txt-inner"><h2 class="response-title" v-html="surveyData.surveyDataTxt"></h2></div>\
									<div class="imageresponse-btn">\
								      <div class="switch-btn-custom">\
										   <div id="" class="nob-btn"></div>\
											 <input id="on" name="state-id" type="radio" checked="">\
											 <label for="on" onclick="" class="left-box switch-btn-bg switching" data-info="1"  :data-target="surveyData.choiceNoTxtTarget" v-html="surveyData.choiceNoTxt"></label>\
											 <input id="off" name="state-id" type="radio">\
											<label for="off" onclick="" class="right-box switching" :data-target="surveyData.choiceYesTxtTarget" data-info="2" v-html="surveyData.choiceYesTxt"></label>\
											</div>\
											</div>\
								</div>\
							</div>\
						<!--</div>-->\
					</div>\
					<!-- image-shocase End-->\
				</div>\
				<!--<div class="btn-footer">\
					 <div class="start-btn"><span>LETS"S START</span> </div>\
				</div>-->\
			</div>\
			<!--survey content End-->\
		</div>\
	</div>'	,
		methods:{
	
	nextPage : function(forwardBtnId){
				var nextBtnId = forwardBtnId;
				console.log(nextBtnId);
        		$("#"+nextBtnId).click();
			}
		},

		mounted : function(){
				(function(){
					var arrleft = ["-35%","35%"];
					var punchId = "";
				
		   $(".switching").on("click", function(){
			   var currentId = $(this).attr("data-info");
			   punchId = $(this).attr("data-target");
			   //console.log($(this).attr("data-target"));
			   $("#"+punchId).click();
			   $(".nob-btn").animate({"margin-left":arrleft[currentId-1]});
		   });
					
		  // Bind the swipeHandler callback function to the swipe event on div.box
		  $( ".nob-btn" ).on( "swiperight", swipeHandlerRight );
			$( ".nob-btn" ).on( "swipeleft", swipeHandlerLeft );

		  // Callback function references the event target and adds the 'swipe' class to it
		  function swipeHandlerRight( event ){
			  $( this ).addClass( "right" ).animate({"margin-left":arrleft[1]});
			  //console.log($(".right-box").attr("data-target"));
			  punchId = $(".right-box").attr("data-target");
			  $("#"+punchId).click();
			  
		  }
			function swipeHandlerLeft( event ){
				$( this ).addClass( "left" ).animate({"margin-left":arrleft[0]});
				//console.log($(".left-box").attr("data-target"));
				punchId = $(".left-box").attr("data-target");
				$("#"+punchId).click();
		  }	
		})();
}
});


var vueObj = new Vue({
	el:'#survey',
	data:{
		alldata:{},
		surveydata:{}
	},
	created: function() {
		if($('#jsonData').length){
			this.alldata = JSON.parse($('#jsonData').text().trim());
			//console.log(this.alldata);
			this.surveydata = this.alldata.surveyData;
		}
	
	}
});