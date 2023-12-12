
var msg="welcome Manali Good Morning..";
document.getElementById("d1").innerHTML= msg;
document.getElementById("d2").innerHTML= msg.length;
document.getElementById("d3").innerHTML= msg.toUpperCase();
document.getElementById("d4").innerHTML= msg.toLowerCase();


document.getElementById("d5").innerHTML=msg.slice(7,14);

var mydate = new Date()
document.getElementById("d4").innerHTML = mydate;

function myclock(){
    var d = new Date();
    document.getElementById("d5").innerHTML = d.toLocaleDateString();
}
 setInterval(myclock,1000);




// var emp={
//     id:1,
//     name:"Manali",
//     post:"CEO",
//     salary:1200000,
// //     detail:function(){      
// // }
// };
// document.write(emp.name,"<br>");


