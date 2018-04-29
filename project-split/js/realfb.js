window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '283104242072222', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};










// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src ="https://connect.facebook.net/en_US/sdk.js";
    
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
            document.getElementById('coco').style.display = "inline";
            document.getElementById('adlog').style.display = "none";
            document.getElementById('googlelog').style.display = "none";
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
            
        }
    }, {scope: 'email'});
}

// Fetch the user profile data from facebook
function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
        document.getElementById('fbLink').setAttribute("onclick","fbLogout()");
        document.getElementById('fbLink').innerHTML = 'Logout from Facebook';
        document.getElementById('userData').innerHTML = '<p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p>`<p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>Locale:</b> '+response.locale+'</p><p><b>Picture:</b> <img src="'+response.picture.data.url+'"/></p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">click to view profile</a></p>';
        document.getElementById('passName').innerHTML = 'Hi,'+response.first_name +'!'+'<p> <img src="'+response.picture.data.url+'"/></p>';
        document.getElementById('userbaba').innerHTML = '<p> <img src="'+response.picture.data.url+'"/></p>';
         saveUserData(response);
    });
}
function saveUserData(userData){
    $.post('php/userData.php', {oauth_provider:'facebook',userData: JSON.stringify(userData)}, function(data){ return true; });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="images/fbsignin.png"/>';
        document.getElementById('userData').innerHTML = '';
        document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
        document.getElementById('coco').style.display = "none";
        document.getElementById('adlog').style.display = "inline";
        document.getElementById('googlelog').style.display = "inline
        ";
    });
}


function etaSwitch() {
    document.getElementById('coco').style.display = "none";
    document.getElementById('eta').style.display = "inline";
}

function etaSwitch2() {
    document.getElementById('coco').style.display = "inline";
    document.getElementById('eta').style.display = "none";
}
