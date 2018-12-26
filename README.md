# dnd-silent-util
Module for implementing silent function(do not disturb)

~~~
const dnd = require('dnd-silent-util');

dnd.setTime("23:00-10:00");
dnd.enable();

if( !dnd.isSilent() ){
  // notification
}else{
  // is silent
}
~~~

By default it is disable, in which case it returns false.
