class SE {
    constructor(model,type){
        this.SEreader.info.Model=model;
        this.SEreader.info.Type=type;
    }

    ReadStyle(obj) {
        if((typeof obj) == "object" && obj != undefined) {
            this.SEStyleCointainer.SEStyleCointainer=obj;
        }
    }



    SEreader = {
        info : {
            Model : "",
            Type : "",
            info : {}
        },
        SEStyleCointainer : {},

        SendOut : function(){
            this.Responser.ResponseText = (
                console.log(
                    this.info.Model,
                    this.info.Type,
                    this.SEStyleCointainer
                )
            );
        }
    }

    Responser = {
        info:{
            getStyle :false,
            completedWork : false,
            getText :false
        },
        ResponseText : ""
    }
}

class TemporyState {
    constructor(temporyAmountLimit){
        if(isNaN(temporyAmountLimit)) this.temporyAmountLimit=temporyAmountLimit;
    }

    temp = [];
    temporyAmountLimit = 10;

    createTemporyState = function(name,object){
        if(this.temp.length < this.temporyAmountLimit){
            var t={
                name:name,
                saving_time:new Date().getDate(),
                data:object
            }
            this.temp[this.temp.length]=t;
            }
        }

    viewTemporyState = function(name){
        if(this.isEmpty){
            return -1;
        }
        let c = this.getTemporyState(name);
        let d = "-------------------------------"
        console.log (
            d+"\n"+"State Name : "+name+"\n"+
            "State saving-time : "+this.getTemporyState(name,"date")+"\n"+
            d+"data :\n"+c+"\n"+d
        );
    }

    isEmpty = function(){
        if(this.temp.length==0){
            return true;
        }else{
            return false;
        }
    }

    getTemporyState = function(name,mode){
        if (this.isEmpty()){
            return console.log("Empty data-state");
        }
        for (let c = 0; c < this.temp.length; c++) {
            if(this.temp[c].name==name){
                console.log("Get tempory data state ["+name+"]");
                if(mode==undefined) return this.temp[c].data;
                if(mode=="num") return c;
                if(mode=="date") return temp[c].Date;
            }
        }
    }
}


