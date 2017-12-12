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
				$(".container-inner").show();
			}
		}
});

Vue.component('header-panel', {
	props:['headerData'],
	template:'<header class="header-nav header-nav-bg">\
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
				<div class="welcome-info">\
					<div class="home-screeIcon">\
						<figure><img v-bind:src="innerContent.CentreIntroImg"/></figure>\
					</div>\
					<div class="welcome-txt mar30">\
						<h1 v-html="innerContent.welcometxt"></h1>\
					</div>\
					<div class="term-condition">\
						<span class="term-condition-info">{{innerContent.termsConditionsData.preLinkTxt}} <a href="#" class="termcondition-nav">{{innerContent.termsConditionsData.linkTxt}}</a> {{innerContent.termsConditionsData.postLinkTxt}}\
						</span>\
					</div>\
				</div>\
			</div>\
			<div class="btn-footer">\
				<div class="start-btn"><span v-html="innerContent.startBtnData.startBtnTxt" ></span> </div>\
			</div>\
		</div>\
</div>'	
});

var vueObj = new Vue({
	el:'#container-wrapper',
	data:{
		alldata:{}
	},
	created: function() {
		if($('#welcome-data').length){
			this.alldata = JSON.parse($('#welcome-data').text().trim());
			console.log("alldata::"+this.alldata.termsConditionsData.preLinkTxt);
		}
	
	}
});