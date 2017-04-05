skrollr.init();
	var body = document.getElementsByTagName("BODY")[0];
	// body.className='noscroll'; TEMP
	
	var spaceship = document.getElementById('spaceship');
	var ufo = document.getElementById('ufo');
	var startplanet=document.getElementById('startplanet');
	var endplanet=document.getElementById('endplanet');
	var spaceman=document.getElementById('lilastro');
	var calistakim= document.getElementById('calistakim');
	var subtext=document.getElementById('subtext');

	var subtextlist=['Full Stack Developer','Creative', '[Internet] Explorer'];
	
	function introAnimationEvent(el){
	    var t;
	    var animations = {
	      'animation':'animationend',
	      'OAnimation':'oAnimationEnd',
	      'MAzanimation':'animationend',
	      'WebkitAnimation':'webkitAnimationEnd'
	    }

	    for(t in animations) {
	        if( el.style[t] !== undefined ) {
	            return animations[t];
	        }
	    }
	}

	/* Listen for a animation! */
	var animationEvent = introAnimationEvent(spaceship);
	var animnum=0;
	animationEvent && spaceship.addEventListener(animationEvent, function() {
		if (animnum==0){
			// console.log('animation complete!');
			spaceship.className="landedspaceship";
		}
		else if (animnum==1){
			//console.log('spaceship landed');
			startplanet.className='startplanetanim';
			endplanet.className='endplanetanim';
			spaceship.className+=' spaceshipzoom';
		}
		else if (animnum==2){
			//console.log('spaceship zoomed');
			spaceship.className+=' spaceshipbase';
			spaceman.className='spaceman';
			calistakim.className+=' nameanim';
			subtext.className+=' nameanim';			
		}
		animnum++;

		if (animnum == 3){
			setTimeout(function(){
				writingstart(subtextlist)
			}, 500);
		} 
	});

var letter;
var word;
var index=0;
function writingstart(wordlist){
	
	writeword();	

	function writeword(){
		if (index == 3){
			ufo.className['baseVal']='ufoanim';
			setTimeout(function(){
				subtext.innerHTML = 'oh no';
				spaceman.className+=' abducted'
			}, 3000)
			setTimeout(function(){
				ufo.className['baseVal']='ufofly'
				body.className='scroll';
			}, 6000)
			return;
		}
		word=wordlist[index];
		setTimeout(function(){
			for(var i = 0; i < word.length; i++){
				letter = word[i];			
				if(i === word.length - 1){
					valueHelper(letter, i, true)
				}
				else{
					valueHelper(letter, i, false);	
				}
			}
			function valueHelper(letter, i, lastletter){
				// console.log('letter: '+letter)
				vHelper = setTimeout(function(){	

					subtext.innerHTML += letter;

					if(lastletter==true){
						index++;
						lastLetterHelper = setTimeout(function(){						
							for(var i = word.length - 1; i >= 0; i--){
								deleteHelper(word, i);
							}
						}, 500);
					}
				}, i * 100);
				
			}//valueHelper

			function deleteHelper(word, i){
				dHelper = setTimeout(function(){
					word = word.slice(i, word.length);
					subtext.innerHTML = word;
					if(word.length === 1){
						subtext.innerHTML = '';
						setTimeout(function(){
							writeword();
						}, 200);
					}
				}, i * 100);
			}//deleteHelper
		});
	}	
} // writingstartf

var pagetwo=document.getElementById('pagetwo');
var transform;
var xvalue;
var results;
var pagetwoanimated=false

document.addEventListener("scroll", function(){
	transform = window.getComputedStyle(pagetwo, null).getPropertyValue('transform');
	results = transform.match(/matrix(?:(3d)\(-{0,1}\d+\.?\d*(?:, -{0,1}\d+\.?\d*)*(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*)), -{0,1}\d+\.?\d*\)|\(-{0,1}\d+\.?\d*(?:, -{0,1}\d+\.?\d*)*(?:, (-{0,1}\d+\.?\d*))(?:, (-{0,1}\d+\.?\d*))\))/);
	if(results[1] == '3d') {
		return results.slice(2,5);
		//console.log( 'RESULTS '+results.slice(2,5));
	}
	if (!results ){
		return;
	}
	results.push(0);
	xvalue = results.slice(5,6)
	// console.log( 'x value: '+xvalue);
//   	console.log( 'results 3: '+results.slice(5, 8) );
		if (xvalue <= 20){
			console.log('pagetwo')
			if (pagetwoanimated==false){
				pagetwoanim();
			}
		}

	// var pagetwoleft=pagetwo.getBoundingClientRect().left;
	// console.log('pagetwoleft: '+pagetwoleft)	
});

function pagetwoanim(){
	var browsers=pagetwo.querySelectorAll('.browser');
	for (i=0; i <=browsers.length-1; i++){
		browsers[i].className+=' browseranim';
	}
	pagetwoanimated=true;
	infotab.style.display='block';
	
}

var firefox=document.getElementById('firefox');
var chrome=document.getElementById('chrome');
var chromewindow=document.getElementById('chromewindow');
var animationEvent = introAnimationEvent(firefox);

