var ui = {//改变布局效果


	filter : {
		Blur : function(FindIdString,MblurRegion,MblurGoal,goal){
			var c;
			for(c=0;c<=goal;c=c+1){
				var blurValue = MblurRegion+(Math.floor((MblurGoal-MblurRegion)*10*(c/goal))/10);//Math.sqrt(c/goal))/10);
				var Mblur = "blur("+blurValue+"px)"+" ";
				var cmd = "$('#"+FindIdString+"').css('filter','"+Mbrightness+"');"
				setTimeout(cmd,10);
			
			}
			return [blurValue,Mblur,c];
		},
		BlurAndBrightness : function(FindIdString,MblurRegion,MbrightnessRegion,MblurGoal,MbrightnessGoal,goal){
			var c;
			for(c=0;c<=goal;c=c+1){
				var blurValue = MblurRegion+(Math.floor((MblurGoal-MblurRegion)*10*(c/goal))/10);//Math.sqrt(c/goal))/10);
				var brightnessValue = MbrightnessRegion+(Math.floor((MbrightnessGoal-MbrightnessRegion)*10*(c/goal))/10);//Math.sqrt(c/goal))/10);
				var Mblur = "blur("+blurValue+"px)"+" ";
				var Mbrightness = "brightness("+brightnessValue+")"+" ";
				var cmd = "$('#"+FindIdString+"').css('filter','"+Mblur+Mbrightness+"');"
				setTimeout(cmd,10);
			
			}
			return [blurValue,brightnessValue,Mblur,Mbrightness,c];
		}
	}
}