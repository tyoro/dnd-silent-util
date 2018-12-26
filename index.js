var df = require("date-utils")

module.exports = {
    enabled: false,
    // Save in terms of minutes
    startTime:-1,
    endTime:-1,

    enable: function (){
        this.enabled = true;
        return this;
    },

    disable: function (){
        this.enabled = false;
        return this;
    },

    setTime: function (timesString){ // ( "23:00-8:00" )
        var pt = timesString.indexOf("-");
        if( pt <0 ){ return false; }

        start = timesString.slice(0,pt);
        end = timesString.slice(pt+1);
        if( this.convertToMinutes(start) < 0 || this.convertToMinutes(end) < 0){
            return false;
        }
        this.setStartTime(start);
        this.setEndTime(end);
        return true;
    },

    setStartTime: function(timeString){
        if( m = this.convertToMinutes(timeString) ){
            this.startTime = m;
            return this.startTime;
        }
        return this;
    },

    setEndTime: function(timeString){
        if( m = this.convertToMinutes(timeString) ){
            this.endTime = m;
            return this.endTime;
        }
        return false;
    },

    convertToMinutes: function(timeString){
        var re = /^([0-2]?[0-9])\:([0-5][0-9])$/;
        var result =  null;
        if( result = timeString.match(re) ){
            if( parseInt(result[1]) <= 24 ){
                return parseInt(result[1])*60+parseInt(result[2]);
            }
        }
        return -1;
    },

    isSilent: function(date){
        if( !this.enabled ){ return false; }
        if( date == null ){ date = new Date(); }

        var now = date.getHours()*60+date.getMinutes();

        if( this.startTime > this.endTime ){ if( this.startTime < now || now < this.endTime ){ return true; } }
        else if( this.startTime < now && now < this.endTime ){ return true; }

        return false;
    },
};
