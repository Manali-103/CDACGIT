function checkdata(){
    var uname = document.getElementById("fname").value;
    var upass = document.getElementById("pass").value;
    var uedu = document.myform.edu;
    var reg = "^[a-zA-Z ]{3,15}$";
    if(uname == ""){
        window.alert("name  is required");
        document.getElementById("fname").focus();
        return false;
    }
    if(upass == ""){
        window.alert("password is required");
        document.getElementById("pass").focus();
        return false;
    }
    if(!uname.match(reg)){
        window.alert("Please enter name");
        document.getElementById("fname").focus();
    }
    if(uedu[0].checked == false && uedu[1].checked == false&&uedu[2].checked == false&&uedu[3].checked == false){
        window.alert("Please select your qualification");
    }
    else{
        window.alert("data submit sucessfully");
        document.getElementById("btn").focus();
    }
}