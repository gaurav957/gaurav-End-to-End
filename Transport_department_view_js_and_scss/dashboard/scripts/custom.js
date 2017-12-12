Vue.component('header_panel', {
    props: ['user'],
    template: '<div> \
		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation"> \
		<div class="container-fluid nav-container"> \
			<div class="navbar-header"> \
				<div class="dashboardBlock"> \
				<div class="row"> \
					<div class="col-xs-12"> \
						<div class="breadcrumb-cst clearfix"> \
								<span class="dashboard-label"> \
									<i class="icon dashboard"></i> Dashboard \
								</span> \
						</div> \
						</div> \
					</div> \
				</div> \
                <div  class="navbar-brand"> \
                   <a href="#" class="logo"> \
						<img src="https://e2eresearch.com/swteam/html5Tools/texas-department-transportation/img/logo-survey.png"  v-if="user.type===\'dashboard\'"> \
						<img src="https://e2eresearch.com/swteam/html5Tools/texas-department-transportation/img/logo-survey.png"  v-if="user.type===\'survey\'"> \
                </div> \
                <div class="user-detail"> \
					<div class="dropdown"> \
						<a href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
							<img :src="user.userdetails.profile_pic" alt="" class="profile-pic img-circle" v-if="user.type===\'dashboard\'"> \
							<span v-html="user.userdetails.name" v-if="user.type===\'dashboard\'"></span> \
							<span :class="{\'caret\':user.type==\'dashboard\', \'icon user-icon\':user.type===\'survey\'}"></span> \
						</a> \
						<ul class="dropdown-menu" aria-labelledby="dLabel"> \
							<li class="divider d-head address-line" v-if="user.type===\'survey\'">{{user.userdetails.name}}</li> \
							<li v-if="user.userdetails.address" v-html="user.userdetails.address" class="address-line">Washington, DC 20502, USA.</li> \
							<li v-if="user.userdetails.travel_date">Travel date - <span v-html="user.userdetails.travel_date">Mon, July 2017</span>.</li> \
							<li v-if="user.userdetails.sample">Sample - <span v-html="user.userdetails.sample"></span></li> \
						</ul> \
					</div> \
                </div> \
			</div> \
			<div class="dashboardHeadingdashboardHeading"> \
				<h1 class="page-title text-center" v-html="user.heading"></h1> \
			</div><!--/.nav-collapse --> \
		</div> \
	</nav> \
	</div>'
});


Vue.component('sidebar_panel', {
	 props: ['members','user'],
    template:'<div id="newStyleBlock"> \
			<div class="page-content"> \
			<div class="container-fluid"> \
			<div class="row removemr"> \
			<div class="col-xs-12 contentNew"> \
			<div class="white-resize"> \
			<div class="clearfix survey-contentD" style="min-height: 400px;"> \
				<div class="panel panel-default shadow"> \
					<div class="panel-heading"> \
							Details of household member \
					</div> \
						<div class="panel-body dashbord-user-details" v-for="(index,member) in members"> \
							<ul class="list-inline user-details"> \
								<li v-if="member.name"><h2 class="house-member">{{member.name}}</h2></li> \
								<li v-if="member.age">Age : <span v-html="member.age"></span></li> \
								<li v-if="member.gender">Gender : <span v-html="member.gender"></span></li> \
								<li v-if="member.status">Status : <span v-html="member.status"></span></li> \
								<div class="btn_block" v-if="member.id"> \
								<a href="#" v-on:click.prevent="punchuserids($event)" v-bind:ref="member.id" :data-pageid="member.id" :data-pagestatus="member.status" class="start-btn pull-right"> \
								<span  :class="{\'btn btn-block text-uppercase\':true,\'btn-success\':member.status==\'In progress...\',\'btn-default\':member.status==\'Completed!\',\'btn-warning\':member.status==\'Not Started\'}"><span v-if="member.status==\'Completed!\'">Completed</span><span v-if="member.status==\'In progress...\'">START</span><span v-if="member.status==\'Not Started\'">START</span></span></a> \
								</div> \
							</ul> \
						</div> \
					</div> \
			</div> \
			</div> \
			</div> \
			</div> \
			</div> \
			</div> \
    </div>',
	methods: {
		
	  punchuserids: function(event){
			element = event.currentTarget
			dataval = element.getAttribute('data-pageid');
			datastutasval = element.getAttribute('data-pagestatus');
			//console.log(datastutasval);
			if(datastutasval=="Completed!"){
				console.log("true")
			}
			else{
			//console.log("not completed")
			$('#redidirectval').val(dataval);
			$("#forwardbutton").trigger('click');
			}
	   },
        getmember: function (memberid) {            
			this.members.map(function(v){
				if(v.id==memberid){
					vueObj.memberdetail = v;
					console.log(v)
				}
			})
        },
		setsidebarheight: function(){
			if(this.user.type==='survey'){				
				var sidebarheight = $(window).height()-190;
				$('#sidebar-wrapper').css({'min-height':511, 'height':sidebarheight});	
				$(window).resize(function(){
					var sidebarheight = $(window).height()-190;
					$('#sidebar-wrapper').css({'min-height':511, 'height':sidebarheight});
				})
			}
		},
		activestyle: function(){
			
			$('.submenu .current').parent().show().parent().addClass('active')
		}
    },
	ready: function() {
		this.activestyle();
		this.setsidebarheight()
	},

});



