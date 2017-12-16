
Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg remove-header">\
				<div class="nav-logo">\
					<div><img v-bind:src="headerData.leftTopIntroImg1"  alt="Agility Word Test" title="Agility Word Test"/></div>\
					<div><img v-bind:src="headerData.leftTopIntroImg2"  alt="Agility Word Test" title="Agility Word Test"/></div>\
				</div>\
			</header>'
});

Vue.component('event-name-panel',{
	props:['eventInnerContent'],
	  data: function () {
  return {
    inputBoxTxt: ''
  }
},
	template:'<div class="container-inner">\
			 <!--survey content begining-->\
			<div class="inner-content">\
				<div class="inner-resize-container">\
					<div class="welcome-info">\
						<div class="welcome-txt  marTop104"><h1 class="welcome-txtInner" v-html="eventInnerContent.eventQuery.eventQueryText"></h1></div>\
                        <div class="event-input">\
                            <input type="text" class="event-input-user" v-bind:placeholder="eventInnerContent.eventQuery.eventInputPlaceholder" v-model="inputBoxTxt">\
                        </div>\
						<div class="term-condition text-info-label">\
							<span class="term-condition-info text-info-label-inner" v-html="eventInnerContent.eventQuery.eventBelowInsText"></span>\
						</div>\
					</div>\
				</div>\
				<div class="btn-footer">\
					 <div class="start-btn" v-on:click="setInputValue(eventInnerContent.eventQuery.eventInputBoxTarget),nextPage(eventInnerContent.eventQuery.eventTargetElement)"><span v-html="eventInnerContent.eventQuery.eventBtnText">NEXT</span> </div>\
				</div>\
			</div>\
			<!--survey content End-->\
		</div>',
	methods:{
		nextPage : function(forwardBtnId){
						//console.log("forward called");
						//console.log("eventInputBoxTarget"+);
						var nextBtnId = forwardBtnId;
						//console.log(nextBtnId);
        				$("#"+nextBtnId).click();
				},
		setInputValue : function(TxtBoxInputData){
						//console.log("Text Input called");
						//console.log(this.inputBoxTxt);
						var inputTxt = TxtBoxInputData;
						//console.log(inputTxt);
						//console.log(this.inputBoxTxt);
						$("#"+inputTxt).val(this.inputBoxTxt);
						//console.log($("#"+inputTxt).val());
	
				}
		}	
	
});

var eventInputvueObj = new Vue({
	el:'#event-input',
	data:{
		alldata:{}
	},
	created: function() {
		if($('#jsonData').length){
			this.alldata = JSON.parse($('#jsonData').text().trim());
			//console.log("alldata::"+this.alldata.termsConditionsData.preLinkTxt);
		}
	
	}
});