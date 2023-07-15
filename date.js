 module.exports=getDate;
 function getDate(){

 var date= new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

   var typeOfDay= date.toLocaleDateString("en-US",options);
   return typeOfDay;
      
 }