/*
 * Arpav - Balneazione 
 * App controller specifico ANDROID
 * 2012-07-11
 * Stefano Manzoni @Archimedia
 */
  
 $(function(){
	console.log(window.innerHeight);
	document.getElementById('page_splash').style.height=window.innerHeight+"px";
	document.getElementById('splash_div').style.height=window.innerHeight+"px";
	/*document.getElementById('splash_div').style.paddingTop=((window.innerHeight-440)/2)+"px";*/
	changeMypage('page_splash');
	
	/*setTimeout(function(){
		hideSplash();
	}, 3000);*/
	
});