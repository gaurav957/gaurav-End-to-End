
Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg remove-header">\
				<div class="nav-logo">\
					<div><img v-bind:src="headerData.leftTopIntroImg1"/></div>\
					<div><img v-bind:src="headerData.leftTopIntroImg2"/></div>\
				</div>\
			</header>'
});

Vue.component('drop-down-panel', {
	props:['dropDownDetails','user'],
	template:'<div class="container-inner">\
				<!--survey content begining-->\
				<div class="inner-content">\
					<div class="inner-resize-container">\
						<div class="dropdown-categories">\
							<div class="welcome-txt"><h1 class="welcome-txtInner" v-html="user.infoTxt"></h1>\
							</div>\
						</div>\
						<div class="dropdown-categories">\
							<div class="select-categories-inner marTop fromvue" v-for="dropDown in dropDownDetails">\
								<select class="slct" @change="submitClick($event.target.value),enableDisableNextBtn()">\
									<option v-if="dropDown.defaultOption!=null" value=""	disabled selected>{{dropDown.defaultOption}}</option>\
									<option v-for="optionName in dropDown.optionAndId" :value="optionName.targetId" >{{optionName.option}}</option>\
								</select>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>',
	methods:{
		//Get target id and call event click
		submitClick : function(slctTargetId){
			var slctTargetId = slctTargetId;
			//console.log(slctTargetId);
			$("#"+slctTargetId).click();
		},
		//Activate Next Btn on selecting all dropdowns
		enableDisableNextBtn: function()
		{	
			//get length of all dropdowns
			var dropdownLength = $(".slct option:selected").length;
			//console.log(dropdownLength);
			//counter to get all selected options Length
			var counter = 0;
			$(".slct option:selected:enabled").each(function()
				{
					counter++;
					//console.log("counter::"+counter);
					//console.log($(this).text());
					if(counter == dropdownLength)
					{
						//Add below class once all dropdowns are selected
						$(".start-btn").addClass("next-btn-active");
					}
				});
		}
	}
});

Vue.component('next-btn-panel',{
	props:['nextBtnDetails'],
	template:'<div class="btn-footer">\
				<div class="start-btn" v-on:click="nextPage(nextBtnDetails.Target,$event)"><span v-html="nextBtnDetails.startBtnTxt"></span> </div>\
			</div>',
	methods:{
		nextPage : function(forwardBtnId,event){
						//console.log("forward called");
						//console.log("eventInputBoxTarget"+);
						if(event)
						{
							//Enable next button when it is active
							if($(".start-btn").hasClass("next-btn-active")){
								var nextBtnId = forwardBtnId;
								//console.log(nextBtnId);
								$("#"+nextBtnId).click();
							}
						}						

				}
		}	
	
});

var categorizationObj = new Vue({
	el:'#categorize-input',
	data:{
		alldata:{},
		dropdowndata:[],
		nextbtndata:{}
	},
	created: function() {
		if($('#jsonData').length){
			this.alldata = JSON.parse($('#jsonData').text().trim());
			this.dropdowndata = this.alldata.dropDownDetails;
			this.nextbtndata = this.alldata.nextBtnData;
			//console.log("dropdowndata::"+this.alldata.nextBtnData.startBtnTxt);
			
		}
	
	}
});