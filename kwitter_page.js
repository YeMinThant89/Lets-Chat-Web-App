//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB6_FaLbKwNIXt1OFp6kFNVy4hygkQkQYg",
      authDomain: "lets-chat-web-app-f19c8.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-f19c8-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-f19c8",
      storageBucket: "lets-chat-web-app-f19c8.appspot.com",
      messagingSenderId: "994867205180",
      appId: "1:994867205180:web:58df7d1b2e2be13538df39"
    };
    
    firebase.initializeApp(firebaseConfig);

function send()
{
      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}