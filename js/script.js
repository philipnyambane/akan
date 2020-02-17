function akanName() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var gender = document.getElementById("gender").checked;
    var day = document.getElementById("birthdate").value;
    var date= new Date(day).getDay();
    //alert(day);
    

    if(lastname && day && firstname !== null){
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"][date];

        if (gender == true){
           // alert(date);
            var names = ["Kwasi","Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
            var akanName = names[date];
        }else {
            var names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            var akanName = names[date];
        }
        alert("Hello, Your Akan Name is " + akanName + ". You Were Born On a " + days);
    }else{
        alert("You Must Fill All Fields");
    }
} 
    