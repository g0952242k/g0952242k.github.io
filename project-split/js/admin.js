
function adminLog() {
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
        if(user == 'admin'){
             if(pass == 'admin'){
             	    document.getElementById('adlogform').style.display = "none";
             	    document.getElementById('adminHome').style.display = "inline";

             }else{
           			
             }

        } 
}


function adOver() {
	document.getElementById('adminHome').style.display = "none";
	document.getElementById('overcrowded').style.display = "inline";
}

function adBackHome() {
	document.getElementById('adminHome').style.display = "inline";
	document.getElementById('overcrowded').style.display = "none";
}