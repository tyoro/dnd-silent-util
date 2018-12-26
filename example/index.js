dnd = require("../index.js");

console.log("default:"+dnd.isSilent());

dnd.enable();

console.log("enable after:"+dnd.isSilent());
console.log("endTime:"+dnd.endTime);
console.log("startTime:"+dnd.startTime);

console.log("set 23:00-10:00:"+dnd.setTime("23:00-10:00"));
console.log("endTime:"+dnd.endTime);
console.log("startTime:"+dnd.startTime);
console.log("isSilent:"+dnd.isSilent());

console.log("set 12:00-15:00:"+dnd.setTime("12:00-15:00"));
console.log("endTime:"+dnd.endTime);
console.log("startTime:"+dnd.startTime);
console.log("isSilent:"+dnd.isSilent());


console.log("set 15:00-23:00:"+dnd.setTime("15:00-23:00"));
console.log("endTime:"+dnd.endTime);
console.log("startTime:"+dnd.startTime);
console.log("isSilent:"+dnd.isSilent());


console.log("set 25:30-10:00:"+dnd.setTime("25:30-10:00"));
console.log("endTime:"+dnd.endTime);
console.log("startTime:"+dnd.startTime);

console.log("set 12:66-18:00:"+dnd.setTime("12:66-18:00"));
console.log("endTime:"+dnd.endTime);
console.log("startTime:"+dnd.startTime);
