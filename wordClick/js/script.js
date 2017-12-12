// JavaScript Document
$(document).ready(function(){
	
	//var aurl = url.split('|');
//	var alisTxt = lisTxt.split("|");
	//var h1Str = h1.split(" ");
	var aoutput = [];
	//var spanStr = spanTxt1.split(" ");
	var spanStr2 = spanTxt2.split(" ");
	//var spanStr3 = spanTxt3.split(" ");
	//var spanStr4 = spanTxt4.split(" ");
	
	//var alist = [];
	var len = 0;
	//var num = 0;
	var aImg = []
	var count = 1; 
	
	$("#removeCl").html(TextNone); //none of these txt pass
	
			/* for(var a=0; a<aurl.length;a++){
					aImg[a] = '';
					
			} */
			outputdata('');
//			for(var a=0; a<alisTxt.length;a++){
//				var li = alisTxt[a].split(" ");
//				for(var b=0; b<li.length;b++){
//					alist.push(li[b]);
//				}
//			}
			
   			//len = h1Str.length+spanStr.length+spanStr2.length+spanStr3.length+alist.length+spanStr4.length;
			
			len =spanStr2.length;
			for(var m=0;m<len; m++)
			{aoutput[m]=""};
		
		////for single			
			if(likeStr == "1"){
					/*for(var i=0	; i<h1Str.length; i++){
						$("#h1Text").append("<span class='SingNoCk' data-info='"+count+++"'>" +h1Str[i]+ "</span>"+" ");
					}
					for(var j=0; j<spanStr.length;j++){
						$("#spanText").append("<span class='SingNoCk' data-info='"+count+++"'>" +spanStr[j]+ "</span>"+" ");
					}*/
					/* for(var t=0; t<spanStr2.length;t++){
						$("#spanText2").append("<span class='SingNoCk' data-info='"+count+++"'>" +spanStr2[t]+ "</span>"+" ");
					} */
					/*for(var n=0; n<spanStr3.length;n++){
						$("#spanText3").append("<span class='SingNoCk' data-info='"+count+++"'>" +spanStr3[n]+ "</span>"+" ");
					}*/
					
//					for(var k=0; k<alisTxt.length;k++){
//						$("#listTxt").append("<li id='lival"+k+"' class='ReList'></li>");
//						var Al = alisTxt[k].split(" ");
//						for(var n = 0;n<Al.length;n++){
//							$("#lival"+k).append("<span class='SingNoCk' data-info='"+count+++"'>" +Al[n]+ "</span>"+" ");
//						}
//					}
//					for(var o=0; o<spanStr4.length;o++){
//						$("#spanText4").append("<span class='SingNoCk' data-info='"+count+++"'>" +spanStr4[o]+ "</span>"+" ");
//					}					
					/* for(var l=0; l<aurl.length;l++){
						$("#image").append("<span id='img"+l+"' class='SngimgnoCk' data-info='"+num+++"'><img src='"+aurl[l]+"'></span>"+"</img>");
					} */
					/* $("span,img").click(function () {
						 if ($(this).hasClass("SingNoCk")){
								$(this).removeClass("SingNoCk");
								$(this).addClass("Singlike");
								output($(this),1);
							  }
						 else if ($(this).hasClass("Singlike")){
								$(this).removeClass("Singlike");
								$(this).addClass("SingNoCk");
								output($(this),"");
							  }
						 else if ($(this).hasClass("SngimgnoCk")){
								$(this).removeClass("SngimgnoCk");
								$(this).addClass("Sngimglike");
								imgoutput($(this),1);
							  }
						 else if ($(this).hasClass("Sngimglike")){
								$(this).removeClass("Sngimglike");
								$(this).addClass("SngimgnoCk");
								imgoutput($(this),"");
							  }
							  $(".noneVal").val("");
					}); */				
			}
////close single				
//start double			
			else if(likeStr == "2"){
					var valueForColor=0; //Set color based on like box click or dislike box click
					
					//else if starts
					/*for(var i=0	; i<h1Str.length; i++){
						$("#h1Text").append("<span class='noCk' data-info='"+count+++"'>" +h1Str[i]+ "</span>"+" ");
					}
					for(var j=0; j<spanStr.length;j++){
						$("#spanText").append("<span class='noCk' data-info='"+count+++"'><b>" +spanStr[j]+ "</b></span>"+" ");
					}*/
					for(var t=0; t<spanStr2.length;t++){
						$("#spanText2").append("<span class='noCk' data-info='"+count+++"'>" +spanStr2[t]+ "</span>"+" ");
					}
					/*for(var n=0; n<spanStr3.length;n++){
						$("#spanText3").append("<span class='noCk' data-info='"+count+++"'>" +spanStr3[n]+ "</span>"+" ");
					}*/
					
//					for(var k=0; k<alisTxt.length;k++){
//						$("#listTxt").append("<li id='lival"+k+"' class='ReList'></li>");
//						var Al = alisTxt[k].split(" ");
//						for(var n = 0;n<Al.length;n++){
//							$("#lival"+k).append("<span class='noCk' data-info='"+count+++"'>" +Al[n]+ "</span>"+" ");
//						}
//					}
//					for(var o=0; o<spanStr4.length;o++){
//						$("#spanText4").append("<span class='noCk' data-info='"+count+++"'>" +spanStr4[o]+ "</span>"+" ");
//					}								
					/* for(var l=0; l<aurl.length;l++){
						$("#image").append("<span id='img"+l+"' class='imgnoCk' data-info='"+num+++"'><img src='"+aurl[l]+"'></span>"+"</img>");
					} */
			/*	function abc(){
					$("span,img").click(function () {
						 if ($(this).hasClass("noCk")){
								$(this).removeClass("noCk");
								$(this).addClass("like");
								output($(this),1);
							  }
						 else if ($(this).hasClass("like")){
								$(this).removeClass("like");
								$(this).addClass("Dislike");
								output($(this),2);
							  }
						 else if ($(this).hasClass("Dislike")){
								$(this).removeClass("Dislike");
								$(this).addClass("noCk");
								output($(this),"");
							  }
						 else if ($(this).hasClass("imgnoCk")){
								$(this).removeClass("imgnoCk");
								$(this).addClass("imglike");
								imgoutput($(this),1);
							  }
						 else if ($(this).hasClass("imglike")){
								$(this).removeClass("imglike");
								$(this).addClass("imgdislike");
								imgoutput($(this),2);
							  } 
						 else if ($(this).hasClass("imgdislike")){
								$(this).removeClass("imgdislike");
								$(this).addClass("imgnoCk");
								imgoutput($(this),"");
							  }
							  $(".noneVal").val("");
					});
			}*/
				
					
					
				$(".like-btn").click(function(){
					valueForColor = 1;
					selection();
					//console.log("green");
	            });
				
				$(".dislike-btn").click(function(){
					valueForColor = 2;
					selection();
					//console.log("red btn");
	            });
				
				function selection(){

					$("span,img").unbind("click").click(function () {
					//console.log(valueForColor);
						if(valueForColor == 2){
							 if ($(this).hasClass("like")){
							   console.log("has class like");
								$(this).removeClass("like");
								$(this).addClass("Dislike");
								output($(this),2);
							  }
						
						else if ($(this).hasClass("noCk")){
							console.log("has class noclk");
								$(this).removeClass("noCk");
								$(this).addClass("Dislike");
								output($(this),2);
							  }
						
						else if ($(this).hasClass("Dislike")){
							console.log("has class dislike");
								$(this).removeClass("Dislike");
								$(this).addClass("noCk");
								output($(this),"");
							  }
							  
							  
						}
						
						if(valueForColor == 1){
							if ($(this).hasClass("noCk")){
								console.log("has class noclk");
								$(this).removeClass("noCk");
								$(this).addClass("like");
								output($(this),1);
							  }
						else if ($(this).hasClass("like")){
							console.log("has class like");
								$(this).removeClass("like");
								$(this).addClass("noCk");
								output($(this),"");
							  }
						
						else if ($(this).hasClass("Dislike")){
							console.log("has class dislike");
								$(this).removeClass("Dislike");
								$(this).addClass("like");
								output($(this),1);
							  }
							
						}
						
					});
						
					}
				}
			//}  //else if ended
	function outputdata(none){
		outputValue(aoutput, aImg, none);
	}
	function output(This,val){
		//console.log("This::"+This+"::val::"+val);
						aoutput[This.attr("data-info")-1] = val;
						outputdata('');
	}
	function imgoutput(This,val){
						aImg[This.attr("data-info")] = val;
						outputdata('');
	}
	
	$("#removeCl").click(function(){
		/* for(var a=0; a<aurl.length;a++){
				aImg[a] = "";
		} */
		for(var m=0;m<len; m++){aoutput[m]=""};
		
		//All html tags get their classes reset below
		if($("#spanText2 > span").hasClass("Dislike") || $("#spanText2 > span").hasClass("like")){
			$("#spanText2 > span").removeClass("Dislike");
			$("#spanText2 > span").removeClass("like");
			$("#spanText2 > span").addClass("noCk");
			}

		if($("#spanText4 > span").hasClass("Dislike") || $("#spanText4 > span").hasClass("like")){
			$("#spanText4 > span").removeClass("Dislike");
			$("#spanText4 > span").removeClass("like");
			$("#spanText4 > span").addClass("noCk");
			}			
			
		if($(".ReList > span").hasClass("Dislike") || $(".ReList > span").hasClass("like")){
			$(".ReList > span").removeClass("Dislike");
			$(".ReList > span").removeClass("like");
			$(".ReList > span").addClass("noCk");
			}
			
		if($("#h1Text > span").hasClass("Dislike") || $("#h1Text > span").hasClass("like")){
			$("#h1Text > span").removeClass("Dislike");
			$("#h1Text > span").removeClass("like");
			$("#h1Text > span").addClass("noCk");
			}
			
		if($("#image > span").hasClass("imgdislike") || $("#image > span").hasClass("imglike")){
			$("#image > span").removeClass("imglike");
			$("#image > span").removeClass("imgdislike");
			$("#image > span").addClass("imgnoCk");
			outputdata('');
			}

		if($("#spanText2 > span").hasClass("Singlike")){
			$("#spanText2 > span").removeClass("Singlike");
			$("#spanText2 > span").addClass("SingNoCk");
			}
		if($("#spanText4 > span").hasClass("Singlike")){
			$("#spanText4 > span").removeClass("Singlike");
			$("#spanText4 > span").addClass("SingNoCk");
		}
		if($(".ReList > span").hasClass("Singlike")){
			$(".ReList > span").removeClass("Singlike");
			$(".ReList > span").addClass("SingNoCk");
			}
			
		if($("#h1Text > span").hasClass("Singlike")){
			$("#h1Text > span").removeClass("Singlike");
			$("#h1Text > span").addClass("SingNoCk");
			}
			
		if($("#image > span").hasClass("Sngimglike")){
			$("#image > span").removeClass("Sngimglike");
			$("#image > span").addClass("SngimgnoCk");
			}
		outputdata(noneOfval);
		}
	)

		
});