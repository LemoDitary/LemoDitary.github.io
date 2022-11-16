var getQueryString = function(name) { //通过[string]name查找以获取url中的变量
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = document.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}


//Load pack intro-file [*.pack]
function LoadInfo(url){
	var a = document.getElementById('loadScriptPanel');
	var script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',url+'.pack');
	a.appendChild(script);
}


//Create New Song Element
function ChartElementAdd(element){
	var m = document.getElementById("list");
	m.innerHTML=m.innerHTML+element;
	
}

//url?pack_src=url2
var load={
	len : {},
	length : 0,
	n:0,
	songpreview:[],
	pack:"",

	page:function(){
		for(var n=0;n<this.length;n++){
			var c = this.songpreview[n];
			var p = "<div id='s-body' dif='in' onclick='pv("+n+")'><div id='b-panel' style='border-left:10px solid "+c.display.borderColor+"'>"
			var ta = "<div id='s-title'><div style='width:2%;'></div>"+c.display.title+"</div>";
			var tb = "<div id='img-lab' style='background:url(../../res/chapter/songs/image/"+c.display.background+");background-size:"+c.display.bgSize+";background-position-x:"+c.display.bgShowXY[0]+";background-position-y:"+c.display.bgShowXY[1]+";'></div>";
			var tc = "<div id='img-lab' style='right:0;position:absolute;filter:brightness(1)'>"+c.displayA.difficulty[2];+"</div>";
			var f = p+ta+tb+tc+"</div></div>";
			ChartElementAdd(f);
		}
			pv(0)
	},
	charts : function(){
		var URL = "../../res/chapter/songs/info/";

		
			var a = document.getElementById("loadScriptPanel");
			a.innerHTML="";
			var script = document.createElement("script");
			script.setAttribute("type","text/javascript");
			script.setAttribute("src",URL+this.len[this.n]+".x");
			
			a.appendChild(script);
			setTimeout("window.load.songpreview["+this.n+"]=window.info;",500);
			
		this.n++;
		if(this.n<this.length){
			setTimeout("load.charts()",500);
		}else{
			setTimeout("load.page()",500);
			$("#black-loading-pack").fadeOut(500);
		}
	},
	loadpack : function(){
		var packInfo;
		var pack = getQueryString("pack_src");
		var songURL = "../../res/chapter/songs/pack-info/"+pack;
		LoadInfo(songURL);

		setTimeout("window.load.len = window.packInfo.songList",300);
		setTimeout("window.load.pack = window.packInfo.title",300);
		setTimeout("window.load.length = window.load.len.length",300);
		setTimeout("document.getElementById('ChapterTitle').innerHTML=load.pack",300);
		setTimeout("load.charts()",300);
	},
	backToMain :function(){
		$("#black-loading-pack").fadeIn(500);
		setTimeout("location.replace('../ChapterMenu/cm.html')",510);
	}

}