Vue.component('content_panel', {
	props:['members','user'],
	template:'<div id="page-content-wrapper"> \
        <div class="page-content"> \
            <div class="container-fluid"> \
				<div class="row"> \
                    <div class="col-md-12 mr-bot-15"> \
                       	<div class="white-resize"> \
                       		<div class="trip-heading"> \
								<span v-if="members.trips!=\'\'">Details of trips</span> \
								<span v-if="members.trips==\'\'">No Trip</span>  \
							</div> \
							<div v-cl :class="{\'clearfix cst-dt\':true,\'completed\':trip.status==\'Completed\'}" v-for="(index,trip) in members.trips">\
								<div class="sl"><span v-if="index <= 9">0</span>{{index+1}}</div> \
								<div class="clearfix"><h2 v-html="trip.title"></h2></div> \
								<div class="row gutter10 star-end-time"> \
									<div class="col-125"> \
										<div class="row gutter10"> \
											<div class="col-md-6 col-xs-12"> \
												<div class="btn-group btn-group-justified"> \
													<span class="btn btn-default text-left">Start date and Time of trip </span> \
													<span class="btn btn-primary" v-html="trip.trip_start_date"></span> \
												</div> \
											</div> \
											<div class="col-md-6 col-xs-12"> \
												<div class="btn-group btn-group-justified"> \
													<span class="btn btn-default text-left">End date and time of trip </span> \
													<span class="btn btn-primary" v-html="trip.trip_end_date"></span> \
												</div> \
											</div> \
										</div> \
									</div> \
									<div class="btn-action"> \
										<span  :class="{\'btn btn-block text-uppercase\':true,\'btn-success\':trip.status==\'In-progress\',\'btn-default\':trip.status==\'Completed\',\'btn-warning\':trip.status==\'Not Started\'}"><span v-if="trip.status==\'Completed\'">Completed</span><span v-if="trip.status==\'In-progress\'">In-progress</span><span v-if="trip.status==\'Not Started\'">Not Started</span></span> \
									</div> \
								</div> \
								<div class="row gutter10 bottom-lbl-txt"> \
									<div class="col-sm-4 text-left"> \
										<i class="icon info"></i> \
										<em>Purpose of trip :  {{trip.trippurpose}}</em> \
									</div> \
									<div class="col-sm-4 text-center"> \
										<i class="icon car"></i> \
										<em>Travel by :  {{trip.travelby}}</em>  \
									</div> \
									<div class="col-sm-4 text-right"> \
										<i class="icon timer"></i> \
										<em>Travel time:  {{trip.traveltime}}</em> \
									</div> \
								</div> \
							</div>\
                       	</div> \
                    </div> \
                </div> \
            </div> \
		</div> \
		<input type="hidden" id="redidirectval" name="redidirectval"> \
	</div>',
	methods:{
		punchuserid: function(){
			var dataval = $('.start-btn').attr('data-pageid');
			$('#redidirectval').val(dataval);
			$("#forwardbutton").trigger('click');
		},
	}
});
Vue.component('footer_panel', {
	template:'<footer class="footer"> \
      <div class="container-fluid"> \
        <div class="resize"><p class="text-center">For assistance or questions, email us at <a href="mailto:RGVTravelStudy@abtassoc.com">RGVTravelStudy@abtassoc.com</a> or call us toll-free at <a href="tel:1-866-300-9759">1-866-300-9759</a>.</p></div> \
      </div> \
    </footer>'
});
Vue.component('survey_panel', {
	props:['questions'],
	template:'<div class="user-meta clearfix">\
			<button v-if="questions.userdetails.userdetailStatus !=\'99\'" type="button" class="btn btn-link btn-block btnusermeta text-left">{{questions.userdetails.name}} <span class="glyphicon glyphicon-chevron-down pull-right"></span></button> \
			<div class="clearfix" v-if="questions.userdetails.userdetailStatus !=\'99\'">\
			<div class="pull-right">\
				<ul class="list-inline trip-duration text-right">\
				<li v-if="questions.userdetails.tripFromaddress || questions.userdetails.tripFromdate"><span>From</span> <label v-html="questions.userdetails.tripFromaddress"></label><br>\
					<span v-if="questions.userdetails.tripFromdate" class="icon callendar"></span><label v-html="questions.userdetails.tripFromdate"></label></li>\
				<li v-if="questions.userdetails.tripToaddress || questions.userdetails.tripTodate"><span>To</span> <label v-html="questions.userdetails.tripToaddress"></label><br>\
					<span v-if="questions.userdetails.tripTodate" class="icon callendar"></span><label v-html="questions.userdetails.tripTodate"></label></li>\
				</ul>\
			</div>\
			<div class="usermetaleft">\
                  <ul class="list-inline">\
                    <li v-html="questions.userdetails.name"></li>\
                    <li v-if="questions.userdetails.age">Age : {{questions.userdetails.age}}</li>\
                    <li>{{questions.userdetails.gender}}</li>\
                    <li>{{questions.userdetails.address}}</li>\
                  </ul>\
                </div>\
              </div>\
            </div>',	
			ready: function() {
			//alert(userdetails.okbtn);
			var contentheight = $(window).height()-200;
			if($('#sidebar-wrapper').outerHeight()>=512){
				$('.white-resize .survey-content').css({'min-height':contentheight});
			}else{
				$('.white-resize .survey-content').css('min-height',492)
			}		
			$(window).resize(function(){
					setTimeout(function(){
						var contentheight = $(window).height()-200;			
						if($('#sidebar-wrapper').outerHeight()>=512){
							$('.white-resize .survey-content').css({'min-height':contentheight});
						}else{
							$('.white-resize .survey-content').css('min-height',442)
						}
					},300)		
			})
			
		
	},
	
});






