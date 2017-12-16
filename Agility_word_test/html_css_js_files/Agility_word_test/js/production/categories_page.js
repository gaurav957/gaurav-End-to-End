
Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg remove-header">\
				<div class="nav-logo">\
					<div><img v-bind:src="headerData.leftTopIntroImg1"  alt="Agility Word Test" title="Agility Word Test"/></div>\
					<div><img v-bind:src="headerData.leftTopIntroImg2"  alt="Agility Word Test" title="Agility Word Test"/></div>\
				</div>\
			</header>'
});

Vue.component('drop-down-panel', {
	props:['dropDownDetails'],
	//template:'<div><div v-for="dropDown in dropDownDetails">{{dropDown.defaultOption}}</div></div>'
	template:'  <div class="select-categories-inner marTop">\
                    <select name="slct" id="slct" v-for="dropDown in dropDownDetails">\
						<option>{{dropDown.defaultOption}}</option>\
                        <option value="1">Pure CSS</option>\
                        <option value="2">No JS</option>\
                        <option value="3">Nice!</option>\
                    </select>\
                </div>'
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

var categorizationObj = new Vue({
	el:'#categorize-input',
	data:{
		alldata:{},
		dropdowndata:[]
	},
	created: function() {
		if($('#jsonData').length){
			this.alldata = JSON.parse($('#jsonData').text().trim());
			this.dropdowndata = this.alldata.dropDownDetails;
			console.log("dropdowndata::"+this.dropdowndata[0].optionAndId[0].option1);
			
		}
	
	}
});