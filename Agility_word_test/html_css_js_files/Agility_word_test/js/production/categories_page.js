
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
	props:['dropDownDetails','user'],
	template:'<div class="container-inner"><!--survey content begining--><div class="inner-content"><div class="inner-resize-container"><div class="dropdown-categories">\
	<div class="welcome-txt "><h1 class="welcome-txtInner" v-html="user.infoTxt"></h1></div>\
	</div>\
					<div class="dropdown-categories">\
					<div class="select-categories-inner marTop fromvue" v-for="dropDown in dropDownDetails">\
						<select @change="dosomething($event.target.value)">\
							<option v-if="dropDown.defaultOption!=null" value=""	disabled selected>{{dropDown.defaultOption}}</option>\
							<option v-for="optiona in dropDown.optionAndId" :value="optiona.targetId" >{{optiona.option}}</option>\
						</select>\
					</div>\
					</div></div></div></div>',
	methods:{
		dosomething : function(slctTargetId){
			var slctTargetId = slctTargetId;
			console.log(slctTargetId);
			$("#"+slctTargetId).click();
		}
	}
});

Vue.component('next-btn-panel',{
	props:['user'],
	  data: function () {
  return {
    inputBoxTxt: ''
  }
},
	template:'<div class="btn-footer">\
				<div class="start-btn"><span v-html="user.nextBtnData.startBtnTxt"></span> </div>\
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
			//console.log("dropdowndata::"+this.dropdowndata[0].optionAndId[0].option);
			
		}
	
	}
});