var vueObj = new Vue({
	el:'#wrapperNew',
	data:{
		alldata:{},
		userdetailsdata:[],
		membersdata:[],
		memberdetail:[],
		status:{}
		
	},
	created: function() {
		if($('#tdtdata').length){
			this.alldata = JSON.parse($('#tdtdata').text().trim());
			this.membersdata = this.alldata.members;
			this.memberdetail = this.alldata.members[0];
			$(document).on("click",".sidebar-nav a", function(){
				$('.sidebar-nav li').removeClass('active');
				$(this).parent().addClass('active')
			})
		}
		if($('#surveydata').length){
			this.alldata = JSON.parse($('#surveydata').text().trim());
			this.membersdata = this.alldata.questions;
			$(document).on("click",".sidebar-nav a:not(.status-icon)", function(){				
				$('.sidebar-nav li').removeClass('active');
				var $submenu = $(this).next();
				if($submenu.is(':visible')){
					$submenu.slideUp()
				}else{
					$('.submenu').slideUp();
					$submenu.slideDown()
					$(this).parent().addClass('active')
				}
			})
			
		}
		this.userdetailsdata = this.alldata.userdetails;
		
		$(document).on('click', '.nv-bind', function(){
			var dataval = $(this).attr('data-pageid');
			$('#redidirectval').val(dataval)
			
			if($(this).attr("data-status") == 98){
				return false
			}else{
				$("#forwardbutton").trigger('click');
			}
		})
		
		$(document).on('click', '.nv-bindStatics', function(){
			var dataval = $(this).attr('data-pageid');
			//$('#redidirectval').val(dataval)
			
			if(dataval == "Previous"){
				$("#backbutton").trigger('click');
			}else{
				$("#forwardbutton").trigger('click');
			}
		})
		
		
		$(document).on("click","#menu-toggle",function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("active");
		});
		$('.answerlabel').each(function(){
			var lbl = $(this).find('label');			
			lbl.appendTo($(this).prev())
		})
		$('.question_answer').each(function(){
			var lbld = $(this).find('label');			
			lbld.appendTo($(this).prev())
		})

		if($(window).width()<=1200){
			$("#wrapper").addClass("active");
			if( $("#wrapper").hasClass("nojson") ){
				$("#wrapper").removeClass("active");
			}
		}
		else{
			$("#wrapper").removeClass("active");
		}
		$(window).on('load',function(){
			if($(window).width()<=1200){
				var $footer = $(".footer").outerHeight()
				$('.survey-content .btn-cst').css('bottom',$footer)		
			}
		});
		$(window).resize(function(){
			if($(window).width()<=1200){
				$("#wrapper").addClass("active");
				if( $("#wrapper").hasClass("nojson") ){
					$("#wrapper").removeClass("active");
				}
			}
			else{
				$("#wrapper").removeClass("active");
			}
			if($(window).width()<=1200){
				var $footer = $(".footer").outerHeight()
				$('.survey-content .btn-cst').css('bottom',$footer)		
			}
		})
		$(document).on('click','.btnusermeta',function(){
			var usercontent = $(this).next()			
			if(usercontent.is(':visible')){
				$(this).find('span').removeClass('glyphicon-chevron-up'); 
				$(this).find('span').addClass('glyphicon-chevron-down');
			}else{
				$(this).find('span').removeClass('glyphicon-chevron-down');
				$(this).find('span').addClass('glyphicon-chevron-up');
			}
			usercontent.slideToggle();
		})
		
	}
	
});

 