



var load = {
	
	cpt : ()=> {

		$("#startAni2").fadeOut(600);

		for(var s=0;s<chapter.length;s++){
			var c = chapter[s];
			var dia = "<div id='cptDIVCNo"+s+"' class='divC' style='background:"+c.style.unlocked.color.background+";' onclick='selectCPT("+s+")'>";
			var dib = "<div id='image-preview' style='background:url(../../res/chapter/image/"+c.style.unlocked.image[0]+");background-size:cover;background-position-x:"+c.style.unlocked.image[1]+";'></div>";
			var dic = "<div id='layer' style='background:url(../../res/chapter-menu-ui-weapon/"+c.style.unlocked.border.offClickimg+");background-size:cover;'></div>";
			var did ="<div id='shadow'></div>"+"<div id='topweapon' style='filter:hue-rotate("+c.style.unlocked.border.colorDeg+"deg) opacity(0.5)'>";
			var die ="<img src='../../res/chapter-menu-ui-weapon/topWeapon.png'></img></div><div id='layer1'><div id='m'><div style='height:10%;width:100%;'></div><div id='title'>"+c.style.unlocked.name+"</div><div style='width:90%;height:2%;'></div>";
			var dif = "<div id='text'>"+c.style.unlocked.description+"</div>";
			var dig ="<div style='margin:0 auto;width:90%;height:2%;border-bottom:1px solid #fff;'></div></div><div id='b' style='background:"+c.style.unlocked.color.button+"' onclick='"+c.button.runString+"'>"+c.button.text+"</div></div></div>";
			var fin = dia + dib + dic + did + die + dif + dig;

			var m = document.getElementById("main");
			m.innerHTML=m.innerHTML+fin;
			console.log("loaded chapter ["+s+"]");
		}
		setTimeout("document.getElementById('startAni1').style.marginLeft='-100%'",500);
		console.log("Over");
	},

	enter : (string) => {
		audiob.play();
		$("#startAni2").fadeIn(600);
		console.log(string);
		setTimeout("location.replace('../Song-Selecting/s.html?pack_src="+string+"')",600);
	}

}



/**
*
*样式修改方法
*变量methodType指方法类型 ["s-open"为打开状态，"s-close"是关闭状态]，必须填写
*变量val用于指定从第0个开始的章节序数的章节进行修改，必须填写
*
*/
function Restyle(methodType,val){
	if(methodType=="s-close"){
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value)[0].setAttribute("onclick","selectCPT("+CurrentCPTSelectInfo.value+")");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value).css("width","10%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #image-preview").css("width","50%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #image-preview").css("filter","brightness(0.7)");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #layer").css("width","50%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #layer").css("margin-left","0%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #layer1").css("width","50%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #layer1").css("height","0%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #shadow").css("width","50%");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #shadow").css("box-shadow","-2px 0px 0px #000");
		$("#cptDIVCNo"+CurrentCPTSelectInfo.value+" #topweapon").css("width","0%");
	}
	if(methodType=="s-open"){
		$("#cptDIVCNo"+val)[0].setAttribute("onclick"," ");
		$("#cptDIVCNo"+val).css("width","60%");
		$("#cptDIVCNo"+val+" #image-preview").css("width","60%");
		$("#cptDIVCNo"+val+" #image-preview").css("filter","brightness(1)");
		$("#cptDIVCNo"+val+" #layer").css("width","10%");
		$("#cptDIVCNo"+val+" #layer").css("margin-left","150%");
		$("#cptDIVCNo"+val+" #layer1").css("width","40%");
		$("#cptDIVCNo"+val+" #layer1").css("height","100%");
		$("#cptDIVCNo"+val+" #shadow").css("width","40%");
		$("#cptDIVCNo"+val+" #shadow").css("box-shadow","-2px 0px 20px #000");
		$("#cptDIVCNo"+val+" #topweapon").css("width","100%");
	}
}