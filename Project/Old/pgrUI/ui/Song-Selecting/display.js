var pvValues={
	OnClick:-1,
	difficulty : 2,
	diff:["EZ","HD","IN","AT"],
	selection:-1,
	firstrun:0
}

var audioCHOOSE = document.createElement("audio");
audioCHOOSE.src="../../res/audio/Tap5.wav"

//Musicbox
var MB = document.getElementById("audioCT");


function pv(SelectedCode){
	pvValues.selection=SelectedCode;
	if(pvValues.OnClick > -1){
		$("#list #s-body")[pvValues.OnClick].firstElementChild.style.background="rgba(0,0,0,0.2)";
	}
	$("#list #s-body")[SelectedCode].firstElementChild.style.background=load.songpreview[SelectedCode].display.OnClickColor;
	pvValues.OnClick=SelectedCode;
	document.getElementById("text-left").innerHTML=load.songpreview[SelectedCode].displayA.title;


	//信息展示
	var p = document.getElementById("description");
	p.children[0].children[0].innerHTML="音乐 ："+load.songpreview[SelectedCode].chart.music;
	p.children[0].children[1].innerHTML="曲绘 ："+load.songpreview[SelectedCode].chart.image;
	p.children[0].children[2].innerHTML="谱面 ："+load.songpreview[SelectedCode].chart.charter[pvValues.difficulty];

	p.children[1].innerHTML=load.songpreview[SelectedCode].displayA.preview.description;
	

	var o = $("#i");
	o.css("background","url(../../res/chapter/songs/image/"+load.songpreview[SelectedCode].displayA.background+")");
	o.css("background-size","cover");
	o.css("background-position","center");

	var t=$("#pv-img-panel #img");
	t.css("background","url(../../res/chapter/songs/image/"+load.songpreview[SelectedCode].displayA.background+")");
	t.css("background-size","cover");
	t.css("background-position","center");
	if(load.songpreview[SelectedCode].displayA.diff[pvValues.difficulty]==undefined){
		document.getElementById("text-right").innerHTML=pvValues.diff[pvValues.difficulty]+" Lv."+load.songpreview[SelectedCode].displayA.difficulty[pvValues.difficulty];
	}else{
		document.getElementById("text-right").innerHTML=load.songpreview[SelectedCode].displayA.diff[pvValues.difficulty];
	}

	if(load.songpreview[SelectedCode].displayA.difficulty[0]=="") {
		document.getElementById("dif-a").innerHTML="?";
	}else{
		document.getElementById("dif-a").innerHTML=load.songpreview[SelectedCode].displayA.difficulty[0];
	}
	if(load.songpreview[SelectedCode].displayA.difficulty[1]=="") {
		document.getElementById("dif-b").innerHTML="?";
	}else{
		document.getElementById("dif-b").innerHTML=load.songpreview[SelectedCode].displayA.difficulty[1];
	}
	if(load.songpreview[SelectedCode].displayA.difficulty[2]=="") {
		document.getElementById("dif-c").innerHTML="?";
	}else{
		document.getElementById("dif-c").innerHTML=load.songpreview[SelectedCode].displayA.difficulty[2];
	}
	if(load.songpreview[SelectedCode].displayA.difficulty[3]=="") {
		document.getElementById("dif-d").innerHTML="?";
	}else{
		document.getElementById("dif-d").innerHTML=load.songpreview[SelectedCode].displayA.difficulty[3];
	}


	if(load.songpreview[SelectedCode].displayA.difficulty[3]==""){
		var q=document.getElementById("dif-d");
		q.style.fontSize="0%";
		q.style.width="0%";
	}else{
		var q=document.getElementById("dif-d");
		q.style.width="16%";
		q.style.fontSize="200%";
	}

	//定数显示区域-右模块
	switch(pvValues.difficulty){
		case 0:
			if(load.songpreview[SelectedCode].displayA.difficulty[0]!=""){
				document.getElementById("dif-a").style.background=load.songpreview[SelectedCode].displayA.difColor[0];
			}else{
				document.getElementById("dif-a").style.background="#fff"
			}
			document.getElementById("dif-a").style.border="2px solid #aaa";

			document.getElementById("dif-b").style.border="5px solid #222";
			document.getElementById("dif-c").style.border="5px solid #222";
			document.getElementById("dif-d").style.border="5px solid #222";

			document.getElementById("dif-b").style.background="#ddd";
			document.getElementById("dif-c").style.background="#ddd";
			document.getElementById("dif-d").style.background="#ddd";
			break;
		case 1:
			if(load.songpreview[SelectedCode].displayA.difficulty[1]!=""){
				document.getElementById("dif-b").style.background=load.songpreview[SelectedCode].displayA.difColor[1];
			}else{
				document.getElementById("dif-b").style.background="#fff"
			}
			document.getElementById("dif-b").style.border="2px solid #aaa";

			document.getElementById("dif-a").style.border="5px solid #222";
			document.getElementById("dif-c").style.border="5px solid #222";
			document.getElementById("dif-d").style.border="5px solid #222";

			document.getElementById("dif-a").style.background="#ddd";
			document.getElementById("dif-c").style.background="#ddd";
			document.getElementById("dif-d").style.background="#ddd";
			break;
		case 2:
			if(load.songpreview[SelectedCode].displayA.difficulty[2]!=""){
				document.getElementById("dif-c").style.background=load.songpreview[SelectedCode].displayA.difColor[2];
			}else{
				document.getElementById("dif-c").style.background="#fff"
			}
			document.getElementById("dif-c").style.border="2px solid #aaa";

			document.getElementById("dif-a").style.border="5px solid #222";
			document.getElementById("dif-b").style.border="5px solid #222";
			document.getElementById("dif-d").style.border="5px solid #222";

			document.getElementById("dif-b").style.background="#ddd";
			document.getElementById("dif-a").style.background="#ddd";
			document.getElementById("dif-d").style.background="#ddd";
			break;
		case 3:
			if(load.songpreview[SelectedCode].displayA.difficulty[3]!=""){
				document.getElementById("dif-d").style.background=load.songpreview[SelectedCode].displayA.difColor[3];
			}else{
				document.getElementById("dif-d").style.background="#fff"
			}
			document.getElementById("dif-d").style.border="2px solid #aaa";

			document.getElementById("dif-a").style.border="5px solid #222";
			document.getElementById("dif-b").style.border="5px solid #222";
			document.getElementById("dif-c").style.border="5px solid #222";

			document.getElementById("dif-b").style.background="#ddd";
			document.getElementById("dif-c").style.background="#ddd";
			document.getElementById("dif-a").style.background="#ddd";
			break;
	}


	//
	if(load.songpreview[pvValues.selection].chart.PecChartFileName[pvValues.difficulty]==""){
		document.getElementById("bb").style.background="rgba(255,255,255,0.4)";
		document.getElementById("play").style.height="60%";
		document.getElementById("play").setAttribute("onclick","void(0)");
	}else{
		document.getElementById("play").setAttribute("onclick","play()");
		document.getElementById("play").style.height="75%";
		document.getElementById("bb").style.background="rgba(255,255,255,0.9)";
	}
	if(pvValues.firstrun==0) {
		pvValues.firstrun=1;
	}else{
		audioCHOOSE.play();
	}

	

}



function difficulty(select){
	pvValues.difficulty=select;
	pbim(0);
	pv(pvValues.selection);
}


function pbim(n){
	//load.songpreview.length
	if(n<load.songpreview.length){
		var y=$("#list #s-body #b-panel");
		y[n].children[2].innerHTML=load.songpreview[n].displayA.difficulty[pvValues.difficulty];
		n=n+1;
		pbim(n);
	}
}


function play(){
	$("#black-loading-pack").fadeIn(500);
	var path = load.songpreview[pvValues.selection].displayA.preview.vpath[pvValues.difficulty];
	var url="../PlayViewer/PlayViewer.html?"+"path="+path;
	console.log(url);
}

