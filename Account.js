function register() {
    var UserArray = localStorage["user"] ? JSON.parse(localStorage["user"]) : [] ;

    var username = document.getElementById("rum").value;
    var Nemail = document.getElementById("re").value;
    var password = document.getElementById("rp").value;

    if(username != "" && password != "" )
    {
        if(UserArray.indexOf(username) != -1)
        {
            alert(username + " is already register try another username.");  
            return;
        }

        UserArray.push(username);

        UserArray.push(password);
        localStorage["user"]=JSON.stringify(UserArray);
        console.log(username);

        alert(username + " Thanks for the registration. \nTry to login Now.");
    }
 
    /*if (Nemail == emailArray) {
        alert(emailArray + "  already register.");
    } else {
        alert(Nemail + "  Thanks for registration. \nTry to login Now");
    }*/ 
}


function login() {
    
    var Uname = document.getElementById("lum").value;
    var Pword = document.getElementById("lp").value;
    find_user(Uname, Pword);
    /*if (Uname != usernameArray) {       
        alert("Username does not Correct."); 
        document.getElementById("lum").value = "";
    }
    else if (Pword != passwordArray){
        alert("Password does not match.");
        document.getElementById("lp").value = "";
    }
    else {
        alert(usernameArray + " You are login Now \n welcome to our website.");
    }*/ 
}


function find_user(name, password){
    var UserArray = localStorage["user"] ? JSON.parse(localStorage["user"]) : [] ;
    var Iusername = UserArray.indexOf(name);
    var validname = (document.getElementById("lum").value == "" );
    var validpass = (document.getElementById("lp").value == "" );

    if(validname)
    {
        document.getElementById("lum").value = "";
        return;
       
    }

    if(Iusername == -1)
    {
        alert("User not exist");
        document.getElementById("lum").value = "";
        return;
    }

    if(validpass)
    {
        document.getElementById("lp").value = "";
        return;
        
    }
    
    if(UserArray[Iusername + 1] != password)
    {
        alert("Password incorrect!!");
        document.getElementById("lp").value = "";
        return; 
    }
    alert(name + " You are login Now \nWelcome to our website.");
}


