Vue.component('demo-start-panel', {
	props:['demoStartData'],
	template:'<div class="popup-overlay practice-txt-popup practice-txt-instruc-hidden" @click="hideDemoStart">\
			<div class="start-info-popup practice-txt-instruc-hidden" >\
               <div class="clearfix">\
                <div class="start-info-icon"><img :src="demoStartData.demoImg" alt="" title=""/></div>\
                <div class="start-info-resize">\
                    <div class="lets-practice-txt">\
                    <div class="lets-practice-instruc" v-html="demoStartData.practiceInsOne"></div>\
                    <div class="lets-practice-instruc" v-html="demoStartData.practiceInsTwo"></div>\
                    <div class="lets-practice-label" v-html="demoStartData.practiceLabel"></div>\
                    </div>\
                </div>\
                </div>\
            </div>\
		</div>',
	methods:{
	
	hideDemoStart : function(){
						$(".practice-txt-instruc-hidden").hide();
			}
	}
		
});

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
	props:['userPractice'],
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
									   <div class="images-selection"><img :src="userPractice.userPracticeImg"/></div>\
								   </div>\
								 </div>\
							</div>\
							<div class="right-imageresponse">\
                               <div class="response-block-txt">\
									<div class="imageresponse-txt-inner"><h2 class="response-title" v-html="userPractice.userPracticeTxt"></h2></div>\
									<div class="imageresponse-btn">\
								      <div class="switch-btn-custom">\
										   <div id="" class="nob-btn"></div>\
											<div class="layer-disable"></div>\
											 <input id="on" name="state-id" type="radio" checked="">\
											 <label for="on" onclick="" class="left-box switch-btn-bg switching" data-info="1"  :data-target="userPractice.choiceNoTxtTarget" v-html="userPractice.choiceNoTxt"></label>\
											 <input id="off" name="state-id" type="radio">\
											<label for="off" onclick="" class="right-box switching" :data-target="userPractice.choiceYesTxtTarget" data-info="2" v-html="userPractice.choiceYesTxt"></label>\
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
				
		   $(".switching").on("click", function(){
			   var currentId = $(this).attr("data-info");
			   var punchId = $(this).attr("data-target");
					$("#"+punchId).click();
			 $(".nob-btn").animate({"margin-left":arrleft[currentId-1]});
			 $(".demo-completed").show();
			 $(".demo-completed").children().show();

		   });
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
		})();
}
});

Vue.component('demo-complete-panel', {
	props:['demoCompleteData'],
	template:'<div class="popup-overlay lets-start-popup practice-txt-instruc-hidden demo-completed">\
			<div class="lets-started-info practice-txt-instruc-hidden" >\
                <div class="lets-started-info-icon"><img :src="demoCompleteData.practiceCompleteImg" alt="" title=""/></div>\
                <div class="started-info-label">\
                    <h1 class="started-info-txt" v-html="demoCompleteData.completeTxt"> </h1>\
                </div>\
                <div class="lets-start-btn">\
                  <div class="start-btn" @click="nextPage(demoCompleteData.target)"><span v-html="demoCompleteData.btnTxt"></span></div>\
                </div>\
            </div>\
			</div>',
	methods: {
	
		nextPage : function(forwardBtnId){
				var nextBtnId = forwardBtnId;
				$("#"+nextBtnId).click();
}
	
},
			mounted : function(){
				$(".demo-completed").hide();
			}
});


var vueObj = new Vue({
	el:'#survey',
	data:{
		alldata:{},
		demostartdata:{},
		userpracticedata:{},
		democompletedata:{}
	},
	created: function() {
		if($('#jsonData').length){
			this.alldata = JSON.parse($('#jsonData').text().trim());
			console.log(this.alldata);
			/*this.alldata = this.alldata.html(this.alldata.replace(/\n/g, '<br/>'));*/
			this.demostartdata = this.alldata.demoStartData;
			this.userpracticedata = this.alldata.demoUserPractice;
			//console.log(this.userpracticedata.practiceTxt);
			this.democompletedata = this.alldata.demoCompletePopupData;
			//console.log("practisedata::"+this.democompletepopupdata.practiceCompleteImg);			
		}
	
	}
});