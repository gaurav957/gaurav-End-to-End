
Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg remove-header">\
				<div class="nav-logo">\
					<div><img v-bind:src="headerData.leftTopImg1"  alt="" title=""/></div>\
					<div><img v-bind:src="headerData.leftTopImg2"  alt="" title=""/></div>\
				</div>\
			</header>'
});

Vue.component('completion-panel',{
	props:['innerContent'],
	template:'<div class="container-inner" id="container-inner">\
		<div class="inner-content">\
			<div class="inner-resize-container">\
				<div class="rowgutter">\
				<div class="welcome-info">\
					<div class="home-screeIcon">\
						<figure><img v-bind:src="innerContent.completionImg"/></figure>\
					</div>\
					<div class="welcome-txt mar30">\
						<h1 class="welcome-txtInner" v-html="innerContent.completiontxt"></h1>\
					</div>\
				</div>\
				</div>\
			</div>\
			<div class="btn-footer">\
				<div class="start-btn" v-on:click="nextPage(innerContent.completionBtnData.Target)"><span v-html="innerContent.completionBtnData.completionBtnTxt" ></span> </div>\
			</div>\
		</div>\
</div>'	,
		methods:{
	
	nextPage : function(forwardBtnId){
				var nextBtnId = forwardBtnId;
				console.log(nextBtnId);
        		$("#"+nextBtnId).click();
			}
		}
});

var vueObj = new Vue({
	el:'#completion-data',
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