Vue.component('splash-panel', {
	props:['splashPanelData'],
	template:'<div  class="intro-page" v-on:click="showInrContainer">\
					<div class="logo-home">\
						<div class="logo-home-inner"><img v-bind:src="splashPanelData.splashLogo1" alt="" title=""/></div>\
						<div class="logo-home-inner"><img v-bind:src="splashPanelData.splashLogo2" alt="" title=""/></div>\
					</div>\
			</div>',
	methods:{
	
	showInrContainer : function(){
        		$(".intro-page").hide();
				$(".welcome-info").show();
			}
		}
});

Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg remove-header">\
				<div class="nav-logo">\
					<div><img v-bind:src="headerData.leftTopIntroImg1"  alt="Agility Word Test" title="Agility Word Test"/></div>\
					<div><img v-bind:src="headerData.leftTopIntroImg2"  alt="Agility Word Test" title="Agility Word Test"/></div>\
				</div>\
			</header>'
});

Vue.component('inner-content-panel',{
	props:['innerContent'],
	template:'<div class="container-inner" id="container-inner">\
		<div class="inner-content">\
			<div class="inner-resize-container">\
				<div class="rowgutter">\
				<div class="welcome-info display-none">\
					<div class="home-screeIcon">\
						<figure><img v-bind:src="innerContent.CentreIntroImg"/></figure>\
					</div>\
					<div class="welcome-txt mar30">\
						<h1 class="welcome-txtInner" v-html="innerContent.welcometxt"></h1>\
					</div>\
					<div class="text-info-label">\
						<span class="term-condition-info text-info-label-inner">{{innerContent.termsConditionsData.preLinkTxt}} <a href="#" class="termcondition-nav">{{innerContent.termsConditionsData.linkTxt}}</a> {{innerContent.termsConditionsData.postLinkTxt}}\
						</span>\
					</div>\
				</div>\
				</div>\
			</div>\
			<div class="btn-footer">\
				<div class="start-btn" v-on:click="nextPage(innerContent.startBtnData.Target)"><span v-html="innerContent.startBtnData.startBtnTxt" ></span> </div>\
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
	el:'#container-wrapper',
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