function movepagedown(imagename){
	var image=document.getElementById(imagename);
	image.setAttribute("y", 0);
}
function movepageup(imagename){
	var image=document.getElementById(imagename);
	image.setAttribute("y", 190);
}

animationEvent && firefox.addEventListener(animationEvent, function() {
	console.log('ANIM done')
	firefox.className+=' pulse';
	chrome.className+=' pulse';
});

var infotab=document.getElementById('infotab');
var infobox=document.getElementById('infobox');
var abacusinfo=document.getElementById('abacusinfo');
var libertyinfo=document.getElementById('libertyinfo');
var joyinfo=document.getElementById('joyinfo');
var gradpadinfo=document.getElementById('gradpadinfo');

function openbrowser(){
	chromewindow.className['baseVal']="popin";
	setTimeout(function(){
		var whitescreen=document.getElementById('screen')
		whitescreen.style.display='none';
	}, 1000);
	infotab.style.marginLeft='-18px';

}
function closebrowser(){
	chromewindow.className['baseVal']="";
	infotab.style.marginLeft='-80px';
}
function fullscreen(){
	// var isopen=false;
	// if (isope==false){
	// 	chromewindow.className['baseVal']+="xx "
	// }else{
	// 	chromewindow.className['baseVal']="xx"
	// }
	console.log('xx');
}
var screens=[]
var infoboxes=[]
function switchtab(el, project){
	var abacus = document.getElementById('abacus_screen');
	var liberty = document.getElementById('liberty_screen');
	var joy = document.getElementById('joy_screen');
	var gradpad = document.getElementById('gradpad_screen');
	
	screens.push(abacus, liberty, joy, gradpad)
	infoboxes.push(abacusinfo, libertyinfo, joyinfo, gradpadinfo)
	for (i=0; i<=screens.length-1; i++){
		screens[i].style.display='none';
		infoboxes[i].style.display='none';
	}
	if (project == 'abacus'){
		abacus.style.display='block'
		abacusinfo.style.display='block'
	}
	if (project == 'liberty'){
		liberty.style.display='block'
		libertyinfo.style.display='block'
	}
	if (project == 'joy'){
		joy.style.display='block'
		joyinfo.style.display='block'
	}
	if (project == 'gradpad'){
		gradpad.style.display='block'
		gradpadinfo.style.display='block'
	}
}

function expandinfo(){
	infobox.style.left='13.5%';
}
function collapseinfo(){
	infobox.style.left='-40%';
}
function scrolltosection(id, base, top){

	var bm=document.getElementById(id).offsetTop;
	if (id == 'pagetwo'){
		bm=1220;
	}
	else{
		bm=2020;
	}
	var base=document.getElementById(base).offsetTop;

	var b=base+bm - top;


	var st=document.documentElement.scrollTop;
	
	if (st<document.body.scrollTop) st=document.body.scrollTop;
	
	var frames=1000;
	var step=(b-st)/frames;

	var settop=function(target, t){
		setTimeout(function(){
			document.documentElement.scrollTop=target;
			document.body.scrollTop=target;
		}, Math.sqrt(t/100)*200);
	}

	for(var i=1; i<=frames;i++){
		settop(st+step*i,i);
	}
	if (pagetwoanimated==false){
		setTimeout(function(){
			pagetwoanim();
		}, 1000);
		
	}
}
//CONTACT FORM
function sendemail(){

	var oname=document.getElementById('name');
	var oemail=document.getElementById('email');
	var omessage=document.getElementById('message');

	var valid=1;
	var offender=null;
	var errormsg='';
	if (oemail){
		if (!valemail(oemail)) {valid=0; offender=offender||oemail; errormsg='Valid email required'}
	}
	if (oname){
		if (!valstr(oname)) {valid=0; offender=offender||oname; errormsg='Please leave a name'}
	}
	if (oname){
		if (!valstr(omessage)) {valid=0; offender=offender||oname; errormsg='How u tryna send an email with no message??'}
	}

	if (!valid) {
		document.getElementById('errormsg').style='color:red';
		document.getElementById('errormsg').innerHTML=errormsg;
		return;
	}
	var name=oname.value;
	var email=oemail.value;
	var message=omessage.value;

	// value of these fields should be reversed from javascript on page load
	// var filledvalue=document.getElementById('emptyfield').value;
	// var emptyvalue=document.getElementById('filledfield').value;

	var params=[];
	params.push('name='+name);
	params.push('email='+email);
	params.push('message='+message);

	console.log(params);
	//console.log('filledvalue: '+filledvalue+'emptyvalue: '+emptyvalue);

	ajxpgn('contactformcontainer','ajx_contactform.php?'+params.join('&'));
}
function contactformerror(msg){
	//console.log(msg);
	document.getElementById('errormsg').style='color:red';
	document.getElementById('errormsg').innerHTML=msg;
}

function valstr(d){
  if (d.value==''){
    d.style.borderColor='red';
    return false;
  }

  return true;
}

function valemail(d){
  if (d.value=='x'||d.value.replace(/\S+@\S+\.\S+/g,'x')!='x'){
    d.style.borderColor='red';
    return false;
  }

  return true;
}







